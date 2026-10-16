import { NextRequest, NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";

// Development-only: bank questions staged in .lesson-preview/bank-<courseId>.json (written by
// scripts/mth1w-ch1/v2/written.mjs --preview) so the printable-test builder can use them on
// `npm run dev` before they are inserted into the database. Always 404s in production.
export const runtime = "nodejs";

export async function GET(_req: NextRequest, ctx: { params: Promise<{ courseId: string }> }) {
  if (process.env.NODE_ENV !== "development") return NextResponse.json({ error: "not found" }, { status: 404 });
  const { courseId } = await ctx.params;
  if (!/^[0-9a-f-]{36}$/i.test(courseId)) return NextResponse.json({ error: "bad id" }, { status: 400 });
  try {
    const raw = await readFile(path.join(process.cwd(), ".lesson-preview", `bank-${courseId}.json`), "utf8");
    return NextResponse.json(JSON.parse(raw));
  } catch {
    return NextResponse.json({ error: "no preview" }, { status: 404 });
  }
}
