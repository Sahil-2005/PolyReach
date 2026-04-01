import React from 'react';
import { Bell, Search, Sparkles, Menu } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { Button } from '../ui/Button';

const routeTitles = {
  '/dashboard': 'Overview',
  '/dashboard/contacts': 'Lead List',
  '/dashboard/templates': 'Templates',
  '/dashboard/campaigns': 'Sequences',
  '/dashboard/settings': 'Settings',
};

export function Header({ onMenuClick }) {
  const location = useLocation();
  const title = routeTitles[location.pathname] || 'Dashboard';

  return (
    <header className="h-20 bg-background/50 backdrop-blur-xl border-b border-white/5 flex items-center justify-between px-4 md:px-10 sticky top-0 z-40 w-full transition-all duration-300">
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuClick}
          className="p-2 -ml-2 rounded-lg hover:bg-white/5 md:hidden text-muted-foreground transition-colors"
        >
          <Menu className="w-6 h-6" />
        </button>
        <div className="flex flex-col">
          <h1 className="text-lg md:text-2xl font-black text-foreground tracking-tightest uppercase leading-none">{title}</h1>
          <div className="flex items-center gap-1.5 mt-1.5">
             <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
             <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest hidden xs:inline">System Operational</span>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-3 md:gap-6">
        <div className="relative group hidden lg:block">
          <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <input 
            type="text" 
            placeholder="Search... (Cmd + K)" 
            className="pl-11 pr-4 py-2.5 bg-white/5 border border-white/5 rounded-xl text-sm text-foreground placeholder:text-muted-foreground placeholder:font-semibold focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 w-64 lg:w-80 transition-all shadow-inner"
          />
        </div>
        
        <div className="flex items-center gap-1 md:gap-2">
          <button className="relative p-2 md:p-2.5 rounded-xl hover:bg-white/5 text-muted-foreground hover:text-foreground transition-all group">
            <Bell className="w-5 h-5 transition-transform group-hover:scale-110" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-background"></span>
          </button>
          
          <div className="h-6 w-px bg-white/10 mx-1 md:mx-2" />
          
          <Button variant="primary" size="sm" className="hidden sm:flex gap-2 font-bold text-[10px] uppercase tracking-widest h-10 px-5 glow-primary">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Upgrade to Pro</span>
            <span className="md:hidden">Pro</span>
          </Button>
        </div>
      </div>
    </header>
  );
}