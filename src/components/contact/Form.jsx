"use client";
import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";
import { Mail, MessageSquare, User, Send } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 100,
    }
  },
};

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendEmail = (params) => {
    const toastId = toast.loading("Sending your message, please wait...");

    toast.info(
      "Done",
      {
        id: toastId,
      }
    );

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        params,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          limitRate: {
            throttle: 5000, 
          },
        }
      )
      .then(
        () => {
          toast.success(
            "I have received your message, I will get back to you soon!",
            {
              id: toastId,
            }
          );
        },
        (error) => {
          toast.error(
            "There was an error sending your message, please try again later!",
            {
              id: toastId,
            }
          );
        }
      );
  };

  const onSubmit = (data) => {
    const templateParams = {
      to_name: "Anish",
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
    };

    sendEmail(templateParams);
  };

  return (
    <div className="w-full flex items-center justify-center min-h-auto p-4">
      <Toaster richColors={true} />
      
      <motion.form
        variants={container}
        initial="hidden"
        animate="show"
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md flex flex-col items-center justify-center space-y-6"
      >
        {/* Background decoration */}
        <motion.div
          className="absolute inset-0 w-96 h-96 bg-gradient-to-r from-accent/10 via-transparent to-accent/10 rounded-full blur-3xl -z-10 opacity-20"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* Form wrapper with glass effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="w-full p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-foreground/5 to-foreground/0 border border-foreground/10 backdrop-blur-lg shadow-2xl hover:shadow-xl transition-all duration-300"
        >
        {/* Name Input */}
        <motion.div variants={item} className="w-full space-y-2">
          <motion.label
            className="flex items-center space-x-2 text-xs md:text-sm font-medium text-muted ml-1"
          >
            <User size={14} className="text-accent" />
            <span>Full Name</span>
          </motion.label>
          <motion.input
            type="text"
            placeholder="Enter your name"
            {...register("name", {
              required: "This field is required!",
              minLength: {
                value: 3,
                message: "Name should be at least 3 characters long.",
              },
            })}
            whileFocus={{ scale: 1.02 }}
            className="w-full p-3 sm:p-4 rounded-xl shadow-lg text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg transition-all duration-200 hover:shadow-xl border border-foreground/10 hover:border-accent/30 font-medium"
          />
          {errors.name && (
            <motion.span 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-accent text-sm font-medium"
            >
              ✗ {errors.name.message}
            </motion.span>
          )}
        </motion.div>

        {/* Email Input */}
        <motion.div variants={item} className="w-full space-y-2">
          <motion.label
            className="flex items-center space-x-2 text-xs md:text-sm font-medium text-muted ml-1"
          >
            <Mail size={14} className="text-accent" />
            <span>Email Address</span>
          </motion.label>
          <motion.input
            type="email"
            placeholder="your.email@example.com"
            {...register("email", { required: "This field is required!" })}
            whileFocus={{ scale: 1.02 }}
            className="w-full p-3 sm:p-4 rounded-xl shadow-lg text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg transition-all duration-200 hover:shadow-xl border border-foreground/10 hover:border-accent/30 font-medium"
          />
          {errors.email && (
            <motion.span 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-accent text-sm font-medium"
            >
              ✗ {errors.email.message}
            </motion.span>
          )}
        </motion.div>

        {/* Message Textarea */}
        <motion.div variants={item} className="w-full space-y-2">
          <motion.label
            className="flex items-center space-x-2 text-xs md:text-sm font-medium text-muted ml-1"
          >
            <MessageSquare size={14} className="text-accent" />
            <span>Message</span>
          </motion.label>
          <motion.textarea
            placeholder="Share your thoughts, ideas, or collaboration proposals..."
            rows={5}
            {...register("message", {
              required: "This field is required!",
              maxLength: {
                value: 500,
                message: "Message should be less than 500 characters",
              },
              minLength: {
                value: 50,
                message: "Message should be more than 50 characters",
              },
            })}
            whileFocus={{ scale: 1.02 }}
            className="w-full p-3 sm:p-4 rounded-xl shadow-lg text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg transition-all duration-200 hover:shadow-xl border border-foreground/10 hover:border-accent/30 resize-none font-medium"
          />
          {errors.message && (
            <motion.span 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-accent text-sm font-medium"
            >
              ✗ {errors.message.message}
            </motion.span>
          )}
        </motion.div>

        {/* Submit Button */}
        <motion.button
          variants={item}
          type="submit"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 rounded-xl shadow-lg bg-gradient-to-r from-accent/20 to-accent/10 border border-accent/30 hover:border-accent/60 text-foreground hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize transition-all duration-300 hover:shadow-xl active:scale-95 font-semibold text-base sm:text-lg flex items-center justify-center space-x-2 group"
        >
          <Send size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
          <span>Cast your message!</span>
        </motion.button>
        </motion.div>
      </motion.form>
    </div>
  );
}