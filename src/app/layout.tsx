import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AuthProvider } from "@/providers/AuthProvider";
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
      <body className={cn(inter.className, "antialiased min-h-screen pt-1")}>
        {children}
      </body>
    </AuthProvider>
  </html>
);

export default RootLayout;
