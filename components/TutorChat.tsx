"use client";

import { useEffect, useRef, useState } from "react";
import { supabase } from "../lib/supabase";
import { Math as Tex } from "./Math";
import { theme } from "../lib/theme";

type Msg = {
  id: string;
  role: "user" | "assistant";
  content: string;
  created_at: string;
};

export function TutorChat({
  lessonId,
  lessonTitle,
  sections = [],
  assignmentId,
  assignmentTitle,
}: {
  lessonId?: string;
  lessonTitle?: string;
  /** Lesson section headings, turned into clickable starter questions. */
  sections?: string[];
  /** When set, the chat runs in hint-only "assignment" mode instead of lesson mode. */
  assignmentId?: string;
  assignmentTitle?: string;
}) {
  const isAssignment = !!assignmentId;
  const targetId = (assignmentId ?? lessonId) ?? "";
  const targetCol = isAssignment ? "assignment_id" : "lesson_id";
  const headerTitle = (isAssignment ? assignmentTitle : lessonTitle) || (isAssignment ? "This assignment" : "This lesson");
  const [open, setOpen] = useState(false);
  const [signedIn, setSignedIn] = useState<boolean | null>(null);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [remaining, setRemaining] = useState<number | null>(null);
  const [speakingId, setSpeakingId] = useState<string | null>(null);
  const [ttsOk, setTtsOk] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const loaded = useRef(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSignedIn(!!session);
    });
  }, []);

  useEffect(() => {
    loaded.current = false;
    setMessages([]);
  }, [targetId]);

  useEffect(() => {
    if (!open || !signedIn || loaded.current) return;
    loaded.current = true;
    (async () => {
      const { data } = await supabase
        .from("tutor_messages")
        .select("id, role, content, created_at")
        .eq(targetCol, targetId)
        .order("created_at", { ascending: true })
        .limit(100);
      if (data) setMessages(data as Msg[]);
    })();
  }, [open, signedIn, targetId]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open, busy]);

  // Read-aloud uses the browser's built-in voice (free, on-device — no API).
  useEffect(() => {
    setTtsOk(typeof window !== "undefined" && "speechSynthesis" in window);
    return () => { try { window.speechSynthesis?.cancel(); } catch {} };
  }, []);
  useEffect(() => {
    if (!open) { try { window.speechSynthesis?.cancel(); } catch {} setSpeakingId(null); }
  }, [open]);

  function speak(m: Msg) {
    try {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(toSpeech(m.content));
      u.rate = 1;
      u.onend = () => setSpeakingId(null);
      u.onerror = () => setSpeakingId(null);
      setSpeakingId(m.id);
      window.speechSynthesis.speak(u);
    } catch { setSpeakingId(null); }
  }
  function stopSpeak() {
    try { window.speechSynthesis.cancel(); } catch {}
    setSpeakingId(null);
  }

  // Starter questions: generic hint prompts for assignments, section-based for lessons.
  const suggestions = isAssignment
    ? ["I'm stuck — give me a hint", "Explain the concept I need for this", "How do I check my own answer?"]
    : sections
        .map((s) => s.trim())
        .filter(Boolean)
        .slice(0, 10)
        .map((s) => (/^(example|question|problem|exercise)\b/i.test(s) ? `Help with ${s}` : `Explain ${s}`));

  async function send(preset?: string) {
    const text = (preset ?? input).trim();
    if (!text || busy) return;
    setError("");
    setBusy(true);
    if (!preset) setInput("");

    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (!session) {
      setSignedIn(false);
      setBusy(false);
      setError("Sign in to use the tutor.");
      return;
    }

    const optimistic: Msg = {
      id: `tmp-${Date.now()}`,
      role: "user",
      content: text,
      created_at: new Date().toISOString(),
    };
    setMessages((m) => [...m, optimistic]);

    try {
      const res = await fetch("/api/tutor/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.access_token}`,
        },
        body: JSON.stringify(isAssignment ? { assignmentId, message: text } : { lessonId, message: text }),
      });
      const data = await res.json();
      if (!res.ok) {
        setMessages((m) => m.filter((x) => x.id !== optimistic.id));
        setError(data.error ?? "Something went wrong.");
        setBusy(false);
        return;
      }
      setMessages((m) => {
        const withoutTmp = m.filter((x) => x.id !== optimistic.id);
        const next = [...withoutTmp];
        if (data.userMessage) next.push(data.userMessage as Msg);
        if (data.assistantMessage) next.push(data.assistantMessage as Msg);
        else if (data.reply) {
          next.push({
            id: `local-${Date.now()}`,
            role: "assistant",
            content: data.reply as string,
            created_at: new Date().toISOString(),
          });
        }
        return next;
      });
      if (typeof data.remainingToday === "number") setRemaining(data.remainingToday);
    } catch {
      setMessages((m) => m.filter((x) => x.id !== optimistic.id));
      setError("Network error. Try again.");
    }
    setBusy(false);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        style={{
          position: "fixed",
          right: 22,
          bottom: 22,
          zIndex: 60,
          background: theme.color.primary,
          color: "#fff",
          border: "none",
          borderRadius: 999,
          padding: "14px 20px",
          fontWeight: 700,
          fontSize: 14,
          cursor: "pointer",
          boxShadow: theme.shadow.lift,
          fontFamily: theme.font.sans,
        }}
      >
        {open ? "Close tutor" : "Ask tutor"}
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Lesson tutor"
          style={{
            position: "fixed",
            right: 22,
            bottom: 78,
            width: "min(400px, calc(100vw - 32px))",
            height: "min(560px, calc(100vh - 120px))",
            zIndex: 60,
            background: theme.color.surface,
            border: `1px solid ${theme.color.border}`,
            borderRadius: theme.radius.lg,
            boxShadow: theme.shadow.lift,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            fontFamily: theme.font.sans,
          }}
        >
          <header
            style={{
              padding: "14px 16px",
              borderBottom: `1px solid ${theme.color.border}`,
              background: theme.color.surfaceMuted,
            }}
          >
            <div style={{ fontWeight: 800, fontSize: 15, color: theme.color.text }}>{isAssignment ? "Assignment hints" : "Math tutor"}</div>
            <div style={{ fontSize: 12.5, color: theme.color.textMuted, marginTop: 2 }}>
              {headerTitle} · {isAssignment ? "hints only — no full answers" : "math only"}
            </div>
          </header>

          <div style={{ flex: 1, overflowY: "auto", padding: 14, display: "flex", flexDirection: "column", gap: 10 }}>
            {signedIn === false && (
              <p style={{ color: theme.color.textMuted, fontSize: 14, margin: 0 }}>
                <a href="/login" style={{ color: theme.color.primary, fontWeight: 700 }}>
                  Sign in
                </a>{" "}
                to ask questions about this lesson. Chats are saved to your account.
              </p>
            )}
            {signedIn && messages.length === 0 && !busy && (
              <>
                <p style={{ color: theme.color.textMuted, fontSize: 14, margin: 0 }}>
                  {isAssignment
                    ? "I'll give hints and explain the concepts — but not the final answers. Tell me which part you're stuck on."
                    : "Ask about a concept or example from this lesson. I will guide you step by step — not personal chat."}
                </p>
                {suggestions.length > 0 && (
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginTop: 4 }}>
                    {suggestions.map((s, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => void send(s)}
                        style={{
                          background: theme.color.primarySoft,
                          color: theme.color.primary,
                          border: `1px solid ${theme.color.border}`,
                          borderRadius: 999,
                          padding: "6px 12px",
                          fontSize: 12.5,
                          fontWeight: 600,
                          cursor: "pointer",
                          fontFamily: theme.font.sans,
                          textAlign: "left",
                        }}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                )}
              </>
            )}
            {messages.map((m) => (
              <div
                key={m.id}
                style={{
                  alignSelf: m.role === "user" ? "flex-end" : "flex-start",
                  maxWidth: "92%",
                  background: m.role === "user" ? theme.color.primarySoft : theme.color.surfaceMuted,
                  border: `1px solid ${theme.color.border}`,
                  borderRadius: 12,
                  padding: "10px 12px",
                  fontSize: 14,
                  lineHeight: 1.55,
                  color: theme.color.text,
                }}
              >
                <TutorMarkdown text={m.content} />
                {m.role === "assistant" && ttsOk && (
                  <button
                    type="button"
                    onClick={() => (speakingId === m.id ? stopSpeak() : speak(m))}
                    style={{ marginTop: 6, background: "none", border: "none", color: theme.color.primary, fontSize: 12, fontWeight: 700, cursor: "pointer", padding: 0 }}
                  >
                    {speakingId === m.id ? "⏹ Stop" : "🔊 Listen"}
                  </button>
                )}
              </div>
            ))}
            {busy && (
              <div style={{ fontSize: 13, color: theme.color.textFaint }}>Thinking…</div>
            )}
            {error && (
              <div style={{ fontSize: 13, color: theme.color.danger }}>{error}</div>
            )}
            <div ref={bottomRef} />
          </div>

          <footer style={{ borderTop: `1px solid ${theme.color.border}`, padding: 12 }}>
            {remaining !== null && (
              <div style={{ fontSize: 11, color: theme.color.textFaint, marginBottom: 6 }}>
                {remaining} questions left today
              </div>
            )}
            <div style={{ display: "flex", gap: 8 }}>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    void send();
                  }
                }}
                disabled={!signedIn || busy}
                placeholder={signedIn ? "Ask about this lesson…" : "Sign in to chat"}
                rows={2}
                style={{
                  flex: 1,
                  resize: "none",
                  border: `1px solid ${theme.color.borderStrong}`,
                  borderRadius: 10,
                  padding: "10px 12px",
                  fontSize: 14,
                  fontFamily: theme.font.sans,
                  color: theme.color.text,
                }}
              />
              <button
                type="button"
                onClick={() => void send()}
                disabled={!signedIn || busy || !input.trim()}
                style={{
                  background: theme.color.primary,
                  color: "#fff",
                  border: "none",
                  borderRadius: 10,
                  padding: "0 16px",
                  fontWeight: 700,
                  fontSize: 14,
                  cursor: !signedIn || busy || !input.trim() ? "default" : "pointer",
                  opacity: !signedIn || busy || !input.trim() ? 0.5 : 1,
                }}
              >
                Send
              </button>
            </div>
          </footer>
        </div>
      )}
    </>
  );
}

