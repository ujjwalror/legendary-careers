import type { Metadata } from "next";
import "./globals.css";
import { AiChatbot } from "@/components/AiChatbot";

export const metadata: Metadata = {
  title: "Legendary Careers | Study Abroad & Migration Consultants",
  description: "Your trusted migration agency for overseas university admissions, student visas, permanent residency, and skill assessments worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col font-body bg-[#F4F8FC] text-[#061D38] antialiased relative">
        {children}
        <AiChatbot />
      </body>
    </html>
  );
}
