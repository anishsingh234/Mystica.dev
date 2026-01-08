"use client"
const techStackLogos = {
  "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "PrismaORM": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
  "Prisma": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "TailwindCSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg",
  "ConvexDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", 
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Express": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "Django": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  "Vue.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  "Angular": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  "Firebase": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "Redis": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "AWS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
  "GraphQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "HTML": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "SCSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
  "Sass": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
  "Bootstrap": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  "Material-UI": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
  "Flutter": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  "React Native": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Linux": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  "Ubuntu": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg",
  "Windows": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
  "Figma": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  "Webpack": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
  "Babel": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg",
  "ESLint": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg",
  "GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "GitLab": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
  "Yarn": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg",
  "npm": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
};

const getTechLogo = (tech) => {
  return techStackLogos[tech] || "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg";
};

// TechLogo Component for better error handling and performance
const TechLogo = ({ tech, size = 16 }) => {
  const logoUrl = getTechLogo(tech);
  
  return (
    <img
      src={logoUrl}
      alt={`${tech} logo`}
      width={size}
      height={size}
      className="shrink-0 group-hover/tech:scale-110 transition-transform duration-200"
      onError={(e) => {
        // Fallback to a generic code icon if logo fails to load
        e.target.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg";
      }}
      loading="lazy"
    />
  );
};

// StatusBadge component
const StatusBadge = ({ status }) => {
  const getStatusConfig = (status) => {
    switch (status?.toLowerCase()) {
      case "completed":
        return {
          color: "from-green-500/20 to-emerald-500/20 border-green-500/30 text-green-400",
          icon: "✅",
          pulse: false
        };
      case "always working":
        return {
          color: "from-orange-500/20 to-yellow-500/20 border-orange-500/30 text-orange-400",
          icon: "🔄",
          pulse: true
        };
      case "in progress":
        return {
          color: "from-blue-500/20 to-cyan-500/20 border-blue-500/30 text-blue-400",
          icon: "🚧",
          pulse: true
        };
      default:
        return {
          color: "from-gray-500/20 to-slate-500/20 border-gray-500/30 text-gray-400",
          icon: "📋",
          pulse: false
        };
    }
  };

  const config = getStatusConfig(status);

  return (
    <div className={`
      inline-flex items-center space-x-2 px-3 py-1.5 rounded-full text-xs font-medium
      bg-gradient-to-r ${config.color} border backdrop-blur-sm
      ${config.pulse ? 'animate-pulse' : ''}
    `}>
      <span className="text-sm">{config.icon}</span>
      <span className="capitalize">{status}</span>
    </div>
  );
};

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { ExternalLink, Github, Code, Sparkles, Layers, Clock } from "lucide-react";

const item = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
};

const ProjectLink = motion(Link);

