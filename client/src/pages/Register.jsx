import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export function Register() {
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
        <h2 className="text-3xl font-black text-foreground tracking-tightest uppercase mb-2">Create Account</h2>
        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">Join 5,000+ top performing teams</p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="first-name" className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">
              First name
            </label>
            <input
              id="first-name"
              name="first-name"
              type="text"
              required
              className="flex h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 transition-all duration-200 hover:bg-white/10"
              placeholder="John"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="last-name" className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">
              Last name
            </label>
            <input
              id="last-name"
              name="last-name"
              type="text"
              required
              className="flex h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 transition-all duration-200 hover:bg-white/10"
              placeholder="Doe"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="flex h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 transition-all duration-200 hover:bg-white/10"
            placeholder="john@company.com"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="flex h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 transition-all duration-200 hover:bg-white/10"
            placeholder="••••••••"
          />
        </div>

        <div className="space-y-4 pt-2">
          <div className="flex items-start gap-3 ml-1">
             <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
             <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-relaxed">
               I agree to the <a href="#" className="text-primary hover:text-primary/80">Terms of Service</a> and <a href="#" className="text-primary hover:text-primary/80">Privacy Policy</a>.
             </p>
          </div>
        </div>

        <Button type="submit" className="w-full h-12 text-sm rounded-xl glow-primary">
          Create Growth Account
        </Button>
      </form>

      <div className="mt-10">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/5" />
          </div>
          <div className="relative flex justify-center text-[10px] uppercase tracking-widest font-bold">
            <span className="px-4 bg-background/50 backdrop-blur-md text-muted-foreground">Already have an account?</span>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/login"
            className="text-sm font-bold text-foreground hover:text-primary transition-colors flex items-center justify-center gap-2 group"
          >
            <motion.span whileHover={{ x: -4 }} transition={{ duration: 0.2 }}>
              <ArrowLeft className="w-4 h-4" />
            </motion.span>
            Back to login
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
