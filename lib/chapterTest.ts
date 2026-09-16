// Chapter tests: a chapter test is just a quiz assembled from bank_questions
// spanning a whole chapter (all topics sharing the same leading number, e.g.
// "1.1 …", "1.2 …" -> chapter 1), instead of one lesson's topic. These are
// pure, framework-free helpers so both the course-level bank builder
// (app/teacher/bank) and the class-level builder (app/classes/[id]/build)
// can share one sampling implementation.

export type BankLike = {
  id: string;
  topic?: string | null;
  difficulty?: string | null; // "easy" | "medium" | "hard"
};

export type DifficultyCounts = { easy: number; medium: number; hard: number };

export type SampleResult = {
  ids: string[];
  reusedCount: number; // pulled from the excluded (already-used) pool because the fresh pool ran short
  shortfall: Partial<Record<keyof DifficultyCounts, number>>; // requested but unavailable even after reuse
  topicsCovered: number;
  topicsTotal: number;
};

// A topic string looks like "1.1 Number Sets & Their Subsets" -> chapter 1.
export function chapterOf(topic?: string | null): number | null {
  if (!topic) return null;
  const m = topic.match(/^(\d+)/);
  return m ? Number(m[1]) : null;
}

export function chaptersIn(rows: BankLike[]): number[] {
  const set = new Set<number>();
  for (const r of rows) {
    const c = chapterOf(r.topic);
    if (c != null) set.add(c);
  }
  return [...set].sort((a, b) => a - b);
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Picks question ids for one chapter test form: `minPerTopic` guarantees every
// topic in the chapter contributes at least that many questions (any
// difficulty), then `counts` tops up to the requested easy/medium/hard totals
// from across the whole chapter. `exclude` is a soft preference (ids already
// used by an earlier form) — if the chapter's bank is too small to avoid them,
// sampling reuses them anyway rather than under-filling the test, and reports
// how many via `reusedCount`.
export function sampleChapterTest(
  rows: BankLike[],
  chapter: number,
  counts: DifficultyCounts,
  opts: { minPerTopic?: number; exclude?: Set<string> } = {},
): SampleResult {
  const { minPerTopic = 0, exclude = new Set<string>() } = opts;
  const inChapter = rows.filter((r) => chapterOf(r.topic) === chapter);
  const byId = new Map(inChapter.map((r) => [r.id, r]));
  const fresh = inChapter.filter((r) => !exclude.has(r.id));
  const stale = inChapter.filter((r) => exclude.has(r.id));

  const picked = new Set<string>();
  let reusedCount = 0;
  const topics = [...new Set(inChapter.map((r) => r.topic).filter(Boolean))] as string[];

  // Pass 1: topic coverage.
  if (minPerTopic > 0) {
    for (const topic of topics) {
      const freshHere = shuffle(fresh.filter((r) => r.topic === topic && !picked.has(r.id)));
      const staleHere = shuffle(stale.filter((r) => r.topic === topic && !picked.has(r.id)));
      let need = minPerTopic;
      for (const r of freshHere) {
        if (need <= 0) break;
        picked.add(r.id);
        need--;
      }
      for (const r of staleHere) {
        if (need <= 0) break;
        picked.add(r.id);
        reusedCount++;
        need--;
      }
    }
  }

  // Pass 2: difficulty targets across the whole chapter.
  const shortfall: SampleResult["shortfall"] = {};
  (Object.keys(counts) as (keyof DifficultyCounts)[]).forEach((d) => {
    const already = [...picked].filter((id) => byId.get(id)?.difficulty === d).length;
    let need = counts[d] - already;
    if (need <= 0) return;
    const freshHere = shuffle(fresh.filter((r) => r.difficulty === d && !picked.has(r.id)));
    for (const r of freshHere) {
      if (need <= 0) break;
      picked.add(r.id);
      need--;
    }
    if (need > 0) {
      const staleHere = shuffle(stale.filter((r) => r.difficulty === d && !picked.has(r.id)));
      for (const r of staleHere) {
        if (need <= 0) break;
        picked.add(r.id);
        reusedCount++;
        need--;
      }
    }
    if (need > 0) shortfall[d] = need;
  });

  return {
    ids: shuffle([...picked]),
    reusedCount,
    shortfall,
    topicsCovered: topics.filter((t) => [...picked].some((id) => byId.get(id)?.topic === t)).length,
    topicsTotal: topics.length,
  };
}

export const FORM_LABELS = ["A", "B", "C", "D"];

// ".99" sorts after every "chapter.lesson" topic code in the same chapter,
// per the existing `codeOf` ordering regex in app/classes/[id]/page.tsx —
// convention only, no schema field.
export function titleFor(chapter: number, formLabel?: string): string {
  const base = `${chapter}.99 Chapter ${chapter} Test`;
  return formLabel ? `${base} — Form ${formLabel}` : base;
}

export function isChapterTest(title: string): boolean {
  return /Chapter\s+\d+\s+Test/i.test(title || "");
}
