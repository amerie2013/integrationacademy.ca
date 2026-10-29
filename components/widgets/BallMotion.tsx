"use client";

// Ball-on-a-curve motion figure (MHF4U assignment 1.2, the ramp question): drag or play t, the ball rides the
// distance curve, leaving a dashed trace, with red guides to the t- and d-axes. The equation is not shown —
// finding it is the question.

import { useEffect, useRef, useState } from "react";
import { C, Readout, Row, Slider, WidgetCard, btn } from "./kit";

type Props = {
  f: (t: number) => number;
  tMax: number;
  dMax: number;
  data?: [number, number][];
  tUnit?: string;
  dUnit?: string;
};

const W = 640, H = 400, PAD = { l: 52, r: 18, t: 18, b: 42 };
const fmt = (v: number) => v.toFixed(2);

export function BallMotion({ f, tMax, dMax, data = [], tUnit = "s", dUnit = "cm" }: Props) {
  const [t, setT] = useState(0);
  const [playing, setPlaying] = useState(false);
  const raf = useRef<number | null>(null);
  const svg = useRef<SVGSVGElement>(null);

  const tLo = -tMax * 0.06, dLo = -dMax * 0.06;
  const X = (u: number) => PAD.l + ((u - tLo) / (tMax * 1.06 - tLo)) * (W - PAD.l - PAD.r);
  const Y = (v: number) => H - PAD.b - ((v - dLo) / (dMax * 1.08 - dLo)) * (H - PAD.t - PAD.b);
  const invX = (px: number) => tLo + ((px - PAD.l) / (W - PAD.l - PAD.r)) * (tMax * 1.06 - tLo);

  useEffect(() => {
    if (!playing) return;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      setT((v) => {
        const next = v + dt;
        if (next >= tMax) { setPlaying(false); return tMax; }
        return next;
      });
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => { if (raf.current) cancelAnimationFrame(raf.current); };
  }, [playing, tMax]);

  const play = () => { if (t >= tMax) setT(0); setPlaying((p) => !p); };
  const drag = (e: React.PointerEvent<SVGSVGElement>) => {
    if (e.type === "pointermove" && e.buttons !== 1) return;
    const box = svg.current!.getBoundingClientRect();
    const u = invX(((e.clientX - box.left) / box.width) * W);
    setPlaying(false);
    setT(Math.min(tMax, Math.max(0, Math.round(u * 100) / 100)));
  };

  const d = f(t);
  const trace: string[] = [];
  for (let i = 0; i <= 120; i++) { const u = (t * i) / 120; trace.push(`${i ? "L" : "M"}${X(u).toFixed(1)},${Y(f(u)).toFixed(1)}`); }
  const tStep = tMax <= 5 ? 0.5 : 1, dStep = dMax <= 30 ? 5 : 10;
  const ticksT: number[] = []; for (let u = 0; u <= tMax * 1.06 + 1e-9; u += tStep) ticksT.push(+u.toFixed(2));
  const ticksD: number[] = []; for (let v = 0; v <= dMax * 1.08 + 1e-9; v += dStep) ticksD.push(v);
  const R = 13;
  // roll angle: path length travelled in px over the ball radius
  let arc = 0;
  for (let i = 1; i <= 60; i++) { const a = (t * (i - 1)) / 60, b = (t * i) / 60; arc += Math.hypot(X(b) - X(a), Y(f(b)) - Y(f(a))); }
  const spin = ((arc / R) * 180) / Math.PI;
  const bx = X(t), by = Y(d);

  return (
    <WidgetCard title="Ball on the ramp" subtitle="drag the ball, use the slider, or press play" tag="Interactive">
      <Row gap={10}>
        <button type="button" onClick={play} style={{ ...btn(true), minWidth: 84 }}>{playing ? "Pause" : t >= tMax ? "Replay" : "Play"}</button>
        <Slider label="time t" value={t} min={0} max={tMax} step={0.01} onChange={(v) => { setPlaying(false); setT(v); }} format={(v) => `${fmt(v)} ${tUnit}`} color={C.violet} />
      </Row>
      <svg ref={svg} viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`Ball position: t = ${fmt(t)} ${tUnit}, distance ${fmt(d)} ${dUnit}`}
        onPointerDown={drag} onPointerMove={drag}
        style={{ width: "100%", height: "auto", display: "block", background: "#fff", border: `1px solid ${C.line}`, borderRadius: 10, touchAction: "none", cursor: "pointer", margin: "10px 0" }}>
        {ticksT.map((u) => <line key={`gx${u}`} x1={X(u)} x2={X(u)} y1={Y(dLo)} y2={Y(dMax * 1.08)} stroke="#eef2f7" />)}
        {ticksD.map((v) => <line key={`gy${v}`} x1={X(tLo)} x2={X(tMax * 1.06)} y1={Y(v)} y2={Y(v)} stroke="#eef2f7" />)}
        <line x1={X(tLo)} x2={X(tMax * 1.06)} y1={Y(0)} y2={Y(0)} stroke={C.ink} strokeWidth={1.4} />
        <line x1={X(0)} x2={X(0)} y1={Y(dLo)} y2={Y(dMax * 1.08)} stroke={C.ink} strokeWidth={1.4} />
        {ticksT.filter((u) => u > 0).map((u) => <text key={`tx${u}`} x={X(u)} y={Y(0) + 16} fontSize={11} textAnchor="middle" fill={C.muted}>{u}</text>)}
        {ticksD.filter((v) => v > 0).map((v) => <text key={`ty${v}`} x={X(0) - 7} y={Y(v) + 4} fontSize={11} textAnchor="end" fill={C.muted}>{v}</text>)}
        <text x={X(tMax * 1.06) - 2} y={Y(0) - 7} fontSize={12} fontWeight={700} textAnchor="end" fill={C.ink}>t ({tUnit})</text>
        <text x={X(0) + 7} y={Y(dMax * 1.08) + 12} fontSize={12} fontWeight={700} fill={C.ink}>d ({dUnit})</text>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <image href="/logo-mark.png" x={X(0) + 66} y={PAD.t + 2} width={60} height={48} opacity={0.9} />

        {data.map(([u, v]) => (
          <g key={`p${u}`}>
            <circle cx={X(u)} cy={Y(v)} r={4.5} fill={t >= u ? C.violet : "#fff"} stroke={C.violet} strokeWidth={2} />
            <text x={X(u) - 8} y={Y(v) - 8} fontSize={11.5} fontWeight={700} textAnchor="end" fill={C.violet}>({u}, {v})</text>
          </g>
        ))}

        <path d={trace.join("")} fill="none" stroke="#7c6fd6" strokeWidth={3} strokeDasharray="9 7" strokeLinecap="round" />
        <line x1={X(0)} x2={bx} y1={Y(0)} y2={Y(0)} stroke={C.red} strokeWidth={2.5} />
        <line x1={bx} x2={bx} y1={Y(0)} y2={Y(d)} stroke={C.red} strokeWidth={2} />
        <text x={bx} y={Y(0) + 30} fontSize={12} fontWeight={700} textAnchor="middle" fill={C.red}>{fmt(t)}</text>
        <text x={bx + 8} y={(Y(0) + Y(d)) / 2} fontSize={12} fontWeight={700} fill={C.red}>{fmt(d)}</text>

        <g transform={`translate(${bx} ${by}) rotate(${spin})`}>
          <SoccerBall r={R} />
        </g>
      </svg>
      <Readout tone="blue">
        <span style={{ fontVariantNumeric: "tabular-nums" }}>
          <strong>t</strong> = {fmt(t)} {tUnit} &nbsp;·&nbsp; <strong>d</strong> = {fmt(d)} {dUnit}
        </span>
      </Readout>
    </WidgetCard>
  );
}

