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
  if (expr.length > 500) return expr;
  // Skip if expression contains `i` as a standalone token — mathjs treats
  // it as imaginary unit and rationalizes it, flipping apparent signs.
  if (/\bi\b/.test(expr)) return expr;
  try {
    const math = await getMath();
    const simplified = math.simplify(math.parse(expr));
    return simplified.toString();
  } catch {
    return expr;
  }
}

const expandSquares = (expr: string) => {
  let res = expr;

  // --- xy cross products ---
  res = res.replace(/\(\(z\+z̄\)\/2\)\(\(z\-z̄\)\/2i\)/g, "((z^2 - z̄^2)/(4i))");
  res = res.replace(/\(\(z\+z̄\)\/2\)\*\(\(z\-z̄\)\/2i\)/g, "((z^2 - z̄^2)/(4i))");
  res = res.replace(/\(\(z\-z̄\)\/2i\)\(\(z\+z̄\)\/2\)/g, "((z^2 - z̄^2)/(4i))");
  res = res.replace(/\(\(z\-z̄\)\/2i\)\*\(\(z\+z̄\)\/2\)/g, "((z^2 - z̄^2)/(4i))");

  // --- x-side powers: ((z+z̄)/2)^n — compact (z+z̄)^n / 2^n, no full binomial ---
  res = res.replace(
    /\(\(z\+z̄\)\/2\)\^(\d+)/g,
    (_, n) => `((z+z̄)^${n}/${Math.pow(2, Number(n))})`,
  );

  // --- y-side powers: ((z-z̄)/2i)^n — even powers only (compact forms) ---
  // Odd powers leave imaginary denominator; skip those.
  // ^2: (2i)^2 = -4
  res = res.replace(/\(\(z\-z̄\)\/\(2i\)\)\^2/g, "((z-z̄)^2/(-4))");
  res = res.replace(/\(\(z\-z̄\)\/2i\)\^2/g, "((z-z̄)^2/(-4))");
  // ^4: (2i)^4 = 16
  res = res.replace(/\(\(z\-z̄\)\/\(2i\)\)\^4/g, "((z-z̄)^4/16)");
  res = res.replace(/\(\(z\-z̄\)\/2i\)\^4/g, "((z-z̄)^4/16)");

  // Do NOT add ^3 or ^5 for y-side — those have (2i)^odd = imaginary denominator.

  return res;
};

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

const MATHJS_FUNC_NAMES = [
  "sin",
  "cos",
  "tan",
  "exp",
  "log",
  "sqrt",
  "ln",
  "asin",
  "acos",
  "atan",
] as const;

