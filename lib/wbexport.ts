// Whiteboard export: renders pages (ink + KaTeX equations) to images and
// packs them into a real PDF file — no print dialog, no pop-up.
//
// Equations are HTML overlays on screen, so to get them into an image we
// draw them through an SVG <foreignObject>. An SVG used as an image can't
// load anything external, so the KaTeX stylesheet is inlined with its fonts
// embedded as data URLs (fetched once, then cached).

import katex from "katex";
import { renderAll, type Bg, type Shape, type View } from "./wbdraw";

type MathShape = Extract<Shape, { t: "math" }>;

let katexCss: Promise<string> | null = null;

function bytesToBase64(bytes: Uint8Array): string {
  let s = "";
  for (let i = 0; i < bytes.length; i += 0x8000) s += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  return btoa(s);
}

/** The page's KaTeX rules, with each @font-face pointing at an embedded woff2. */
function loadKatexCss(): Promise<string> {
  if (katexCss) return katexCss;
  katexCss = (async () => {
    const rules: string[] = [];
    const fonts: { css: string; url: string }[] = [];
    for (const sheet of Array.from(document.styleSheets)) {
      let list: CSSRuleList;
      try { list = sheet.cssRules; } catch { continue; }
      for (const r of Array.from(list)) {
        if (r instanceof CSSFontFaceRule) {
          if (!/katex/i.test(r.style.getPropertyValue("font-family"))) continue;
          const m = /url\(["']?([^"')]+\.woff2[^"')]*)["']?\)/.exec(r.style.getPropertyValue("src"));
          if (m) fonts.push({ css: r.cssText, url: new URL(m[1], sheet.href || location.href).href });
        } else if (r.cssText.includes(".katex")) rules.push(r.cssText);
      }
    }
    const faces = await Promise.all(fonts.map(async (f) => {
      try {
        const buf = new Uint8Array(await (await fetch(f.url)).arrayBuffer());
        return f.css.replace(/src:[^;]+;/, `src: url(data:font/woff2;base64,${bytesToBase64(buf)}) format("woff2");`);
      } catch { return ""; }
    }));
    return faces.join("\n") + "\n" + rules.join("\n");
  })();
  return katexCss;
}

/** Draw the page's equations onto ctx (whose transform maps CSS px of a w×h board). */
async function drawMath(ctx: CanvasRenderingContext2D, maths: MathShape[], v: View, w: number, h: number) {
  if (!maths.length) return;
  const css = await loadKatexCss();
  const holder = document.createElement("div");
  holder.setAttribute("style", `position:relative;width:${w}px;height:${h}px;`);
  holder.innerHTML = maths.map((m) => {
    const html = katex.renderToString(m.latex, { throwOnError: false, output: "html" });
    return `<div style="position:absolute;left:${m.x * v.z + v.x}px;top:${m.y * v.z + v.y}px;color:${m.c};font-size:${m.size * v.z}px;line-height:1;white-space:nowrap;">${html}</div>`;
  }).join("");
  const xhtml = new XMLSerializer().serializeToString(holder);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><foreignObject x="0" y="0" width="${w}" height="${h}"><style xmlns="http://www.w3.org/1999/xhtml"><![CDATA[${css}]]></style>${xhtml}</foreignObject></svg>`;
  const img = new Image();
  img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  await img.decode();
  ctx.drawImage(img, 0, 0, w, h);
}

/** Render one board page (background, ink, images, equations) to a canvas at `scale`× resolution. */
export async function renderPage(page: Shape[], bg: Bg, w: number, h: number, v: View, scale = 2): Promise<HTMLCanvasElement> {
  // make sure every image on the page has decoded before drawing
  await Promise.all(page.filter((s): s is Extract<Shape, { t: "image" }> => s.t === "image").map((s) => {
    const im = new Image(); im.src = s.src; return im.decode().catch(() => {});
  }));
  const c = document.createElement("canvas");
  c.width = Math.round(w * scale); c.height = Math.round(h * scale);
  const ctx = c.getContext("2d")!;
  ctx.setTransform(scale, 0, 0, scale, 0, 0);
  renderAll(ctx, page, bg, w, h, undefined, v);
  try { await drawMath(ctx, page.filter((s): s is MathShape => s.t === "math"), v, w, h); }
  catch { /* equations couldn't be rasterised — keep the rest of the page */ }
  return c;
}

/** A minimal PDF: one page per JPEG, each scaled to fill a pageW×pageH (pt) page. */
export function jpegsToPdf(pages: { jpeg: Uint8Array; w: number; h: number }[], pageW: number, pageH: number): Blob {
  const enc = new TextEncoder();
  const parts: Uint8Array[] = [];
  const offsets: number[] = [];
  let off = 0;
  const put = (x: string | Uint8Array) => { const b = typeof x === "string" ? enc.encode(x) : x; parts.push(b); off += b.length; };
  const obj = (id: number, ...body: (string | Uint8Array)[]) => { offsets[id] = off; put(`${id} 0 obj\n`); body.forEach(put); put("\nendobj\n"); };
  const W = pageW.toFixed(2), H = pageH.toFixed(2);

  put(new Uint8Array([0x25, 0x50, 0x44, 0x46, 0x2d, 0x31, 0x2e, 0x34, 0x0a, 0x25, 0xe2, 0xe3, 0xcf, 0xd3, 0x0a])); // %PDF-1.4 + binary marker
  obj(1, "<< /Type /Catalog /Pages 2 0 R >>");
  obj(2, `<< /Type /Pages /Kids [${pages.map((_, i) => `${3 + i * 3} 0 R`).join(" ")}] /Count ${pages.length} >>`);
  pages.forEach((p, i) => {
    const pid = 3 + i * 3, cid = pid + 1, iid = pid + 2;
    const content = `q ${W} 0 0 ${H} 0 0 cm /Im0 Do Q`;
    obj(pid, `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${W} ${H}] /Resources << /XObject << /Im0 ${iid} 0 R >> >> /Contents ${cid} 0 R >>`);
    obj(cid, `<< /Length ${content.length} >>\nstream\n${content}\nendstream`);
    obj(iid, `<< /Type /XObject /Subtype /Image /Width ${p.w} /Height ${p.h} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${p.jpeg.length} >>\nstream\n`, p.jpeg, "\nendstream");
  });
  const n = 3 + pages.length * 3;
  const xref = off;
  put(`xref\n0 ${n}\n0000000000 65535 f \n`);
  for (let id = 1; id < n; id++) put(`${String(offsets[id]).padStart(10, "0")} 00000 n \n`);
  put(`trailer\n<< /Size ${n} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`);
  return new Blob(parts as BlobPart[], { type: "application/pdf" });
}

export function canvasToJpeg(c: HTMLCanvasElement, quality = 0.9): Uint8Array {
  const b64 = c.toDataURL("image/jpeg", quality).split(",")[1];
  const bin = atob(b64), out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

export function downloadBlob(blob: Blob, name: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a"); a.href = url; a.download = name;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 4000);
}
