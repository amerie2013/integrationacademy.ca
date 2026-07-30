"""Manim scenes: ALG1 5.1 Examples 2–5 — factor a polynomial, told with graphs.

Same visual language as gcf_example1.py (Text, not MathTex, so no LaTeX needed):
blue original curve → mark the roots → green factored curve (same graph) → root
callouts → boxed identity.

Render from repo root (one class per example), then copy into public/videos:
  manim -qm --format=mp4 -o gcf_example2.mp4 scripts/manim/gcf_examples.py GCFExample2
  ... GCFExample3 / GCFExample4 / GCFExample5
  copy media/videos/gcf_examples/720p30/gcf_exampleN.mp4 -> public/videos/gcf-exampleN.mp4
"""
from manim import *

BLUE_ = "#2563eb"
GREEN_ = "#059669"
TEAL_ = "#0d9488"
ORANGE_ = "#ea580c"
INK = "#0f172a"
_DIRS = {"UR": UR, "UL": UL, "DR": DR, "DL": DL}


class _GCFBase(Scene):
    cfg = None

    def construct(self):
        C = self.cfg
        self.camera.background_color = "#f8fafc"
        xr, yr, px = C["x_range"], C["y_range"], C["plot_x"]

        axes = Axes(
            x_range=xr, y_range=yr, x_length=10, y_length=5.6,
            axis_config={"color": "#94a3b8", "stroke_width": 2, "include_tip": True, "tip_length": 0.18},
            tips=True,
        ).shift(DOWN * 0.15)
        x_label = Text("x", font_size=28, color="#475569").next_to(axes.x_axis.get_end(), RIGHT, buff=0.15)
        y_label = Text("y", font_size=28, color="#475569").next_to(axes.y_axis.get_end(), UP, buff=0.15)

        f_graph = axes.plot(C["orig_fn"], x_range=px, color=BLUE_, stroke_width=5)
        f_eq = Text(C["orig_eq"], font_size=28, color=BLUE_, weight=BOLD).to_corner(UL).shift(RIGHT * 0.15 + DOWN * 0.08)

        self.play(Create(axes), FadeIn(x_label), FadeIn(y_label), run_time=1.0)
        self.play(Create(f_graph), FadeIn(f_eq), run_time=1.6)
        self.wait(0.3)

        ymin, ymax = yr[0], yr[1]
        marks = []
        for (rx, col, tag, d) in C["roots"]:
            vline = DashedLine(axes.c2p(rx, ymin), axes.c2p(rx, ymax), color=col, stroke_width=2.5, dash_length=0.12)
            dot = Dot(axes.c2p(rx, 0), color=col, radius=0.1)
            self.play(Create(vline), FadeIn(dot), run_time=0.55)
            marks.append((dot, tag, d, col))
        self.wait(0.2)

        g_graph = axes.plot(C["fact_fn"], x_range=px, color=GREEN_, stroke_width=6)
        g_eq = Text(C["fact_eq"], font_size=28, color=GREEN_, weight=BOLD).next_to(f_eq, DOWN, aligned_edge=LEFT, buff=0.22)
        self.play(Create(g_graph), FadeIn(g_eq), run_time=1.4)
        self.play(Indicate(g_graph, color="#34d399", scale_factor=1.03), run_time=0.8)
        self.wait(0.25)

        for (dot, tag, d, col) in marks:
            t = Text(tag, font_size=20, color=col).next_to(dot, _DIRS[d], buff=0.25)
            if t.width > 5.4:
                t.scale_to_fit_width(5.4)
            self.play(FadeIn(t), dot.animate.scale(1.4), run_time=0.6)
            self.wait(0.3)
            self.play(dot.animate.scale(1 / 1.4), run_time=0.2)

        if C.get("note"):
            note = Text(C["note"], font_size=20, color="#64748b").to_corner(UR).shift(DOWN * 0.12 + LEFT * 0.12)
            self.play(FadeIn(note), run_time=0.6)
            self.wait(0.3)

        conclusion = Text(C["conclusion"], font_size=26, color=INK, weight=BOLD).to_edge(DOWN, buff=0.32)
        if conclusion.width > 12:
            conclusion.scale_to_fit_width(12)
        box = SurroundingRectangle(conclusion, color="#1b7a44", buff=0.16, corner_radius=0.08)
        self.play(FadeIn(conclusion), Create(box), run_time=1.0)
        self.wait(1.5)


class GCFExample2(_GCFBase):
    cfg = {
        "orig_fn": lambda x: 12 * x**3 - 8 * x**2,
        "orig_eq": "y = 12x³ − 8x²",
        "fact_fn": lambda x: 4 * x**2 * (3 * x - 2),
        "fact_eq": "y = 4x²(3x − 2)",
        "x_range": [-0.8, 1.2, 0.5],
        "y_range": [-4, 7, 2],
        "plot_x": [-0.7, 1.05],
        "roots": [(0, TEAL_, "4x² = 0  →  x = 0", "UL"), (2 / 3, ORANGE_, "3x − 2 = 0  →  x = 2/3", "UR")],
        "conclusion": "12x³ − 8x²  =  4x²(3x − 2)",
    }


class GCFExample3(_GCFBase):
    cfg = {
        "orig_fn": lambda x: x**3 + 2 * x**2 + 3 * x + 6,
        "orig_eq": "y = x³ + 2x² + 3x + 6",
        "fact_fn": lambda x: (x + 2) * (x**2 + 3),
        "fact_eq": "y = (x + 2)(x² + 3)",
        "x_range": [-3.2, 1.2, 1],
        "y_range": [-14, 14, 4],
        "plot_x": [-3, 1],
        "roots": [(-2, ORANGE_, "x + 2 = 0  →  x = −2", "UR")],
        "note": "x² + 3 ≠ 0  →  no other real root",
        "conclusion": "x³ + 2x² + 3x + 6  =  (x + 2)(x² + 3)",
    }


class GCFExample4(_GCFBase):
    cfg = {
        "orig_fn": lambda x: 2 * x**3 + 6 * x**2 + x + 3,
        "orig_eq": "y = 2x³ + 6x² + x + 3",
        "fact_fn": lambda x: (x + 3) * (2 * x**2 + 1),
        "fact_eq": "y = (x + 3)(2x² + 1)",
        "x_range": [-3.6, 0.8, 1],
        "y_range": [-14, 12, 4],
        "plot_x": [-3.5, 0.6],
        "roots": [(-3, ORANGE_, "x + 3 = 0  →  x = −3", "UR")],
        "note": "2x² + 1 ≠ 0  →  no other real root",
        "conclusion": "2x³ + 6x² + x + 3  =  (x + 3)(2x² + 1)",
    }


class GCFExample5(_GCFBase):
    cfg = {
        "orig_fn": lambda x: 2 * x**3 - 8 * x,
        "orig_eq": "y = 2x³ − 8x",
        "fact_fn": lambda x: 2 * x * (x - 2) * (x + 2),
        "fact_eq": "y = 2x(x − 2)(x + 2)",
        "x_range": [-2.6, 2.6, 1],
        "y_range": [-9, 9, 3],
        "plot_x": [-2.4, 2.4],
        "roots": [(-2, ORANGE_, "x = −2", "UL"), (0, TEAL_, "x = 0", "UR"), (2, ORANGE_, "x = 2", "UR")],
        "conclusion": "2x³ − 8x  =  2x(x − 2)(x + 2)",
    }
