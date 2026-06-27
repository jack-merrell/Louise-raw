"use client";

import { motion, type HTMLMotionProps, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

const ease = [0.16, 1, 0.3, 1] as const;
const hydrationSettleDelay = 0.14;

export function Reveal({
  children,
  delay = 0,
  transition,
  ...props
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => setIsReady(true), 90);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 36 }}
      whileInView={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
      viewport={{ once: true, amount: 0.24 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 1.08,
        ease,
        delay: shouldReduceMotion ? 0 : hydrationSettleDelay + delay,
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
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => setIsReady(true), 90);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <motion.li
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
      whileInView={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      viewport={{ once: true, amount: 0.32 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.96,
        ease,
        delay: shouldReduceMotion ? 0 : hydrationSettleDelay + delay,
        ...transition,
      }}
      {...props}
    >
      {children}
    </motion.li>
  );
}
