"use client";

// MPM2D chapter 7 (acute triangles) explorers: developing the sine law and the cosine law from an altitude,
// choosing the law from the given parts, and a surveying (triangulation) lab.

import { useState, type ReactNode } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard } from "./kit";
import { r2 } from "./Systems";

type P = [number, number];
const D = Math.PI / 180, sin = (d: number) => Math.sin(d * D), cos = (d: number) => Math.cos(d * D);
const deg = (r: number) => r / D;

function Scene({ pts, w = 440, h = 270, label, children }: { pts: P[]; w?: number; h?: number; label: string; children: (X: (p: P) => [number, number]) => ReactNode }) {
  const xs = pts.map((p) => p[0]), ys = pts.map((p) => p[1]);
  const x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys), pad = 36;
  const s = Math.min((w - 2 * pad) / Math.max(x1 - x0, 1e-9), (h - 2 * pad) / Math.max(y1 - y0, 1e-9));
  const ox = (w - (x1 - x0) * s) / 2, oy = (h - (y1 - y0) * s) / 2;
  const X = (p: P): [number, number] => [ox + (p[0] - x0) * s, h - oy - (p[1] - y0) * s];
  return <svg viewBox={`0 0 ${w} ${h}`} style={{ width: "100%", maxWidth: w, display: "block", margin: "6px auto" }} role="img" aria-label={label}>{children(X)}</svg>;
}
const line = (X: (p: P) => [number, number], a: P, b: P, color: string, width = 2.5, dash?: string) => <line x1={X(a)[0]} y1={X(a)[1]} x2={X(b)[0]} y2={X(b)[1]} stroke={color} strokeWidth={width} strokeDasharray={dash} />;
function label(X: (p: P) => [number, number], at: P, t: string, color: string = C.ink, dx = 0, dy = 0, key?: string | number) {
  const [x, y] = X(at);
  return <text key={key} x={x + dx} y={y + dy} fontSize={13.5} fontWeight={700} textAnchor="middle" fill={color} stroke="#fff" strokeWidth={3} paintOrder="stroke">{t}</text>;
}
function arcAt(X: (p: P) => [number, number], q: P, a: P, b: P, color: string, text?: string, r = 24) {
  const [qx, qy] = X(q), [ax, ay] = X(a), [bx, by] = X(b);
  const t1 = Math.atan2(ay - qy, ax - qx), t2 = Math.atan2(by - qy, bx - qx);
  let d = t2 - t1; while (d <= -Math.PI) d += 2 * Math.PI; while (d > Math.PI) d -= 2 * Math.PI;
  const m = t1 + d / 2;
  return (
    <g>
      <path d={`M${qx + r * Math.cos(t1)},${qy + r * Math.sin(t1)} A${r},${r} 0 0 ${d > 0 ? 1 : 0} ${qx + r * Math.cos(t1 + d)},${qy + r * Math.sin(t1 + d)}`} fill="none" stroke={color} strokeWidth={2} />
      {text && <text x={qx + (r + 14) * Math.cos(m)} y={qy + (r + 14) * Math.sin(m) + 4} fontSize={12} fontWeight={700} textAnchor="middle" fill={color} stroke="#fff" strokeWidth={3} paintOrder="stroke">{text}</text>}
    </g>
  );
}
/** triangle with A at the origin, B on the x-axis (AB = c), angles A and B at the base */
const tri = (A: number, B: number, c: number) => { const b = (c * sin(B)) / sin(180 - A - B); return { A: [0, 0] as P, B: [c, 0] as P, C: [b * cos(A), b * sin(A)] as P, a: (c * sin(A)) / sin(180 - A - B), b, c, Cang: 180 - A - B }; };

/* ---------------------------------------------------------------- 7.1 sine law from the altitude */

