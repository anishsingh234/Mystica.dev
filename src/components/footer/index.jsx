"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/#contact" },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/anishsingh234",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/anish-ai",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:anishsingh210204@gmail.com",
      label: "Email",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <footer className="relative border-t border-white/[0.06] bg-background">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"
      >
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Branding */}
          <motion.div variants={itemVariants} className="col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-background font-bold text-sm">AK</span>
              </div>
              <span className="text-lg font-bold text-foreground">
                Anish Singh
              </span>
            </div>
            <p className="text-sm text-foreground/50 leading-relaxed">
              Full-Stack Developer & AI Engineer crafting production-grade systems.
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div variants={itemVariants} className="col-span-1">
            <h3 className="font-semibold text-foreground/80 mb-4 text-sm uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/50 hover:text-foreground transition-colors duration-200 flex items-center gap-1.5 w-fit group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="col-span-1">
            <h3 className="font-semibold text-foreground/80 mb-4 text-sm uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-2.5">
              {["Web Development", "Full-Stack Solutions", "AI/ML Integration", "SaaS Architecture"].map(
                (service) => (
                  <li key={service}>
                    <span className="text-sm text-foreground/50 cursor-default">
                      {service}
                    </span>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="col-span-1">
            <h3 className="font-semibold text-foreground/80 mb-4 text-sm uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-foreground/50 hover:text-foreground hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-200"
                    title={social.label}
                  >
                    <Icon className="w-4.5 h-4.5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-8"
        />

        {/* Bottom Footer */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-foreground/40"
        >
          <div className="flex items-center gap-1.5">
            <span>© {currentYear} Anish Singh. Made with</span>
            <Heart className="w-3.5 h-3.5 text-purple-400 fill-purple-400" />
            <span>and lots of code.</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/anishsingh234"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground/70 transition-colors"
            >
              GitHub
            </a>
            <span className="text-foreground/20">•</span>
            <a
              href="https://linkedin.com/in/anish-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground/70 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          suppressHydrationWarning
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-8 right-8 w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.08] hidden md:flex items-center justify-center text-foreground/50 hover:text-foreground hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-200 backdrop-blur-sm"
        >
          <svg
            className="w-4.5 h-4.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      </motion.div>
    </footer>
  );
};

export default Footer;
