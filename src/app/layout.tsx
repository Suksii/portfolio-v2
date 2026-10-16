import type { Metadata } from "next";
import { Space_Grotesk, Inter, Caveat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { profile, siteUrl } from "@/lib/data";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const hand = Caveat({
  variable: "--font-hand",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const title = `${profile.name} — ${profile.roles[0]}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  title,
  description: profile.tagline,
  keywords: [
    "Šućo Ramović",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Montenegro",
    "Portfolio",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title,
    description: profile.tagline,
    type: "website",
    url: "/",
    siteName: profile.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: profile.tagline,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${sans.variable} ${hand.variable} h-full`}
    >
      <body className="min-h-full">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
