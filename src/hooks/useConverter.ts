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
      
      // Primary: Function form y = f(x)
      // Result form: (z - z̄)/(2i) = f((z + z̄)/2)
      
      const substitutionFormulas = [
        "x = (z + z̄) / 2",
        "y = (z - z̄) / (2i)",
        "Goal form: (z - z̄) / (2i) = f((z + z̄) / 2)"
      ];

      const steps = [
        "1. Identify the Cartesian equation: " + equation,
        "2. Recognize the function form y = f(x).",
        "3. Substitute y = (z - z̄) / (2i).",
        "4. Substitute x = (z + z̄) / 2 inside the function f(x).",
        "5. Final result in terms of z and z̄ (complex conjugate)."
      ];

      let transformed = "";
      
      // Check for y = f(x) form
      const eqNoSpace = equation.replace(/\s/g, '');
      if (eqNoSpace.includes('y=')) {
        const parts = equation.split('=');
        // Find the part that contains 'y'
        let yPart = "";
        let fPart = "";
        if (parts[0].trim() === 'y') {
          yPart = parts[0].trim();
          fPart = parts[1].trim();
        } else if (parts[1].trim() === 'y') {
          yPart = parts[1].trim();
          fPart = parts[0].trim();
        }

        if (yPart === 'y') {
          // Transform f(x)
          const transformedF = fPart.replace(/x/g, '((z + z̄)/2)');
          transformed = `(z - z̄)/(2i) = ${transformedF}`;
        } else {
          // Fallback if y is embedded (e.g., y - x^2 = 0)
          transformed = equation
            .replace(/y/g, '((z - z̄)/(2i))')
            .replace(/x/g, '((z + z̄)/2)');
        }
      } else {
        // Handle conic forms or general second-order curves
        // Generic substitution for non-function forms
        transformed = equation
          .replace(/y/g, '((z - z̄)/(2i))')
          .replace(/x/g, '((z + z̄)/2)');
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
