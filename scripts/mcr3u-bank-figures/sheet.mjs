// Renders every new figure to contact sheets for a visual check: node sheet.mjs <outDir>
import sharp from "sharp";
import { FIG } from "../mcr3u-bank-figures/figs.mjs";
const out = process.argv[2];
const keys = Object.keys(FIG), CW = 300, CH = 270, COLS = 5, ROWS = 4, PAGE = COLS * ROWS;
for (let p = 0; p * PAGE < keys.length; p++) {
  const comps = [];
  for (const [i, k] of keys.slice(p * PAGE, (p + 1) * PAGE).entries()) {
    const png = await sharp(Buffer.from(FIG[k])).resize(CW - 10, CH - 30, { fit: "inside", background: "#fff" }).png().toBuffer();
    const lab = await sharp(Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${CW}" height="22"><rect width="${CW}" height="22" fill="#ddd"/><text x="6" y="16" font-size="14" font-family="Arial">${k}</text></svg>`)).png().toBuffer();
    const x = (i % COLS) * CW, y = Math.floor(i / COLS) * CH;
    comps.push({ input: lab, left: x, top: y }, { input: png, left: x + 5, top: y + 25 });
  }
  await sharp({ create: { width: COLS * CW, height: ROWS * CH, channels: 3, background: "#fff" } }).composite(comps).png().toFile(`${out}/sheet${p + 1}.png`);
}
console.log(keys.length, "figures");
