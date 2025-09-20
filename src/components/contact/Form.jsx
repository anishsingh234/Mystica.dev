"use client";
import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
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
    <div className="w-full flex items-center justify-center min-h-screen p-4">
      <Toaster richColors={true} />
      
      <motion.form
        variants={container}
        initial="hidden"
        animate="show"
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md w-full flex flex-col items-center justify-center space-y-6 p-6 sm:p-8"
      >
        {/* Name Input */}
        <motion.div variants={item} className="w-full space-y-2">
          <motion.input
            type="text"
            placeholder="name"
            {...register("name", {
              required: "This field is required!",
              minLength: {
                value: 3,
                message: "Name should be atleast 3 characters long.",
              },
            })}
            className="w-full p-3 sm:p-4 rounded-xl shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg transition-all duration-200 hover:shadow-xl border border-transparent hover:border-accent/20"
          />
          {errors.name && (
            <motion.span 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-accent text-sm font-medium"
            >
              {errors.name.message}
            </motion.span>
          )}
        </motion.div>

        {/* Email Input */}
        <motion.div variants={item} className="w-full space-y-2">
          <motion.input
            type="email"
            placeholder="email"
            {...register("email", { required: "This field is required!" })}
            className="w-full p-3 sm:p-4 rounded-xl shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg transition-all duration-200 hover:shadow-xl border border-transparent hover:border-accent/20"
          />
          {errors.email && (
            <motion.span 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-accent text-sm font-medium"
            >
              {errors.email.message}
            </motion.span>
          )}
        </motion.div>

        {/* Message Textarea */}
        <motion.div variants={item} className="w-full space-y-2">
          <motion.textarea
            placeholder="message"
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
            className="w-full p-3 sm:p-4 rounded-xl shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg transition-all duration-200 hover:shadow-xl border border-transparent hover:border-accent/20 resize-none"
          />
          {errors.message && (
            <motion.span 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-accent text-sm font-medium"
            >
              {errors.message.message}
            </motion.span>
          )}
        </motion.div>

        {/* Submit Button */}
        <motion.input
          variants={item}
          value="Cast your message!"
          className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 rounded-xl shadow-lg bg-background border border-accent/30 border-solid
          hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize
          transition-all duration-300 hover:border-accent/50 hover:shadow-xl active:scale-95 font-medium text-base sm:text-lg"
          type="submit"
        />
      </motion.form>
    </div>
  );
}