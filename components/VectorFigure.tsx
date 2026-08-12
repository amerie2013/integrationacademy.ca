"use client";

import { useRef, useState } from "react";

type V = { x: number; y: number; z?: number; label?: string; color?: string; slider?: boolean };
type Show = { sum?: boolean; parallelogram?: boolean; dot?: boolean; angle?: boolean; cross?: boolean };

const SIZE = 360;
const PAD = 34;
const DEFAULT_COLORS = ["#1d4ed8", "#dc2626", "#0d9488", "#7c3aed"];
const clampR = (n: number, r: number) => Math.max(-r, Math.min(r, n));
const snap = (n: number) => Math.round(n * 2) / 2;
const fmt = (n: number) => (Math.round(n * 100) / 100).toString();

function Arrow({ x1, y1, x2, y2, color, width = 2.6, dash = false }: { x1: number; y1: number; x2: number; y2: number; color: string; width?: number; dash?: boolean }) {
  const ang = Math.atan2(y2 - y1, x2 - x1);
  const h = 11;
  const a1 = ang + Math.PI - 0.42, a2 = ang + Math.PI + 0.42;
  const near = Math.hypot(x2 - x1, y2 - y1) < 2;
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth={width} strokeLinecap="round" strokeDasharray={dash ? "5 4" : undefined} />
      {!near && !dash && (
        <polygon points={`${x2},${y2} ${x2 + h * Math.cos(a1)},${y2 + h * Math.sin(a1)} ${x2 + h * Math.cos(a2)},${y2 + h * Math.sin(a2)}`} fill={color} />
      )}
    </g>
  );
}

