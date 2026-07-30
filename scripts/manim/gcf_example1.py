"""Manim scene: Example 1 — factor 6x² + 9x = 3x(2x + 3), told with graphs.

Uses Text (not MathTex) so LaTeX is not required on Windows.

Run from repo root:
  manim -qm --format=mp4 -o gcf_example1.mp4 scripts/manim/gcf_example1.py GCFExample1
Then copy media/.../gcf_example1.mp4 → public/videos/gcf-example1.mp4
"""
from manim import *


class GCFExample1(Scene):
    def construct(self):
        self.camera.background_color = "#f8fafc"

        axes = Axes(
            x_range=[-3.2, 1.8, 1],
            y_range=[-5, 9, 2],
            x_length=10,
            y_length=5.6,
            axis_config={
                "color": "#94a3b8",
                "stroke_width": 2,
                "include_tip": True,
                "tip_length": 0.18,
            },
            tips=True,
        ).shift(DOWN * 0.15)

        x_label = Text("x", font_size=28, color="#475569").next_to(axes.x_axis.get_end(), RIGHT, buff=0.15)
        y_label = Text("y", font_size=28, color="#475569").next_to(axes.y_axis.get_end(), UP, buff=0.15)

        f_graph = axes.plot(lambda x: 6 * x**2 + 9 * x, x_range=[-2.8, 1.2], color="#2563eb", stroke_width=5)
        f_eq = Text("y = 6x² + 9x", font_size=30, color="#2563eb", weight=BOLD)
        f_eq.to_corner(UL).shift(RIGHT * 0.15 + DOWN * 0.08)

        self.play(Create(axes), FadeIn(x_label), FadeIn(y_label), run_time=1.0)
        self.play(Create(f_graph), FadeIn(f_eq), run_time=1.6)
        self.wait(0.35)

        # Roots: x = 0 and x = -3/2
        root0 = Dot(axes.c2p(0, 0), color="#0d9488", radius=0.1)
        root_neg = Dot(axes.c2p(-1.5, 0), color="#ea580c", radius=0.1)
        vline0 = DashedLine(
            axes.c2p(0, -5),
            axes.c2p(0, 8),
            color="#0d9488",
            stroke_width=2.5,
            dash_length=0.12,
        )
        vline_neg = DashedLine(
            axes.c2p(-1.5, -5),
            axes.c2p(-1.5, 8),
            color="#ea580c",
            stroke_width=2.5,
            dash_length=0.12,
        )

        self.play(Create(vline0), FadeIn(root0), run_time=0.75)
        self.play(Create(vline_neg), FadeIn(root_neg), run_time=0.75)
        self.wait(0.25)

        # Same parabola from factored form
        g_graph = axes.plot(
            lambda x: 3 * x * (2 * x + 3),
            x_range=[-2.8, 1.2],
            color="#059669",
            stroke_width=6,
        )
        g_eq = Text("y = 3x(2x + 3)", font_size=30, color="#059669", weight=BOLD)
        g_eq.next_to(f_eq, DOWN, aligned_edge=LEFT, buff=0.22)

        self.play(Create(g_graph), FadeIn(g_eq), run_time=1.4)
        self.play(Indicate(g_graph, color="#34d399", scale_factor=1.04), run_time=0.85)
        self.wait(0.3)

        # Graph callouts at the roots (short, graph-anchored)
        tag0 = Text("3x = 0  →  x = 0", font_size=22, color="#0d9488")
        tag0.next_to(root0, UR, buff=0.28)
        tag_neg = Text("2x + 3 = 0  →  x = −3/2", font_size=20, color="#ea580c")
        tag_neg.next_to(root_neg, UL, buff=0.22)

        self.play(FadeIn(tag0), root0.animate.scale(1.45), run_time=0.75)
        self.wait(0.45)
        self.play(root0.animate.scale(1 / 1.45), run_time=0.25)
        self.play(FadeIn(tag_neg), root_neg.animate.scale(1.45), run_time=0.75)
        self.wait(0.45)
        self.play(root_neg.animate.scale(1 / 1.45), run_time=0.25)

        # Closing identity under the graph
        conclusion = Text("6x² + 9x  =  3x(2x + 3)", font_size=28, color="#0f172a", weight=BOLD)
        conclusion.to_edge(DOWN, buff=0.32)
        box = SurroundingRectangle(conclusion, color="#1b7a44", buff=0.16, corner_radius=0.08)

        self.play(FadeIn(conclusion), Create(box), run_time=1.0)
        self.wait(1.5)
