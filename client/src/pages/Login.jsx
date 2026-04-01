import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-black text-foreground tracking-tightest uppercase mb-2">Welcome back</h2>
        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">Sign in to your outreach engine</p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label htmlFor="email" className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="flex h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 hover:bg-white/10"
            placeholder="name@company.com"
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center ml-1">
            <label htmlFor="password" className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
              Password
            </label>
            <a href="#" className="text-[10px] font-bold text-primary hover:text-primary/80 uppercase tracking-widest transition-colors">
              Forgot?
            </a>
          </div>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="flex h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 hover:bg-white/10"
            placeholder="••••••••"
          />
        </div>

        <div className="flex items-center space-x-3 ml-1">
          <div className="relative flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className=" peer h-4 w-4 shrink-0 rounded-md border border-white/10 bg-white/5 text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none transition-all checked:bg-primary"
            />
            <div className="pointer-events-none absolute left-0 top-0 h-4 w-4 scale-0 peer-checked:scale-100 transition-transform">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" className="text-white p-0.5"><path d="M5 13l4 4L19 7"/></svg>
            </div>
          </div>
          <label htmlFor="remember-me" className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest cursor-pointer select-none">
            Keep me signed in
          </label>
        </div>

        <Button type="submit" className="w-full h-12 text-sm rounded-xl glow-primary">
          Sign into Dashboard
        </Button>
      </form>

      <div className="mt-10">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/5" />
          </div>
          <div className="relative flex justify-center text-[10px] uppercase tracking-widest font-bold">
            <span className="px-4 bg-background/50 backdrop-blur-md text-muted-foreground">New to PolyReach?</span>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/register"
            className="text-sm font-bold text-foreground hover:text-primary transition-colors flex items-center justify-center gap-2 group"
          >
            Create your account
            <motion.span whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </motion.span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

