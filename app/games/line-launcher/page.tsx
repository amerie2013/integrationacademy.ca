"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { SiteHeader } from "../../../components/SiteHeader";
import {
  LEVELS, MARBLE_R, TARGET_R, checkRules, initSim, niceNumber, parseRamp, rampToSeg, stepSim,
  type Level, type Ramp, type Seg, type SimState,
} from "../../../lib/lineLauncher";

const STORE_KEY = "ia_linelauncher_done";
const LINE_COLORS = ["#34d27f", "#38bdf8", "#f9a8d4"];
const PX = 40; // pixels per unit

function loadDone(): string[] {
  try { return JSON.parse(localStorage.getItem(STORE_KEY) || "[]"); } catch { return []; }
}
function saveDone(ids: string[]) {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(ids)); } catch {}
}

function describe(r: Ramp): string {
  const parts = [`slope ${niceNumber(r.m)}`, `y-intercept ${niceNumber(r.b)}`];
  if (r.hasDomain) {
    if (isFinite(r.lo) && isFinite(r.hi)) parts.push(`${niceNumber(r.lo)} < x < ${niceNumber(r.hi)}`);
    else if (isFinite(r.lo)) parts.push(`x > ${niceNumber(r.lo)}`);
    else parts.push(`x < ${niceNumber(r.hi)}`);
  }
  return parts.join(" · ");
}

