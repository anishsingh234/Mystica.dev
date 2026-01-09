"use client"
import Image from "next/image";

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

const TechLogo = ({ tech, size = 16 }) => {
  const logoUrl = getTechLogo(tech);
  
  return (
    <Image
      src={logoUrl}
      alt={`${tech} logo`}
      width={size}
      height={size}
      className="shrink-0 transition-transform duration-200"
      onError={(e) => {
        e.target.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg";
      }}
      loading="lazy"
    />
  );
};

const StatusBadge = ({ status }) => {
  const getStatusConfig = (status) => {
    switch (status?.toLowerCase()) {
      case "completed":
        return {
          color: "bg-green-500/20 text-green-400 border-green-500/40 shadow-green-500/20",
          label: "✓ Completed",
          icon: "✓"
        };
      case "always working":
        return {
          color: "bg-orange-500/20 text-orange-400 border-orange-500/40 shadow-orange-500/20",
          label: "⚡ Active",
          icon: "⚡"
        };
      case "in progress":
        return {
          color: "bg-blue-500/20 text-blue-400 border-blue-500/40 shadow-blue-500/20",
          label: "🔄 In Progress",
          icon: "🔄"
        };
      default:
        return {
          color: "bg-gray-500/20 text-gray-400 border-gray-500/40 shadow-gray-500/20",
          label: status,
          icon: "•"
        };
    }
  };

  const config = getStatusConfig(status);

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border shadow-lg ${config.color}`}>
      {config.label}
    </span>
  );
};

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
};

const ProjectLink = motion(Link);

const ProjectLayout = ({ id, name, description, status, techStack = [], GithubLink, index }) => {
  return (
    <ProjectLink
      variants={item}
      href={GithubLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative border border-foreground/10 rounded-2xl p-5 sm:p-6 md:p-8 h-full bg-gradient-to-br from-foreground/[0.03] to-foreground/[0.01] hover:from-accent/[0.08] hover:to-accent/[0.03] hover:border-accent/40 transition-all duration-300 flex flex-col backdrop-blur-sm overflow-hidden group"
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10" />
        
        <div className="relative z-10">
          {/* Header */}
          <div className="mb-5">
            <div className="flex items-start justify-between gap-3 mb-4">
              <h2 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300 leading-tight">
                {name}
              </h2>
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.5 }}
              >
                <Github size={24} className="text-foreground/40 group-hover:text-accent transition-colors duration-300 shrink-0" />
              </motion.div>
            </div>
            <StatusBadge status={status} />
          </div>

          {/* Description */}
          <p className="text-base text-foreground/70 mb-6 flex-1 line-clamp-3 leading-relaxed">
            {description}
          </p>

          {/* Tech Stack */}
          {techStack.length > 0 && (
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {techStack.slice(0, 6).map((tech, idx) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm bg-foreground/5 border border-foreground/10 group-hover:border-accent/30 group-hover:bg-accent/10 transition-all duration-200"
                    title={tech}
                  >
                    <TechLogo tech={tech} size={16} />
                    <span className="text-foreground/80 font-medium">{tech}</span>
                  </motion.div>
                ))}
                {techStack.length > 6 && (
                  <div className="flex items-center px-3 py-2 rounded-lg text-sm text-foreground/60 bg-foreground/5 border border-foreground/10 font-medium">
                    +{techStack.length - 6} more
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Footer with arrow animation */}
          <div className="flex items-center justify-between pt-5 border-t border-foreground/10 group-hover:border-accent/30 transition-colors">
            <span className="text-sm font-medium text-foreground/70 group-hover:text-accent transition-colors">View Project</span>
            <motion.div
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <ExternalLink size={18} className="text-foreground/40 group-hover:text-accent transition-colors duration-300" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </ProjectLink>
  );
};

export default ProjectLayout;
