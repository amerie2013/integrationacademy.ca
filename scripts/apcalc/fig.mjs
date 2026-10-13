// Original vector figures for the AP Calculus AB exam-prep course. Every figure
// is drawn from the same numbers as the question or example it belongs to, so a
// graph can never disagree with its text. Output is a plain SVG string: lessons
// embed it inline, and bank questions carry it as a data URI in image_url.
//
//   const g = plot({ x: [-3, 5], y: [-2, 6] });
//   g.curve((x) => x * x - 1, -3, 5).hole(1, 2).dot(1, 4).label(1.3, 4.2, "(1, 4)");
//   g.svg()      → "<svg …>"      g.uri()  → "data:image/svg+xml;utf8,…"

const INK = "#161e54";
const GRID = "#e6e9f5";
const AXIS = "#3b4470";
export const C = { main: "#27357e", alt: "#b3372f", gold: "#b98a00", green: "#1b7a44", grey: "#7f88ad" };

// clip ids must be unique among the inline figures of one lesson page
let _clip = 0;
const f2 = (n) => (Math.round(n * 100) / 100).toString();
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export function plot(o = {}) {
  const W = o.w ?? 380, H = o.h ?? 300, pad = o.pad ?? 26;
  const [x0, x1] = o.x ?? [-5, 5];
  const [y0, y1] = o.y ?? [-5, 5];
  const stepX = o.stepX ?? 1, stepY = o.stepY ?? 1;
  const X = (x) => pad + ((x - x0) / (x1 - x0)) * (W - 2 * pad);
  const Y = (y) => H - pad - ((y - y0) / (y1 - y0)) * (H - 2 * pad);
  const under = [], body = [], over = [];

  const api = {
    X, Y,
    /** y = fn(x) on [a, b]; the path breaks wherever fn is undefined or leaves the window. */
    curve(fn, a = x0, b = x1, s = {}) {
      const n = s.n ?? 400;
      let d = "", pen = false;
      const lo = y0 - (y1 - y0) * 0.5, hi = y1 + (y1 - y0) * 0.5;
      let prev = null;
      for (let i = 0; i <= n; i++) {
        const x = a + ((b - a) * i) / n;
        const y = fn(x);
        const ok = Number.isFinite(y) && y > lo && y < hi;
        // a jump across most of the window between neighbouring samples is an asymptote, not a line
        const jump = ok && prev !== null && Math.abs(y - prev) > (y1 - y0) * 0.9;
        if (!ok || jump) { pen = false; prev = ok ? y : null; if (!ok) continue; }
        d += `${pen ? "L" : "M"}${f2(X(x))},${f2(Y(y))}`;
        pen = true; prev = y;
      }
      body.push(`<path d="${d}" fill="none" stroke="${s.color ?? C.main}" stroke-width="${s.width ?? 2.4}" stroke-linejoin="round" stroke-linecap="round"${s.dash ? ` stroke-dasharray="${s.dash}"` : ""}/>`);
      return api;
    },
    /** straight segments through the given points (piecewise-linear graphs) */
    poly(pts, s = {}) {
      body.push(`<polyline points="${pts.map(([x, y]) => `${f2(X(x))},${f2(Y(y))}`).join(" ")}" fill="none" stroke="${s.color ?? C.main}" stroke-width="${s.width ?? 2.4}" stroke-linejoin="round" stroke-linecap="round"${s.dash ? ` stroke-dasharray="${s.dash}"` : ""}/>`);
      return api;
    },
    seg(xa, ya, xb, yb, s = {}) { return api.poly([[xa, ya], [xb, yb]], s); },
    /** filled point: the function takes this value */
    dot(x, y, s = {}) {
      over.push(`<circle cx="${f2(X(x))}" cy="${f2(Y(y))}" r="${s.r ?? 4.4}" fill="${s.color ?? C.main}"/>`);
      return api;
    },
    /** open point: the graph approaches this location but the function does not take the value */
    hole(x, y, s = {}) {
      over.push(`<circle cx="${f2(X(x))}" cy="${f2(Y(y))}" r="${s.r ?? 4.4}" fill="#ffffff" stroke="${s.color ?? C.main}" stroke-width="2"/>`);
      return api;
    },
    vline(x, s = {}) {
      under.push(`<line x1="${f2(X(x))}" y1="${pad}" x2="${f2(X(x))}" y2="${H - pad}" stroke="${s.color ?? C.alt}" stroke-width="1.5" stroke-dasharray="${s.dash ?? "6 5"}"/>`);
      return api;
    },
    hline(y, s = {}) {
      under.push(`<line x1="${pad}" y1="${f2(Y(y))}" x2="${W - pad}" y2="${f2(Y(y))}" stroke="${s.color ?? C.alt}" stroke-width="1.5" stroke-dasharray="${s.dash ?? "6 5"}"/>`);
      return api;
    },
    /** region between top(x) and bottom(x) on [a, b] */
    shade(top, bottom, a, b, s = {}) {
      const n = 120; let d = "";
      for (let i = 0; i <= n; i++) { const x = a + ((b - a) * i) / n; d += `${i ? "L" : "M"}${f2(X(x))},${f2(Y(top(x)))}`; }
      for (let i = n; i >= 0; i--) { const x = a + ((b - a) * i) / n; d += `L${f2(X(x))},${f2(Y(bottom(x)))}`; }
      under.push(`<path d="${d}Z" fill="${s.color ?? C.main}" fill-opacity="${s.opacity ?? 0.16}"/>`);
      return api;
    },
    /** outlined rectangle from the x-axis to height h over [xa, xb] (Riemann sums) */
    rect(xa, xb, h, s = {}) {
      const top = Math.min(Y(0), Y(h)), ht = Math.abs(Y(h) - Y(0));
      under.push(`<rect x="${f2(X(xa))}" y="${f2(top)}" width="${f2(X(xb) - X(xa))}" height="${f2(ht)}" fill="${s.color ?? C.gold}" fill-opacity="${s.opacity ?? 0.22}" stroke="${s.color ?? C.gold}" stroke-width="1.3"/>`);
      return api;
    },
    /** slope field: a short segment of slope fn(x, y) at each lattice point (skipped where fn is undefined) */
    slopes(fn, s = {}) {
      const step = s.step ?? 1, half = s.half ?? 8;
      const sx = (W - 2 * pad) / (x1 - x0), sy = (H - 2 * pad) / (y1 - y0);
      for (let x = Math.ceil((s.x0 ?? x0 + 0.5 * step) / step) * step; x <= (s.x1 ?? x1 - 0.5 * step) + 1e-9; x += step) {
        for (let y = Math.ceil((s.y0 ?? y0 + 0.5 * step) / step) * step; y <= (s.y1 ?? y1 - 0.5 * step) + 1e-9; y += step) {
          const m = fn(x, y);
          if (Number.isNaN(m)) continue;
          // direction in pixels, so every segment has the same drawn length
          let dx = sx, dy = Number.isFinite(m) ? -m * sy : -1;
          if (!Number.isFinite(m)) dx = 0;
          const n = Math.hypot(dx, dy) || 1;
          dx = (dx / n) * half; dy = (dy / n) * half;
          body.push(`<line x1="${f2(X(x) - dx)}" y1="${f2(Y(y) - dy)}" x2="${f2(X(x) + dx)}" y2="${f2(Y(y) + dy)}" stroke="${s.color ?? C.main}" stroke-width="${s.width ?? 1.7}" stroke-linecap="round"/>`);
        }
      }
      return api;
    },
    label(x, y, text, s = {}) {
      over.push(`<text x="${f2(X(x))}" y="${f2(Y(y))}" font-family="Georgia, 'Times New Roman', serif" font-size="${s.size ?? 14}" font-style="${s.plain ? "normal" : "italic"}" fill="${s.color ?? INK}" text-anchor="${s.anchor ?? "start"}" paint-order="stroke" stroke="#ffffff" stroke-width="3.5">${esc(text)}</text>`);
      return api;
    },
    svg() {
      const g = [];
      const id = `apxclip${++_clip}${Math.random().toString(36).slice(2, 6)}`;
      if (o.grid !== false) {
        for (let x = Math.ceil(x0 / stepX) * stepX; x <= x1 + 1e-9; x += stepX) g.push(`<line x1="${f2(X(x))}" y1="${pad}" x2="${f2(X(x))}" y2="${H - pad}" stroke="${GRID}" stroke-width="1"/>`);
        for (let y = Math.ceil(y0 / stepY) * stepY; y <= y1 + 1e-9; y += stepY) g.push(`<line x1="${pad}" y1="${f2(Y(y))}" x2="${W - pad}" y2="${f2(Y(y))}" stroke="${GRID}" stroke-width="1"/>`);
      }
      const ax = [];
      const ox = Math.min(Math.max(0, x0), x1), oy = Math.min(Math.max(0, y0), y1);
      ax.push(`<line x1="${pad - 8}" y1="${f2(Y(oy))}" x2="${W - pad + 8}" y2="${f2(Y(oy))}" stroke="${AXIS}" stroke-width="1.4"/>`);
      ax.push(`<line x1="${f2(X(ox))}" y1="${H - pad + 8}" x2="${f2(X(ox))}" y2="${pad - 8}" stroke="${AXIS}" stroke-width="1.4"/>`);
      ax.push(`<path d="M${W - pad + 8},${f2(Y(oy))}l-7,-4v8z" fill="${AXIS}"/><path d="M${f2(X(ox))},${pad - 8}l-4,7h8z" fill="${AXIS}"/>`);
      if (o.ticks !== false) {
        const every = o.tickEvery ?? 1;
        for (let x = Math.ceil(x0 / stepX) * stepX; x <= x1 + 1e-9; x += stepX) {
          const k = Math.round(x / stepX);
          if (Math.abs(x) < 1e-9 || Math.abs(x - x1) < 1e-9) continue;
          ax.push(`<line x1="${f2(X(x))}" y1="${f2(Y(oy) - 3)}" x2="${f2(X(x))}" y2="${f2(Y(oy) + 3)}" stroke="${AXIS}" stroke-width="1"/>`);
          if (k % every === 0) ax.push(`<text x="${f2(X(x))}" y="${f2(Y(oy) + 15)}" font-family="Helvetica, Arial, sans-serif" font-size="10.5" fill="${AXIS}" text-anchor="middle">${f2(x)}</text>`);
        }
        for (let y = Math.ceil(y0 / stepY) * stepY; y <= y1 + 1e-9; y += stepY) {
          const k = Math.round(y / stepY);
          if (Math.abs(y) < 1e-9 || Math.abs(y - y1) < 1e-9) continue;
          ax.push(`<line x1="${f2(X(ox) - 3)}" y1="${f2(Y(y))}" x2="${f2(X(ox) + 3)}" y2="${f2(Y(y))}" stroke="${AXIS}" stroke-width="1"/>`);
          if (k % every === 0) ax.push(`<text x="${f2(X(ox) - 7)}" y="${f2(Y(y) + 3.5)}" font-family="Helvetica, Arial, sans-serif" font-size="10.5" fill="${AXIS}" text-anchor="end">${f2(y)}</text>`);
        }
      }
      ax.push(`<text x="${W - pad + 10}" y="${f2(Y(oy) - 7)}" font-family="Georgia, serif" font-style="italic" font-size="14" fill="${AXIS}" text-anchor="end">${esc(o.xName ?? "x")}</text>`);
      ax.push(`<text x="${f2(X(ox) + 9)}" y="${pad - 2}" font-family="Georgia, serif" font-style="italic" font-size="14" fill="${AXIS}">${esc(o.yName ?? "y")}</text>`);
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="${esc(o.alt ?? "Graph")}"><defs><clipPath id="${id}"><rect x="${pad - 6}" y="${pad - 6}" width="${W - 2 * pad + 12}" height="${H - 2 * pad + 12}"/></clipPath></defs><rect width="${W}" height="${H}" fill="#ffffff"/>${g.join("")}<g clip-path="url(#${id})">${under.join("")}</g>${ax.join("")}<g clip-path="url(#${id})">${body.join("")}</g>${over.join("")}</svg>`;
    },
    uri() { return "data:image/svg+xml;utf8," + encodeURIComponent(api.svg()); },
  };
  return api;
}

/** Inline lesson figure with a caption. */
export const figure = (g, caption) => `<figure class="apx-fig">${g.svg()}<figcaption>${caption}</figcaption></figure>`;
