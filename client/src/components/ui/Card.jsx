import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export function Card({ className, children, hover = false, ...props }) {
  const Component = hover ? motion.div : 'div';
  const hoverProps = hover ? {
    whileHover: { y: -4, transition: { duration: 0.2 } },
    initial: { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true }
  } : {};

  return (
    <Component
      className={cn(
        "bg-card/50 backdrop-blur-sm rounded-2xl border border-white/10 shadow-lg overflow-hidden group",
        hover && "hover:border-primary/30 transition-colors duration-300",
        className
      )}
      {...hoverProps}
      {...props}
    >
      {children}
    </Component>
  );
}

export function CardHeader({ className, children, ...props }) {
  return (
    <div className={cn("px-8 py-6 border-b border-white/5", className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ className, children, ...props }) {
  return (
    <h3 className={cn("text-xl font-bold text-foreground leading-none tracking-tight", className)} {...props}>
      {children}
    </h3>
  );
}

export function CardContent({ className, children, ...props }) {
  return (
    <div className={cn("p-8", className)} {...props}>
      {children}
    </div>
  );
}