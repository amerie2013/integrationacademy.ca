"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { SiteHeader } from "../../../components/SiteHeader";
import {
  FUSES, ROUND_SIZE, TIERS, apply, eqQ, fmtQ, makeMachine, opLabel, orderReason, parseQ, rng, runForward, sameOp, tray, undoOrder,
  type Machine, type Op, type Q, type Tier,
} from "../../../lib/undoMachine";

const STORE_KEY = "ia_undomachine_progress"; // { [tier]: { stars, score } }
type Best = Record<number, { stars: number; score: number }>;
type Spot = "out" | "s1" | "s2" | "x" | "fx" | "f1" | "f2" | "fout";
type Phase = "place" | "running" | "ask" | "solved" | "jammed" | "over";
type Ask = { expr: string; answer: Q; tries: number };

/* ---------- impure helpers (called only from handlers and effects) ---------- */
const randomSeed = () => Math.floor(Math.random() * 1e9);
const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));
let actx: AudioContext | null = null;
function tone(freq: number, dur = 0.12, type: OscillatorType = "sine", vol = 0.05, to?: number) {
  try {
    actx = actx || new AudioContext();
    const o = actx.createOscillator(), g = actx.createGain(), t = actx.currentTime;
    o.type = type;
    o.frequency.setValueAtTime(freq, t);
    if (to) o.frequency.exponentialRampToValueAtTime(to, t + dur);
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(actx.destination);
    o.start(t);
    o.stop(t + dur + 0.02);
  } catch {}
}
function loadBest(): Best { try { return JSON.parse(localStorage.getItem(STORE_KEY) || "{}"); } catch { return {}; } }
function saveBest(b: Best) { try { localStorage.setItem(STORE_KEY, JSON.stringify(b)); } catch {} }

/* ---------- board geometry ---------- */
const W = 760, H = 330;
const TOP = 92, BOT = 246;
const COLX = { x: 82, op1: 292, op2: 502, out: 690 };
const SPOT: Record<Spot, [number, number]> = {
  out: [COLX.out, BOT], s1: [COLX.op2, BOT], s2: [COLX.op1, BOT], x: [COLX.x, BOT],
  fx: [COLX.x, TOP], f1: [COLX.op1, TOP], f2: [COLX.op2, TOP], fout: [COLX.out, TOP],
};

