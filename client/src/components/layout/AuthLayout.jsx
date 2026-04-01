import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Send, ArrowLeft, ShieldCheck } from 'lucide-react';
import { Button } from '../ui/Button';

export function AuthLayout() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center py-6 sm:py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-fuchsia-600/5 blur-[120px] rounded-full" />
      </div>

      {/* Top Navigation */}
      <div className="w-full max-w-7xl mx-auto absolute top-0 left-0 right-0 p-4 sm:p-8 flex flex-col sm:flex-row justify-between items-center gap-4 z-20">
        <Link to="/" className="self-start sm:self-auto">
          <Button variant="ghost" size="sm" className="gap-2 font-bold text-[10px] uppercase tracking-widest h-9 px-3">
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to home
          </Button>
        </Link>
        <div className="hidden xs:flex items-center gap-2 text-[9px] sm:text-[10px] font-bold text-muted-foreground uppercase tracking-widest bg-white/5 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
          Enterprise Grade Security
        </div>
      </div>

      <div className="w-full max-w-md relative z-10 mt-16 sm:mt-0">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 sm:mb-10"
        >
          <Link to="/" className="inline-flex items-center gap-3 hover:opacity-90 transition-opacity">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-2xl flex items-center justify-center shadow-2xl shadow-primary/20 rotate-3">
              <Send className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <span className="text-2xl sm:text-3xl font-black text-gradient tracking-tighter uppercase">PolyReach</span>
          </Link>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="relative"
        >
          <div className="glass-morphism py-8 sm:py-10 px-6 sm:px-12 shadow-2xl rounded-[24px] sm:rounded-[32px] border-white/10 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-fuchsia-500 to-primary" />
             <Outlet />
          </div>
          
          <p className="mt-8 text-center text-[10px] font-bold text-muted-foreground uppercase tracking-widest px-4">
            Trusted by the world's most innovative teams
          </p>
        </motion.div>
      </div>
    </div>
  );
}