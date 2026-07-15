import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { rateLimit, clientKey } from "../../../../lib/rateLimit";
import {
  blocksToTutorContext,
  buildTutorSystemPrompt,
  buildAssignmentTutorPrompt,
  looksOffTopic,
  OFF_TOPIC_REPLY,
} from "../../../../lib/tutor";
import type { Block } from "../../../../lib/blocks";

export const runtime = "nodejs";
export const maxDuration = 60;

const DAILY_USER_MSG_LIMIT = 40;
const MAX_MSG_CHARS = 2000;
const HISTORY_LIMIT = 12;

const makeAdmin = () =>
  createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
    auth: { persistSession: false },
  });

function makeUserClient(token: string) {
  return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    global: { headers: { Authorization: `Bearer ${token}` } },
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

let _admin: ReturnType<typeof makeAdmin> | null = null;
const getAdmin = () => (_admin ??= makeAdmin());

type Body = {
  lessonId?: string;
  assignmentId?: string;
  message?: string;
};

export async function POST(req: NextRequest) {
  try {
    const rl = rateLimit(`tutor:${clientKey(req)}`, 20, 60_000);
    if (!rl.ok) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a moment." },
        { status: 429, headers: { "Retry-After": String(rl.retryAfter) } },
      );
    }

    const apiKey = process.env.DEEPSEEK_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "AI tutor is not configured yet. Add DEEPSEEK_API_KEY on the server." },
        { status: 503 },
      );
    }

    const authz = req.headers.get("authorization") ?? "";
    const token = authz.startsWith("Bearer ") ? authz.slice(7) : "";
    if (!token) {
      return NextResponse.json({ error: "Sign in to use the tutor." }, { status: 401 });
    }

    const admin = getAdmin();
    const { data: userData, error: uErr } = await admin.auth.getUser(token);
    if (uErr || !userData?.user) {
      return NextResponse.json({ error: "Session expired — sign in again." }, { status: 401 });
    }
    const userId = userData.user.id;

    const body = (await req.json()) as Body;
    const lessonId = body.lessonId?.trim() ?? "";
    const assignmentId = body.assignmentId?.trim() ?? "";
    const message = (body.message ?? "").trim();
    const isAssignment = !!assignmentId;
    if (!lessonId && !assignmentId) {
      return NextResponse.json({ error: "Missing lesson or assignment." }, { status: 400 });
    }
    if (!message) {
      return NextResponse.json({ error: "Type a question first." }, { status: 400 });
    }
    if (message.length > MAX_MSG_CHARS) {
      return NextResponse.json(
        { error: `Keep questions under ${MAX_MSG_CHARS} characters.` },
        { status: 400 },
      );
    }

    // Build the tutoring context. RLS: reading the row means course access.
    const userSb = makeUserClient(token);
    let ctxTitle = "";
    let ctxCourseId: string | null = null;
    let ctxBody = "";
    if (isAssignment) {
      const { data: asg, error: aErr } = await userSb
        .from("assignments")
        .select("id, title, description, course_id, tutor_enabled")
        .eq("id", assignmentId)
        .single();
      if (aErr || !asg) {
        return NextResponse.json({ error: "You don't have access to this assignment." }, { status: 403 });
      }
      if (!asg.tutor_enabled) {
        return NextResponse.json({ error: "The tutor is turned off for this assignment." }, { status: 403 });
      }
      ctxTitle = asg.title ?? "Assignment";
      ctxCourseId = asg.course_id ?? null;
      ctxBody = (asg.description ?? "").slice(0, 6000);
    } else {
      const { data: lesson, error: lessonErr } = await userSb
        .from("lessons")
        .select("id, title, blocks, course_id")
        .eq("id", lessonId)
        .single();
      if (lessonErr || !lesson) {
        return NextResponse.json(
          { error: "You don't have access to this lesson, or it isn't available." },
          { status: 403 },
        );
      }
      ctxTitle = lesson.title ?? "Lesson";
      ctxCourseId = lesson.course_id ?? null;
      const blocks = Array.isArray(lesson.blocks) ? (lesson.blocks as Block[]) : [];
      ctxBody = blocksToTutorContext(blocks);
    }

    let courseTitle = "";
    if (ctxCourseId) {
      const { data: course } = await admin.from("courses").select("title").eq("id", ctxCourseId).single();
      courseTitle = course?.title ?? "";
    }

    const dayStart = new Date();
    dayStart.setUTCHours(0, 0, 0, 0);
    const { count: usedToday } = await admin
      .from("tutor_messages")
      .select("id", { count: "exact", head: true })
      .eq("user_id", userId)
      .eq("role", "user")
      .gte("created_at", dayStart.toISOString());

    if ((usedToday ?? 0) >= DAILY_USER_MSG_LIMIT) {
      return NextResponse.json(
        {
          error: `Daily tutor limit reached (${DAILY_USER_MSG_LIMIT} questions). Try again tomorrow.`,
        },
        { status: 429 },
      );
    }

    // Thread: one per student per lesson/assignment (find-or-create).
    const threadQ = admin.from("tutor_threads").select("id").eq("user_id", userId);
    const { data: existingThread } = await (
      isAssignment ? threadQ.eq("assignment_id", assignmentId) : threadQ.eq("lesson_id", lessonId)
    ).maybeSingle();
    let threadId = existingThread?.id ?? null;
    if (!threadId) {
      const { data: created, error: threadErr } = await admin
        .from("tutor_threads")
        .insert({
          user_id: userId,
          course_id: ctxCourseId,
          lesson_id: isAssignment ? null : lessonId,
          assignment_id: isAssignment ? assignmentId : null,
          updated_at: new Date().toISOString(),
        })
        .select("id")
        .single();
      if (threadErr || !created) {
        console.error("tutor thread create", threadErr);
        return NextResponse.json({ error: "Could not start chat. Is the tutor SQL migration applied?" }, { status: 500 });
      }
      threadId = created.id;
    }

    const { data: prior } = await admin
      .from("tutor_messages")
      .select("role, content")
      .eq("thread_id", threadId)
      .order("created_at", { ascending: true })
      .limit(HISTORY_LIMIT);

    const msgKeys = {
      thread_id: threadId,
      user_id: userId,
      lesson_id: isAssignment ? null : lessonId,
      assignment_id: isAssignment ? assignmentId : null,
    };

    // Save user message first
    const { data: userMsg, error: userMsgErr } = await admin
      .from("tutor_messages")
      .insert({ ...msgKeys, role: "user", content: message })
      .select("id, role, content, created_at")
      .single();

    if (userMsgErr || !userMsg) {
      console.error("tutor user msg", userMsgErr);
      return NextResponse.json({ error: "Could not save your message." }, { status: 500 });
    }

    void userMsg; // saved above; the reply streams back as plain text below
    const remaining = Math.max(0, DAILY_USER_MSG_LIMIT - (usedToday ?? 0) - 1);
    const encoder = new TextEncoder();
    const streamHeaders = {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
      "X-Tutor-Remaining": String(remaining),
    };
    // Persist the assistant reply (and bump the thread) once the text is final.
    const persist = async (text: string) => {
      const content = text.trim() || "I couldn't generate a reply. Please rephrase your math question.";
      await admin.from("tutor_messages").insert({ ...msgKeys, role: "assistant", content });
      await admin.from("tutor_threads").update({ updated_at: new Date().toISOString() }).eq("id", threadId);
    };

    // Off-topic: stream the fixed reply so the client path is uniform.
    if (looksOffTopic(message)) {
      const stream = new ReadableStream({
        async start(controller) {
          controller.enqueue(encoder.encode(OFF_TOPIC_REPLY));
          await persist(OFF_TOPIC_REPLY);
          controller.close();
        },
      });
      return new Response(stream, { headers: streamHeaders });
    }

    const system = isAssignment
      ? buildAssignmentTutorPrompt({ assignmentTitle: ctxTitle, courseTitle, assignmentBody: ctxBody })
      : buildTutorSystemPrompt({ lessonTitle: ctxTitle, courseTitle, lessonBody: ctxBody });
    const history = (prior ?? []).map((m) => ({ role: m.role as "user" | "assistant", content: m.content }));
    history.push({ role: "user", content: message });

    const model = process.env.DEEPSEEK_MODEL || "deepseek-v4-flash";
    const dsRes = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({
        model,
        messages: [{ role: "system", content: system }, ...history],
        temperature: 0.4,
        max_tokens: 1200,
        thinking: { type: "disabled" },
        stream: true,
      }),
    });

    if (!dsRes.ok || !dsRes.body) {
      const errText = await dsRes.text().catch(() => "");
      console.error("DeepSeek error", dsRes.status, errText);
      return NextResponse.json(
        { error: dsRes.status === 402 ? "AI tutor balance is empty. Please top up DeepSeek billing." : "The tutor is temporarily unavailable. Try again in a moment." },
        { status: 502 },
      );
    }

    const upstream = dsRes.body;
    const stream = new ReadableStream({
      async start(controller) {
        let full = "";
        try {
          const reader = upstream.getReader();
          const decoder = new TextDecoder();
          let buf = "";
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            buf += decoder.decode(value, { stream: true });
            const lines = buf.split("\n");
            buf = lines.pop() ?? ""; // keep the trailing partial line
            for (const line of lines) {
              const t = line.trim();
              if (!t.startsWith("data:")) continue;
              const payload = t.slice(5).trim();
              if (payload === "[DONE]") continue;
              try {
                const j = JSON.parse(payload);
                const delta = j?.choices?.[0]?.delta?.content;
                if (delta) { full += delta; controller.enqueue(encoder.encode(delta)); }
              } catch { /* ignore keep-alives / partial JSON */ }
            }
          }
        } catch (e) {
          console.error("tutor stream", e);
        }
        try { await persist(full); } catch (e) { console.error("tutor persist", e); }
        controller.close();
      },
    });
    return new Response(stream, { headers: streamHeaders });
  } catch (e) {
    console.error("tutor chat", e);
    return NextResponse.json({ error: "Unexpected tutor error." }, { status: 500 });
  }
}
