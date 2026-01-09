"use client";
import { motion } from "framer-motion";
import ProjectLayout from "./ProjectLayout";
import { useState, useMemo } from "react";
import { Filter } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const ProjectList = ({ projects }) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = useMemo(() => {
    const cats = {};
    projects.forEach((project) => {
      const category = project.status || "Other";
      if (!cats[category]) {
        cats[category] = [];
      }
      cats[category].push(project);
    });
    return cats;
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((p) => p.status === activeFilter);
  }, [activeFilter, projects]);

  const filterOptions = [
    { label: "All", value: "all", count: projects.length },
    ...Object.keys(categories).map((cat) => ({
      label: cat,
      value: cat,
      count: categories[cat].length,
    })),
  ];

  return (
    <div className="w-full min-h-screen py-16 md:py-20 px-4 md:px-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto mb-16 md:mb-20"
      >
        <div className="text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-accent/10 border border-accent/30 rounded-full"
          >
            <span className="text-xs sm:text-sm font-medium text-accent">💼 Portfolio Showcase</span>
          </motion.div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-accent via-accent/80 to-accent/60 bg-clip-text text-transparent">
              My Projects
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            A collection of web applications, AI tools, and full-stack solutions I&apos;ve built using modern technologies.
          </p>
        </div>
      </motion.div>


      {/* Filter Section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="max-w-6xl mx-auto mb-16"
      >
        <div className="flex flex-col items-center gap-3 sm:gap-4 px-4">
          <div className="flex items-center gap-2 text-foreground/60">
            <Filter size={16} className="sm:w-[18px] sm:h-[18px]" />
            <span className="text-xs sm:text-sm font-medium">Filter by Status</span>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {filterOptions.map((option) => (
              <motion.button
                key={option.value}
                onClick={() => setActiveFilter(option.value)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeFilter === option.value
                    ? "bg-accent text-background shadow-lg shadow-accent/30"
                    : "bg-foreground/5 text-foreground/70 hover:bg-foreground/10 border border-foreground/10 hover:border-accent/30"
                }`}
              >
                <span>{option.label}</span>
                <span className={`ml-1.5 sm:ml-2 text-[10px] sm:text-xs ${
                  activeFilter === option.value ? "opacity-80" : "opacity-60"
                }`}>({option.count})</span>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto"
      >
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectLayout key={project.id || index} {...project} index={index} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <p className="text-muted text-lg">No projects found in this category.</p>
          </motion.div>
        )}
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="max-w-6xl mx-auto mt-20 md:mt-24"
      >
        <div className="p-6 sm:p-8 md:p-10 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent border border-accent/20 rounded-2xl mx-4">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-accent">Project Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { value: projects.length, label: "Total Projects", icon: "📊" },
              { value: projects.filter((p) => p.status?.toLowerCase() === "completed").length, label: "Completed", icon: "✅" },
              { value: projects.filter((p) => p.status?.toLowerCase() === "always working").length, label: "Active", icon: "🔄" },
              { value: new Set(projects.flatMap((p) => p.techStack || [])).size, label: "Technologies", icon: "⚡" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-3 sm:p-4 bg-background/40 rounded-xl border border-foreground/10 hover:border-accent/30 transition-all duration-300"
              >
                <div className="text-2xl sm:text-3xl mb-1.5 sm:mb-2">{stat.icon}</div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-1.5 sm:mb-2">{stat.value}</div>
                <p className="text-xs sm:text-sm text-foreground/70 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectList;