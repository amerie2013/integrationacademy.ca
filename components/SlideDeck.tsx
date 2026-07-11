"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import katex from "katex";
import type { Block } from "../lib/blocks";
import { BlockRenderer } from "./BlockRenderer";

/**
 * Turns a lesson's existing blocks into a fullscreen slideshow — no per-lesson
 * authoring needed. The authored HTML lecture is split into slides (title,
 * section intros, one slide per example / practice / Q&A), and interactive
 * graph blocks become their own slides rendered by the real components.
 * Reuses the .lecture-box styles + KaTeX so math and boxes look identical to
 * the reading view.
 */

type Slide =
  | { kind: "title"; html: string; eyebrow?: string; speech?: string }
  | { kind: "html"; html: string; eyebrow?: string; speech?: string }
  | { kind: "block"; block: Block; eyebrow?: string; speech?: string };

function tex(src: string, display: boolean) {
  // Splitting the HTML via DOMParser re-encodes literal "<" / ">" inside math as
  // &lt; / &gt;; decode them back so KaTeX can parse inequalities etc.
  const s = src
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    .trim();
  try {
    return katex.renderToString(s, { throwOnError: false, displayMode: display });
  } catch {
    return src;
  }
}
function renderMath(html: string): string {
  return html
    .replace(/\\\[([\s\S]+?)\\\]/g, (_m, t) => tex(t, true))
    .replace(/\\\(([\s\S]+?)\\\)/g, (_m, t) => tex(t, false));
}

/** Turn LaTeX-ish source into something a screen reader / TTS can say sensibly. */
function mathToSpeech(s: string): string {
  return s
    // money: "$1,050" -> "1,050 dollars" (do this before stripping "$")
    .replace(/\\?\$\s?(\d[\d,.]*)/g, "$1 dollars")
    .replace(/\\text\{([^}]*)\}/g, " $1 ")
    .replace(/\\d?frac\{([^}]*)\}\{([^}]*)\}/g, " $1 over $2 ")
    .replace(/\\sqrt\{([^}]*)\}/g, " square root of $1 ")
    .replace(/\^\{?2\}?/g, " squared")
    .replace(/\^\{?3\}?/g, " cubed")
    .replace(/\^\{?([^}\s)]+)\}?/g, " to the power $1")
    .replace(/\\times/g, " times ")
    .replace(/\\cdot/g, " times ")
    .replace(/\\div/g, " divided by ")
    .replace(/\\pm/g, " plus or minus ")
    .replace(/\\pi/g, " pi ")
    .replace(/\\leq|\\le\b/g, " less than or equal to ")
    .replace(/\\geq|\\ge\b/g, " greater than or equal to ")
    .replace(/\\neq/g, " not equal to ")
    .replace(/\\approx/g, " approximately ")
    .replace(/\\Rightarrow|\\rightarrow|\\to/g, " gives ")
    .replace(/\\overline\{([^}]*)\}/g, " $1 repeating ")
    .replace(/\\[(){}[\]]/g, " ") // \( \) \[ \]
    .replace(/[{}]/g, " ")
    .replace(/\\,|\\;|\\!|\\quad|\\qquad/g, " ")
    .replace(/\\[a-zA-Z]+/g, " ") // drop any remaining commands
    .replace(/\s*=\s*/g, " equals ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Extract narratable text from a chunk of authored HTML. */
function toSpeech(html: string): string {
  if (typeof window === "undefined") return "";
  const text = new DOMParser().parseFromString(html, "text/html").body.textContent || "";
  return mathToSpeech(
    text
      .replace(/View answer|Show Answer|🔎/gi, "")
      // strip emoji & decorative symbols
      .replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}\u{2190}-\u{21FF}\u{2705}\u{2714}\u{2B50}\u{2728}]/gu, " ")
      .replace(/\s+/g, " "),
  ).slice(0, 600);
}

