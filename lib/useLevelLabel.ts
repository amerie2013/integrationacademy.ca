"use client";

import { useTranslations } from "next-intl";

export function useLevelLabel() {
  const t = useTranslations("levels");
  return (value: string | null | undefined) => {
    if (!value) return "—";
    return t.has(value) ? t(value) : value;
  };
}
