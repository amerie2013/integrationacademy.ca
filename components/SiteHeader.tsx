"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { supabase } from "../lib/supabase";
import { Logo } from "./Logo";
import { LOCALE_COOKIE, type Locale } from "../i18n/locales";

function navItems(t: ReturnType<typeof useTranslations<"nav">>) {
  return [
    { href: "/courses", label: t("courses") },
    { href: "/practice", label: t("practice") },
    { href: "/eqao", label: t("eqao") },
    { href: "/articles", label: t("articles") },
    { href: "/games", label: t("games") },
    { href: "/tools/graph", label: t("calculator") },
    { href: "/tools/stats", label: t("statistics") },
    { href: "/tools/whiteboard", label: t("whiteboard") },
    { href: "/pricing", label: t("pricing") },
    { href: "/help", label: t("help") },
  ];
}

export function SiteHeader() {
  const router = useRouter();
  const locale = useLocale() as Locale;
  const tNav = useTranslations("nav");
  const tHeader = useTranslations("header");
  const NAV = navItems(tNav);
  const [email, setEmail] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  function switchLocale(next: Locale) {
    document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=${60 * 60 * 24 * 365}`;
    setOpen(false);
    router.refresh();
  }

  useEffect(() => {
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (!session) return;
      setEmail(session.user.email ?? null);
      const { data } = await supabase.from("profiles").select("role").eq("id", session.user.id).single();
      setRole(data?.role ?? null);
    });
  }, []);

  async function signOut() {
    await supabase.auth.signOut();
    setEmail(null);
    setOpen(false);
    router.push("/");
  }

  const dashHref = role === "admin" ? "/teacher" : role === "teacher" ? "/classes" : "/dashboard";

  return (
    <header className="ia-hdr">
      <style>{HDR_CSS}</style>
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }} onClick={() => setOpen(false)}>
        <Logo size={34} withText />
      </Link>

      {/* desktop nav */}
      <nav className="ia-nav-desktop">
        {NAV.map((n) => (
          <Link key={n.href} href={n.href} className="ia-nav-link">{n.label}</Link>
        ))}
        {email ? (
          <>
            <Link href={dashHref} className="ia-nav-link">{tHeader("dashboard")}</Link>
            <Link href="/profile" className="ia-nav-link">{tHeader("profile")}</Link>
            <button onClick={signOut} className="ia-signout">{tHeader("signOut")}</button>
          </>
        ) : (
          <Link href="/login" className="ia-signin">{tHeader("signIn")}</Link>
        )}
        <LangSwitch locale={locale} onSwitch={switchLocale} />
      </nav>

      {/* mobile hamburger */}
      <button className="ia-burger" aria-label={tHeader("menu")} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
        {open ? "✕" : "☰"}
      </button>

      {/* mobile dropdown */}
      {open && (
        <div className="ia-nav-mobile">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="ia-mlink" onClick={() => setOpen(false)}>{n.label}</Link>
          ))}
          {email ? (
            <>
              <Link href={dashHref} className="ia-mlink" onClick={() => setOpen(false)}>{tHeader("dashboard")}</Link>
              <Link href="/profile" className="ia-mlink" onClick={() => setOpen(false)}>{tHeader("profile")}</Link>
              <button onClick={signOut} className="ia-mlink ia-mlink-btn">{tHeader("signOut")}</button>
            </>
          ) : (
            <Link href="/login" className="ia-mlink ia-mlink-primary" onClick={() => setOpen(false)}>{tHeader("signIn")}</Link>
          )}
          <div className="ia-mlink-lang">
            <LangSwitch locale={locale} onSwitch={switchLocale} />
          </div>
        </div>
      )}
    </header>
  );
}

function LangSwitch({ locale, onSwitch }: { locale: Locale; onSwitch: (l: Locale) => void }) {
  return (
    <div className="ia-lang" role="group" aria-label="Language">
      <button
        className={`ia-lang-btn${locale === "en" ? " ia-lang-active" : ""}`}
        onClick={() => onSwitch("en")}
        aria-pressed={locale === "en"}
      >
        EN
      </button>
      <button
        className={`ia-lang-btn${locale === "fr" ? " ia-lang-active" : ""}`}
        onClick={() => onSwitch("fr")}
        aria-pressed={locale === "fr"}
      >
        FR
      </button>
    </div>
  );
}

const HDR_CSS = `
.ia-hdr{position:sticky;top:0;z-index:50;background:rgba(255,255,255,0.9);backdrop-filter:blur(10px);border-bottom:1px solid var(--border);padding:14px 28px;display:flex;align-items:center;justify-content:space-between;}
.ia-nav-desktop{display:flex;align-items:center;gap:20px;font-size:14px;font-weight:600;}
.ia-nav-link{color:#475569;text-decoration:none;}
.ia-nav-link:hover{color:var(--primary);}
.ia-signout{background:none;border:1px solid var(--border);border-radius:8px;padding:8px 14px;font-weight:600;font-size:14px;cursor:pointer;color:#475569;font-family:inherit;}
.ia-signin{background:var(--primary);color:#fff;padding:9px 18px;border-radius:9px;text-decoration:none;font-weight:700;}
.ia-burger{display:none;background:none;border:1px solid var(--border);border-radius:8px;width:42px;height:38px;font-size:18px;line-height:1;cursor:pointer;color:#334155;}
.ia-nav-mobile{position:absolute;top:100%;left:0;right:0;background:#fff;border-bottom:1px solid var(--border);box-shadow:0 12px 30px rgba(15,23,42,.1);display:flex;flex-direction:column;padding:8px;animation:iahdrdrop .18s ease;}
.ia-mlink{display:block;padding:13px 16px;color:#334155;text-decoration:none;font-weight:600;font-size:16px;border-radius:10px;font-family:inherit;text-align:left;background:none;border:none;cursor:pointer;width:100%;}
.ia-mlink:hover{background:#f1f5f9;}
.ia-mlink-primary{color:var(--primary);font-weight:800;}
.ia-mlink-btn{color:#475569;}
.ia-lang{display:flex;align-items:center;border:1px solid var(--border);border-radius:8px;overflow:hidden;}
.ia-lang-btn{background:none;border:none;padding:6px 10px;font-size:12px;font-weight:700;color:#94a3b8;cursor:pointer;font-family:inherit;}
.ia-lang-btn:hover{color:#475569;}
.ia-lang-active{background:var(--primary);color:#fff;}
.ia-lang-active:hover{color:#fff;}
.ia-mlink-lang{padding:10px 16px;}
@keyframes iahdrdrop{from{opacity:0;transform:translateY(-6px);}to{opacity:1;transform:none;}}
@media (max-width:880px){
  .ia-nav-desktop{display:none;}
  .ia-burger{display:block;}
}
`;
