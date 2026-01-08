"use client";

import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import Form from "@/components/contact/Form";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

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
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/20 to-transparent" />
        <div className="absolute inset-0 bg-background/20 md:bg-transparent" />
      </div>

      <article className="relative w-full flex flex-col items-center justify-center min-h-screen py-12 sm:py-16 md:py-20 space-y-8 sm:space-y-10 md:space-y-12 px-3 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center space-y-6 sm:space-y-8 w-full max-w-2xl relative"
        >
            <motion.div
            className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-accent/20 via-transparent to-accent/20 rounded-full blur-3xl opacity-30 -z-10"
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

          {/* Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-accent/20 to-accent/10 border border-accent/30 backdrop-blur-sm shadow-lg shadow-accent/10"
          >
            <Mail size={16} className="text-accent animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-accent">Get in Touch</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-center bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent leading-tight px-2"
          >
            Let&apos;s Connect
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center text-foreground/70 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed font-medium px-2"
          >
            Have a question or project in mind? I&apos;d love to hear from you. Send me a message and I&apos;ll get back to you as soon as possible.
          </motion.p>
        </motion.div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="w-full max-w-md"
        >
          <Form />
        </motion.div>
      </article>
    </>
  );
}