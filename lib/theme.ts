// Shared design tokens for the adult (high-school / university) experience.
// Deliberately restrained: a serious indigo/slate palette, clean sans-serif,
// no cartoon fonts or decorative emoji in the UI chrome.

export const theme = {
  font: {
    sans: "'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif",
    serif: "'Fraunces', Georgia, 'Times New Roman', serif",
    mono: "'JetBrains Mono', ui-monospace, 'Cascadia Code', monospace",
  },
  color: {
    bg: "#0b1220",
    bgSoft: "#0f1830",
    surface: "#ffffff",
    surfaceMuted: "#f6f8fc",
    border: "#e2e8f0",
    borderStrong: "#cbd5e1",
    text: "#0f172a",
    textMuted: "#475569",
    textFaint: "#94a3b8",
    primary: "#1b7a44", // indigo-700
    primaryHover: "#0d5c30",
    primarySoft: "#e7f6ec",
    accent: "#0d9488", // teal-600
    danger: "#dc2626",
    success: "#059669",
  },
  radius: {
    sm: 8,
    md: 12,
    lg: 18,
    xl: 24,
  },
  shadow: {
    card: "0 1px 3px rgba(15,23,42,0.08), 0 8px 24px rgba(15,23,42,0.06)",
    lift: "0 12px 40px rgba(15,23,42,0.12)",
  },
} as const;

export const LEVELS = [
  { value: "9", label: "Grade 9" },
  { value: "10", label: "Grade 10" },
  { value: "11", label: "Grade 11" },
  { value: "12", label: "Grade 12" },
  { value: "college", label: "College" },
  { value: "university", label: "University" },
] as const;

export function levelLabel(value: string | null | undefined): string {
  if (!value) return "—";
  return LEVELS.find((l) => l.value === value)?.label ?? value;
}
