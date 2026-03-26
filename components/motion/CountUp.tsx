"use client";

import { motion, useInView, useSpring, useMotionValue } from "framer-motion";
import { useRef, useEffect } from "react";

interface CountUpProps {
  value: string;
  className?: string;
  delay?: number;
}

export default function CountUp({ value, className, delay = 0 }: CountUpProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  // Extract number and suffix
  const match = value.match(/^([+-]?)(\d+(?:\.\d+)?)(.*)/);
  if (!match) {
    return <span className={className}>{value}</span>;
  }

  const prefix = match[1];
  const numericPart = parseFloat(match[2]);
  const suffix = match[3];

  return (
    <span ref={ref} className={className}>
      {prefix}
      <AnimatedNumber value={numericPart} isInView={isInView} delay={delay} />
      {suffix}
    </span>
  );
}

function AnimatedNumber({
  value,
  isInView,
  delay,
}: {
  value: number;
  isInView: boolean;
  delay: number;
}) {
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    stiffness: 60,
    damping: 25,
    restDelta: 0.1,
  });
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        motionValue.set(value);
      }, delay * 1000);
      return () => clearTimeout(timeout);
    }
  }, [isInView, value, motionValue, delay]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Number.isInteger(value)
          ? Math.round(latest).toString()
          : latest.toFixed(1);
      }
    });
    return unsubscribe;
  }, [spring, value]);

  return <motion.span ref={ref}>0</motion.span>;
}
