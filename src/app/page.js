"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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
  Cpu,
  Layout,
  Code2,
  Bot,
  Network,
} from "lucide-react";

// â”€â”€â”€ DATA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const featuredProjects = [
  {
    id: 1,
    name: "ChatSathi",
    tag: "AI · SaaS Platform",
    featured: true,
    image: "/projects/chatsathi.png?v=1",
    oneLiner:
      "Multi-tenant AI chatbot platform enabling businesses to deploy custom assistants via embeddable scripts.",
    bullets: [
      "Built embeddable JavaScript SDK for seamless chatbot integration across websites",
      "Designed multi-tenant backend to manage isolated chatbot configs and conversations",
      "Integrated Gemini 2.5 Flash for fast, low-latency AI responses",
      "Developed scalable backend services using MongoDB and Scalekit",
    ],
    tech: ["Next.js", "TypeScript", "MongoDB", "Scalekit", "Gemini API", "Tailwind CSS", "Vercel"],
    github: "https://github.com/anishsingh234/ChatSathi",
    demo: "https://chat-sathi.vercel.app/",
  },
  {
    id: 2,
    name: "HopeBridge",
    tag: "AI · RAG System",
    featured: false,
    image: "/projects/hopebridge.png?v=1",
    oneLiner:
      "AI-powered medical assistant delivering source-grounded cancer insights using RAG architecture.",
    bullets: [
      "Engineered RAG pipeline using LLMs + vector embeddings for accurate retrieval",
      "Built semantic search system for contextual medical Q&A",
      "Reduced hallucinations using document-grounded responses",
      "Implemented scalable document ingestion + vector indexing pipeline",
    ],
    tech: ["Next.js", "React", "Vercel AI SDK", "Gemini 2.5 Flash", "LangChain", "Vector DB"],
    github: "https://github.com/anishsingh234/HopeBridge",
    demo: "https://try-hope-bridge.vercel.app/",
  },
  {
    id: 3,
    name: "HealSync",
    tag: "Full Stack · Healthcare",
    featured: false,
    image: "/projects/healsync.png?v=1",
    oneLiner:
      "Full-stack healthcare platform enabling appointment booking and real-time consultations.",
    bullets: [
      "Built end-to-end booking system with real-time scheduling",
      "Integrated video consultation features for remote healthcare",
      "Implemented RBAC-based admin panel with secure access control",
      "Scaled platform to support 100+ users with optimized backend",
    ],
    tech: ["Next.js", "React", "MongoDB", "Prisma ORM", "Clerk Auth", "Tailwind CSS"],
    github: "https://github.com/anishsingh234/HealSync",
    demo: "https://heal-sync-amber.vercel.app/",
  },
];

// skillGroups definition moved directly inside Skills() component for tabbed layout encapsulation

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

// ─── ANIMATION SYSTEM ─────────────────────────────────────────────────────────────────

// Expo-out easing — same feel as Apple / Stripe
const EASE = [0.16, 1, 0.3, 1];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const heroContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const heroItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

// Reusable scroll-triggered fade + slide-up wrapper
function FadeUp({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeUpVariants}
      transition={{ duration: 0.55, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
      {children}
    </p>
  );
}

function SectionHeader({ label, title, subtitle }) {
  return (
    <FadeUp className="mb-12 sm:mb-16">
      <SectionLabel>{label}</SectionLabel>
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-foreground/50 max-w-xl leading-relaxed text-base">
          {subtitle}
        </p>
      )}
    </FadeUp>
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
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: EASE, delay: 0.05 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#05050A]/70 backdrop-blur-2xl border-b border-white/[0.05] shadow-[inset_0_-1px_0_rgba(255,255,255,0.02),0_8px_32px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      }`}
    >
      <nav
        className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "h-14" : "h-16"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            transition={{ duration: 0.2, ease: EASE }}
            className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center shrink-0"
          >
            <span className="text-background font-bold text-sm leading-none">AK</span>
          </motion.div>
          <span className="font-semibold text-foreground/80 group-hover:text-foreground transition-colors text-sm hidden sm:block">
            Anish Kumar Singh
          </span>
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center">
          {["Projects", "Skills", "Experience", "About", "Contact"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ y: -1 }}
              transition={{ duration: 0.15, ease: EASE }}
              className="px-3 py-2 text-sm text-foreground/50 hover:text-foreground/90 rounded-md transition-colors duration-150"
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
            <motion.span
              animate={{ opacity: [1, 0.35, 1] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-emerald-400 rounded-full"
            />
            <span className="text-[10px] font-medium text-emerald-400">Open to work</span>
          </div>
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2, ease: EASE }}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold bg-accent/10 hover:bg-accent/20 text-accent border border-accent/25 rounded-lg transition-colors duration-200"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Resume</span>
          </motion.a>
        </div>
      </nav>
    </motion.header>
  );
}

