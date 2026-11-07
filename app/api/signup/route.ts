import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { rateLimit, clientKey } from "../../../lib/rateLimit";

// Email/password sign-up WITHOUT a verification email (owner's decision,
// 2026-11-07). Verification mail from our own SMTP server kept getting dropped by
// iCloud / Gmail, leaving new students stuck on "Check your inbox". This route
// creates the account already confirmed (service role), so the client can sign in
// right away. The on_auth_user_created trigger builds the profile from metadata.
//
// If the email exists but was never confirmed (a student stuck from before), the
// account is confirmed and given the password just entered. A confirmed account
// is never touched — that returns "already registered".
const makeAdmin = () => createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, { auth: { persistSession: false } });
let _admin: ReturnType<typeof makeAdmin> | null = null;
const getAdmin = () => (_admin ??= makeAdmin());

const LEVELS = new Set(["9", "10", "11", "12", "college", "university"]);
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function findUserByEmail(admin: ReturnType<typeof makeAdmin>, email: string) {
  for (let page = 1; page <= 50; page++) {
    const { data, error } = await admin.auth.admin.listUsers({ page, perPage: 200 });
    if (error) return null;
    const hit = data.users.find((u) => (u.email ?? "").toLowerCase() === email);
    if (hit) return hit;
    if (data.users.length < 200) return null;
  }
  return null;
}

export async function POST(req: NextRequest) {
  const rl = rateLimit(`signup:${clientKey(req)}`, 8, 10 * 60 * 1000);
  if (!rl.ok) return NextResponse.json({ error: "Too many sign-up attempts. Please wait a few minutes and try again." }, { status: 429 });

  const body = (await req.json().catch(() => ({}))) as {
    email?: string; password?: string; full_name?: string; role?: string; level?: string; marketing_opt_in?: boolean;
  };
  const email = (body.email ?? "").trim().toLowerCase();
  const password = body.password ?? "";
  const full_name = (body.full_name ?? "").trim().slice(0, 120);
  const role = body.role === "teacher" ? "teacher" : "student";
  const level = role === "student" ? body.level ?? "" : null;

  if (!EMAIL_RE.test(email)) return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  if (password.length < 6) return NextResponse.json({ error: "Password should be at least 6 characters." }, { status: 400 });
  if (!full_name) return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  if (role === "student" && !LEVELS.has(level ?? "")) return NextResponse.json({ error: "Please choose your grade." }, { status: 400 });

  const admin = getAdmin();
  const user_metadata = { full_name, role, level, marketing_opt_in: !!body.marketing_opt_in };

  const { error } = await admin.auth.admin.createUser({ email, password, email_confirm: true, user_metadata });
  if (!error) return NextResponse.json({ ok: true });

  // Email already exists → rescue it only if it was never confirmed.
  const existing = await findUserByEmail(admin, email);
  if (existing && !existing.email_confirmed_at) {
    const { error: upErr } = await admin.auth.admin.updateUserById(existing.id, {
      password,
      email_confirm: true,
      user_metadata: { ...(existing.user_metadata ?? {}), ...user_metadata },
    });
    if (upErr) return NextResponse.json({ error: upErr.message }, { status: 500 });
    return NextResponse.json({ ok: true });
  }
  if (existing) {
    return NextResponse.json({ error: "An account with this email already exists. Please sign in, or use \"Forgot password\"." }, { status: 409 });
  }
  return NextResponse.json({ error: error.message }, { status: 400 });
}
