"use client";

import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-[100vh] w-full flex items-center justify-center text-center overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 bg-background"
      >
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Abstract background"
          layout="fill"
          objectFit="cover"
          className="opacity-10 dark:opacity-5"
          data-ai-hint="abstract texture"
          style={{ transform: `translateY(${offsetY * 0.4}px)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      </div>

      <div className="z-10 container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
              Ahmed Sanad
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Creative Technologist &middot; System Architect &middot; Marketing Strategist
            </p>
          </div>
          <div className="space-x-4">
            <Button asChild size="lg" className="shadow-lg">
              <Link href="#contact">Let’s Build the Future Together</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
