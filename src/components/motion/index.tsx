import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface RevealProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  delay?: number;
  stagger?: 'none' | 'hero' | 'editorial';
}

const STAGGER_DELAYS = {
  none: 0,
  hero: 0.2,
  editorial: 0.15,
};

export function FadeIn({ children, delay = 0, stagger = 'none', className, ...props }: RevealProps) {
  const computedDelay = delay || STAGGER_DELAYS[stagger];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay: computedDelay, ease: 'easeOut' }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function Reveal({ children, delay = 0, stagger = 'none', className, ...props }: RevealProps) {
  const computedDelay = delay || STAGGER_DELAYS[stagger];
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay: computedDelay, ease: 'easeOut' }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function Parallax({ children, offset = 50, className, ...props }: RevealProps & { offset?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: offset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
