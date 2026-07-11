// MHF4U authored lessons. Each unit module exports an object keyed by lesson code;
// merged into `authored`, which seed-mhf4u.mjs uses to override scaffolds.
import { u1 } from "./mhf4u-lessons-u1.mjs";
import { u2 } from "./mhf4u-lessons-u2.mjs";
import { u3 } from "./mhf4u-lessons-u3.mjs";
import { u4 } from "./mhf4u-lessons-u4.mjs";
import { u5 } from "./mhf4u-lessons-u5.mjs";
import { u6 } from "./mhf4u-lessons-u6.mjs";
import { u7 } from "./mhf4u-lessons-u7.mjs";

export const authored = {};
Object.assign(authored, u1); // Unit 1 — Polynomial Functions
Object.assign(authored, u2); // Unit 2 — Polynomial Equations & Inequalities
Object.assign(authored, u3); // Unit 3 — Rational Functions
Object.assign(authored, u4); // Unit 4 — Exponential & Logarithmic Functions
Object.assign(authored, u5); // Unit 5 — Trigonometric Functions
Object.assign(authored, u6); // Unit 6 — Trigonometric Identities & Equations
Object.assign(authored, u7); // Unit 7 — Rates of Change & Combining Functions