// â”€â”€â”€ HERO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.pageX, y: e.pageY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none z-0"
      animate={{
        x: mousePosition.x - 250,
        y: mousePosition.y - 250,
      }}
      transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
    />
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B0F1A] pt-20">
      <CursorGlow />

      {/* Static glowing orbs */}
      <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle Noise Texture */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-1">
        {/* Left Side: Text and CTAs */}
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="text-left"
        >
          {/* Availability Badge */}
          <motion.div variants={heroItem} className="group relative inline-flex items-center gap-2 px-3 py-1.5 mb-6 bg-white/[0.03] border border-white/10 rounded-full cursor-default hover:bg-white/[0.05] transition-colors">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-semibold text-foreground/80 tracking-wide">
              Open to Work
            </span>
            {/* Tooltip */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2.5 py-1.5 bg-[#1A1F2E] text-white text-[10px] font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10 shadow-xl z-50">
              Actively looking for opportunities
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={heroItem}
            className="text-4xl sm:text-5xl lg:text-[60px] tracking-tight font-extrabold mb-6 text-foreground leading-[1.1]"
          >
            I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 drop-shadow-[0_0_15px_rgba(124,58,237,0.3)] hover:drop-shadow-[0_0_25px_rgba(124,58,237,0.6)] transition-all duration-300">AI-powered</span> applications using{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 drop-shadow-[0_0_15px_rgba(124,58,237,0.3)] hover:drop-shadow-[0_0_25px_rgba(124,58,237,0.6)] transition-all duration-300 cursor-default">LLMs</span>,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 drop-shadow-[0_0_15px_rgba(124,58,237,0.3)] hover:drop-shadow-[0_0_25px_rgba(124,58,237,0.6)] transition-all duration-300 cursor-default">RAG</span>{" "}
            &amp; scalable systems
          </motion.h1>

          <motion.p
            variants={heroItem}
            className="text-lg text-foreground/50 mb-8 max-w-xl leading-relaxed"
          >
            I transform cutting-edge AI research into production-grade systems that solve real world problems. Clean. Fast. Scalable.
          </motion.p>

          {/* Trust Indicators */}
          <motion.div variants={heroItem} className="flex flex-wrap items-center gap-3 mb-10">
            <div className="flex items-center gap-2 px-3 py-2 bg-white/[0.02] border border-white/[0.08] rounded-xl backdrop-blur-sm shadow-sm hover:shadow-[0_0_15px_rgba(124,58,237,0.15)] transition-shadow">
              <Brain className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-medium text-foreground/75">Built 3+ AI Products</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-white/[0.02] border border-white/[0.08] rounded-xl backdrop-blur-sm shadow-sm hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-shadow">
              <Terminal className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-medium text-foreground/75">350+ DSA Problems</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-white/[0.02] border border-white/[0.08] rounded-xl backdrop-blur-sm shadow-sm hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-shadow">
              <Server className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-medium text-foreground/75">Full-Stack + AI</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={heroItem} className="flex flex-wrap items-center gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300"
            >
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="https://github.com/anishsingh234"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-7 py-3.5 border border-white/20 text-foreground/90 hover:text-white font-bold rounded-xl transition-all duration-300 shadow-[0_4px_14px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(255,255,255,0.15)] hover:-translate-y-0.5"
            >
              <Github className="w-5 h-5" />
              GitHub
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-7 py-3.5 bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-white/10 text-foreground/90 hover:text-white font-bold rounded-xl backdrop-blur-md transition-all duration-300 shadow-[0_4px_14px_rgba(0,0,0,0.1)] hover:-translate-y-0.5"
            >
              <Mail className="w-5 h-5" />
              Contact
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Side: Floating Visuals */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: EASE }}
          className="hidden lg:flex relative h-[500px] w-full items-center justify-center pointer-events-none"
        >
          {/* Main IDE / Code Mockup */}
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute z-10 w-[380px] bg-[#10141f] border border-white/10 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl"
            style={{ top: "15%", left: "5%" }}
          >
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10 bg-white/5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              <span className="ml-2 text-[10px] text-foreground/40 font-mono">llm_pipeline.ts</span>
            </div>
            <div className="p-5 font-mono text-[11px] leading-relaxed text-blue-200">
              <span className="text-purple-400">import</span> {"{ Document }"} <span className="text-purple-400">from</span> <span className="text-green-300">"langchain/document"</span>;<br/><br/>
              <span className="text-purple-400">const</span> chain = <span className="text-purple-400">await</span> <span className="text-yellow-200">RetrievalQAChain</span>.fromLLM(<br/>
              &nbsp;&nbsp;model,<br/>
              &nbsp;&nbsp;vectorStore.asRetriever()<br/>
              );<br/><br/>
              <span className="text-foreground/40">// Process query...</span><br/>
              <span className="text-purple-400">const</span> res = <span className="text-purple-400">await</span> chain.<span className="text-blue-300">call</span>({"{"} query {"}"});
            </div>
          </motion.div>

          {/* AI Chat Layout Mockup */}
          <motion.div 
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute z-20 w-[300px] bg-white/[0.02] border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden backdrop-blur-2xl"
            style={{ bottom: "10%", right: "-5%" }}
          >
            <div className="p-4 flex flex-col gap-4">
              <div className="flex gap-3 items-start">
                <div className="w-7 h-7 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                  <span className="text-[10px] text-purple-200">USR</span>
                </div>
                <div className="bg-white/5 border border-white/5 rounded-2xl rounded-tl-sm p-3 text-[11px] text-foreground/80">
                  How can we optimize the RAG retrieval speed?
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-7 h-7 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                  <Brain className="w-3.5 h-3.5 text-blue-400" />
                </div>
                <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl rounded-tl-sm p-3 text-[11px] text-foreground/90">
                  To optimize RAG retrieval, we can use <strong>HNSW indexing</strong> and embed document metadata for pre-filtering before semantic search.
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Subtle connecting spline/path (SVG) */}
          <svg className="absolute inset-0 w-full h-full -z-10 opacity-30 pointer-events-none" viewBox="0 0 500 500">
            <path d="M 120 200 C 300 200, 200 350, 400 350" fill="none" stroke="url(#paint0_linear)" strokeWidth="2" strokeDasharray="4 4" />
            <defs>
              <linearGradient id="paint0_linear" x1="120" y1="200" x2="400" y2="350" gradientUnits="userSpaceOnUse">
                <stop stopColor="#9333ea" />
                <stop offset="1" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] font-semibold uppercase tracking-widest text-foreground/30">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 border-[1.5px] border-foreground/20 rounded-full flex justify-center py-1.5"
        >
          <div className="w-1 h-1.5 bg-foreground/40 rounded-full" />
        </motion.div>
      </motion.div>

      {/* Subtle Divider Glow Under Hero */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent blur-sm" />
    </section>
  );
}