export default function UndoMachine() {
  const [tier, setTier] = useState<Tier>(0);
  const [round, setRound] = useState(0); // index of the machine in this round
  const [machine, setMachine] = useState<Machine | null>(null);
  const [tiles, setTiles] = useState<Op[]>([]);
  const [slots, setSlots] = useState<(number | null)[]>([null, null]); // indexes into tiles
  const [activeSlot, setActiveSlot] = useState<number | null>(null); // slot the student clicked to fill next
  const [drag, setDrag] = useState<{ i: number; x: number; y: number; over: number | null } | null>(null);
  const dragStart = useRef<{ i: number; x: number; y: number; moved: boolean } | null>(null);
  const suppressClick = useRef(false);
  const [phase, setPhase] = useState<Phase>("place");
  const [cap, setCap] = useState<{ spot: Spot; val: string; show: boolean }>({ spot: "out", val: "", show: false });
  const [xFound, setXFound] = useState<string | null>(null);
  const [fwdOut, setFwdOut] = useState<{ val: string; ok: boolean } | null>(null);
  const [lit, setLit] = useState<string | null>(null); // which block is glowing
  const [ask, setAsk] = useState<Ask | null>(null);
  const [askVal, setAskVal] = useState("");
  const [askErr, setAskErr] = useState(false);
  const [message, setMessage] = useState<{ kind: "good" | "bad"; text: string } | null>(null);
  const [fuses, setFuses] = useState(FUSES);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  // no jams / wrong values on this machine; a ref because the running animation reads it after the student types
  const cleanRef = useRef(true);
  const [helped, setHelped] = useState(false);
  const [best, setBest] = useState<Best>({});
  const [allOpen, setAllOpen] = useState(false);
  const [sound, setSound] = useState(false);
  const [gained, setGained] = useState<number | null>(null);
  const runRef = useRef(0);
  const askResolve = useRef<(() => void) | null>(null);

  const T = TIERS[tier];
  const mode = machine?.mode ?? "frac";
  const fmt = (v: Q) => fmtQ(v, mode);

  useEffect(() => {
    const id = setTimeout(() => {
      setBest(loadBest());
      setAllOpen(new URLSearchParams(window.location.search).get("all") === "1");
      startRound(0);
    }, 0);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const play = (f: number, d?: number, t?: OscillatorType, v?: number, to?: number) => { if (sound) tone(f, d, t, v, to); };
  const tierOpen = (t: number) => allOpen || t === 0 || (best[t - 1]?.stars ?? 0) >= 2;

  function loadMachine(t: Tier) {
    runRef.current++;
    const r = rng(randomSeed());
    const m = makeMachine(t, r);
    setMachine(m);
    setTiles(tray(m, t, r));
    setSlots([null, null]);
    setActiveSlot(null);
    setPhase("place");
    setCap({ spot: "out", val: fmtQ(m.out, m.mode), show: false });
    setXFound(null);
    setFwdOut(null);
    setLit(null);
    setAsk(null);
    setMessage(null);
    cleanRef.current = true;
    setHelped(false);
  }

  function startRound(t: Tier) {
    setTier(t);
    setRound(0);
    setFuses(FUSES);
    setScore(0);
    setStreak(0);
    loadMachine(t);
  }

  /* ---------------- tiles ---------------- */
  /** Put tile i into a slot: the one it was dropped on, else the clicked one, else the next empty one. */
  function placeTile(i: number, target?: number) {
    if (phase !== "place") return;
    const ns = slots.map((v) => (v === i ? null : v)); // a tile can only sit in one slot
    const k = target ?? (activeSlot !== null ? activeSlot : ns[0] === null ? 0 : ns[1] === null ? 1 : -1);
    if (k < 0) return;
    ns[k] = i;
    setSlots(ns);
    setActiveSlot(null);
    setMessage(null);
    play(500 + k * 120, 0.06, "triangle", 0.04);
  }
  /** Clicking a slot: empty → choose it as the target; filled → send the tile back to the tray. */
  function clickSlot(k: number) {
    if (phase !== "place") return;
    if (slots[k] !== null) {
      const ns = [...slots];
      ns[k] = null;
      setSlots(ns);
      setActiveSlot(k);
    } else setActiveSlot((a) => (a === k ? null : k));
  }
  const nextSlot = phase !== "place" ? null : activeSlot !== null ? activeSlot : slots[0] === null ? 0 : slots[1] === null ? 1 : null;

  /* drag a tile onto a slot (mouse or touch) */
  const slotAt = (x: number, y: number): number | null => {
    const el = document.elementFromPoint(x, y)?.closest("[data-slot]");
    return el ? Number(el.getAttribute("data-slot")) : null;
  };
  function tileDown(e: React.PointerEvent, i: number) {
    if (phase !== "place") return;
    dragStart.current = { i, x: e.clientX, y: e.clientY, moved: false };
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  }
  function tileMove(e: React.PointerEvent) {
    const d = dragStart.current;
    if (!d) return;
    if (!d.moved && Math.hypot(e.clientX - d.x, e.clientY - d.y) < 6) return;
    d.moved = true;
    setDrag({ i: d.i, x: e.clientX, y: e.clientY, over: slotAt(e.clientX, e.clientY) });
  }
  function tileUp(e: React.PointerEvent) {
    const d = dragStart.current;
    dragStart.current = null;
    if (!d || !d.moved) return; // a plain tap: onClick handles it
    suppressClick.current = true;
    setDrag(null);
    const k = slotAt(e.clientX, e.clientY);
    if (k !== null) placeTile(d.i, k);
  }

  /* ---------------- running the machine ---------------- */
  async function run(auto = false, s: (number | null)[] = slots) {
    if (!machine || s[0] === null || s[1] === null) return;
    const id = ++runRef.current;
    const alive = () => runRef.current === id;
    const chosen: [Op, Op] = [tiles[s[0]], tiles[s[1]]];
    setPhase("running");
    setMessage(null);
    setXFound(null);
    setFwdOut(null);
    play(220, 0.3, "sawtooth", 0.02, 440);

    // backwards along the bottom track: out → 1st undo → 2nd undo → x
    let v = machine.out;
    setCap({ spot: "out", val: fmt(v), show: true });
    await sleep(350);
    for (let i = 0; i < 2; i++) {
      if (!alive()) return;
      setCap({ spot: i === 0 ? "s1" : "s2", val: fmt(v), show: true });
      setLit(i === 0 ? "s1" : "s2");
      await sleep(700);
      if (!alive()) return;
      const nv = apply(v, chosen[i]);
      if (T.typeValues && !auto) {
        setAsk({ expr: `${fmt(v)} ${opLabel(chosen[i], mode)}`, answer: nv, tries: 0 });
        setAskVal("");
        setAskErr(false);
        setPhase("ask");
        await new Promise<void>((res) => { askResolve.current = res; });
        if (!alive()) return;
        setPhase("running");
      } else {
        await sleep(250);
      }
      v = nv;
      setCap({ spot: i === 0 ? "s1" : "s2", val: fmt(v), show: true });
      play(600 + i * 150, 0.08, "triangle", 0.04);
      await sleep(350);
    }
    if (!alive()) return;
    setLit(null);
    setCap({ spot: "x", val: fmt(v), show: true });
    await sleep(700);
    if (!alive()) return;
    setXFound(fmt(v));
    const xv = v;

    // forward check along the top track: x → op1 → op2 → out
    await sleep(400);
    let f = xv;
    setCap({ spot: "fx", val: fmt(f), show: true });
    await sleep(450);
    for (let i = 0; i < 2; i++) {
      if (!alive()) return;
      setCap({ spot: i === 0 ? "f1" : "f2", val: fmt(f), show: true });
      setLit(i === 0 ? "op1" : "op2");
      await sleep(550);
      f = apply(f, machine.ops[i]);
      setCap({ spot: i === 0 ? "f1" : "f2", val: fmt(f), show: true });
      await sleep(250);
    }
    if (!alive()) return;
    setLit(null);
    setCap({ spot: "fout", val: fmt(f), show: true });
    await sleep(550);
    if (!alive()) return;
    const ok = eqQ(f, machine.out) && eqQ(runForward(machine, xv), machine.out);
    setFwdOut({ val: fmt(f), ok });
    setCap((c) => ({ ...c, show: false }));
    if (ok) solved(auto); else jammed(chosen);
  }

  function submitAsk() {
    if (!ask) return;
    const v = parseQ(askVal.replace(/[−–]/g, "-").replace(/\s+/g, ""));
    if (v && eqQ(v, ask.answer)) {
      setAsk(null);
      askResolve.current?.();
      return;
    }
    cleanRef.current = false;
    setAskErr(true);
    play(160, 0.15, "square", 0.03);
    setAsk({ ...ask, tries: ask.tries + 1 });
    setTimeout(() => setAskErr(false), 400);
  }

  function solved(auto: boolean) {
    setPhase("solved");
    play(660, 0.1); setTimeout(() => play(880, 0.1), 100); setTimeout(() => play(1320, 0.22), 200);
    if (auto || helped) {
      setStreak(0);
      setGained(0);
      setMessage({ kind: "good", text: `x = ${xFoundText()}. That one was shown to you, so no points. Try the next one yourself.` });
      return;
    }
    const clean = cleanRef.current;
    const pts = Math.round((100 + (clean ? 50 : 0)) * (1 + Math.min(streak, 5) * 0.1) * T.mult);
    setScore((s) => s + pts);
    setStreak((s) => s + 1);
    setGained(pts);
    setMessage({ kind: "good", text: clean ? "Perfect run. Both undos, right order." : "Solved." });
  }
  const xFoundText = () => (machine ? fmt(machine.x) : "");

  function jammed(chosen: [Op, Op]) {
    if (!machine) return;
    setPhase("jammed");
    cleanRef.current = false;
    setStreak(0);
    play(120, 0.35, "sawtooth", 0.04, 60);
    const [u1, u2] = undoOrder(machine);
    let why: string;
    if (sameOp(chosen[0], u2) && sameOp(chosen[1], u1)) why = orderReason(machine);
    else {
      const bad = chosen.find((c) => !sameOp(c, u1) && !sameOp(c, u2))!;
      const orig = machine.ops.find((o) => sameOp(o, bad));
      why = orig
        ? `${opLabel(bad, mode)} is what the machine already did. To undo it, use the opposite.`
        : `${opLabel(bad, mode)} doesn't undo anything this machine did (${opLabel(machine.ops[0], mode)}, then ${opLabel(machine.ops[1], mode)}).`;
    }
    const left = fuses - 1;
    setFuses(left);
    setMessage({ kind: "bad", text: `Jammed! ${why}` });
    if (left <= 0) setTimeout(() => endRound(false), 1600);
  }

  function retry() {
    runRef.current++;
    setSlots([null, null]);
    setPhase("place");
    setCap((c) => ({ ...c, show: false }));
    setXFound(null);
    setFwdOut(null);
    setLit(null);
  }

  function next() {
    if (round + 1 >= ROUND_SIZE) { endRound(true); return; }
    setRound((n) => n + 1);
    loadMachine(tier);
  }

  function endRound(completed: boolean) {
    runRef.current++;
    setPhase("over");
    const stars = completed ? Math.max(1, fuses) : 0;
    setBest((prev) => {
      const old = prev[tier] ?? { stars: 0, score: 0 };
      const nb = { ...prev, [tier]: { stars: Math.max(old.stars, stars), score: Math.max(old.score, score) } };
      saveBest(nb);
      return nb;
    });
  }

  async function showMe() {
    if (!machine || phase !== "place") return;
    setHelped(true);
    const [u1, u2] = undoOrder(machine);
    const i1 = tiles.findIndex((t) => sameOp(t, u1)), i2 = tiles.findIndex((t) => sameOp(t, u2));
    setSlots([null, null]);
    await sleep(300);
    setSlots([i1, null]);
    await sleep(500);
    setSlots([i1, i2]);
    await sleep(500);
    run(true, [i1, i2]);
  }

  // keyboard: Enter runs / continues
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Enter" || (e.target as HTMLElement)?.tagName === "INPUT") return;
      if (phase === "place" && slots[0] !== null && slots[1] !== null) run();
      else if (phase === "solved") next();
      else if (phase === "jammed" && fuses > 0) retry();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const stars = fuses;
  const over = phase === "over";
  const completed = over && fuses > 0;

  return (
    <main style={{ minHeight: "100vh" }}>
      <SiteHeader />
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "28px 16px 60px" }}>
        <Link href="/games" style={{ color: "#64748b", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>← All games</Link>

        <div style={shell}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 30, fontWeight: 700, margin: 0, color: "#f0fff6" }}>Undo Machine</h1>
            <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
              <Hud label="Machine" value={`${Math.min(round + 1, ROUND_SIZE)}/${ROUND_SIZE}`} />
              <Hud label="Score" value={String(score)} />
              <Hud label="Streak" value={`×${streak}`} />
              <div aria-label={`${fuses} of ${FUSES} fuses left`} style={{ display: "flex", gap: 5, padding: "0 6px" }}>
                {Array.from({ length: FUSES }, (_, i) => (
                  <span key={i} className={i < fuses ? "um-fuse" : undefined} style={{ width: 14, height: 22, borderRadius: "7px 7px 4px 4px", background: i < fuses ? "#fbbf24" : "rgba(255,255,255,.12)", boxShadow: i < fuses ? "0 0 10px rgba(251,191,36,.7)" : "none" }} />
                ))}
              </div>
              <button onClick={() => setSound((s) => !s)} style={{ ...ghostBtn, padding: "8px 12px" }} aria-pressed={sound}>Sound {sound ? "on" : "off"}</button>
            </div>
          </div>

          <div role="group" aria-label="Difficulty" style={{ display: "flex", gap: 8, margin: "14px 0 6px", flexWrap: "wrap" }}>
            {TIERS.map((tt, k) => {
              const open = tierOpen(k), on = k === tier, st = best[k]?.stars ?? 0;
              return (
                <button key={tt.name} disabled={!open} onClick={() => startRound(k as Tier)}
                  title={open ? tt.desc : `Locked: finish a ${TIERS[k - 1].name} round with 2 or more fuses left`}
                  style={{ border: `1.5px solid ${on ? tt.color : open ? "rgba(255,255,255,.2)" : "rgba(255,255,255,.08)"}`, background: on ? `${tt.color}26` : "transparent", color: open ? tt.color : "rgba(255,255,255,.3)", borderRadius: 999, padding: "6px 14px", fontWeight: 800, fontSize: 13.5, cursor: open ? "pointer" : "not-allowed" }}>
                  {tt.name} {open ? <span style={{ letterSpacing: 1 }}>{"★".repeat(st)}{"☆".repeat(3 - st)}</span> : "· locked"}
                </button>
              );
            })}
          </div>
          <div style={{ fontSize: 13, color: "#8fd6ab", marginBottom: 10 }}>{T.desc}{T.mult > 1 ? ` · points ×${T.mult}` : ""}</div>

          {over ? (
            <div className="um-pop" style={{ textAlign: "center", padding: "30px 8px" }}>
              <div style={{ color: completed ? T.color : "#fca5a5", fontWeight: 800, letterSpacing: ".14em", fontSize: 13 }}>{completed ? `${T.name.toUpperCase()} ROUND COMPLETE` : "OUT OF FUSES"}</div>
              <div className="um-stars">{[0, 1, 2].map((i) => <span key={i} style={{ animationDelay: `${i * 0.18}s`, color: completed && i < stars ? "#fbbf24" : "rgba(255,255,255,.2)" }}>★</span>)}</div>
              <div style={{ fontFamily: "Fraunces, serif", fontSize: 44, fontWeight: 700, color: "#34d27f" }}>{score}</div>
              {completed && tier < 2 && stars >= 2 && <div style={{ color: TIERS[tier + 1].color, fontWeight: 800, margin: "6px 0" }}>{TIERS[tier + 1].name} unlocked!</div>}
              {completed && tier < 2 && stars < 2 && <div style={{ color: "#8fd6ab", fontSize: 14, margin: "6px 0" }}>Finish with 2 or more fuses to unlock {TIERS[tier + 1].name}.</div>}
              <div style={{ display: "flex", gap: 10, justifyContent: "center", marginTop: 14, flexWrap: "wrap" }}>
                {tier < 2 && tierOpen(tier + 1) && <button onClick={() => startRound((tier + 1) as Tier)} style={primaryBtn}>Go for {TIERS[tier + 1].name} →</button>}
                <button onClick={() => startRound(tier)} style={tier < 2 && tierOpen(tier + 1) ? secondaryBtn : primaryBtn}>Play again</button>
              </div>
            </div>
          ) : machine && (
            <>
              {/* the equation */}
              <div style={{ textAlign: "center", margin: "6px 0 2px" }}>
                <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 800, color: "#f0fff6" }}>{machine.text}</div>
                <div style={{ color: "#8fd6ab", fontSize: 14 }}>
                  The machine takes <b style={{ color: "#f0fff6" }}>x</b>, does <b style={{ color: "#5eead4" }}>{opLabel(machine.ops[0], mode)}</b> then <b style={{ color: "#5eead4" }}>{opLabel(machine.ops[1], mode)}</b>, and out comes <b style={{ color: "#f0fff6" }}>{fmt(machine.out)}</b>.
                </div>
              </div>

              <div style={{ position: "relative" }}>
                <Board machine={machine} tiles={tiles} slots={slots} cap={cap} xFound={xFound} fwdOut={fwdOut} lit={lit} phase={phase} onSlot={clickSlot} nextSlot={nextSlot} dragOver={drag?.over ?? null} />
                {ask && phase === "ask" && (
                  <div className="um-ask" style={{ left: `${((ask && cap.spot === "s1" ? COLX.op2 : COLX.op1) / W) * 100}%` }}>
                    <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 18, color: "#f0fff6", fontWeight: 700, whiteSpace: "nowrap" }}>{ask.expr} = </div>
                    <input autoFocus value={askVal} onChange={(e) => setAskVal(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") submitAsk(); }}
                      aria-label="Work out this number" inputMode="decimal" className={askErr ? "um-shake" : undefined}
                      style={{ width: 80, background: "rgba(255,255,255,.1)", color: "#f0fff6", border: `2px solid ${askErr ? "#ef4444" : "#5eead4"}`, borderRadius: 8, padding: "6px 8px", fontFamily: "JetBrains Mono, monospace", fontSize: 18, textAlign: "center", outline: "none" }} />
                    <button onClick={submitAsk} style={{ ...primaryBtn, padding: "8px 14px", fontSize: 14 }}>OK</button>
                    {ask.tries >= 2 && <button onClick={() => { setAskVal(fmt(ask.answer)); }} style={{ ...linkBtn, marginLeft: 4 }}>show</button>}
                  </div>
                )}
              </div>

              {/* tile tray */}
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 10, justifyContent: "center", margin: "8px 0 6px" }}>
                <span style={{ color: "#8fd6ab", fontSize: 13, fontWeight: 700, letterSpacing: ".06em" }}>{phase === "place" ? "TAP OR DRAG A TILE ↑" : "UNDO TILES"}</span>
                {tiles.map((t, i) => {
                  const used = slots.includes(i);
                  return (
                    <button key={i} disabled={used || phase !== "place"} className="um-tile"
                      onClick={() => { if (suppressClick.current) { suppressClick.current = false; return; } placeTile(i); }}
                      onPointerDown={(e) => tileDown(e, i)} onPointerMove={tileMove} onPointerUp={tileUp}
                      onPointerCancel={() => { dragStart.current = null; setDrag(null); }}
                      aria-label={`Undo tile ${opLabel(t, mode)}`}
                      style={{ ...tileStyle(t), opacity: used ? 0.2 : drag?.i === i ? 0.4 : 1, cursor: used || phase !== "place" ? "default" : "grab", touchAction: "none" }}>
                      {opLabel(t, mode)}
                    </button>
                  );
                })}
              </div>

              <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginTop: 8 }}>
                {phase === "place" && (
                  <>
                    <button onClick={() => run()} disabled={slots[0] === null || slots[1] === null} style={{ ...primaryBtn, opacity: slots[0] === null || slots[1] === null ? 0.45 : 1 }}>Run backwards ◀</button>
                    <button onClick={() => setSlots([null, null])} style={secondaryBtn}>Clear</button>
                    {T.showMe && <button onClick={showMe} style={secondaryBtn}>Show me</button>}
                  </>
                )}
                {phase === "solved" && <button onClick={next} style={primaryBtn}>{round + 1 >= ROUND_SIZE ? "Finish round" : "Next machine →"}</button>}
                {phase === "jammed" && fuses > 0 && <button onClick={retry} style={primaryBtn}>Fix it and try again</button>}
              </div>

              {message && (
                <div role="status" className="um-pop" style={{ ...note, textAlign: "center", background: message.kind === "good" ? "rgba(52,210,127,.15)" : "rgba(239,68,68,.14)", borderColor: message.kind === "good" ? "#34d27f" : "#ef4444" }}>
                  {message.kind === "good" && gained ? <b style={{ color: "#fde68a" }}>+{gained} · </b> : null}
                  {message.text}
                  {message.kind === "good" && xFound && <div style={{ color: "#d1fae5", marginTop: 4, fontSize: 14 }}>Check: {machine.text.split(" = ")[0].replace(/x/g, `(${xFound})`)} = {fmt(machine.out)} ✓</div>}
                </div>
              )}

              {phase === "place" && round === 0 && !message && (
                <ol className="um-how">
                  <li><b>1</b> Tap the undo tile for the <em>last</em> step</li>
                  <li><b>2</b> Then the undo for the first step</li>
                  <li><b>3</b> Run it backwards to find x</li>
                </ol>
              )}
            </>
          )}
        </div>
      </div>
      {drag && machine && (
        <div style={{ ...tileStyle(tiles[drag.i]), position: "fixed", left: drag.x, top: drag.y, transform: "translate(-50%, -60%) rotate(-4deg) scale(1.08)", pointerEvents: "none", zIndex: 60, boxShadow: "0 12px 30px rgba(0,0,0,.5)" }}>
          {opLabel(tiles[drag.i], mode)}
        </div>
      )}
      <style>{CSS}</style>
    </main>
  );
}

