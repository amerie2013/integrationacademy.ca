// Embedded lesson graphs with labelled key points that are verified against their curves.
//   pgraph({ title, zx, zy, cx, cy, curves:[{expr,color}], vlines:[x], hlines:[y],
//            points:[{x,y,c,on,pos,text}] })
// `on` (a JS function of x) is checked at load time: a point that is not on its curve throws.
// The graph tool draws a 500px-tall canvas, so the iframe is 504px tall; the view is centred on (cx, cy).
export const C = { parent: "#64748b", main: "#1b7a44", alt: "#e69138", red: "#b91c1c", line: "#94a3b8" };
export const fmtN = (n) => { const s = String(+n.toFixed(2)); return s === "-0" ? "0" : s; };

export function pgraph(o) {
  const { zx = 40, zy = 20, cx = 0, cy = 0 } = o;
  const inWin = (x, y) => Math.abs(x - cx) * zx < 280 - 24 && Math.abs(y - cy) * zy < 250 - 16;
  const fns = [];
  for (const x of o.vlines ?? []) fns.push({ kind: "parametric", expr: String(x), exprY: "t", tMin: -60, tMax: 60, color: C.line, thickness: 1.6 });
  for (const y of o.hlines ?? []) fns.push({ kind: "cartesian", expr: "y = " + y, color: C.line, thickness: 1.6 });
  for (const c of o.curves) fns.push({ kind: "cartesian", expr: "y = " + c.expr, color: c.color ?? C.main, thickness: c.w ?? 2.5 });
  const labels = [];
  (o.points ?? []).forEach((p, i) => {
    if (p.on && Math.abs(p.on(p.x) - p.y) > 1e-9 * Math.max(1, Math.abs(p.y))) throw new Error(`graph "${o.title}": (${p.x}, ${p.y}) is not on its curve (got ${p.on(p.x)})`);
    if (!inWin(p.x, p.y)) return;
    labels.push({ id: "p" + i, text: p.text ?? `(${fmtN(p.x)}, ${fmtN(p.y)})`, x: p.x, y: p.y, color: p.c ?? C.main, visible: true, showPoint: true, pos: p.pos ?? "above" });
  });
  const fig = {
    fns, labels,
    settings: { title: o.title ?? "", showGrid: true, showAxes: true, showNums: true, stepX: "auto", stepY: "auto" },
    view: { zoomX: zx, zoomY: zy, ox: -cx * zx, oy: cy * zy },
  };
  const data = encodeURIComponent(Buffer.from(encodeURIComponent(JSON.stringify(fig))).toString("base64"));
  return `<iframe src="/tools/graph?embed=1&data=${data}" loading="lazy" style="width:100%;height:504px;border:1px solid #cbd5e1;border-radius:8px;margin-top:10px;background:#fff;" title="Interactive graph"></iframe>`;
}

// points on a curve f at the given xs
export const onCurve = (xs, f, c, pos, textFn) => xs.map((x) => ({ x, y: f(x), c, on: f, pos, ...(textFn ? { text: textFn(x, f(x)) } : {}) }));
