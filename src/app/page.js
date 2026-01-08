"use client";

import bg from "../../public/background/home-background.png"
import Image from "next/image";
import Navigation from "@/components/navigation";
import RenderModel from "@/components/RenderModel";
import Wizard from "@/components/models/Wizard";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code2, Zap } from "lucide-react";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <main className="relative w-full min-h-screen flex flex-col overflow-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 -z-50">
        <Image 
          src={bg} 
          alt="background-image" 
          fill 
          className="w-full h-full object-cover object-center opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/20 to-transparent" />
      </div>

      {/* Navigation & 3D Model Section */}
      <div className="relative w-full h-screen flex flex-col">
        <Navigation />
        <RenderModel>
          <Wizard />
        </RenderModel>
      </div>

      {/* Hero Content Section */}
      <div className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-5xl w-full z-10"
        >
          {/* Main Heading */}
          <motion.div variants={itemVariants} className="text-center mb-8 xs:mb-12">
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-4 xs:mb-6">
              <span className="bg-gradient-to-r from-accent via-accent/80 to-accent/60 bg-clip-text text-transparent">
                Crafting Digital Experiences
              </span>
              <br />
              <span className="text-foreground">With Code & Creativity</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="text-center text-base xs:text-lg sm:text-xl text-foreground/70 mb-8 xs:mb-12 max-w-3xl mx-auto leading-relaxed px-2"
          >
            A passionate full-stack developer and AI/ML enthusiast building scalable web applications and intelligent solutions. Currently exploring the intersection of web development and artificial intelligence.
          </motion.p>

          {/* Feature Cards */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-6 mb-10 xs:mb-16 w-full"
          >
            {/* Card 1 */}
            <div className="p-4 xs:p-6 md:p-8 bg-gradient-to-br from-accent/10 to-background border border-accent/20 hover:border-accent/40 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-accent/20">
              <div className="flex items-center gap-3 xs:gap-4 mb-3 xs:mb-4">
                <div className="p-2 xs:p-3 bg-accent/20 rounded-lg">
                  <Code2 className="w-5 xs:w-6 h-5 xs:h-6 text-accent" />
                </div>
                <h3 className="text-lg xs:text-xl font-bold text-accent">Full-Stack Development</h3>
              </div>
              <p className="text-sm xs:text-base text-foreground/70 leading-relaxed">
                Building modern web applications with React, Next.js, and Node.js. Specializing in creating responsive, performant, and user-centric digital products.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-4 xs:p-6 md:p-8 bg-gradient-to-br from-accent/10 to-background border border-accent/20 hover:border-accent/40 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-accent/20">
              <div className="flex items-center gap-3 xs:gap-4 mb-3 xs:mb-4">
                <div className="p-2 xs:p-3 bg-accent/20 rounded-lg">
                  <Zap className="w-5 xs:w-6 h-5 xs:h-6 text-accent" />
                </div>
                <h3 className="text-lg xs:text-xl font-bold text-accent">AI & ML Solutions</h3>
              </div>
              <p className="text-sm xs:text-base text-foreground/70 leading-relaxed">
                Integrating AI and machine learning into web applications. Creating intelligent systems that solve real-world problems with data-driven insights.
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col xs:flex-row gap-3 xs:gap-4 justify-center items-center"
          >
            <Link
              href="/about"
              className="group px-6 xs:px-8 py-3 xs:py-4 bg-accent hover:bg-accent/90 text-background font-semibold rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-2 text-sm xs:text-base w-full xs:w-auto justify-center"
            >
              Explore My Work
              <ArrowRight className="w-4 xs:w-5 h-4 xs:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/projects"
              className="px-6 xs:px-8 py-3 xs:py-4 bg-foreground/10 hover:bg-foreground/20 text-foreground font-semibold rounded-lg border border-foreground/20 transition-all duration-300 hover:scale-105 text-sm xs:text-base w-full xs:w-auto text-center"
            >
              View Projects
            </Link>

            <Link
              href="/contact"
              className="px-6 xs:px-8 py-3 xs:py-4 bg-foreground/10 hover:bg-foreground/20 text-foreground font-semibold rounded-lg border border-foreground/20 transition-all duration-300 hover:scale-105 text-sm xs:text-base w-full xs:w-auto text-center"
            >
              Get In Touch
            </Link>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 xs:mt-16 pt-12 xs:pt-16 border-t border-foreground/10"
          >
            <div className="grid grid-cols-2 xs:grid-cols-3 gap-4 xs:gap-8 text-center">
              <div>
                <p className="text-2xl xs:text-3xl md:text-4xl font-bold text-accent mb-1 xs:mb-2">7+</p>
                <p className="text-xs xs:text-sm text-foreground/70">Projects Delivered</p>
              </div>
              <div>
                <p className="text-2xl xs:text-3xl md:text-4xl font-bold text-accent mb-1 xs:mb-2">350+</p>
                <p className="text-xs xs:text-sm text-foreground/70">Code Problems Solved</p>
              </div>
              <div>
                <p className="text-2xl xs:text-3xl md:text-4xl font-bold text-accent mb-1 xs:mb-2">3+</p>
                <p className="text-xs xs:text-sm text-foreground/70">Technologies Mastered</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
