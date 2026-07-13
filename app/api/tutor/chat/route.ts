import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { rateLimit, clientKey } from "../../../../lib/rateLimit";
import {
  blocksToTutorContext,
  buildTutorSystemPrompt,
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
    const message = (body.message ?? "").trim();
    if (!lessonId) {
      return NextResponse.json({ error: "Missing lesson." }, { status: 400 });
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

    // RLS: if they can read the lesson, they have course access.
    const userSb = makeUserClient(token);
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

    let courseTitle = "";
    if (lesson.course_id) {
      const { data: course } = await admin.from("courses").select("title").eq("id", lesson.course_id).single();
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

    const lessonTitle = lesson.title ?? "Lesson";
    const blocks = Array.isArray(lesson.blocks) ? (lesson.blocks as Block[]) : [];
    const lessonBody = blocksToTutorContext(blocks);

    // Upsert thread
    const { data: thread, error: threadErr } = await admin
      .from("tutor_threads")
      .upsert(
        {
          user_id: userId,
          lesson_id: lessonId,
          course_id: lesson.course_id,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "user_id,lesson_id" },
      )
      .select("id")
      .single();

    if (threadErr || !thread) {
      console.error("tutor thread upsert", threadErr);
      return NextResponse.json({ error: "Could not start chat. Is the tutor SQL migration applied?" }, { status: 500 });
    }

    const { data: prior } = await admin
      .from("tutor_messages")
      .select("role, content")
      .eq("thread_id", thread.id)
      .order("created_at", { ascending: true })
      .limit(HISTORY_LIMIT);

    // Save user message first
    const { data: userMsg, error: userMsgErr } = await admin
      .from("tutor_messages")
      .insert({
        thread_id: thread.id,
        user_id: userId,
        lesson_id: lessonId,
        role: "user",
        content: message,
      })
      .select("id, role, content, created_at")
      .single();

    if (userMsgErr || !userMsg) {
      console.error("tutor user msg", userMsgErr);
      return NextResponse.json({ error: "Could not save your message." }, { status: 500 });
    }

    let assistantText: string;
    if (looksOffTopic(message)) {
      assistantText = OFF_TOPIC_REPLY;
    } else {
      const system = buildTutorSystemPrompt({
        lessonTitle,
        courseTitle,
        lessonBody,
      });
      const history = (prior ?? []).map((m) => ({
        role: m.role as "user" | "assistant",
        content: m.content,
      }));
      history.push({ role: "user", content: message });

      const model = process.env.DEEPSEEK_MODEL || "deepseek-v4-flash";
      const dsRes = await fetch("https://api.deepseek.com/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model,
          messages: [{ role: "system", content: system }, ...history],
          temperature: 0.4,
          max_tokens: 1200,
          thinking: { type: "disabled" },
          stream: false,
        }),
      });

      if (!dsRes.ok) {
        const errText = await dsRes.text().catch(() => "");
        console.error("DeepSeek error", dsRes.status, errText);
        // Soft-delete? Keep user message; return error without assistant row
        return NextResponse.json(
          {
            error:
              dsRes.status === 402
                ? "AI tutor balance is empty. Please top up DeepSeek billing."
                : "The tutor is temporarily unavailable. Try again in a moment.",
            userMessage: userMsg,
          },
          { status: 502 },
        );
      }

      const dsJson = (await dsRes.json()) as {
        choices?: { message?: { content?: string } }[];
      };
      assistantText =
        dsJson.choices?.[0]?.message?.content?.trim() ||
        "I couldn't generate a reply. Please rephrase your math question.";
    }

    const { data: asstMsg, error: asstErr } = await admin
      .from("tutor_messages")
      .insert({
        thread_id: thread.id,
        user_id: userId,
        lesson_id: lessonId,
        role: "assistant",
        content: assistantText,
      })
      .select("id, role, content, created_at")
      .single();

    if (asstErr || !asstMsg) {
      console.error("tutor assistant msg", asstErr);
      return NextResponse.json(
        { error: "Reply generated but not saved.", reply: assistantText, userMessage: userMsg },
        { status: 500 },
      );
    }

    await admin
      .from("tutor_threads")
      .update({ updated_at: new Date().toISOString() })
      .eq("id", thread.id);

    return NextResponse.json({
      userMessage: userMsg,
      assistantMessage: asstMsg,
      remainingToday: Math.max(0, DAILY_USER_MSG_LIMIT - (usedToday ?? 0) - 1),
    });
  } catch (e) {
    console.error("tutor chat", e);
    return NextResponse.json({ error: "Unexpected tutor error." }, { status: 500 });
  }
}
