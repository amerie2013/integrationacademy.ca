// Lesson content is an ordered array of blocks stored in lessons.blocks (jsonb).
// The editor produces these; BlockRenderer displays them.

export type BlockType =
  | "html"
  | "heading"
  | "text"
  | "math"
  | "image"
  | "graph"
  | "multigraph"
  | "animation"
  | "video"
  | "callout"
  | "pointset";

export type Block =
  | { id: string; type: "html"; html: string }
  | { id: string; type: "heading"; text: string; level: 2 | 3 }
  | { id: string; type: "text"; markdown: string }
  | { id: string; type: "math"; latex: string }
  | { id: string; type: "image"; url: string; caption?: string; width?: number }
  | {
      id: string;
      type: "graph";
      expr: string; // e.g. "a*sin(x)"
      xMin: number;
      xMax: number;
      yMin: number;
      yMax: number;
      param: string; // e.g. "a" ("" for none)
      paramMin: number;
      paramMax: number;
      paramInit: number;
      caption?: string;
    }
  | {
      id: string;
      type: "multigraph";
      curves: { expr: string; label?: string; color?: string }[];
      param: string;
      paramMin: number;
      paramMax: number;
      paramInit: number;
      xMin: number;
      xMax: number;
      yMin: number;
      yMax: number;
      markIntersection: boolean;
      caption?: string;
    }
  | {
      id: string;
      type: "animation";
      expr: string; // function of x and the animated param
      param: string; // animated variable, e.g. "a"
      from: number;
      to: number;
      durationMs: number;
      xMin: number;
      xMax: number;
      yMin: number;
      yMax: number;
      caption?: string;
    }
  | { id: string; type: "video"; url: string; caption?: string }
  | {
      id: string;
      type: "callout";
      variant: "note" | "tip" | "warning" | "example";
      text: string;
    }
  | {
      id: string;
      type: "pointset";
      points: { x: number; y: number }[];
      xLabel: string;
      yLabel: string;
      showTable: boolean;
      showPlot: boolean;
      bestFit: boolean; // overlay a least-squares line of best fit
      xMin: number;
      xMax: number;
      yMin: number;
      yMax: number;
      caption?: string;
    };

export const BLOCK_LABELS: Record<BlockType, string> = {
  html: "HTML lecture (boxes, view-answer)",
  heading: "Heading",
  text: "Text + math",
  math: "Display equation",
  image: "Figure / image",
  graph: "Interactive graph",
  multigraph: "System / multi-line graph",
  animation: "Animated graph",
  video: "Video embed",
  callout: "Callout box",
  pointset: "Data table + points plot",
};

let counter = 0;
const uid = () => `b${Date.now().toString(36)}${(counter++).toString(36)}`;

export function newBlock(type: BlockType): Block {
  switch (type) {
    case "html":
      return {
        id: uid(),
        type,
        html: `<div class="lecture-box">
  <h1>📚 Topic Title</h1>
  <p><strong>Key concept.</strong> Brief definition with inline math like \\( x^2 + 1 \\).</p>

  <h2>📌 Subsection</h2>
  <p>Explanation here.</p>

  <h2>🔵 Examples</h2>
  <div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Example 1: Type</h3>
    <p>Problem statement, e.g. evaluate \\( 2^3 \\).</p>
    <div class="solution">
      <div class="step"><strong>Step 1:</strong> description</div>
      <em>Conclusion: result</em>
    </div>
  </div>

  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Question 1</h3>
    <p>Problem here.</p>
    <details><summary>View answer</summary>
      <div class="solution"><div class="step">Explanation. <em>Answer.</em></div></div>
    </details>
  </div>

  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;">
    <h3>Q1: Question?</h3>
    <p><em>Answer.</em></p>
  </div>
</div>`,
      };
    case "heading":
      return { id: uid(), type, text: "New section", level: 2 };
    case "text":
      return { id: uid(), type, markdown: "Write here. Use $x^2$ for inline math and $$\\int_0^1 x\\,dx$$ for display." };
    case "math":
      return { id: uid(), type, latex: "f(x) = ax^2 + bx + c" };
    case "image":
      return { id: uid(), type, url: "", caption: "" };
    case "graph":
      return {
        id: uid(),
        type,
        expr: "a*sin(x)",
        xMin: -10,
        xMax: 10,
        yMin: -5,
        yMax: 5,
        param: "a",
        paramMin: -3,
        paramMax: 3,
        paramInit: 1,
        caption: "",
      };
    case "multigraph":
      return {
        id: uid(),
        type,
        curves: [
          { expr: "2*x + 1", label: "y = 2x + 1" },
          { expr: "-x + 4", label: "y = -x + 4" },
        ],
        param: "",
        paramMin: -5,
        paramMax: 5,
        paramInit: 1,
        xMin: -2,
        xMax: 6,
        yMin: -2,
        yMax: 8,
        markIntersection: true,
        caption: "",
      };
    case "animation":
      return {
        id: uid(),
        type,
        expr: "sin(x - a)",
        param: "a",
        from: 0,
        to: 6.283,
        durationMs: 4000,
        xMin: -10,
        xMax: 10,
        yMin: -2,
        yMax: 2,
        caption: "",
      };
    case "video":
      return { id: uid(), type, url: "", caption: "" };
    case "callout":
      return { id: uid(), type, variant: "note", text: "Key idea…" };
    case "pointset":
      return {
        id: uid(),
        type,
        points: [
          { x: 1, y: 2 },
          { x: 2, y: 3.5 },
          { x: 3, y: 5 },
          { x: 4, y: 6.5 },
          { x: 5, y: 8 },
        ],
        xLabel: "x",
        yLabel: "y",
        showTable: true,
        showPlot: true,
        bestFit: false,
        xMin: 0,
        xMax: 6,
        yMin: 0,
        yMax: 10,
        caption: "",
      };
  }
}
