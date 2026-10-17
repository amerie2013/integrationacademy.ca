"use client";

import type { ComponentType } from "react";
import { PracticeSet } from "./PracticeSet";
import { NumberSets } from "./NumberSets";
import { IntegerOps } from "./IntegerOps";
import { SignRules } from "./SignRules";
import { FractionAddSub, FractionMulDiv } from "./Fractions";
import { PowerPattern, ExponentLaws, SciNotation } from "./Powers";
import { RatioScale, PercentBar } from "./Ratios";
import { DensityZoom, LimitSteps } from "./Density";
import { PatternRule, AlgebraTiles, DistributiveArea, BalanceSolver, EquationGraph, FormulaRearrange } from "./Algebra";
import { CodeTracer } from "./CodeTracer";
import { SlopeExplorer, RelationTypes, LinePair, TwoPointLine, InequalityRegion, MotionStory } from "./Lines";
import { PiPolygon, TriangleAngles, CircleAngles, UnitLadder, Pythagoras, ScaleShape, RectOptimizer, SolidVolume, NetExplorer } from "./Measure";
import { SamplingLab, MisleadingGraph, StatsExplorer, HistogramBins, ScatterFit, ModelFit } from "./Data";
import { PlanCompare, InflationCalc, ValueTimeline, InterestGrowth, CreditPayoff, BudgetBuilder } from "./Finance";

// Registry of named lesson widgets. A lesson block { type: "widget", widget, props }
// renders REGISTRY[widget] with its props. Keep names stable — they are stored in the DB.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const REGISTRY: Record<string, ComponentType<any>> = {
  practice: PracticeSet,
  numberSets: NumberSets,
  integerOps: IntegerOps,
  signRules: SignRules,
  fractionAddSub: FractionAddSub,
  fractionMulDiv: FractionMulDiv,
  powerPattern: PowerPattern,
  exponentLaws: ExponentLaws,
  sciNotation: SciNotation,
  ratioScale: RatioScale,
  percentBar: PercentBar,
  densityZoom: DensityZoom,
  limitSteps: LimitSteps,
  patternRule: PatternRule,
  algebraTiles: AlgebraTiles,
  distributiveArea: DistributiveArea,
  balanceSolver: BalanceSolver,
  equationGraph: EquationGraph,
  formulaRearrange: FormulaRearrange,
  codeTracer: CodeTracer,
  slopeExplorer: SlopeExplorer,
  relationTypes: RelationTypes,
  linePair: LinePair,
  twoPointLine: TwoPointLine,
  inequalityRegion: InequalityRegion,
  motionStory: MotionStory,
  piPolygon: PiPolygon,
  triangleAngles: TriangleAngles,
  circleAngles: CircleAngles,
  unitLadder: UnitLadder,
  pythagoras: Pythagoras,
  scaleShape: ScaleShape,
  rectOptimizer: RectOptimizer,
  solidVolume: SolidVolume,
  netExplorer: NetExplorer,
  samplingLab: SamplingLab,
  misleadingGraph: MisleadingGraph,
  statsExplorer: StatsExplorer,
  histogramBins: HistogramBins,
  scatterFit: ScatterFit,
  modelFit: ModelFit,
  planCompare: PlanCompare,
  inflationCalc: InflationCalc,
  valueTimeline: ValueTimeline,
  interestGrowth: InterestGrowth,
  creditPayoff: CreditPayoff,
  budgetBuilder: BudgetBuilder,
};

export const WIDGET_NAMES = Object.keys(REGISTRY);

export function LessonWidget({ widget, props }: { widget: string; props?: Record<string, unknown> }) {
  const W = REGISTRY[widget];
  if (!W) return <p style={{ color: "#b91c1c", fontSize: 14 }}>Unknown widget “{widget}”.</p>;
  return <W {...(props ?? {})} />;
}