function splitHtml(html: string, label: string): Slide[] {
  const slides: Slide[] = [];
  if (typeof window === "undefined") return slides;
  const doc = new DOMParser().parseFromString(html, "text/html");
  const root = doc.querySelector(".lecture-box") || doc.body;
  let section = "";
  let buf = "";
  const flush = () => {
    if (buf.trim()) slides.push({ kind: "html", eyebrow: section, html: buf, speech: toSpeech(buf) });
    buf = "";
  };
  for (const node of Array.from(root.children)) {
    const tag = node.tagName;
    const cls = node.getAttribute("class") || "";
    if (tag === "H1") {
      flush();
      slides.push({ kind: "title", eyebrow: label, html: node.outerHTML, speech: toSpeech(node.textContent || "") });
      continue;
    }
    if (tag === "H2") {
      flush();
      section = (node.textContent || "").trim();
      continue;
    }
    if (/example-box|practice-box|qa-box/.test(cls)) {
      flush();
      const lead = section ? section.replace(/[^\w\s].*/, "").trim() : "";
      slides.push({ kind: "html", eyebrow: section, html: node.outerHTML, speech: toSpeech((lead ? lead + ". " : "") + node.outerHTML) });
      continue;
    }
    buf += node.outerHTML;
  }
  flush();
  return slides;
}