export default function LineLauncher() {
  const [levelIdx, setLevelIdx] = useState(0);
  const [inputs, setInputs] = useState<string[]>([""]);
  const [done, setDone] = useState<string[]>([]);
  const [showHint, setShowHint] = useState(false);
  const [message, setMessage] = useState<{ kind: "info" | "bad" | "good"; text: string } | null>(null);
  const [, setFrame] = useState(0);
  const simRef = useRef<SimState | null>(null);
  const rafRef = useRef<number | null>(null);

  const level: Level = LEVELS[levelIdx];

  useEffect(() => { setDone(loadDone()); }, []);

  const parsed = useMemo(() => inputs.map((s) => parseRamp(s)), [inputs]);
  const ramps = useMemo(() => parsed.flatMap((p) => (p.ok ? [p.ramp] : [])), [parsed]);
  const drawn = useMemo(
    () => parsed.map((p) => (p.ok ? rampToSeg(p.ramp, level.view) : null)),
    [parsed, level.view],
  );

  const stop = useCallback(() => {
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
  }, []);

  const reset = useCallback(() => {
    stop();
    simRef.current = null;
    setFrame((f) => f + 1);
  }, [stop]);

  useEffect(() => () => stop(), [stop]);

  function goLevel(i: number) {
    reset();
    setLevelIdx(i);
    setInputs([""]);
    setShowHint(false);
    setMessage(null);
  }

  function edit(i: number, value: string) {
    if (simRef.current) reset();
    setMessage(null);
    setInputs((arr) => arr.map((s, j) => (j === i ? value : s)));
  }

  function launch() {
    const bad = parsed.find((p, i) => !p.ok && inputs[i].trim());
    if (bad && !bad.ok) { setMessage({ kind: "bad", text: bad.error }); return; }
    const err = checkRules(level, ramps);
    if (err) { setMessage({ kind: "bad", text: err }); return; }

    stop();
    const segs = drawn.filter((s): s is Seg => !!s);
    const sim = initSim(level);
    simRef.current = sim;
    setMessage(null);
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      stepSim(sim, segs, level, dt);
      setFrame((f) => f + 1);
      if (sim.done) {
        rafRef.current = null;
        finish(sim);
        return;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
  }

  function finish(sim: SimState) {
    const got = sim.hit.filter(Boolean).length;
    const total = level.targets.length;
    if (sim.done === "won") {
      setMessage({ kind: "good", text: `All ${total} targets. Level cleared.` });
      setDone((d) => {
        if (d.includes(level.id)) return d;
        const nd = [...d, level.id];
        saveDone(nd);
        return nd;
      });
      return;
    }
    const why =
      sim.done === "stuck" ? "The marble came to rest." :
      sim.done === "timeout" ? "Time ran out." : "The marble left the board.";
    setMessage({
      kind: "info",
      text: `${why} ${got} of ${total} targets hit. Compare your line with the targets it missed, then adjust m or b.`,
    });
  }

  const sim = simRef.current;
  const cleared = done.includes(level.id);
  const won = sim?.done === "won";

  return (
    <main style={{ minHeight: "100vh" }}>
      <SiteHeader />
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "32px 16px 60px" }}>
        <Link href="/games" style={{ color: "#64748b", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>← All games</Link>

        <div style={shell}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 8 }}>
            <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 28, fontWeight: 700, margin: 0, color: "#f0fff6" }}>Line Launcher</h1>
            <span style={{ fontSize: 13, color: "#8fd6ab", fontWeight: 700 }}>{done.length}/{LEVELS.length} levels cleared</span>
          </div>
          <p style={{ color: "#bfe9cf", fontSize: 15, lineHeight: 1.55, margin: "8px 0 16px", maxWidth: 720 }}>
            Type straight lines to build ramps. Launch the marble, which falls and slides along your lines. It must pass through every target.
          </p>

          <div role="tablist" aria-label="Levels" style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 18 }}>
            {LEVELS.map((l, i) => {
              const on = i === levelIdx;
              const ok = done.includes(l.id);
              return (
                <button key={l.id} role="tab" aria-selected={on} onClick={() => goLevel(i)} title={l.title}
                  style={{ ...levelBtn, background: on ? "#34d27f" : ok ? "rgba(52,210,127,.18)" : "rgba(255,255,255,.06)", color: on ? "#04130a" : "#e7f6ec", borderColor: ok || on ? "#34d27f" : "rgba(159,231,189,.25)" }}>
                  {i + 1}{ok ? " ✓" : ""}
                </button>
              );
            })}
          </div>

          <div className="ll-grid">
            <Board level={level} segs={drawn} sim={sim} />

            <div>
              <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 12, fontWeight: 700, color: "#8fd6ab", letterSpacing: ".03em" }}>
                LEVEL {levelIdx + 1} · {level.skill.toUpperCase()}
              </div>
              <h2 style={{ fontFamily: "Fraunces, serif", fontSize: 22, margin: "4px 0 6px", color: "#f0fff6" }}>{level.title}{cleared ? " ✓" : ""}</h2>
              <p style={{ color: "#cdeedb", fontSize: 14.5, lineHeight: 1.55, margin: "0 0 10px" }}>{level.brief}</p>
              <div style={{ fontSize: 12.5, color: "#8fd6ab", marginBottom: 14 }}>
                Up to {level.maxLines} line{level.maxLines === 1 ? "" : "s"}
                {level.allowDomain ? " · restrictions allowed, e.g. {x < 7}" : " · full lines only"}
                {level.rule ? ` · lines must be ${level.rule}` : ""}
              </div>

              {inputs.map((val, i) => {
                const p = parsed[i];
                return (
                  <div key={i} style={{ marginBottom: 10 }}>
                    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                      <span aria-hidden style={{ width: 12, height: 12, borderRadius: 3, background: LINE_COLORS[i % LINE_COLORS.length], flex: "none" }} />
                      <input
                        value={val}
                        onChange={(e) => edit(i, e.target.value)}
                        onKeyDown={(e) => { if (e.key === "Enter") launch(); }}
                        placeholder={i === 0 ? "y = mx + b" : "y = mx + b {x < 5}"}
                        aria-label={`Line ${i + 1}`}
                        spellCheck={false}
                        autoComplete="off"
                        style={inputStyle}
                      />
                      {inputs.length > 1 && (
                        <button onClick={() => { reset(); setInputs((a) => a.filter((_, j) => j !== i)); }} aria-label={`Remove line ${i + 1}`} style={iconBtn}>×</button>
                      )}
                    </div>
                    <div style={{ fontSize: 12.5, minHeight: 18, margin: "4px 0 0 20px", color: p.ok ? "#9fe7bd" : "#fca5a5", fontFamily: p.ok ? "JetBrains Mono, monospace" : undefined }}>
                      {p.ok ? describe(p.ramp) : p.error}
                    </div>
                  </div>
                );
              })}

              {inputs.length < level.maxLines && (
                <button onClick={() => { reset(); setInputs((a) => [...a, ""]); }} style={ghostBtn}>+ Add line</button>
              )}

              <div style={{ display: "flex", gap: 10, marginTop: 16, flexWrap: "wrap" }}>
                <button onClick={launch} style={primaryBtn}>Launch</button>
                <button onClick={reset} style={secondaryBtn}>Reset marble</button>
                <button onClick={() => setShowHint((h) => !h)} style={secondaryBtn}>{showHint ? "Hide hint" : "Hint"}</button>
              </div>

              {message && (
                <div role="status" style={{
                  marginTop: 14, padding: "11px 14px", borderRadius: 10, fontSize: 14.5, lineHeight: 1.5,
                  background: message.kind === "good" ? "rgba(52,210,127,.18)" : message.kind === "bad" ? "rgba(239,68,68,.16)" : "rgba(255,255,255,.07)",
                  border: `1px solid ${message.kind === "good" ? "#34d27f" : message.kind === "bad" ? "#ef4444" : "rgba(159,231,189,.25)"}`,
                  color: "#f0fff6",
                }}>
                  {message.text}
                </div>
              )}

              {showHint && (
                <div style={{ marginTop: 12, padding: "11px 14px", borderRadius: 10, background: "rgba(56,189,248,.1)", border: "1px solid rgba(56,189,248,.35)", color: "#dbeafe", fontSize: 14, lineHeight: 1.55 }}>
                  {level.hint}
                </div>
              )}

              {won && (
                <div style={{ marginTop: 14 }}>
                  <div style={{ fontSize: 13, color: "#8fd6ab", marginBottom: 6 }}>One answer that works:</div>
                  {level.solution.map((s) => (
                    <div key={s} style={{ fontFamily: "JetBrains Mono, monospace", color: "#f0fff6", fontSize: 14 }}>{s}</div>
                  ))}
                  {levelIdx < LEVELS.length - 1 ? (
                    <button onClick={() => goLevel(levelIdx + 1)} style={{ ...primaryBtn, marginTop: 12 }}>Next level →</button>
                  ) : (
                    <p style={{ color: "#bfe9cf", fontSize: 14.5, marginTop: 10 }}>That was the last level.</p>
                  )}
                </div>
              )}

              <details style={{ marginTop: 20, color: "#bfe9cf", fontSize: 13.5, lineHeight: 1.6 }}>
                <summary style={{ cursor: "pointer", fontWeight: 700, color: "#8fd6ab" }}>How to type lines</summary>
                <ul style={{ margin: "8px 0 0", paddingLeft: 18 }}>
                  <li><code style={code}>y = -2x + 5</code> slope-intercept form</li>
                  <li><code style={code}>y = 1/2x + 3</code> or <code style={code}>y = 0.5x + 3</code> fractional slope</li>
                  <li><code style={code}>y - 4 = 2(x - 3)</code> point-slope form</li>
                  <li><code style={code}>2x + 3y = 12</code> standard form</li>
                  <li><code style={code}>y = x + 1 {"{2 < x < 6}"}</code> only between x = 2 and x = 6</li>
                  <li><code style={code}>{"{x > 3}"}</code> or <code style={code}>{"{x < 7}"}</code> cut one end only</li>
                </ul>
              </details>
            </div>
          </div>
        </div>
      </div>
      <style>{`.ll-grid{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(0,1fr);gap:24px;align-items:start}@media (max-width:820px){.ll-grid{grid-template-columns:minmax(0,1fr)}}`}</style>
    </main>
  );
}

