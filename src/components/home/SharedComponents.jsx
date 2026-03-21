"use client";
import { motion } from "framer-motion";

// Expo-out easing — same feel as Apple / Stripe
export const EASE = [0.16, 1, 0.3, 1];

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export function FadeUp({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={fadeUpVariants}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggeredText({ text, className }) {
  const words = text.split(" ");
  
  const container = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: EASE,
        staggerChildren: 0.08,
        delayChildren: 0.05
      },
    },
  };
  
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 10,
    },
  };
  
  return (
    <motion.span
      style={{ display: "inline-block" }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      <span className="hidden sm:inline-block">
        {words.map((word, index) => (
          <motion.span variants={child} style={{ display: "inline-block", marginRight: "0.25em" }} key={index}>
            {word}
          </motion.span>
        ))}
      </span>
      <span className="inline-block sm:hidden">
        {text}
      </span>
    </motion.span>
  );
}

export function SectionLabel({ children }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
      {children}
    </p>
  );
}

export function SectionHeader({ label, title, subtitle }) {
  return (
    <FadeUp className="mb-12 sm:mb-16">
      <SectionLabel>{label}</SectionLabel>
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-foreground/50 max-w-xl leading-relaxed text-base">
          {subtitle}
        </p>
      )}
    </FadeUp>
  );
}
