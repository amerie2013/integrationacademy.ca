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
import { StandardForm, SystemGraph, SubstitutionStepper, EliminationLab, SystemStory } from "./Systems";
import { MidpointLab, DistanceLab, CircleLab, TriangleLines, ShapeProver, PointLineDistance } from "./Geometry";
import { AreaModel, CommonFactor, TrinomialFinder, DecompositionLab, SpecialPatterns } from "./Polynomials";
import { DiffTable, QuadFit, ParabolaFeatures, TransformLab, StepGraph, FactoredForm, CompleteSquare, ExpCompare } from "./Quadratics";
import { ZeroProduct, SquareSolve, FormulaLab, DiscriminantLab, HeightInterval, FenceArea, LinQuad } from "./Equations";
import { SimilarLab, ShadowLab, RatioLab, SideFinder, AngleFinder, ElevationLab } from "./Trig";
import { SineDerive, CosineDerive, LawChooser, SurveyLab } from "./Laws";
import { RelationTest, NotationLab, ParentGallery, DomainRangeLab, InverseLab, FuncTransform } from "./Functions";
import { QuadForms, FormConverter, DiffLab, RevenueLab, DiscriminantK, FamilyLab, TangentLab } from "./Quadratics11";
import { PowerLadder, RationalPower, GrowthCompare, ExpTransform, ExpModel } from "./Exponential";
import { SpecialTriangles, TerminalArm, IdentityCheck, AmbiguousCase, CosineLaw, TowerLab } from "./Trig11";
import { PeriodicReader, UnitWave, WheelLab, SinTransform, KeyPointMapper, FitSinusoid, ModelLab } from "./Sinusoidal";
import { ArithLab, GeoLab, RecursiveLab, FibLab, SeriesPairs, GeoSums, PascalLab } from "./Sequences";
import { SimpleCompound, CompoundLab, PresentValueLab, AnnuityFV, AnnuityPV, AmortLab } from "./Finance11";
import { PowerLab, PolyFeatures, FactoredPoly, PowerTransform, SecantLab, TangentSlope } from "./PolyFunctions";
import { SyntheticDivide, FactorFinder, RootSolver, PolyFamily, InequalityGraph, SignChart } from "./PolyEquations";
import { ReciprocalLinear, ReciprocalQuadratic, RationalLinear, RationalSolver, RationalModel } from "./Rational";
import { RateReader, DifferenceQuotient, LimitExplorer, ContinuityLab, DerivativeBuilder } from "./Calculus1";
import { PowerRuleLab, ProductRuleLab, MotionLab, ChainRuleLab, QuotientLab, MarginalCost } from "./Calculus2";
import { MonotonicityLab, ExtremaLab, ConcavityLab, RationalSketch, CurveSketcher, OptimizationLab } from "./Calculus3";
import { SineSlopeLab, DerivativeCycle, SinusoidRuleLab, SpringLab } from "./Calculus4";
import { ExpBaseLab, LnLab, ExpRuleLab, GrowthModelLab } from "./Calculus5";
import { VectorBasics, VectorAddLab, ScalarLab, ResultantLab, ComponentsLab } from "./Vectors6";
import { CartesianLab, DotLab, ProjectionLab, Space3Lab, CrossLab, TorqueLab } from "./Vectors7";
import { LineLab, PlaneLab, LinesMeetLab, LinePlaneLab, PlanesLab } from "./Vectors8";

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
  standardForm: StandardForm,
  systemGraph: SystemGraph,
  substitutionStepper: SubstitutionStepper,
  eliminationLab: EliminationLab,
  systemStory: SystemStory,
  midpointLab: MidpointLab,
  distanceLab: DistanceLab,
  circleLab: CircleLab,
  triangleLines: TriangleLines,
  shapeProver: ShapeProver,
  pointLineDistance: PointLineDistance,
  areaModel: AreaModel,
  commonFactor: CommonFactor,
  trinomialFinder: TrinomialFinder,
  decompositionLab: DecompositionLab,
  specialPatterns: SpecialPatterns,
  diffTable: DiffTable,
  quadFit: QuadFit,
  parabolaFeatures: ParabolaFeatures,
  transformLab: TransformLab,
  stepGraph: StepGraph,
  factoredForm: FactoredForm,
  completeSquare: CompleteSquare,
  expCompare: ExpCompare,
  zeroProduct: ZeroProduct,
  squareSolve: SquareSolve,
  formulaLab: FormulaLab,
  discriminantLab: DiscriminantLab,
  heightInterval: HeightInterval,
  fenceArea: FenceArea,
  linQuad: LinQuad,
  similarLab: SimilarLab,
  shadowLab: ShadowLab,
  ratioLab: RatioLab,
  sideFinder: SideFinder,
  angleFinder: AngleFinder,
  elevationLab: ElevationLab,
  sineDerive: SineDerive,
  cosineDerive: CosineDerive,
  lawChooser: LawChooser,
  surveyLab: SurveyLab,
  relationTest: RelationTest,
  notationLab: NotationLab,
  parentGallery: ParentGallery,
  domainRangeLab: DomainRangeLab,
  inverseLab: InverseLab,
  funcTransform: FuncTransform,
  quadForms: QuadForms,
  formConverter: FormConverter,
  diffLab: DiffLab,
  revenueLab: RevenueLab,
  discriminantK: DiscriminantK,
  familyLab: FamilyLab,
  tangentLab: TangentLab,
  powerLadder: PowerLadder,
  rationalPower: RationalPower,
  growthCompare: GrowthCompare,
  expTransform: ExpTransform,
  expModel: ExpModel,
  specialTriangles: SpecialTriangles,
  terminalArm: TerminalArm,
  identityCheck: IdentityCheck,
  ambiguousCase: AmbiguousCase,
  cosineLaw: CosineLaw,
  towerLab: TowerLab,
  periodicReader: PeriodicReader,
  unitWave: UnitWave,
  wheelLab: WheelLab,
  sinTransform: SinTransform,
  keyPointMapper: KeyPointMapper,
  fitSinusoid: FitSinusoid,
  modelLab: ModelLab,
  arithLab: ArithLab,
  geoLab: GeoLab,
  recursiveLab: RecursiveLab,
  fibLab: FibLab,
  seriesPairs: SeriesPairs,
  geoSums: GeoSums,
  pascalLab: PascalLab,
  simpleCompound: SimpleCompound,
  compoundLab: CompoundLab,
  presentValueLab: PresentValueLab,
  annuityFV: AnnuityFV,
  annuityPV: AnnuityPV,
  amortLab: AmortLab,
  powerLab: PowerLab,
  polyFeatures: PolyFeatures,
  factoredPoly: FactoredPoly,
  powerTransform: PowerTransform,
  secantLab: SecantLab,
  tangentSlope: TangentSlope,
  syntheticDivide: SyntheticDivide,
  factorFinder: FactorFinder,
  rootSolver: RootSolver,
  polyFamily: PolyFamily,
  inequalityGraph: InequalityGraph,
  signChart: SignChart,
  reciprocalLinear: ReciprocalLinear,
  reciprocalQuadratic: ReciprocalQuadratic,
  rationalLinear: RationalLinear,
  rationalSolver: RationalSolver,
  rationalModel: RationalModel,
  rateReader: RateReader,
  differenceQuotient: DifferenceQuotient,
  limitExplorer: LimitExplorer,
  continuityLab: ContinuityLab,
  derivativeBuilder: DerivativeBuilder,
  powerRuleLab: PowerRuleLab,
  productRuleLab: ProductRuleLab,
  motionLab: MotionLab,
  chainRuleLab: ChainRuleLab,
  quotientLab: QuotientLab,
  marginalCost: MarginalCost,
  monotonicityLab: MonotonicityLab,
  extremaLab: ExtremaLab,
  concavityLab: ConcavityLab,
  rationalSketch: RationalSketch,
  curveSketcher: CurveSketcher,
  optimizationLab: OptimizationLab,
  sineSlopeLab: SineSlopeLab,
  derivativeCycle: DerivativeCycle,
  sinusoidRuleLab: SinusoidRuleLab,
  springLab: SpringLab,
  expBaseLab: ExpBaseLab,
  lnLab: LnLab,
  expRuleLab: ExpRuleLab,
  growthModelLab: GrowthModelLab,
  vectorBasics: VectorBasics,
  vectorAddLab: VectorAddLab,
  scalarLab: ScalarLab,
  resultantLab: ResultantLab,
  componentsLab: ComponentsLab,
  cartesianLab: CartesianLab,
  dotLab: DotLab,
  projectionLab: ProjectionLab,
  space3Lab: Space3Lab,
  crossLab: CrossLab,
  torqueLab: TorqueLab,
  lineLab: LineLab,
  planeLab: PlaneLab,
  linesMeetLab: LinesMeetLab,
  linePlaneLab: LinePlaneLab,
  planesLab: PlanesLab,
};

export const WIDGET_NAMES = Object.keys(REGISTRY);

export function LessonWidget({ widget, props }: { widget: string; props?: Record<string, unknown> }) {
  const W = REGISTRY[widget];
  if (!W) return <p style={{ color: "#b91c1c", fontSize: 14 }}>Unknown widget “{widget}”.</p>;
  return <W {...(props ?? {})} />;
}
