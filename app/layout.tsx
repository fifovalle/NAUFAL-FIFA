import "@/app/globals.css";
import type { Metadata } from "next";
import { Sometype_Mono } from "next/font/google";
// Components
import Header from "@/components/Header";
import { Toaster } from "react-hot-toast";
import MainNav from "@/components/MainNav";
import Gradient from "@/components/Gradient";
import AudioPlayer from "@/components/AudioPlayer";
import PageTransition from "@/components/PageTransition";
import RectangleTransition from "@/components/RectangleTransition";

const someTypeMono = Sometype_Mono({
  variable: "--font-sometypeMono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Naufal FIFA | Full-Stack Web Developer (Next.js, React, Node.js)",
  description:
    "Hi, I'm Naufal FIFA, a Full-Stack Cross-Platform Developer specializing in scalable web applications using Next.js, React, and Node.js. Experienced in system architecture and real-world deployments.",
  keywords: [
    "Naufal FIFA",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Web Developer Indonesia",
    "Cross Platform Developer",
  ],
  authors: [{ name: "Naufal FIFA" }],
  creator: "Naufal FIFA",
  openGraph: {
    title: "Naufal FIFA | Full-Stack Developer",
    description:
      "Portfolio of Naufal FIFA, Full-Stack Developer focused on scalable and maintainable web applications.",
    url: "https://naufal-fifa.is-a.dev/",
    siteName: "Naufal FIFA Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Naufal FIFA Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${someTypeMono.variable} antialiased overflow-hidden relative`}
      >
        {/* =============== BACKSOUND MUSIC (GLOBAL, hanya sekali) ================ */}
        <AudioPlayer />

        {/* =============== GRADIENT ================ */}
        <Gradient />
        {/* =============== RECTANGLES TRANSITION ================ */}
        <RectangleTransition />
        {/* =============== PAGE TRANSITION ================ */}
        <PageTransition>
          {/* =============== WRAPPER ================ */}
          <div className="flex">
            {/* ============ MAIN NAV ============ */}
            <div className="hidden 2xl:flex w-71.25 h-screen bg-secondary">
              <MainNav />
            </div>

            {/* =============== CONTENT ================ */}
            <div className="w-full max-w-282.5 px-3.75 mx-auto">
              {/* ============== HEADER ================ */}
              <Header />
              {/* =============== CHILDREN ================ */}
              {children}
              <Toaster position="top-right" />
            </div>
          </div>
        </PageTransition>
      </body>
    </html>
  );
}
