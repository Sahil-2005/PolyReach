import React from 'react';
import { Bell, Search, Sparkles } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { Button } from '../ui/Button';

const routeTitles = {
  '/dashboard': 'Overview',
  '/dashboard/contacts': 'Lead List',
  '/dashboard/templates': 'Templates',
  '/dashboard/campaigns': 'Sequences',
  '/dashboard/settings': 'Settings',
};

export function Header() {
  const location = useLocation();
  const title = routeTitles[location.pathname] || 'Dashboard';

  return (
    <header className="h-20 bg-background/50 backdrop-blur-xl border-b border-white/5 flex items-center justify-between px-10 sticky top-0 z-40 w-full transition-all duration-300">
      <div className="flex flex-col">
        <h1 className="text-2xl font-black text-foreground tracking-tightest uppercase leading-none">{title}</h1>
        <div className="flex items-center gap-1.5 mt-1.5">
           <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
           <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">System Operational</span>
        </div>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="relative group hidden md:block">
          <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <input 
            type="text" 
            placeholder="Search everything... (Cmd + K)" 
            className="pl-11 pr-4 py-2.5 bg-white/5 border border-white/5 rounded-xl text-sm text-foreground placeholder:text-muted-foreground placeholder:font-semibold focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 w-80 transition-all shadow-inner"
          />
        </div>
        
        <div className="flex items-center gap-2">
          <button className="relative p-2.5 rounded-xl hover:bg-white/5 text-muted-foreground hover:text-foreground transition-all group">
            <Bell className="w-5 h-5 transition-transform group-hover:scale-110" />
            <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-primary rounded-full border-2 border-background shadow-[0_0_10px_rgba(99,102,241,0.5)]"></span>
          </button>
          
          <div className="h-8 w-px bg-white/10 mx-2" />
          
          <Button variant="primary" size="sm" className="hidden sm:flex gap-2 font-bold text-[10px] uppercase tracking-widest h-10 px-5 glow-primary">
            <Sparkles className="w-3.5 h-3.5" />
            Upgrade to Pro
          </Button>
        </div>
      </div>
    </header>
  );
}