import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/fireFilesBackground";
import Footer from "@/components/footer";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata= {
  title: "Mystica.dev | The Wizard’s Portfolio",
  description:
    "Step into Mystica.dev — a magical portfolio where code meets wizardry. Showcasing enchanting projects, creative spells of design, and the sorcery of development.",
   icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter"
        )}>{children}
        <Footer />
        <FireFliesBackground/>
        </body>
    </html>
  );
}
