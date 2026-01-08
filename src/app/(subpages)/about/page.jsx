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
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/20 to-transparent" />
        <div className="absolute inset-0 bg-background/20 md:bg-transparent" />
      </div>

      {/* 3D Model */}
      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0 z-10 pointer-events-none">
        <RenderModel>
          <HatModel />
        </RenderModel>
      </div>

      {/* Hero Section */}
      <div className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center z-20"
        >
          {/* Name - Stylish Font */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-bold text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl bg-gradient-to-r from-accent via-accent/80 to-accent/60 bg-clip-text text-transparent leading-tight mb-4 md:mb-6 font-serif"
          >
            Anish Singh
          </motion.h1>

          {/* Role - Centered and Stylish */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-base xs:text-lg sm:text-xl md:text-2xl font-semibold text-foreground/80 tracking-wide px-2"
          >
            Full-Stack Developer | AI & ML Specialist
          </motion.p>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="w-20 h-1 bg-gradient-to-r from-transparent via-accent to-transparent my-6"
          />

          {/* Seeking Role */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-sm xs:text-base sm:text-lg md:text-xl text-foreground/70 font-medium px-2"
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