/* ------------------------------------------------------------------ */
/* Machine board                                                       */
/* ------------------------------------------------------------------ */

function tileStyle(t: Op): React.CSSProperties {
  const add = t.k === "+" || t.k === "-";
  return {
    minWidth: 64, padding: "10px 14px", borderRadius: 12, fontFamily: "JetBrains Mono, monospace", fontSize: 20, fontWeight: 800,
    color: add ? "#fde68a" : "#99f6e4", background: add ? "linear-gradient(180deg,#5a3a10,#3b2408)" : "linear-gradient(180deg,#0f4a45,#08302d)",
    border: `2px solid ${add ? "#f59e0b" : "#14b8a6"}`, boxShadow: "0 4px 0 rgba(0,0,0,.35)",
  };
}

function Gear({ cx, cy, r, spin }: { cx: number; cy: number; r: number; spin: boolean }) {
  const teeth = 10;
  const pts: string[] = [];
  for (let i = 0; i < teeth * 2; i++) {
    const a = (i / (teeth * 2)) * Math.PI * 2, rr = i % 2 ? r : r * 0.78;
    pts.push(`${(cx + rr * Math.cos(a)).toFixed(1)},${(cy + rr * Math.sin(a)).toFixed(1)}`);
  }
  return (
    <g className={spin ? "um-spin" : undefined} style={{ transformOrigin: `${cx}px ${cy}px` }}>
      <polygon points={pts.join(" ")} fill="rgba(94,234,212,.12)" stroke="rgba(94,234,212,.35)" />
      <circle cx={cx} cy={cy} r={r * 0.3} fill="#04130a" stroke="rgba(94,234,212,.35)" />
    </g>
  );
}

