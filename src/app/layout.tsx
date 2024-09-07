import type { Metadata } from "next";
import { Overpass, Old_Standard_TT, Overpass_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/Home/theme-provider";
import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";
import TopologyWrap from "../components/Home/TopologyWrap";

// import { GoogleTagManager } from "@next/third-parties/google";
// import { SpeedInsights } from "@vercel/speed-insights/next";
// import { Analytics } from "@vercel/analytics/react";

// import { cn } from "@/lib/utils";

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
  title: "Zechen Yang | 杨泽辰",
  description: "Zechen Yang | 杨泽辰",
  keywords:
    "Zechen Yang, 杨泽辰, Young, UNSW",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_ANALYTICS_ID ?? ""} /> */}
      <body className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          // enableSystem
          disableTransitionOnChange
        >
          <TopologyWrap>
            <Navbar />
            <main className="font-sans flex-grow flex items-center justify-center w-full ">
              {children}
            </main>
            <Footer />
          </TopologyWrap>
        </ThemeProvider>
        {/* <SpeedInsights /> */}
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
