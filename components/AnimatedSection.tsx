"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: "fade-in" | "fade-in-up" | "fade-in-down" | "fade-in-left" | "fade-in-right" | "scale-in" | "slide-in-left" | "slide-in-right";
  delay?: number;
  className?: string;
}

const animations = {
  "fade-in": {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  "fade-in-up": {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  },
  "fade-in-down": {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 },
  },
  "fade-in-left": {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
  },
  "fade-in-right": {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
  },
  "scale-in": {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
  },
  "slide-in-left": {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
  },
  "slide-in-right": {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
  },
};

export function AnimatedSection({
  children,
  animation = "fade-in-up",
  delay = 0,
  className = "",
}: AnimatedSectionProps) {
  const selectedAnimation = animations[animation];

  return (
    <motion.div
      initial={selectedAnimation.initial}
      whileInView={selectedAnimation.animate}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: delay / 1000,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