function Board({ machine, tiles, slots, cap, xFound, fwdOut, lit, phase, onSlot, nextSlot, dragOver }: {
  machine: Machine; tiles: Op[]; slots: (number | null)[]; cap: { spot: Spot; val: string; show: boolean };
  xFound: string | null; fwdOut: { val: string; ok: boolean } | null; lit: string | null; phase: Phase; onSlot: (k: number) => void;
  nextSlot: number | null; dragOver: number | null;
}) {
  const mode = machine.mode;
  const running = phase === "running" || phase === "ask";
  const [cx, cy] = SPOT[cap.spot];
  const block = (x: number, y: number, label: string, kind: "op" | "slot", glow: boolean, filled = true) => (
    <g>
      {glow && <rect x={x - 66} y={y - 34} width={132} height={68} rx={14} fill={kind === "op" ? "#5eead4" : "#fbbf24"} opacity={0.35} filter="url(#um-glow)" />}
      <rect x={x - 60} y={y - 30} width={120} height={60} rx={12}
        fill={kind === "op" ? "#0b3b37" : filled ? "#3b2408" : "rgba(255,255,255,.03)"}
        stroke={kind === "op" ? "#14b8a6" : filled ? "#f59e0b" : "rgba(253,230,138,.45)"} strokeWidth={2.5} strokeDasharray={kind === "slot" && !filled ? "7 6" : undefined} />
      <text x={x} y={y + 8} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize={label.length > 6 ? 18 : 24} fontWeight={800}
        fill={kind === "op" ? "#99f6e4" : filled ? "#fde68a" : "rgba(253,230,138,.55)"}>{label}</text>
    </g>
  );
  const box = (x: number, y: number, label: string, color: string, glow = false) => (
    <g>
      {glow && <circle cx={x} cy={y} r={44} fill={color} opacity={0.35} filter="url(#um-glow)" />}
      <rect x={x - 42} y={y - 30} width={84} height={60} rx={30} fill="#06180f" stroke={color} strokeWidth={2.5} />
      <text x={x} y={y + 8} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize={label.length > 5 ? 17 : 22} fontWeight={800} fill={color}>{label}</text>
    </g>
  );
  const pipe = (x1: number, x2: number, y: number, dir: 1 | -1, flowing: boolean) => (
    <g>
      <line x1={x1} y1={y} x2={x2} y2={y} stroke="#123524" strokeWidth={14} strokeLinecap="round" />
      <line x1={x1} y1={y} x2={x2} y2={y} stroke={flowing ? "#34d27f" : "rgba(159,231,189,.25)"} strokeWidth={3} strokeDasharray="6 8" className={flowing ? (dir > 0 ? "um-flow" : "um-flow-back") : undefined} />
    </g>
  );
  const slotLabel = (k: number) => (slots[k] !== null ? opLabel(tiles[slots[k]!], mode) : k === 0 ? "1st undo" : "2nd undo");
  const checking = cap.spot.startsWith("f") && cap.show;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`Machine: x, ${opLabel(machine.ops[0], mode)}, ${opLabel(machine.ops[1], mode)}, gives ${fmtQ(machine.out, mode)}`}
      style={{ width: "100%", height: "auto", display: "block", margin: "6px 0", userSelect: "none", WebkitUserSelect: "none" }}>
      <defs><filter id="um-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="8" /></filter></defs>
      <Gear cx={200} cy={170} r={26} spin={running || checking} />
      <Gear cx={400} cy={170} r={20} spin={running || checking} />
      <Gear cx={600} cy={170} r={26} spin={running || checking} />

      <text x={14} y={36} fill="#5eead4" fontSize={12.5} fontWeight={800} letterSpacing={1.5}>MACHINE →</text>
      <text x={14} y={H - 14} fill="#fbbf24" fontSize={12.5} fontWeight={800} letterSpacing={1.5}>← UNDO TRACK</text>

      {pipe(COLX.x + 42, COLX.op1 - 60, TOP, 1, checking)}
      {pipe(COLX.op1 + 60, COLX.op2 - 60, TOP, 1, checking)}
      {pipe(COLX.op2 + 60, COLX.out - 42, TOP, 1, checking)}
      {pipe(COLX.out - 42, COLX.op2 + 60, BOT, -1, running)}
      {pipe(COLX.op2 - 60, COLX.op1 + 60, BOT, -1, running)}
      {pipe(COLX.op1 - 60, COLX.x + 42, BOT, -1, running)}
      {/* drop from the output down to the undo track */}
      <line x1={COLX.out} y1={TOP + 30} x2={COLX.out} y2={BOT - 30} stroke="#123524" strokeWidth={14} />

      {box(COLX.x, TOP, "x", "#f0fff6")}
      {block(COLX.op1, TOP, opLabel(machine.ops[0], mode), "op", lit === "op1")}
      {block(COLX.op2, TOP, opLabel(machine.ops[1], mode), "op", lit === "op2")}
      {box(COLX.out, TOP, fwdOut ? fwdOut.val : fmtQ(machine.out, mode), fwdOut ? (fwdOut.ok ? "#34d27f" : "#f87171") : "#f0fff6", !!fwdOut)}
      {fwdOut && !fwdOut.ok && <text x={COLX.out} y={TOP - 40} textAnchor="middle" fill="#f87171" fontSize={13} fontWeight={800}>≠ {fmtQ(machine.out, mode)}</text>}
      {fwdOut && !fwdOut.ok && [0, 1, 2, 3, 4, 5].map((i) => <line key={i} className="um-spark" x1={COLX.out} y1={TOP} x2={COLX.out + 60 * Math.cos(i)} y2={TOP + 60 * Math.sin(i * 1.7)} stroke="#fbbf24" strokeWidth={2} style={{ animationDelay: `${i * 0.05}s` }} />)}

      {box(COLX.out, BOT, fmtQ(machine.out, mode), "#f0fff6")}
      {[0, 1].map((k) => {
        const cx = k === 0 ? COLX.op2 : COLX.op1;
        const target = phase === "place" && (dragOver === k || (dragOver === null && nextSlot === k));
        return (
          <g key={k} data-slot={k} onClick={() => onSlot(k)} role="button" aria-label={`${k === 0 ? "First" : "Second"} undo slot${slots[k] !== null ? `: ${slotLabel(k)}, click to remove` : ", empty"}`}
            style={{ cursor: phase === "place" ? "pointer" : "default" }}>
            {target && <rect className="um-next" x={cx - 66} y={BOT - 36} width={132} height={72} rx={16} fill="none" stroke="#fbbf24" strokeWidth={3} />}
            {block(cx, BOT, slotLabel(k), "slot", lit === (k === 0 ? "s1" : "s2"), slots[k] !== null)}
            {phase === "place" && slots[k] === null && <text x={cx} y={BOT + 50} textAnchor="middle" fill="rgba(253,230,138,.7)" fontSize={11.5}>{target ? "drop a tile here" : "click to choose"}</text>}
          </g>
        );
      })}
      {box(COLX.x, BOT, xFound ? `x=${xFound}` : "x = ?", xFound ? (fwdOut ? (fwdOut.ok ? "#34d27f" : "#f87171") : "#fde68a") : "rgba(240,255,246,.5)", !!xFound && !!fwdOut?.ok)}

      {/* the number capsule */}
      <g style={{ transform: `translate(${cx}px, ${cy}px)`, transition: "transform .6s cubic-bezier(.5,0,.3,1)", opacity: cap.show ? 1 : 0 }}>
        <circle r={24} fill="#34d27f" opacity={0.35} filter="url(#um-glow)" />
        <rect x={-Math.max(26, cap.val.length * 7 + 10)} y={-17} width={2 * Math.max(26, cap.val.length * 7 + 10)} height={34} rx={17} fill="#d1fae5" stroke="#34d27f" strokeWidth={2} />
        <text y={6} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize={17} fontWeight={800} fill="#04130a">{cap.val}</text>
      </g>
    </svg>
  );
}

