// MCR3U chapter 2 worksheet content: re-exports the rebuilt topic worksheets for scripts/mcr3u-worksheets/build.mjs.
//   node scripts/mcr3u-worksheets/build.mjs scripts/mcr3u-ch2/ws-content.mjs
import { W21, LEARN21 } from "./t2_1.mjs";
import { W22, LEARN22 } from "./t2_2.mjs";
import { W23, LEARN23 } from "./t2_3.mjs";
import { W24, LEARN24 } from "./t2_4.mjs";
import { W25, LEARN25 } from "./t2_5.mjs";

export default [
  { ...W21, learn: LEARN21 },
  { ...W22, learn: LEARN22 },
  { ...W23, learn: LEARN23 },
  { ...W24, learn: LEARN24 },
  { ...W25, learn: LEARN25 },
];
