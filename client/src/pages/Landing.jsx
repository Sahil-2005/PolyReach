import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import { Button } from '../components/ui/Button';
import { Send, ArrowRight, Zap, Target, BarChart3, Users, CheckCircle2, MessageSquare, Globe, ArrowUpRight } from 'lucide-react';

export function Landing() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    
    return () => lenis.destroy();
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="bg-slate-950 min-h-screen text-slate-50 selection:bg-indigo-500/30 font-sans overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/20 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] bg-fuchsia-600/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[50%] bg-blue-600/15 blur-[150px] rounded-full mix-blend-screen" />
      </div>

      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/60 bg-slate-950/50 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.5)]">
              <Send className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 tracking-tight">PolyReach</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/login" className="text-sm font-medium text-slate-300 hover:text-white transition-colors hidden sm:block">
              Log in
            </Link>
            <Link to="/register">
              <button className="h-9 px-4 rounded-md bg-white text-slate-950 text-sm font-medium hover:bg-slate-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                Start Free Trial
              </button>
            </Link>
          </div>
        </div>
      </motion.nav>

      <section className="relative z-10 pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-8 backdrop-blur-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-indigo-500"></span>
            PolyReach 2.0 is now live
          </motion.div>
          
          <motion.h1 
            initial="hidden" animate="visible" variants={fadeIn}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-slate-500 max-w-5xl leading-[1.1]"
          >
            Automate outreach. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-fuchsia-400">Close more deals.</span>
          </motion.h1>
          
          <motion.p 
            initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed"
          >
            Scale your agency with synchronized LinkedIn and WhatsApp campaigns, 
            driven by AI personalization that sounds incredibly human.
          </motion.p>
          
          <motion.div 
            initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
          >
            <Link to="/register">
              <button className="h-14 px-8 rounded-full bg-white text-slate-950 text-base font-semibold hover:bg-slate-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)] flex items-center gap-2 group w-full sm:w-auto justify-center">
                Start your sequence
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </div>

        <motion.div 
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="max-w-5xl mx-auto mt-20 relative perspective-[2000px]"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-20" />
          <div className="w-full h-[600px] rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden flex flex-col transform rotate-x-[2deg] scale-[1.02]">
            <div className="h-12 border-b border-slate-800 bg-slate-900/50 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-slate-700" />
              <div className="w-3 h-3 rounded-full bg-slate-700" />
              <div className="w-3 h-3 rounded-full bg-slate-700" />
            </div>
            <div className="flex-1 flex">
              <div className="w-48 border-r border-slate-800 p-4 space-y-3 hidden sm:block">
                <div className="h-6 w-24 bg-slate-800 rounded-md mb-8" />
                <div className="h-8 w-full bg-indigo-500/20 border border-indigo-500/30 rounded-md" />
                <div className="h-8 w-full bg-slate-800 rounded-md" />
              </div>
              <div className="flex-1 p-8 grid grid-cols-3 gap-6">
                <div className="col-span-3 h-32 rounded-xl bg-slate-800/50 border border-slate-800 flex items-center px-8 relative overflow-hidden">
                  <div className="absolute right-0 top-0 w-64 h-64 bg-indigo-500/10 blur-[60px]" />
                  <div>
                    <div className="h-4 w-32 bg-slate-700 rounded mb-4" />
                    <div className="h-10 w-48 bg-slate-700/50 rounded" />
                  </div>
                </div>
                <div className="col-span-2 h-64 rounded-xl bg-slate-800/50 border border-slate-800 p-6">
                  <div className="h-4 w-32 bg-slate-700 rounded mb-6" />
                  <div className="space-y-4">
                    <div className="h-12 w-full bg-slate-700/30 rounded" />
                    <div className="h-12 w-full bg-slate-700/30 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="features" className="relative z-10 py-32 px-6 border-t border-slate-800/50 bg-slate-950/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Built for scale. Designed for conversions.</h2>
            <p className="text-slate-400 text-lg">
              Everything you need to run high-converting, multi-channel outbound campaigns without lifting a finger.
            </p>
          </div>

          <motion.div 
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <motion.div variants={fadeIn} className="md:col-span-2 rounded-3xl bg-slate-900 border border-slate-800 p-8 md:p-12 relative overflow-hidden group">
              <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[80px] rounded-full group-hover:bg-indigo-500/20 transition-colors duration-700" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-indigo-500/20 border border-indigo-500/30 rounded-xl flex items-center justify-center mb-6">
                  <Globe className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Omnichannel Sequences</h3>
                <p className="text-slate-400 max-w-md leading-relaxed mb-8">
                  Create logic-based workflows. Send a LinkedIn request, wait 2 days, and follow up purely via WhatsApp if they haven't replied.
                </p>
                <div className="h-48 w-full rounded-xl bg-slate-950 border border-slate-800 p-4 border-dashed relative">
                   <div className="absolute left-1/2 top-4 bottom-4 w-px bg-slate-800 -translate-x-1/2" />
                   <div className="space-y-6 relative z-10 max-w-[200px] mx-auto text-center">
                     <div className="bg-indigo-500 text-white text-xs font-semibold py-2 px-4 rounded-lg shadow-lg">LinkedIn Request</div>
                     <div className="bg-slate-800 text-slate-300 text-xs font-semibold py-1 px-4 rounded-full border border-slate-700 w-max mx-auto shadow-lg">Wait 2 days</div>
                     <div className="bg-[#25D366] text-white text-xs font-semibold py-2 px-4 rounded-lg shadow-lg">WhatsApp Message</div>
                   </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="col-span-1 rounded-3xl bg-slate-900 border border-slate-800 p-8 md:p-12 relative overflow-hidden group">
               <div className="absolute inset-x-0 bottom-0 h-[200px] bg-gradient-to-t from-emerald-500/10 to-transparent blur-[40px] group-hover:from-emerald-500/20 transition-colors duration-700" />
               <div className="relative z-10 h-full flex flex-col">
                <div className="w-12 h-12 bg-emerald-500/20 border border-emerald-500/30 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">AI Personalization</h3>
                <p className="text-slate-400 leading-relaxed flex-1">
                  We scrape their LinkedIn bio and latest posts to write a 100% unique icebreaker for every lead.
                </p>
                <div className="mt-8 bg-slate-950 border border-slate-800 rounded-lg p-4">
                  <p className="text-xs text-slate-500 mb-2 border-b border-slate-800 pb-2">Generated Icebreaker</p>
                  <p className="text-sm text-emerald-100 font-mono">"Loved your recent post..."</p>
                </div>
               </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 py-32 px-6">
        <div className="absolute inset-0 bg-indigo-600/10" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8">
              Ready to break <br /> the reply rate ceiling?
            </h2>
            <Link to="/register">
              <button className="h-14 px-10 rounded-full bg-white text-indigo-950 text-lg font-bold hover:bg-slate-200 hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                Start your 14-day free trial
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
