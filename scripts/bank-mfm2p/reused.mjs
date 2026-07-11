// MFM2P question bank reused from MPM2D for the 16 overlapping subjects.
// Imports the MPM2D bank generators and remaps each to its MFM2P code.
import u1 from "../bank-mpm2d/u1.mjs";
import u3 from "../bank-mpm2d/u3.mjs";
import u4 from "../bank-mpm2d/u4.mjs";
import u6 from "../bank-mpm2d/u6.mjs";

const byCode = Object.fromEntries([...u1, ...u3, ...u4, ...u6].map((t) => [t.code, t.gen]));

// [MPM2D code, MFM2P code]
const map = [
  ["1.2", "3.1"], ["1.3", "3.2"], ["1.4", "3.3"], ["1.5", "3.4"],
  ["6.1", "5.2"], ["6.2", "5.3"], ["6.3", "5.5"], ["6.6", "5.6"],
  ["3.1", "6.1"], ["3.2", "6.2"], ["3.3", "6.3"], ["3.5", "6.4"],
  ["4.1", "7.1"], ["4.2", "7.2"], ["4.3", "7.3"], ["4.5", "7.4"],
];

export default map.map(([mpm, code]) => {
  const gen = byCode[mpm];
  if (!gen) throw new Error("MPM2D bank generator not found: " + mpm);
  return { code, gen };
});
