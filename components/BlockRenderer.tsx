"use client";

import type { Block } from "../lib/blocks";
import { Math as Tex } from "./Math";
import { RichText } from "./RichText";
import { HtmlBlock } from "./HtmlBlock";
import { ExpressionGraph } from "./ExpressionGraph";
import { MultiGraph } from "./MultiGraph";
import { AnimatedGraph } from "./AnimatedGraph";
import { PointPlot } from "./PointPlot";

const CALLOUT_STYLES: Record<string, { bg: string; border: string; label: string }> = {
  note: { bg: "#eff6ff", border: "#bfdbfe", label: "Note" },
  tip: { bg: "#ecfdf5", border: "#a7f3d0", label: "Tip" },
  warning: { bg: "#fff7ed", border: "#fed7aa", label: "Watch out" },
  example: { bg: "#faf5ff", border: "#e9d5ff", label: "Example" },
};

function youtubeEmbed(url: string): string | null {
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]+)/);
  return m ? `https://www.youtube.com/embed/${m[1]}` : null;
}

export function BlockRenderer({ blocks }: { blocks: Block[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
      {blocks.map((b) => (
        <div key={b.id}>{renderBlock(b)}</div>
      ))}
    </div>
  );
}

function renderBlock(b: Block) {
  switch (b.type) {
    case "html":
      return <HtmlBlock html={b.html} />;
    case "heading":
      return b.level === 3 ? (
        <h3 style={{ fontFamily: "Fraunces, serif", fontSize: 22, fontWeight: 700, margin: 0 }}>{b.text}</h3>
      ) : (
        <h2 style={{ fontFamily: "Fraunces, serif", fontSize: 28, fontWeight: 700, margin: 0 }}>{b.text}</h2>
      );
    case "text":
      return <RichText text={b.markdown} />;
    case "math":
      return (
        <div style={{ padding: "8px 0", fontSize: 20 }}>
          <Tex expr={b.latex} block />
        </div>
      );
    case "image":
      return b.url ? (
        <figure style={{ margin: 0, textAlign: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={b.url} alt={b.caption || ""} style={{ maxWidth: b.width ? b.width : "100%", borderRadius: 12, border: "1px solid #e2e8f0" }} />
          {b.caption && <figcaption style={{ fontSize: 13, color: "#64748b", marginTop: 8 }}>{b.caption}</figcaption>}
        </figure>
      ) : null;
    case "graph":
      return (
        <ExpressionGraph
          expr={b.expr}
          param={b.param}
          xMin={b.xMin}
          xMax={b.xMax}
          yMin={b.yMin}
          yMax={b.yMax}
          paramMin={b.paramMin}
          paramMax={b.paramMax}
          paramInit={b.paramInit}
          caption={b.caption}
        />
      );
    case "multigraph":
      return (
        <MultiGraph
          curves={b.curves}
          param={b.param}
          paramMin={b.paramMin}
          paramMax={b.paramMax}
          paramInit={b.paramInit}
          xMin={b.xMin}
          xMax={b.xMax}
          yMin={b.yMin}
          yMax={b.yMax}
          markIntersection={b.markIntersection}
          caption={b.caption}
        />
      );
    case "animation":
      return (
        <AnimatedGraph
          expr={b.expr}
          param={b.param}
          from={b.from}
          to={b.to}
          durationMs={b.durationMs}
          xMin={b.xMin}
          xMax={b.xMax}
          yMin={b.yMin}
          yMax={b.yMax}
          caption={b.caption}
        />
      );
    case "video": {
      const embed = youtubeEmbed(b.url);
      return embed ? (
        <div style={{ position: "relative", paddingTop: "56.25%", borderRadius: 12, overflow: "hidden" }}>
          <iframe
            src={embed}
            title={b.caption || "video"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
          />
        </div>
      ) : null;
    }
    case "pointset":
      return (
        <PointPlot
          points={b.points}
          xLabel={b.xLabel}
          yLabel={b.yLabel}
          showTable={b.showTable}
          showPlot={b.showPlot}
          bestFit={b.bestFit}
          xMin={b.xMin}
          xMax={b.xMax}
          yMin={b.yMin}
          yMax={b.yMax}
          caption={b.caption}
        />
      );
    case "callout": {
      const s = CALLOUT_STYLES[b.variant] ?? CALLOUT_STYLES.note;
      return (
        <div style={{ background: s.bg, border: `1px solid ${s.border}`, borderRadius: 12, padding: "16px 18px" }}>
          <div style={{ fontWeight: 800, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.05em", color: "#334155", marginBottom: 6 }}>
            {s.label}
          </div>
          <RichText text={b.text} />
        </div>
      );
    }
  }
}
