"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Github,
  Mail,
  Linkedin,
  ArrowRight,
  ExternalLink,
  Download,
  Brain,
  Server,
  Globe,
  Database,
  Wrench,
  Terminal,
  CheckCircle2,
  ChevronRight,
  Calendar,
  MapPin,
  Sparkles,
} from "lucide-react";

// â”€â”€â”€ DATA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const featuredProjects = [
  {
    id: 1,
    name: "ChatSathi",
    tag: "AI Â· SaaS",
    featured: true,
    oneLiner:
      "AI chatbot SaaS platform enabling real-time conversations using LLMs and vector search",
    bullets: [
      "Built AI chatbot using OpenAI APIs with streaming responses",
      "Implemented full RAG pipeline for contextual, accurate answers",
      "Vector search with FAISS / Pinecone for semantic retrieval",
      "Multi-tenant architecture with scalable Node.js backend",
    ],
    tech: ["React", "Node.js", "OpenAI", "LangChain", "FAISS", "MongoDB"],
    github: "https://github.com/anishsingh234/ChatSathi",
    demo: "https://chat-sathi.vercel.app",
  },
  {
    id: 2,
    name: "HopeBridge",
    tag: "AI Â· RAG",
    featured: false,
    oneLiner:
      "RAG-based AI assistant delivering reliable, citation-backed cancer information",
    bullets: [
      "Document-aware AI system built with LangChain & LLMs",
      "RAG architecture for accuracy over verified medical datasets",
      "Semantic search via vector database for relevant retrieval",
      "FastAPI backend with async endpoints",
    ],
    tech: ["Python", "LangChain", "FAISS", "OpenAI", "FastAPI"],
    github: "https://github.com/anishsingh234/HopeBridge",
    demo: null,
  },
  {
    id: 3,
    name: "HealSync",
    tag: "Full Stack Â· Healthcare",
    featured: false,
    oneLiner:
      "Full-stack healthcare platform for managing patient appointments and workflows",
    bullets: [
      "Responsive frontend built with React and Tailwind CSS",
      "RESTful backend APIs with Express and MongoDB",
      "Secure authentication and role-based access",
      "Real-world healthcare scheduling use case",
    ],
    tech: ["Next.js", "React", "Prisma ORM", "MongoDB", "TypeScript"],
    github: "https://github.com/anishsingh234/HealSync",
    demo: null,
  },
];

const skillGroups = [
  {
    label: "AI / ML",
    icon: Brain,
    items: ["OpenAI", "LangChain", "RAG", "FAISS", "Pinecone", "Hugging Face"],
  },
  {
    label: "Backend",
    icon: Server,
    items: ["Node.js", "Express", "FastAPI", "GraphQL", "REST APIs"],
  },
  {
    label: "Frontend",
    icon: Globe,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Native"],
  },
  {
    label: "Database",
    icon: Database,
    items: ["MongoDB", "MySQL", "PostgreSQL", "Prisma ORM", "Pinecone"],
  },
  {
    label: "Languages",
    icon: Terminal,
    items: ["JavaScript", "TypeScript", "Python", "C++", "SQL"],
  },
  {
    label: "Tools & Platforms",
    icon: Wrench,
    items: ["Git", "GitHub", "Vercel", "Postman", "VS Code", "Clerk Auth"],
  },
];

const experience = [
  {
    role: "Software Developer Intern",
    company: "Exponent Solutions",
    location: "Remote",
    period: "Nov 2025 â€“ Present",
    bullets: [
      "Built and shipped scalable web applications and backend APIs in production",
      "Integrated AI chatbot features using OpenAI for real user-facing products",
      "Improved application performance, UX, and reliability across services",
      "Collaborated with team on production-level Next.js and React Native projects",
    ],
    tech: ["Next.js", "React Native", "TypeScript", "OpenAI", "Node.js"],
  },
];

// â”€â”€â”€ SHARED COMPONENTS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function SectionLabel({ children }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
      {children}
    </p>
  );
}