const ProjectLayout = ({ id, name, description, status, techStack = [], GithubLink, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  

  const getAccentColor = (index, status) => {
    if (status?.toLowerCase() === "always working") {
      return 'from-orange-500/10 to-yellow-500/10 border-orange-500/20';
    }
    if (status?.toLowerCase() === "completed") {
      return 'from-green-500/10 to-emerald-500/10 border-green-500/20';
    }
    
    const colors = [
      'from-blue-500/10 to-cyan-500/10 border-blue-500/20',
      'from-purple-500/10 to-pink-500/10 border-purple-500/20', 
      'from-indigo-500/10 to-blue-500/10 border-indigo-500/20',
      'from-teal-500/10 to-cyan-500/10 border-teal-500/20',
    ];
    return colors[index % colors.length];
  };

  return (
    <ProjectLink
      variants={item}
      href={GithubLink}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group block w-full h-full"
    >
      <motion.div
        whileHover={{ 
          scale: 1.05,
          y: -12,
          transition: { duration: 0.3, type: "spring", stiffness: 400, damping: 30 }
        }}
        whileTap={{ scale: 0.97 }}
        className={`
          relative overflow-hidden rounded-2xl p-5 md:p-6 lg:p-8 h-full
          bg-gradient-to-br ${getAccentColor(index, status)}
          backdrop-blur-lg border
          shadow-2xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]
          transition-all duration-300 ease-out
          min-h-[320px] md:min-h-[360px]
          flex flex-col
          before:absolute before:inset-0 before:rounded-2xl before:opacity-0 before:hover:opacity-100 before:bg-gradient-to-t before:from-foreground/5 before:to-transparent before:transition-opacity before:duration-500
        `}
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          animate={{
            background: isHovered 
              ? 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 0%, transparent 70%)'
              : 'radial-gradient(circle at 0% 0%, rgba(255,255,255,0.05) 0%, transparent 70%)'
          }}
          transition={{ duration: 0.4 }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Header Section */}
          <div className="flex items-start justify-between mb-5 gap-3 pb-3 border-b border-foreground/10">
            <div className="flex items-start space-x-3 flex-1 min-w-0">
              <motion.div
                animate={{ rotate: isHovered ? 12 : 0 }}
                transition={{ duration: 0.4 }}
                className="p-3 rounded-xl bg-gradient-to-br from-foreground/20 to-foreground/10 border border-foreground/20 shrink-0 group-hover:from-accent/40 group-hover:to-accent/20 group-hover:border-accent/40 transition-all duration-300 shadow-lg shadow-foreground/10 group-hover:shadow-accent/20"
              >
                <Code size={20} className="text-foreground group-hover:text-accent transition-colors duration-300" />
              </motion.div>
              <div className="min-w-0 flex-1">
                <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300 line-clamp-2">
                  {name}
                </h2>
                <div className="flex items-center space-x-2 mt-2 flex-wrap gap-1">
                  <Clock size={12} className="text-muted shrink-0" />
                  <span className="text-xs md:text-sm text-muted/80 font-medium">
                    Project #{String(id).padStart(2, '0')}
                  </span>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ 
                x: isHovered ? 4 : 0,
                y: isHovered ? -4 : 0,
                scale: isHovered ? 1.2 : 1 
              }}
              transition={{ duration: 0.3 }}
              className="opacity-40 group-hover:opacity-100 transition-opacity duration-300 shrink-0 text-accent"
            >
              <Github size={24} />
            </motion.div>
          </div>

          {/* Status Badge */}
          <div className="mb-4">
            <StatusBadge status={status} />
          </div>

          {/* Description */}
          <div className="flex-1 mb-4">
            <p className="text-muted text-sm md:text-base leading-relaxed group-hover:text-foreground/90 transition-colors duration-300 line-clamp-4 font-medium">
              {description}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="mb-4">
            <div className="flex items-center space-x-2 mb-3">
              <motion.div
                animate={{ rotate: isHovered ? 360 : 0 }}
                transition={{ duration: 0.6 }}
              >
                <Layers size={14} className="text-accent" />
              </motion.div>
              <span className="text-xs md:text-sm font-medium text-muted">Tech Stack</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {techStack.slice(0, 6).map((tech, techIndex) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.6, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: techIndex * 0.08, type: "spring", stiffness: 500, damping: 30 }}
                  whileHover={{ scale: 1.1, y: -4 }}
                  className="flex items-center space-x-1.5 px-3 py-2 rounded-lg bg-gradient-to-br from-foreground/10 to-foreground/5 border border-foreground/20 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/20 transition-all duration-200 group/tech cursor-default"
                  title={tech}
                >
                  <motion.div
                    whileHover={{ rotate: 12 }}
                    transition={{ duration: 0.3 }}
                  >
                    <TechLogo tech={tech} size={16} />
                  </motion.div>
                  <span className="text-xs md:text-sm font-semibold text-foreground/80 group-hover/tech:text-accent transition-colors duration-200">
                    {tech}
                  </span>
                </motion.div>
              ))}
              {techStack.length > 6 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center px-3 py-2 rounded-lg bg-gradient-to-br from-accent/20 to-accent/10 border border-accent/30 hover:border-accent/50 transition-all duration-200"
                >
                  <span className="text-xs font-medium text-accent">+{techStack.length - 6} more</span>
                </motion.div>
              )}
            </div>
          </div>

          {/* Bottom section */}
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-foreground/10">
            <motion.div
              className="flex items-center space-x-2 text-accent opacity-0 group-hover:opacity-100"
              initial={{ x: -10 }}
              animate={{ x: isHovered ? 0 : -10 }}
              transition={{ duration: 0.3 }}
            >
              <Sparkles size={16} />
              <span className="text-sm font-medium">View Code</span>
            </motion.div>

            <motion.div
              className="text-xs text-muted/60 group-hover:text-muted transition-colors duration-300"
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.2 }}
            >
              <ExternalLink size={14} />
            </motion.div>
          </div>
        </div>

        {/* Corner decorations */}
        <motion.div
          className="absolute top-4 right-4 w-3 h-3 rounded-full bg-accent opacity-0 group-hover:opacity-100 shadow-lg shadow-accent/50"
          animate={{ 
            scale: isHovered ? [1, 1.8, 1] : 1,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ 
            duration: 2.5,
            repeat: isHovered ? Infinity : 0,
            repeatType: "reverse"
          }}
        />

        {/* Animated corner accent */}
        <motion.div
          className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100"
          animate={{ scale: isHovered ? 1 : 0.8 }}
          transition={{ duration: 0.4 }}
        />

        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/10 via-transparent to-transparent pointer-events-none" />
      </motion.div>
    </ProjectLink>
  );
};

export default ProjectLayout;