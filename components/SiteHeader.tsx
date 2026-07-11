"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "../lib/supabase";
import { Logo } from "./Logo";

const NAV = [
  { href: "/courses", label: "Courses" },
  { href: "/eqao", label: "EQAO" },
  { href: "/articles", label: "Articles" },
  { href: "/games", label: "Games" },
  { href: "/tools/graph", label: "Calculator" },
  { href: "/tools/whiteboard", label: "Whiteboard" },
  { href: "/pricing", label: "Pricing" },
  { href: "/help", label: "Help" },
];

export function SiteHeader() {
  const router = useRouter();
  const [email, setEmail] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

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
            <Link href={dashHref} className="ia-nav-link">Dashboard</Link>
            <Link href="/profile" className="ia-nav-link">Profile</Link>
            <button onClick={signOut} className="ia-signout">Sign out</button>
          </>
        ) : (
          <Link href="/login" className="ia-signin">Sign in</Link>
        )}
      </nav>

      {/* mobile hamburger */}
      <button className="ia-burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
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
              <Link href={dashHref} className="ia-mlink" onClick={() => setOpen(false)}>Dashboard</Link>
              <Link href="/profile" className="ia-mlink" onClick={() => setOpen(false)}>Profile</Link>
              <button onClick={signOut} className="ia-mlink ia-mlink-btn">Sign out</button>
            </>
          ) : (
            <Link href="/login" className="ia-mlink ia-mlink-primary" onClick={() => setOpen(false)}>Sign in</Link>
          )}
        </div>
      )}
    </header>
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
@keyframes iahdrdrop{from{opacity:0;transform:translateY(-6px);}to{opacity:1;transform:none;}}
@media (max-width:880px){
  .ia-nav-desktop{display:none;}
  .ia-burger{display:block;}
}
`;
