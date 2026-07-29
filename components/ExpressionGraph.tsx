"use client";

import { useMemo } from "react";
import { FunctionGraph } from "./FunctionGraph";
import { safeCompile } from "../lib/mathExpr";

/** Plots an authored expression string (e.g. "a*sin(x)") with an optional slider. */
export function ExpressionGraph({
  expr,
  param,
  xMin,
  xMax,
  yMin,
  yMax,
  paramMin = -3,
  paramMax = 3,
  paramInit = 1,
  caption,
  param2,
  param2Min = -5,
  param2Max = 5,
  param2Init = 0,
}: {
  expr: string;
  param: string;
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
  paramMin?: number;
  paramMax?: number;
  paramInit?: number;
  caption?: string;
  param2?: string;
  param2Min?: number;
  param2Max?: number;
  param2Init?: number;
}) {
  const fn = useMemo(() => safeCompile(expr), [expr]);
  const hasParam = param.trim().length > 0;
  const has2 = !!(param2 && param2.trim().length > 0);

  return (
    <FunctionGraph
      fn={(x, a, b) => {
        const scope: Record<string, number> = { x };
        if (hasParam) scope[param] = a;
        if (has2) scope[param2!] = b;
        return fn(scope);
      }}
      label={caption || `y = ${expr}`}
      equationExpr={hasParam ? expr : undefined}
      xMin={xMin}
      xMax={xMax}
      yMin={yMin}
      yMax={yMax}
      paramName={param || "a"}
      paramMin={paramMin}
      paramMax={paramMax}
      paramInit={paramInit}
      hideSlider={!hasParam}
      param2Name={has2 ? param2 : undefined}
      param2Min={param2Min}
      param2Max={param2Max}
      param2Init={param2Init}
    />
  );
}
