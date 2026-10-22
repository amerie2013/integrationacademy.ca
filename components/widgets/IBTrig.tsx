"use client";

// IB AA SL chapter 11 (geometry and trigonometry) explorers: volume, surface area and space diagonal of 3D solids,
// right-angled trigonometric ratios, the sine rule with the ambiguous case, the cosine rule with the area of a
// triangle, and a two-leg journey on bearings.

import { useState } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard } from "./kit";
import { r2 } from "./Systems";

const n2 = (v: number, d = 2) => r2(v, d);
const rad = (d: number) => (d * Math.PI) / 180, deg = (r: number) => (r * 180) / Math.PI;
const Box = ({ children, h = 260 }: { children: React.ReactNode; h?: number }) => (
  <svg viewBox={`0 0 520 ${h}`} style={{ width: "100%", maxWidth: 560, display: "block", margin: "0 auto", background: "#fff" }}>{children}</svg>
);
/** fit a list of points into the box and return a mapper */
function fitter(pts: [number, number][], W = 520, H = 260, pad = 40) {
  const xs = pts.map((p) => p[0]), ys = pts.map((p) => p[1]);
  const x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys);
  const s = Math.min((W - 2 * pad) / Math.max(x1 - x0, 1e-6), (H - 2 * pad) / Math.max(y1 - y0, 1e-6));
  const ox = (W - (x1 - x0) * s) / 2, oy = (H - (y1 - y0) * s) / 2;
  return (p: [number, number]) => [ox + (p[0] - x0) * s, H - oy - (p[1] - y0) * s] as [number, number];
}
const pts = (P: [number, number][]) => P.map((p) => p.join(",")).join(" ");
const Label = ({ at, t, color = "#0f172a", size = 14 }: { at: [number, number]; t: string; color?: string; size?: number }) => <text x={at[0]} y={at[1]} fontSize={size} fontWeight={700} fill={color} textAnchor="middle">{t}</text>;

/* ---------------------------------------------------------------- 11.1 solids */

const SOLIDS = ["cuboid", "cylinder", "cone", "sphere", "square pyramid"];