function SectionHeader({ label, title, subtitle }) {
  return (
    <div className="mb-12 sm:mb-16">
      <SectionLabel>{label}</SectionLabel>
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-foreground/50 max-w-xl leading-relaxed text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}

// â”€â”€â”€ NAVBAR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#05050A]/70 backdrop-blur-2xl border-b border-white/[0.05] shadow-[inset_0_-1px_0_rgba(255,255,255,0.02),0_8px_32px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center shrink-0">
            <span className="text-background font-bold text-sm leading-none">AK</span>
          </div>
          <span className="font-semibold text-foreground/80 group-hover:text-foreground transition-colors text-sm hidden sm:block">
            Anish Kumar Singh
          </span>
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center">
          {["Projects", "Skills", "Experience", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-3 py-2 text-sm text-foreground/50 hover:text-foreground/90 rounded-md transition-colors duration-150"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
            <span className="text-[10px] font-medium text-emerald-400">Open to work</span>
          </div>
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold bg-accent/10 hover:bg-accent/20 text-accent border border-accent/25 rounded-lg transition-all duration-200"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Resume</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

// â”€â”€â”€ HERO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Ambient glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent/[0.08] rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-[15%] right-[20%] w-[400px] h-[400px] bg-blue-500/[0.04] rounded-full blur-[100px] pointer-events-none" />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(234,179,8,0.12) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36 w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Role pill */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-5 py-2 mb-8 bg-accent/[0.08] border border-accent/20 rounded-full shadow-[0_0_24px_rgba(139,92,246,0.15)]"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-xs font-bold text-accent tracking-widest uppercase">
              Full-Stack · AI Engineer
            </span>
          </motion.div>

          {/* New Giant Headline */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[5.5rem] font-extrabold tracking-tighter mb-8 text-foreground leading-[1.05]">
            I build <span className="text-gradient drop-shadow-sm">AI-powered</span> applications using <span className="text-gradient hover:opacity-80 transition-opacity cursor-default">LLMs</span>, <span className="text-gradient drop-shadow-sm hover:opacity-80 transition-opacity cursor-default">RAG</span> &amp; scalable systems
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-lg lg:text-xl font-medium text-foreground/50 max-w-3xl mx-auto mb-14 leading-relaxed tracking-wide">
            Short, clean, impactful. I transform cutting-edge AI research into production-grade systems that solve real world problems.
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-5 mb-16"
          >
            <a
              href="#projects"
              className="flex items-center gap-2 px-8 py-4 bg-accent text-white text-base font-bold rounded-2xl hover:bg-accent/90 shadow-[0_0_32px_rgba(139,92,246,0.4)] hover:shadow-[0_0_60px_rgba(139,92,246,0.6)] hover:-translate-y-1 transition-all duration-300 group"
            >
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="https://github.com/anishsingh234"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-8 py-4 bg-white/[0.03] hover:bg-white/[0.08] text-foreground/90 hover:text-white border border-white/[0.08] hover:border-white/[0.2] text-base font-bold rounded-2xl backdrop-blur-md transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] hover:-translate-y-1"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2.5 px-8 py-4 bg-white/[0.03] hover:bg-white/[0.08] text-foreground/90 hover:text-white border border-white/[0.08] hover:border-white/[0.2] text-base font-bold rounded-2xl backdrop-blur-md transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] hover:-translate-y-1"
            >
              <Mail className="w-5 h-5" />
              Contact
            </a>
          </motion.div>

          {/* Social row */}
          <div className="flex items-center justify-center flex-wrap gap-5 text-xs text-foreground/35">
            <a
              href="mailto:anishsingh210204@gmail.com"
              className="flex items-center gap-1.5 hover:text-foreground/60 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              anishsingh210204@gmail.com
            </a>
            <span className="text-foreground/15">·</span>
            <a
              href="https://linkedin.com/in/anish-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-foreground/60 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              linkedin.com/in/anish-ai
            </a>
            <span className="text-foreground/15">·</span>
            <a
              href="https://github.com/anishsingh234"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-foreground/60 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              github.com/anishsingh234
            </a>
          </div>
        </motion.div>

        {/* Stats strip */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 pt-10 border-t border-white/[0.06] grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto text-center"
        >
          {[
            { value: "12+", label: "Projects Shipped" },
            { value: "350+", label: "DSA Problems" },
            { value: "4+", label: "AI / LLM Projects" },
            { value: "2026", label: "B.Tech Graduating" },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="text-2xl sm:text-3xl font-bold text-foreground">{value}</p>
              <p className="text-xs text-foreground/35 mt-1.5 leading-tight">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// â”€â”€â”€ PROJECTS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function ProjectCard({ project }) {
  return (
    <div className="relative flex flex-col h-full rounded-[2rem] bg-[#0A0A0E] border border-white/[0.08] overflow-hidden group transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] cursor-pointer">
      {/* Gradient glowing border effect on hover */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[2rem] border border-transparent" style={{ backgroundClip: "padding-box, border-box", backgroundImage: "linear-gradient(#0A0A0E, #0A0A0E), linear-gradient(to bottom right, #a855f7, #3b82f6, #06b6d4)"}}></div>
      
      {/* Gloss reflection overlay */}
      <div className="absolute inset-x-0 top-0 h-1/2 z-0 bg-gradient-to-b from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

      {project.featured && (
        <div className="absolute top-5 right-5 z-20">
          <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent bg-background/80 backdrop-blur-md border border-accent/25 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
            Featured
          </span>
        </div>
      )}

      {/* Image Container (16:9) */}
      <div className="relative w-full aspect-video overflow-hidden border-b border-white/[0.06] z-10 bg-black/40">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-[#0A0A0E]/60 group-hover:bg-[#0A0A0E]/10 transition-colors duration-500"></div>
      </div>

      <div className="p-7 flex flex-col flex-1 relative z-10">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-accent mb-3 drop-shadow-sm">
          {project.tag}
        </p>

        <h3 className="text-xl font-bold text-foreground mb-2 leading-tight pr-16">
          {project.name}
        </h3>

        <p className="text-[13px] text-foreground/60 leading-relaxed mb-5 min-h-[40px]">
          {project.oneLiner}
        </p>

        <ul className="space-y-2 mb-6 flex-1">
          {project.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2.5 text-[13px] text-foreground/50">
              <CheckCircle2 className="w-4 h-4 text-accent mt-[1px] shrink-0" />
              <span className="leading-snug">{b}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5 mb-8">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 text-[10px] font-semibold tracking-wide bg-white/[0.03] border border-white/[0.08] text-foreground/70 rounded-full backdrop-blur-md hover:border-accent/30 hover:bg-accent/5 hover:text-accent transition-colors duration-300 cursor-default"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-2.5 mt-auto">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 text-[13px] font-semibold bg-white text-black rounded-xl hover:bg-white/90 hover:-translate-y-0.5 transition-all shadow-[0_4px_14px_rgba(255,255,255,0.1)] group/btn"
            >
              <ExternalLink className="w-3.5 h-3.5 group-hover/btn:rotate-[-5deg] transition-transform" />
              Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 text-[13px] font-semibold bg-white/[0.03] border border-white/[0.10] text-foreground/80 rounded-xl hover:bg-white/[0.08] hover:text-foreground hover:-translate-y-0.5 transition-all shadow-sm group/btn"
            >
              <Github className="w-3.5 h-3.5" />
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Featured Projects"
          title="What I've built"
          subtitle="Production-grade SaaS platforms and AI systems."
        />
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {featuredProjects.map((p) => (
            <motion.div key={p.id} variants={itemVariants} className="h-full">
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-14 pt-8 border-t border-white/[0.06] text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/[0.03] hover:bg-white/[0.08] text-sm font-semibold text-foreground/80 hover:text-foreground border border-white/[0.08] hover:border-white/[0.15] rounded-xl backdrop-blur-sm transition-all duration-300 group"
          >
            View all 15 projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// â”€â”€â”€ SKILLS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 border-t border-white/[0.06] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Skills"
          title="My tech stack"
          subtitle="The tools and frameworks I use to build and ship production-ready AI and full-stack systems."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {skillGroups.map(({ label, icon: Icon, items }) => (
            <div
              key={label}
              className="p-6 rounded-[1.5rem] bg-white/[0.015] border border-white/[0.06] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_4px_16px_rgba(0,0,0,0.1)] hover:bg-white/[0.03] hover:border-accent/[0.25] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_12px_32px_rgba(139,92,246,0.12)] transition-all duration-400 ease-out"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-1.5 bg-accent/[0.10] rounded-md shrink-0">
                  <Icon className="w-4 h-4 text-accent" />
                </div>
                <h3 className="text-sm font-semibold text-foreground/75">{label}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-[11px] font-semibold tracking-wide bg-white/[0.03] border border-white/[0.08] text-foreground/70 rounded-full backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] hover:border-accent/40 hover:text-foreground hover:shadow-[0_0_16px_rgba(139,92,246,0.2)] transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// â”€â”€â”€ EXPERIENCE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 border-t border-white/[0.06] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Experience"
          title="Where I've worked"
          subtitle="Real-world production experience building and shipping software."
        />
        <div className="space-y-4">
          {experience.map((exp, i) => (
            <div
              key={i}
              className="p-6 sm:p-8 rounded-[2rem] bg-white/[0.015] border border-white/[0.06] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_8px_24px_rgba(0,0,0,0.15)] hover:bg-white/[0.03] hover:border-white/[0.12] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_16px_40px_rgba(0,0,0,0.4)] transition-all duration-500 ease-out"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-foreground leading-tight">{exp.role}</h3>
                  <div className="flex items-center gap-3 mt-1.5">
                    <p className="text-sm font-semibold text-accent">{exp.company}</p>
                    <span className="text-white/20">Â·</span>
                    <span className="flex items-center gap-1 text-xs text-foreground/35">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-foreground/35 shrink-0">
                  <Calendar className="w-3.5 h-3.5" />
                  {exp.period}
                </div>
              </div>
              <ul className="space-y-2.5 mb-6">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-foreground/50">
                    <ChevronRight className="w-4 h-4 text-accent/50 shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 text-[11px] font-semibold tracking-wide bg-accent/[0.05] border border-accent/[0.25] text-accent/80 rounded-full shadow-[inset_0_1px_1px_rgba(139,92,246,0.15)] hover:bg-accent/[0.1] hover:shadow-[0_0_16px_rgba(139,92,246,0.2)] transition-all duration-300 cursor-default"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Education */}
          <div className="p-6 sm:p-8 rounded-[2rem] bg-white/[0.015] border border-white/[0.06] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_8px_24px_rgba(0,0,0,0.15)] hover:bg-white/[0.03] hover:border-white/[0.12] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_16px_40px_rgba(0,0,0,0.4)] transition-all duration-500 ease-out">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-foreground leading-tight">
                  B.Tech â€” Computer Science
                </h3>
                <div className="flex items-center flex-wrap gap-3 mt-1.5">
                  <p className="text-sm font-semibold text-accent">Uttarakhand Technical University</p>
                  <span className="text-xs px-2 py-0.5 bg-accent/[0.08] border border-accent/[0.20] text-accent/70 rounded-full font-medium">
                    AI &amp; ML Specialization
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-foreground/35 shrink-0">
                <Calendar className="w-3.5 h-3.5" />
                Aug 2022 â€“ Jun 2026
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// â”€â”€â”€ ABOUT â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function About() {
  return (
    <section id="about" className="py-24 sm:py-32 border-t border-white/[0.06] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <SectionLabel>About</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
              Building at the intersection of{" "}
              <span className="text-gradient">AI &amp; full-stack</span>
            </h2>
            <div className="space-y-4 text-foreground/50 leading-relaxed text-[15px]">
              <p>
                I&apos;m a full-stack developer with a strong focus on AI systems and
                real-world applications. I enjoy working on LLM-based products,
                RAG architectures, and scalable backend systems that people actually use.
              </p>
              <p>
                I&apos;ve solved{" "}
                <span className="text-foreground font-semibold">350+ DSA problems</span>,
                which sharpened my problem-solving skills and laid a strong foundation
                for system design thinking.
              </p>
              <p>
                Currently interning at Exponent Solutions building production Next.js
                and React Native apps, while exploring new frontiers in multi-agent AI
                systems and LLM tooling.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:anishsingh210204@gmail.com"
                className="flex items-center gap-2 px-4 py-2.5 bg-accent text-background text-sm font-semibold rounded-lg hover:bg-accent/90 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Get in Touch
              </a>
              <a
                href="https://linkedin.com/in/anish-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/[0.08] text-foreground/60 hover:text-foreground border border-white/10 text-sm font-semibold rounded-lg transition-all"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "12+", label: "Projects Shipped", sub: "Web & AI" },
              { value: "350+", label: "DSA Problems", sub: "C++ & Java" },
              { value: "4+", label: "AI/LLM Projects", sub: "RAG, Agents" },
              { value: "2026", label: "Graduating", sub: "CS â€” AI & ML" },
            ].map(({ value, label, sub }) => (
              <div
                key={label}
                className="p-6 rounded-[1.5rem] bg-white/[0.015] border border-white/[0.06] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_4px_16px_rgba(0,0,0,0.1)] hover:bg-white/[0.03] hover:border-accent/[0.25] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_12px_32px_rgba(139,92,246,0.12)] transition-all duration-400 ease-out"
              >
                <p className="text-4xl font-extrabold text-accent mb-2 tracking-tight">{value}</p>
                <p className="text-sm font-semibold text-foreground/70">{label}</p>
                <p className="text-xs text-foreground/30 mt-0.5">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// â”€â”€â”€ CONTACT â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 border-t border-white/[0.06] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[2.5rem] border border-white/[0.06] bg-white/[0.015] p-10 sm:p-16 text-center overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.2)]">
          <div className="absolute inset-0 -z-10 pointer-events-none">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-accent/[0.06] rounded-full blur-[80px]" />
          </div>
          <SectionLabel>Contact</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 leading-tight">
            Let&apos;s build something impactful
          </h2>
          <p className="text-foreground/45 mb-10 max-w-lg mx-auto leading-relaxed text-[15px]">
            I&apos;m actively looking for Full-Stack and AI Engineering opportunities.
            Open to full-time roles, internships, and interesting collaborations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a
              href="mailto:anishsingh210204@gmail.com"
              className="flex items-center gap-2.5 px-6 py-3.5 bg-accent text-white text-sm font-bold rounded-xl hover:bg-accent/90 shadow-[0_0_24px_rgba(139,92,246,0.35)] hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <Mail className="w-5 h-5" />
              anishsingh210204@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/anish-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-6 py-3.5 bg-white/[0.03] hover:bg-white/[0.08] text-foreground/80 hover:text-foreground border border-white/[0.08] hover:border-white/[0.15] text-sm font-bold rounded-xl backdrop-blur-sm transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="https://github.com/anishsingh234"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-6 py-3.5 bg-white/[0.03] hover:bg-white/[0.08] text-foreground/80 hover:text-foreground border border-white/[0.08] hover:border-white/[0.15] text-sm font-bold rounded-xl backdrop-blur-sm transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// â”€â”€â”€ PAGE ROOT â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export default function Home() {
  return (
    <main className="relative bg-background">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <About />
      <Contact />
    </main>
  );
}
