// One-off: point the pipeline copied from scripts/ibaasl-ch1 at IB AA SL chapter 2 (Functions).
//   node scripts/ibaasl-ch2/retarget2.cjs
const fs = require("fs");
const D = "E:/projects/integrationacademy-ca/scripts/ibaasl-ch2/";
const all = [
  ["ibaasl-ch1", "ibaasl-ch2"], ["l1_", "l2_"], ['like("code", "1.%")', 'like("code", "2.%")'], ['like("topic", "1.%")', 'like("topic", "2.%")'],
  ["chapter 1", "chapter 2"], ["Chapter 1: Sequences and Series", "Chapter 2: Functions"], ["restructure.mjs", "renumber2.mjs"],
  ["(e.g. l2_1)", "(e.g. l2_1)"], ["em1_*.mjs", "em2_*.mjs"], ["h1_*.mjs", "h2_*.mjs"], ["publish.mjs 1_1 1_2", "publish.mjs 2_1 2_2"],
];
const per = {
  "ws/build.mjs": [
    ['codes = ["1.1", "1.2", "1.3", "1.4", "1.5", "1.6"]', 'codes = ["2.1", "2.2", "2.3", "2.4", "2.5", "2.6"]'],
    ["brand-new worksheets (1.4) have no row yet", "brand-new worksheets (2.2, 2.3, 2.4, 2.6) have no row yet"],
  ],
  "bank/publish.mjs": [
    ['names = ["1_1", "1_2", "1_3", "1_4", "1_5", "1_6"]', 'names = ["2_1", "2_2", "2_3", "2_4", "2_5", "2_6"]'],
    ["(old topics hold 10/10/9; 1.4 is new)", "(old topics hold 10/10/9; 2.2, 2.3, 2.4 and 2.6 are new)"],
  ],
  "asg/publish.mjs": [
    ["the brand-new 1.4 is inserted with its id so it can be previewed first.", "the brand-new 2.2, 2.3, 2.4 and 2.6 are inserted with their ids so they can be previewed first."],
    ['  "1.1": "b2d95c7e-4650-4cde-a2eb-ceac4478131c", "1.2": "3d6e0f17-7c18-4d5f-93db-0f82ef74f2d5", "1.3": "a17a6556-561a-4499-aefb-dd2c64e6d4be",\n  "1.4": "1baa0001-0002-4001-8001-000000000104", "1.5": "9fc906dc-1196-4dd4-8df0-bcfadff2f5b8", "1.6": "789c6603-9ec4-47ba-8c37-ff905d1e7400",',
     '  "2.1": "5fa9c7b8-59c4-406f-8b22-1fd17d5db3c0", "2.2": "1baa0002-0002-4001-8001-000000000202", "2.3": "1baa0002-0002-4001-8001-000000000203",\n  "2.4": "1baa0002-0002-4001-8001-000000000204", "2.5": "0c9dce85-ed6f-41e0-9f54-6e08cebd07b8", "2.6": "1baa0002-0002-4001-8001-000000000206",'],
  ],
  "lib.mjs": [["// IB AA SL chapter 1 —", "// IB AA SL chapter 2 —"]],
  "bank/fig.mjs": [["IB AA SL chapter 1", "IB AA SL chapter 2"]],
  "ws/figT.mjs": [["IB AA SL chapter 1", "IB AA SL chapter 2"]],
};
for (const f of ["check.mjs", "lessons-publish.mjs", "written.mjs", "lib.mjs", "ws/build.mjs", "ws/figT.mjs", "bank/kit.mjs", "bank/fig.mjs", "bank/publish.mjs", "asg/publish.mjs"]) {
  let s = fs.readFileSync(D + f, "utf8");
  for (const [a, b] of per[f] ?? []) { if (!s.includes(a)) throw new Error(`${f}: missing ${a.slice(0, 70)}`); s = s.split(a).join(b); }
  for (const [a, b] of all) s = s.split(a).join(b);
  fs.writeFileSync(D + f, s);
}
console.log("ok");
