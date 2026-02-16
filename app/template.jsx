"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }) {
  const pathname = usePathname();
  const isSmallScreen = typeof window !== "undefined" && window.matchMedia("(max-width: 640px)").matches;

  const motionVariants = isSmallScreen
    ? {
        initial: { opacity: 0, y: 4 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -4 },
        transition: { duration: 0.18, ease: "easeOut" }
      }
    : {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -8 },
        transition: { duration: 0.24, ease: "easeOut" }
      };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={motionVariants.initial}
        animate={motionVariants.animate}
        exit={motionVariants.exit}
        transition={motionVariants.transition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
