"use client";

import { useEffect, useMemo, useRef, useState } from "react";

// Interactive "solve it — the graph checks your work" game. The student picks
// the smartest next move; each correct move stacks onto a worked solution while
// the graph redraws the two sides of the (rewritten) equation, whose crossing
// point stays locked on the solution — visual proof every step is legal.
// Reusable: fed a per-example spec (states + steps) via the lesson block.

type Line = { m: number; b: number };
type GState = { eq: string; L: Line; R: Line };
type Opt = { t: string; log?: string; ok: boolean; why?: string };
type GStep = { prompt: string; opts: Opt[] };

export type EquationGameProps = {
  solutionX: number;
  solutionLabel: string;
  states: GState[];
  steps: GStep[];
  check: string;
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
  caption?: string;
};

const C = {
  accent: "#ea580c", accentDeep: "#9a3412", teal: "#0d9488", muted: "#94a3b8",
  grid: "#eef2f7", good: "#15803d", goodBg: "#eafaf0", bad: "#dc2626", badBg: "#fdecec",
  surface: "#ffffff", ink: "#1e293b", soft: "#fff7ed", border: "#e7d3bd", mono: "'JetBrains Mono', ui-monospace, Menlo, Consolas, monospace",
};

function lineStr(l: Line) {
  if (l.m === 0) return `y = ${l.b}`;
  const mp = (l.m === 1 ? "" : l.m) + "x";
  return `y = ${mp}${l.b ? ` + ${l.b}` : ""}`;
}

export function EquationGame(props: EquationGameProps) {
  const { states, steps, solutionX: SOL, xMin, xMax, yMin, yMax } = props;
  const [step, setStep] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [log, setLog] = useState<{ op: string | null; eq: string }[]>([{ op: null, eq: states[0].eq }]);
  const [hint, setHint] = useState<{ msg: string; kind: "" | "bad" | "good" }>({ msg: steps[0]?.prompt ?? "", kind: "" });
  const [shakeIdx, setShakeIdx] = useState(-1);
  const [rightIdx, setRightIdx] = useState(-1);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const solved = step >= steps.length;

  const order = useMemo(() => {
    const a = (steps[step]?.opts ?? []).map((_, i) => i);
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); const t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  function reset() {
    setStep(0); setWrong(0); setLog([{ op: null, eq: states[0].eq }]);
    setHint({ msg: steps[0]?.prompt ?? "", kind: "" }); setShakeIdx(-1); setRightIdx(-1);
  }

  function choose(o: Opt, idx: number) {
    if (solved || rightIdx >= 0) return;
    if (o.ok) {
      setRightIdx(idx);
      window.setTimeout(() => {
        setLog((l) => [...l, { op: o.log ?? o.t.toLowerCase(), eq: states[step + 1].eq }]);
        setRightIdx(-1);
        setStep((s) => s + 1);
      }, 520);
    } else {
      setWrong((w) => w + 1); setShakeIdx(idx); setHint({ msg: o.why ?? "Not quite — try another move.", kind: "bad" });
      window.setTimeout(() => setShakeIdx(-1), 480);
    }
  }

  useEffect(() => { if (!solved) setHint({ msg: steps[step].prompt, kind: "" }); /* eslint-disable-next-line */ }, [step]);

  useEffect(() => {
    draw();
    const ro = new ResizeObserver(() => draw());
    if (boxRef.current) ro.observe(boxRef.current);
    return () => ro.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  function draw() {
    const cv = canvasRef.current, box = boxRef.current;
    if (!cv || !box) return;
    const ctx = cv.getContext("2d"); if (!ctx) return;
    const W = Math.max(300, box.clientWidth), H = Math.round(W * 0.56);
    const dpr = window.devicePixelRatio || 1;
    cv.width = W * dpr; cv.height = H * dpr; cv.style.height = H + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H); ctx.fillStyle = C.surface; ctx.fillRect(0, 0, W, H);
    const pad = 32;
    const PX = (x: number) => pad + (x - xMin) / (xMax - xMin) * (W - pad - 14);
    const PY = (y: number) => H - pad - (y - yMin) / (yMax - yMin) * (H - pad - 14);
    ctx.font = "11px " + C.mono;
    ctx.strokeStyle = C.grid; ctx.lineWidth = 1; ctx.fillStyle = C.muted; ctx.textAlign = "center"; ctx.textBaseline = "top";
    for (let gx = Math.ceil(xMin); gx <= xMax; gx++) { ctx.beginPath(); ctx.moveTo(PX(gx), PY(yMax)); ctx.lineTo(PX(gx), PY(yMin)); ctx.stroke(); if (gx !== 0) ctx.fillText(String(gx), PX(gx), PY(0) + 4); }
    ctx.textAlign = "right"; ctx.textBaseline = "middle";
    const gstep = Math.max(1, Math.round((yMax - yMin) / 8));
    for (let gy = Math.ceil(yMin / gstep) * gstep; gy <= yMax; gy += gstep) { ctx.beginPath(); ctx.moveTo(PX(xMin), PY(gy)); ctx.lineTo(PX(xMax), PY(gy)); ctx.stroke(); if (gy !== 0) ctx.fillText(String(gy), PX(0) - 5, PY(gy)); }
    ctx.strokeStyle = C.muted; ctx.lineWidth = 1.4;
    ctx.beginPath(); ctx.moveTo(PX(xMin), PY(0)); ctx.lineTo(PX(xMax), PY(0)); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(PX(0), PY(yMin)); ctx.lineTo(PX(0), PY(yMax)); ctx.stroke();
    // invariant solution line
    ctx.save(); ctx.setLineDash([5, 6]); ctx.strokeStyle = C.muted; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(PX(SOL), PY(yMin)); ctx.lineTo(PX(SOL), PY(yMax)); ctx.stroke(); ctx.restore();
    ctx.fillStyle = C.muted; ctx.textAlign = "center"; ctx.textBaseline = "top"; ctx.fillText(props.solutionLabel, PX(SOL), PY(yMin) - 15);
    // two sides of the current equation
    const st = states[Math.min(step, states.length - 1)];
    ctx.save(); ctx.beginPath(); ctx.rect(PX(xMin), PY(yMax), PX(xMax) - PX(xMin), PY(yMin) - PY(yMax)); ctx.clip();
    const line = (l: Line, color: string, w: number) => { ctx.strokeStyle = color; ctx.lineWidth = w; ctx.beginPath(); ctx.moveTo(PX(xMin), PY(l.m * xMin + l.b)); ctx.lineTo(PX(xMax), PY(l.m * xMax + l.b)); ctx.stroke(); };
    line(st.R, C.teal, 2.6); line(st.L, C.accent, 3.2);
    ctx.restore();
    const yc = st.L.m * SOL + st.L.b;
    ctx.fillStyle = solved ? C.good : C.accent; ctx.strokeStyle = C.surface; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.arc(PX(SOL), PY(yc), solved ? 9 : 7, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
  }

  const st = states[Math.min(step, states.length - 1)];

  return (
    <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 16, boxShadow: "0 8px 26px rgba(154,52,18,0.10)", padding: "clamp(16px,3vw,24px)", position: "relative" }}>
      <style>{`
        @keyframes eqgShake{0%,100%{transform:translateX(0)}20%{transform:translateX(-7px)}40%{transform:translateX(6px)}60%{transform:translateX(-4px)}80%{transform:translateX(3px)}}
        @keyframes eqgFade{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:none}}
        .eqg-choice{transition:background .16s,border-color .16s,transform .12s}
        .eqg-choice:hover{background:${C.soft};border-color:${C.accent}}
        .eqg-choice:focus-visible{outline:2px solid ${C.accent};outline-offset:2px}
        @media (prefers-reduced-motion: reduce){.eqg-anim{animation:none!important}}
      `}</style>

      <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.muted, textAlign: "center", marginBottom: 10 }}>Your worked solution</div>

      {/* progress dots */}
      <div style={{ display: "flex", gap: 7, justifyContent: "center", marginBottom: 14 }}>
        {steps.map((_, i) => (
          <span key={i} style={{ width: 9, height: 9, borderRadius: "50%", transition: "background .2s,transform .2s",
            background: i < step ? C.good : i === step ? C.accent : C.border, transform: i === step ? "scale(1.35)" : "none" }} />
        ))}
      </div>

      {/* worked-solution log */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, marginBottom: 4 }}>
        {log.map((row, k) => {
          const last = k === log.length - 1;
          const cls = last ? (solved ? "solved" : "current") : "done";
          return (
            <div key={k} style={{ display: "contents" }}>
              {row.op && <div className="eqg-anim" style={{ fontSize: 12.5, color: C.muted, fontStyle: "italic", display: "flex", alignItems: "center", gap: 6, animation: "eqgFade .3s ease" }}><span style={{ fontStyle: "normal", fontWeight: 800, color: C.accent }}>↓</span>{row.op}</div>}
              <div className="eqg-anim" style={{
                fontFamily: C.mono, fontVariantNumeric: "tabular-nums", fontWeight: 700, animation: "eqgFade .3s ease",
                fontSize: cls === "done" ? 16 : "clamp(21px,4.6vw,27px)",
                color: cls === "done" ? C.muted : cls === "solved" ? C.good : C.ink,
              }}>{row.eq}{solved && last ? "  ✓" : ""}</div>
            </div>
          );
        })}
      </div>

      {/* prompt / hint */}
      <div style={{ minHeight: 22, textAlign: "center", fontSize: 14, margin: "10px 0 2px", fontWeight: hint.kind ? 600 : 400,
        color: hint.kind === "bad" ? C.bad : hint.kind === "good" ? C.good : C.muted }}>{hint.msg}</div>

      {/* choices */}
      {!solved && (
        <div style={{ display: "flex", flexDirection: "column", gap: 9, marginTop: 12 }}>
          {order.map((oi) => {
            const o = steps[step].opts[oi];
            const isRight = rightIdx === oi, isShake = shakeIdx === oi;
            return (
              <button key={oi} className="eqg-choice" onClick={() => choose(o, oi)} disabled={rightIdx >= 0}
                style={{
                  textAlign: "left", fontFamily: "inherit", fontSize: 15, fontWeight: 600, cursor: rightIdx >= 0 ? "default" : "pointer",
                  border: `1.5px solid ${isRight ? C.good : isShake ? C.bad : C.border}`, borderRadius: 12, padding: "12px 15px",
                  background: isRight ? C.goodBg : isShake ? C.badBg : C.soft, color: isRight ? C.good : isShake ? C.bad : C.ink,
                  animation: isShake ? "eqgShake .4s ease" : undefined,
                }}>{o.t}</button>
            );
          })}
        </div>
      )}

      {solved && (
        <div className="eqg-anim" style={{ marginTop: 14, textAlign: "center", fontFamily: C.mono, fontWeight: 800, fontSize: 22, color: C.good,
          background: C.goodBg, border: `1.5px solid ${C.good}55`, borderRadius: 12, padding: 12, animation: "eqgFade .3s ease" }}>🍊 {props.solutionLabel}</div>
      )}

      {/* graph check */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "22px 0 14px", color: C.muted, fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
        <span style={{ flex: 1, height: 1, background: C.grid }} /> Graph check <span style={{ flex: 1, height: 1, background: C.grid }} />
      </div>
      <div ref={boxRef} style={{ width: "100%", border: `1px solid ${C.border}`, borderRadius: 12, overflow: "hidden" }}>
        <canvas ref={canvasRef} style={{ display: "block", width: "100%", height: "auto" }} />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center", marginTop: 12, fontSize: 12.5, color: C.muted, fontWeight: 600 }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><span style={{ width: 16, height: 3, borderRadius: 2, background: C.accent }} /> left side</span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><span style={{ width: 16, height: 3, borderRadius: 2, background: C.teal }} /> right side</span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><span style={{ width: 16, borderTop: `2px dashed ${C.muted}` }} /> {props.solutionLabel}</span>
      </div>
      <div style={{ textAlign: "center", fontFamily: C.mono, fontVariantNumeric: "tabular-nums", fontWeight: 700, fontSize: 13.5, marginTop: 14, color: C.muted, lineHeight: 1.5 }}>
        {solved
          ? <>Check by substituting: <b style={{ color: C.accentDeep }}>{props.check}</b> ✓ — the crossing never left {props.solutionLabel}.{wrong === 0 ? " Perfect run!" : ` (${wrong} wrong ${wrong === 1 ? "try" : "tries"})`}</>
          : <>Left side <b style={{ color: C.accentDeep }}>{lineStr(st.L)}</b> and right side <b style={{ color: C.accentDeep }}>{lineStr(st.R)}</b> cross at <b style={{ color: C.accentDeep }}>{props.solutionLabel}</b>.</>}
      </div>

      <div style={{ textAlign: "center", marginTop: 16 }}>
        <button onClick={reset} style={{ fontWeight: 700, fontSize: 13, color: C.muted, background: "transparent", border: `1px solid ${C.border}`, borderRadius: 999, padding: "7px 15px", cursor: "pointer" }}>↺ Start over</button>
      </div>
      {props.caption && <p style={{ textAlign: "center", fontSize: 13, color: C.muted, margin: "12px 0 0" }}>{props.caption}</p>}
    </div>
  );
}
