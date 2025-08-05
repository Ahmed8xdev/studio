"use client";

import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const titleAnimation = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const characterAnimation = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(5px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

const GlitchText = ({ text }: { text: string }) => (
  <motion.div
    aria-label={text}
    variants={titleAnimation}
    initial="hidden"
    animate="visible"
    className="inline-block"
  >
    {text.split("").map((char, index) => (
      <motion.span
        key={index}
        aria-hidden="true"
        variants={characterAnimation}
        className="inline-block"
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}
  </motion.div>
);

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-[100vh] w-full flex items-center justify-center text-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-900/50 via-slate-900/50 to-cyan-900/50 bg-[length:200%_200%] animate-gradient" />
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-10" />
      
      <div className="z-10 container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
            <GlitchText text="Ahmed Sanad" />
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl font-body">
            Creative Technologist &middot; System Architect &middot; Marketing Strategist
          </p>
          <div className="space-x-4">
            <motion.div
              whileHover={{ scale: 1.05, filter: "blur(0.5px)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button asChild size="lg" className="shadow-lg shadow-primary/20">
                <Link href="#contact">Let’s Build the Future Together</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, hsla(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsla(var(--border)) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
}
