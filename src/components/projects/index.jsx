"use client";
import { motion } from "framer-motion";
import ProjectLayout from "./ProjectLayout";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const ProjectList = ({ projects }) => {
  return (
    <div className="w-full min-h-screen py-12 md:py-20 px-4 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto mb-12 md:mb-16"
      >
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent">
          Projects
        </h1>
       <p className="text-foreground/80 text-center text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
          A collection of projects showcasing full-stack development, competitive programming, and modern web technologies.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8"
      >
        {projects.map((project, index) => (
          <ProjectLayout key={project.id || index} {...project} index={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectList;