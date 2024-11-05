import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Andika Luhur Pambudi | Web Developer Portfolio",
  description:
    "Welcome to Andika Luhur Pambudi's portfolio, showcasing innovative web development projects, and full-stack solutions. Let's build impactful digital experiences together.",
  keywords: [
    "web development",
    "portfolio",
    "React",
    "Tailwind CSS",
    "full-stack developer",
    "frontend",
    "backend",
    "Andika Luhur Pambudi",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
