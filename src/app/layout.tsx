import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar"
export const metadata: Metadata = {
  title: "codeLab | Learn AI, Data Science & Web Development",
  description:
    "codeLab offers practical, project-based learning in AI, Data Science, and Web Development. Learn from expert instructors, build real-world projects, and accelerate your career in tech.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={`relative w-full flex items-center justify-center`}>
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
