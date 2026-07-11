"use client";

// The on-screen formula sheet, mirroring the reference sheet available in the
// EQAO Grade 9 assessment. Reused by Phase 1 practice and Phase 2 simulation.
import { Math as Tex } from "./Math";

const GROUPS: { title: string; items: string[] }[] = [
  {
    title: "Linear relations",
    items: [
      "m = \\dfrac{y_2 - y_1}{x_2 - x_1}",
      "y = mx + b",
    ],
  },
  {
    title: "Perimeter & circumference",
    items: ["P = 2(l + w)", "C = 2\\pi r = \\pi d"],
  },
  {
    title: "Area",
    items: [
      "A_{\\text{triangle}} = \\dfrac{bh}{2}",
      "A_{\\text{parallelogram}} = bh",
      "A_{\\text{trapezoid}} = \\dfrac{(a + b)h}{2}",
      "A_{\\text{circle}} = \\pi r^2",
    ],
  },
  {
    title: "Surface area & volume",
    items: [
      "V_{\\text{prism}} = (\\text{area of base}) \\times h",
      "V_{\\text{cylinder}} = \\pi r^2 h",
      "SA_{\\text{cylinder}} = 2\\pi r^2 + 2\\pi r h",
    ],
  },
  {
    title: "Right triangles",
    items: ["a^2 + b^2 = c^2"],
  },
  {
    title: "Financial literacy",
    items: ["I = Prt", "A = P(1 + rt)"],
  },
];

export function EqaoFormulaSheet() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <h3 style={{ margin: 0, fontSize: 16, fontWeight: 800, color: "#0f172a" }}>Formula sheet</h3>
      {GROUPS.map((g) => (
        <div key={g.title}>
          <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.4, color: "#94a3b8", marginBottom: 6 }}>
            {g.title}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {g.items.map((f, i) => (
              <div key={i} style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 8, padding: "8px 12px" }}>
                <Tex expr={f} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
