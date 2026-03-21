"use client";
import dynamic from "next/dynamic";
import AboutDetails from "@/components/about";
import { motion } from "framer-motion";

// Dynamically import 3D components — they can't run during SSR/prerendering
const RenderModel = dynamic(() => import("@/components/RenderModel"), { ssr: false });
const HatModel = dynamic(() => import("@/components/models/HatModel"), { ssr: false });

export default function About() {
  return (
    <>
      {/* Premium procedural background — matching projects page */}
      <div className="fixed inset-0 -z-50 bg-[#0a0a0f]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,119,198,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.07),transparent_45%)]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
      </div>

      {/* 3D Model */}
      <div className="w-full h-2/3 sm:h-3/4 md:h-screen absolute top-1/2 -translate-y-1/2 left-0 z-10 pointer-events-none">
        <RenderModel>
          <HatModel />
        </RenderModel>
      </div>

      {/* Hero Section */}
      <div className="relative w-full min-h-screen flex flex-col items-center justify-center py-16 sm:py-20 md:py-24 px-3 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center z-20 max-w-3xl"
        >
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-bold text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gradient leading-tight mb-3 sm:mb-4 md:mb-6"
          >
            Anish Singh
          </motion.h1>

          {/* Role */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-sm xs:text-base sm:text-lg md:text-xl font-semibold text-foreground/80 tracking-wide px-2"
          >
            Full-Stack Developer | AI & ML Engineer
          </motion.p>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="w-16 sm:w-20 h-1 bg-gradient-to-r from-transparent via-purple-500/60 to-transparent my-4 sm:my-6"
          />

          {/* Seeking Role */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xs xs:text-sm sm:text-base md:text-lg text-foreground/70 font-medium px-2"
          >
            Seeking: <span className="text-purple-400 font-semibold">Software Engineer | Full-Stack Developer | AI/ML Engineer</span>
          </motion.p>
        </motion.div>
      </div>

      {/* About Details Section */}
      <AboutDetails />
    </>
  );
}