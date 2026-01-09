"use client";

import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import Form from "@/components/contact/Form";
import RenderModel from "@/components/RenderModel";
import Wizard from "@/components/models/Wizard";
import { Mail, MessageSquare, Github, Linkedin, ExternalLink, Phone, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Contact() {
  return (
    <>
      {/* Background */}
      <div className="fixed inset-0 -z-50">
        <Image
          src={bg}
          alt="Contact page background"
          priority
          sizes="100vw"
          className="w-full h-full object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background/95" />
      </div>

      {/* 3D Wizard Model - Center Background */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 opacity-30">
        <div className="w-full h-full max-w-4xl">
          <RenderModel>
            <Wizard />
          </RenderModel>
        </div>
      </div>

      <article className="relative w-full">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="min-h-screen flex flex-col items-center justify-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8"
        >
          <motion.div variants={itemVariants} className="text-center max-w-4xl mx-auto w-full">
            {/* Badge */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/15 border border-accent/40 mb-8 shadow-lg shadow-accent/20"
            >
              <MessageSquare size={16} className="text-accent" />
              <span className="text-sm font-semibold text-accent">💬 Let's Connect</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-4"
            >
              <span className="bg-gradient-to-r from-accent via-accent/80 to-accent/60 bg-clip-text text-transparent block mb-1 sm:mb-2">
                Get In Touch
              </span>
              <span className="text-foreground block">Let's Work Together</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/70 leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-12 px-4"
            >
              Whether it&apos;s a full-time role, freelance project, or just a tech conversation - I&apos;m always excited to connect and collaborate.
            </motion.p>

            {/* Quick stats */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-6 sm:mb-8 px-4"
            >
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-accent mb-1">24h</p>
                <p className="text-[10px] sm:text-xs text-foreground/60">Response Time</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-accent mb-1">100%</p>
                <p className="text-[10px] sm:text-xs text-foreground/60">Open to Remote</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-accent mb-1">3+</p>
                <p className="text-[10px] sm:text-xs text-foreground/60">Platforms</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Quick Contact Info */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="py-16 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-12 px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                <span className="text-accent">Contact</span> Information
              </h2>
              <p className="text-sm sm:text-base text-foreground/70">Choose your preferred way to reach out</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 px-4">
              {/* Quick Contact Card 1 */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group p-8 rounded-2xl bg-gradient-to-br from-accent/15 via-accent/10 to-accent/5 border border-accent/30 hover:border-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20"
              >
                <div className="mb-4">
                  <div className="p-4 bg-accent/20 rounded-xl w-fit mb-4 group-hover:bg-accent/30 transition-colors group-hover:scale-110 duration-300">
                    <Mail className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Email Me</h3>
                  <p className="text-sm text-foreground/70 mb-3">Drop me an email anytime</p>
                  <Link
                    href="mailto:anishsingh210204@gmail.com"
                    className="text-accent hover:text-accent/80 text-sm font-semibold transition-colors inline-flex items-center gap-2 group-hover:gap-3"
                  >
                    anishsingh210204@gmail.com
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>

              {/* Quick Contact Card 2 */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group p-8 rounded-2xl bg-gradient-to-br from-foreground/10 to-foreground/5 border border-foreground/20 hover:border-accent/40 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="mb-4">
                  <div className="p-4 bg-foreground/15 rounded-xl w-fit mb-4 group-hover:bg-accent/20 transition-colors group-hover:scale-110 duration-300">
                    <Clock className="w-7 h-7 text-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Quick Response</h3>
                  <p className="text-sm text-foreground/70 mb-3">Fast turnaround time</p>
                  <p className="text-accent font-bold text-lg">24-48 hours</p>
                </div>
              </motion.div>

              {/* Quick Contact Card 3 */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group p-8 rounded-2xl bg-gradient-to-br from-foreground/10 to-foreground/5 border border-foreground/20 hover:border-accent/40 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="mb-4">
                  <div className="p-4 bg-foreground/15 rounded-xl w-fit mb-4 group-hover:bg-accent/20 transition-colors group-hover:scale-110 duration-300">
                    <MapPin className="w-7 h-7 text-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Location</h3>
                  <p className="text-sm text-foreground/70 mb-3">Based in India</p>
                  <p className="text-accent font-semibold">🌍 Open to Remote Work</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Connect On Social Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/5 via-transparent to-transparent"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16 px-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
                <span className="bg-gradient-to-r from-accent via-accent/80 to-accent/60 bg-clip-text text-transparent">
                  Connect
                </span>
                {" "}on Social
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-foreground/70 mt-2 sm:mt-3">
                Follow my journey and stay updated
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 px-4">
              {/* GitHub */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-foreground/8 via-foreground/5 to-transparent border border-foreground/20 hover:border-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="p-4 bg-foreground/10 rounded-xl w-fit mb-5 group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110">
                    <Github className="w-8 h-8 text-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">GitHub</h3>
                  <p className="text-foreground/70 text-sm mb-6 leading-relaxed">
                    Check out my projects, code, and contributions
                  </p>
                  <Link
                    href="https://github.com/anishsingh234"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-bold text-sm transition-all group-hover:gap-3"
                  >
                    View Profile
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>

              {/* LinkedIn */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-foreground/8 via-foreground/5 to-transparent border border-foreground/20 hover:border-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="p-4 bg-foreground/10 rounded-xl w-fit mb-5 group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110">
                    <Linkedin className="w-8 h-8 text-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">LinkedIn</h3>
                  <p className="text-foreground/70 text-sm mb-6 leading-relaxed">
                    Connect professionally and see my experience
                  </p>
                  <Link
                    href="https://linkedin.com/in/anish-ai"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-bold text-sm transition-all group-hover:gap-3"
                  >
                    View Profile
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-accent/15 via-accent/10 to-accent/5 border border-accent/30 hover:border-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="p-4 bg-accent/20 rounded-xl w-fit mb-5 group-hover:bg-accent/30 transition-all duration-300 group-hover:scale-110">
                    <Mail className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Email Direct</h3>
                  <p className="text-foreground/70 text-sm mb-6 leading-relaxed">
                    Send me an email with your inquiry
                  </p>
                  <Link
                    href="mailto:anishsingh210204@gmail.com"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-bold text-sm transition-all group-hover:gap-3"
                  >
                    Send Email
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Contact Form Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="py-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-3xl mx-auto">
            <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16 px-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
                Send a <span className="bg-gradient-to-r from-accent via-accent/80 to-accent/60 bg-clip-text text-transparent">Message</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-foreground/70">
                Fill out the form and I'll get back to you within 24-48 hours
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Form />
            </motion.div>
          </div>
        </motion.section>

        {/* Final CTA */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/10 via-accent/5 to-transparent"
        >
          <div className="max-w-4xl mx-auto">
            <motion.div variants={itemVariants} className="text-center px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
                Ready to Start?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-foreground/70 mb-8 sm:mb-12 max-w-2xl mx-auto">
                Let&apos;s connect and discuss how we can work together on your next project.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-lg mx-auto">
                <Link
                  href="mailto:anishsingh210204@gmail.com"
                  className="px-8 py-4 bg-accent hover:bg-accent/90 text-background font-bold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 hover:scale-105"
                >
                  📧 Email Me Now
                </Link>
                <Link
                  href="/projects"
                  className="px-8 py-4 bg-foreground/10 hover:bg-foreground/20 text-foreground font-bold rounded-xl border border-foreground/20 hover:border-accent/40 transition-all duration-300 hover:scale-105"
                >
                  💼 View My Work
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </article>
    </>
  );
}