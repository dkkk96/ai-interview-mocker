import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mockbot | AI Interview Mocker",
  description: "Explore Mockbot, the AI Interview Mocker designed to simulate job interviews effectively. Improve your interview skills with artificial intelligence.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <Toaster/>
      <body className={inter.className}>{children}</body>
    </html>
    </ClerkProvider>
  );
}
