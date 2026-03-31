import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

export function MainLayout() {
  return (
    <div className="flex min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <Sidebar />
      <div className="flex-1 ml-72 flex flex-col relative">
        {/* Subtle Background Glows */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-[10%] left-[-10%] w-[30%] h-[30%] bg-fuchsia-600/5 blur-[120px] rounded-full" />
        </div>
        
        <Header />
        <main className="flex-1 p-10 overflow-auto relative z-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}