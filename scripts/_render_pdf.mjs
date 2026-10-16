// node scripts/_render_pdf.mjs <pdf> <outdir> [scale] [pages e.g. 1,2,5]  — dev helper: PDF pages -> PNG
import { createCanvas } from "@napi-rs/canvas";
import * as pdfjs from "pdfjs-dist/legacy/build/pdf.mjs";
import fs from "fs";
const [, , file, out, scale = "1.3", only] = process.argv;
const doc = await pdfjs.getDocument({ data: new Uint8Array(fs.readFileSync(file)), disableFontFace: true, useSystemFonts: false }).promise;
fs.mkdirSync(out, { recursive: true });
const want = only ? only.split(",").map(Number) : Array.from({ length: doc.numPages }, (_, i) => i + 1);
for (const p of want) {
  const page = await doc.getPage(p); const vp = page.getViewport({ scale: Number(scale) });
  const c = createCanvas(vp.width, vp.height); const ctx = c.getContext("2d"); ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, vp.width, vp.height);
  await page.render({ canvasContext: ctx, viewport: vp }).promise;
  fs.writeFileSync(`${out}/p${p}.png`, c.toBuffer("image/png"));
}
console.log(doc.numPages, "pages");
