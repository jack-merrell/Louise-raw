"use client";

import { motion, type HTMLMotionProps, useReducedMotion } from "motion/react";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

const ease = [0.16, 1, 0.3, 1] as const;

export function Reveal({
  children,
  delay = 0,
  transition,
  ...props
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 28, filter: "blur(6px)" }
      }
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.24 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.9,
        ease,
        delay: shouldReduceMotion ? 0 : delay,
        ...transition,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function RevealListItem({
  children,
  delay = 0,
  transition,
  ...props
}: HTMLMotionProps<"li"> & { delay?: number }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.li
      initial={
        shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24, filter: "blur(5px)" }
      }
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.32 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.82,
        ease,
        delay: shouldReduceMotion ? 0 : delay,
        ...transition,
      }}
      {...props}
    >
      {children}
    </motion.li>
  );
}
