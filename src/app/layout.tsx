import type { Metadata } from "next";
import { Overpass, Old_Standard_TT, Overpass_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { ThemeProvider } from "../components/Home/theme-provider";
import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";
import TopologyWrap from "../components/Home/TopologyWrap";

const sans = Overpass({
  subsets: ["latin"],
  variable: "--font-sans",
});

const serif = Old_Standard_TT({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
});

const mono = Overpass_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Zechen Yang | Young",
  description:
    "AI-focused full-stack developer in Melbourne, building learning systems, CRM tools, and workflow automation.",
  keywords:
    "Zechen Yang, Young, full-stack developer, artificial intelligence, Next.js, React, Python, University of Melbourne, UNSW",
  icons: {
    icon: "/images/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <TopologyWrap>
            <Navbar />
            <main className="font-sans flex-grow flex items-center justify-center w-full">
              {children}
            </main>
            <Footer />
          </TopologyWrap>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
