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
}) {
  const fn = useMemo(() => safeCompile(expr), [expr]);
  const hasParam = param.trim().length > 0;

  return (
    <FunctionGraph
      fn={(x, a) => fn(hasParam ? { x, [param]: a } : { x })}
      label={caption || `y = ${expr}`}
      xMin={xMin}
      xMax={xMax}
      yMin={yMin}
      yMax={yMax}
      paramName={param || "a"}
      paramMin={paramMin}
      paramMax={paramMax}
      paramInit={paramInit}
      hideSlider={!hasParam}
    />
  );
}