export function SlideDeck({ title, blocks }: { title: string; blocks: Block[] }) {
  const router = useRouter();
  const [i, setI] = useState(0);
  const [narrate, setNarrate] = useState(false); // autoplay OFF by default
  const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [ttsOk, setTtsOk] = useState(true);

  const slides = useMemo<Slide[]>(() => {
    const out: Slide[] = [];
    for (const b of blocks) {
      if (b.type === "html") out.push(...splitHtml(b.html, title));
      else out.push({ kind: "block", block: b, eyebrow: "Interactive graph", speech: "Here is an interactive graph. Try adjusting the slider to explore how the relationship changes." });
    }
    if (out.length === 0) out.push({ kind: "title", html: `<h1>${title}</h1>` });
    return out;
  }, [blocks, title]);

  const n = slides.length;
  const go = useCallback((k: number) => setI((cur) => Math.max(0, Math.min(n - 1, k))), [n]);
  const next = useCallback(() => go(i + 1), [go, i]);
  const prev = useCallback(() => go(i - 1), [go, i]);

  // Detect Web Speech support + pick an English voice (voices load async).
  useEffect(() => {
    const synth = typeof window !== "undefined" ? window.speechSynthesis : undefined;
    if (!synth) { setTtsOk(false); return; }
    const pick = () => {
      const vs = synth.getVoices();
      if (!vs.length) return;
      const en = vs.find((v) => /en[-_]US/i.test(v.lang) && /female|samantha|zira|aria|jenny/i.test(v.name))
        || vs.find((v) => /^en/i.test(v.lang)) || vs[0];
      setVoice(en || null);
    };
    pick();
    synth.addEventListener?.("voiceschanged", pick);
    return () => synth.removeEventListener?.("voiceschanged", pick);
  }, []);

  // Narration: speak the current slide; on natural end, auto-advance.
  useEffect(() => {
    const synth = typeof window !== "undefined" ? window.speechSynthesis : undefined;
    if (!synth) return;
    if (!narrate) { synth.cancel(); return; }
    const text = slides[i]?.speech?.trim();
    if (!text) {
      // nothing to read on this slide — pause briefly then move on
      if (i < n - 1) { const t = setTimeout(() => go(i + 1), 1400); return () => clearTimeout(t); }
      setNarrate(false);
      return;
    }
    // Chunk into sentences: short utterances avoid Chrome's ~15s cutoff bug.
    const chunks = (text.match(/[^.!?]+[.!?]*/g) || [text]).map((c) => c.trim()).filter(Boolean);
    let cancelled = false;
    synth.cancel();
    chunks.forEach((chunk, idx) => {
      const u = new SpeechSynthesisUtterance(chunk);
      if (voice) u.voice = voice;
      u.rate = 1; u.pitch = 1;
      if (idx === chunks.length - 1) {
        u.onend = () => {
          if (cancelled) return;
          if (i < n - 1) go(i + 1);
          else setNarrate(false);
        };
      }
      synth.speak(u);
    });
    return () => { cancelled = true; synth.cancel(); };
  }, [i, narrate, slides, n, go, voice]);

  // Stop any speech when the deck unmounts.
  useEffect(() => () => { window.speechSynthesis?.cancel(); }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") { e.preventDefault(); next(); }
      else if (e.key === "ArrowLeft" || e.key === "PageUp") { e.preventDefault(); prev(); }
      else if (e.key === "Home") go(0);
      else if (e.key === "End") go(n - 1);
      else if (e.key === "Escape") { if (!document.fullscreenElement) router.back(); }
      else if (e.key === "f" || e.key === "F") {
        if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
        else document.exitFullscreen?.();
      }
      else if (e.key === "n" || e.key === "N") { e.preventDefault(); setNarrate((v) => !v); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, go, n, router]);

  const cur = slides[i];

  return (
    <div className="iadeck">
      <style>{DECK_CSS}</style>
      <div className="iadeck-bar" style={{ width: n > 1 ? `${(i / (n - 1)) * 100}%` : "100%" }} />

      <div className="iadeck-stage">
        <div className="iadeck-slide" key={i}>
          {cur.eyebrow && cur.kind !== "title" && <div className="iadeck-eyebrow">{cur.eyebrow}</div>}
          {cur.kind === "block" ? (
            <div className="iadeck-blockcard">
              <BlockRenderer blocks={[cur.block]} />
            </div>
          ) : (
            <div
              className={"lecture-box iadeck-doc" + (cur.kind === "title" ? " iadeck-title" : "")}
              dangerouslySetInnerHTML={{ __html: renderMath(cur.html) }}
            />
          )}
        </div>
      </div>

      {/* click zones */}
      <div className="iadeck-zone iadeck-prev" onClick={prev} title="Previous" />
      <div className="iadeck-zone iadeck-next" onClick={next} title="Next" />

      {/* captions while narrating */}
      {narrate && cur.speech && (
        <div className="iadeck-caption">{cur.speech}</div>
      )}

      {/* chrome */}
      <button className="iadeck-exit" onClick={() => router.back()}>← Back to lesson</button>
      <div className="iadeck-hud">
        <span className="iadeck-hint">
          <kbd>←</kbd> <kbd>→</kbd> navigate · <kbd>N</kbd> narrate · <kbd>F</kbd> fullscreen · <kbd>Esc</kbd> exit
        </span>
        {ttsOk && (
          <button
            className={"iadeck-narrate" + (narrate ? " on" : "")}
            onClick={() => setNarrate((v) => !v)}
            title={narrate ? "Stop narration (N)" : "Read slides aloud & auto-advance (N)"}
          >
            {narrate ? "⏸ Narrating" : "🔊 Narrate"}
          </button>
        )}
        <button className="iadeck-nav" onClick={prev} disabled={i === 0}>‹</button>
        <span className="iadeck-count">{i + 1} / {n}</span>
        <button className="iadeck-nav" onClick={next} disabled={i === n - 1}>›</button>
      </div>
    </div>
  );
}

