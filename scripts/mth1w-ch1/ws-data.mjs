// Worksheet PDF data for the whole rebuilt chapter 1, in the shape scripts/_wsgen.mjs expects.
//   WS_DRY=1 WS_DATA=./mth1w-ch1/ws-data.mjs node scripts/_wsgen.mjs        (compile only)
//   WS_DATA=./mth1w-ch1/ws-data.mjs node scripts/_wsgen.mjs                  (compile + upload + link rows)
import { WORKSHEET_TEX as w1_2 } from "./t1_2.mjs";
import { WORKSHEET_TEX as w1_3 } from "./t1_3.mjs";
import { WORKSHEET_TEX as w1_4 } from "./t1_4.mjs";
import { WORKSHEET_TEX as w1_5 } from "./t1_5.mjs";
import { WORKSHEET_TEX as w1_6 } from "./t1_6.mjs";
import { WORKSHEET_TEX as w1_7 } from "./t1_7.mjs";
import { WORKSHEET_TEX as w1_8 } from "../mth1w-ratios.mjs";
import { TOPICS as OLD } from "../_ch1data.mjs";

// The two topics that only change number keep their existing worksheet content, re-coded.
const recode = (oldCode, newCode) => ({ ...OLD.find((t) => t.code === oldCode), code: newCode });

export const TOPICS = [w1_2, w1_3, w1_4, w1_5, w1_6, w1_7, w1_8, recode("1.6", "1.9"), recode("1.2", "1.10")];
