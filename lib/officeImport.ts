// Client-side import of Excel/Word/PDF files onto the whiteboard. Each
// format is rendered to one or more PNG data URLs on an offscreen canvas,
// then dropped onto the board through the same path as an uploaded image —
// so drag/resize/rotate/delete/export all work on them for free, and no new
// Shape type or server-side conversion pipeline is needed. Read-only
// snapshots, not editable documents: good enough to reference and annotate
// over, not a re-creation of Word/Excel.

const FONT = "Inter, system-ui, -apple-system, sans-serif";

function truncateToWidth(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string {
  if (ctx.measureText(text).width <= maxWidth) return text;
  let lo = 0, hi = text.length;
  while (lo < hi) {
    const mid = Math.ceil((lo + hi) / 2);
    if (ctx.measureText(text.slice(0, mid) + "…").width <= maxWidth) lo = mid; else hi = mid - 1;
  }
  return text.slice(0, lo) + "…";
}

/** Word-wrap `text` (paragraphs separated by blank lines) to fit `maxWidth`. */
function wrapText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
  const lines: string[] = [];
  const paragraphs = text.split(/\r?\n/);
  for (const para of paragraphs) {
    if (para.trim() === "") { lines.push(""); continue; }
    const words = para.split(/\s+/).filter(Boolean);
    let line = "";
    for (const w of words) {
      const test = line ? `${line} ${w}` : w;
      if (line && ctx.measureText(test).width > maxWidth) { lines.push(line); line = w; }
      else line = test;
    }
    if (line) lines.push(line);
  }
  return lines;
}

/** Excel (.xlsx/.xls) or .csv → a rendered table image (first sheet only). */
export async function renderSpreadsheetToDataUrl(file: File): Promise<string> {
  const XLSX = await import("xlsx");
  const buf = await file.arrayBuffer();
  const wb = XLSX.read(buf, { type: "array" });
  const sheet = wb.Sheets[wb.SheetNames[0]];
  const rows = XLSX.utils.sheet_to_json<string[]>(sheet, { header: 1, raw: false, defval: "" });

  const fontSize = 13, cellPad = 8, lineH = fontSize + 14, maxColW = 220, minColW = 48;
  const maxRows = Math.min(rows.length, 200); // sanity cap — a runaway sheet shouldn't hang the tab
  const cols = Math.max(1, ...rows.slice(0, maxRows).map((r) => r.length));

  const measure = document.createElement("canvas").getContext("2d")!;
  measure.font = `${fontSize}px ${FONT}`;
  const colW = new Array(cols).fill(minColW);
  for (let r = 0; r < maxRows; r++) for (let c = 0; c < cols; c++) {
    const w = Math.min(maxColW, measure.measureText(String(rows[r]?.[c] ?? "")).width + cellPad * 2);
    colW[c] = Math.max(colW[c], w);
  }
  const totalW = colW.reduce((a: number, b: number) => a + b, 0);
  const totalH = lineH * maxRows;

  const dpr = 2; // render at 2x for a crisp result when zoomed in on the board
  const canvas = document.createElement("canvas");
  canvas.width = Math.ceil(totalW * dpr); canvas.height = Math.ceil(totalH * dpr);
  const ctx = canvas.getContext("2d")!;
  ctx.scale(dpr, dpr);
  ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, totalW, totalH);
  ctx.textBaseline = "middle";
  let y = 0;
  for (let r = 0; r < maxRows; r++) {
    let x = 0;
    for (let c = 0; c < cols; c++) {
      const w = colW[c];
      if (r === 0) { ctx.fillStyle = "#f1f5f9"; ctx.fillRect(x, y, w, lineH); }
      ctx.strokeStyle = "#cbd5e1"; ctx.lineWidth = 1; ctx.strokeRect(x + 0.5, y + 0.5, w, lineH);
      ctx.font = r === 0 ? `700 ${fontSize}px ${FONT}` : `${fontSize}px ${FONT}`;
      ctx.fillStyle = "#0f172a";
      ctx.fillText(truncateToWidth(ctx, String(rows[r]?.[c] ?? ""), w - cellPad * 2), x + cellPad, y + lineH / 2);
      x += w;
    }
    y += lineH;
  }
  return canvas.toDataURL("image/png");
}

/** Word (.docx) → a rendered page image of its plain text (headings/paragraphs/lists —
 * exact fonts, layout, and embedded objects don't carry over; this is a readable
 * snapshot, not a re-creation of the document). */
export async function renderWordToDataUrl(file: File): Promise<string> {
  const mammoth = await import("mammoth");
  const buf = await file.arrayBuffer();
  const { value: text } = await mammoth.extractRawText({ arrayBuffer: buf });

  const fontSize = 15, lineH = Math.round(fontSize * 1.6), pad = 24, pageW = 760;
  const measure = document.createElement("canvas").getContext("2d")!;
  measure.font = `${fontSize}px Georgia, 'Times New Roman', serif`;
  const lines = wrapText(measure, text.trim() || "(this document has no readable text)", pageW - pad * 2);

  const dpr = 2;
  const totalH = Math.max(lineH * 3, lines.length * lineH + pad * 2);
  const canvas = document.createElement("canvas");
  canvas.width = pageW * dpr; canvas.height = totalH * dpr;
  const ctx = canvas.getContext("2d")!;
  ctx.scale(dpr, dpr);
  ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, pageW, totalH);
  ctx.fillStyle = "#0f172a"; ctx.font = `${fontSize}px Georgia, 'Times New Roman', serif`; ctx.textBaseline = "top";
  lines.forEach((ln, i) => ctx.fillText(ln, pad, pad + i * lineH));
  return canvas.toDataURL("image/png");
}

let pdfWorkerConfigured = false;

/** PDF → one rendered page image per page (capped at `maxPages`, since a huge PDF
 * dropped onto the board would otherwise add that many full-size objects at once). */
export async function renderPdfToDataUrls(file: File, maxPages = 12): Promise<{ pages: string[]; truncated: boolean }> {
  const pdfjs = await import("pdfjs-dist");
  if (!pdfWorkerConfigured) { pdfjs.GlobalWorkerOptions.workerSrc = "/pdfjs/pdf.worker.min.mjs"; pdfWorkerConfigured = true; }
  const buf = await file.arrayBuffer();
  const doc = await pdfjs.getDocument({ data: buf }).promise;
  const n = Math.min(doc.numPages, maxPages);
  const pages: string[] = [];
  for (let i = 1; i <= n; i++) {
    const page = await doc.getPage(i);
    const viewport = page.getViewport({ scale: 2 }); // 2x for a crisp result when zoomed in
    const canvas = document.createElement("canvas");
    canvas.width = Math.ceil(viewport.width); canvas.height = Math.ceil(viewport.height);
    const ctx = canvas.getContext("2d")!;
    await page.render({ canvasContext: ctx, viewport, canvas }).promise;
    pages.push(canvas.toDataURL("image/png"));
  }
  return { pages, truncated: doc.numPages > maxPages };
}

export function officeFileKind(file: File): "spreadsheet" | "word" | "pdf" | null {
  const name = file.name.toLowerCase();
  if (name.endsWith(".xlsx") || name.endsWith(".xls") || name.endsWith(".csv")) return "spreadsheet";
  if (name.endsWith(".docx") || name.endsWith(".doc")) return "word";
  if (name.endsWith(".pdf")) return "pdf";
  return null;
}
