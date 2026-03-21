import React, { useEffect } from "react";
import Link from "next/link";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Code2, Zap, Layers, Clock, Award, Rocket, Brain, Layout, Database, Terminal, Wrench, ArrowRight } from "lucide-react";
import clsx from "clsx";

const SI = "https://skillicons.dev/icons?i=";

const ItemLayout = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 20 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -8 }}
      className={clsx(
        "relative overflow-hidden rounded-2xl p-6 sm:p-8 flex items-center justify-center space-y-8",
        "bg-gradient-to-br from-foreground/5 to-foreground/0 border border-foreground/10",
        "backdrop-blur-lg shadow-lg hover:shadow-2xl transition-all duration-300",
        "hover:border-accent/30 hover:bg-gradient-to-br hover:from-foreground/10 hover:to-foreground/5",
        className
      )}
    >
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={{
          background: "radial-gradient(circle at 50% 50%, rgba(253,255,80,0.1) 0%, transparent 70%)",
        }}
      />
      <div className="relative z-10 w-full">
        {children}
      </div>
    </motion.div>
  );
};

const techCategories = [
  {
    id: "ai-ml",
    label: "AI / ML",
    Icon: Brain,
    description: "Building RAG pipelines, AI agents, and production-ready LLM applications",
    featured: true,
    badge: "PRIMARY",
    tools: [
      { name: "LLMs", emoji: "🧠" },
      { name: "Prompt Engineering", emoji: "✍️" },
      { name: "LangChain", emoji: "⛓️", highlight: true },
      { name: "CrewAI", emoji: "🤖", highlight: true },
      { name: "RAG Systems", emoji: "📚" },
      { name: "Vector Databases", emoji: "🗄️" },
      { name: "Pinecone", emoji: "🌲" },
      { name: "Hugging Face", emoji: "🤗" },
      { name: "Ollama", emoji: "🦙" },
      { name: "Vercel AI SDK", emoji: "▲" },
      { name: "Tool Calling", emoji: "🛠️" },
      { name: "Multi-Agent Systems", emoji: "🕸️" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    Icon: Code2,
    description: "Designing scalable APIs and integrating AI systems into backend services",
    tools: [
      { name: "Node.js", si: "nodejs" },
      { name: "Express.js", si: "express" },
      { name: "FastAPI", si: "fastapi" },
      { name: "GraphQL", si: "graphql" },
      { name: "REST APIs", emoji: "🔌" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    Icon: Layout,
    description: "Building responsive, performant, and modern user interfaces",
    tools: [
      { name: "React.js", si: "react" },
      { name: "Next.js", si: "nextjs", highlight: true },
      { name: "React Native", si: "react" },
      { name: "Expo", si: "expo" },
      { name: "Tailwind CSS", si: "tailwind" },
      { name: "Three.js", si: "threejs" },
    ],
  },
  {
    id: "databases",
    label: "Databases & ORM",
    Icon: Database,
    description: "Designing efficient schemas and managing scalable data systems",
    tools: [
      { name: "MongoDB", si: "mongodb" },
      { name: "MySQL", si: "mysql" },
      { name: "Prisma ORM", si: "prisma" },
    ],
  },
  {
    id: "languages",
    label: "Languages",
    Icon: Terminal,
    description: "Strong foundation in problem-solving and system development",
    tools: [
      { name: "Python", si: "python" },
      { name: "JavaScript", si: "js" },
      { name: "TypeScript", si: "ts" },
      { name: "C++", si: "cpp" },
      { name: "C", si: "c" },
      { name: "SQL", emoji: "🗃️" },
      { name: "HTML5", si: "html" },
      { name: "CSS3", si: "css" },
    ],
  },
  {
    id: "tools",
    label: "Tools & Platforms",
    Icon: Wrench,
    description: "Shipping, deploying, and managing production-ready applications",
    tools: [
      { name: "Git", si: "git" },
      { name: "GitHub", si: "github" },
      { name: "Vercel", si: "vercel" },
      { name: "Clerk Auth", emoji: "🔑" },
      { name: "VS Code", si: "vscode" },
    ],
  },
];

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
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: "inset 0 0 0 1px rgba(253,255,80,0.25)" }}
      />
      <div className="flex items-center gap-2 xs:gap-2.5 mb-3">
        <div className="p-1.5 xs:p-2 rounded-lg bg-accent/10 border border-accent/20 shrink-0">
          <Icon className="w-3.5 xs:w-4 h-3.5 xs:h-4 text-accent" />
        </div>
        <h4 className="text-sm xs:text-base font-bold text-foreground">
          {category.label}
        </h4>
      </div>
      <p className="text-xs text-foreground/50 max-h-0 overflow-hidden opacity-0 group-hover:opacity-100 group-hover:max-h-20 group-hover:mb-3 transition-all duration-300">
        {category.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {category.tools.map((tool) => (
          <TechBadge key={tool.name} tool={tool} featured={false} />
        ))}
      </div>
    </motion.div>
  );
};

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
      <motion.div variants={itemVariants} className="mb-7 xs:mb-10">
        <h3 className="text-xl xs:text-2xl md:text-3xl font-bold text-accent mb-2">
          My Tech Stack
        </h3>
        <p className="text-sm xs:text-base text-foreground/60 max-w-2xl">
          The tools and technologies I use to build production-grade AI and
          scalable full-stack applications.
        </p>
      </motion.div>

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
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
              style={{
                background:
                  "radial-gradient(ellipse at 25% 30%, rgba(139,92,246,0.22) 0%, transparent 65%)",
              }}
            />
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
            <p className="relative z-10 text-xs xs:text-sm text-purple-200/80 mb-4 xs:mb-5">
              {featured.description}
            </p>
            <div className="relative z-10 flex flex-wrap gap-2">
              {featured.tools.map((tool) => (
                <TechBadge key={tool.name} tool={tool} featured={true} />
              ))}
            </div>
          </div>
        </motion.div>
      )}

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

