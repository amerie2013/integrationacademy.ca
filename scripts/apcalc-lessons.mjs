// AP Calculus AB exam prep — authored lessons, keyed by lesson code. Merged
// into `authored`, which seed-apcalc.mjs uses to override planned placeholders.
import { u0 } from "./apcalc-lessons-u0.mjs";
import { u1a } from "./apcalc-lessons-u1a.mjs";
import { u1b } from "./apcalc-lessons-u1b.mjs";
import { u2a } from "./apcalc-lessons-u2a.mjs";
import { u2b } from "./apcalc-lessons-u2b.mjs";
import { u3 } from "./apcalc-lessons-u3.mjs";
import { u4a } from "./apcalc-lessons-u4a.mjs";
import { u4b } from "./apcalc-lessons-u4b.mjs";
import { u5a } from "./apcalc-lessons-u5a.mjs";
import { u5b } from "./apcalc-lessons-u5b.mjs";
import { u5c } from "./apcalc-lessons-u5c.mjs";
import { u6a } from "./apcalc-lessons-u6a.mjs";
import { u6b } from "./apcalc-lessons-u6b.mjs";
import { u6c } from "./apcalc-lessons-u6c.mjs";
import { u7 } from "./apcalc-lessons-u7.mjs";
import { u8a } from "./apcalc-lessons-u8a.mjs";
import { u8b } from "./apcalc-lessons-u8b.mjs";
import { u9a } from "./apcalc-lessons-u9a.mjs";
import { u9b } from "./apcalc-lessons-u9b.mjs";

export const authored = {};
Object.assign(authored, u0); // Unit 0 — Readiness
Object.assign(authored, u1a, u1b); // Unit 1 — Limits and continuity
Object.assign(authored, u2a, u2b); // Unit 2 — The derivative
Object.assign(authored, u3); // Unit 3 — Composite, implicit and inverse functions
Object.assign(authored, u4a, u4b); // Unit 4 — Derivatives in context
Object.assign(authored, u5a, u5b, u5c); // Unit 5 — Analysing functions
Object.assign(authored, u6a, u6b, u6c); // Unit 6 — Integration
Object.assign(authored, u7); // Unit 7 — Differential equations
Object.assign(authored, u8a, u8b); // Unit 8 — Applications of integration
Object.assign(authored, u9a, u9b); // Unit 9 — Exam mastery