export function IBSolid({ init = [0, 6, 4, 3] }: { init?: [number, number, number, number] }) {
  const [k, setK] = useState(init[0]), [p, setP] = useState(init[1]), [q, setQ] = useState(init[2]), [r, setR] = useState(init[3]);
  let V = 0, A = 0, extra = "", tex = "";
  const O: [number, number] = [0.45, 0.32];
  const pr = (x: number, y: number, z: number): [number, number] => [x + z * O[0], y + z * O[1]];
  let draw: React.ReactNode = null;
  if (k === 0) {
    V = p * q * r; A = 2 * (p * q + q * r + p * r);
    const d = Math.hypot(p, q, r), fd = Math.hypot(p, r), th = deg(Math.atan2(q, fd));
    extra = `Space diagonal \\(\\sqrt{${p}^2+${r}^2+${q}^2}=${n2(d, 3)}\\); angle with the base \\(\\tan^{-1}\\frac{${q}}{${n2(fd, 3)}}=${n2(th, 2)}^\\circ\\).`;
    tex = `V=lwh,\\ S=2(lw+wh+lh)`;
    const P8 = [pr(0, 0, 0), pr(p, 0, 0), pr(p, q, 0), pr(0, q, 0), pr(0, 0, r), pr(p, 0, r), pr(p, q, r), pr(0, q, r)];
    const M = fitter(P8);
    const m = P8.map(M);
    draw = <>
      <polygon points={pts([m[0], m[1], m[2], m[3]])} fill="#dbeafe" stroke={C.blue} strokeWidth={2} />
      <polygon points={pts([m[3], m[2], m[6], m[7]])} fill="#eff6ff" stroke={C.blue} strokeWidth={2} />
      <polygon points={pts([m[1], m[5], m[6], m[2]])} fill="#bfdbfe" stroke={C.blue} strokeWidth={2} />
      <polyline points={pts([m[0], m[4], m[5]])} fill="none" stroke={C.blue} strokeDasharray="5 4" />
      <line x1={m[4][0]} y1={m[4][1]} x2={m[7][0]} y2={m[7][1]} stroke={C.blue} strokeDasharray="5 4" />
      <line x1={m[0][0]} y1={m[0][1]} x2={m[5][0]} y2={m[5][1]} stroke={C.green} strokeWidth={2} strokeDasharray="6 4" />
      <line x1={m[0][0]} y1={m[0][1]} x2={m[6][0]} y2={m[6][1]} stroke={C.red} strokeWidth={2.6} />
    </>;
  } else if (k === 1 || k === 2) {
    const R = p / 2, H = q;
    if (k === 1) { V = Math.PI * R * R * H; A = 2 * Math.PI * R * R + 2 * Math.PI * R * H; tex = `V=\\pi r^2h,\\ S=2\\pi r^2+2\\pi rh`; }
    else { const l = Math.hypot(R, H); V = (Math.PI * R * R * H) / 3; A = Math.PI * R * R + Math.PI * R * l; tex = `V=\\tfrac13\\pi r^2h,\\ S=\\pi r^2+\\pi rl`; extra = `Slant height \\(l=\\sqrt{r^2+h^2}=${n2(l, 3)}\\).`; }
    const M = fitter([[-R, -R * 0.3], [R, H + R * 0.3]]);
    const [cx, cy] = M([0, 0]), [rx] = M([R, 0]), [, ty] = M([0, H]), ry = (rx - cx) * 0.3;
    draw = <>
      {k === 1 ? <>
        <rect x={cx - (rx - cx)} y={ty} width={2 * (rx - cx)} height={cy - ty} fill="#ede9fe" />
        <line x1={cx - (rx - cx)} y1={ty} x2={cx - (rx - cx)} y2={cy} stroke={C.violet} strokeWidth={2} />
        <line x1={rx} y1={ty} x2={rx} y2={cy} stroke={C.violet} strokeWidth={2} />
        <ellipse cx={cx} cy={ty} rx={rx - cx} ry={ry} fill="#f5f3ff" stroke={C.violet} strokeWidth={2} />
      </> : <polygon points={pts([[cx - (rx - cx), cy], [cx, ty], [rx, cy]])} fill="#fef3c7" stroke={C.amber} strokeWidth={2} />}
      <ellipse cx={cx} cy={cy} rx={rx - cx} ry={ry} fill="none" stroke={k === 1 ? C.violet : C.amber} strokeWidth={2} />
      <line x1={cx} y1={cy} x2={rx} y2={cy} stroke={C.red} strokeWidth={2} /><Label at={[(cx + rx) / 2, cy - 6]} t={`r = ${n2(R)}`} color={C.red} size={12} />
      <line x1={cx} y1={cy} x2={cx} y2={ty} stroke={C.green} strokeWidth={2} strokeDasharray="5 4" /><Label at={[cx - 24, (cy + ty) / 2]} t={`h = ${n2(H)}`} color={C.green} size={12} />
    </>;
  } else if (k === 3) {
    const R = p / 2; V = (4 / 3) * Math.PI * R ** 3; A = 4 * Math.PI * R * R; tex = `V=\\tfrac43\\pi r^3,\\ S=4\\pi r^2`;
    draw = <><circle cx={260} cy={130} r={100} fill="#dcfce7" stroke={C.green} strokeWidth={2} /><ellipse cx={260} cy={130} rx={100} ry={28} fill="none" stroke={C.green} strokeDasharray="5 4" /><line x1={260} y1={130} x2={360} y2={130} stroke={C.red} strokeWidth={2} /><Label at={[310, 122]} t={`r = ${n2(R)}`} color={C.red} size={12} /></>;
  } else {
    const b = p, H = q, sl = Math.hypot(b / 2, H); V = (b * b * H) / 3; A = b * b + 2 * b * sl; tex = `V=\\tfrac13b^2h,\\ S=b^2+4\\cdot\\tfrac12b\\,l`;
    extra = `Slant height of a face \\(l=\\sqrt{(b/2)^2+h^2}=${n2(sl, 3)}\\).`;
    const B4 = [pr(0, 0, 0), pr(b, 0, 0), pr(b, 0, b), pr(0, 0, b)], T = pr(b / 2, H, b / 2), Cn = pr(b / 2, 0, b / 2);
    const M = fitter([...B4, T]); const m = B4.map(M), t = M(T), cn = M(Cn);
    draw = <>
      <polygon points={pts(m)} fill="#fef3c7" stroke={C.amber} strokeWidth={2} />
      {m.map((v, i) => <line key={i} x1={v[0]} y1={v[1]} x2={t[0]} y2={t[1]} stroke={C.amber} strokeWidth={2} strokeDasharray={i === 3 ? "5 4" : undefined} />)}
      <line x1={cn[0]} y1={cn[1]} x2={t[0]} y2={t[1]} stroke={C.green} strokeWidth={2} strokeDasharray="5 4" />
    </>;
  }
  return (
    <WidgetCard title="Volume and surface area of solids" subtitle="choose a solid and change its dimensions; for the cuboid, the red line is the space diagonal">
      <Row><Segmented label="solid:" value={k} onChange={setK} options={SOLIDS.map((s, i) => ({ value: i, label: s }))} /></Row>
      <Row>
        <Slider label={k === 0 ? "length l" : k === 4 ? "base b" : "diameter"} value={p} min={2} max={12} step={1} onChange={setP} color={C.blue} />
        {k !== 3 && <Slider label="height h" value={q} min={2} max={12} step={1} onChange={setQ} color={C.green} />}
        {k === 0 && <Slider label="width w" value={r} min={2} max={12} step={1} onChange={setR} color={C.violet} />}
      </Row>
      <Box>{draw}</Box>
      <Readout tone="blue">
        <MathText html={`\\(${tex}\\). Volume \\(=${n2(V, 3)}\\); surface area \\(=${n2(A, 3)}\\). ${extra}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 11.2 right-angled trigonometry */

export function IBRightTrig({ init = [35, 10] }: { init?: [number, number] }) {
  const [a, setA] = useState(init[0]), [h, setH] = useState(init[1]);
  const opp = h * Math.sin(rad(a)), adj = h * Math.cos(rad(a));
  const M = fitter([[0, 0], [adj, 0], [adj, opp]]);
  const A0 = M([0, 0]), B0 = M([adj, 0]), C0 = M([adj, opp]);
  return (
    <WidgetCard title="SOH CAH TOA" subtitle="in a right-angled triangle, sin θ = opposite/hypotenuse, cos θ = adjacent/hypotenuse, tan θ = opposite/adjacent">
      <Row>
        <Slider label="angle θ" value={a} min={5} max={85} step={1} onChange={setA} color={C.amber} />
        <Slider label="hypotenuse" value={h} min={2} max={20} step={1} onChange={setH} color={C.violet} />
      </Row>
      <Box>
        <polygon points={pts([A0, B0, C0])} fill="#dbeafe" stroke={C.blue} strokeWidth={2} />
        <polyline points={pts([[B0[0] - 14, B0[1]], [B0[0] - 14, B0[1] - 14], [B0[0], B0[1] - 14]])} fill="none" stroke="#0f172a" />
        <path d={`M ${A0[0] + 40} ${A0[1]} A 40 40 0 0 0 ${A0[0] + 40 * Math.cos(rad(a))} ${A0[1] - 40 * Math.sin(rad(a))}`} fill="none" stroke={C.amber} strokeWidth={2} />
        <Label at={[A0[0] + 58, A0[1] - 10]} t="θ" color={C.amber} />
        <Label at={[(A0[0] + B0[0]) / 2, B0[1] + 20]} t={`adj = ${n2(adj)}`} color={C.green} />
        <Label at={[B0[0] + 50, (B0[1] + C0[1]) / 2]} t={`opp = ${n2(opp)}`} color={C.red} />
        <Label at={[(A0[0] + C0[0]) / 2 - 30, (A0[1] + C0[1]) / 2 - 8]} t={`hyp = ${h}`} color={C.violet} />
      </Box>
      <Readout tone="blue">
        <MathText html={`\\(\\sin${a}^\\circ=\\frac{${n2(opp, 3)}}{${h}}=${n2(Math.sin(rad(a)), 4)}\\), \\(\\cos${a}^\\circ=\\frac{${n2(adj, 3)}}{${h}}=${n2(Math.cos(rad(a)), 4)}\\), \\(\\tan${a}^\\circ=\\frac{${n2(opp, 3)}}{${n2(adj, 3)}}=${n2(Math.tan(rad(a)), 4)}\\). The ratios depend only on the angle, not the size of the triangle.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 11.3 sine rule and the ambiguous case */

export function IBSineRule({ init = [35, 10, 7] }: { init?: [number, number, number] }) {
  const [A, setA] = useState(init[0]), [b, setB] = useState(init[1]), [a, setAa] = useState(init[2]);
  const s = (b * Math.sin(rad(A))) / a;
  const sols: { B: number; C: number; c: number }[] = [];
  if (s <= 1 + 1e-12) {
    const B1 = deg(Math.asin(Math.min(1, s)));
    for (const Bv of Math.abs(s - 1) < 1e-9 ? [B1] : [B1, 180 - B1]) { const Cv = 180 - A - Bv; if (Cv > 1e-9) sols.push({ B: Bv, C: Cv, c: (a * Math.sin(rad(Cv))) / Math.sin(rad(A)) }); }
  }
  // draw: A at origin, AC = b along the base direction at angle A from AB
  const Cpt: [number, number] = [b * Math.cos(rad(A)), b * Math.sin(rad(A))];
  const ends = sols.map((t) => [t.c, 0] as [number, number]);
  const M = fitter([[0, 0], Cpt, ...ends, [Math.max(b, ...sols.map((t) => t.c)) + 1, 0]]);
  const A0 = M([0, 0]), C0 = M(Cpt);
  return (
    <WidgetCard title="The sine rule and the ambiguous case" subtitle="a/sin A = b/sin B = c/sin C; given A, a and b, there may be no triangle, one, or two">
      <Row>
        <Slider label="angle A" value={A} min={10} max={120} step={1} onChange={setA} color={C.amber} />
        <Slider label="b" value={b} min={3} max={15} step={0.5} onChange={setB} color={C.green} />
        <Slider label="a (opposite A)" value={a} min={2} max={15} step={0.5} onChange={setAa} color={C.red} />
      </Row>
      <Box>
        <line x1={A0[0]} y1={A0[1]} x2={M([Math.max(b, ...sols.map((t) => t.c)) + 1, 0])[0]} y2={A0[1]} stroke="#94a3b8" strokeWidth={1.6} />
        <line x1={A0[0]} y1={A0[1]} x2={C0[0]} y2={C0[1]} stroke={C.green} strokeWidth={3} />
        {sols.map((t, i) => { const B0 = M([t.c, 0]); return <g key={i}><line x1={C0[0]} y1={C0[1]} x2={B0[0]} y2={B0[1]} stroke={i ? C.violet : C.red} strokeWidth={3} strokeDasharray={i ? "7 4" : undefined} /><circle cx={B0[0]} cy={B0[1]} r={5} fill={i ? C.violet : C.red} /><Label at={[B0[0], B0[1] + 20]} t={`B${sols.length > 1 ? i + 1 : ""}`} /></g>; })}
        <Label at={[A0[0] - 12, A0[1] + 18]} t="A" /><Label at={[C0[0], C0[1] - 10]} t="C" />
      </Box>
      <Readout tone={sols.length === 0 ? "amber" : "blue"}>
        <MathText html={`\\(\\sin B=\\frac{b\\sin A}{a}=\\frac{${b}\\sin${A}^\\circ}{${a}}=${n2(s, 4)}\\). ${sols.length === 0 ? "This is greater than 1, so no triangle exists: side a is too short to reach the base." : sols.map((t, i) => `Triangle ${sols.length > 1 ? i + 1 : ""}: \\(B=${n2(t.B, 2)}^\\circ\\), \\(C=${n2(t.C, 2)}^\\circ\\), \\(c=${n2(t.c, 3)}\\).`).join(" ")} ${sols.length === 2 ? "Two triangles: the ambiguous case (a is shorter than b but longer than b sin A)." : ""}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 11.4 cosine rule and area */

export function IBCosineRule({ init = [7, 9, 60] }: { init?: [number, number, number] }) {
  const [a, setA] = useState(init[0]), [b, setB] = useState(init[1]), [Cg, setCg] = useState(init[2]);
  const c = Math.sqrt(a * a + b * b - 2 * a * b * Math.cos(rad(Cg))), area = 0.5 * a * b * Math.sin(rad(Cg));
  const Aang = deg(Math.acos((b * b + c * c - a * a) / (2 * b * c))), Bang = 180 - Cg - Aang;
  const Cp: [number, number] = [0, 0], Bp: [number, number] = [a, 0], Ap: [number, number] = [b * Math.cos(rad(Cg)), b * Math.sin(rad(Cg))];
  const M = fitter([Cp, Bp, Ap]); const C0 = M(Cp), B0 = M(Bp), A0 = M(Ap);
  return (
    <WidgetCard title="The cosine rule and the area of a triangle" subtitle="c² = a² + b² − 2ab cos C; area = ½ab sin C">
      <Row>
        <Slider label="a = CB" value={a} min={2} max={15} step={0.5} onChange={setA} color={C.blue} />
        <Slider label="b = CA" value={b} min={2} max={15} step={0.5} onChange={setB} color={C.green} />
        <Slider label="angle C" value={Cg} min={10} max={170} step={1} onChange={setCg} color={C.amber} />
      </Row>
      <Box>
        <polygon points={pts([C0, B0, A0])} fill="#ede9fe" stroke={C.violet} strokeWidth={2} />
        <line x1={A0[0]} y1={A0[1]} x2={B0[0]} y2={B0[1]} stroke={C.red} strokeWidth={3} />
        <Label at={[C0[0] - 12, C0[1] + 18]} t="C" /><Label at={[B0[0] + 12, B0[1] + 18]} t="B" /><Label at={[A0[0], A0[1] - 10]} t="A" />
        <Label at={[(C0[0] + B0[0]) / 2, C0[1] + 20]} t={`a = ${a}`} color={C.blue} />
        <Label at={[(C0[0] + A0[0]) / 2 - 26, (C0[1] + A0[1]) / 2]} t={`b = ${b}`} color={C.green} />
        <Label at={[(A0[0] + B0[0]) / 2 + 30, (A0[1] + B0[1]) / 2]} t={`c = ${n2(c)}`} color={C.red} />
      </Box>
      <Readout tone="blue">
        <MathText html={`\\(c^2=${a}^2+${b}^2-2(${a})(${b})\\cos${Cg}^\\circ=${n2(c * c, 3)}\\Rightarrow c=${n2(c, 3)}\\). Area \\(=\\tfrac12(${a})(${b})\\sin${Cg}^\\circ=${n2(area, 3)}\\). Other angles: \\(A=${n2(Aang, 2)}^\\circ\\), \\(B=${n2(Bang, 2)}^\\circ\\). ${Cg === 90 ? "With C = 90° the rule becomes Pythagoras." : Cg > 90 ? "C is obtuse: cos C < 0, so c² is larger than a² + b²." : ""}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 11.5 bearings */

export function IBBearing({ init = [50, 8, 140, 6] }: { init?: [number, number, number, number] }) {
  const [b1, setB1] = useState(init[0]), [d1, setD1] = useState(init[1]), [b2, setB2] = useState(init[2]), [d2, setD2] = useState(init[3]);
  const dir = (b: number): [number, number] => [Math.sin(rad(b)), Math.cos(rad(b))];
  const P: [number, number] = [d1 * dir(b1)[0], d1 * dir(b1)[1]], Q: [number, number] = [P[0] + d2 * dir(b2)[0], P[1] + d2 * dir(b2)[1]];
  const dist = Math.hypot(Q[0], Q[1]); let brg = deg(Math.atan2(Q[0], Q[1])); if (brg < 0) brg += 360; const back = (brg + 180) % 360;
  const L = Math.max(d1, d2) * 0.4;
  const M = fitter([[0, 0], P, Q, [0, L], [P[0], P[1] + L]]);
  const O0 = M([0, 0]), P0 = M(P), Q0 = M(Q), N0 = M([0, L]), NP = M([P[0], P[1] + L]);
  const turn = Math.abs((((b2 - b1 + 540) % 360) - 180));
  return (
    <WidgetCard title="Bearings: a two-leg journey" subtitle="bearings are measured clockwise from north; the return distance uses the cosine rule (or components)">
      <Row>
        <Slider label="bearing 1" value={b1} min={0} max={359} step={1} onChange={setB1} color={C.violet} />
        <Slider label="distance 1" value={d1} min={1} max={15} step={1} onChange={setD1} color={C.violet} />
      </Row>
      <Row>
        <Slider label="bearing 2" value={b2} min={0} max={359} step={1} onChange={setB2} color={C.blue} />
        <Slider label="distance 2" value={d2} min={1} max={15} step={1} onChange={setD2} color={C.blue} />
      </Row>
      <Box h={300}>
        <line x1={O0[0]} y1={O0[1]} x2={N0[0]} y2={N0[1]} stroke="#64748b" strokeWidth={1.6} /><Label at={[N0[0], N0[1] - 6]} t="N" color="#64748b" size={12} />
        <line x1={P0[0]} y1={P0[1]} x2={NP[0]} y2={NP[1]} stroke="#64748b" strokeWidth={1.6} /><Label at={[NP[0], NP[1] - 6]} t="N" color="#64748b" size={12} />
        <line x1={O0[0]} y1={O0[1]} x2={P0[0]} y2={P0[1]} stroke={C.violet} strokeWidth={3} />
        <line x1={P0[0]} y1={P0[1]} x2={Q0[0]} y2={Q0[1]} stroke={C.blue} strokeWidth={3} />
        <line x1={O0[0]} y1={O0[1]} x2={Q0[0]} y2={Q0[1]} stroke={C.red} strokeWidth={2} strokeDasharray="7 4" />
        <Label at={[O0[0] - 14, O0[1] + 16]} t="O" /><Label at={[P0[0] + 14, P0[1] - 4]} t="P" /><Label at={[Q0[0] + 14, Q0[1] + 14]} t="Q" />
      </Box>
      <Readout tone="blue">
        <MathText html={`Angle OPQ \\(=${n2(180 - turn, 1)}^\\circ\\). By the cosine rule \\(OQ^2=${d1}^2+${d2}^2-2(${d1})(${d2})\\cos${n2(180 - turn, 1)}^\\circ\\), so \\(OQ=${n2(dist, 3)}\\). Bearing of Q from O: \\(${n2(brg, 1).toString().padStart(3, "0")}^\\circ\\); bearing of O from Q: \\(${n2(back, 1)}^\\circ\\) (add or subtract 180°).`} />
      </Readout>
    </WidgetCard>
  );
}
