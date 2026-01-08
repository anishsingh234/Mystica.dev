"use client";
import { motion } from "framer-motion";
import ProjectLayout from "./ProjectLayout";
import { useState, useMemo } from "react";
import { Zap, Filter } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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
    { label: "All Projects", value: "all", count: projects.length },
    ...Object.keys(categories).map((cat) => ({
      label: cat,
      value: cat,
      count: categories[cat].length,
    })),
  ];

  return (
    <div className="w-full min-h-screen py-16 sm:py-20 md:py-24 px-3 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto mb-14 sm:mb-16 md:mb-20 relative"
      >
        {/* Background decoration */}
        <motion.div
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-accent/20 via-transparent to-accent/20 rounded-full blur-3xl opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        
        <div className="text-center relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-accent/20 to-accent/10 border border-accent/30 mb-4 sm:mb-6 backdrop-blur-sm shadow-lg shadow-accent/10"
          >
            <Zap size={16} className="text-accent animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-accent">Featured Projects</span>
          </motion.div>

          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4 sm:mb-6 bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent leading-tight px-2">
            My Work
          </h1>
          <p className="text-foreground/70 text-center text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium px-2">
            Full-stack applications, AI solutions, and creative web projects built with modern technologies.
          </p>
        </div>
      </motion.div>

      {/* Filter Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="max-w-6xl mx-auto mb-12 sm:mb-14 md:mb-18"
      >
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {/* Decorative background */}
          <div className="absolute -inset-2 bg-gradient-to-r from-accent/5 via-transparent to-accent/5 rounded-2xl blur-2xl -z-10" />
          
          <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 p-4 sm:p-6 rounded-xl border border-foreground/10 bg-foreground/[0.02] backdrop-blur-sm">
            <div className="flex items-center space-x-2 text-muted mb-3 sm:mb-0 w-full sm:w-auto justify-center sm:justify-start">
              <Filter size={16} className="text-accent" />
              <span className="text-xs sm:text-sm font-medium">Filter:</span>
            </div>
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              {filterOptions.map((option) => (
                <motion.button
                  key={option.value}
                  onClick={() => setActiveFilter(option.value)}
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center space-x-2 relative overflow-hidden group ${
                    activeFilter === option.value
                      ? "bg-gradient-to-r from-accent/40 to-accent/20 border border-accent/60 text-accent shadow-lg shadow-accent/20"
                      : "bg-gradient-to-r from-foreground/5 to-foreground/0 border border-foreground/15 text-foreground/70 hover:bg-gradient-to-r hover:from-foreground/10 hover:to-foreground/5 hover:border-foreground/30"
                  }`}
                >
                  {/* Animated background for active state */}
                  {activeFilter === option.value && (
                    <motion.div
                      layoutId="activeFilter"
                      className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{option.label}</span>
                  <motion.span
                    animate={{ scale: activeFilter === option.value ? 1.2 : 1 }}
                    className="text-xs opacity-70 relative z-10"
                  >
                    ({option.count})
                  </motion.span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto"
      >
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 xs:gap-4 md:gap-6 lg:gap-8">
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

      {/* Stats Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="max-w-6xl mx-auto mt-16 sm:mt-20 md:mt-28 pt-12 sm:pt-16 border-t border-foreground/10 relative"
      >
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-accent/5 via-transparent to-transparent rounded-2xl blur-3xl -z-10" />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 text-center">
          {[
            { value: projects.length, label: "Projects", icon: "📁" },
            { value: projects.filter((p) => p.status?.toLowerCase() === "completed").length, label: "Completed", icon: "✅" },
            { value: projects.filter((p) => p.status?.toLowerCase() === "always working").length, label: "In Progress", icon: "🚀" },
            { value: new Set(projects.flatMap((p) => p.techStack || [])).size, label: "Tech Stack", icon: "⚙️" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + idx * 0.1 }}
              whileHover={{ y: -4, scale: 1.05 }}
              className="p-3 sm:p-4 md:p-5 rounded-xl bg-gradient-to-br from-foreground/5 to-foreground/0 border border-foreground/10 hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              <motion.div
                className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
              >
                {stat.icon}
              </motion.div>
              <div className="text-lg sm:text-2xl md:text-3xl font-bold text-accent mb-1 sm:mb-2">{stat.value}</div>
              <p className="text-xs sm:text-sm text-foreground/70">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectList;