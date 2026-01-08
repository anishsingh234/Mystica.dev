"use client";
import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import RenderModel from "@/components/RenderModel";
import AboutDetails from "@/components/about";
import HatModel from "@/components/models/HatModel";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      {/* Background */}
      <div className="fixed inset-0 -z-50">
        <Image
          src={bg}
          priority
          sizes="100vw"
          alt="About page background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5" />
        <div className="absolute inset-0 bg-background/10 md:bg-transparent" />
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
          {/* Name - Stylish Font */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-bold text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-accent via-accent/80 to-accent/60 bg-clip-text text-transparent leading-tight mb-3 sm:mb-4 md:mb-6 font-serif"
          >
            Anish Singh
          </motion.h1>

          {/* Role - Centered and Stylish */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-sm xs:text-base sm:text-lg md:text-xl font-semibold text-foreground/80 tracking-wide px-2"
          >
            Full-Stack Developer | AI & ML Specialist
          </motion.p>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="w-16 sm:w-20 h-1 bg-gradient-to-r from-transparent via-accent to-transparent my-4 sm:my-6"
          />

          {/* Seeking Role */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xs xs:text-sm sm:text-base md:text-lg text-foreground/70 font-medium px-2"
          >
            Seeking: <span className="text-accent font-semibold">Software Engineer | Full-Stack Developer | AI/ML Engineer</span>
          </motion.p>
        </motion.div>
      </div>

      {/* About Details Section */}
      <AboutDetails />
    </>
  );
}