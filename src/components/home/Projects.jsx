"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight, ExternalLink, Github } from "lucide-react";
import { SectionHeader } from "./SharedComponents";

export const featuredProjects = [
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

function ProjectCard({ project }) {
  return (
    <div className="relative h-full group perspective-1000">
      {project.featured && (
        <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-br from-purple-500/30 via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      )}
      <div className={`absolute inset-0 rounded-[2rem] bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500 -z-10 pointer-events-none ${!project.featured && 'from-white/10 via-white/5'}`} />

      <motion.div
        whileHover={{ scale: 1.02, y: -4 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative flex flex-col h-full rounded-[2rem] bg-[#0A0A0E]/80 backdrop-blur-xl border border-white/10 group-hover:border-purple-500/30 overflow-hidden transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.2)] group-hover:shadow-[0_10px_40px_rgba(139,92,246,0.25)]"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none z-10" />

        {project.featured && (
          <div className="absolute top-5 right-5 z-20">
            <span className="relative flex items-center justify-center px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full shadow-[0_4px_12px_rgba(139,92,246,0.4)] overflow-hidden group/tag">
              <span className="absolute inset-0 w-full h-full bg-white/20 translate-x-[-100%] group-hover/tag:translate-x-[100%] transition-transform duration-700 ease-out" />
              Featured
            </span>
          </div>
        )}

        <div className="relative w-full aspect-[16/10] overflow-hidden border-b border-white/[0.06] bg-[#050508]">
          <Image
            src={project.image}
            alt={`${project.name} background blur`}
            fill
            unoptimized
            className="object-cover blur-[24px] opacity-40 scale-125 saturate-150 group-hover:opacity-60 transition-all duration-700 pointer-events-none"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <Image
            src={project.image}
            alt={project.name}
            fill
            unoptimized
            className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] group-hover:scale-[1.03] transition-transform duration-700 ease-out z-10 p-2 sm:p-4"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(5,5,8,0.7)_120%)] z-20 pointer-events-none transition-opacity duration-500 group-hover:opacity-50" />
          <div className="absolute inset-0 bg-[#0A0A0E]/10 group-hover:bg-transparent transition-colors duration-500 z-20 pointer-events-none" />
        </div>

        <div className="p-7 flex flex-col flex-1 relative z-20">
          <div className="flex items-center justify-between mb-3">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-purple-400 drop-shadow-sm group-hover:text-purple-300 transition-colors">
              {project.tag}
            </p>
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

export default function Projects() {
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
            View all projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
