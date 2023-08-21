import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { cn } from "@/lib/utils";
import { Providers } from "@/providers/Providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quiz App",
  description: "A quiz app built with Next.js and Tailwind CSS",
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <Providers>
      <body className={cn(inter.className, "antialiased min-h-screen pt-16")}>
        <Navbar />
        {children}
      </body>
    </Providers>
  </html>
);

export default RootLayout;
