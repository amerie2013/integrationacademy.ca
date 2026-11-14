"use client";

// Lesson language for interactive widgets. A French course (code ending in "-FR", e.g. MHF4U-FR)
// wraps its lesson blocks in <LangProvider value="fr">; widgets call useT() and pass both strings:
//   const t = useT();  t("Check", "Vérifier")
// Everything defaults to English, so widgets used by English courses are unchanged.
import { createContext, useContext } from "react";

export type Lang = "en" | "fr";

const LangContext = createContext<Lang>("en");
export const LangProvider = LangContext.Provider;

export const useLang = (): Lang => useContext(LangContext);

/** returns t(en, fr) for the current lesson language */
export function useT() {
  const lang = useContext(LangContext);
  return (en: string, fr: string) => (lang === "fr" ? fr : en);
}

export const langForCourse = (code?: string | null): Lang => ((code ?? "").toUpperCase().endsWith("-FR") ? "fr" : "en");
