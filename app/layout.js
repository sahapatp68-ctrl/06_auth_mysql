import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./style.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DIT205 Auth MySQL — สหภัทร ไพบูลย์ธนธร (6804159)",
  description: "ระบบสมัครสมาชิกและ Login ด้วย Next.js และ MySQL",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="th"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="top-nav">
          <Link href="/" className="brand-link">
            <span>🔐 DIT205 Auth MySQL</span>
          </Link>
          <nav className="nav-links">
            <Link href="/">หน้าแรก</Link>
            <Link href="/register">สมัครสมาชิก</Link>
            <Link href="/login">เข้าสู่ระบบ</Link>
            <Link href="/dashboard">Dashboard</Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