function SoccerBall({ r }: { r: number }) {
  const pent = (cx: number, cy: number, s: number, rot = 0) =>
    Array.from({ length: 5 }, (_, i) => {
      const a = ((rot + i * 72 - 90) * Math.PI) / 180;
      return `${(cx + s * Math.cos(a)).toFixed(2)},${(cy + s * Math.sin(a)).toFixed(2)}`;
    }).join(" ");
  const id = "ballclip";
  return (
    <g>
      <defs><clipPath id={id}><circle r={r} /></clipPath></defs>
      <circle r={r} fill="#fff" />
      <g clipPath={`url(#${id})`} fill="#111">
        <polygon points={pent(0, 0, r * 0.38)} />
        {[0, 72, 144, 216, 288].map((a) => {
          const rad = ((a - 90) * Math.PI) / 180;
          return <polygon key={a} points={pent(Math.cos(rad) * r * 1.02, Math.sin(rad) * r * 1.02, r * 0.36, a + 36)} />;
        })}
      </g>
      <circle r={r} fill="none" stroke="#111" strokeWidth={1.4} />
    </g>
  );
}

/** Preset used by assignment text: [[interactive:ball-ramp]] */
export function BallRamp() {
  return <BallMotion f={(t) => 3 * t * t} tMax={4} dMax={50} data={[[0, 0], [1, 3], [2, 12], [3, 27], [4, 48]]} />;
}
