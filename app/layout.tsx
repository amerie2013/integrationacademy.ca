import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const DESC = "Math Simplified, Success Amplified. Interactive lessons, auto-graded quizzes, worksheets, math games, and a teaching whiteboard for Grade 9–12, college, and university.";

export const metadata: Metadata = {
  metadataBase: new URL("https://integrationacademy.ca"),
  title: "Integration Academy — High School & University Math",
  description: DESC,
  applicationName: "Integration Academy",
  icons: { icon: "/logo-mark.png", shortcut: "/logo-mark.png", apple: "/logo-mark.png" },
  openGraph: {
    title: "Integration Academy — High School & University Math",
    description: DESC,
    url: "https://integrationacademy.ca",
    siteName: "Integration Academy",
    images: [{ url: "/Logo.png", width: 258, height: 252, alt: "Integration Academy" }],
    type: "website",
    locale: "en_CA",
  },
  twitter: { card: "summary", title: "Integration Academy", description: DESC, images: ["/Logo.png"] },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1b7a44",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
