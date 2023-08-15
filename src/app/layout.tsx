import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AuthProvider } from "@/providers/AuthProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { cn } from "@/lib/utils";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quiz App",
  description: "A quiz app built with Next.js and Tailwind CSS",
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <AuthProvider>
      <body className={cn(inter.className, "antialiased min-h-screen pt-16")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </AuthProvider>
  </html>
);

export default RootLayout;
