import { useState } from "react";

export interface ConversionResult {
  originalEquation: string;
  substitutionFormulas: string[];
  steps: string[];
  transformedEquation: string;
  simplifiedEquation: string;
}

// Global math instance to prevent re-importing the massive library
let mathInstance: any = null;

async function getMath() {
  if (!mathInstance) {
    mathInstance = await import("mathjs");
  }
  return mathInstance;
}

// Try simplification with mathjs rules safely
async function trySimplify(expr: string): Promise<string> {
  // Prevent freezing on very long mathematical strings
  if (expr.length > 200) {
    return expr;
  }

  try {
    const math = await getMath();

    // We try to use math.rationalize if available for polynomial expansion
    if (typeof (math as any).rationalize === "function") {
      try {
        const expanded = (math as any).rationalize(expr, {}, true).toString();

        // rationalize might return a weird object if it fails, or it might succeed
        if (
          typeof expanded === "string" &&
          !expanded.includes("[object") &&
          expanded.length < expr.length * 3
        ) {
          // Apply simplify to the rationalized form for cleaner results
          const simplifiedNode = math.simplify(math.parse(expanded));
          return simplifiedNode.toString();
        }
      } catch (e) {
        // ignore rationalize errors
      }
    }

    const node = math.parse(expr);
    const simplified = math.simplify(node);
    return simplified.toString();
  } catch {
    return expr;
  }
}

// Detect equation type
function detectEquationType(eq: string): {
  type: string;
  nameUz: string;
  nameEn: string;
} {
  const normalized = eq.replace(/\s/g, "").toLowerCase();

  // Ellipse: x^2/a^2 + y^2/b^2 = 1
  if (
    normalized.match(/x\^2/) &&
    normalized.match(/y\^2/) &&
    normalized.includes("+") &&
    normalized.includes("/") &&
    normalized.match(/=\s*1$/)
  ) {
    return { type: "ellipse", nameUz: "Ellips", nameEn: "Ellipse" };
  }

  // Hyperbola: x^2/a^2 - y^2/b^2 = 1
  if (
    normalized.match(/x\^2/) &&
    normalized.match(/y\^2/) &&
    normalized.includes("-") &&
    normalized.includes("/") &&
    normalized.match(/=\s*1$/)
  ) {
    return { type: "hyperbola", nameUz: "Giperbola", nameEn: "Hyperbola" };
  }

  // Circle: x^2 + y^2 = r^2 or x^2 + y^2 = number
  if (
    normalized.match(/x\^2\+y\^2=/) ||
    normalized.match(/x\^2\s*\+\s*y\^2\s*=/)
  ) {
    return { type: "circle", nameUz: "Aylana", nameEn: "Circle" };
  }

  // Parabola: y = x^2 or y^2 = 4ax or y = ax^2+bx+c
  if (normalized.match(/y\s*=.*x\^2/) || normalized.match(/y\^2\s*=/)) {
    return { type: "parabola", nameUz: "Parabola", nameEn: "Parabola" };
  }

  // Linear: y = kx + b
  if (
    normalized.match(/y\s*=/) &&
    !normalized.includes("^") &&
    !normalized.includes("sin") &&
    !normalized.includes("cos") &&
    !normalized.includes("tan") &&
    !normalized.includes("e^")
  ) {
    return {
      type: "linear",
      nameUz: "Toʻgʻri chiziq",
      nameEn: "Straight Line",
    };
  }

  // Trigonometric
  if (
    normalized.includes("sin") ||
    normalized.includes("cos") ||
    normalized.includes("tan")
  ) {
    return {
      type: "trigonometric",
      nameUz: "Trigonometrik egri chiziq",
      nameEn: "Trigonometric Curve",
    };
  }

  // Exponential
  if (normalized.includes("e^") || normalized.includes("exp")) {
    return {
      type: "exponential",
      nameUz: "Eksponensial egri chiziq",
      nameEn: "Exponential Curve",
    };
  }

  return {
    type: "general",
    nameUz: "Umumiy egri chiziq",
    nameEn: "General Curve",
  };
}

