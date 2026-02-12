"use client";

import { motion } from "framer-motion";

const defaultTransition = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1],
};

export function Reveal({
  as = "div",
  children,
  className,
  delay = 0,
  y = 20,
  amount = 0.2,
}) {
  const Component = motion[as] ?? motion.div;

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ ...defaultTransition, delay }}
    >
      {children}
    </Component>
  );
}

const staggerParent = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

export function StaggerList({ items, className, renderItem }) {
  return (
    <motion.ul
      className={className}
      variants={staggerParent}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {items.map((item) => (
        <motion.li key={item.title} variants={staggerItem}>
          {renderItem(item)}
        </motion.li>
      ))}
    </motion.ul>
  );
}
