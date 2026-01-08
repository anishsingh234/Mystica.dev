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
          color: "bg-green-500/20 text-green-400 border-green-500/30",
          label: "Completed"
        };
      case "always working":
        return {
          color: "bg-orange-500/20 text-orange-400 border-orange-500/30",
          label: "Active"
        };
      case "in progress":
        return {
          color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
          label: "In Progress"
        };
      default:
        return {
          color: "bg-gray-500/20 text-gray-400 border-gray-500/30",
          label: status
        };
    }
  };

  const config = getStatusConfig(status);

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${config.color}`}>
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
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="border border-foreground/10 rounded-lg p-6 h-full bg-foreground/[0.02] hover:bg-foreground/[0.05] hover:border-accent/30 transition-all duration-300 flex flex-col"
      >
        {/* Header */}
        <div className="mb-4">
          <div className="flex items-start justify-between gap-3 mb-3">
            <h2 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
              {name}
            </h2>
            <Github size={20} className="text-foreground/40 group-hover:text-accent transition-colors duration-300 shrink-0" />
          </div>
          <StatusBadge status={status} />
        </div>

        {/* Description */}
        <p className="text-sm text-foreground/70 mb-4 flex-1 line-clamp-3">
          {description}
        </p>

        {/* Tech Stack */}
        {techStack.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {techStack.slice(0, 5).map((tech) => (
                <div
                  key={tech}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded text-xs bg-foreground/5 border border-foreground/10 group-hover:border-accent/20 transition-colors duration-200"
                  title={tech}
                >
                  <TechLogo tech={tech} size={14} />
                  <span className="text-foreground/70">{tech}</span>
                </div>
              ))}
              {techStack.length > 5 && (
                <div className="px-2.5 py-1.5 rounded text-xs text-foreground/60">
                  +{techStack.length - 5}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-foreground/10">
          <span className="text-xs text-foreground/60">View on GitHub</span>
          <ExternalLink size={16} className="text-foreground/40 group-hover:text-accent transition-colors duration-300" />
        </div>
      </motion.div>
    </ProjectLink>
  );
};

export default ProjectLayout;