// Normalize equation input
function normalizeInput(eq: string): string {
  let result = eq.trim();
  // Replace ^ with ** for mathjs if needed
  // Handle implicit multiplication: 2x -> 2*x, ax -> a*x
  result = result.replace(/(\d)([a-zA-Z])/g, "$1*$2");
  // Handle )( -> )*(
  result = result.replace(/\)\(/g, ")*(");
  // Handle )(x -> )*(x
  result = result.replace(/\)([a-zA-Z])/g, ")*$1");
  // Handle x( -> x*(
  result = result.replace(/([a-zA-Z])\(/g, "$1*(");
  return result;
}

// Perform algebraic substitution and simplification for well-known canonical forms
function convertCanonical(
  equation: string,
  eqType: string,
): { transformed: string; simplified: string; extraSteps: string[] } | null {
  const normalized = equation.replace(/\s/g, "");

  // Helper to safely evaluate powers like 4^2
  const safeEval = (str: string) => {
    try {
      if (str.includes("^")) {
        const parts = str.split("^");
        return Math.pow(parseFloat(parts[0]), parseFloat(parts[1]));
      }
      return parseFloat(str);
    } catch {
      return str;
    }
  };

  // ===== ELLIPSE: x^2/a^2 + y^2/b^2 = 1 =====
  if (eqType === "ellipse") {
    // Matches x^2/16 + y^2/9 = 1 OR x^2/4^2 + y^2/3^2 = 1
    const match = normalized.match(
      /x\^2\/([a-zA-Z0-9.\^]+)\s*\+\s*y\^2\/([a-zA-Z0-9.\^]+)\s*=\s*1/,
    );
    if (match) {
      const a2 = safeEval(match[1]);
      const b2 = safeEval(match[2]);
      const transformed = `(z + z̄)² / (4·${a2}) + (z - z̄)² / (-4·${b2}) = 1`;
      const simplified = `(z + z̄)² / (4·${a2}) - (z - z̄)² / (4·${b2}) = 1`;
      return {
        transformed,
        simplified,
        extraSteps: [
          `x = (z + z̄)/2 almashtiramiz: x² = ((z + z̄)/2)² = (z + z̄)²/4`,
          `y = (z - z̄)/(2i) almashtiramiz: y² = ((z - z̄)/(2i))² = (z - z̄)²/(-4)`,
          `x²/${a2} + y²/${b2} = 1 → (z + z̄)²/(4·${a2}) + (z - z̄)²/(-4·${b2}) = 1`,
          `Soddalashtiramiz: (z + z̄)²/(4·${a2}) - (z - z̄)²/(4·${b2}) = 1`,
        ],
      };
    }
  }

  // ===== CIRCLE: x^2 + y^2 = R^2 =====
  if (eqType === "circle") {
    const match = normalized.match(/x\^2\s*\+\s*y\^2\s*=\s*([a-zA-Z0-9.\^]+)/);
    if (match) {
      const r2 = safeEval(match[1]);
      const transformed = `(z + z̄)²/4 + (z - z̄)²/(-4) = ${r2}`;
      const simplified = `z·z̄ = ${r2}`;
      return {
        transformed,
        simplified,
        extraSteps: [
          `x² = ((z + z̄)/2)² = (z + z̄)²/4`,
          `y² = ((z - z̄)/(2i))² = (z - z̄)²/(-4) = -(z - z̄)²/4`,
          `x² + y² = (z + z̄)²/4 - (z - z̄)²/4`,
          `= [z² + 2zz̄ + z̄² - z² + 2zz̄ - z̄²] / 4`,
          `= 4zz̄/4 = zz̄`,
          `Demak: z·z̄ = ${r2}   yoki   |z|² = ${r2}`,
        ],
      };
    }
  }

  // ===== HYPERBOLA: x^2/a^2 - y^2/b^2 = 1 =====
  if (eqType === "hyperbola") {
    const match = normalized.match(
      /x\^2\/([a-zA-Z0-9.\^]+)\s*\-\s*y\^2\/([a-zA-Z0-9.\^]+)\s*=\s*1/,
    );
    if (match) {
      const a2 = safeEval(match[1]);
      const b2 = safeEval(match[2]);
      const transformed = `(z + z̄)²/(4·${a2}) - (z - z̄)²/(-4·${b2}) = 1`;
      const simplified = `(z + z̄)²/(4·${a2}) + (z - z̄)²/(4·${b2}) = 1`;
      return {
        transformed,
        simplified,
        extraSteps: [
          `x² = (z + z̄)²/4,  y² = (z - z̄)²/(-4)`,
          `x²/${a2} - y²/${b2} = (z + z̄)²/(4·${a2}) - (z - z̄)²/(-4·${b2})`,
          `= (z + z̄)²/(4·${a2}) + (z - z̄)²/(4·${b2})`,
          `Demak: (z + z̄)²/(4·${a2}) + (z - z̄)²/(4·${b2}) = 1`,
        ],
      };
    }
  }

  return null;
}

