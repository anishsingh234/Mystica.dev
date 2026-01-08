"use client";
import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";
import { motion } from "framer-motion";
import { Code2, Zap, Layers, Clock, Award, Rocket } from "lucide-react";

const AboutDetails = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-12 xs:py-16 md:py-24 lg:py-28 w-full px-4 sm:px-6 lg:px-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        {/* Hero Bio Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-12 gap-6 md:gap-8 w-full mb-16"
        >
          {/* Hero Bio Section */}
          <motion.div
            variants={itemVariants}
            className="col-span-full"
          >
            <ItemLayout className="flex-col items-start">
              <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 xs:mb-6 leading-tight">
                <span className="bg-gradient-to-r from-accent via-accent/80 to-accent/60 bg-clip-text text-transparent">
                  Full-Stack Developer
                </span>
                <br />
                <span className="text-foreground">& AI Enthusiast</span>
              </h2>
              <p className="text-base xs:text-lg text-foreground/70 leading-relaxed mb-4 xs:mb-6 max-w-2xl">
                I craft beautiful, scalable web applications with a focus on <span className="text-accent font-semibold">AI-powered solutions</span>. Currently pursuing B.Tech in CS (AI & ML) and building production-grade applications that solve real-world problems.
              </p>
              <div className="flex flex-wrap gap-2 xs:gap-3 w-full">
                <Link
                  href="https://github.com/anishsingh234"
                  target="_blank"
                  className="px-4 xs:px-6 py-2 text-sm xs:text-base bg-accent/10 hover:bg-accent/20 border border-accent/30 rounded-lg text-accent font-medium transition-all duration-300 hover:scale-105"
                >
                  GitHub
                </Link>
                <Link
                  href="https://linkedin.com/in/anish-ai"
                  target="_blank"
                  className="px-4 xs:px-6 py-2 text-sm xs:text-base bg-foreground/5 hover:bg-foreground/10 border border-foreground/20 rounded-lg text-foreground font-medium transition-all duration-300 hover:scale-105"
                >
                  LinkedIn
                </Link>
                <Link
                  href="mailto:anishsingh210204@gmail.com"
                  className="px-4 xs:px-6 py-2 text-sm xs:text-base bg-foreground/5 hover:bg-foreground/10 border border-foreground/20 rounded-lg text-foreground font-medium transition-all duration-300 hover:scale-105"
                >
                  Email
                </Link>
              </div>
            </ItemLayout>
          </motion.div>
        </motion.div>

        {/* Key Stats - Modern Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-4 md:gap-6 w-full mb-12 xs:mb-16"
        >
          {/* Stat Card 1 */}
          <motion.div variants={itemVariants}>
            <ItemLayout className="flex-col items-center justify-center text-center h-full">
              <div className="mb-3 xs:mb-4 p-2 xs:p-3 bg-accent/10 rounded-lg">
                <Code2 className="w-5 xs:w-6 h-5 xs:h-6 text-accent" />
              </div>
              <h3 className="text-xl xs:text-2xl md:text-3xl font-bold text-accent mb-1">7+</h3>
              <p className="text-xs xs:text-sm text-foreground/70">Projects Shipped</p>
            </ItemLayout>
          </motion.div>

          {/* Stat Card 2 */}
          <motion.div variants={itemVariants}>
            <ItemLayout className="flex-col items-center justify-center text-center h-full">
              <div className="mb-3 xs:mb-4 p-2 xs:p-3 bg-accent/10 rounded-lg">
                <Zap className="w-5 xs:w-6 h-5 xs:h-6 text-accent" />
              </div>
              <h3 className="text-xl xs:text-2xl md:text-3xl font-bold text-accent mb-1">350+</h3>
              <p className="text-xs xs:text-sm text-foreground/70">leetcode problem solved</p>
            </ItemLayout>
          </motion.div>

          {/* Stat Card 3 */}
          <motion.div variants={itemVariants}>
            <ItemLayout className="flex-col items-center justify-center text-center h-full">
              <div className="mb-3 xs:mb-4 p-2 xs:p-3 bg-accent/10 rounded-lg">
                <Clock className="w-5 xs:w-6 h-5 xs:h-6 text-accent" />
              </div>
              <h3 className="text-xl xs:text-2xl md:text-3xl font-bold text-accent mb-1">Fresher</h3>
              <p className="text-xs xs:text-sm text-foreground/70">Ready to Learn</p>
            </ItemLayout>
          </motion.div>

          {/* Stat Card 4 */}
          <motion.div variants={itemVariants}>
            <ItemLayout className="flex-col items-center justify-center text-center h-full">
              <div className="mb-3 xs:mb-4 p-2 xs:p-3 bg-accent/10 rounded-lg">
                <Rocket className="w-5 xs:w-6 h-5 xs:h-6 text-accent" />
              </div>
              <h3 className="text-xl xs:text-2xl md:text-3xl font-bold text-accent mb-1">Full Stack </h3>
              <p className="text-xs xs:text-sm text-foreground/70">Developer</p>
            </ItemLayout>
          </motion.div>
        </motion.div>

        {/* About Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full mb-12 xs:mb-16"
        >
          {/* Education & Background */}
          <motion.div variants={itemVariants} className="col-span-full lg:col-span-6">
            <ItemLayout className="flex-col items-start">
              <div className="flex items-center gap-2 xs:gap-3 mb-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Award className="w-4 xs:w-5 h-4 xs:h-5 text-accent" />
                </div>
                <h3 className="text-lg xs:text-xl font-bold text-accent">Education</h3>
              </div>
              <div className="space-y-3 xs:space-y-4 w-full">
                <div className="pb-3 xs:pb-4 border-b border-foreground/10">
                  <p className="font-semibold text-foreground text-sm xs:text-base mb-1">B.Tech in Computer Science</p>
                  <p className="text-xs xs:text-sm text-foreground/70">Uttarakhand Technical University</p>
                  <p className="text-xs text-accent mt-1">AI & ML Specialization | Graduating 2026</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm xs:text-base mb-1">Software Trainee</p>
                  <p className="text-xs xs:text-sm text-foreground/70">ExplorIn Academy</p>
                  <p className="text-xs text-accent mt-1">Full-Stack Development | Production Applications</p>
                </div>
              </div>
            </ItemLayout>
          </motion.div>

          {/* Core Expertise */}
          <motion.div variants={itemVariants} className="col-span-full lg:col-span-6">
            <ItemLayout className="flex-col items-start">
              <div className="flex items-center gap-2 xs:gap-3 mb-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Layers className="w-4 xs:w-5 h-4 xs:h-5 text-accent" />
                </div>
                <h3 className="text-lg xs:text-xl font-bold text-accent">Core Expertise</h3>
              </div>
              <div className="grid grid-cols-2 gap-2 xs:gap-3 w-full">
                {[
                  "Full-Stack Development",
                  "AI & Machine Learning",
                  "Next.js & React",
                  "Backend Development",
                  "GraphQL & APIs",
                  "Three.js",
                ].map((skill, idx) => (
                  <div
                    key={idx}
                    className="px-2 xs:px-3 py-2 bg-accent/5 hover:bg-accent/10 rounded-lg border border-accent/20 transition-all duration-300"
                  >
                    <p className="text-xs xs:text-sm font-medium text-foreground">{skill}</p>
                  </div>
                ))}
              </div>
            </ItemLayout>
          </motion.div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="col-span-full mb-12 xs:mb-16"
        >
          <motion.div variants={itemVariants}>
            <ItemLayout className="flex-col items-start">
              <h3 className="text-xl xs:text-2xl font-bold text-accent mb-4 xs:mb-6">Technology Stack</h3>
              <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-2 xs:gap-3 md:gap-4 w-full">
                {[
                  { name: "React", emoji: "⚛️" },
                  { name: "Next.js", emoji: "▲" },
                  { name: "TypeScript", emoji: "📘" },
                  { name: "Python", emoji: "🐍" },
                  { name: "MongoDB", emoji: "🍃" },
                  { name: "GraphQL", emoji: "⚡" },
                  { name: "Prisma", emoji: "🔐" },
                  { name: "ConvexDB", emoji: "🔄" },
                  { name: "Tailwind", emoji: "🎨" },
                  { name: "Node.js", emoji: "🟢" },
                  { name: "Git", emoji: "📦" },
                  { name: "Vercel", emoji: "▲" },
                ].map((tech, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -4, scale: 1.05 }}
                    className="p-2 xs:p-3 md:p-4 bg-foreground/5 hover:bg-accent/10 border border-foreground/10 hover:border-accent/30 rounded-lg text-center transition-all duration-300"
                  >
                    <p className="text-lg xs:text-xl md:text-2xl mb-1">{tech.emoji}</p>
                    <p className="text-xs font-medium text-foreground">{tech.name}</p>
                  </motion.div>
                ))}
              </div>
            </ItemLayout>
          </motion.div>
        </motion.div>

        {/* Highlighted Projects Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="col-span-full mb-12 xs:mb-16"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-xl xs:text-2xl font-bold text-accent mb-4 xs:mb-6">Featured Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xs:gap-6">
              {[
                {
                  title: "HealSync",
                  desc: "Healthcare appointment platform with doctor dashboards and video consultations",
                  tech: ["Next.js", "Prisma", "MongoDB"],
                  icon: "🏥",
                },
                {
                  title: "DarkStore IMS",
                  desc: "Enterprise inventory management with real-time analytics and dashboards",
                  tech: ["React", "GraphQL", "Recharts"],
                  icon: "📊",
                },
                {
                  title: "Trip Bandhu",
                  desc: "AI-powered trip planner using Mistral AI for personalized itineraries",
                  tech: ["Next.js", "ConvexDB", "AI"],
                  icon: "✈️",
                },
              ].map((project, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -12 }}
                  className="p-4 xs:p-6 bg-gradient-to-br from-accent/10 via-background/50 to-background rounded-xl border border-accent/20 hover:border-accent/40 transition-all duration-300"
                >
                  <p className="text-2xl xs:text-3xl mb-2 xs:mb-3">{project.icon}</p>
                  <h4 className="text-base xs:text-lg font-bold text-accent mb-2">{project.title}</h4>
                  <p className="text-xs xs:text-sm text-foreground/70 mb-3 xs:mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="col-span-full"
        >
          <motion.div variants={itemVariants}>
            <ItemLayout className="flex-col items-center justify-center text-center bg-gradient-to-r from-accent/10 to-accent/5">
              <p className="text-base xs:text-lg font-semibold text-accent mb-3 xs:mb-4">Let&apos;s Build Something Amazing</p>
              <p className="text-foreground/70 mb-4 xs:mb-6 max-w-xl text-sm xs:text-base">
                I&apos;m always interested in hearing about new projects and opportunities in web development and AI.
              </p>
              <div className="flex flex-wrap gap-2 xs:gap-3 justify-center">
                <Link
                  href="mailto:anishsingh210204@gmail.com"
                  className="px-6 xs:px-8 py-2 xs:py-3 text-sm xs:text-base bg-accent hover:bg-accent/90 text-background font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                >
                  Get In Touch
                </Link>
                <Link
                  href="/projects"
                  className="px-6 xs:px-8 py-2 xs:py-3 text-sm xs:text-base bg-foreground/10 hover:bg-foreground/20 text-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                >
                  View Projects
                </Link>
              </div>
            </ItemLayout>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};


export default AboutDetails;
