import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Class-teacher assignment controls: set an assignment's due date, or delete it.
// Teachers may NOT create or edit assignment content (that's admin curriculum) —
// enforced here rather than in table RLS, because RLS can't limit an UPDATE to a
// single column. Delete is restricted to the teacher's own class homework so a
// class teacher can never remove the admin's shared curriculum.
export const runtime = "nodejs";

const getAdmin = () =>
  createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, { auth: { persistSession: false } });

export async function POST(req: NextRequest) {
  try {
    const authz = req.headers.get("authorization") ?? "";
    const token = authz.startsWith("Bearer ") ? authz.slice(7) : "";
    if (!token) return NextResponse.json({ error: "Sign in again." }, { status: 401 });

    const admin = getAdmin();
    const { data: u, error: uErr } = await admin.auth.getUser(token);
    if (uErr || !u?.user) return NextResponse.json({ error: "Session expired — sign in again." }, { status: 401 });
    const uid = u.user.id;

    const body = await req.json().catch(() => ({} as any));
    const action = String(body?.action ?? "");
    const classId = String(body?.classId ?? "");
    const assignmentId = String(body?.assignmentId ?? "");
    if (!classId || !assignmentId) return NextResponse.json({ error: "Missing class or assignment." }, { status: 400 });

    // Who's asking?
    const { data: me } = await admin.from("profiles").select("role").eq("id", uid).maybeSingle();
    const isAdmin = me?.role === "admin";

    const { data: cls } = await admin.from("classes").select("teacher_id, course_id").eq("id", classId).maybeSingle();
    if (!cls) return NextResponse.json({ error: "Class not found." }, { status: 404 });
    const isClassTeacher = cls.teacher_id === uid;
    if (!isAdmin && !isClassTeacher) return NextResponse.json({ error: "You don't manage this class." }, { status: 403 });

    const { data: asg } = await admin.from("assignments").select("id, course_id, class_id, created_by").eq("id", assignmentId).maybeSingle();
    if (!asg) return NextResponse.json({ error: "Assignment not found." }, { status: 404 });
    // The assignment must belong to this class's course.
    if (asg.course_id !== cls.course_id) return NextResponse.json({ error: "That assignment isn't part of this class." }, { status: 400 });

    if (action === "set-due") {
      const raw = body?.due;
      const due = raw ? new Date(String(raw)).toISOString() : null;
      const { error } = await admin.from("assignments").update({ due_date: due }).eq("id", assignmentId);
      if (error) return NextResponse.json({ error: error.message }, { status: 500 });
      return NextResponse.json({ ok: true, due_date: due });
    }

    if (action === "delete") {
      // Admins may delete any assignment. A class teacher may delete only their
      // own class homework — never the admin's shared course curriculum.
      const ownClassHomework = asg.created_by === uid || asg.class_id === classId;
      if (!isAdmin && !ownClassHomework) {
        return NextResponse.json({ error: "You can only delete homework you posted to this class, not shared course assignments." }, { status: 403 });
      }
      const { error } = await admin.from("assignments").delete().eq("id", assignmentId);
      if (error) return NextResponse.json({ error: error.message }, { status: 500 });
      return NextResponse.json({ ok: true, deleted: true });
    }

    return NextResponse.json({ error: `Unknown action: ${action}` }, { status: 400 });
  } catch (e: any) {
    console.error("class-assignment", e);
    return NextResponse.json({ error: "Unexpected error." }, { status: 500 });
  }
}
