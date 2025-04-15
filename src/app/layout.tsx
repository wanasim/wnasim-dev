import type { Metadata } from 'next';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/Header';
import Profile from '@/components/Profile';
import { BackgroundBeams } from '@/components/ui/BackgroundBeams';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
});

const local = localFont({
  src: './local_font.woff2',
});

export const metadata: Metadata = {
  title: 'Walid Nasim \u00B7 Software Engineer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${local.className} ${inter.className}} flex bg-zinc-900`}
      >
        <div className="relative flex h-[100vh] w-full flex-col">
          <Header />
          <main className="flex-auto">
            <div className="relative -mb-3 pt-10 sm:px-8">
              <div className="mx-auto w-full max-w-7xl lg:px-8">{children}</div>
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
