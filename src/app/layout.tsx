import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Transilience AI",
  description:
    "Can Defenders ever focus on What Matters? In the realm of cybersecurity, an open secret looms large over our collective endeavor to safeguard our company assets: the persistent shadow of inevitability. &quot;At some point, attackers will breach...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
