import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Send, ArrowLeft } from 'lucide-react';

export function AuthLayout() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative">
      {/* Top Navigation */}
      <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center">
        <Link to="/" className="text-slate-400 hover:text-white flex items-center gap-2 text-sm font-medium transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link to="/" className="flex justify-center items-center gap-2 hover:opacity-90 transition-opacity">
          <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <Send className="w-5 h-5 text-white" />
          </div>
          <span className="text-2xl font-bold text-white tracking-tight">PolyReach</span>
        </Link>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-slate-900 py-8 px-4 shadow-xl sm:rounded-xl sm:px-10 border border-slate-800 relative z-10">
          <Outlet />
        </div>
      </div>
      
      {/* Background glow effects for premium feel */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-64 bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none"></div>
    </div>
  );
}