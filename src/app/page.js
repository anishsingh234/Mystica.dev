"use client";

import bg from "../../public/background/home-background.png"
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import RenderModel from "@/components/RenderModel";
import Wizard from "@/components/models/Wizard";
import { ArrowRight, Code2, Zap, Github, Linkedin, Mail, ExternalLink, Award, Layers, Clock, Rocket } from "lucide-react";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const skills = [
    "React", "Next.js", "TypeScript", "Node.js", "MongoDB",
    "TailwindCSS", "Prisma", "AI/ML", "C++", "Java"
  ];

  const techStack = [
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
  ];

  const featuredProjects = [
    {
      title: "HealSync",
      desc: "Healthcare appointment platform with doctor dashboards and video consultations",
      tech: ["Next.js", "Prisma", "MongoDB"],
      icon: "🏥",
      metrics: "Real-time booking system"
    },
    {
      title: "DarkStore IMS",
      desc: "Enterprise inventory management with real-time analytics and dashboards",
      tech: ["React", "GraphQL", "Recharts"],
      icon: "📊",
      metrics: "Full inventory tracking"
    },
    {
      title: "Trip Bandhu",
      desc: "AI-powered trip planner using Mistral AI for personalized itineraries",
      tech: ["Next.js", "ConvexDB", "AI"],
      icon: "✈️",
      metrics: "AI-powered suggestions"
    },
  ];

  const testimonials = [
    {
      name: "ExplorIn Academy",
      role: "Training Program",
      text: "Demonstrated strong problem-solving skills and quick learning ability in full-stack development.",
      avatar: "💼"
    },
    {
      name: "Open Source",
      role: "Community Contributor",
      text: "Active on GitHub with consistent contributions and well-documented projects.",
      avatar: "🌟"
    },
  ];

  return (
    <main className="relative w-full min-h-screen flex flex-col">
      {/* Background */}
      <div className="fixed inset-0 -z-50">
        <Image 
          src={bg} 
          alt="background-image" 
          fill 
          className="w-full h-full object-cover object-center opacity-10"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      {/* 3D Wizard Model - Floating in background */}
      <div className="fixed top-1/4 left-2 sm:left-10 w-72 h-72 sm:w-80 sm:h-80 xl:w-96 xl:h-96 pointer-events-none z-0 opacity-10 sm:opacity-15 xl:opacity-20 hidden lg:block">
        <RenderModel>
          <Wizard />
        </RenderModel>
      </div>

      {/* Simple Header Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/80 border-b border-foreground/10"
      >
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-lg sm:text-xl font-bold text-accent">
              Anish Singh
            </Link>
            <div className="hidden md:flex items-center gap-4 lg:gap-6">
              <a href="#about" className="text-sm font-medium hover:text-accent transition-colors">
                About
              </a>
              <Link href="/projects" className="text-sm font-medium hover:text-accent transition-colors">
                Projects
              </Link>
              <Link href="/contact" className="px-4 py-2 bg-accent text-background rounded-lg text-sm font-medium hover:bg-accent/90 transition-colors">
                Contact
              </Link>
            </div>
            {/* Mobile Menu */}
            <div className="flex md:hidden items-center gap-3">
              <a href="#about" className="text-xs font-medium hover:text-accent transition-colors">
                About
              </a>
              <Link href="/projects" className="text-xs font-medium hover:text-accent transition-colors">
                Projects
              </Link>
              <Link href="/contact" className="px-3 py-1.5 bg-accent text-background rounded-lg text-xs font-medium hover:bg-accent/90 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <div className="relative w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-20 min-h-screen">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-5xl w-full"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-accent">Available for work</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants} className="text-center mb-4 sm:mb-6">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-3 sm:mb-4 px-4">
              <span className="block text-foreground">Anish Singh</span>
              <span className="bg-gradient-to-r from-accent via-accent/80 to-accent/60 bg-clip-text text-transparent block mt-1 sm:mt-2">
                Full Stack Developer
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-foreground/80 font-medium px-4">
              AI & ML Specialist
            </p>
          </motion.div>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-center text-sm sm:text-base md:text-lg text-foreground/70 mb-8 sm:mb-12 max-w-2xl mx-auto px-4"
          >
            I build fast, modern web applications using React, Next.js, and Node.js. 
            I integrate AI/ML features and focus on clean code and great user experience.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-12 sm:mb-16 px-4 max-w-2xl mx-auto"
          >
            <Link
              href="/projects"
              className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-accent hover:bg-accent/90 text-background font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="/resume.pdf"
              download
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-foreground/10 hover:bg-foreground/15 text-foreground font-semibold rounded-lg border border-foreground/20 transition-all duration-300 hover:border-accent/30 text-center text-sm sm:text-base"
            >
              Download Resume
            </a>

            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-foreground/10 hover:bg-foreground/15 text-foreground font-semibold rounded-lg border border-foreground/20 transition-all duration-300 text-center text-sm sm:text-base"
            >
              Get in Touch
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center items-center gap-4 mb-20"
          >
            <a
              href="https://github.com/anishsingh234"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-foreground/5 hover:bg-foreground/10 rounded-lg border border-foreground/10 hover:border-accent/30 transition-all group"
            >
              <Github className="w-5 h-5 group-hover:text-accent transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/anish-ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-foreground/5 hover:bg-foreground/10 rounded-lg border border-foreground/10 hover:border-accent/30 transition-all group"
            >
              <Linkedin className="w-5 h-5 group-hover:text-accent transition-colors" />
            </a>
            <a
              href="https://codolio.com/profile/J3g5yuKI"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-foreground/5 hover:bg-foreground/10 rounded-lg border border-foreground/10 hover:border-accent/30 transition-all group"
            >
              <ExternalLink className="w-5 h-5 group-hover:text-accent transition-colors" />
            </a>
            <a
              href="mailto:anishsingh210204@gmail.com"
              className="p-3 bg-foreground/5 hover:bg-foreground/10 rounded-lg border border-foreground/10 hover:border-accent/30 transition-all group"
            >
              <Mail className="w-5 h-5 group-hover:text-accent transition-colors" />
            </a>
          </motion.div>

          {/* Skills Grid */}
          <motion.div variants={itemVariants} className="mb-16 sm:mb-20 px-4">
            <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">Tech Stack</h2>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-3xl mx-auto">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-foreground/5 hover:bg-accent/10 border border-foreground/10 hover:border-accent/30 rounded-lg text-xs sm:text-sm font-medium transition-all hover:scale-105"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* What I Do Section */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-16 sm:mb-20 px-4"
          >
            <div className="p-6 bg-gradient-to-br from-accent/5 to-transparent border border-accent/20 hover:border-accent/40 rounded-xl transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <Code2 className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold">Web Development</h3>
              </div>
              <p className="text-foreground/70 leading-relaxed">
                Build responsive, fast web applications with modern frameworks. 
                Clean architecture and optimized performance.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-accent/5 to-transparent border border-accent/20 hover:border-accent/40 rounded-xl transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold">AI Integration</h3>
              </div>
              <p className="text-foreground/70 leading-relaxed">
                Integrate AI and machine learning features into applications. 
                Smart solutions for complex problems.
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            variants={itemVariants}
            className="pt-8 sm:pt-12 border-t border-foreground/10 px-4"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
              <motion.div whileHover={{ scale: 1.05 }} className="transition-transform">
                <div className="mb-2 sm:mb-3 flex justify-center">
                  <div className="p-2 sm:p-3 bg-accent/10 rounded-lg">
                    <Code2 className="w-4 h-4 sm:w-6 sm:h-6 text-accent" />
                  </div>
                </div>
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-1 sm:mb-2">12+</p>
                <p className="text-xs sm:text-sm text-foreground/60">Projects Built</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="transition-transform">
                <div className="mb-2 sm:mb-3 flex justify-center">
                  <div className="p-2 sm:p-3 bg-accent/10 rounded-lg">
                    <Zap className="w-4 h-4 sm:w-6 sm:h-6 text-accent" />
                  </div>
                </div>
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-1 sm:mb-2">350+</p>
                <p className="text-xs sm:text-sm text-foreground/60">LeetCode Solved</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="transition-transform">
                <div className="mb-2 sm:mb-3 flex justify-center">
                  <div className="p-2 sm:p-3 bg-accent/10 rounded-lg">
                    <Github className="w-4 h-4 sm:w-6 sm:h-6 text-accent" />
                  </div>
                </div>
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-1 sm:mb-2">Active</p>
                <p className="text-xs sm:text-sm text-foreground/60">GitHub Profile</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="transition-transform">
                <div className="mb-2 sm:mb-3 flex justify-center">
                  <div className="p-2 sm:p-3 bg-accent/10 rounded-lg">
                    <Rocket className="w-4 h-4 sm:w-6 sm:h-6 text-accent" />
                  </div>
                </div>
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-1 sm:mb-2">Full Stack</p>
                <p className="text-xs sm:text-sm text-foreground/60">Developer</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* About Section */}
      <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Bio Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mb-20"
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-accent via-accent/80 to-accent/60 bg-clip-text text-transparent">
                  About Me
                </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-6"></div>
              <p className="text-base sm:text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto">
                I build scalable web applications with React, Next.js, and Node.js. I also work with AI and machine learning to create smart solutions. Currently pursuing B.Tech in CS (AI & ML), graduating in 2026.
              </p>
            </motion.div>

            {/* Education & Expertise Grid */}
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12"
            >
              {/* Education */}
              <motion.div 
                variants={itemVariants}
                className="p-6 bg-gradient-to-br from-accent/5 to-transparent border border-accent/20 rounded-xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Award className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-accent">Education</h3>
                </div>
                <div className="space-y-4">
                  <div className="pb-4 border-b border-foreground/10">
                    <p className="font-semibold text-foreground mb-1">B.Tech in Computer Science</p>
                    <p className="text-sm text-foreground/70">Uttarakhand Technical University</p>
                    <p className="text-xs text-accent mt-1">AI & ML Specialization | Graduating 2026</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Software Trainee</p>
                    <p className="text-sm text-foreground/70">ExplorIn Academy</p>
                    <p className="text-xs text-accent mt-1">Full-Stack Development | Production Applications</p>
                  </div>
                </div>
              </motion.div>

              {/* Core Expertise */}
              <motion.div 
                variants={itemVariants}
                className="p-6 bg-gradient-to-br from-accent/5 to-transparent border border-accent/20 rounded-xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Layers className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-accent">Core Expertise</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
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
                      className="px-3 py-2 bg-accent/5 hover:bg-accent/10 rounded-lg border border-accent/20 transition-all duration-300"
                    >
                      <p className="text-sm font-medium text-foreground">{skill}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Tech Stack Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mb-20"
          >
            <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-12 px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-accent">Technology Stack</h2>
              <p className="text-sm sm:text-base text-foreground/70">Tools and technologies I work with</p>
            </motion.div>
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4 px-4"
            >
              {techStack.map((tech, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -6, scale: 1.08 }}
                  className="p-3 sm:p-4 bg-foreground/5 hover:bg-accent/10 border border-foreground/10 hover:border-accent/30 rounded-lg text-center transition-all duration-300 cursor-pointer"
                >
                  <p className="text-xl sm:text-2xl mb-1">{tech.emoji}</p>
                  <p className="text-[10px] sm:text-xs font-medium text-foreground">{tech.name}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* GitHub Activity */}
            <motion.div variants={itemVariants} className="mt-12 text-center">
              <div className="p-6 bg-gradient-to-br from-accent/5 to-transparent border border-accent/20 rounded-xl inline-block">
                <p className="text-sm text-foreground/70 mb-2">Check out my coding activity</p>
                <a 
                  href="https://github.com/anishsingh234" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors"
                >
                  <Github className="w-5 h-5" />
                  View GitHub Profile
                  <ExternalLink className="w-4 h-4" />
                </a>
                <p className="text-xs text-foreground/60 mt-2">350+ LeetCode problems • Active contributor</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Featured Projects */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mb-20"
          >
            <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-12 px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-accent">Featured Projects</h2>
              <p className="text-sm sm:text-base text-foreground/70">Some of my recent work</p>
            </motion.div>
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 px-4"
            >
              {featuredProjects.map((project, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="p-6 bg-gradient-to-br from-accent/10 via-background/50 to-background rounded-xl border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
                >
                  <p className="text-3xl mb-3">{project.icon}</p>
                  <h4 className="text-lg font-bold text-accent mb-2">{project.title}</h4>
                  <p className="text-sm text-foreground/70 mb-3">{project.desc}</p>
                  <p className="text-xs text-accent/80 mb-4 italic">✨ {project.metrics}</p>
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
            </motion.div>
            <motion.div variants={itemVariants} className="text-center mt-8">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent/90 text-background font-semibold rounded-lg transition-all duration-300"
              >
                View All Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Testimonials Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mb-20"
          >
            <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-12 px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-accent">Recommendations</h2>
              <p className="text-sm sm:text-base text-foreground/70">What people say about my work</p>
            </motion.div>
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 px-4"
            >
              {testimonials.map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="p-6 bg-foreground/5 hover:bg-accent/5 border border-foreground/10 hover:border-accent/30 rounded-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-3xl">{testimonial.avatar}</div>
                    <div>
                      <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-foreground/60">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/70 italic">&quot;{testimonial.text}&quot;</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div 
              variants={itemVariants}
              className="p-8 bg-gradient-to-r from-accent/10 to-accent/5 rounded-xl border border-accent/20 text-center"
            >
              <p className="text-xl font-semibold text-accent mb-4">Let&apos;s Build Something Amazing</p>
              <p className="text-foreground/70 mb-6 max-w-xl mx-auto">
                I&apos;m always interested in hearing about new projects and opportunities in web development and AI.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  href="mailto:anishsingh210204@gmail.com"
                  className="px-8 py-3 bg-accent hover:bg-accent/90 text-background font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                >
                  Get In Touch
                </Link>
                <Link
                  href="/projects"
                  className="px-8 py-3 bg-foreground/10 hover:bg-foreground/20 text-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                >
                  View Projects
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
