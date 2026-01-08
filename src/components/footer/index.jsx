"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, Heart } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com",
      label: "GitHub",
      color: "hover:text-accent/80",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com",
      label: "LinkedIn",
      color: "hover:text-accent/80",
    },
    {
      icon: Mail,
      href: "mailto:your-email@example.com",
      label: "Email",
      color: "hover:text-accent/80",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
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
    <footer className="relative border-t border-accent/20 bg-background/50 backdrop-blur-md">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"
      >
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Branding */}
          <motion.div variants={itemVariants} className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-background font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
                Anish Singh
              </span>
            </div>
            <p className="text-sm text-foreground/60">
              Full-Stack Developer & AI/ML Enthusiast crafting digital experiences
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div variants={itemVariants} className="col-span-1">
            <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/70 hover:text-accent transition-colors duration-200 flex items-center gap-1 w-fit group"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="col-span-1">
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-sm text-foreground/70 hover:text-accent transition-colors duration-200 cursor-pointer">
                  Web Development
                </span>
              </li>
              <li>
                <span className="text-sm text-foreground/70 hover:text-accent transition-colors duration-200 cursor-pointer">
                  Full-Stack Solutions
                </span>
              </li>
              <li>
                <span className="text-sm text-foreground/70 hover:text-accent transition-colors duration-200 cursor-pointer">
                  AI/ML Integration
                </span>
              </li>
              <li>
                <span className="text-sm text-foreground/70 hover:text-accent transition-colors duration-200 cursor-pointer">
                  Consulting
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="col-span-1">
            <h3 className="font-semibold text-foreground mb-4">Connect</h3>
            <div className="flex gap-4">
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
                    className={`w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-foreground/80 transition-all duration-200 ${social.color}`}
                    title={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent mb-8"
        />

        {/* Bottom Footer */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-foreground/60"
        >
          <div className="flex items-center gap-1">
            <span>© {currentYear} Anish Singh. Made with</span>
            <Heart className="w-4 h-4 text-accent fill-accent" />
            <span>and lots of code.</span>
          </div>

          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <span className="text-foreground/40">•</span>
            <Link href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </motion.div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-accent hover:bg-accent/20 transition-all duration-200 backdrop-blur-sm md:flex hidden"
        >
          <svg
            className="w-5 h-5"
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
