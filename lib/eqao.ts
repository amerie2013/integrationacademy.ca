// EQAO Grade 9 Assessment of Mathematics — shared model.
// Phase 1 powers strand-by-strand practice; the same types/tags feed the
// Phase 2 two-session adaptive simulation (see supabase migration 2026-06-22_eqao).
import type { QKind, Question } from "./quiz";

export type Strand =
  | "number"
  | "algebra"
  | "data"
  | "geometry_measurement"
  | "financial_literacy";

export type Difficulty = "easy" | "medium" | "hard";

// A figure attached to a question: either inline SVG we generate, or a
// reference to the interactive /tools/graph calculator (Desmos equivalent).
export type Figure =
  | { type: "svg"; svg: string }
  | { type: "graph"; data: any }
  | null;

export type EqaoQuestion = {
  id: string;
  strand: Strand;
  difficulty: Difficulty;
  kind: QKind;
  prompt: string;
  figure: Figure;
  choices?: any;
  answer?: any;
  tolerance?: number | null;
  points: number;
  feedback?: string | null;
};

// Strand metadata: official EQAO Grade 9 strands, in assessment order.
// `weight` ≈ share of the operational questions, used to size practice sets and
// (Phase 2) the assessment blueprint.
export const STRANDS: { id: Strand; label: string; short: string; icon: string; weight: number; blurb: string }[] = [
  { id: "number", label: "Number", short: "Number", icon: "①", weight: 0.15, blurb: "Powers, rates, ratios and proportional reasoning." },
  { id: "algebra", label: "Algebra", short: "Algebra", icon: "𝑥", weight: 0.30, blurb: "Expressions, linear relations, equations and coding." },
  { id: "data", label: "Data", short: "Data", icon: "▥", weight: 0.15, blurb: "Collecting, displaying and analysing data; scatter plots." },
  { id: "geometry_measurement", label: "Geometry & Measurement", short: "Geometry", icon: "△", weight: 0.20, blurb: "Perimeter, area, surface area, volume and the Pythagorean theorem." },
  { id: "financial_literacy", label: "Financial Literacy", short: "Finance", icon: "$", weight: 0.20, blurb: "Budgeting, interest, and comparing financial options." },
];

export function strandMeta(id: string) {
  return STRANDS.find((s) => s.id === id);
}

// EQAO-facing item-type labels (maps our QKind to the platform's wording).
export const ITEM_TYPE_LABEL: Partial<Record<QKind, string>> = {
  multiple_choice: "Single-selection",
  multiple_select: "Multiple-selection",
  numeric: "Key-entry",
  math_expr: "Key-entry",
  short_answer: "Key-entry",
  fill_blank: "Key-entry",
  matching: "Matching",
  ordering: "Ordering",
  true_false: "True / False",
};

// Adapt a stored eqao_questions row into the `Question` shape so we can reuse
// gradeAttempt / isCorrect from lib/quiz.ts unchanged.
export function toQuestion(row: EqaoQuestion, position: number): Question {
  return {
    id: row.id,
    kind: row.kind,
    prompt: row.prompt,
    choices: row.choices ?? undefined,
    answer: row.answer,
    tolerance: row.tolerance ?? null,
    points: row.points ?? 1,
    feedback: row.feedback ?? null,
    position,
  };
}

// ── Phase 2 stub: map a percent to an EQAO achievement level 1–4. ──
// Real EQAO levels come from scaled scores; this is a transparent placeholder
// the simulation can refine later.
export function percentToLevel(percent: number): 1 | 2 | 3 | 4 {
  if (percent >= 80) return 4;
  if (percent >= 60) return 3; // Level 3 = provincial standard
  if (percent >= 40) return 2;
  return 1;
}
