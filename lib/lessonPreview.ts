import type { Block } from "./blocks";

// On the dev server only: blocks written by `publish.mjs --preview` override the database
// copy of a lesson, so new lesson content can be reviewed before it is published.
// NODE_ENV is inlined at build time, so production builds skip the request entirely.
export async function previewBlocks(lessonId: string): Promise<{ title: string; blocks: Block[] } | null> {
  if (process.env.NODE_ENV !== "development") return null;
  try {
    const r = await fetch(`/api/dev/lesson-preview/${lessonId}`, { cache: "no-store" });
    if (!r.ok) return null;
    const j = await r.json();
    return Array.isArray(j.blocks) ? { title: String(j.title ?? ""), blocks: j.blocks as Block[] } : null;
  } catch {
    return null;
  }
}

/** Dev server only: a locally staged assignment ({ title, description }) that overrides the database copy. */
export async function previewAssignment(id: string): Promise<{ title: string; description: string; course_id?: string } | null> {
  if (process.env.NODE_ENV !== "development") return null;
  try {
    const r = await fetch(`/api/dev/lesson-preview/${id}`, { cache: "no-store" });
    if (!r.ok) return null;
    const j = await r.json();
    return typeof j.description === "string" ? { title: String(j.title ?? ""), description: j.description, course_id: j.course_id } : null;
  } catch {
    return null;
  }
}
