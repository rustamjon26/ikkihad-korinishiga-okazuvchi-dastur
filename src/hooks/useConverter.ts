import { useState } from 'react';
import * as math from 'mathjs';

interface ConversionResult {
  originalEquation: string;
  substitutionFormulas: string[];
  steps: string[];
  transformedEquation: string;
}

export const useConverter = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const convertEquation = (equation: string): ConversionResult | null => {
    setLoading(true);
    setError(null);

    try {
      // Basic validation
      if (!equation.includes('=')) {
        throw new Error('Equation must contain "=" sign');
      }

      const parts = equation.split('=');
      const leftSide = parts[0].trim();
      const rightSide = parts[1].trim();
      
      // We want to transform f(x,y) = C into f(z, z̄) = C
      // Substitution: x = (z + zc)/2, y = (z - zc)/(2i)
      // Note: zc is complex conjugate (z-bar)
      
      const substitutionFormulas = [
        "x = (z + z̄) / 2",
        "y = (z - z̄) / (2i)"
      ];

      const steps = [
        "1. Identify the Cartesian equation: " + equation,
        "2. Apply complex variable substitution: x = (z + z̄)/2 and y = (z - z̄)/(2i)",
        "3. Replace variables in the equation and perform algebraic expansion.",
        "4. Simplify the expression using complex number properties (i² = -1).",
        "5. Final result in terms of z and z̄ (z-conjugate)."
      ];

      // Symbolic conversion logic (simplified for educational purpose)
      // Since real symbolic simplification in JS is hard, we provide accurate pre-defined results for standard forms
      // and generic string replacement for others.
      
      let transformed = "";
      
      // Common forms detection
      const eqLower = equation.toLowerCase().replace(/\s/g, '');
      
      if (eqLower.match(/^x\^2\+y\^2=([0-9a-z\^]+)$/)) {
        const r2 = eqLower.split('=')[1];
        transformed = `z · z̄ = ${r2}`;
      } else if (eqLower.match(/^x\^2\/([0-9a-z\^]+)\+y\^2\/([0-9a-z\^]+)=1$/)) {
        const parts = eqLower.match(/^x\^2\/([0-9a-z\^]+)\+y\^2\/([0-9a-z\^]+)=1$/);
        const a2 = parts![1];
        const b2 = parts![2];
        transformed = `((${b2})·(z + z̄)² + (${a2})·(z - z̄)²) / (4·${a2}·${b2}) = 1`;
      } else if (eqLower.match(/^y=([0-9a-z\^]+)x\^2$/)) {
        const a = eqLower.match(/^y=([0-9a-z\^]+)x\^2$/)![1];
        transformed = `(z - z̄) = ${a}·i·(z + z̄)² / 2`;
      } else if (eqLower.match(/^x\^2\/([0-9a-z\^]+)-y\^2\/([0-9a-z\^]+)=1$/)) {
        const parts = eqLower.match(/^x\^2\/([0-9a-z\^]+)-y\^2\/([0-9a-z\^]+)=1$/);
        const a2 = parts![1];
        const b2 = parts![2];
        transformed = `((${b2})·(z + z̄)² - (${a2})·(z - z̄)²) / (4·${a2}·${b2}) = 1`;
      } else {
        // Generic substitution
        transformed = leftSide
          .replace(/x/g, '((z + z̄)/2)')
          .replace(/y/g, '((z - z̄)/(2i))') + " = " + rightSide;
      }

      setLoading(false);
      return {
        originalEquation: equation,
        substitutionFormulas,
        steps,
        transformedEquation: transformed
      };
    } catch (err: any) {
      setError(err.message || 'Failed to convert equation');
      setLoading(false);
      return null;
    }
  };

  return { convertEquation, loading, error };
};
