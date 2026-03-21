"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, CheckCircle2 } from "lucide-react";
import Form from "@/components/contact/Form";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1, delayChildren: 0.2 } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("anishsingh210204@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#0a0a0f] overflow-hidden scroll-mt-20 border-t border-white/[0.06]">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15),transparent_70%)] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col items-center text-center"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text drop-shadow-sm pb-1"
          >
            Let&apos;s Connect
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-foreground/70 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            I&apos;m actively looking for Full-Stack / AI Engineering opportunities. Let&apos;s build something impactful.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="w-full max-w-2xl bg-white/5 backdrop-blur-none sm:backdrop-blur-lg border border-white/10 rounded-2xl p-8 sm:p-10 shadow-lg relative"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <motion.button
                onClick={copyEmail}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative flex items-center justify-center gap-2.5 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-[0_0_25px_rgba(139,92,246,0.4)] transition-all duration-300 w-full sm:w-auto overflow-hidden group"
              >
                {copied ? <CheckCircle2 className="w-5 h-5 shrink-0" /> : <Mail className="w-5 h-5 shrink-0 group-hover:animate-bounce" />}
                {copied ? "Email Copied!" : "Email Me"}
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              </motion.button>

              <motion.a
                href="https://github.com/anishsingh234"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center gap-2.5 px-6 py-3 border border-white/20 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] text-foreground/90 hover:text-white font-semibold rounded-xl transition-all duration-300 w-full sm:w-auto"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="relative">
                  GitHub
                  <span className="absolute left-0 bottom-0 w-full h-[1.5px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </span>
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/anish-ai"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center gap-2.5 px-6 py-3 border border-white/20 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] text-foreground/90 hover:text-white font-semibold rounded-xl transition-all duration-300 w-full sm:w-auto"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="relative">
                  LinkedIn
                  <span className="absolute left-0 bottom-0 w-full h-[1.5px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </span>
              </motion.a>
            </div>

            <div className="w-full text-left relative pt-10 border-t border-white/10 mt-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0d0d14] px-4 py-1 border border-white/10 rounded-full z-10">
                <span className="text-xs font-semibold text-foreground/50 uppercase tracking-widest whitespace-nowrap">
                  Or send a message
                </span>
              </div>
              <div className="-mx-4">
                <Form />
              </div>
            </div>
            
          </motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="mt-12 text-foreground/60 font-medium tracking-wide flex items-center gap-2 group cursor-default"
          >
            Let&apos;s build something amazing together
            <span className="group-hover:animate-bounce">🚀</span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
