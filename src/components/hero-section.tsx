"use client";

import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const titleAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const characterAnimation = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
    },
  },
};

const GlitchText = ({ text, className }: { text: string, className?: string }) => (
  <motion.h1
    aria-label={text}
    variants={titleAnimation}
    initial="hidden"
    animate="visible"
    className={`relative inline-block ${className}`}
  >
    {text.split("").map((char, index) => (
      <motion.span
        key={index}
        aria-hidden="true"
        variants={characterAnimation}
        className="inline-block"
      >
        {char === " " ? " " : char}
      </motion.span>
    ))}
  </motion.h1>
);


export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-[calc(100vh-4rem)] w-full flex items-center justify-center text-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-background via-indigo-900/20 to-cyan-900/30 bg-[length:200%_200%] animate-gradient" />
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-10" />
      
      <div className="relative z-10 container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
            <GlitchText text="Ahmed Sanad" className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl font-headline drop-shadow-2xl" />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mx-auto max-w-[700px] text-muted-foreground md:text-xl lg:text-2xl font-body drop-shadow-lg"
          >
            Creative Technologist · System Architect · Brand Strategist
          </motion.p>
          <div className="space-x-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, type: "spring", stiffness: 300, damping: 20 }}
              whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild size="lg" className="shadow-lg shadow-primary/20 rounded-full px-10 py-6 text-lg">
                <Link href="#contact">Let’s Build the Future Together</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, hsla(var(--border), 0.5) 1px, transparent 1px), linear-gradient(to bottom, hsla(var(--border), 0.5) 1px, transparent 1px);
          background-size: 60px 60px;
        }
      `}</style>
    </section>
  );
}