// Generic substitution for any equation
async function convertGeneric(equation: string): Promise<{
  transformed: string;
  simplified: string;
  extraSteps: string[];
}> {
  const parts = equation.split("=");
  const leftSide = parts[0].trim();
  const rightSide = parts[1].trim();

  const isYequalsFx = leftSide === "y" || leftSide === "Y";
  const isFxEqualsY = rightSide === "y" || rightSide === "Y";

  let transformedLeft: string;
  let transformedRight: string;
  const extraSteps: string[] = [];

  // Protect against overly massive equations to avoid UI freeze
  if (equation.length > 300) {
    extraSteps.push(
      `⚠️ Tenglama juda murakkab, faqat to'g'ridan-to'g'ri almashtirish bajarildi.`,
    );
    transformedLeft = leftSide
      .replace(/\bx\b/g, "((z+z̄)/2)")
      .replace(/\by\b/g, "((z-z̄)/2i)");
    transformedRight = rightSide
      .replace(/\bx\b/g, "((z+z̄)/2)")
      .replace(/\by\b/g, "((z-z̄)/2i)");
    return {
      transformed: `${transformedLeft} = ${transformedRight}`,
      simplified: `${transformedLeft} = ${transformedRight}`,
      extraSteps,
    };
  }

  if (isYequalsFx) {
    // y = f(x) form
    const fOfX = rightSide;
    const fOfZ = fOfX
      .replace(/\bx\b/g, "((z+z̄)/2)")
      .replace(/\by\b/g, "((z-z̄)/2i)");
    transformedLeft = "(z-z̄)/(2i)";
    transformedRight = fOfZ;
    extraSteps.push(
      `y = f(x) koʻrinishida: chap tomon y → (z - z̄)/(2i)`,
      `Oʻng tomondagi x → (z + z̄)/2 almashtiriladi`,
      `f(x) = ${fOfX} → f((z + z̄)/2) = ${fOfZ}`,
    );
  } else if (isFxEqualsY) {
    // f(x) = y form
    const fOfX = leftSide;
    const fOfZ = fOfX
      .replace(/\bx\b/g, "((z+z̄)/2)")
      .replace(/\by\b/g, "((z-z̄)/2i)");
    transformedLeft = fOfZ;
    transformedRight = "(z-z̄)/(2i)";
    extraSteps.push(
      `f(x) = y koʻrinishida: oʻng tomon y → (z - z̄)/(2i)`,
      `Chap tomondagi x → (z + z̄)/2 almashtiriladi`,
    );
  } else {
    // General implicit form f(x,y) = g(x,y)
    transformedLeft = leftSide
      .replace(/\bx\b/g, "((z+z̄)/2)")
      .replace(/\by\b/g, "((z-z̄)/2i)");
    transformedRight = rightSide
      .replace(/\bx\b/g, "((z+z̄)/2)")
      .replace(/\by\b/g, "((z-z̄)/2i)");
    extraSteps.push(
      `Har ikkala tomonda x → (z + z̄)/2 va y → (z - z̄)/(2i) almashtiriladi`,
      `Chap tomon: ${leftSide} → ${transformedLeft}`,
      `Oʻng tomon: ${rightSide} → ${transformedRight}`,
    );
  }

  // Pre-expand squares so mathjs can simplify them nicely
  const expandSquares = (expr: string) => {
    let res = expr;
    // Handle ((z+z̄)/2)^2 WITH SPACES OR WITHOUT
    res = res.replace(
      /\(\(\(?\s*z\s*\+\s*z̄\s*\)?\)\s*\/\s*2\s*\)\^2/g,
      "((z^2 + 2*z*z̄ + z̄^2)/4)",
    );
    // Handle ((z-z̄)/(2i))^2 OR ((z-z̄)/2i)^2 WITH SPACES OR WITHOUT
    res = res.replace(
      /\(\(\(?\s*z\s*\-\s*z̄\s*\)?\)\s*\/\s*\(\s*2i\s*\)\s*\)\^2/g,
      "((z^2 - 2*z*z̄ + z̄^2)/-4)",
    );
    res = res.replace(
      /\(\(\(?\s*z\s*\-\s*z̄\s*\)?\)\s*\/\s*2i\s*\)\^2/g,
      "((z^2 - 2*z*z̄ + z̄^2)/-4)",
    );
    return res;
  };

  transformedLeft = expandSquares(transformedLeft);
  transformedRight = expandSquares(transformedRight);

  const transformed = `${transformedLeft} = ${transformedRight}`;

  // Try to simplify safely
  let simplified = transformed;
  try {
    const normalizedLeft = normalizeInput(
      transformedLeft.replace(/z̄/g, "zc").replace(/2i/g, "(2*i)"),
    );
    const normalizedRight = normalizeInput(
      transformedRight.replace(/z̄/g, "zc").replace(/2i/g, "(2*i)"),
    );

    const simplifiedLeft = (await trySimplify(normalizedLeft))
      .replace(/zc/g, "z̄")
      .replace(/\* i/g, "i")
      .replace(/i \*/g, "i*");
    const simplifiedRight = (await trySimplify(normalizedRight))
      .replace(/zc/g, "z̄")
      .replace(/\* i/g, "i")
      .replace(/i \*/g, "i*");

    simplified = `${simplifiedLeft} = ${simplifiedRight}`;

    if (
      simplified !== transformed &&
      simplified.length < transformed.length * 1.5
    ) {
      extraSteps.push(`Soddalashtiramiz: ${simplified}`);
    } else {
      // If "simplification" just made it a lot longer or didn't change it, keep raw
      simplified = transformed;
    }
  } catch {
    // keep raw
  }

  return { transformed, simplified, extraSteps };
}

