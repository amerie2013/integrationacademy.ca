import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Handles the redirect after a user clicks their verification email or
// completes an OAuth (Google / Microsoft) sign-in. Supabase returns ?code=...
// which must be exchanged for a session.
export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

  if (!code) {
    return NextResponse.redirect(`${appUrl}/login?error=missing_code`);
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );

  const { data, error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    console.error("Auth callback error:", error.message);
    return NextResponse.redirect(`${appUrl}/login?error=verification_failed`);
  }

  // OAuth (Google/Microsoft) never collects role/grade — send those straight to
  // the completion form instead of flashing the dashboard first. Email/password
  // sign-ups always have a grade already (set at signup), so this only catches
  // OAuth accounts.
  if (data.user) {
    const { data: prof } = await supabase.from("profiles").select("role, level").eq("id", data.user.id).single();
    if ((prof?.role ?? "student") === "student" && !prof?.level) {
      return NextResponse.redirect(`${appUrl}/complete-profile`);
    }
  }

  return NextResponse.redirect(`${appUrl}/dashboard`);
}
