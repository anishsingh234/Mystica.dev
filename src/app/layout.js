import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/fireFilesBackground";
import Footer from "@/components/footer";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Anish Singh | Full Stack Developer",
  description:
    "Full stack developer specializing in React, Next.js, Node.js, and AI/ML integration. Building modern web applications with clean code and great user experience.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter",
        )}
      >
        {children}
        <Script 
          src="https://chat-sathi.vercel.app/chatBot.js" 
          data-owner-id="usr_115500314898989325"
          strategy="afterInteractive"
        />
      
        <Footer />
        <FireFliesBackground />
      </body>
    </html>
  );
}
