import type { Metadata } from "next";
import { Geist, Geist_Mono, Sora } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Knowletive | Career Counselling & Admission Guidance",
  description:
    "Knowletive is a premier consulting firm helping students and professionals make confident career, education, and admission decisions. Book a free consultation today.",
  keywords: [
    "career counselling",
    "admission guidance",
    "CAT counselling",
    "MBA admission",
    "Knowletive",
    "career consulting Pune",
  ],
  openGraph: {
    title: "Knowletive | Where Ambition Meets Expert Guidance",
    description:
      "Career counselling, overseas education, and business excellence guidance. Book your free consultation today.",
    siteName: "Knowletive",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Knowletive | Where Ambition Meets Expert Guidance",
    description:
      "Career counselling, overseas education, and business excellence guidance.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}