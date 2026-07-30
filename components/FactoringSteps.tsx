"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { Math as Tex } from "./Math";
import { theme } from "../lib/theme";

/** One frame of a factoring animation (KaTeX display + short caption). */
export type FactorFrame = {
  latex: string;
  caption: string;
  /** Optional highlight style for the stage */
  kind?: "start" | "highlight" | "pull" | "group" | "done";
};

export type FactoringStepsProps = {
  title: string;
  prompt: string;
  frames: FactorFrame[];
  /** Final check line, e.g. expand-back verification */
  check?: string;
};

const KIND_COLOR: Record<NonNullable<FactorFrame["kind"]>, string> = {
  start: theme.color.text,
  highlight: theme.color.accent,
  pull: theme.color.primary,
  group: "#0369a1",
  done: theme.color.success,
};

export function FactoringSteps({ title, prompt, frames, check }: FactoringStepsProps) {
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(false);
  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const frame = frames[Math.min(i, frames.length - 1)];
  const atEnd = i >= frames.length - 1;

  useEffect(() => {
    if (!playing || atEnd || reduce) {
      if (atEnd) setPlaying(false);
      return;
    }
    const t = window.setTimeout(() => setI((x) => Math.min(x + 1, frames.length - 1)), 1400);
    return () => window.clearTimeout(t);
  }, [playing, i, atEnd, frames.length, reduce]);

  function play() {
    if (atEnd) setI(0);
    setPlaying(true);
  }

  function step() {
    setPlaying(false);
    setI((x) => Math.min(x + 1, frames.length - 1));
  }

  function reset() {
    setPlaying(false);
    setI(0);
  }

  const kind = frame?.kind ?? "start";
  const accent = KIND_COLOR[kind] ?? theme.color.text;

  return (
    <div
      style={{
        background: theme.color.surface,
        border: `1px solid ${theme.color.border}`,
        borderLeft: `5px solid #4a90e2`,
        borderRadius: theme.radius.md,
        padding: "16px 18px 18px",
        fontFamily: theme.font.sans,
      }}
    >
      <div
        style={{
          fontSize: 12,
          fontWeight: 800,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: "#0369a1",
          marginBottom: 4,
        }}
      >
        Animated example
      </div>
      <h3 style={{ fontFamily: theme.font.serif, fontSize: 18, fontWeight: 700, margin: "0 0 6px", color: theme.color.text }}>
        {title}
      </h3>
      <p style={{ margin: "0 0 14px", fontSize: 15, color: theme.color.textMuted }}>{prompt}</p>

      <div
        style={{
          background: theme.color.surfaceMuted,
          borderRadius: theme.radius.sm,
          padding: "22px 16px",
          minHeight: 110,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          border: `1px solid ${theme.color.border}`,
          transition: reduce ? undefined : "box-shadow 0.35s ease",
          boxShadow: kind === "done" ? "0 0 0 2px rgba(5,150,105,0.25)" : undefined,
        }}
        aria-live="polite"
      >
        <div
          key={i}
          style={{
            fontSize: 22,
            color: accent,
            animation: reduce ? undefined : "iaFactorIn 0.45s ease",
          }}
        >
          <Tex expr={frame.latex} block />
        </div>
        <div style={{ fontSize: 14, color: theme.color.textMuted, textAlign: "center", maxWidth: 420, lineHeight: 1.45 }}>
          {frame.caption}
        </div>
      </div>

      {/* Progress dots */}
      <div style={{ display: "flex", gap: 6, justifyContent: "center", margin: "12px 0 14px" }}>
        {frames.map((_, idx) => (
          <button
            key={idx}
            type="button"
            aria-label={`Step ${idx + 1}`}
            onClick={() => {
              setPlaying(false);
              setI(idx);
            }}
            style={{
              width: idx === i ? 18 : 8,
              height: 8,
              borderRadius: 999,
              border: "none",
              padding: 0,
              cursor: "pointer",
              background: idx === i ? theme.color.primary : idx < i ? "#86efac" : theme.color.borderStrong,
              transition: "width 0.2s ease, background 0.2s ease",
            }}
          />
        ))}
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        <button type="button" onClick={play} style={btnPrimary}>
          {playing ? "Playing…" : atEnd ? "Replay" : "Play steps"}
        </button>
        <button type="button" onClick={step} disabled={atEnd} style={btnSecondary(atEnd)}>
          Next step
        </button>
        <button type="button" onClick={reset} style={btnSecondary(false)}>
          Reset
        </button>
        <span style={{ marginLeft: "auto", fontSize: 12.5, color: theme.color.textFaint, alignSelf: "center" }}>
          Step {i + 1} / {frames.length}
        </span>
      </div>

      {atEnd && check && (
        <div
          style={{
            marginTop: 14,
            padding: "10px 12px",
            background: theme.color.primarySoft,
            borderRadius: theme.radius.sm,
            fontSize: 13.5,
            color: theme.color.primaryHover,
            fontWeight: 600,
          }}
        >
          Check: <Tex expr={check} />
        </div>
      )}

      <style>{`
        @keyframes iaFactorIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

const btnPrimary: CSSProperties = {
  background: theme.color.primary,
  color: "#fff",
  border: "none",
  borderRadius: 9,
  padding: "9px 16px",
  fontWeight: 700,
  fontSize: 14,
  cursor: "pointer",
};

function btnSecondary(disabled: boolean): CSSProperties {
  return {
    background: "#fff",
    color: theme.color.text,
    border: `1px solid ${theme.color.borderStrong}`,
    borderRadius: 9,
    padding: "9px 14px",
    fontWeight: 600,
    fontSize: 14,
    cursor: disabled ? "default" : "pointer",
    opacity: disabled ? 0.45 : 1,
  };
}
