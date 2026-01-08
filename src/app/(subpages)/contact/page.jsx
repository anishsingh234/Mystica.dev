"use client";

import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import Form from "@/components/contact/Form";
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
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5" />
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
              className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full bg-accent/10 border border-accent/30 mb-5 sm:mb-6 md:mb-8"
            >
              <MessageSquare size={14} className="text-accent" />
              <span className="text-xs sm:text-sm font-medium text-accent">Let&apos;s Collaborate</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-5 md:mb-6 leading-tight tracking-tight px-2 sm:px-0"
            >
              Ready to <span className="bg-gradient-to-r from-accent via-accent/80 to-accent/60 bg-clip-text text-transparent">Build</span>
              <br />
              <span className="text-foreground">Something Amazing?</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-xs xs:text-sm sm:text-base md:text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12 px-2 sm:px-0"
            >
              Whether it&apos;s a full-time role, freelance project, or just a conversation about tech, I&apos;m always excited to connect.
            </motion.p>

            {/* Animated scroll indicator */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-foreground/40 text-xs sm:text-sm mt-6 sm:mt-8"
            >
              ↓ Scroll to see contact options
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Quick Contact Info */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="py-10 sm:py-14 md:py-18 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              {/* Quick Contact Card 1 */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="p-5 sm:p-6 md:p-7 rounded-xl sm:rounded-2xl bg-gradient-to-br from-accent/15 to-accent/5 border border-accent/20 hover:border-accent/40 transition-all duration-300"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2.5 sm:p-3 bg-accent/20 rounded-lg sm:rounded-xl flex-shrink-0">
                    <Mail className="w-5 sm:w-6 h-5 sm:h-6 text-accent" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-foreground mb-1 text-sm sm:text-base">Email</h3>
                    <Link
                      href="mailto:anishsingh210204@gmail.com"
                      className="text-accent hover:text-accent/80 text-xs sm:text-sm font-medium transition-colors break-all"
                    >
                      anishsingh210204@gmail.com
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Quick Contact Card 2 */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="p-5 sm:p-6 md:p-7 rounded-xl sm:rounded-2xl bg-gradient-to-br from-foreground/10 to-foreground/5 border border-foreground/20 hover:border-accent/40 transition-all duration-300"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2.5 sm:p-3 bg-foreground/15 rounded-lg sm:rounded-xl flex-shrink-0">
                    <Clock className="w-5 sm:w-6 h-5 sm:h-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1 text-sm sm:text-base">Response Time</h3>
                    <p className="text-foreground/70 text-xs sm:text-sm">24-48 hours</p>
                  </div>
                </div>
              </motion.div>

              {/* Quick Contact Card 3 */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="p-5 sm:p-6 md:p-7 rounded-xl sm:rounded-2xl bg-gradient-to-br from-foreground/10 to-foreground/5 border border-foreground/20 hover:border-accent/40 transition-all duration-300"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2.5 sm:p-3 bg-foreground/15 rounded-lg sm:rounded-xl flex-shrink-0">
                    <MapPin className="w-5 sm:w-6 h-5 sm:h-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1 text-sm sm:text-base">Location</h3>
                    <p className="text-foreground/70 text-xs sm:text-sm">India (Open to Remote)</p>
                  </div>
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
          className="py-10 sm:py-14 md:py-18 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-accent/5 to-transparent"
        >
          <div className="max-w-5xl mx-auto">
            <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                Connect On <span className="text-accent">Social</span>
              </h2>
              <p className="text-foreground/60 text-xs sm:text-sm md:text-base mt-2 sm:mt-3">
                Follow my work and connect with me on these platforms
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              {/* GitHub */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="group p-5 sm:p-6 md:p-7 rounded-xl sm:rounded-2xl bg-gradient-to-br from-foreground/8 to-transparent border border-foreground/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
              >
                <div className="p-3 sm:p-4 bg-foreground/10 rounded-lg sm:rounded-xl w-fit mb-3 sm:mb-4 group-hover:bg-accent/20 transition-colors">
                  <Github className="w-6 sm:w-7 h-6 sm:h-7 text-foreground group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">GitHub</h3>
                <p className="text-foreground/70 text-xs sm:text-sm mb-4">
                  Check out my projects, code, and contributions
                </p>
                <Link
                  href="https://github.com/anishsingh234"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold text-sm transition-colors group-hover:gap-3"
                >
                  View Profile
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </motion.div>

              {/* LinkedIn */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="group p-5 sm:p-6 md:p-7 rounded-xl sm:rounded-2xl bg-gradient-to-br from-foreground/8 to-transparent border border-foreground/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
              >
                <div className="p-3 sm:p-4 bg-foreground/10 rounded-lg sm:rounded-xl w-fit mb-3 sm:mb-4 group-hover:bg-accent/20 transition-colors">
                  <Linkedin className="w-6 sm:w-7 h-6 sm:h-7 text-foreground group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">LinkedIn</h3>
                <p className="text-foreground/70 text-xs sm:text-sm mb-4">
                  Connect professionally and see my experience
                </p>
                <Link
                  href="https://linkedin.com/in/anish-ai"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold text-sm transition-colors group-hover:gap-3"
                >
                  View Profile
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </motion.div>

              {/* Email */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="group p-5 sm:p-6 md:p-7 rounded-xl sm:rounded-2xl bg-gradient-to-br from-accent/15 to-accent/5 border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
              >
                <div className="p-3 sm:p-4 bg-accent/20 rounded-lg sm:rounded-xl w-fit mb-3 sm:mb-4 group-hover:bg-accent/30 transition-colors">
                  <Mail className="w-6 sm:w-7 h-6 sm:h-7 text-accent" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">Email Direct</h3>
                <p className="text-foreground/70 text-xs sm:text-sm mb-4">
                  Send me an email with your inquiry
                </p>
                <Link
                  href="mailto:anishsingh210204@gmail.com"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold text-sm transition-colors group-hover:gap-3"
                >
                  Send Email
                  <ExternalLink className="w-4 h-4" />
                </Link>
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
          className="py-12 sm:py-16 md:py-20 px-3 sm:px-6 lg:px-8"
        >
          <div className="max-w-3xl mx-auto">
            <motion.div variants={itemVariants} className="text-center mb-10 sm:mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                Send a <span className="text-accent">Direct Message</span>
              </h2>
              <p className="text-foreground/70 text-sm sm:text-base mt-3">
                Fill the form below and I&apos;ll get back to you within 24-48 hours
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
          className="py-12 sm:py-16 md:py-20 px-3 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/5 to-transparent"
        >
          <div className="max-w-4xl mx-auto">
            <motion.div variants={itemVariants} className="text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
                What&apos;s Next?
              </h2>
              <p className="text-foreground/70 text-sm sm:text-base mb-10 sm:mb-12 max-w-2xl mx-auto">
                Reach out through any method above, and let&apos;s start a conversation. I&apos;m always excited about new projects and opportunities.
              </p>
              <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center flex-wrap">
                <Link
                  href="mailto:anishsingh210204@gmail.com"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-accent hover:bg-accent/90 text-background font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 hover:scale-105"
                >
                  Start a Conversation
                </Link>
                <Link
                  href="/projects"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-foreground/10 hover:bg-foreground/20 text-foreground font-semibold rounded-lg border border-foreground/20 transition-all duration-300 hover:border-accent/40 hover:scale-105"
                >
                  View My Work
                </Link>
                <Link
                  href="/"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-foreground/5 hover:bg-foreground/10 text-foreground font-semibold rounded-lg border border-foreground/10 transition-all duration-300 hover:border-accent/40 hover:scale-105"
                >
                  Back Home
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </article>
    </>
  );
}