import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// One-time profile completion for OAuth sign-ins, which never collect role/grade
// (see app/complete-profile/page.tsx). A plain client-side update can't set role —
// the protect_profile_columns trigger freezes it for non-admin self-updates, by
// design, to block privilege escalation. This route uses the service role but
// only ever touches a profile that is still genuinely incomplete (student with no
// grade), so it can't be reused to change an already-set-up account's role.
const makeAdmin = () => createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, { auth: { persistSession: false } });
let _admin: ReturnType<typeof makeAdmin> | null = null;
const getAdmin = () => (_admin ??= makeAdmin());

const LEVELS = new Set(["9", "10", "11", "12", "college", "university"]);

export async function POST(req: NextRequest) {
  const admin = getAdmin();
  const token = (req.headers.get("authorization") ?? "").replace(/^Bearer\s+/i, "");
  const { data: { user } } = await admin.auth.getUser(token);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { role, level } = (await req.json().catch(() => ({}))) as { role?: string; level?: string };
  if (role !== "student" && role !== "teacher") return NextResponse.json({ error: "Invalid role" }, { status: 400 });
  if (role === "student" && !LEVELS.has(level ?? "")) return NextResponse.json({ error: "Invalid grade" }, { status: 400 });

  const { data: profile } = await admin.from("profiles").select("role, level").eq("id", user.id).single();
  const incomplete = (profile?.role ?? "student") === "student" && !profile?.level;
  if (!incomplete) return NextResponse.json({ error: "Profile is already set up." }, { status: 409 });

  const { error } = await admin.from("profiles").update({ role, level: role === "student" ? level : null }).eq("id", user.id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ ok: true });
}
