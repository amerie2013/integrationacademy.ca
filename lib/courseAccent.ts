// Per-course accent theme, keyed by course code. Most courses use the site
// green/teal; a course can opt into its own colour here (ALG1 → Florida orange 🍊).
// Used across the course card, course page, lesson page, and slides so a course
// carries one consistent colour. The lecture-box gradient/headings are themed in
// globals.css via the `accent-<name>` class returned by accentClass().

export type Accent = {
  primary: string;   // main link/button colour
  dark: string;      // darker text (code label, headings)
  soft: string;      // tinted panel background
  softBorder: string;
  badge: string;     // pill text / solid button
  badgeBg: string;   // pill background
};

export const ACCENTS = {
  default: { primary: "#1b7a44", dark: "#0d5c30", soft: "#e7f6ec", softBorder: "#bfe3cd", badge: "#0d9488", badgeBg: "#ecfdf5" },
  orange: { primary: "#ea580c", dark: "#9a3412", soft: "#fff7ed", softBorder: "#fed7aa", badge: "#ea580c", badgeBg: "#fff7ed" },
} as const satisfies Record<string, Accent>;

export const CODE_ACCENT: Record<string, keyof typeof ACCENTS> = { ALG1: "orange" };

export function accentFor(code?: string | null): Accent {
  return ACCENTS[CODE_ACCENT[code ?? ""] ?? "default"];
}
/** Class to put on a lecture-content ancestor so globals.css themes the
 *  lecture-box banner and headings (e.g. "accent-orange"). */
export function accentClass(code?: string | null): string {
  return "accent-" + (CODE_ACCENT[code ?? ""] ?? "default");
}