export const useConverter = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const convertEquation = async (
    equation: string,
  ): Promise<ConversionResult | null> => {
    setLoading(true);
    setError(null);

    try {
      // Validate
      if (!equation.includes("=")) {
        throw new Error('Tenglama "=" belgisini oʻz ichiga olishi kerak');
      }

      // Start prefetching mathjs in the background to speed up generic conversion
      getMath();

      const eqType = detectEquationType(equation);

      const substitutionFormulas = [
        "z = x + iy  (kompleks son)",
        "z̄ = x - iy  (qoʻshma kompleks son)",
        "x = (z + z̄) / 2",
        "y = (z - z̄) / (2i)",
      ];

      const steps: string[] = [
        `📌 Berilgan tenglama: ${equation}`,
        `📐 Tenglama turi: ${eqType.nameUz}`,
        `🔄 z = x + iy va z̄ = x - iy oʻzgaruvchilarini aniqlaymiz`,
        `📝 x = (z + z̄)/2 va y = (z - z̄)/(2i) formulalarni topamiz`,
      ];

      // Try canonical conversion first
      const canonical = convertCanonical(equation, eqType.type);

      let transformed: string;
      let simplified: string;

      if (canonical) {
        transformed = canonical.transformed;
        simplified = canonical.simplified;
        steps.push(`⚡ Kanonik shakl uchun oʻrniga qoʻyamiz:`);
        for (const s of canonical.extraSteps) {
          steps.push(`   → ${s}`);
        }
      } else {
        // Generic conversion - this takes time to load mathjs
        const generic = await convertGeneric(equation);
        transformed = generic.transformed;
        simplified = generic.simplified;
        steps.push(`🔧 Almashtirishni bajaramiz:`);
        for (const s of generic.extraSteps) {
          steps.push(`   → ${s}`);
        }
      }

      steps.push(`✅ Natija (almashtirilgan): ${transformed}`);
      // Skip printing "simplified" step if it's explicitly the *same* output
      // Note: canonical outputs have manual simplifications
      if (simplified && simplified.trim() !== transformed.trim()) {
        steps.push(`🎯 Soddalashtirilgan koʻrinish: ${simplified}`);
      }

      setLoading(false);
      return {
        originalEquation: equation,
        substitutionFormulas,
        steps,
        transformedEquation: transformed,
        simplifiedEquation: simplified,
      };
    } catch (err: any) {
      setError(err.message || "Konvertatsiyada xatolik yuz berdi");
      setLoading(false);
      return null;
    }
  };

  return { convertEquation, loading, error };
};
