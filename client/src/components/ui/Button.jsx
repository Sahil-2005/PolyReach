import React from 'react';
import { cn } from '../../utils/cn';

export function Button({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  children, 
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-500 font-medium shadow-sm",
    secondary: "bg-slate-800 text-white hover:bg-slate-700",
    outline: "border border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white",
    ghost: "text-slate-400 hover:text-white hover:bg-slate-800",
    danger: "bg-rose-500/10 text-rose-500 hover:bg-rose-500/20"
  };

  const sizes = {
    sm: "h-8 px-3 text-xs",
    md: "h-10 px-4 py-2 text-sm",
    lg: "h-12 px-6 text-base"
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}