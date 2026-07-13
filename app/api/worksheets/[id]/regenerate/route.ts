import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { createRequire } from "module";
import chromium from "@sparticuz/chromium";
import puppeteer from "puppeteer-core";
import { renderWorksheetHtml, renderCompactHtml } from "../../../../../lib/worksheetRender";
import type { WsContent } from "../../../../../lib/worksheets";

// Rebuilds a worksheet's PDFs from worksheets.content and republishes them.
// Runs headless Chrome, so it must use the Node runtime with a generous budget.
export const runtime = "nodejs";
export const maxDuration = 60;

const require = createRequire(import.meta.url);
const KATEX_CSS = require("fs").readFileSync(require.resolve("katex/dist/katex.min.css"), "utf8");

const makeAdmin = () =>
  createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, { auth: { persistSession: false } });
let _admin: ReturnType<typeof makeAdmin> | null = null;
const getAdmin = () => (_admin ??= makeAdmin());

async function requireAdmin(req: NextRequest): Promise<{ ok: true } | { ok: false; res: NextResponse }> {
  const token = (req.headers.get("authorization") ?? "").replace(/^Bearer /, "");
  if (!token) return { ok: false, res: NextResponse.json({ error: "Not signed in." }, { status: 401 }) };
  const admin = getAdmin();
  const { data: userData, error } = await admin.auth.getUser(token);
  if (error || !userData?.user) return { ok: false, res: NextResponse.json({ error: "Session expired — sign in again." }, { status: 401 }) };
  const { data: prof } = await admin.from("profiles").select("role").eq("id", userData.user.id).single();
  if (prof?.role !== "admin") return { ok: false, res: NextResponse.json({ error: "Admins only." }, { status: 403 }) };
  return { ok: true };
}

async function launchBrowser() {
  const onVercel = !!process.env.VERCEL;
  if (onVercel) {
    return puppeteer.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath(),
      headless: true,
    });
  }
  // Local dev: use the installed Chrome (matches scripts/pdfgen.mjs).
  const local = process.env.CHROME_PATH || "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
  return puppeteer.launch({ executablePath: local, headless: true, args: ["--no-sandbox"] });
}

async function htmlToPdf(browser: Awaited<ReturnType<typeof launchBrowser>>, html: string): Promise<Buffer> {
  const page = await browser.newPage();
  try {
    await page.setContent(html, { waitUntil: "load", timeout: 30000 });
    const pdf = await page.pdf({ printBackground: true, preferCSSPageSize: true });
    return Buffer.from(pdf);
  } finally {
    await page.close();
  }
}

export async function POST(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const gate = await requireAdmin(req);
  if (!gate.ok) return gate.res;

  const { id } = await ctx.params;
  const admin = getAdmin();
  const { data: w, error } = await admin.from("worksheets").select("id, course_id, code, content").eq("id", id).single();
  if (error || !w) return NextResponse.json({ error: "Worksheet not found." }, { status: 404 });
  const content = w.content as WsContent | null;
  if (!content) return NextResponse.json({ error: "This worksheet has no editable content to regenerate." }, { status: 400 });

  let browser: Awaited<ReturnType<typeof launchBrowser>> | null = null;
  try {
    browser = await launchBrowser();
    const wsPdf = await htmlToPdf(browser, renderWorksheetHtml(content, w.code, KATEX_CSS));
    const cmPdf = await htmlToPdf(browser, renderCompactHtml(content, w.code, KATEX_CSS));

    const up = async (buf: Buffer, kind: "worksheet" | "compact") => {
      const path = `${w.course_id}/${w.code}_${kind === "worksheet" ? "worksheet" : "answers"}.pdf`;
      const { error: uErr } = await admin.storage.from("worksheets").upload(path, buf, { upsert: true, contentType: "application/pdf" });
      if (uErr) throw new Error(`upload ${path}: ${uErr.message}`);
      return { url: admin.storage.from("worksheets").getPublicUrl(path).data.publicUrl, name: `${w.code}_${kind === "worksheet" ? "worksheet" : "compact"}.pdf` };
    };

    const ws = await up(wsPdf, "worksheet");
    const cm = await up(cmPdf, "compact");
    const { error: rowErr } = await admin.from("worksheets").update({
      worksheet_url: ws.url, worksheet_name: ws.name,
      answers_url: cm.url, answers_name: cm.name,
    }).eq("id", id);
    if (rowErr) throw new Error(rowErr.message);

    return NextResponse.json({ ok: true, worksheet_url: ws.url, answers_url: cm.url });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Regeneration failed." }, { status: 500 });
  } finally {
    if (browser) await browser.close();
  }
}
