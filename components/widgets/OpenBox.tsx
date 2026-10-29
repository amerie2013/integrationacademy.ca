"use client";

// Open-box volume graph (MHF4U assignment 1.2, the 16 cm by 10 cm sheet question): slide or drag x, a point rides
// V(x) = x(16 − 2x)(10 − 2x) on 0 ≤ x ≤ 5 only — the whole cubic would give away the end behaviour the
// question asks for.

import { useRef, useState } from "react";
import { C, Readout, Row, Slider, WidgetCard } from "./kit";

const L = 16, Wd = 10, XMAX = Wd / 2;
const V = (x: number) => x * (L - 2 * x) * (Wd - 2 * x);
const W = 640, H = 380, PAD = { l: 56, r: 18, t: 18, b: 42 };
const VMAX = 160;
const fmt = (v: number) => v.toFixed(2);

export function OpenBoxGraph() {
  const [x, setX] = useState(1);
  const svg = useRef<SVGSVGElement>(null);

  const xLo = -0.3, xHi = 5.5, vLo = -10, vHi = VMAX;
  const X = (u: number) => PAD.l + ((u - xLo) / (xHi - xLo)) * (W - PAD.l - PAD.r);
  const Y = (v: number) => H - PAD.b - ((v - vLo) / (vHi - vLo)) * (H - PAD.t - PAD.b);
  const invX = (px: number) => xLo + ((px - PAD.l) / (W - PAD.l - PAD.r)) * (xHi - xLo);

  const drag = (e: React.PointerEvent<SVGSVGElement>) => {
    if (e.type === "pointermove" && e.buttons !== 1) return;
    const box = svg.current!.getBoundingClientRect();
    const u = invX(((e.clientX - box.left) / box.width) * W);
    setX(Math.min(XMAX, Math.max(0, Math.round(u * 100) / 100)));
  };

  const v = V(x);
  const curve: string[] = [];
  for (let i = 0; i <= 200; i++) { const u = (XMAX * i) / 200; curve.push(`${i ? "L" : "M"}${X(u).toFixed(1)},${Y(V(u)).toFixed(1)}`); }
  const ticksX = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
  const ticksV: number[] = []; for (let k = 20; k <= VMAX; k += 20) ticksV.push(k);

  return (
    <WidgetCard title="Volume of the open box" subtitle="cut an x by x square from each corner, then fold up the sides" tag="Interactive">
      <Row gap={10}>
        <Slider label="cut size x" value={x} min={0} max={XMAX} step={0.01} onChange={setX} format={(u) => `${fmt(u)} cm`} color={C.violet} />
      </Row>
      <svg ref={svg} viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`x = ${fmt(x)} cm, volume ${fmt(v)} cubic cm`}
        onPointerDown={drag} onPointerMove={drag}
        style={{ width: "100%", height: "auto", display: "block", background: "#fff", border: `1px solid ${C.line}`, borderRadius: 10, touchAction: "none", cursor: "pointer", margin: "10px 0" }}>
        {[0, ...ticksX].map((u) => <line key={`gx${u}`} x1={X(u)} x2={X(u)} y1={Y(vLo)} y2={Y(vHi)} stroke="#eef2f7" />)}
        {ticksV.map((k) => <line key={`gy${k}`} x1={X(xLo)} x2={X(xHi)} y1={Y(k)} y2={Y(k)} stroke="#eef2f7" />)}
        <line x1={X(xLo)} x2={X(xHi)} y1={Y(0)} y2={Y(0)} stroke={C.ink} strokeWidth={1.4} />
        <line x1={X(0)} x2={X(0)} y1={Y(vLo)} y2={Y(vHi)} stroke={C.ink} strokeWidth={1.4} />
        {ticksX.map((u) => <text key={`tx${u}`} x={X(u)} y={Y(0) + 16} fontSize={11} textAnchor="middle" fill={C.muted}>{u}</text>)}
        {ticksV.map((k) => <text key={`ty${k}`} x={X(0) - 7} y={Y(k) + 4} fontSize={11} textAnchor="end" fill={C.muted}>{k}</text>)}
        <text x={X(xHi) - 2} y={Y(0) - 7} fontSize={12} fontWeight={700} textAnchor="end" fill={C.ink}>x (cm)</text>
        <text x={X(0) + 7} y={Y(vHi) + 12} fontSize={12} fontWeight={700} fill={C.ink}>V (cm³)</text>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <image href="/logo-mark.png" x={W - PAD.r - 66} y={PAD.t + 2} width={60} height={48} opacity={0.9} />

        <path d={curve.join("")} fill="none" stroke="#7c6fd6" strokeWidth={3} strokeLinecap="round" />
        <line x1={X(0)} x2={X(x)} y1={Y(0)} y2={Y(0)} stroke={C.red} strokeWidth={2.5} />
        <line x1={X(x)} x2={X(x)} y1={Y(0)} y2={Y(v)} stroke={C.red} strokeWidth={2} />
        <text x={X(x)} y={Y(0) + 30} fontSize={12} fontWeight={700} textAnchor="middle" fill={C.red}>{fmt(x)}</text>
        <text x={X(x) + 8} y={Math.min((Y(0) + Y(v)) / 2, Y(0) - 6)} fontSize={12} fontWeight={700} fill={C.red}>{fmt(v)}</text>
        <circle cx={X(x)} cy={Y(v)} r={7} fill={C.violet} stroke="#fff" strokeWidth={2} />
      </svg>
      <Readout tone="blue">
        <span style={{ fontVariantNumeric: "tabular-nums" }}>
          height <strong>{fmt(x)}</strong> cm · length <strong>{fmt(L - 2 * x)}</strong> cm · width <strong>{fmt(Wd - 2 * x)}</strong> cm · <strong>V</strong> = {fmt(v)} cm³
        </span>
      </Readout>
    </WidgetCard>
  );
}