// Normalize equation input for mathjs.parse (implicit multiply), without breaking sin(/cos(/tan( etc.
function normalizeInput(eq: string): string {
  let result = eq.trim();
  // Handle implicit multiplication: 2x -> 2*x, ax -> a*x
  result = result.replace(/(\d)([a-zA-Z])/g, "$1*$2");
  result = result.replace(/(\d)\(/g, "$1*(");
  // Handle )( -> )*(
  result = result.replace(/\)\(/g, ")*(");
  // Handle )(x -> )*(x
  result = result.replace(/\)([a-zA-Z])/g, ")*$1");
  // x(y+1) -> x*(y+1), but NOT sin(y) / cos(y) — those need letter+( without * before (
  result = result.replace(/([a-zA-Z])\(/g, (full, letter, offset, str) => {
    const i = offset as number;
    for (const fname of MATHJS_FUNC_NAMES) {
      const n = fname.length;
      if (i >= n - 1) {
        const chunk = str.slice(i - n + 1, i + 2);
        if (chunk.toLowerCase() === `${fname}(`) {
          return full;
        }
      }
    }
    return `${letter}*(`;
  });
  return result;
}

/** Readable imaginary unit: 8 * i → 8i; (qatorlarni buzmasdan, faqat son * i) */
function prettifyImaginaryInExpr(s: string): string {
  return s
    .replace(/\(\s*(-?\d+)\s*\*\s*i\s*\)/g, "($1i)")
    .replace(/(^|[^\d.])(-?\d+)\s*\*\s*i\b/g, "$1$2i");
}

/**
 * Chiqish matnini darslikdagi konventsiyaga yaqinlashtiramiz: (z+z̄)/2, (z-z̄)/(2i).
 * mathjs ba'zan (z - z̄) / 2 / i ko‘rsatadi — bu ham ayni (z-z̄)/(2i) ma'nosi.
 */
function toDisplayNotation(s: string): string {
  let out = prettifyImaginaryInExpr(s);

  out = out.replace(
    /\(\s*z\s*-\s*z̄\s*\)\s*\/\s*\(\s*2\s*\*\s*i\s*\)/g,
    "(z-z̄)/(2i)",
  );
  out = out.replace(/\(\s*z\s*-\s*z̄\s*\)\s*\/\s*2\s*\/\s*i\b/g, "(z-z̄)/(2i)");

  out = out.replace(/\(\(z\+z̄\)\/2\)/g, "(z+z̄)/2");
  out = out.replace(/\(\(z-z̄\)\/2i\)/g, "(z-z̄)/(2i)");

  out = out.replace(/\(\s*z\s*\+\s*z̄\s*\)\s*\/\s*2\b/g, "(z+z̄)/2");

  return out;
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

  const replaceVars = (expr: string) => {
    let res = "";
    let i = 0;
    while (i < expr.length) {
      if (expr.substring(i, i+3) === 'exp') {
        res += 'exp';
        i += 3;
      } else if (expr.substring(i, i+3) === 'sin') {
        res += 'sin';
        i += 3;
      } else if (expr.substring(i, i+3) === 'cos') {
        res += 'cos';
        i += 3;
      } else if (expr.substring(i, i+3) === 'tan') {
        res += 'tan';
        i += 3;
      } else if (expr[i] === 'x') {
        res += "((z+z̄)/2)";
        i++;
      } else if (expr[i] === 'y') {
        res += "((z-z̄)/2i)";
        i++;
      } else {
        res += expr[i];
        i++;
      }
    }
    return res;
  };

  // Protect against overly massive equations to avoid UI freeze
  if (equation.length > 300) {
    extraSteps.push(
      `⚠️ Tenglama juda murakkab, faqat to'g'ridan-to'g'ri almashtirish bajarildi.`,
    );
    transformedLeft = replaceVars(leftSide);
    transformedRight = replaceVars(rightSide);
    const raw = `${transformedLeft} = ${transformedRight}`;
    return {
      transformed: toDisplayNotation(raw),
      simplified: toDisplayNotation(raw),
      extraSteps,
    };
  }

  if (isYequalsFx) {
    // y = f(x) form
    const fOfX = rightSide;
    const fOfZ = replaceVars(fOfX);
    transformedLeft = "((z-z̄)/2i)";
    transformedRight = fOfZ;
    extraSteps.push(
      `y = f(x) koʻrinishida: chap tomon y → (z - z̄)/(2i)`,
      `Oʻng tomondagi x → (z + z̄)/2 almashtiriladi`,
      `f(x) = ${fOfX} → f((z + z̄)/2) = ${fOfZ}`,
    );
  } else if (isFxEqualsY) {
    // f(x) = y form
    const fOfX = leftSide;
    const fOfZ = replaceVars(fOfX);
    transformedLeft = fOfZ;
    transformedRight = "((z-z̄)/2i)";
    extraSteps.push(
      `f(x) = y koʻrinishida: oʻng tomon y → (z - z̄)/(2i)`,
      `Chap tomondagi x → (z + z̄)/2 almashtiriladi`,
    );
  } else {
    // General implicit form f(x,y) = g(x,y)
    transformedLeft = replaceVars(leftSide);
    transformedRight = replaceVars(rightSide);
    extraSteps.push(
      `Har ikkala tomonda x → (z + z̄)/2 va y → (z - z̄)/(2i) almashtiriladi`,
      `Chap tomon: ${leftSide} → ${transformedLeft}`,
      `Oʻng tomon: ${rightSide} → ${transformedRight}`,
    );
  }

  const canonicalLeft = transformedLeft;
  const canonicalRight = transformedRight;

  // Pre-expand squares so mathjs can simplify them nicely
  const preExpandRight = transformedRight;
  const preExpandLeft = transformedLeft;
  transformedLeft = expandSquares(transformedLeft);
  transformedRight = expandSquares(transformedRight);

  // Add an expansion step if expandSquares actually changed the expression
  if (transformedRight !== preExpandRight) {
    extraSteps.push(`📐 Koʼpaytma ochamiz: ${preExpandRight} → ${transformedRight}`);
  } else if (transformedLeft !== preExpandLeft) {
    extraSteps.push(`📐 Koʼpaytma ochamiz: ${preExpandLeft} → ${transformedLeft}`);
  }

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

    const simplifiedLeft = prettifyImaginaryInExpr(
      (await trySimplify(normalizedLeft)).replace(/zc/g, "z̄"),
    );
    const simplifiedRight = prettifyImaginaryInExpr(
      (await trySimplify(normalizedRight)).replace(/zc/g, "z̄"),
    );

    // Preserve canonical (z-z̄)/2i form — do not let mathjs rewrite it
    const finalLeft = isYequalsFx ? canonicalLeft : simplifiedLeft;
    const finalRight = isFxEqualsY ? canonicalRight : simplifiedRight;
    simplified = `${finalLeft} = ${finalRight}`;

    if (
      simplified !== transformed &&
      simplified.length < transformed.length
    ) {
      extraSteps.push(`Soddalashtiramiz: ${simplified}`);
    } else {
      // If "simplification" just made it a lot longer or didn't change it, keep raw
      simplified = transformed;
    }
  } catch {
    // keep raw
  }

  return {
    transformed: toDisplayNotation(transformed),
    simplified: toDisplayNotation(simplified),
    extraSteps: extraSteps.map(toDisplayNotation),
  };
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

