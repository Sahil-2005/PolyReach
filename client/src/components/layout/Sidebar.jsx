import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, FileText, Send, Settings, Sparkles, ChevronRight, LogOut } from 'lucide-react';
import { cn } from '../../utils/cn';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Overview', path: '/dashboard', icon: LayoutDashboard },
  { name: 'Lead List', path: '/dashboard/contacts', icon: Users },
  { name: 'Templates', path: '/dashboard/templates', icon: FileText },
  { name: 'Sequences', path: '/dashboard/campaigns', icon: Send },
  { name: 'Settings', path: '/dashboard/settings', icon: Settings },
];

export function Sidebar() {
  return (
    <div className="w-72 bg-card/30 backdrop-blur-xl border-r border-white/5 h-screen flex flex-col fixed left-0 top-0 z-50">
      <div className="h-20 flex items-center px-8 border-b border-white/5">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:rotate-6 transition-transform duration-300">
            <Send className="w-5 h-5 text-white" />
          </div>
          <span className="text-2xl font-black text-gradient tracking-tighter uppercase transition-opacity group-hover:opacity-80">PolyReach</span>
        </div>
      </div>
      
      <nav className="flex-1 px-4 py-8 space-y-2">
        <div className="px-4 mb-4 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Navigation</div>
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold tracking-tight transition-all duration-300 group",
                  isActive
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                )
              }
            >
              <div className="flex items-center gap-3">
                <Icon className={cn("w-5 h-5 transition-transform group-hover:scale-110")} />
                {item.name}
              </div>
              <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-40 transition-opacity" />
            </NavLink>
          );
        })}

        <div className="mt-12 px-4 py-6 rounded-2xl bg-primary/5 border border-primary/10 relative overflow-hidden group">
           <div className="absolute -right-4 -top-4 w-16 h-16 bg-primary/20 blur-2xl group-hover:bg-primary/30 transition-colors" />
           <div className="relative z-10">
              <div className="flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest mb-2">
                <Sparkles className="w-3 h-3" />
                Pro Active
              </div>
              <p className="text-xs text-muted-foreground font-semibold leading-relaxed mb-4">You have 12,450 credits remaining.</p>
              <button className="text-[10px] font-bold text-foreground uppercase tracking-widest hover:text-primary transition-colors flex items-center gap-1">
                Top up now <ChevronRight className="w-3 h-3" />
              </button>
           </div>
        </div>
      </nav>

      <div className="p-6 border-t border-white/5 bg-white/[0.02]">
        <div className="flex items-center justify-between mb-2">
           <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-fuchsia-600 flex items-center justify-center text-white font-black text-sm shadow-lg shadow-primary/10">
                JD
             </div>
             <div className="flex flex-col">
               <span className="text-sm font-bold text-foreground leading-none mb-1">John Doe</span>
               <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">Growth Plan</span>
             </div>
           </div>
           <button className="p-2 rounded-lg hover:bg-white/5 transition-colors text-muted-foreground hover:text-destructive">
             <LogOut className="w-5 h-5" />
           </button>
        </div>
      </div>
    </div>
  );
}