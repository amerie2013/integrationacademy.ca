"use client";

import { useEffect, useMemo, useRef } from "react";
import katex from "katex";

/**
 * Renders authored HTML (the instructor's lecture template) and typesets any
 * \( ... \) inline math and \[ ... \] display math with KaTeX. Native <details>
 * give the "View answer" behaviour. Adds tasteful motion: cards reveal on
 * scroll and tilt in 3D toward the cursor. Content is author-trusted.
 */
export function HtmlBlock({ html }: { html: string }) {
  const out = useMemo(() => renderMath(html), [html]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const boxes = Array.from(
      root.querySelectorAll<HTMLElement>(".example-box, .practice-box, .qa-box"),
    );
    if (boxes.length === 0) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      boxes.forEach((el) => el.classList.add("ia-reveal", "ia-in"));
      return;
    }

    // Reveal on scroll (stagger), and reveal anything already on-screen on load.
    boxes.forEach((el, i) => {
      el.classList.add("ia-reveal");
      el.style.transitionDelay = `${Math.min(i * 60, 280)}ms`;
    });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("ia-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    boxes.forEach((el) => io.observe(el));
    requestAnimationFrame(() => {
      boxes.forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.95) el.classList.add("ia-in");
      });
    });

    // 3D tilt toward the cursor.
    const onMove = (ev: MouseEvent) => {
      const el = ev.currentTarget as HTMLElement;
      const r = el.getBoundingClientRect();
      const px = (ev.clientX - r.left) / r.width - 0.5;
      const py = (ev.clientY - r.top) / r.height - 0.5;
      el.style.transitionDelay = "0ms";
      el.style.transform = `translateY(-6px) rotateX(${(-py * 5).toFixed(2)}deg) rotateY(${(px * 6).toFixed(2)}deg)`;
    };
    const onLeave = (ev: MouseEvent) => {
      (ev.currentTarget as HTMLElement).style.transform = "";
    };
    boxes.forEach((el) => {
      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      io.disconnect();
      boxes.forEach((el) => {
        el.removeEventListener("mousemove", onMove);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, [out]);

  return <div ref={ref} className="lecture-html" dangerouslySetInnerHTML={{ __html: out }} />;
}

function tex(src: string, display: boolean) {
  // Decode HTML entities (e.g. &lt; from edited content) so KaTeX can parse them.
  const s = src
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    .trim();
  try {
    return katex.renderToString(s, { throwOnError: false, displayMode: display });
  } catch {
    return src;
  }
}

function renderMath(html: string): string {
  let s = html;
  s = s.replace(/\\\[([\s\S]+?)\\\]/g, (_m, t) => tex(t, true));
  s = s.replace(/\\\(([\s\S]+?)\\\)/g, (_m, t) => tex(t, false));
  return s;
}
