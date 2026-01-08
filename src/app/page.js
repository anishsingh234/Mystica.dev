"use client";

import bg from "../../public/background/home-background.png"
import Image from "next/image";
import Navigation from "@/components/navigation";
import RenderModel from "@/components/RenderModel";
import Wizard from "@/components/models/Wizard";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code2, Zap, Sparkles } from "lucide-react";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <main className="relative w-full flex flex-col overflow-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 -z-50">
        <Image 
          src={bg} 
          alt="background-image" 
          fill 
          className="w-full h-full object-cover object-center opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5" />
      </div>

      {/* Navigation & 3D Model Section */}
      <div className="relative w-full h-screen md:h-[90vh] lg:h-screen flex flex-col">
        <Navigation />
        <RenderModel>
          <Wizard />
        </RenderModel>
      </div>

      {/* Hero Content Section */}
      <div className="relative w-full flex items-center justify-center px-3 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 min-h-screen">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-4xl w-full z-10"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex justify-center mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-accent/10 border border-accent/30 rounded-full">
              <Sparkles className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-accent" />
              <span className="text-xs sm:text-sm font-medium text-accent">Welcome to my portfolio</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants} className="text-center mb-6 sm:mb-8 md:mb-10">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-accent via-accent/80 to-accent/60 bg-clip-text text-transparent block">
                Hello, I&apos;m a
              </span>
              <span className="text-foreground block mt-2 sm:mt-3">Developer & Builder</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="text-center text-sm xs:text-base sm:text-lg md:text-xl text-foreground/70 mb-10 sm:mb-14 md:mb-16 max-w-2xl mx-auto leading-relaxed"
          >
            I create fast, modern websites and apps with React and Next.js. I also use AI and machine learning to build smart solutions that solve real problems.
          </motion.p>

          {/* Feature Cards */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20 w-full"
          >
            {/* Card 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="group p-5 sm:p-6 md:p-7 bg-gradient-to-br from-accent/8 via-accent/5 to-transparent border border-accent/20 hover:border-accent/40 rounded-xl sm:rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-2.5 sm:p-3 bg-accent/15 rounded-lg group-hover:bg-accent/25 transition-colors duration-300">
                  <Code2 className="w-5 sm:w-6 h-5 sm:h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground">Web Development</h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-foreground/65 leading-relaxed">
                Build fast, responsive websites with React and Next.js. Clean code, great design, and smooth performance.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="group p-5 sm:p-6 md:p-7 bg-gradient-to-br from-accent/8 via-accent/5 to-transparent border border-accent/20 hover:border-accent/40 rounded-xl sm:rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-2.5 sm:p-3 bg-accent/15 rounded-lg group-hover:bg-accent/25 transition-colors duration-300">
                  <Zap className="w-5 sm:w-6 h-5 sm:h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground">AI & ML Integration</h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-foreground/65 leading-relaxed">
                Add smart features with AI and machine learning. Make apps smarter and more efficient.
              </p>
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center items-center flex-wrap"
          >
            <Link
              href="/about"
              className="group px-5 sm:px-7 md:px-8 py-2.5 sm:py-3 md:py-3.5 bg-accent hover:bg-accent/90 text-background font-semibold rounded-lg sm:rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 hover:scale-105 flex items-center gap-2 text-sm sm:text-base"
            >
              My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/projects"
              className="px-5 sm:px-7 md:px-8 py-2.5 sm:py-3 md:py-3.5 bg-foreground/8 hover:bg-foreground/15 text-foreground font-semibold rounded-lg sm:rounded-xl border border-foreground/20 transition-all duration-300 hover:scale-105 text-sm sm:text-base hover:shadow-lg"
            >
              Projects
            </Link>

            <Link
              href="/contact"
              className="px-5 sm:px-7 md:px-8 py-2.5 sm:py-3 md:py-3.5 bg-foreground/8 hover:bg-foreground/15 text-foreground font-semibold rounded-lg sm:rounded-xl border border-foreground/20 transition-all duration-300 hover:scale-105 text-sm sm:text-base hover:shadow-lg"
            >
              Contact
            </Link>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            variants={itemVariants}
            className="mt-14 sm:mt-16 md:mt-20 pt-12 sm:pt-14 md:pt-16 border-t border-foreground/10"
          >
            <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-10 text-center">
              <div className="hover:scale-105 transition-transform duration-300">
                <p className="text-xl sm:text-3xl md:text-4xl font-bold text-accent mb-1 sm:mb-2">7+</p>
                <p className="text-xs sm:text-sm text-foreground/60">Projects</p>
              </div>
              <div className="hover:scale-105 transition-transform duration-300">
                <p className="text-xl sm:text-3xl md:text-4xl font-bold text-accent mb-1 sm:mb-2">350+</p>
                <p className="text-xs sm:text-sm text-foreground/60">LeetCode Problems Solved</p>
              </div>
              <div className="hover:scale-105 transition-transform duration-300">
                <p className="text-xl sm:text-3xl md:text-4xl font-bold text-accent mb-1 sm:mb-2">3+</p>
                <p className="text-xs sm:text-sm text-foreground/60">Tech Stack</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
