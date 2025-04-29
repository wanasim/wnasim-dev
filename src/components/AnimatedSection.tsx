'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function AnimatedSection({
  children,
  delay = 0,
  className = '',
}: AnimatedSectionProps) {
  return (
    <motion.section
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export function AnimatedContent({
  children,
  delay = 0,
  className = '',
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedImage({
  children,
  delay = 0,
  className = '',
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedFeatureCard({
  children,
  delay = 0,
  className = '',
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
