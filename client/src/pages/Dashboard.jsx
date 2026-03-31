import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Users, Mail, MessageSquare, ArrowUpRight, Activity, Zap, TrendingUp, Sparkles, ChevronRight } from 'lucide-react';
import { mockActivities } from '../data/mockData';
import { motion } from 'framer-motion';

export function Dashboard() {
  const stats = [
    { label: 'Messages Sent', value: '2,845', change: '+12.5%', icon: Mail, color: 'text-primary', bg: 'bg-primary/10' },
    { label: 'Replies Received', value: '142', change: '+4.2%', icon: MessageSquare, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
    { label: 'Connect Requests', value: '856', change: '-2.1%', icon: Users, color: 'text-amber-500', bg: 'bg-amber-500/10' },
    { label: 'Conversion Rate', value: '4.9%', change: '+1.1%', icon: ArrowUpRight, color: 'text-fuchsia-500', bg: 'bg-fuchsia-600/10' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="space-y-10">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
           <h2 className="text-3xl font-black text-foreground tracking-tightest uppercase mb-1">Performance Overview</h2>
           <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
             <Zap className="w-4 h-4 text-primary" />
             Real-time campaign insights
           </p>
        </div>
        <div className="flex items-center gap-3">
           <Badge variant="outline" className="h-9 px-4 border-white/5 bg-white/[0.02]">Last 30 Days</Badge>
           <button className="h-9 px-4 rounded-xl bg-primary text-white text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
             Export Report
           </button>
        </div>
      </div>

      {/* Stats Grid */}
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stats.map((stat, i) => (
          <motion.div key={i} variants={item}>
            <Card className="border-white/5 hover:border-primary/20 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center shadow-inner`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col items-end">
                    <Badge variant={stat.change.startsWith('+') ? 'success' : 'error'} className="mb-1">
                      {stat.change}
                    </Badge>
                    <span className="text-[8px] font-bold text-muted-foreground uppercase tracking-widest">vs last mo</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">{stat.label}</h4>
                  <p className="text-4xl font-black text-foreground tracking-tighter">{stat.value}</p>
                </div>
                <div className="mt-6 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                   <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: i % 2 === 0 ? '70%' : '45%' }}
                    transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                    className={`h-full ${stat.bg.replace('/10', '')}`} 
                   />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Activity Feed */}
        <Card className="lg:col-span-2 border-white/5">
          <CardHeader className="flex flex-row items-center justify-between py-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                 <Activity className="w-4 h-4 text-primary" />
              </div>
              <CardTitle>Global Activity</CardTitle>
            </div>
            <button className="text-[10px] font-bold text-primary uppercase tracking-widest hover:underline transition-all">View all</button>
          </CardHeader>
          <CardContent className="px-0 py-0">
            <div className="divide-y divide-white/5">
              {mockActivities.map((activity, i) => (
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  key={activity.id} 
                  className="px-8 py-6 flex items-start gap-5 group hover:bg-white/[0.01] transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors">
                    {activity.type === 'message' ? <MessageSquare className="w-5 h-5 text-indigo-400" /> : <Users className="w-5 h-5 text-emerald-400" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-foreground truncate">{activity.message}</p>
                    <div className="flex items-center gap-2 mt-1.5">
                       <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{activity.time}</span>
                       <span className="w-1 h-1 rounded-full bg-white/10" />
                       <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Automation Flow</span>
                    </div>
                  </div>
                  <button className="p-2 rounded-lg hover:bg-white/5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Sidebar Cards */}
        <div className="space-y-8">
           <Card className="bg-primary/5 border-primary/20 relative overflow-hidden group">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/20 blur-3xl group-hover:bg-primary/30 transition-colors" />
              <CardHeader className="border-none pb-0">
                 <div className="flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    Growth Insight
                 </div>
                 <CardTitle className="text-2xl leading-tight">Your sequences are converting 24% higher than avg.</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                 <p className="text-sm text-muted-foreground font-semibold leading-relaxed mb-6">AI models suggest increasing daily LinkedIn limits on your primary account for even better results.</p>
                 <button className="w-full h-11 rounded-xl bg-primary text-white text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]">
                    Optimize Limits
                 </button>
              </CardContent>
           </Card>

           <Card className="border-white/5">
              <CardHeader className="py-6">
                <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-lg bg-fuchsia-600/10 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-fuchsia-600" />
                   </div>
                   <CardTitle>System Stats</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                 {[
                   { label: 'Profile Health', val: '98%', color: 'bg-emerald-500' },
                   { label: 'Proxy Latency', val: '142ms', color: 'bg-primary' },
                   { label: 'AI Queue', val: 'Low', color: 'bg-indigo-400' }
                 ].map(stat => (
                   <div key={stat.label} className="space-y-2">
                      <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                         <span className="text-muted-foreground">{stat.label}</span>
                         <span className="text-foreground">{stat.val}</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                         <div className={`h-full ${stat.color} w-3/4`} />
                      </div>
                   </div>
                 ))}
              </CardContent>
           </Card>
        </div>
      </div>
    </div>
  );
}