"use client";

// MPM2D chapter 6 (similar and right triangles) explorers: similar vs congruent triangles, shadow problems,
// the primary trigonometric ratios defined through similar right triangles, finding sides, finding angles,
// and angles of elevation and depression.

import { useState, type ReactNode } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard } from "./kit";
import { r2 } from "./Systems";

type P = [number, number];
const rad = (d: number) => (d * Math.PI) / 180, deg = (r: number) => (r * 180) / Math.PI;
const mid = (a: P, b: P): P => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];

/** an SVG scene in world units (y up), fitted to the box */
function Scene({ pts, w = 420, h = 260, label, children }: { pts: P[]; w?: number; h?: number; label: string; children: (X: (p: P) => [number, number], s: number) => ReactNode }) {
  const xs = pts.map((p) => p[0]), ys = pts.map((p) => p[1]);
  const x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys), pad = 34;
  const s = Math.min((w - 2 * pad) / Math.max(x1 - x0, 1e-9), (h - 2 * pad) / Math.max(y1 - y0, 1e-9));
  const ox = (w - (x1 - x0) * s) / 2, oy = (h - (y1 - y0) * s) / 2;
  const X = (p: P): [number, number] => [ox + (p[0] - x0) * s, h - oy - (p[1] - y0) * s];
  return <svg viewBox={`0 0 ${w} ${h}`} style={{ width: "100%", maxWidth: w, display: "block", margin: "6px auto" }} role="img" aria-label={label}>{children(X, s)}</svg>;
}
const poly = (X: (p: P) => [number, number], pts: P[], fill: string, stroke: string) => <polygon points={pts.map((p) => X(p).join(",")).join(" ")} fill={fill} stroke={stroke} strokeWidth={2.5} strokeLinejoin="round" />;
/** text placed outside the triangle near the side midpoint */
function sideText(X: (p: P) => [number, number], a: P, b: P, g: P, t: string, color: string, key?: string | number) {
  const m = mid(a, b), [mx, my] = X(m), [gx, gy] = X(g), dx = mx - gx, dy = my - gy, L = Math.hypot(dx, dy) || 1;
  return <text key={key} x={mx + (dx / L) * 16} y={my + (dy / L) * 16 + 5} fontSize={13} fontWeight={700} textAnchor="middle" fill={color} stroke="#fff" strokeWidth={3} paintOrder="stroke">{t}</text>;
}
function vertexText(X: (p: P) => [number, number], v: P, g: P, t: string, key?: string | number) {
  const [vx, vy] = X(v), [gx, gy] = X(g), dx = vx - gx, dy = vy - gy, L = Math.hypot(dx, dy) || 1;
  return <text key={key} x={vx + (dx / L) * 14} y={vy + (dy / L) * 14 + 5} fontSize={14} fontWeight={700} textAnchor="middle" fill={C.ink}>{t}</text>;
}
function rightMark(X: (p: P) => [number, number], q: P, a: P, b: P, k = 12) {
  const [qx, qy] = X(q), [ax, ay] = X(a), [bx, by] = X(b);
  const u = [(ax - qx) / Math.hypot(ax - qx, ay - qy), (ay - qy) / Math.hypot(ax - qx, ay - qy)], v = [(bx - qx) / Math.hypot(bx - qx, by - qy), (by - qy) / Math.hypot(bx - qx, by - qy)];
  return <polyline points={`${qx + u[0] * k},${qy + u[1] * k} ${qx + u[0] * k + v[0] * k},${qy + u[1] * k + v[1] * k} ${qx + v[0] * k},${qy + v[1] * k}`} fill="none" stroke={C.muted} strokeWidth={1.6} />;
}
function arc(X: (p: P) => [number, number], q: P, a: P, b: P, color: string, label?: string, r = 26) {
  const [qx, qy] = X(q), [ax, ay] = X(a), [bx, by] = X(b);
  const t1 = Math.atan2(ay - qy, ax - qx), t2 = Math.atan2(by - qy, bx - qx);
  let d = t2 - t1; while (d <= -Math.PI) d += 2 * Math.PI; while (d > Math.PI) d -= 2 * Math.PI;
  const e1 = [qx + r * Math.cos(t1), qy + r * Math.sin(t1)], e2 = [qx + r * Math.cos(t1 + d), qy + r * Math.sin(t1 + d)], m = t1 + d / 2;
  return (
    <g>
      <path d={`M${e1[0]},${e1[1]} A${r},${r} 0 0 ${d > 0 ? 1 : 0} ${e2[0]},${e2[1]}`} fill="none" stroke={color} strokeWidth={2} />
      {label && <text x={qx + (r + 14) * Math.cos(m)} y={qy + (r + 14) * Math.sin(m) + 5} fontSize={12.5} fontWeight={700} textAnchor="middle" fill={color} stroke="#fff" strokeWidth={3} paintOrder="stroke">{label}</text>}
    </g>
  );
}
const cent = (a: P, b: P, c: P): P => [(a[0] + b[0] + c[0]) / 3, (a[1] + b[1] + c[1]) / 3];

