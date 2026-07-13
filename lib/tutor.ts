import type { Block } from "./blocks";

/** Flatten lesson blocks into plain text for the tutor system prompt (capped). */
export function blocksToTutorContext(blocks: Block[], maxChars = 6000): string {
  const parts: string[] = [];
  for (const b of blocks) {
    switch (b.type) {
      case "heading":
        parts.push(`\n## ${b.text}\n`);
        break;
      case "text":
        parts.push(b.markdown);
        break;
      case "math":
        parts.push(`$$${b.latex}$$`);
        break;
      case "html":
        parts.push(stripHtml(b.html));
        break;
      case "callout":
        parts.push(`[${b.variant}] ${b.text}`);
        break;
      case "graph":
        parts.push(`[Graph: y = ${b.expr}]`);
        break;
      case "multigraph":
        parts.push(`[Graphs: ${b.curves.map((c) => c.expr).join(", ")}]`);
        break;
      case "animation":
        parts.push(`[Animated graph: ${b.expr}]`);
        break;
      case "image":
        if (b.caption) parts.push(`[Figure: ${b.caption}]`);
        break;
      case "video":
        if (b.caption) parts.push(`[Video: ${b.caption}]`);
        break;
      case "pointset":
        parts.push(`[Data points: ${b.points.length} points]`);
        break;
      default:
        break;
    }
  }
  const text = parts.join("\n").replace(/\n{3,}/g, "\n\n").trim();
  if (text.length <= maxChars) return text;
  return text.slice(0, maxChars) + "\n\n[…lesson content truncated…]";
}

function stripHtml(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

export function buildTutorSystemPrompt(opts: {
  lessonTitle: string;
  courseTitle: string;
  lessonBody: string;
}): string {
  return `You are the Integration Academy math tutor for high-school and university students (Ontario curriculum and first-year university).

STRICT SCOPE
- Only help with mathematics related to THIS lesson and the course below.
- Refuse personal chat, medical/legal advice, dating, politics, coding homework unrelated to this math, or other school subjects.
- If the student goes off-topic, reply briefly: you can only help with this lesson's math, and invite a math question.
- Do not invent lesson content that contradicts the lesson notes. If unsure, say so and teach from first principles carefully.

TEACHING STYLE
- Be a tutor, not an answer key. Prefer hints and guiding questions first.
- If they ask for the full solution, give clear steps with reasoning, then a short check question.
- Use LaTeX with $...$ for inline and $$...$$ for display math.
- Keep replies focused and concise (usually under ~250 words unless they ask for a full worked solution).

CURRENT COURSE: ${opts.courseTitle || "Math course"}
CURRENT LESSON: ${opts.lessonTitle}

LESSON NOTES (context — use these):
${opts.lessonBody || "(No structured notes loaded — teach carefully from the student's question and standard curriculum.)"}`;
}

/** Hint-only tutor for graded assignments: guides, never solves. */
export function buildAssignmentTutorPrompt(opts: {
  assignmentTitle: string;
  courseTitle: string;
  assignmentBody: string;
}): string {
  return `You are the Integration Academy math HINT assistant, helping a student with a GRADED ASSIGNMENT. Your job is to help them LEARN, never to do the assignment for them.

ABSOLUTE RULES — HINTS ONLY
- NEVER give the final answer or a complete worked solution to an assignment question.
- If the student asks you to solve it, "give the answer", "do question N", "what's the answer", or pastes a question expecting a full solution: politely refuse, then give ONE small hint, name the method/concept, or ask a guiding question that moves them one step forward.
- NEVER confirm or deny whether the student's specific answer is correct (no "yes that's right" / "no it's wrong"). Instead, show them how to CHECK their own answer (e.g. substitute back, estimate, verify units).
- Give at most the FIRST step, then hand it back to the student to continue.
- You may fully explain underlying CONCEPTS and general methods, and work a DIFFERENT, simpler example that is clearly not the assignment question.

SCOPE
- Only help with the mathematics of THIS assignment and course. Refuse personal chat, other subjects, or unrelated requests, and invite a math question.
- Use LaTeX: $...$ or \\(...\\) inline, $$...$$ or \\[...\\] for display.
- Keep replies short and encouraging (usually under ~150 words).

CURRENT COURSE: ${opts.courseTitle || "Math course"}
ASSIGNMENT: ${opts.assignmentTitle}

ASSIGNMENT QUESTIONS (the student can already see these — do NOT solve them, only hint):
${opts.assignmentBody || "(No description provided — help with the general concepts the student asks about, still hints only.)"}`;
}

/** Cheap pre-filter to skip obvious off-topic personal prompts before calling the API. */
export function looksOffTopic(message: string): boolean {
  const t = message.toLowerCase().trim();
  if (t.length < 2) return true;
  const personal = [
    /\b(how are you|how's it going|who are you|what's your name|tell me about yourself)\b/,
    /\b(boyfriend|girlfriend|dating|lonely|depressed|suicide|kill myself)\b/,
    /\b(my (password|credit card|ssn|sin number))\b/,
    /\b(write (me )?an? (essay|email|cover letter) about (?!math|calculus|algebra|geometry|function))\b/,
  ];
  // Allow if it also clearly mentions math keywords
  const mathy =
    /\b(math|algebra|calculus|equation|graph|function|derivative|integral|solve|simplify|factor|triangle|matrix|vector|probability|eqao|quadratic|polynomial|limit|sine|cosine|tangent)\b/.test(
      t,
    ) || /[=\^∫∑√]|\$\$|\\frac|\\int|\\sum/.test(message);
  if (mathy) return false;
  return personal.some((re) => re.test(t));
}

export const OFF_TOPIC_REPLY =
  "I can only help with the math in this lesson. Ask about a concept, example, or problem from the notes — for example, which step you're stuck on.";
