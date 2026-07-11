// Quiz question types, defaults, and auto-grading.
import { exprEquivalent } from "./mathcheck";

export type QKind =
  | "multiple_choice"
  | "multiple_select"
  | "true_false"
  | "numeric"
  | "math_expr"
  | "short_answer"
  | "fill_blank"
  | "matching"
  | "ordering"
  | "long_answer";

export type Choice = { id: string; text: string };

export type Question = {
  id: string;
  quiz_id?: string;
  kind: QKind;
  prompt: string; // supports LaTeX
  image_url?: string | null;
  choices?: any; // shape depends on kind (see below)
  answer?: any; // correct answer(s)
  tolerance?: number | null;
  points: number;
  feedback?: string | null;
  position: number;
};

export const QKIND_LABELS: Record<QKind, string> = {
  multiple_choice: "Multiple choice (one answer)",
  multiple_select: "Multiple select (many answers)",
  true_false: "True / False",
  numeric: "Numeric answer",
  math_expr: "Math expression (auto-checked)",
  short_answer: "Short answer (text)",
  fill_blank: "Fill in the blank",
  matching: "Matching pairs",
  ordering: "Put in order",
  long_answer: "Long answer (manual grade)",
};

export const SHOW_ANSWERS_OPTIONS = [
  { value: "after_submit", label: "Immediately after submitting" },
  { value: "after_close", label: "Only after the quiz closes" },
  { value: "never", label: "Never show answers" },
] as const;

let c = 0;
const uid = () => `q${Date.now().toString(36)}${(c++).toString(36)}`;

export function newQuestion(kind: QKind, position: number): Question {
  const base = { id: uid(), kind, prompt: "", points: 1, feedback: "", position };
  switch (kind) {
    case "multiple_choice":
      return { ...base, choices: [{ id: "a", text: "" }, { id: "b", text: "" }, { id: "c", text: "" }, { id: "d", text: "" }], answer: "a" };
    case "multiple_select":
      return { ...base, choices: [{ id: "a", text: "" }, { id: "b", text: "" }, { id: "c", text: "" }, { id: "d", text: "" }], answer: [] };
    case "true_false":
      return { ...base, answer: "true" };
    case "numeric":
      return { ...base, answer: 0, tolerance: 0 };
    case "math_expr":
      return { ...base, answer: "" }; // teacher's correct expression, e.g. (x+1)^2
    case "short_answer":
      return { ...base, answer: [""] }; // list of accepted answers
    case "fill_blank":
      return { ...base, prompt: "The derivative of x^2 is ___.", answer: [""] };
    case "matching":
      return { ...base, choices: { left: ["", ""], right: ["", ""] }, answer: [0, 1] }; // answer[i] = right index for left i
    case "ordering":
      return { ...base, choices: ["", "", ""], answer: [0, 1, 2] }; // correct order of indices
    case "long_answer":
      return { ...base, answer: null };
  }
}

function norm(s: any): string {
  return String(s ?? "").trim().toLowerCase();
}

function sameSet(a: any[], b: any[]): boolean {
  if (!Array.isArray(a) || !Array.isArray(b) || a.length !== b.length) return false;
  const sa = [...a].map(String).sort();
  const sb = [...b].map(String).sort();
  return sa.every((v, i) => v === sb[i]);
}

function sameOrder(a: any[], b: any[]): boolean {
  if (!Array.isArray(a) || !Array.isArray(b) || a.length !== b.length) return false;
  return a.every((v, i) => String(v) === String(b[i]));
}

/** Returns true if `response` correctly answers `q`. long_answer always false (manual). */
export function isCorrect(q: Question, response: any): boolean {
  switch (q.kind) {
    case "multiple_choice":
    case "true_false":
      return response != null && String(response) === String(q.answer);
    case "multiple_select":
      return sameSet(response ?? [], q.answer ?? []);
    case "numeric": {
      const v = parseFloat(response);
      if (isNaN(v)) return false;
      const tol = Number(q.tolerance ?? 0);
      return Math.abs(v - Number(q.answer)) <= tol + 1e-9;
    }
    case "math_expr":
      return exprEquivalent(String(response ?? ""), String(q.answer ?? ""));
    case "short_answer":
    case "fill_blank": {
      const accepted: string[] = Array.isArray(q.answer) ? q.answer : [q.answer];
      return accepted.some((a) => norm(a) !== "" && norm(a) === norm(response));
    }
    case "matching":
      return sameOrder(response ?? [], q.answer ?? []);
    case "ordering":
      return sameOrder(response ?? [], q.answer ?? []);
    case "long_answer":
      return false;
  }
}

export type GradeResult = {
  score: number;
  maxScore: number;
  percent: number;
  needsGrading: boolean;
  perQuestion: Record<string, { correct: boolean; points: number; manual: boolean }>;
};

/** Auto-grade an attempt. long_answer questions are flagged for manual grading. */
export function gradeAttempt(questions: Question[], answers: Record<string, any>): GradeResult {
  let score = 0;
  let maxScore = 0;
  let needsGrading = false;
  const perQuestion: GradeResult["perQuestion"] = {};

  for (const q of questions) {
    maxScore += Number(q.points) || 0;
    if (q.kind === "long_answer") {
      needsGrading = true;
      perQuestion[q.id] = { correct: false, points: 0, manual: true };
      continue;
    }
    const correct = isCorrect(q, answers[q.id]);
    const pts = correct ? Number(q.points) || 0 : 0;
    score += pts;
    perQuestion[q.id] = { correct, points: pts, manual: false };
  }

  const percent = maxScore > 0 ? Math.round((score / maxScore) * 1000) / 10 : 0;
  return { score, maxScore, percent, needsGrading, perQuestion };
}

/** Fisher–Yates shuffle (returns a new array). */
export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
