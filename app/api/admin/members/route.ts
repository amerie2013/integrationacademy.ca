import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Privileged member operations that touch auth.users (delete account, confirm
// email, set a new password). These CANNOT go through the browser's anon key +
// RLS — they require the service-role key, which must stay server-only.
//
// Everything else an admin does to a member (role, plan/tier, status, expiry,
// class seats) is a plain UPDATE on `profiles` and is done client-side: the
// "admin updates profiles" RLS policy allows it and the protect_profile_columns
// trigger exempts is_admin(). Only the auth.users-level actions live here.

const makeAdmin = () =>
  createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
    auth: { persistSession: false },
  });
let _admin: ReturnType<typeof makeAdmin> | null = null;
const getAdmin = () => (_admin ??= makeAdmin());

// Verify the caller is a signed-in admin by validating their access token and
// checking their profile role. Returns the admin's id, or an error response.
async function requireAdmin(
  req: NextRequest,
): Promise<{ ok: true; adminId: string } | { ok: false; res: NextResponse }> {
  const authz = req.headers.get("authorization") ?? "";
  const token = authz.startsWith("Bearer ") ? authz.slice(7) : "";
  if (!token) return { ok: false, res: NextResponse.json({ error: "Not signed in." }, { status: 401 }) };

  const admin = getAdmin();
  const { data: userData, error: uErr } = await admin.auth.getUser(token);
  if (uErr || !userData?.user) {
    return { ok: false, res: NextResponse.json({ error: "Session expired — sign in again." }, { status: 401 }) };
  }
  const { data: prof } = await admin.from("profiles").select("role").eq("id", userData.user.id).single();
  if (prof?.role !== "admin") {
    return { ok: false, res: NextResponse.json({ error: "Admins only." }, { status: 403 }) };
  }
  return { ok: true, adminId: userData.user.id };
}

// GET → auth metadata (email verification, last sign-in) the anon client can't
// read. Keyed by user id so the page can merge it onto the profiles list.
export async function GET(req: NextRequest) {
  const gate = await requireAdmin(req);
  if (!gate.ok) return gate.res;

  const admin = getAdmin();
  const meta: Record<string, { email_confirmed: boolean; last_sign_in_at: string | null; banned: boolean }> = {};
  // listUsers is paginated (max 1000/page); walk pages until exhausted.
  for (let page = 1; page <= 20; page++) {
    const { data, error } = await admin.auth.admin.listUsers({ page, perPage: 1000 });
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    for (const u of data.users) {
      const bannedUntil = (u as any).banned_until;
      meta[u.id] = {
        email_confirmed: Boolean((u as any).email_confirmed_at ?? (u as any).confirmed_at),
        last_sign_in_at: (u as any).last_sign_in_at ?? null,
        banned: Boolean(bannedUntil && new Date(bannedUntil).getTime() > Date.now()),
      };
    }
    if (data.users.length < 1000) break;
  }
  return NextResponse.json({ meta });
}

// POST → a single privileged action against one member.
//   { action: "verify" | "delete" | "set_password", memberId, password? }
export async function POST(req: NextRequest) {
  const gate = await requireAdmin(req);
  if (!gate.ok) return gate.res;

  const body = await req.json().catch(() => null);
  const action = body?.action as string | undefined;
  const memberId = body?.memberId as string | undefined;
  if (!action || !memberId) {
    return NextResponse.json({ error: "Missing action or memberId." }, { status: 400 });
  }

  const admin = getAdmin();

  if (action === "verify") {
    const { error } = await admin.auth.admin.updateUserById(memberId, { email_confirm: true });
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ ok: true });
  }

  if (action === "set_password") {
    const password = String(body?.password ?? "");
    if (password.length < 8) {
      return NextResponse.json({ error: "Password must be at least 8 characters." }, { status: 400 });
    }
    const { error } = await admin.auth.admin.updateUserById(memberId, { password });
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ ok: true });
  }

  if (action === "delete") {
    if (memberId === gate.adminId) {
      return NextResponse.json({ error: "You can't delete your own account." }, { status: 400 });
    }
    // Deleting the auth user cascades to profiles (FK: on delete cascade).
    const { error } = await admin.auth.admin.deleteUser(memberId);
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ ok: true });
  }

  // Suspend = ban the account so they can't sign in (reversible, no data loss).
  if (action === "suspend") {
    if (memberId === gate.adminId) {
      return NextResponse.json({ error: "You can't suspend your own account." }, { status: 400 });
    }
    const { error } = await admin.auth.admin.updateUserById(memberId, { ban_duration: "876000h" });
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ ok: true });
  }

  if (action === "unsuspend") {
    const { error } = await admin.auth.admin.updateUserById(memberId, { ban_duration: "none" });
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json({ error: `Unknown action: ${action}` }, { status: 400 });
}
