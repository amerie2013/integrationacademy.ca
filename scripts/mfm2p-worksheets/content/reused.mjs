// MFM2P worksheets reused from MPM2D for the 16 overlapping subjects.
// Imports the MPM2D worksheet content and remaps each to its MFM2P code/unit.
import u1 from "../../mpm2d-worksheets/content/u1.mjs";
import u3 from "../../mpm2d-worksheets/content/u3.mjs";
import u4 from "../../mpm2d-worksheets/content/u4.mjs";
import u6 from "../../mpm2d-worksheets/content/u6.mjs";

const byCode = Object.fromEntries([...u1, ...u3, ...u4, ...u6].map((w) => [w.code, w]));

// [MPM2D code, MFM2P code, MFM2P unit label]
const map = [
  ["1.2", "3.1", "3: Linear Systems"], ["1.3", "3.2", "3: Linear Systems"], ["1.4", "3.3", "3: Linear Systems"], ["1.5", "3.4", "3: Linear Systems"],
  ["6.1", "5.2", "5: Similar Triangles \\& Trigonometry"], ["6.2", "5.3", "5: Similar Triangles \\& Trigonometry"], ["6.3", "5.5", "5: Similar Triangles \\& Trigonometry"], ["6.6", "5.6", "5: Similar Triangles \\& Trigonometry"],
  ["3.1", "6.1", "6: Quadratic Expressions"], ["3.2", "6.2", "6: Quadratic Expressions"], ["3.3", "6.3", "6: Quadratic Expressions"], ["3.5", "6.4", "6: Quadratic Expressions"],
  ["4.1", "7.1", "7: Quadratic Relations"], ["4.2", "7.2", "7: Quadratic Relations"], ["4.3", "7.3", "7: Quadratic Relations"], ["4.5", "7.4", "7: Quadratic Relations"],
];

export default map.map(([mpm, code, unit]) => {
  const w = byCode[mpm];
  if (!w) throw new Error("MPM2D worksheet content not found: " + mpm);
  return { ...w, code, unit };
});
