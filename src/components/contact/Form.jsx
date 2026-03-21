"use client";
import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
    reset,
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
          reset();
          toast.success(
            "I have received your message, I will get back to you soon!",
            {
              id: toastId,
            }
          );
        },
        (error) => {
          console.error("EmailJS Error:", error);
          toast.error(
            `Error sending message: ${error?.text || error?.message || "Unknown error"}`,
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
    <div className="w-full">
      <Toaster richColors={true} />
      <motion.form 
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-4 w-full" 
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="w-full flex-col flex gap-1">
            <motion.input 
              variants={item}
              type="text" 
              placeholder="Name" 
              suppressHydrationWarning
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all font-medium"
              {...register("name", {
                required: "Name is required!",
                minLength: {
                  value: 3,
                  message: "At least 3 characters.",
                },
              })}
            />
            {errors.name && (
              <span className="inline-block text-red-400 text-xs font-medium pl-1">
                {errors.name.message}
              </span>
            )}
          </div>
          
          <div className="w-full flex-col flex gap-1">
            <motion.input 
              variants={item}
              type="email" 
              placeholder="Email" 
              suppressHydrationWarning
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all font-medium"
              {...register("email", { required: "Email is required!" })}
            />
            {errors.email && (
              <span className="inline-block text-red-400 text-xs font-medium pl-1">
                {errors.email.message}
              </span>
            )}
          </div>
        </div>
        
        <div className="w-full flex-col flex gap-1">
          <motion.textarea 
            variants={item}
            rows={4} 
            placeholder="Message" 
            suppressHydrationWarning
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all resize-none font-medium"
            {...register("message", {
              required: "Message is required!",
              minLength: {
                value: 20,
                message: "Please write a bit more.",
              },
            })}
          />
          {errors.message && (
            <span className="inline-block text-red-400 text-xs font-medium pl-1">
              {errors.message.message}
            </span>
          )}
        </div>
        
        <motion.button 
          variants={item}
          type="submit"
          suppressHydrationWarning
          className="w-full py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 group"
        >
          Send Message
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </motion.form>
    </div>
  );
}