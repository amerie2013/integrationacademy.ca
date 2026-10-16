// Paper (printable) chapter tests assembled from bank_questions. A test has up
// to three parts, each fed by a group of question kinds, and one or more
// non-identical forms (A, B, ...). Pure helpers — the page does the I/O.

import { chapterOf } from "./chapterTest";

export type PaperRow = {
  id: string;
  topic: string | null;
  difficulty: string | null;
  kind: string;
  prompt: string;
  choices: unknown;
  answer: unknown;
  tolerance?: number | null;
  points: number;
  feedback: string | null;
  image_url?: string | null;
};

export type SectionKey = "A" | "B" | "C";

export type SectionSpec = {
  key: SectionKey;
  title: string;
  hint: string; // printed under the section heading
  kinds: string[];
  category: string; // Ontario achievement category it mainly assesses
  count: number;
  marks: number; // marks per question
  ownPoints?: boolean; // use each question's own points (its marking guide) instead of `marks`
};

export const DEFAULT_SECTIONS: SectionSpec[] = [
  { key: "A", title: "Part A — Multiple Choice and True/False", hint: "Circle the best answer.", kinds: ["multiple_choice", "true_false", "multiple_select"], category: "Knowledge & Understanding", count: 10, marks: 1 },
  { key: "B", title: "Part B — Short Answer", hint: "Show your work in the space provided. Write your final answer on the line.", kinds: ["numeric", "fill_blank", "short_answer", "math_expr"], category: "Application", count: 8, marks: 2 },
  { key: "C", title: "Part C — Problem Solving", hint: "Show all your work. Marks are given for correct reasoning and clear communication, not only for the final answer.", kinds: ["long_answer"], category: "Thinking & Communication", count: 4, marks: 4, ownPoints: true },
];

/** Marks for one question in a section. */
export const markOf = (spec: SectionSpec, row?: PaperRow) => (spec.ownPoints && row ? Math.max(1, Number(row.points) || 1) : spec.marks);
/** Marks for a whole section of a form. */
export const sectionMarks = (spec: SectionSpec, ids: string[], byId: Map<string, PaperRow>) => ids.reduce((s, id) => s + markOf(spec, byId.get(id)), 0);

export type PaperForm = { label: string; sections: Record<SectionKey, string[]> };

function shuffle<T>(a: T[]): T[] {
  const r = [...a];
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
}

const DIFF_ORDER: Record<string, number> = { easy: 0, medium: 1, hard: 2 };

/**
 * Pick `count` questions of the section's kinds from the chosen topics,
 * spreading them round-robin across topics so every topic is represented,
 * preferring ids not used by an earlier form. Within a section the questions
 * are ordered easy → hard, the way a printed test usually runs.
 */
export function pickSection(rows: PaperRow[], topics: string[], spec: SectionSpec, used: Set<string>): { ids: string[]; short: number } {
  const pool = rows.filter((r) => spec.kinds.includes(r.kind) && r.topic && topics.includes(r.topic));
  const byTopic = new Map<string, PaperRow[]>();
  for (const t of shuffle(topics)) {
    const here = pool.filter((r) => r.topic === t);
    // fresh first, then already-used ones as a fallback
    byTopic.set(t, [...shuffle(here.filter((r) => !used.has(r.id))), ...shuffle(here.filter((r) => used.has(r.id)))]);
  }
  const picked: PaperRow[] = [];
  let progress = true;
  while (picked.length < spec.count && progress) {
    progress = false;
    for (const t of byTopic.keys()) {
      if (picked.length >= spec.count) break;
      const next = byTopic.get(t)!.shift();
      if (next) { picked.push(next); progress = true; }
    }
  }
  picked.sort((a, b) => (DIFF_ORDER[a.difficulty ?? "medium"] ?? 1) - (DIFF_ORDER[b.difficulty ?? "medium"] ?? 1));
  return { ids: picked.map((r) => r.id), short: spec.count - picked.length };
}

export function buildForms(rows: PaperRow[], topics: string[], sections: SectionSpec[], formCount: number): { forms: PaperForm[]; warnings: string[] } {
  const used = new Set<string>();
  const forms: PaperForm[] = [];
  const warnings: string[] = [];
  for (let f = 0; f < formCount; f++) {
    const label = "ABCD"[f];
    const form: PaperForm = { label, sections: { A: [], B: [], C: [] } };
    for (const spec of sections) {
      if (spec.count <= 0) continue;
      const { ids, short } = pickSection(rows, topics, spec, used);
      form.sections[spec.key] = ids;
      ids.forEach((id) => used.add(id));
      if (short > 0) warnings.push(`Form ${label}, Part ${spec.key}: only ${spec.count - short} of ${spec.count} questions available in the bank for these topics.`);
    }
    forms.push(form);
  }
  return { forms, warnings };
}

/** A replacement for one question: same section kinds and topic, not already on this form. */
export function swapCandidate(rows: PaperRow[], current: PaperRow, spec: SectionSpec, onForm: Set<string>, used: Set<string>): PaperRow | null {
  const same = (r: PaperRow) => spec.kinds.includes(r.kind) && !onForm.has(r.id) && r.id !== current.id;
  const sameTopic = rows.filter((r) => same(r) && r.topic === current.topic);
  const fresh = sameTopic.filter((r) => !used.has(r.id));
  const pool = fresh.length ? fresh : sameTopic;
  return pool.length ? pool[Math.floor(Math.random() * pool.length)] : null;
}

export const topicsOfChapter = (rows: PaperRow[], chapter: number) =>
  [...new Set(rows.filter((r) => chapterOf(r.topic) === chapter).map((r) => r.topic as string))].sort((a, b) => {
    const [, x] = a.match(/^\d+\.(\d+)/) ?? [];
    const [, y] = b.match(/^\d+\.(\d+)/) ?? [];
    return Number(x) - Number(y);
  });

/** Writing space (cm) for a question on paper. */
export function spaceFor(row: PaperRow, marks: number): number {
  if (row.kind === "long_answer") return Math.min(11, 4 + marks * 1.2);
  if (["numeric", "fill_blank", "short_answer", "math_expr"].includes(row.kind)) return 3.2;
  return 0;
}
