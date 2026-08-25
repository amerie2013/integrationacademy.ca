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
  | "vector"
  | "video"
  | "callout"
  | "pointset"
  | "equationgame"
  | "factorsteps";

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
      param2?: string; // optional second slider (e.g. "k" for vertex form)
      param2Min?: number;
      param2Max?: number;
      param2Init?: number;
    }
  | {
      id: string;
      type: "multigraph";
      curves: { expr: string; label?: string; color?: string }[];
      param: string;
      paramMin: number;
      paramMax: number;
      paramInit: number;
      // Optional: independent sliders (e.g. m1, b1, m2, b2), one each, in
      // addition to (or instead of) the single shared `param` above. Curve
      // expressions can reference any of these names directly.
      params?: { name: string; min: number; max: number; init: number }[];
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
  | {
      id: string;
      type: "vector";
      dim: "2d" | "3d";
      vectors: { x: number; y: number; z?: number; label?: string; color?: string; slider?: boolean }[];
      show?: { sum?: boolean; parallelogram?: boolean; dot?: boolean; angle?: boolean; cross?: boolean };
      range?: number; // half-extent of the axes (default 6)
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
    }
  | {
      id: string;
      type: "equationgame";
      solutionX: number;
      solutionLabel: string; // e.g. "x = 5"
      states: { eq: string; L: { m: number; b: number }; R: { m: number; b: number } }[];
      steps: { prompt: string; opts: { t: string; log?: string; ok: boolean; why?: string }[] }[];
      check: string; // substitution check, e.g. "4(5) + 3 − 5 = 18"
      xMin: number;
      xMax: number;
      yMin: number;
      yMax: number;
      caption?: string;
    }
  | {
      id: string;
      type: "factorsteps";
      title: string;
      prompt: string;
      frames: { latex: string; caption: string; kind?: "start" | "highlight" | "pull" | "group" | "done" }[];
      check?: string;
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
  vector: "Interactive vectors (2D/3D)",
  video: "Video embed",
  callout: "Callout box",
  pointset: "Data table + points plot",
  equationgame: "Equation solver game (+ graph check)",
  factorsteps: "Animated factoring steps (GCF / grouping)",
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
    case "vector":
      return {
        id: uid(),
        type,
        dim: "2d",
        vectors: [
          { x: 3, y: 2, label: "u", color: "#1d4ed8", slider: true },
          { x: -1, y: 3, label: "v", color: "#dc2626", slider: true },
        ],
        show: { sum: true, parallelogram: true, dot: true, angle: true },
        range: 6,
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
    case "equationgame":
      return {
        id: uid(),
        type,
        solutionX: 5,
        solutionLabel: "x = 5",
        states: [
          { eq: "4x + 3 − x = 18", L: { m: 3, b: 3 }, R: { m: 0, b: 18 } },
          { eq: "3x + 3 = 18", L: { m: 3, b: 3 }, R: { m: 0, b: 18 } },
          { eq: "3x = 15", L: { m: 3, b: 0 }, R: { m: 0, b: 15 } },
          { eq: "x = 5", L: { m: 1, b: 0 }, R: { m: 0, b: 5 } },
        ],
        steps: [
          { prompt: "What's the best first move?", opts: [
            { t: "Combine like terms", log: "combine like terms", ok: true },
            { t: "Subtract 3 from both sides", ok: false, why: "Tidy up the like terms (4x − x) first." },
            { t: "Divide both sides by 4", ok: false, why: "There isn't a single 4x term yet — combine 4x − x first." },
          ] },
          { prompt: "Now isolate the x-term:", opts: [
            { t: "Subtract 3 from both sides", log: "subtract 3 from both sides", ok: true },
            { t: "Divide both sides by 3", ok: false, why: "Clear the + 3 first for clean numbers." },
            { t: "Add 3 to both sides", ok: false, why: "Wrong direction — that gives 3x + 6 = 21." },
          ] },
          { prompt: "Last step — undo the ×3:", opts: [
            { t: "Divide both sides by 3", log: "divide both sides by 3", ok: true },
            { t: "Subtract 3 from both sides", ok: false, why: "The 3 is multiplying x, so undo it by dividing." },
            { t: "Multiply both sides by 3", ok: false, why: "That makes it bigger: 9x = 45." },
          ] },
        ],
        check: "4(5) + 3 − 5 = 18",
        xMin: -1,
        xMax: 8,
        yMin: -3,
        yMax: 21,
        caption: "",
      };
    case "factorsteps":
      return {
        id: uid(),
        type,
        title: "Example: GCF",
        prompt: "Factor 6x² + 9x.",
        frames: [
          { latex: "6x^2 + 9x", caption: "Start with the expression.", kind: "start" },
          { latex: "3x\\,(2x + 3)", caption: "Pull out the GCF.", kind: "done" },
        ],
        check: "3x\\cdot 2x + 3x\\cdot 3 = 6x^2 + 9x",
      };
  }
}
