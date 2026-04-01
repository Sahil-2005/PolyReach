import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

export function MainLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="flex min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="flex-1 md:ml-72 flex flex-col relative transition-all duration-300">
        {/* Subtle Background Glows */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-[10%] left-[-10%] w-[30%] h-[30%] bg-fuchsia-600/5 blur-[120px] rounded-full" />
        </div>
        
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="flex-1 p-4 md:p-10 overflow-auto relative z-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}