function Hud({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(159,231,189,.22)", borderRadius: 10, padding: "5px 12px", minWidth: 70, textAlign: "center" }}>
      <div style={{ fontSize: 10.5, letterSpacing: ".1em", color: "#8fd6ab", fontWeight: 700 }}>{label.toUpperCase()}</div>
      <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 18, fontWeight: 800, color: "#f0fff6" }}>{value}</div>
    </div>
  );
}

const CSS = `
.um-spin{animation:umSpin 1.2s linear infinite}
@keyframes umSpin{to{transform:rotate(360deg)}}
.um-flow{animation:umFlow .5s linear infinite}
.um-flow-back{animation:umFlow .5s linear infinite reverse}
@keyframes umFlow{to{stroke-dashoffset:-14}}
.um-spark{animation:umSpark .6s ease-out both}
@keyframes umSpark{from{opacity:1;stroke-dasharray:0 80}to{opacity:0;stroke-dasharray:60 80}}
.um-tile{transition:transform .12s ease}
.um-next{animation:umNext 1.1s ease-in-out infinite}
@keyframes umNext{50%{opacity:.25}}
.um-tile:not(:disabled):hover{transform:translateY(-3px)}
.um-tile:not(:disabled):active{transform:translateY(2px)}
.um-pop{animation:umPop .35s ease-out both}
@keyframes umPop{from{opacity:0;transform:scale(.96)}to{opacity:1;transform:none}}
.um-shake{animation:umShake .35s}
@keyframes umShake{20%{transform:translateX(-6px)}40%{transform:translateX(6px)}60%{transform:translateX(-4px)}80%{transform:translateX(4px)}}
.um-fuse{animation:umFuse 1.6s ease-in-out infinite}
@keyframes umFuse{50%{opacity:.75}}
.um-ask{position:absolute;bottom:2%;transform:translateX(-50%);display:flex;align-items:center;gap:8px;background:rgba(4,19,10,.95);border:1.5px solid #5eead4;border-radius:12px;padding:8px 10px;animation:umPop .25s ease-out both;z-index:5}
.um-stars{font-size:54px;letter-spacing:6px;margin:6px 0}
.um-stars span{display:inline-block;animation:umStar .45s cubic-bezier(.2,1.6,.4,1) both}
@keyframes umStar{from{transform:scale(0) rotate(-40deg)}to{transform:none}}
.um-how{list-style:none;display:flex;flex-wrap:wrap;justify-content:center;gap:8px 18px;padding:0;margin:14px 0 0;color:#cdeedb;font-size:14.5px}
.um-how b{display:inline-grid;place-items:center;width:22px;height:22px;border-radius:999px;background:#fbbf24;color:#04130a;font-size:13px;margin-right:6px}
.um-how em{font-style:normal;color:#fde68a;font-weight:800}
`;

