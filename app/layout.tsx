import type { Metadata } from "next";
import { DM_Sans, Newsreader } from "next/font/google";
import "./globals.css";
import "./brand.css";

const display = Newsreader({ subsets: ["latin"], variable: "--font-display" });
const body = DM_Sans({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  metadataBase: new URL("https://yaleendowmentjustice.org"),
  title: { default: "Endowment Justice Collective", template: "%s | EJC" },
  description: "Organizing for democratic control, transparency, divestment, and reinvestment at Yale.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Yale’s money is everyone’s business.",
    description: "Join the Endowment Justice Collective at Yale.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Endowment Justice Collective" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${display.variable} ${body.variable}`}>{children}</body></html>;
}
