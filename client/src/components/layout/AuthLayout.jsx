import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Send, ArrowLeft, ShieldCheck } from 'lucide-react';
import { Button } from '../ui/Button';

export function AuthLayout() {
  return (
    <div className="min-h-screen bg-background flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-fuchsia-600/5 blur-[120px] rounded-full" />
      </div>

      {/* Top Navigation */}
      <div className="absolute top-0 left-0 w-full p-8 flex justify-between items-center z-10">
        <Link to="/">
          <Button variant="ghost" size="sm" className="gap-2 font-bold text-xs uppercase tracking-widest">
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Button>
        </Link>
        <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
          <ShieldCheck className="w-4 h-4 text-emerald-500" />
          Enterprise Grade Security
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sm:mx-auto sm:w-full sm:max-w-md relative z-10"
      >
        <Link to="/" className="flex justify-center items-center gap-4 hover:opacity-90 transition-opacity mb-10">
          <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-2xl shadow-primary/20 rotate-3">
            <Send className="w-6 h-6 text-white" />
          </div>
          <span className="text-3xl font-black text-gradient tracking-tighter uppercase">PolyReach</span>
        </Link>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="mt-2 sm:mx-auto sm:w-full sm:max-w-md relative z-10 px-4 sm:px-0"
      >
        <div className="glass-morphism py-10 px-6 shadow-2xl sm:rounded-[32px] sm:px-12 border-white/10 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-fuchsia-500 to-primary" />
           <Outlet />
        </div>
        
        <p className="mt-8 text-center text-xs font-bold text-muted-foreground uppercase tracking-widest">
          Trusted by the world's most innovative teams
        </p>
      </motion.div>
    </div>
  );
}