/* ---------------------------------------------------------------- 6.1 similar and congruent triangles */

export function SimilarLab({ init = [50, 60, 1.5] }: { init?: [number, number, number] }) {
  const [al, setAl] = useState(init[0]), [be, setBe] = useState(init[1]), [k, setK] = useState(init[2]);
  const ga = 180 - al - be, c = 4, b = (c * Math.sin(rad(be))) / Math.sin(rad(ga)), a = (c * Math.sin(rad(al))) / Math.sin(rad(ga));
  const A: P = [0, 0], B: P = [c, 0], Cc: P = [b * Math.cos(rad(al)), b * Math.sin(rad(al))];
  const off = c + 1.6, D: P = [off, 0], E: P = [off + k * c, 0], F: P = [off + k * Cc[0], k * Cc[1]];
  const g1 = cent(A, B, Cc), g2 = cent(D, E, F);
  return (
    <WidgetCard title="Similar or congruent?" subtitle="similar: equal angles, proportional sides; congruent: equal angles and equal sides">
      <Row gap={10}>
        <Slider label="∠A" value={al} min={25} max={85} onChange={(v) => setAl(Math.min(v, 150 - be))} color={C.amber} format={(v) => `${v}°`} />
        <Slider label="∠B" value={be} min={25} max={85} onChange={(v) => setBe(Math.min(v, 150 - al))} color={C.amber} format={(v) => `${v}°`} />
        <Slider label="scale factor k" value={k} min={0.5} max={2} step={0.25} onChange={setK} color={C.blue} />
      </Row>
      <Scene pts={[A, B, Cc, D, E, F]} label="Two triangles" w={480} h={260}>
        {(X) => (
          <>
            {poly(X, [A, B, Cc], C.blueSoft, C.blue)}
            {poly(X, [D, E, F], C.greenSoft, C.green)}
            {arc(X, A, B, Cc, C.amber, `${al}°`)}{arc(X, B, Cc, A, C.amber, `${be}°`)}
            {arc(X, D, E, F, C.amber, `${al}°`)}{arc(X, E, F, D, C.amber, `${be}°`)}
            {sideText(X, A, B, g1, r2(c, 1), C.blue, "c")}{sideText(X, B, Cc, g1, r2(a, 1), C.blue, "a")}{sideText(X, Cc, A, g1, r2(b, 1), C.blue, "b")}
            {sideText(X, D, E, g2, r2(k * c, 1), C.green, "f")}{sideText(X, E, F, g2, r2(k * a, 1), C.green, "d")}{sideText(X, F, D, g2, r2(k * b, 1), C.green, "e")}
            {vertexText(X, A, g1, "A", 1)}{vertexText(X, B, g1, "B", 2)}{vertexText(X, Cc, g1, "C", 3)}
            {vertexText(X, D, g2, "D", 4)}{vertexText(X, E, g2, "E", 5)}{vertexText(X, F, g2, "F", 6)}
          </>
        )}
      </Scene>
      <Readout tone={k === 1 ? "amber" : "green"}>
        <MathText block html={`Corresponding angles: \\(\\angle A=\\angle D=${al}^\\circ\\), \\(\\angle B=\\angle E=${be}^\\circ\\), \\(\\angle C=\\angle F=${ga}^\\circ\\).`} />
        <MathText block html={`Side ratios: \\(\\frac{DE}{AB}=\\frac{${r2(k * c, 2)}}{${r2(c, 2)}}=${r2(k)}\\), \\(\\frac{EF}{BC}=${r2(k)}\\), \\(\\frac{DF}{AC}=${r2(k)}\\). ${k === 1 ? "With k = 1 the triangles are <strong>congruent</strong>: same shape and same size." : `\\(\\triangle ABC\\sim\\triangle DEF\\) with scale factor \\(${r2(k)}\\): same shape, ${k > 1 ? "larger" : "smaller"} size.`}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 6.2 shadows */

export function ShadowLab({ init = [1.6, 2.4, 15] }: { init?: [number, number, number] }) {
  const [h1, setH1] = useState(init[0]), [s1, setS1] = useState(init[1]), [s2, setS2] = useState(init[2]);
  const H = (h1 * s2) / s1, gap = 1.5;
  const tB: P = [0, 0], tT: P = [0, H], tS: P = [s2, 0], pB: P = [s2 + gap, 0], pT: P = [s2 + gap, h1], pS: P = [s2 + gap + s1, 0];
  const sunAngle = deg(Math.atan(h1 / s1));
  return (
    <WidgetCard title="Shadows and similar triangles" subtitle="the sun's rays are parallel, so the two right triangles are similar">
      <Row gap={10}>
        <Slider label="person height (m)" value={h1} min={1.2} max={2} step={0.1} onChange={setH1} color={C.blue} />
        <Slider label="person's shadow (m)" value={s1} min={0.8} max={4} step={0.2} onChange={setS1} color={C.blue} />
        <Slider label="tree's shadow (m)" value={s2} min={4} max={24} onChange={setS2} color={C.green} />
      </Row>
      <Scene pts={[tB, tT, tS, pB, pT, pS, [0, H * 1.08]]} label="Tree and person shadows" w={480} h={260}>
        {(X) => (
          <>
            <line x1={X([-1, 0])[0]} y1={X([0, 0])[1]} x2={X([pS[0] + 1, 0])[0]} y2={X([0, 0])[1]} stroke={C.muted} strokeWidth={2} />
            {poly(X, [tB, tT, tS], C.greenSoft, C.green)}
            {poly(X, [pB, pT, pS], C.blueSoft, C.blue)}
            {rightMark(X, tB, tT, tS)}{rightMark(X, pB, pT, pS)}
            {arc(X, tS, tT, tB, C.amber, `${r2(sunAngle, 0)}°`)}{arc(X, pS, pT, pB, C.amber, `${r2(sunAngle, 0)}°`)}
            {sideText(X, tB, tT, cent(tB, tT, tS), `${r2(H, 1)} m`, C.green, 1)}{sideText(X, tB, tS, cent(tB, tT, tS), `${s2} m`, C.green, 2)}
            {sideText(X, pB, pT, cent(pB, pT, pS), `${h1} m`, C.blue, 3)}{sideText(X, pB, pS, cent(pB, pT, pS), `${s1} m`, C.blue, 4)}
          </>
        )}
      </Scene>
      <Readout tone="green">
        <MathText block html={`Both triangles have a right angle and the same sun angle (about \\(${r2(sunAngle, 0)}^\\circ\\)), so they are similar (AA).`} />
        <MathText block html={`\\(\\dfrac{\\text{tree}}{\\text{person}}=\\dfrac{\\text{tree's shadow}}{\\text{person's shadow}}\\Rightarrow\\dfrac{h}{${h1}}=\\dfrac{${s2}}{${s1}}\\Rightarrow h=\\dfrac{${h1}\\times${s2}}{${s1}}\\approx${r2(H, 2)}\\) m.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 6.3 the ratios are the same in every similar right triangle */

export function RatioLab({ init = [35, 6] }: { init?: [number, number] }) {
  const [t, setT] = useState(init[0]), [size, setSize] = useState(init[1]);
  const adj = size, opp = size * Math.tan(rad(t)), hyp = Math.hypot(adj, opp);
  const A: P = [0, 0], B: P = [adj, 0], Cc: P = [adj, opp], g = cent(A, B, Cc);
  // a smaller similar triangle inside for comparison
  const k = 0.5, b2: P = [adj * k, 0], c2: P = [adj * k, opp * k];
  return (
    <WidgetCard title="Why the ratios are constant" subtitle="every right triangle with the same angle θ is similar, so opp/hyp, adj/hyp and opp/adj never change">
      <Row gap={10}>
        <Slider label="angle θ" value={t} min={10} max={75} onChange={setT} color={C.amber} format={(v) => `${v}°`} />
        <Slider label="size (adjacent side)" value={size} min={2} max={10} onChange={setSize} color={C.blue} />
      </Row>
      <Scene pts={[A, B, Cc]} label="Right triangle with angle theta" w={440} h={280}>
        {(X) => (
          <>
            {poly(X, [A, B, Cc], C.blueSoft, C.blue)}
            <polygon points={[A, b2, c2].map((p) => X(p).join(",")).join(" ")} fill="none" stroke={C.violet} strokeWidth={1.8} strokeDasharray="6 4" />
            {rightMark(X, B, A, Cc)}
            {arc(X, A, B, Cc, C.amber, `θ = ${t}°`, 34)}
            {sideText(X, A, B, g, `adj ${r2(adj, 2)}`, C.green, 1)}
            {sideText(X, B, Cc, g, `opp ${r2(opp, 2)}`, C.red, 2)}
            {sideText(X, A, Cc, g, `hyp ${r2(hyp, 2)}`, C.blue, 3)}
          </>
        )}
      </Scene>
      <Row gap={10} style={{ justifyContent: "center", flexWrap: "wrap" }}>
        {[["sin θ", "opp/hyp", opp / hyp, C.red], ["cos θ", "adj/hyp", adj / hyp, C.green], ["tan θ", "opp/adj", opp / adj, C.violet]].map(([n, f, v, col]) => (
          <div key={n as string} style={{ border: `2px solid ${col}`, borderRadius: 10, padding: "6px 14px", textAlign: "center", minWidth: 120 }}>
            <div style={{ fontWeight: 700, color: col as string }}>{n as string} = {f as string}</div>
            <div style={{ fontSize: 20, fontWeight: 700 }}>{(v as number).toFixed(4)}</div>
          </div>
        ))}
      </Row>
      <Readout tone="green">
        <MathText html={`Change the size: every side changes, but the three ratios do not — the dashed triangle (half the size) is similar, so its sides are in the same ratios. That is why \\(\\sin ${t}^\\circ\\approx${(opp / hyp).toFixed(4)}\\) is a fixed number your calculator knows.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 6.4 finding a side */

type Side = "opp" | "adj" | "hyp";
const NAME: Record<Side, string> = { opp: "opposite", adj: "adjacent", hyp: "hypotenuse" };
export function SideFinder({ init = [40, 10] }: { init?: [number, number] }) {
  const [t, setT] = useState(init[0]), [len, setLen] = useState(init[1]);
  const [known, setKnown] = useState<Side>("hyp"), [want, setWant] = useState<Side>("opp");
  const W: Side = want === known ? (known === "opp" ? "adj" : "opp") : want;
  const s = Math.sin(rad(t)), c = Math.cos(rad(t)), tn = Math.tan(rad(t));
  const sides: Record<Side, number> = known === "hyp" ? { hyp: len, opp: len * s, adj: len * c } : known === "adj" ? { adj: len, opp: len * tn, hyp: len / c } : { opp: len, adj: len / tn, hyp: len / s };
  const pair = [known, W].sort().join("-");
  const ratio = pair === "hyp-opp" ? "sin" : pair === "adj-hyp" ? "cos" : "tan";
  const top: Side = ratio === "sin" ? "opp" : ratio === "cos" ? "adj" : "opp", bot: Side = ratio === "tan" ? "adj" : "hyp";
  const unknownOnTop = top === W;
  const eq = `\\${ratio} ${t}^\\circ=\\dfrac{${top === W ? "x" : r2(len)}}{${bot === W ? "x" : r2(len)}}`;
  const solve = unknownOnTop ? `x=${r2(len)}\\${ratio} ${t}^\\circ` : `x=\\dfrac{${r2(len)}}{\\${ratio} ${t}^\\circ}`;
  const A: P = [0, 0], B: P = [sides.adj, 0], Cc: P = [sides.adj, sides.opp], g = cent(A, B, Cc);
  const lab = (sd: Side) => (sd === known ? r2(len) : sd === W ? "x" : "");
  return (
    <WidgetCard title="Finding a side" subtitle="label the sides from θ, pick the ratio that uses the known side and the unknown, then solve">
      <Row gap={10}>
        <Slider label="angle θ" value={t} min={10} max={80} onChange={setT} color={C.amber} format={(v) => `${v}°`} />
        <Slider label="known side length" value={len} min={2} max={20} onChange={setLen} color={C.blue} />
      </Row>
      <Segmented label="Known side" options={[{ value: "hyp", label: "hypotenuse" }, { value: "adj", label: "adjacent" }, { value: "opp", label: "opposite" }]} value={known} onChange={setKnown} />
      <Segmented label="Find" options={(["opp", "adj", "hyp"] as Side[]).filter((x) => x !== known).map((x) => ({ value: x, label: NAME[x] }))} value={W} onChange={setWant} />
      <Scene pts={[A, B, Cc]} label="Right triangle for finding a side" w={420} h={250}>
        {(X) => (
          <>
            {poly(X, [A, B, Cc], C.blueSoft, C.blue)}
            {rightMark(X, B, A, Cc)}{arc(X, A, B, Cc, C.amber, `${t}°`, 32)}
            {sideText(X, A, B, g, lab("adj"), known === "adj" ? C.blue : C.red, 1)}
            {sideText(X, B, Cc, g, lab("opp"), known === "opp" ? C.blue : C.red, 2)}
            {sideText(X, A, Cc, g, lab("hyp"), known === "hyp" ? C.blue : C.red, 3)}
          </>
        )}
      </Scene>
      <Readout tone="green">
        <MathText block html={`Known: ${NAME[known]}; unknown: ${NAME[W]} → use <strong>${ratio}</strong> (${ratio === "sin" ? "SOH" : ratio === "cos" ? "CAH" : "TOA"}).`} />
        <MathText block html={`\\(${eq}\\;\\Rightarrow\\; ${solve}\\approx${r2(sides[W], 2)}\\)${unknownOnTop ? "" : " (the unknown is in the denominator, so divide)"}.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 6.5 finding an angle */

export function AngleFinder({ init = [5, 12] }: { init?: [number, number] }) {
  const [p, setP] = useState(init[0]), [q, setQ] = useState(init[1]);
  const [pair, setPair] = useState<"tan" | "sin" | "cos">("tan");
  // pair tan: p = opp, q = adj; sin: p = opp, q = hyp; cos: p = adj, q = hyp
  const Q = pair === "tan" ? q : Math.max(q, p + 1);
  const theta = pair === "tan" ? deg(Math.atan(p / Q)) : pair === "sin" ? deg(Math.asin(p / Q)) : deg(Math.acos(p / Q));
  const opp = pair === "cos" ? Math.sqrt(Q * Q - p * p) : p, adj = pair === "tan" ? Q : pair === "sin" ? Math.sqrt(Q * Q - p * p) : p;
  const A: P = [0, 0], B: P = [adj, 0], Cc: P = [adj, opp], g = cent(A, B, Cc);
  const names = pair === "tan" ? ["opposite", "adjacent"] : pair === "sin" ? ["opposite", "hypotenuse"] : ["adjacent", "hypotenuse"];
  return (
    <WidgetCard title="Finding an angle" subtitle="write the ratio from two known sides, then use the inverse key: sin⁻¹, cos⁻¹ or tan⁻¹">
      <Segmented label="Known sides" options={[{ value: "tan", label: "opp & adj" }, { value: "sin", label: "opp & hyp" }, { value: "cos", label: "adj & hyp" }]} value={pair} onChange={setPair} />
      <Row gap={10}>
        <Slider label={names[0]} value={p} min={1} max={15} onChange={setP} color={C.red} />
        <Slider label={names[1]} value={Q} min={pair === "tan" ? 1 : p + 1} max={20} onChange={setQ} color={C.blue} />
      </Row>
      <Scene pts={[A, B, Cc]} label="Right triangle for finding an angle" w={420} h={250}>
        {(X) => (
          <>
            {poly(X, [A, B, Cc], C.blueSoft, C.blue)}
            {rightMark(X, B, A, Cc)}{arc(X, A, B, Cc, C.amber, "θ", 32)}
            {sideText(X, A, B, g, pair === "sin" ? "" : r2(adj), C.green, 1)}
            {sideText(X, B, Cc, g, pair === "cos" ? "" : r2(opp), C.red, 2)}
            {sideText(X, A, Cc, g, pair === "tan" ? "" : r2(Q), C.blue, 3)}
          </>
        )}
      </Scene>
      <Readout tone="green">
        <MathText block html={`\\(\\${pair}\\theta=\\dfrac{${p}}{${Q}}\\approx${(p / Q).toFixed(4)}\\;\\Rightarrow\\;\\theta=\\${pair}^{-1}\\!\\left(\\dfrac{${p}}{${Q}}\\right)\\approx${r2(theta, 1)}^\\circ\\).`} />
        <MathText block html={`The other acute angle is \\(90^\\circ-${r2(theta, 1)}^\\circ=${r2(90 - theta, 1)}^\\circ\\). Check: a bigger opposite side (or smaller adjacent) gives a bigger angle.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 6.6 elevation and depression */

export function ElevationLab({ init = [30, 35] }: { init?: [number, number] }) {
  const [mode, setMode] = useState<"elev" | "dep">("elev");
  const [d, setD] = useState(init[0]), [t, setT] = useState(init[1]), [e, setE] = useState(1.6);
  const [cliff, setCliff] = useState(60);
  if (mode === "elev") {
    const h = e + d * Math.tan(rad(t));
    const O: P = [0, e], G: P = [0, 0], T: P = [d, h], Bb: P = [d, 0], Hh: P = [d, e];
    return (
      <WidgetCard title="Angles of elevation and depression" subtitle="measured from the horizontal, up (elevation) or down (depression)">
        <Segmented options={[{ value: "elev", label: "angle of elevation" }, { value: "dep", label: "angle of depression" }]} value={mode} onChange={setMode} />
        <Row gap={10}>
          <Slider label="distance to building (m)" value={d} min={10} max={80} onChange={setD} color={C.blue} />
          <Slider label="angle of elevation" value={t} min={10} max={70} onChange={setT} color={C.amber} format={(v) => `${v}°`} />
          <Slider label="eye height (m)" value={e} min={0} max={2} step={0.1} onChange={setE} color={C.green} />
        </Row>
        <Scene pts={[G, T, Bb, [-d * 0.08, 0]]} label="Angle of elevation" w={460} h={270}>
          {(X) => (
            <>
              <rect x={X([d, h])[0]} y={X([d, h])[1]} width={X([d + d * 0.12, 0])[0] - X([d, 0])[0]} height={X([d, 0])[1] - X([d, h])[1]} fill="#e2e8f0" stroke={C.muted} />
              <line x1={X(G)[0]} y1={X(G)[1]} x2={X(Bb)[0]} y2={X(Bb)[1]} stroke={C.muted} strokeWidth={2} />
              <line x1={X(G)[0]} y1={X(G)[1]} x2={X(O)[0]} y2={X(O)[1]} stroke={C.green} strokeWidth={4} />
              <line x1={X(O)[0]} y1={X(O)[1]} x2={X(Hh)[0]} y2={X(Hh)[1]} stroke={C.muted} strokeWidth={1.6} strokeDasharray="6 4" />
              <line x1={X(O)[0]} y1={X(O)[1]} x2={X(T)[0]} y2={X(T)[1]} stroke={C.red} strokeWidth={2.4} />
              {arc(X, O, Hh, T, C.amber, `${t}°`, 38)}{rightMark(X, Hh, O, T)}
              <text x={X([d / 2, 0])[0]} y={X([d / 2, 0])[1] + 18} fontSize={13} fontWeight={700} textAnchor="middle" fill={C.blue}>{d} m</text>
              {e > 0 && <text x={X(O)[0] - 6} y={(X(O)[1] + X(G)[1]) / 2 + 4} fontSize={12} fontWeight={700} textAnchor="end" fill={C.green}>{e} m</text>}
            </>
          )}
        </Scene>
        <Readout tone="green">
          <MathText block html={`Above eye level: \\(\\tan ${t}^\\circ=\\dfrac{x}{${d}}\\Rightarrow x=${d}\\tan ${t}^\\circ\\approx${r2(d * Math.tan(rad(t)), 2)}\\) m.`} />
          <MathText block html={`Building height \\(\\approx${r2(d * Math.tan(rad(t)), 2)}+${e}=${r2(h, 2)}\\) m. ${e ? "Remember to add the eye height." : ""}`} />
        </Readout>
      </WidgetCard>
    );
  }
  const dist = cliff / Math.tan(rad(t));
  const Top: P = [0, cliff], Base: P = [0, 0], Boat: P = [dist, 0], Hz: P = [dist, cliff];
  return (
    <WidgetCard title="Angles of elevation and depression" subtitle="measured from the horizontal, up (elevation) or down (depression)">
      <Segmented options={[{ value: "elev", label: "angle of elevation" }, { value: "dep", label: "angle of depression" }]} value={mode} onChange={setMode} />
      <Row gap={10}>
        <Slider label="cliff height (m)" value={cliff} min={20} max={120} step={5} onChange={setCliff} color={C.green} />
        <Slider label="angle of depression" value={t} min={10} max={70} onChange={setT} color={C.amber} format={(v) => `${v}°`} />
      </Row>
      <Scene pts={[Top, Base, Boat, Hz]} label="Angle of depression" w={460} h={270}>
        {(X) => (
          <>
            <line x1={X(Base)[0]} y1={X(Base)[1]} x2={X(Top)[0]} y2={X(Top)[1]} stroke={C.green} strokeWidth={4} />
            <line x1={X(Base)[0]} y1={X(Base)[1]} x2={X([dist * 1.08, 0])[0]} y2={X(Base)[1]} stroke="#60a5fa" strokeWidth={3} />
            <line x1={X(Top)[0]} y1={X(Top)[1]} x2={X(Hz)[0]} y2={X(Hz)[1]} stroke={C.muted} strokeWidth={1.6} strokeDasharray="6 4" />
            <line x1={X(Top)[0]} y1={X(Top)[1]} x2={X(Boat)[0]} y2={X(Boat)[1]} stroke={C.red} strokeWidth={2.4} />
            {arc(X, Top, Hz, Boat, C.amber, `${t}°`, 44)}<text x={X(Hz)[0]} y={X(Hz)[1] - 8} fontSize={12} textAnchor="end" fill={C.muted}>horizontal</text>{arc(X, Boat, Top, Base, C.violet, `${t}°`, 32)}
            {rightMark(X, Base, Top, Boat)}
            <circle cx={X(Boat)[0]} cy={X(Boat)[1]} r={6} fill={C.blue} />
            {sideText(X, Base, Top, [dist / 2, cliff / 3], `${cliff} m`, C.green, 1)}
          </>
        )}
      </Scene>
      <Readout tone="green">
        <MathText block html={`The horizontal line and the ground are parallel, so the angle of depression equals the angle of elevation from the boat (alternate angles): \\(${t}^\\circ\\).`} />
        <MathText block html={`\\(\\tan ${t}^\\circ=\\dfrac{${cliff}}{x}\\Rightarrow x=\\dfrac{${cliff}}{\\tan ${t}^\\circ}\\approx${r2(dist, 2)}\\) m from the base of the cliff.`} />
      </Readout>
    </WidgetCard>
  );
}
