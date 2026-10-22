// IB AA SL chapter 11 — same self-study lesson format as the Ontario courses (5 examples · 5 checked practice ·
// hard level · Q&A · explorers). intro() labels the syllabus line for the IB course instead of the Ontario one.
import { intro as baseIntro } from "../mcr3u-ch1/lib.mjs";
export * from "../mcr3u-ch1/lib.mjs";
/** every root of an equation, any order: roots(-3, 5); roots() = no real roots */
export const roots = (...value) => ({ kind: "roots", value });
export const intro = (o) => {
  const b = baseIntro({ ...o, course: "IBAASL" });
  return { ...b, html: b.html.replace("<strong>Ontario IBAASL:</strong>", "<strong>Syllabus (AA SL):</strong>") };
};