export function SineDerive({ init = [55, 65, 8] }: { init?: [number, number, number] }) {
  const [A, setA] = useState(init[0]), [B, setB] = useState(init[1]), [c, setc] = useState(init[2]);
  const Bv = Math.min(B, 178 - A - 1), t = tri(A, Bv, c), Cg = t.Cang, acute = Cg < 90;
  const h = t.b * sin(A), foot: P = [t.C[0], 0];
  return (
    <WidgetCard title="Developing the sine law" subtitle="the altitude h can be written two ways: h = b sin A and h = a sin B">
      <Row gap={10}>
        <Slider label="∠A" value={A} min={30} max={85} onChange={(v) => setA(Math.min(v, 175 - Bv))} color={C.amber} format={(v) => `${v}°`} />
        <Slider label="∠B" value={Bv} min={30} max={85} onChange={(v) => setB(Math.min(v, 175 - A))} color={C.amber} format={(v) => `${v}°`} />
        <Slider label="side c" value={c} min={4} max={12} onChange={setc} color={C.blue} />
      </Row>
      <Scene pts={[t.A, t.B, t.C, foot]} label="Acute triangle with altitude">
        {(X) => (
          <>
            <polygon points={[t.A, t.B, t.C].map((p) => X(p).join(",")).join(" ")} fill={C.blueSoft} stroke={C.blue} strokeWidth={2.5} />
            {line(X, t.C, foot, C.red, 2.2, "6 4")}
            {arcAt(X, t.A, t.B, t.C, C.amber, `${A}°`)}{arcAt(X, t.B, t.C, t.A, C.amber, `${Bv}°`)}{arcAt(X, t.C, t.A, t.B, C.violet, `${r2(Cg, 0)}°`)}
            {label(X, t.A, "A", C.ink, -12, 14)}{label(X, t.B, "B", C.ink, 12, 14)}{label(X, t.C, "C", C.ink, 0, -10)}
            {label(X, [(t.C[0] + c) / 2, t.C[1] / 2], `a = ${r2(t.a, 2)}`, C.blue, 34, 0)}
            {label(X, [t.C[0] / 2, t.C[1] / 2], `b = ${r2(t.b, 2)}`, C.blue, -34, 0)}
            {label(X, [c / 2, 0], `c = ${c}`, C.blue, 0, 20)}
            {label(X, [t.C[0], h / 2], "h", C.red, 10, 0)}
          </>
        )}
      </Scene>
      <Readout tone={acute ? "green" : "amber"}>
        <MathText block html={`In the left right triangle \\(\\sin A=\\frac hb\\), so \\(h=b\\sin A=${r2(h, 2)}\\). In the right one \\(\\sin B=\\frac ha\\), so \\(h=a\\sin B=${r2(t.a * sin(Bv), 2)}\\).`} />
        <MathText block html={`Set them equal: \\(a\\sin B=b\\sin A\\Rightarrow\\dfrac{a}{\\sin A}=\\dfrac{b}{\\sin B}\\). Check: \\(\\frac{a}{\\sin A}=${r2(t.a / sin(A), 3)}\\), \\(\\frac{b}{\\sin B}=${r2(t.b / sin(Bv), 3)}\\), \\(\\frac{c}{\\sin C}=${r2(c / sin(Cg), 3)}\\). ${acute ? "" : "(∠C is not acute — in this course we work with acute triangles.)"}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 7.2 cosine law from the altitude */

export function CosineDerive({ init = [8, 10, 60] }: { init?: [number, number, number] }) {
  const [b, setb] = useState(init[0]), [c, setc] = useState(init[1]), [A, setA] = useState(init[2]);
  const Cpt: P = [b * cos(A), b * sin(A)], x = b * cos(A), h = b * sin(A);
  const a2 = b * b + c * c - 2 * b * c * cos(A), a = Math.sqrt(a2);
  const Bang = deg(Math.acos((a * a + c * c - b * b) / (2 * a * c))), Cang = 180 - A - Bang, acute = Bang < 90 && Cang < 90;
  return (
    <WidgetCard title="Developing the cosine law" subtitle="the altitude splits c into x and c − x; use the Pythagorean theorem twice">
      <Row gap={10}>
        <Slider label="side b" value={b} min={4} max={12} onChange={setb} color={C.blue} />
        <Slider label="side c" value={c} min={4} max={12} onChange={setc} color={C.blue} />
        <Slider label="∠A" value={A} min={30} max={90} onChange={setA} color={C.amber} format={(v) => `${v}°`} />
      </Row>
      <Scene pts={[[0, 0], [c, 0], Cpt]} label="Triangle with altitude for the cosine law">
        {(X) => (
          <>
            <polygon points={[[0, 0] as P, [c, 0] as P, Cpt].map((p) => X(p).join(",")).join(" ")} fill={C.blueSoft} stroke={C.blue} strokeWidth={2.5} />
            {line(X, Cpt, [x, 0], C.red, 2.2, "6 4")}
            {line(X, Cpt, [c, 0], C.violet, 3.2)}
            {arcAt(X, [0, 0], [c, 0], Cpt, C.amber, `${A}°`)}
            {label(X, [0, 0], "A", C.ink, -12, 14)}{label(X, [c, 0], "B", C.ink, 12, 14)}{label(X, Cpt, "C", C.ink, 0, -10)}
            {label(X, [x / 2, 0], `x = ${r2(x, 2)}`, C.green, 0, 20)}
            {label(X, [(x + c) / 2, 0], `c − x`, C.green, 0, 36)}
            {label(X, [x / 2, h / 2], `b = ${b}`, C.blue, -30, 0)}
            {label(X, [(x + c) / 2, h / 2], "a = ?", C.violet, 30, 0)}
            {label(X, [x, h / 2], "h", C.red, 10, 0)}
          </>
        )}
      </Scene>
      <ol style={{ margin: "6px 0 6px 20px", lineHeight: 1.9 }}>
        <li><MathText html={`Left triangle: \\(h^2=b^2-x^2\\) and \\(x=b\\cos A=${r2(x, 2)}\\).`} /></li>
        <li><MathText html={`Right triangle: \\(a^2=h^2+(c-x)^2=b^2-x^2+c^2-2cx+x^2=b^2+c^2-2cx\\).`} /></li>
        <li><MathText html={`Replace \\(x\\) by \\(b\\cos A\\): \\(a^2=b^2+c^2-2bc\\cos A=${b * b}+${c * c}-2(${b})(${c})\\cos${A}^\\circ\\approx${r2(a2, 2)}\\), so \\(a\\approx${r2(a, 2)}\\).`} /></li>
      </ol>
      <Readout tone={A === 90 ? "amber" : acute ? "green" : "amber"}>
        <MathText html={A === 90 ? `At \\(A=90^\\circ\\), \\(\\cos A=0\\) and the cosine law becomes the Pythagorean theorem: \\(a^2=b^2+c^2\\).` : `The term \\(-2bc\\cos A\\) corrects the Pythagorean theorem for a non-right angle. ${acute ? "" : "This triangle has an angle of 90° or more — choose b and c so all angles stay acute."}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 7.3 which law? */

type Case = "right" | "aas" | "sas" | "sss" | "ssa";
const CASES: Record<Case, { title: string; law: string; first: string; given: string[] }> = {
  right: { title: "right triangle", law: "SOH CAH TOA or the Pythagorean theorem", first: "Use a primary ratio; no special law needed.", given: ["right angle", "one side", "one more side or angle"] },
  aas: { title: "two angles and a side (AAS or ASA)", law: "the sine law", first: "Find the third angle (180° − the other two), then use a/sin A = b/sin B for each unknown side.", given: ["∠A", "∠B", "side a (or c)"] },
  sas: { title: "two sides and the angle between them (SAS)", law: "the cosine law", first: "Find the third side with a² = b² + c² − 2bc cos A, then finish with the sine law or the cosine law.", given: ["side b", "∠A (between)", "side c"] },
  sss: { title: "three sides (SSS)", law: "the cosine law", first: "Find an angle with cos A = (b² + c² − a²)/(2bc), starting with the largest angle (opposite the longest side).", given: ["side a", "side b", "side c"] },
  ssa: { title: "two sides and an angle opposite one of them (acute triangle)", law: "the sine law", first: "Use sin B = b sin A / a to find the angle opposite the other known side, then the third angle.", given: ["side a", "∠A (opposite a)", "side b"] },
};
export function LawChooser({ init = "aas" as Case }: { init?: Case }) {
  const [k, setK] = useState<Case>(init);
  const cs = CASES[k];
  const t = tri(58, 64, 9);
  const hl = (part: "A" | "B" | "C" | "a" | "b" | "c") => {
    const m: Record<Case, string[]> = { right: [], aas: ["A", "B", "a"], sas: ["b", "A", "c"], sss: ["a", "b", "c"], ssa: ["a", "A", "b"] };
    return m[k].includes(part);
  };
  const R: P = [0, 0], RB: P = [9, 0], RC: P = [9, 5.5];
  return (
    <WidgetCard title="Which tool?" subtitle="look at what you are given, then pick the law">
      <Segmented options={[{ value: "right", label: "right △" }, { value: "aas", label: "AAS / ASA" }, { value: "sas", label: "SAS" }, { value: "sss", label: "SSS" }, { value: "ssa", label: "SSA" }]} value={k} onChange={setK} />
      {k === "right" ? (
        <Scene pts={[R, RB, RC]} label="Right triangle" h={220}>
          {(X) => (
            <>
              <polygon points={[R, RB, RC].map((p) => X(p).join(",")).join(" ")} fill={C.blueSoft} stroke={C.blue} strokeWidth={2.5} />
              <polyline points={`${X(RB)[0] - 12},${X(RB)[1]} ${X(RB)[0] - 12},${X(RB)[1] - 12} ${X(RB)[0]},${X(RB)[1] - 12}`} fill="none" stroke={C.red} strokeWidth={2.4} />
            </>
          )}
        </Scene>
      ) : (
        <Scene pts={[t.A, t.B, t.C]} label="Triangle with given parts highlighted" h={240}>
          {(X) => (
            <>
              <polygon points={[t.A, t.B, t.C].map((p) => X(p).join(",")).join(" ")} fill={C.blueSoft} stroke={C.blue} strokeWidth={2} />
              {hl("c") && line(X, t.A, t.B, C.red, 5)}{hl("a") && line(X, t.B, t.C, C.red, 5)}{hl("b") && line(X, t.C, t.A, C.red, 5)}
              {hl("A") && arcAt(X, t.A, t.B, t.C, C.red, "A", 26)}{hl("B") && arcAt(X, t.B, t.C, t.A, C.red, "B", 26)}{hl("C") && arcAt(X, t.C, t.A, t.B, C.red, "C", 26)}
              {label(X, [t.C[0] / 2, t.C[1] / 2], "b", C.blue, -14, 0)}{label(X, [(t.C[0] + 9) / 2, t.C[1] / 2], "a", C.blue, 14, 0)}{label(X, [4.5, 0], "c", C.blue, 0, 18)}
            </>
          )}
        </Scene>
      )}
      <Readout tone="green">
        <MathText block html={`<strong>Given:</strong> ${cs.title} (${cs.given.join(", ")}) — highlighted in red.`} />
        <MathText block html={`<strong>Use:</strong> ${cs.law}. ${cs.first}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 7.4 triangulation */

export function SurveyLab({ init = [200, 62, 54] }: { init?: [number, number, number] }) {
  const [base, setBase] = useState(init[0]), [al, setAl] = useState(init[1]), [be, setBe] = useState(init[2]);
  const ga = 180 - al - be, AC = (base * sin(be)) / sin(ga), BC = (base * sin(al)) / sin(ga);
  const Cpt: P = [AC * cos(al), AC * sin(al)], width = AC * sin(al);
  return (
    <WidgetCard title="Measuring across a river" subtitle="a baseline and two angles fix the third point — then the sine law gives the distances">
      <Row gap={10}>
        <Slider label="baseline AB (m)" value={base} min={50} max={400} step={10} onChange={setBase} color={C.blue} />
        <Slider label="angle at A" value={al} min={35} max={85} onChange={(v) => setAl(Math.min(v, 170 - be))} color={C.amber} format={(v) => `${v}°`} />
        <Slider label="angle at B" value={be} min={35} max={85} onChange={(v) => setBe(Math.min(v, 170 - al))} color={C.amber} format={(v) => `${v}°`} />
      </Row>
      <Scene pts={[[0, 0], [base, 0], Cpt, [0, width * 1.05], [base, -width * 0.12]]} label="Triangulation across a river" h={280}>
        {(X) => (
          <>
            <rect x={0} y={X([0, width * 0.92])[1]} width={460} height={X([0, width * 0.15])[1] - X([0, width * 0.92])[1]} fill="#dbeafe" />
            <polygon points={[[0, 0] as P, [base, 0] as P, Cpt].map((p) => X(p).join(",")).join(" ")} fill="none" stroke={C.blue} strokeWidth={2.5} />
            {line(X, Cpt, [Cpt[0], 0], C.red, 2, "6 4")}
            {arcAt(X, [0, 0], [base, 0], Cpt, C.amber, `${al}°`)}{arcAt(X, [base, 0], Cpt, [0, 0], C.amber, `${be}°`)}{arcAt(X, Cpt, [0, 0], [base, 0], C.violet, `${ga}°`)}
            <circle cx={X(Cpt)[0]} cy={X(Cpt)[1]} r={7} fill={C.green} />
            {label(X, [0, 0], "A", C.ink, -12, 14)}{label(X, [base, 0], "B", C.ink, 12, 14)}{label(X, Cpt, "C (tree)", C.green, 0, -12)}
            {label(X, [base / 2, 0], `${base} m`, C.blue, 0, 20)}
            {label(X, [Cpt[0], width / 2], "width", C.red, 26, 0)}
          </>
        )}
      </Scene>
      <Readout tone="green">
        <MathText block html={`Third angle: \\(\\angle C=180^\\circ-${al}^\\circ-${be}^\\circ=${ga}^\\circ\\).`} />
        <MathText block html={`Sine law: \\(AC=\\dfrac{${base}\\sin${be}^\\circ}{\\sin${ga}^\\circ}\\approx${r2(AC, 1)}\\) m and \\(BC=\\dfrac{${base}\\sin${al}^\\circ}{\\sin${ga}^\\circ}\\approx${r2(BC, 1)}\\) m.`} />
        <MathText block html={`Width of the river (perpendicular from C): \\(AC\\sin${al}^\\circ\\approx${r2(width, 1)}\\) m.`} />
      </Readout>
    </WidgetCard>
  );
}
