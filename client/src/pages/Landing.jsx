import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { 
  Send, 
  ArrowRight, 
  Zap, 
  Target, 
  BarChart3, 
  Users, 
  CheckCircle2, 
  MessageSquare, 
  Globe, 
  ArrowUpRight,
  Shield,
  MousePointer2,
  Sparkles,
  Layers,
  Cpu,
  Menu,
  X
} from 'lucide-react';

export function Landing() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary/30 font-sans overflow-x-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-[-10%] left-[-5%] w-[60%] h-[60%] bg-primary/20 blur-[140px] rounded-full mix-blend-screen animate-pulse-slow" 
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-fuchsia-600/10 blur-[140px] rounded-full mix-blend-screen" 
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
      </div>

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/50 backdrop-blur-xl"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group cursor-pointer hover:rotate-6 transition-transform">
              <Send className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl sm:text-2xl font-black text-gradient tracking-tighter uppercase">PolyReach</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            {['Features', 'Solutions', 'Pricing', 'Resources'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden sm:flex items-center gap-4">
              <Link to="/login">
                <Button variant="ghost" size="sm">Log in</Button>
              </Link>
              <Link to="/register">
                <Button variant="primary" size="sm" className="glow-primary">Get Started</Button>
              </Link>
            </div>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 md:hidden text-foreground"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl md:hidden flex flex-col pt-24 px-6 pb-12"
          >
            <div className="flex flex-col gap-6 items-center flex-1 justify-center text-center">
              {['Features', 'Solutions', 'Pricing', 'Resources'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-black uppercase tracking-tightest text-foreground hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-4 mt-auto">
              <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full h-14 text-lg rounded-2xl">Log in</Button>
              </Link>
              <Link to="/register" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full h-14 text-lg rounded-2xl glow-primary">Get Started</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-16 md:pt-56 md:pb-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Badge variant="primary" className="py-2 px-4 border-primary/20 bg-primary/5 backdrop-blur-md">
              <Sparkles className="w-3 h-3 mr-2 text-primary" />
              PolyReach 2.0 is now live
            </Badge>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-8xl lg:text-[100px] font-black tracking-tightest leading-[0.95] sm:leading-[0.9] mb-8"
          >
            Automate outreach. <br />
            <span className="text-gradient-primary">Close more deals.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 sm:mb-12 leading-relaxed font-medium"
          >
            The world's most advanced omnichannel outreach engine for growth teams. 
            Sync LinkedIn and WhatsApp with AI that converts.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center"
          >
            <Link to="/register" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto px-10 h-16 text-lg rounded-2xl glow-primary group">
                Build your first sequence
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="w-full sm:w-auto px-10 h-16 text-lg rounded-2xl group border-white/10 hover:bg-white/5">
              Watch Demo
              <MousePointer2 className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            </Button>
          </motion.div>
        </div>

        {/* Hero Visualizer */}
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-6xl mx-auto mt-16 sm:mt-24 relative hidden sm:block"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-fuchsia-600/30 blur-2xl rounded-[32px] opacity-50" />
          <div className="glass-morphism rounded-[32px] p-2 border-white/10">
            <div className="bg-background/80 rounded-[28px] overflow-hidden border border-white/5 shadow-2xl h-[400px] md:h-[600px] flex flex-col">
              <div className="h-14 border-b border-white/5 flex items-center px-6 justify-between bg-white/[0.02]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                </div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">PolyReach sequence dashboard</div>
                <div className="w-10" />
              </div>
              <div className="flex-1 flex p-4 md:p-8 gap-4 md:gap-8">
                <div className="w-48 lg:w-64 flex flex-col gap-4 hidden md:flex">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="h-12 bg-white/5 rounded-xl border border-white/5" />
                  ))}
                </div>
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                  <div className="bg-primary/5 rounded-3xl border border-primary/20 p-6 md:p-8 flex flex-col justify-between overflow-hidden relative">
                    <div className="absolute -right-8 -top-8 w-40 h-40 bg-primary/20 blur-3xl" />
                    <div>
                      <div className="h-4 w-32 bg-primary/20 rounded-full mb-6" />
                      <div className="h-12 w-full bg-white/5 rounded-2xl" />
                    </div>
                    <div className="h-32 w-full bg-gradient-to-t from-primary/10 to-transparent rounded-2xl border border-primary/10" />
                  </div>
                  <div className="bg-white/[0.02] rounded-3xl border border-white/5 p-6 md:p-8 hidden md:block">
                    <div className="h-4 w-24 bg-white/10 rounded-full mb-6" />
                    <div className="space-y-4">
                      <div className="h-20 w-full bg-white/5 rounded-2xl" />
                      <div className="h-20 w-full bg-white/5 rounded-2xl" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Trusted By Marquee */}
      <section className="py-20 border-y border-white/5 bg-white/[0.02] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[10px] uppercase tracking-widest font-bold text-muted-foreground mb-12">Trusted by 500+ hyper-growth companies</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
            {['Vercel', 'Linear', 'Stripe', 'Supabase', 'Framer', 'Prisma'].map(logo => (
              <span key={logo} className="text-2xl font-black tracking-tighter text-foreground">{logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section id="features" className="py-20 sm:py-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight mb-6">Engineered for Results.</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">Everything you need to run high-converting outreach at scale without burning your profiles.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
            <Card hover className="md:col-span-6 lg:col-span-8 h-auto lg:h-[500px]">
              <div className="relative h-full flex flex-col p-8 sm:p-12">
                <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent group-hover:from-primary/20 transition-all duration-700" />
                <div className="relative z-10">
                   <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/20 rounded-2xl flex items-center justify-center mb-8 sm:mb-10 border border-primary/20">
                     <Layers className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                   </div>
                   <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Omnichannel Flow Control</h3>
                   <p className="text-base sm:text-lg text-muted-foreground max-w-md">Design logic-based sequences that bridge LinkedIn and WhatsApp. Pivot based on prospect engagement in real-time.</p>
                </div>
                <div className="mt-8 sm:mt-12 flex-1 flex items-end">
                   <div className="w-full h-auto sm:h-48 glass-morphism rounded-3xl border-primary/10 p-4 sm:p-6 flex flex-col gap-4">
                      <div className="h-10 w-40 sm:w-48 bg-primary rounded-xl flex items-center px-4 font-bold text-[10px] sm:text-xs">LinkedIn Connect</div>
                      <div className="ml-4 sm:ml-8 border-l border-white/10 pl-4 sm:pl-8 space-y-4">
                         <div className="h-8 w-28 sm:w-32 bg-white/5 rounded-lg border border-white/5 flex items-center px-4 text-[9px] sm:text-[10px] font-bold text-muted-foreground uppercase">WAIT 2 DAYS</div>
                         <div className="h-10 w-40 sm:w-48 bg-emerald-500 rounded-xl flex items-center px-4 font-bold text-[10px] sm:text-xs">WhatsApp Message</div>
                      </div>
                   </div>
                </div>
              </div>
            </Card>

            <Card hover className="md:col-span-6 lg:col-span-4 h-auto lg:h-[500px]">
              <div className="p-8 sm:p-12 flex flex-col h-full">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-fuchsia-600/20 rounded-2xl flex items-center justify-center mb-8 sm:mb-10 border border-fuchsia-600/20">
                  <Cpu className="w-7 h-7 sm:w-8 sm:h-8 text-fuchsia-500" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">AI Personalization</h3>
                <p className="text-base sm:text-lg text-muted-foreground flex-1">We scrape LinkedIn activity and bios to generate unique icebreakers that sound actually human.</p>
                <div className="mt-8 p-4 sm:p-6 bg-white/[0.02] rounded-2xl border border-white/5 font-mono text-[10px] sm:text-xs text-fuchsia-400">
                   {">"} Loved your take on the AI infrastructure...
                </div>
              </div>
            </Card>

            <Card hover className="md:col-span-6 lg:col-span-4 h-auto sm:h-[400px]">
               <div className="p-8 sm:p-12">
                 <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 border border-emerald-500/20">
                   <Shield className="w-6 h-6 text-emerald-500" />
                 </div>
                 <h3 className="text-xl sm:text-2xl font-bold mb-4">Account Protection</h3>
                 <p className="text-sm sm:text-base text-muted-foreground">Smart randomized delays and activity mimicry to keep your profiles safe from detection.</p>
               </div>
            </Card>

            <Card hover className="md:col-span-6 lg:col-span-4 h-auto sm:h-[400px]">
               <div className="p-8 sm:p-12">
                 <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 border border-blue-500/20">
                   <BarChart3 className="w-6 h-6 text-blue-500" />
                 </div>
                 <h3 className="text-xl sm:text-2xl font-bold mb-4">Real-time Analytics</h3>
                 <p className="text-sm sm:text-base text-muted-foreground">Track open rates, replies, and conversions with millisecond precision across all channels.</p>
               </div>
            </Card>

            <Card hover className="md:col-span-6 lg:col-span-4 h-auto sm:h-[400px]">
               <div className="p-8 sm:p-12">
                 <div className="w-12 h-12 bg-amber-500/20 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 border border-amber-500/20">
                   <Target className="w-6 h-6 text-amber-500" />
                 </div>
                 <h3 className="text-xl sm:text-2xl font-bold mb-4">Lead Enrichment</h3>
                 <p className="text-sm sm:text-base text-muted-foreground">Automatically find verified emails and phone numbers for your prospects as they enter the flow.</p>
               </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto overflow-hidden relative rounded-[32px] sm:rounded-[40px]">
          <div className="absolute inset-0 bg-primary/10" />
          <motion.div 
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 glass-morphism rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 md:p-24 border-primary/20 text-center overflow-hidden"
          >
            <div className="absolute -left-20 -top-20 w-96 h-96 bg-primary/20 blur-[100px] rounded-full" />
            <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-fuchsia-600/10 blur-[100px] rounded-full" />
            
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tightest mb-6 sm:mb-8 leading-tight">
              Ready to break <br /> the reply rate ceiling?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-12 font-medium">Join 5,000+ top performing sales teams. Start your 14-day free trial today.</p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center">
              <Link to="/register" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto px-12 h-16 sm:h-18 text-lg sm:text-xl rounded-2xl glow-primary">
                  Launch PolyReach
                </Button>
              </Link>
            </div>
            <p className="mt-8 text-[10px] sm:text-sm text-muted-foreground font-medium uppercase tracking-widest">No credit card required. 14-day free trial.</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 sm:py-20 px-4 sm:px-6 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 xs:grid-cols-2 md:grid-cols-5 gap-10 sm:gap-12">
          <div className="col-span-1 xs:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Send className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-black text-gradient uppercase tracking-widest">POLYREACH</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs font-medium">Building the future of omnichannel outreach. One human connection at a time.</p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-[10px] uppercase tracking-widest text-foreground">Product</h4>
            <ul className="space-y-4 text-muted-foreground text-[10px] font-bold uppercase tracking-widest">
              <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Changelog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-[10px] uppercase tracking-widest text-foreground">Company</h4>
            <ul className="space-y-4 text-muted-foreground text-[10px] font-bold uppercase tracking-widest">
              <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Ethics</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Press</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-[10px] uppercase tracking-widest text-foreground">Legal</h4>
            <ul className="space-y-4 text-muted-foreground text-[10px] font-bold uppercase tracking-widest">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 sm:mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
          <span>© 2026 PolyReach Inc.</span>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Twitter</a>
            <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-primary transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