const DECK_CSS = `
.iadeck{position:fixed;inset:0;background:linear-gradient(135deg,#0d3a23 0%,#1e293b 55%,#0f172a 100%);z-index:1000;overflow:hidden;}
.iadeck-bar{position:absolute;top:0;left:0;height:4px;background:linear-gradient(90deg,#34d27f,#1f8a4c);transition:width .25s ease;z-index:5;}
.iadeck-stage{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;padding:5vh 7vw 8vh;}
.iadeck-slide{width:100%;max-width:1100px;max-height:86vh;overflow:auto;animation:iadeckfade .35s ease;}
@keyframes iadeckfade{from{opacity:0;transform:translateY(10px);}to{opacity:1;transform:none;}}
.iadeck-eyebrow{color:#a5b4fc;font-weight:700;letter-spacing:.14em;text-transform:uppercase;font-size:clamp(.9rem,1.6vw,1.25rem);margin-bottom:12px;}
.iadeck-doc{font-size:clamp(1.3rem,2.5vw,2rem);}
.iadeck-doc h1{font-size:clamp(2.2rem,5vw,4rem)!important;}
.iadeck-doc h2{font-size:clamp(1.7rem,3.2vw,2.6rem)!important;}
.iadeck-doc h3{font-size:clamp(1.45rem,2.7vw,2.05rem)!important;}
.iadeck-doc p,.iadeck-doc li{font-size:inherit;line-height:1.55;}
.iadeck-doc .example-box,.iadeck-doc .practice-box,.iadeck-doc .qa-box{box-shadow:none!important;}
.iadeck-title{display:flex;flex-direction:column;justify-content:center;text-align:center;min-height:60vh;border:none;background:transparent;box-shadow:none;}
.iadeck-title h1{margin:0!important;}
.iadeck-blockcard{background:#fff;border-radius:16px;padding:3vh 3vw;box-shadow:0 24px 60px rgba(0,0,0,.4);}
.iadeck-zone{position:absolute;top:0;height:100vh;width:12vw;z-index:3;cursor:pointer;}
.iadeck-prev{left:0;} .iadeck-next{right:0;}
.iadeck-exit{position:absolute;top:16px;left:18px;z-index:6;background:rgba(255,255,255,.12);color:#e2e8f0;border:none;border-radius:9px;padding:8px 14px;font-weight:700;font-size:14px;cursor:pointer;font-family:inherit;}
.iadeck-exit:hover{background:rgba(255,255,255,.22);}
.iadeck-hud{position:absolute;bottom:14px;right:20px;z-index:6;display:flex;align-items:center;gap:12px;color:#cbd5e1;font-size:.85rem;}
.iadeck-hint{opacity:.85;}
.iadeck-hud kbd{background:rgba(255,255,255,.14);border-radius:5px;padding:1px 6px;font-family:inherit;}
.iadeck-count{font-variant-numeric:tabular-nums;min-width:54px;text-align:center;}
.iadeck-nav{background:rgba(255,255,255,.12);color:#fff;border:none;border-radius:8px;width:34px;height:34px;font-size:20px;line-height:1;cursor:pointer;}
.iadeck-nav:disabled{opacity:.35;cursor:default;}
.iadeck-nav:hover:not(:disabled){background:rgba(255,255,255,.24);}
.iadeck-narrate{background:rgba(255,255,255,.12);color:#e2e8f0;border:none;border-radius:8px;padding:7px 12px;font-weight:700;font-size:13px;cursor:pointer;font-family:inherit;white-space:nowrap;}
.iadeck-narrate:hover{background:rgba(255,255,255,.24);}
.iadeck-narrate.on{background:linear-gradient(90deg,#34d27f,#1f8a4c);color:#fff;animation:iadeckpulse 1.8s ease-in-out infinite;}
@keyframes iadeckpulse{0%,100%{box-shadow:0 0 0 0 rgba(129,140,248,.5);}50%{box-shadow:0 0 0 7px rgba(129,140,248,0);}}
.iadeck-caption{position:absolute;bottom:64px;left:50%;transform:translateX(-50%);z-index:6;max-width:min(900px,86vw);background:rgba(2,6,23,.82);color:#f1f5f9;border:1px solid rgba(148,163,184,.3);border-radius:12px;padding:10px 18px;font-size:clamp(.95rem,1.7vw,1.2rem);line-height:1.45;text-align:center;backdrop-filter:blur(4px);}
@media (max-width:640px){.iadeck-hint{display:none;}.iadeck-caption{bottom:58px;}}
`;