/** Lightweight markdown: paragraphs + $ / $$ KaTeX. */
function TutorMarkdown({ text }: { text: string }) {
  const parts = splitMath(text);
  return (
    <div style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
      {parts.map((p, i) =>
        p.type === "block" ? (
          <div key={i} style={{ margin: "8px 0" }}>
            <Tex expr={p.value} block />
          </div>
        ) : p.type === "inline" ? (
          <Tex key={i} expr={p.value} />
        ) : (
          <span key={i}>{renderInline(p.value)}</span>
        ),
      )}
    </div>
  );
}

/** Turn a tutor reply (markdown + LaTeX) into readable text for speech. */
function toSpeech(md: string): string {
  let s = md;
  // unwrap math delimiters, keep the inner expression
  s = s
    .replace(/\$\$([\s\S]+?)\$\$/g, " $1 ")
    .replace(/\\\[([\s\S]+?)\\\]/g, " $1 ")
    .replace(/\$([^$\n]+?)\$/g, " $1 ")
    .replace(/\\\(([\s\S]+?)\\\)/g, " $1 ");
  // common LaTeX → spoken words
  s = s
    .replace(/\\frac\s*\{([^{}]+)\}\s*\{([^{}]+)\}/g, " $1 over $2 ")
    .replace(/\\sqrt\s*\{([^{}]+)\}/g, " square root of $1 ")
    .replace(/\\(times|cdot)\b/g, " times ")
    .replace(/\\div\b/g, " divided by ")
    .replace(/\\pm\b/g, " plus or minus ")
    .replace(/\\pi\b/g, " pi ")
    .replace(/\\(le|leq)\b/g, " less than or equal to ")
    .replace(/\\(ge|geq)\b/g, " greater than or equal to ")
    .replace(/\\neq?\b/g, " not equal to ")
    .replace(/\^\s*\{?\s*2\s*\}?/g, " squared ")
    .replace(/\^\s*\{?\s*3\s*\}?/g, " cubed ")
    .replace(/\^\s*\{?([^{}\s]+)\}?/g, " to the power $1 ")
    .replace(/_\s*\{?([^{}\s]+)\}?/g, " sub $1 ")
    .replace(/\s*=\s*/g, " equals ");
  // drop any remaining LaTeX commands / braces
  s = s.replace(/\\[a-zA-Z]+\b/g, " ").replace(/[{}\\]/g, " ");
  // markdown
  s = s.replace(/\*\*([^*]+)\*\*/g, "$1").replace(/\*([^*]+)\*/g, "$1").replace(/`([^`]+)`/g, "$1").replace(/[#>*_`]/g, " ");
  return s.replace(/\s+/g, " ").trim();
}