// Framer Motion Animated Counter Component
function AnimatedNumber({ value }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, value, {
      duration: 2,
      delay: 0.3,
      type: "spring",
      bounce: 0.25,
    });
    return animation.stop;
  }, [value, count]);

  return <motion.span>{rounded}</motion.span>;
}

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
    <section className="py-16 sm:py-20 md:py-28 lg:py-32 w-full px-3 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        {/* Hero Bio Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-12 gap-4 sm:gap-6 md:gap-8 w-full mb-14 sm:mb-16 md:mb-20"
        >
          {/* Hero Bio Section */}
          <motion.div
            variants={itemVariants}
            className="col-span-full"
          >
            <ItemLayout className="flex-col items-start">
              <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Full-Stack Developer
                </span>
                <br />
                <span className="text-foreground">& AI Engineer</span>
              </h2>
              <p className="text-sm xs:text-base sm:text-lg text-foreground/70 leading-relaxed mb-4 sm:mb-6 max-w-2xl">
                I build scalable web applications with React, Next.js, and Node.js. I also work with AI and machine learning to create smart solutions. Currently pursuing B.Tech in CS (AI & ML).
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3 w-full">
                <Link
                  href="https://github.com/anishsingh234"
                  target="_blank"
                  className="px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 rounded-lg text-purple-400 font-medium transition-all duration-300 hover:scale-105"
                >
                  GitHub
                </Link>
                <Link
                  href="https://linkedin.com/in/anish-ai"
                  target="_blank"
                  className="px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm bg-foreground/5 hover:bg-foreground/10 border border-foreground/20 rounded-lg text-foreground font-medium transition-all duration-300 hover:scale-105"
                >
                  LinkedIn
                </Link>
                <Link
                  href="mailto:anishsingh210204@gmail.com"
                  className="px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm bg-foreground/5 hover:bg-foreground/10 border border-foreground/20 rounded-lg text-foreground font-medium transition-all duration-300 hover:scale-105"
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
          className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 w-full mb-12 sm:mb-16 md:mb-20"
        >
          {/* Stat Card 1 */}
          <motion.div variants={itemVariants}>
            <ItemLayout className="flex-col items-center justify-center text-center h-full">
                <div className="mb-2 sm:mb-3 p-2 sm:p-3 bg-purple-500/10 rounded-lg">
                <Code2 className="w-5 sm:w-6 h-5 sm:h-6 text-purple-400" />
              </div>
              <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-purple-400 mb-1"><AnimatedNumber value={7} />+</h3>
              <p className="text-xs sm:text-sm text-foreground/70">Projects Shipped</p>
            </ItemLayout>
          </motion.div>

          {/* Stat Card 2 */}
          <motion.div variants={itemVariants}>
            <ItemLayout className="flex-col items-center justify-center text-center h-full">
              <div className="mb-2 sm:mb-3 p-2 sm:p-3 bg-purple-500/10 rounded-lg">
                <Zap className="w-5 sm:w-6 h-5 sm:h-6 text-purple-400" />
              </div>
              <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-purple-400 mb-1"><AnimatedNumber value={350} />+</h3>
              <p className="text-xs sm:text-sm text-foreground/70">leetcode solved</p>
            </ItemLayout>
          </motion.div>

          {/* Stat Card 3 */}
          <motion.div variants={itemVariants}>
            <ItemLayout className="flex-col items-center justify-center text-center h-full">
              <div className="mb-2 sm:mb-3 p-2 sm:p-3 bg-purple-500/10 rounded-lg">
                <Clock className="w-5 sm:w-6 h-5 sm:h-6 text-purple-400" />
              </div>
              <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-purple-400 mb-1">Fresher</h3>
              <p className="text-xs sm:text-sm text-foreground/70">Ready to Learn</p>
            </ItemLayout>
          </motion.div>

          {/* Stat Card 4 */}
          <motion.div variants={itemVariants}>
            <ItemLayout className="flex-col items-center justify-center text-center h-full">
              <div className="mb-2 sm:mb-3 p-2 sm:p-3 bg-purple-500/10 rounded-lg">
                <Rocket className="w-5 sm:w-6 h-5 sm:h-6 text-purple-400" />
              </div>
              <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-purple-400 mb-1">Full Stack</h3>
              <p className="text-xs sm:text-sm text-foreground/70">Developer</p>
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
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <Award className="w-4 xs:w-5 h-4 xs:h-5 text-purple-400" />
                </div>
                <h3 className="text-lg xs:text-xl font-bold text-purple-400">Education</h3>
              </div>
              <div className="space-y-3 xs:space-y-4 w-full">
                <div className="pb-3 xs:pb-4 border-b border-foreground/10">
                  <p className="font-semibold text-foreground text-sm xs:text-base mb-1">B.Tech in Computer Science</p>
                  <p className="text-xs xs:text-sm text-foreground/70">Uttarakhand Technical University</p>
                  <p className="text-xs text-purple-400 mt-1">AI & ML Specialization | Graduating 2026</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm xs:text-base mb-1">Software Trainee</p>
                  <p className="text-xs xs:text-sm text-foreground/70">ExplorIn Academy</p>
                  <p className="text-xs text-purple-400 mt-1">Full-Stack Development | Production Applications</p>
                </div>
              </div>
            </ItemLayout>
          </motion.div>

          {/* Core Expertise */}
          <motion.div variants={itemVariants} className="col-span-full lg:col-span-6">
            <ItemLayout className="flex-col items-start">
              <div className="flex items-center gap-2 xs:gap-3 mb-4">
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <Layers className="w-4 xs:w-5 h-4 xs:h-5 text-purple-400" />
                </div>
                <h3 className="text-lg xs:text-xl font-bold text-purple-400">Core Expertise</h3>
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
                    className="px-2 xs:px-3 py-2 bg-purple-500/5 hover:bg-purple-500/10 rounded-lg border border-purple-500/20 transition-all duration-300"
                  >
                    <p className="text-xs xs:text-sm font-medium text-foreground">{skill}</p>
                  </div>
                ))}
              </div>
            </ItemLayout>
          </motion.div>
        </motion.div>

        {/* My Tech Stack */}
        <TechStack />

        {/* Highlighted Projects Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="col-span-full mb-12 xs:mb-16"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-xl xs:text-2xl font-bold text-purple-400 mb-4 xs:mb-6">Featured Projects</h3>
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
                  className="p-4 xs:p-6 bg-gradient-to-br from-purple-500/10 via-background/50 to-background rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                >
                  <p className="text-2xl xs:text-3xl mb-2 xs:mb-3">{project.icon}</p>
                  <h4 className="text-base xs:text-lg font-bold text-purple-400 mb-2">{project.title}</h4>
                  <p className="text-xs xs:text-sm text-foreground/70 mb-3 xs:mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full font-medium"
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
            <ItemLayout className="flex-col items-center justify-center text-center bg-gradient-to-r from-purple-500/10 to-purple-500/5">
              <p className="text-base xs:text-lg font-semibold text-purple-400 mb-3 xs:mb-4">Let&apos;s Build Something Amazing</p>
              <p className="text-foreground/70 mb-4 xs:mb-6 max-w-xl text-sm xs:text-base">
                I&apos;m always interested in hearing about new projects and opportunities in web development and AI.
              </p>
              <div className="flex flex-wrap gap-2 xs:gap-3 justify-center">
                <Link
                  href="mailto:anishsingh210204@gmail.com"
                  className="px-6 xs:px-8 py-2 xs:py-3 text-sm xs:text-base bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]"
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