export function VectorFigure({ dim, vectors, show = {}, range = 6, caption }: {
  dim: "2d" | "3d"; vectors: V[]; show?: Show; range?: number; caption?: string;
}) {
  const [vecs, setVecs] = useState<V[]>(() => vectors.map((v) => ({ ...v })));
  const [yaw, setYaw] = useState(-0.5);
  const svgRef = useRef<SVGSVGElement>(null);
  const dragRef = useRef<{ kind: "tip"; idx: number } | { kind: "spin"; x0: number; yaw0: number } | null>(null);

  const cx = SIZE / 2, cy = SIZE / 2;
  const scale = (SIZE / 2 - PAD) / range;
  const tilt = 0.5;
  const is3d = dim === "3d";
  const col = (v: V, i: number) => v.color || DEFAULT_COLORS[i % DEFAULT_COLORS.length];

  const to2 = (x: number, y: number) => ({ sx: cx + x * scale, sy: cy - y * scale });
  const to3 = (x: number, y: number, z: number) => {
    const fx = x * Math.cos(yaw) - y * Math.sin(yaw);
    const fy = x * Math.sin(yaw) + y * Math.cos(yaw);
    return { sx: cx + fx * scale, sy: cy - (z + fy * tilt) * scale };
  };
  const P = (v: { x: number; y: number; z?: number }) => (is3d ? to3(v.x, v.y, v.z ?? 0) : to2(v.x, v.y));

  const u = vecs[0], v = vecs[1];
  const add = (a: V, b: V): V => ({ x: a.x + b.x, y: a.y + b.y, z: (a.z ?? 0) + (b.z ?? 0) });
  const mag = (a: V) => Math.hypot(a.x, a.y, is3d ? (a.z ?? 0) : 0);
  const dot = u && v ? u.x * v.x + u.y * v.y + (is3d ? (u.z ?? 0) * (v.z ?? 0) : 0) : 0;
  const angle = u && v && mag(u) > 1e-9 && mag(v) > 1e-9 ? (Math.acos(Math.max(-1, Math.min(1, dot / (mag(u) * mag(v)))) ) * 180) / Math.PI : 0;
  const cross: V | null = u && v ? { x: (u.y) * (v.z ?? 0) - (u.z ?? 0) * v.y, y: (u.z ?? 0) * v.x - u.x * (v.z ?? 0), z: u.x * v.y - u.y * v.x } : null;

  // pointer: drag a 2D tip, or spin the 3D view
  function svgPt(e: React.PointerEvent) { const r = svgRef.current!.getBoundingClientRect(); return { sx: (e.clientX - r.left) * (SIZE / r.width), sy: (e.clientY - r.top) * (SIZE / r.height) }; }
  function onDown(e: React.PointerEvent) {
    const { sx, sy } = svgPt(e);
    if (!is3d) {
      let best = -1, bd = 18;
      vecs.forEach((vv, i) => { if (!vv.slider) return; const p = to2(vv.x, vv.y); const d = Math.hypot(p.sx - sx, p.sy - sy); if (d < bd) { bd = d; best = i; } });
      if (best >= 0) { dragRef.current = { kind: "tip", idx: best }; svgRef.current!.setPointerCapture(e.pointerId); return; }
    } else { dragRef.current = { kind: "spin", x0: e.clientX, yaw0: yaw }; svgRef.current!.setPointerCapture(e.pointerId); }
  }
  function onMove(e: React.PointerEvent) {
    const d = dragRef.current; if (!d) return;
    if (d.kind === "tip") { const { sx, sy } = svgPt(e); const x = clampR(snap((sx - cx) / scale), range), y = clampR(snap((cy - sy) / scale), range); setVecs((a) => a.map((vv, i) => (i === d.idx ? { ...vv, x, y } : vv))); }
    else setYaw(d.yaw0 + (e.clientX - d.x0) * 0.01);
  }
  function onUp() { dragRef.current = null; }
  function setComp(i: number, key: "x" | "y" | "z", val: number) { setVecs((a) => a.map((vv, j) => (j === i ? { ...vv, [key]: val } : vv))); }
  function reset() { setVecs(vectors.map((vv) => ({ ...vv }))); setYaw(-0.5); }

  // axis endpoints
  const axes = is3d
    ? [{ e: to3(range, 0, 0), l: "x", n: to3(-range, 0, 0) }, { e: to3(0, range, 0), l: "y", n: to3(0, -range, 0) }, { e: to3(0, 0, range), l: "z", n: to3(0, 0, -range) }]
    : [{ e: to2(range, 0), l: "x", n: to2(-range, 0) }, { e: to2(0, range), l: "y", n: to2(0, -range) }];
  const O = P({ x: 0, y: 0, z: 0 });

  return (
    <figure style={{ margin: "6px 0", padding: 12, background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14 }}>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "flex-start" }}>
        <svg ref={svgRef} viewBox={`0 0 ${SIZE} ${SIZE}`} onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerLeave={onUp}
          style={{ width: SIZE, maxWidth: "100%", aspectRatio: "1 / 1", touchAction: "none", cursor: is3d ? "grab" : "default", background: "#fbfcfe", borderRadius: 10, flex: "0 0 auto" }}>
          {/* faint grid (2D) */}
          {!is3d && Array.from({ length: 2 * range + 1 }, (_, k) => k - range).map((g) => (
            <g key={g}>
              <line x1={to2(g, -range).sx} y1={to2(g, -range).sy} x2={to2(g, range).sx} y2={to2(g, range).sy} stroke="#eef2f7" strokeWidth={1} />
              <line x1={to2(-range, g).sx} y1={to2(-range, g).sy} x2={to2(range, g).sx} y2={to2(range, g).sy} stroke="#eef2f7" strokeWidth={1} />
            </g>
          ))}
          {/* axes */}
          {axes.map((ax) => (
            <g key={ax.l}>
              <line x1={ax.n.sx} y1={ax.n.sy} x2={ax.e.sx} y2={ax.e.sy} stroke="#cbd5e1" strokeWidth={1.2} />
              <Arrow x1={O.sx} y1={O.sy} x2={ax.e.sx} y2={ax.e.sy} color="#94a3b8" width={1.2} />
              <text x={ax.e.sx + 6} y={ax.e.sy + 4} fontSize={13} fontStyle="italic" fill="#64748b">{ax.l}</text>
            </g>
          ))}
          {/* addition parallelogram + resultant (2 vectors) */}
          {u && v && (show.parallelogram || show.sum) && (() => {
            const s = add(u, v); const su = P(u), sv = P(v), ss = P(s);
            return (
              <g>
                {show.parallelogram && <>
                  <line x1={su.sx} y1={su.sy} x2={ss.sx} y2={ss.sy} stroke={col(v, 1)} strokeWidth={1.6} strokeDasharray="5 4" opacity={0.7} />
                  <line x1={sv.sx} y1={sv.sy} x2={ss.sx} y2={ss.sy} stroke={col(u, 0)} strokeWidth={1.6} strokeDasharray="5 4" opacity={0.7} />
                </>}
                <Arrow x1={O.sx} y1={O.sy} x2={ss.sx} y2={ss.sy} color="#16a34a" />
                <text x={ss.sx + 6} y={ss.sy - 6} fontSize={13} fontWeight={700} fill="#16a34a">{(u.label || "u") + "+" + (v.label || "v")}</text>
              </g>
            );
          })()}
          {/* cross product (3D) */}
          {is3d && show.cross && cross && (() => { const sc = P(cross); return (
            <g><Arrow x1={O.sx} y1={O.sy} x2={sc.sx} y2={sc.sy} color="#7c3aed" />
              <text x={sc.sx + 6} y={sc.sy} fontSize={13} fontWeight={700} fill="#7c3aed">{(u!.label || "u") + "×" + (v!.label || "v")}</text></g>
          ); })()}
          {/* the vectors */}
          {vecs.map((vv, i) => { const p = P(vv); return (
            <g key={i}>
              <Arrow x1={O.sx} y1={O.sy} x2={p.sx} y2={p.sy} color={col(vv, i)} width={3} />
              <text x={p.sx + 7} y={p.sy - 5} fontSize={14} fontWeight={800} fill={col(vv, i)}>{vv.label || ["u", "v", "w"][i] || "v" + i}</text>
              {!is3d && vv.slider && <circle cx={p.sx} cy={p.sy} r={6} fill="#fff" stroke={col(vv, i)} strokeWidth={2} style={{ cursor: "grab" }} />}
            </g>
          ); })}
        </svg>

        {/* controls + readouts */}
        <div style={{ flex: "1 1 200px", minWidth: 200, fontSize: 13.5 }}>
          {vecs.map((vv, i) => (
            <div key={i} style={{ marginBottom: 10 }}>
              <div style={{ fontWeight: 800, color: col(vv, i) }}>
                {(vv.label || ["u", "v", "w"][i] || "v")} = ({fmt(vv.x)}, {fmt(vv.y)}{is3d ? `, ${fmt(vv.z ?? 0)}` : ""}) &nbsp;
                <span style={{ color: "#64748b", fontWeight: 600 }}>|{vv.label || "v"}| = {fmt(mag(vv))}</span>
              </div>
              {vv.slider && (["x", "y", ...(is3d ? ["z"] as const : [])] as const).map((k) => (
                <label key={k} style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 3 }}>
                  <span style={{ width: 12, color: "#475569", fontStyle: "italic" }}>{k}</span>
                  <input type="range" min={-range} max={range} step={0.5} value={(vv as any)[k] ?? 0} onChange={(e) => setComp(i, k, Number(e.target.value))} style={{ flex: 1 }} />
                  <span style={{ width: 30, textAlign: "right", color: "#334155" }}>{fmt((vv as any)[k] ?? 0)}</span>
                </label>
              ))}
            </div>
          ))}
          {u && v && (show.dot || show.angle) && (
            <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: 8, marginTop: 4, lineHeight: 1.7 }}>
              {show.dot && <div><b>{(u.label || "u")}·{(v.label || "v")}</b> = {fmt(dot)}</div>}
              {show.angle && <div><b>angle</b> θ ≈ {fmt(angle)}° {Math.abs(dot) < 1e-9 && <span style={{ color: "#16a34a", fontWeight: 700 }}>(perpendicular)</span>}</div>}
            </div>
          )}
          {is3d && show.cross && cross && (
            <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: 8, marginTop: 4 }}>
              <div style={{ color: "#7c3aed", fontWeight: 700 }}>{(u!.label || "u")}×{(v!.label || "v")} = ({fmt(cross.x)}, {fmt(cross.y)}, {fmt(cross.z ?? 0)})</div>
              <div style={{ color: "#64748b" }}>|{(u!.label || "u")}×{(v!.label || "v")}| = {fmt(mag(cross))} (⊥ to both)</div>
            </div>
          )}
          <div style={{ marginTop: 8, color: "#94a3b8", fontSize: 12 }}>
            {is3d ? "Drag the figure to rotate · use the sliders to change components." : "Drag a vector's tip, or use the sliders."}
            <button onClick={reset} style={{ marginLeft: 8, background: "#f1f5f9", border: "1px solid #e2e8f0", borderRadius: 7, padding: "2px 9px", fontWeight: 700, fontSize: 12, cursor: "pointer", color: "#334155" }}>Reset</button>
          </div>
        </div>
      </div>
      {caption && <figcaption style={{ fontSize: 13, color: "#64748b", marginTop: 8, textAlign: "center" }}>{caption}</figcaption>}
    </figure>
  );
}
