import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Course Catalog Lab',
  description: 'Advanced Web Technologies Lab',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 min-h-screen text-gray-900`}>
        {/* Общая навигация для всех страниц */}
        <header className="border-b border-slate-200 bg-white">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <span className="font-bold text-lg text-blue-600">AWT Lab</span>
            <div className="flex gap-4 font-medium text-sm">
              <Link href="/" className="px-3 py-2 rounded-md hover:bg-slate-100 transition">
                Home
              </Link>
              <Link href="/courses" className="px-3 py-2 rounded-md hover:bg-slate-100 transition">
                Courses
              </Link>
              <Link href="/filter" className="px-3 py-2 rounded-md hover:bg-slate-100 transition">
                Filter
              </Link>
              <Link href="/about" className="px-3 py-2 rounded-md hover:bg-slate-100 transition">
                About
              </Link>
            </div>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}