/** Render **bold**, *italic* and `code` inside a non-math text run. */
function renderInline(str: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  const re = /\*\*([^*]+)\*\*|__([^_]+)__|`([^`]+)`|\*([^*\n]+)\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = re.exec(str))) {
    if (m.index > last) nodes.push(str.slice(last, m.index));
    if (m[1] != null || m[2] != null) nodes.push(<strong key={k++}>{m[1] ?? m[2]}</strong>);
    else if (m[3] != null) nodes.push(<code key={k++} style={{ background: "rgba(15,23,42,0.06)", borderRadius: 4, padding: "1px 4px", fontSize: "0.92em" }}>{m[3]}</code>);
    else if (m[4] != null) nodes.push(<em key={k++}>{m[4]}</em>);
    last = m.index + m[0].length;
  }
  if (last < str.length) nodes.push(str.slice(last));
  return nodes;
}

function splitMath(text: string): { type: "text" | "inline" | "block"; value: string }[] {
  const out: { type: "text" | "inline" | "block"; value: string }[] = [];
  // Accept every delimiter the model might emit: $$…$$ and \[…\] for display,
  // $…$ and \(…\) for inline. Groups: 1=$$ block, 2=\[ block, 3=$ inline, 4=\( inline.
  const re = /\$\$([\s\S]+?)\$\$|\\\[([\s\S]+?)\\\]|\$([^$\n]+?)\$|\\\(([\s\S]+?)\\\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push({ type: "text", value: text.slice(last, m.index) });
    const block = m[1] ?? m[2];
    const inline = m[3] ?? m[4];
    if (block != null) out.push({ type: "block", value: block.trim() });
    else out.push({ type: "inline", value: (inline ?? "").trim() });
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push({ type: "text", value: text.slice(last) });
  return out.length ? out : [{ type: "text", value: text }];
}
