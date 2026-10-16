import { NextRequest, NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";

// Development-only lesson preview. `node scripts/mth1w-ch1/v2/publish.mjs <lesson> --preview`
// writes .lesson-preview/<lessonId>.json; on `npm run dev` the lesson page shows those blocks
// instead of the database copy, so new lessons can be reviewed locally before anything is
// published. In production this route always 404s and nothing is read from disk.
export const runtime = "nodejs";

export async function GET(_req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  if (process.env.NODE_ENV !== "development") return NextResponse.json({ error: "not found" }, { status: 404 });
  const { id } = await ctx.params;
  if (!/^[0-9a-f-]{36}$/i.test(id)) return NextResponse.json({ error: "bad id" }, { status: 400 });
  try {
    const raw = await readFile(path.join(process.cwd(), ".lesson-preview", `${id}.json`), "utf8");
    return NextResponse.json(JSON.parse(raw));
  } catch {
    return NextResponse.json({ error: "no preview" }, { status: 404 });
  }
}
