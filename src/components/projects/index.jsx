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
        className="max-w-6xl mx-auto mb-12 md:mb-16"
      >
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-foreground">
            Projects
          </h1>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            A selection of web applications and tools I've built.
          </p>
        </div>
      </motion.div>


      {/* Filter Section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="max-w-6xl mx-auto mb-12"
      >
        <div className="flex items-center justify-center flex-wrap gap-3">
          <Filter size={16} className="text-foreground/60" />
          <div className="flex flex-wrap gap-2 justify-center">
            {filterOptions.map((option) => (
              <motion.button
                key={option.value}
                onClick={() => setActiveFilter(option.value)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeFilter === option.value
                    ? "bg-accent text-background"
                    : "bg-foreground/10 text-foreground/70 hover:bg-foreground/20"
                }`}
              >
                {option.label} ({option.count})
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
        transition={{ delay: 0.4, duration: 0.6 }}
        className="max-w-6xl mx-auto mt-16 md:mt-20 pt-12 border-t border-foreground/10"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { value: projects.length, label: "Total Projects" },
            { value: projects.filter((p) => p.status?.toLowerCase() === "completed").length, label: "Completed" },
            { value: projects.filter((p) => p.status?.toLowerCase() === "always working").length, label: "Active" },
            { value: new Set(projects.flatMap((p) => p.techStack || [])).size, label: "Technologies" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + idx * 0.08 }}
              className="py-4"
            >
              <div className="text-2xl md:text-3xl font-bold text-accent mb-2">{stat.value}</div>
              <p className="text-sm text-foreground/70">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectList;