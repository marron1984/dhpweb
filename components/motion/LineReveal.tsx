"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface LineRevealProps {
  className?: string;
  delay?: number;
  direction?: "horizontal" | "vertical";
}

export default function LineReveal({
  className,
  delay = 0,
  direction = "horizontal",
}: LineRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        scaleX: direction === "horizontal" ? 0 : 1,
        scaleY: direction === "vertical" ? 0 : 1,
      }}
      animate={
        isInView
          ? { scaleX: 1, scaleY: 1 }
          : {
              scaleX: direction === "horizontal" ? 0 : 1,
              scaleY: direction === "vertical" ? 0 : 1,
            }
      }
      transition={{
        duration: 1,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ originX: 0, originY: 0 }}
    />
  );
}