function Board({ level, segs, sim }: { level: Level; segs: (Seg | null)[]; sim: SimState | null }) {
  const { xMin, xMax, yMin, yMax } = level.view;
  const W = (xMax - xMin) * PX, H = (yMax - yMin) * PX;
  const sx = (x: number) => (x - xMin) * PX;
  const sy = (y: number) => H - (y - yMin) * PX;

  const grid = [];
  for (let g = xMin; g <= xMax; g++) {
    const axis = g === 0;
    grid.push(<line key={"v" + g} x1={sx(g)} y1={0} x2={sx(g)} y2={H} stroke={axis ? "rgba(159,231,189,.5)" : g % 2 === 0 ? "rgba(159,231,189,.16)" : "rgba(159,231,189,.07)"} strokeWidth={axis ? 2 : 1} />);
  }
  for (let g = yMin; g <= yMax; g++) {
    const axis = g === 0;
    grid.push(<line key={"h" + g} x1={0} y1={sy(g)} x2={W} y2={sy(g)} stroke={axis ? "rgba(159,231,189,.5)" : g % 2 === 0 ? "rgba(159,231,189,.16)" : "rgba(159,231,189,.07)"} strokeWidth={axis ? 2 : 1} />);
  }
  const labels = [];
  for (let g = xMin + 2; g < xMax; g += 2) labels.push(<text key={"lx" + g} x={sx(g)} y={H - 6} fill="#8fd6ab" fontSize={12} textAnchor="middle">{g}</text>);
  for (let g = yMin + 2; g < yMax; g += 2) labels.push(<text key={"ly" + g} x={6} y={sy(g) + 4} fill="#8fd6ab" fontSize={12}>{g}</text>);

  const marble = sim ? sim.p : level.marble;
  const trail = sim && sim.trail.length > 1 ? sim.trail.map((p, i) => `${i ? "L" : "M"}${sx(p.x).toFixed(1)},${sy(p.y).toFixed(1)}`).join(" ") : "";

  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Game board: coordinate grid with the marble, targets and your lines"
      style={{ width: "100%", height: "auto", display: "block", background: "#04130a", borderRadius: 14, border: "1px solid #14653b" }}>
      <defs>
        <clipPath id="ll-clip"><rect x={0} y={0} width={W} height={H} /></clipPath>
      </defs>
      <g clipPath="url(#ll-clip)">
        {grid}
        {labels}
        {segs.map((s, i) => s && (
          <line key={i} x1={sx(s.x1)} y1={sy(s.y1)} x2={sx(s.x2)} y2={sy(s.y2)} stroke={LINE_COLORS[i % LINE_COLORS.length]} strokeWidth={4} strokeLinecap="round" />
        ))}
        {trail && <path d={trail} fill="none" stroke="rgba(240,255,246,.35)" strokeWidth={2} strokeDasharray="3 5" />}
        {level.targets.map((t, i) => {
          const hit = sim?.hit[i];
          return (
            <g key={i}>
              <circle cx={sx(t.x)} cy={sy(t.y)} r={TARGET_R * PX + 6} fill={hit ? "rgba(52,210,127,.25)" : "none"} stroke={hit ? "#34d27f" : "#fbbf24"} strokeWidth={2.5} />
              <circle cx={sx(t.x)} cy={sy(t.y)} r={3.5} fill={hit ? "#34d27f" : "#fbbf24"} />
            </g>
          );
        })}
        <circle cx={sx(marble.x)} cy={sy(marble.y)} r={MARBLE_R * PX} fill="#e2e8f0" stroke="#ffffff" strokeWidth={1.5} />
        <circle cx={sx(marble.x) - 3} cy={sy(marble.y) - 3} r={3} fill="rgba(255,255,255,.9)" />
      </g>
    </svg>
  );
}

