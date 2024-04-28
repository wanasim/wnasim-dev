import type { Metadata } from "next";
import Image from "next/image";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Profile from "@/components/Profile";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";

const inter = Inter({
  subsets: ["latin"],
});

const local = localFont({
  src: "./local_font.woff2",
});

export const metadata: Metadata = {
  title: "Walid Nasim \u00B7 Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${local.className} ${inter.className}} flex h-[10000px] bg-black`}
      >
        <div className="flex w-full">
          <div className="fixed inset-0 flex h-full justify-center sm:px-8">
            <div className="flex w-full max-w-7xl lg:px-8">
              <div className="relative h-full w-full ring-2 bg-zinc-900 ring-zinc-300/20 px-12"></div>
            </div>
          </div>
          <div className="relative flex w-full flex-col">
            <Header />
            <main className="flex-auto">
              <div className="relative top-10 sm:px-8 -mb-3">
                <div className="mx-auto w-full max-w-7xl lg:px-8">
                  <Profile />
                  {children}
                </div>
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