const shell: React.CSSProperties = { marginTop: 16, borderRadius: 22, padding: "22px clamp(14px, 3vw, 28px)", color: "#e7f6ec", background: "radial-gradient(900px 420px at 80% -30%,#0d3a23,#07150d)", border: "1px solid #14653b", boxShadow: "0 20px 50px rgba(13,92,48,.25)" };
const ghostBtn: React.CSSProperties = { background: "none", border: "1px dashed rgba(159,231,189,.4)", color: "#9fe7bd", borderRadius: 10, padding: "8px 14px", fontWeight: 700, fontSize: 13.5, cursor: "pointer" };
const primaryBtn: React.CSSProperties = { background: "linear-gradient(135deg,#1f8a4c,#34d27f)", color: "#04130a", border: "none", borderRadius: 12, padding: "12px 26px", fontWeight: 800, fontSize: 16, cursor: "pointer" };
const secondaryBtn: React.CSSProperties = { background: "rgba(255,255,255,.08)", color: "#f0fff6", border: "1px solid rgba(159,231,189,.28)", borderRadius: 12, padding: "12px 18px", fontWeight: 700, fontSize: 14.5, cursor: "pointer" };
const linkBtn: React.CSSProperties = { background: "none", border: "none", color: "#93c5fd", padding: 0, fontSize: 13, cursor: "pointer", textDecoration: "underline" };
const note: React.CSSProperties = { marginTop: 12, padding: "10px 14px", borderRadius: 10, fontSize: 15, lineHeight: 1.5, border: "1px solid", color: "#f0fff6" };
