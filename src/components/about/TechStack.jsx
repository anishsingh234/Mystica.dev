"use client";
import React from "react";
import { motion } from "framer-motion";
import { Brain, Code2, Layout, Database, Terminal, Wrench } from "lucide-react";

const SI = "https://skillicons.dev/icons?i=";

const techCategories = [
  {
    id: "ai-ml",
    label: "AI / ML",
    Icon: Brain,
    description: "Building RAG pipelines, AI agents, and production-ready LLM applications",
    featured: true,
    badge: "PRIMARY",
    tools: [
      { name: "LLMs",               emoji: "🧠" },
      { name: "Prompt Engineering",  emoji: "✍️" },
      { name: "LangChain",           emoji: "⛓️",  highlight: true },
      { name: "CrewAI",              emoji: "🤖",  highlight: true },
      { name: "RAG Systems",         emoji: "📚" },
      { name: "Vector Databases",    emoji: "🗄️" },
      { name: "Pinecone",            emoji: "🌲" },
      { name: "Hugging Face",        emoji: "🤗" },
      { name: "Ollama",              emoji: "🦙" },
      { name: "Vercel AI SDK",       emoji: "▲" },
      { name: "Tool Calling",        emoji: "🛠️" },
      { name: "Multi-Agent Systems", emoji: "🕸️" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    Icon: Code2,
    description: "Designing scalable APIs and integrating AI systems into backend services",
    tools: [
      { name: "Node.js",    si: "nodejs" },
      { name: "Express.js", si: "express" },
      { name: "FastAPI",    si: "fastapi" },
      { name: "GraphQL",    si: "graphql" },
      { name: "REST APIs",  emoji: "🔌" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    Icon: Layout,
    description: "Building responsive, performant, and modern user interfaces",
    tools: [
      { name: "React.js",     si: "react" },
      { name: "Next.js",      si: "nextjs", highlight: true },
      { name: "React Native", si: "react" },
      { name: "Expo",         si: "expo" },
      { name: "Tailwind CSS", si: "tailwind" },
      { name: "Three.js",     si: "threejs" },
    ],
  },
  {
    id: "databases",
    label: "Databases & ORM",
    Icon: Database,
    description: "Designing efficient schemas and managing scalable data systems",
    tools: [
      { name: "MongoDB",    si: "mongodb" },
      { name: "MySQL",      si: "mysql" },
      { name: "Prisma ORM", si: "prisma" },
    ],
  },
  {
    id: "languages",
    label: "Languages",
    Icon: Terminal,
    description: "Strong foundation in problem-solving and system development",
    tools: [
      { name: "Python",     si: "python" },
      { name: "JavaScript", si: "js" },
      { name: "TypeScript", si: "ts" },
      { name: "C++",        si: "cpp" },
      { name: "C",          si: "c" },
      { name: "SQL",        emoji: "🗃️" },
      { name: "HTML5",      si: "html" },
      { name: "CSS3",       si: "css" },
    ],
  },
  {
    id: "tools",
    label: "Tools & Platforms",
    Icon: Wrench,
    description: "Shipping, deploying, and managing production-ready applications",
    tools: [
      { name: "Git",        si: "git" },
      { name: "GitHub",     si: "github" },
      { name: "Vercel",     si: "vercel" },
      { name: "Clerk Auth", emoji: "🔑" },
      { name: "VS Code",    si: "vscode" },
    ],
  },
];

/* ─── Individual tech badge ─── */
const TechBadge = ({ tool, featured = false }) => {
  const icon = tool.si ? (
    <img
      src={`${SI}${tool.si}`}
      alt=""
      width={14}
      height={14}
      className="shrink-0 object-contain"
    />
  ) : (
    <span className="text-xs leading-none">{tool.emoji}</span>
  );

  if (featured) {
    return (
      <span
        className={`inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full font-medium transition-all duration-200 ${
          tool.highlight
            ? "bg-gradient-to-r from-purple-500/35 to-blue-500/25 border border-purple-400/60 text-purple-100 shadow-sm shadow-purple-500/20"
            : "bg-white/5 border border-white/10 text-white/70 hover:border-purple-400/30 hover:text-white"
        }`}
      >
        {icon}
        {tool.name}
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-lg font-medium transition-all duration-200 ${
        tool.highlight
          ? "bg-accent/20 border border-accent/40 text-accent"
          : "bg-foreground/5 border border-foreground/10 text-foreground/70 hover:border-accent/20 hover:text-foreground"
      }`}
    >
      {icon}
      {tool.name}
    </span>
  );
};

/* ─── Regular category card ─── */
const CategoryCard = ({ category }) => {
  const { Icon } = category;
  return (
    <motion.div
      className="relative rounded-xl p-4 xs:p-5 overflow-hidden group"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
    >
      {/* Hover border glow overlay */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: "inset 0 0 0 1px rgba(253,255,80,0.25)" }}
      />

      {/* Header */}
      <div className="flex items-center gap-2 xs:gap-2.5 mb-3">
        <div className="p-1.5 xs:p-2 rounded-lg bg-accent/10 border border-accent/20 shrink-0">
          <Icon className="w-3.5 xs:w-4 h-3.5 xs:h-4 text-accent" />
        </div>
        <h4 className="text-sm xs:text-base font-bold text-foreground">
          {category.label}
        </h4>
      </div>

      {/* Description — slides in on hover */}
      <p className="text-xs text-foreground/50 max-h-0 overflow-hidden opacity-0 group-hover:opacity-100 group-hover:max-h-20 group-hover:mb-3 transition-all duration-300">
        {category.description}
      </p>

      {/* Tech badges */}
      <div className="flex flex-wrap gap-1.5">
        {category.tools.map((tool) => (
          <TechBadge key={tool.name} tool={tool} featured={false} />
        ))}
      </div>
    </motion.div>
  );
};

/* ─── Main TechStack section ─── */
const TechStack = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.09 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const featured = techCategories.find((c) => c.featured);
  const rest = techCategories.filter((c) => !c.featured);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="col-span-full mb-12 xs:mb-16"
    >
      {/* ── Section Header ── */}
      <motion.div variants={itemVariants} className="mb-7 xs:mb-10">
        <h3 className="text-xl xs:text-2xl md:text-3xl font-bold text-accent mb-2">
          My Tech Stack
        </h3>
        <p className="text-sm xs:text-base text-foreground/60 max-w-2xl">
          The tools and technologies I use to build production-grade AI and
          scalable full-stack applications.
        </p>
      </motion.div>

      {/* ── Featured AI / ML Card ── */}
      {featured && (
        <motion.div variants={itemVariants} className="mb-5 xs:mb-6">
          <div
            className="relative rounded-2xl p-6 sm:p-8 overflow-hidden group"
            style={{
              background:
                "linear-gradient(135deg, rgba(139,92,246,0.18) 0%, rgba(59,130,246,0.10) 55%, rgba(0,0,0,0) 100%)",
              border: "1px solid rgba(139,92,246,0.42)",
              boxShadow: "0 0 32px rgba(139,92,246,0.12)",
            }}
          >
            {/* Radial glow on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
              style={{
                background:
                  "radial-gradient(ellipse at 25% 30%, rgba(139,92,246,0.22) 0%, transparent 65%)",
              }}
            />

            {/* Header row */}
            <div className="relative z-10 flex items-center justify-between mb-3 xs:mb-4">
              <div className="flex items-center gap-2.5 xs:gap-3">
                <div className="p-2 xs:p-2.5 rounded-xl bg-purple-500/20 border border-purple-500/30">
                  <Brain className="w-4 xs:w-5 h-4 xs:h-5 text-purple-400" />
                </div>
                <h4 className="text-base xs:text-lg sm:text-xl font-bold text-white">
                  {featured.label}
                </h4>
              </div>
              <span className="shrink-0 ml-2 text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white tracking-wider">
                {featured.badge}
              </span>
            </div>

            {/* Description — always visible on featured card */}
            <p className="relative z-10 text-xs xs:text-sm text-purple-200/80 mb-4 xs:mb-5">
              {featured.description}
            </p>

            {/* Tech badges */}
            <div className="relative z-10 flex flex-wrap gap-2">
              {featured.tools.map((tool) => (
                <TechBadge key={tool.name} tool={tool} featured={true} />
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* ── Remaining Category Cards ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 xs:gap-5">
        {rest.map((category) => (
          <motion.div key={category.id} variants={itemVariants}>
            <CategoryCard category={category} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TechStack;
