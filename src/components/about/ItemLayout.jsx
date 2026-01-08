"use client";
import { motion } from "framer-motion";
import clsx from "clsx";

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
      {/* Background glow effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={{
          background: "radial-gradient(circle at 50% 50%, rgba(253,255,80,0.1) 0%, transparent 70%)",
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </motion.div>
  );
};

export default ItemLayout;