const shell: React.CSSProperties = { marginTop: 16, borderRadius: 22, padding: "24px clamp(16px, 3vw, 28px)", color: "#e7f6ec", background: "radial-gradient(900px 420px at 80% -30%,#0d3a23,#07150d)", border: "1px solid #14653b", boxShadow: "0 20px 50px rgba(13,92,48,.25)" };
const levelBtn: React.CSSProperties = { border: "1px solid", borderRadius: 999, padding: "6px 14px", fontWeight: 800, fontSize: 14, cursor: "pointer" };
const inputStyle: React.CSSProperties = { flex: 1, minWidth: 0, background: "rgba(255,255,255,.07)", color: "#f0fff6", border: "1px solid rgba(159,231,189,.3)", borderRadius: 10, padding: "11px 12px", fontFamily: "JetBrains Mono, monospace", fontSize: 16, outline: "none" };
const iconBtn: React.CSSProperties = { background: "none", border: "1px solid rgba(159,231,189,.25)", color: "#bfe9cf", borderRadius: 8, width: 34, height: 34, fontSize: 18, cursor: "pointer", flex: "none" };
const ghostBtn: React.CSSProperties = { background: "none", border: "1px dashed rgba(159,231,189,.4)", color: "#9fe7bd", borderRadius: 10, padding: "8px 14px", fontWeight: 700, fontSize: 13.5, cursor: "pointer" };
const primaryBtn: React.CSSProperties = { background: "linear-gradient(135deg,#1f8a4c,#34d27f)", color: "#04130a", border: "none", borderRadius: 12, padding: "12px 26px", fontWeight: 800, fontSize: 15.5, cursor: "pointer" };
const secondaryBtn: React.CSSProperties = { background: "rgba(255,255,255,.08)", color: "#f0fff6", border: "1px solid rgba(159,231,189,.28)", borderRadius: 12, padding: "12px 18px", fontWeight: 700, fontSize: 14.5, cursor: "pointer" };
const code: React.CSSProperties = { fontFamily: "JetBrains Mono, monospace", background: "rgba(255,255,255,.08)", padding: "1px 5px", borderRadius: 5, color: "#f0fff6" };