// â”€â”€â”€ PROJECTS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function ProjectCard({ project }) {
  return (
    <div className="relative h-full group perspective-1000">
      {/* 1. BALANCE FEATURED CARD - Reduced glow intensity and spread */}
      {project.featured && (
        <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-br from-purple-500/30 via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      )}
      <div className={`absolute inset-0 rounded-[2rem] bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500 -z-10 pointer-events-none ${!project.featured && 'from-white/10 via-white/5'}`} />

      {/* Main card surface */}
      <motion.div
        whileHover={{ scale: 1.02, y: -4 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative flex flex-col h-full rounded-[2rem] bg-[#0A0A0E]/80 backdrop-blur-xl border border-white/10 group-hover:border-purple-500/30 overflow-hidden transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.2)] group-hover:shadow-[0_10px_40px_rgba(139,92,246,0.25)]"
      >
        {/* Subtle inner gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none z-10" />

        {project.featured && (
          <div className="absolute top-5 right-5 z-20">
            {/* Featured Tag Enhancement */}
            <span className="relative flex items-center justify-center px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full shadow-[0_4px_12px_rgba(139,92,246,0.4)] overflow-hidden group/tag">
              <span className="absolute inset-0 w-full h-full bg-white/20 translate-x-[-100%] group-hover/tag:translate-x-[100%] transition-transform duration-700 ease-out" />
              Featured
            </span>
          </div>
        )}

        {/* Image Container (16:9) */}
        <div className="relative w-full aspect-video overflow-hidden border-b border-white/[0.06] bg-black/40">
          <Image
            src={project.image}
            alt={project.name}
            fill
            unoptimized
            className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-[#0A0A0E]/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
        </div>

        <div className="p-7 flex flex-col flex-1 relative z-20">
          <div className="flex items-center justify-between mb-3">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-purple-400 drop-shadow-sm group-hover:text-purple-300 transition-colors">
              {project.tag}
            </p>
            {/* Status Badge Improvement */}
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white/5 border border-white/10 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.15)] group-hover:shadow-[0_0_10px_rgba(34,197,94,0.4)] transition-shadow">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
              </span>
              <span className="text-[9px] font-semibold text-white/70 uppercase tracking-wider">Live</span>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-white mb-2 leading-tight">
            {project.name}
          </h3>

          <p className="text-[13px] text-white/70 leading-relaxed mb-5 min-h-[40px]">
            {project.oneLiner}
          </p>

          <ul className="space-y-2 mb-6 flex-1">
            {project.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-2.5 text-[13px] text-white/60 group-hover:text-white/80 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-purple-500/70 mt-[1px] shrink-0" />
                <span className="leading-snug">{b}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1.5 mb-8">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-xs font-semibold text-white/80 bg-white/10 rounded-full backdrop-blur-md hover:bg-purple-500/20 hover:text-purple-200 transition-colors duration-300 cursor-default shadow-sm"
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
                className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 text-[13px] font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl hover:scale-105 hover:shadow-[0_0_20px_rgba(139,92,246,0.6)] transition-all duration-300 group/btn relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-[600ms] ease-out" />
                <ExternalLink className="w-3.5 h-3.5 relative z-10 group-hover/btn:rotate-[-5deg] transition-transform" />
                <span className="relative z-10 hidden sm:inline">Live Demo</span>
                <span className="relative z-10 sm:hidden">Demo</span>
                <ArrowRight className="w-3.5 h-3.5 relative z-10 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300 -ml-1 border-l border-white/20 pl-1" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 text-[13px] font-semibold bg-transparent border border-white/20 text-white/80 rounded-xl hover:bg-white/10 hover:text-white hover:scale-[1.02] transition-all duration-300 group/git"
              >
                <Github className="w-3.5 h-3.5 group-hover/git:scale-110 transition-transform" />
                <span className="relative">
                  GitHub
                  <span className="absolute left-0 bottom-0 w-full h-[1px] bg-white scale-x-0 group-hover/git:scale-x-100 transition-transform origin-left" />
                </span>
              </a>
            )}
          </div>
        </div>
      </motion.div>
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
  const categories = [
    {
      title: "AI / ML",
      icon: Brain,
      description: "Building AI agents, RAG pipelines, and intelligent applications.",
      span: "md:col-span-2 lg:col-span-2",
      highlight: true,
      skills: [
        { name: "LLMs", icon: Sparkles },
        { name: "Prompt Engineering", icon: Terminal },
        { name: "LangChain", icon: Network },
        { name: "CrewAI", icon: Bot },
        { name: "Hugging Face", icon: Brain },
        { name: "Ollama", icon: Server },
        { name: "RAG", icon: Database },
        { name: "Vector Databases", icon: Database },
        { name: "Pinecone", icon: Cpu },
        { name: "Tool Calling", icon: Code2 },
        { name: "Multi-Agent Systems", icon: Network },
        { name: "Vercel AI SDK", icon: Cpu },
      ]
    },
    {
      title: "Backend",
      icon: Server,
      description: "Designing scalable APIs and integrating AI systems.",
      span: "col-span-1",
      skills: [
        { name: "Node.js", icon: Terminal },
        { name: "Express.js", icon: Server },
        { name: "FastAPI", icon: Cpu },
        { name: "GraphQL", icon: Network },
        { name: "REST APIs", icon: Globe },
      ],
    },
    {
      title: "Frontend",
      icon: Layout,
      description: "Building responsive and performant user interfaces.",
      span: "col-span-1",
      skills: [
        { name: "React.js", icon: Code2 },
        { name: "Next.js", icon: Globe },
        { name: "React Native", icon: Layout },
        { name: "Expo", icon: Layout },
        { name: "Tailwind CSS", icon: Layout },
        { name: "Three.js", icon: Cpu },
      ],
    },
    {
      title: "Database",
      icon: Database,
      description: "Efficient data modeling and scalable storage systems.",
      span: "col-span-1",
      skills: [
        { name: "MongoDB", icon: Database },
        { name: "MySQL", icon: Database },
        { name: "Prisma ORM", icon: Database },
      ],
    },
    {
      title: "Programming Languages",
      icon: Code2,
      description: "Strong problem-solving and system design foundation.",
      span: "col-span-1 md:col-span-2 lg:col-span-1",
      skills: [
        { name: "JavaScript", icon: Code2 },
        { name: "TypeScript", icon: Code2 },
        { name: "Python", icon: Terminal },
        { name: "C++", icon: Cpu },
        { name: "C", icon: Cpu },
        { name: "SQL", icon: Database },
        { name: "HTML", icon: Layout },
        { name: "CSS", icon: Layout },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      description: "Development, deployment, and workflow management.",
      span: "md:col-span-2 lg:col-span-3",
      skills: [
        { name: "Git", icon: Network },
        { name: "GitHub", icon: Github },
        { name: "Vercel", icon: Globe },
        { name: "Clerk Auth", icon: CheckCircle2 },
        { name: "VS Code", icon: Code2 },
        { name: "Postman", icon: Layout },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-24 sm:py-32 scroll-mt-20 border-t border-white/[0.06] overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/10 to-transparent" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <FadeUp className="mb-14 sm:mb-16 text-center sm:text-left">
          <SectionLabel>My Tech Stack</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 leading-tight">
            Tools I architect with
          </h2>
          <p className="text-foreground/50 max-w-xl leading-relaxed text-[15px] sm:mx-0 mx-auto">
            I use these specific technologies to build production-grade AI systems, scale full-stack architectures, and ship exceptional user experiences.
          </p>
        </FadeUp>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            const isAI = cat.highlight;
            
            return (
              <FadeUp key={cat.title} delay={i * 0.1} className={cat.span}>
                <div className={`group relative p-6 sm:p-8 rounded-[2rem] bg-white/[0.02] border transition-all duration-500 flex flex-col h-full overflow-hidden ${
                  isAI 
                    ? "border-purple-500/20 hover:border-purple-500/40 hover:bg-purple-500/[0.02] shadow-[0_0_30px_rgba(139,92,246,0.03)] hover:shadow-[0_0_40px_rgba(139,92,246,0.1)] hover:-translate-y-1" 
                    : "border-white/[0.08] hover:border-white/[0.15] hover:bg-white/[0.03] hover:-translate-y-1"
                }`}>
                  
                  {/* Inner ambient glow that triggers on hover */}
                  <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none ${
                    isAI ? "bg-purple-500/20" : "bg-white/5"
                  }`} />
                  
                  <div className="flex items-center gap-4 mb-5 relative z-10">
                    <div className={`p-3 rounded-2xl border transition-all duration-300 group-hover:scale-[1.05] shadow-inner ${
                      isAI 
                        ? "bg-purple-500/10 border-purple-500/20 text-purple-400 group-hover:bg-purple-500/20" 
                        : "bg-white/[0.04] border-white/[0.08] text-white/70 group-hover:text-white group-hover:bg-white/[0.08]"
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white/90 tracking-wide">{cat.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-[14px] text-white/50 mb-6 max-w-sm leading-relaxed relative z-10">
                    {cat.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto relative z-10 pt-2 text-white/70">
                    {cat.skills.map((skill) => {
                      const SkillIcon = skill.icon;
                      return (
                        <div 
                          key={skill.name} 
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all duration-300 ${
                            isAI 
                              ? "bg-purple-500/[0.03] border-purple-500/10 group-hover:border-purple-500/20 hover:bg-purple-500/10" 
                              : "bg-white/[0.02] border-white/[0.05] group-hover:border-white/[0.1] hover:bg-white/[0.08]"
                          }`}
                        >
                          <SkillIcon className={`w-3.5 h-3.5 ${isAI ? "text-purple-400/70" : "text-white/40"}`} />
                          <span className="text-[12px] font-medium text-white/80 whitespace-nowrap">
                            {skill.name}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}

// â”€â”€â”€ EXPERIENCE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function Experience() {
  const experiences = [
    {
      role: "Software Developer Intern",
      company: "Exponent Solutions",
      location: "Remote",
      period: "Nov 2025 — Present",
      bullets: [
        "Developed and deployed 3+ full-stack applications serving 3,000+ users",
        "Built a RAG-based AI chatbot using LLMs and vector embeddings",
        "Designed scalable REST APIs and optimized MongoDB queries",
        "Improved frontend performance with reusable components"
      ],
      tech: "Next.js, React, Node.js, MongoDB, LLMs, RAG",
    },
    {
      role: "B.Tech Computer Science (AI & ML)",
      company: "Uttarakhand Technical University",
      location: "",
      period: "Aug 2022 — Jun 2026",
      bullets: [],
      tech: "",
    }
  ];

  return (
    <section id="experience" className="py-24 sm:py-32 scroll-mt-20 border-t border-white/[0.06] relative overflow-hidden">
      
      {/* Background radial gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10">
        
        <FadeUp className="mb-14 sm:mb-16">
          <SectionLabel>Experience</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
            Where I've worked
          </h2>
          <p className="text-white/50 max-w-xl leading-relaxed text-[15px]">
            Real-world production experience building and shipping software.
          </p>
        </FadeUp>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[13px] sm:left-[17px] top-3 bottom-0 w-[2px] bg-gradient-to-b from-purple-500/60 via-white/10 to-transparent" />

          <div className="space-y-12 sm:space-y-16">
            {experiences.map((exp, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="relative pl-12 sm:pl-16 group">
                  
                  {/* Timeline Node */}
                  <div className="absolute left-[9px] sm:left-[13px] top-2.5 w-2.5 h-2.5 rounded-full bg-[#0a0a0f] border-[2px] border-white/20 ring-4 ring-[#0a0a0f] group-hover:border-purple-400 group-hover:bg-purple-400 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.6)] transition-all duration-300 z-10" />

                  {/* Content Container (Option A: Just typography and spacing, no background card) */}
                  <div className="group-hover:translate-x-1.5 transition-transform duration-300 ease-out">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 mb-2">
                      <h3 className="text-xl sm:text-[22px] font-semibold text-white tracking-wide">
                        {exp.role}
                      </h3>
                      <span className="text-sm font-medium text-gray-500 shrink-0">
                        {exp.period}
                      </span>
                    </div>
                    
                    <div className="text-[15px] font-medium text-purple-400/90 mb-5 tracking-wide flex items-center gap-2">
                      {exp.company}
                      {exp.location && (
                        <>
                          <span className="text-white/20">•</span>
                          <span className="text-gray-500">{exp.location}</span>
                        </>
                      )}
                    </div>

                    {exp.bullets.length > 0 && (
                      <ul className="space-y-3 mb-5">
                        {exp.bullets.map((b, j) => (
                          <li key={j} className="flex items-start gap-3.5 text-[15px] text-gray-300/90 leading-relaxed">
                            <span className="text-purple-400/50 mt-[7px] shrink-0 text-[8px]">■</span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}

                    {exp.tech && (
                      <div className="mt-3 pt-3 border-t border-white/[0.04]">
                        <span className="text-[14px] text-gray-500">
                          Tech: <span className="text-gray-400">{exp.tech}</span>
                        </span>
                      </div>
                    )}
                  </div>

                </div>
              </FadeUp>
            ))}
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
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">AI Engineer</span> building real-world systems
            </h2>
            <div className="space-y-5 text-foreground/70 leading-[1.7] text-[16px] sm:text-[17px] max-w-lg">
              <p>
                I&apos;m a full-stack developer focused on building production-grade AI systems using <span className="font-semibold text-white">LLMs</span>, <span className="font-semibold text-white">RAG</span>, and scalable backend architectures.
              </p>
              <p>
                I&apos;ve built and shipped multiple applications used by real users, combining modern frontend development with intelligent <span className="font-semibold text-white">AI systems</span>.
              </p>
              <p>
                Currently exploring multi-agent systems and advanced AI tooling.
              </p>
            </div>
            
            <div className="mt-10">
              <p className="text-sm font-medium text-foreground/50 mb-3 ml-0.5">
                Open to opportunities
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:anishsingh210204@gmail.com"
                  className="flex items-center gap-2 px-5 py-2.5 bg-white text-black text-[15px] font-semibold rounded-lg hover:bg-white/90 transition-all hover:-translate-y-0.5 shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-95"
                >
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </a>
                <a
                  href="https://linkedin.com/in/anish-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-white/[0.04] hover:bg-white/[0.08] text-white/80 hover:text-white border border-white/10 text-[15px] font-semibold rounded-lg transition-all hover:-translate-y-0.5 active:scale-95"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "12+", label: "Projects Shipped", sub: "Web & AI" },
              { value: "350+", label: "DSA Problems Solved", sub: "C++ & Java" },
              { value: "4+", label: "AI Systems Built", sub: "RAG, Agents" },
              { value: "2026", label: "Graduating 2026", sub: "AI & ML" },
            ].map(({ value, label, sub }) => (
              <div
                key={label}
                className="p-6 rounded-[1.5rem] bg-white/[0.015] border border-white/[0.06] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_4px_16px_rgba(0,0,0,0.1)] hover:bg-white/[0.03] hover:border-purple-500/[0.25] hover:-translate-y-1 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_12px_32px_rgba(139,92,246,0.12)] transition-all duration-300 ease-out"
              >
                <p className="text-3xl font-extrabold text-foreground mb-1.5 tracking-tight">{value}</p>
                <p className="text-[13px] font-semibold text-foreground/70">{label}</p>
                <p className="text-[11px] font-medium text-purple-400/80 mt-1">{sub}</p>
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
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("anishsingh210204@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1, delayChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#0a0a0f] overflow-hidden scroll-mt-20 border-t border-white/[0.06]">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15),transparent_70%)] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col items-center text-center"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text drop-shadow-sm pb-1"
          >
            Let&apos;s Connect
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-foreground/70 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            I&apos;m actively looking for Full-Stack / AI Engineering opportunities. Let&apos;s build something impactful.
          </motion.p>
          
          {/* Contact Card */}
          <motion.div 
            variants={itemVariants}
            className="w-full max-w-2xl bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 sm:p-10 shadow-lg relative"
          >
            {/* Contact Options */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <motion.button
                onClick={copyEmail}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative flex items-center justify-center gap-2.5 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-[0_0_25px_rgba(139,92,246,0.4)] transition-all duration-300 w-full sm:w-auto overflow-hidden group"
              >
                {copied ? <CheckCircle2 className="w-5 h-5 shrink-0" /> : <Mail className="w-5 h-5 shrink-0 group-hover:animate-bounce" />}
                {copied ? "Email Copied!" : "Email Me"}
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              </motion.button>

              <motion.a
                href="https://github.com/anishsingh234"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center gap-2.5 px-6 py-3 border border-white/20 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] text-foreground/90 hover:text-white font-semibold rounded-xl transition-all duration-300 w-full sm:w-auto"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="relative">
                  GitHub
                  <span className="absolute left-0 bottom-0 w-full h-[1.5px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </span>
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/anish-ai"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center gap-2.5 px-6 py-3 border border-white/20 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] text-foreground/90 hover:text-white font-semibold rounded-xl transition-all duration-300 w-full sm:w-auto"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="relative">
                  LinkedIn
                  <span className="absolute left-0 bottom-0 w-full h-[1.5px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </span>
              </motion.a>
            </div>

            {/* Optional Minimal Contact Form */}
            <div className="text-left relative pt-10 border-t border-white/10 mt-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0d0d14] px-4 py-1 border border-white/10 rounded-full">
                <span className="text-xs font-semibold text-foreground/50 uppercase tracking-widest whitespace-nowrap">
                  Or send a message
                </span>
              </div>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); e.target.reset(); }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Name" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all font-medium"
                    required
                  />
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all font-medium"
                    required
                  />
                </div>
                <textarea 
                  rows={4} 
                  placeholder="Message" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all resize-none font-medium"
                  required
                />
                <button 
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
            
          </motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="mt-12 text-foreground/60 font-medium tracking-wide flex items-center gap-2 group cursor-default"
          >
            Let&apos;s build something amazing together
            <span className="group-hover:animate-bounce">🚀</span>
          </motion.p>
        </motion.div>
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
