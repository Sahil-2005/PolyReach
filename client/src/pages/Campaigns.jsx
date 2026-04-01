import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Play, CheckCircle2, ChevronRight } from 'lucide-react';
import { cn } from '../utils/cn';

export function Campaigns() {
  const [step, setStep] = useState(1);
  const steps = [
    { num: 1, title: 'Audience' },
    { num: 2, title: 'Message' },
    { num: 3, title: 'Channels' },
    { num: 4, title: 'Schedule' },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white">Create Campaign</h2>
          <p className="text-sm text-slate-400 mt-1">Configure your outreach sequence</p>
        </div>
      </div>

      {/* Stepper */}
      <div className="flex items-center justify-between relative before:absolute before:inset-0 before:top-1/2 before:-translate-y-1/2 before:h-0.5 before:bg-slate-800 before:z-0 px-2">
        {steps.map((s) => {
          const isActive = step === s.num;
          const isCompleted = step > s.num;
          return (
            <div key={s.num} className="relative z-10 flex flex-col items-center gap-2 bg-slate-950 px-1 sm:px-2">
              <div className={cn(
                "w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm border-2 transition-all duration-300",
                isActive ? "border-primary bg-primary text-white shadow-lg shadow-primary/20 scale-110" : 
                isCompleted ? "border-primary bg-slate-900 text-primary" : "border-slate-700 bg-slate-900 text-slate-500"
              )}>
                {isCompleted ? <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" /> : s.num}
              </div>
              <span className={cn(
                "text-[9px] sm:text-xs font-bold uppercase tracking-widest hidden xs:block",
                isActive || isCompleted ? "text-slate-200" : "text-slate-500"
              )}>{s.title}</span>
            </div>
          );
        })}
      </div>

      {/* Form Area */}
      <Card className="min-h-[400px] border-white/5">
        <CardContent className="p-6 sm:p-8 h-full flex flex-col">
          {step === 1 && (
            <div className="space-y-6 flex-1">
              <h3 className="text-lg font-bold text-white uppercase tracking-tight">Select Contact List</h3>
              <select className="w-full text-sm bg-white/5 border border-white/10 text-white rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all">
                <option>Q3 Tech Leads (1,204 contacts)</option>
                <option>Startup Founders (451 contacts)</option>
              </select>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 flex-1">
              <h3 className="text-lg font-bold text-white uppercase tracking-tight">Choose Template</h3>
              <select className="w-full text-sm bg-white/5 border border-white/10 text-white rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all">
                <option>B2B Intro V1</option>
                <option>Follow up 1</option>
              </select>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 flex-1">
              <h3 className="text-lg font-bold text-white uppercase tracking-tight">Delivery Channels</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="flex items-start gap-3 p-4 border border-primary/30 bg-primary/5 rounded-2xl cursor-pointer hover:bg-primary/10 transition-all group">
                  <input type="checkbox" className="mt-1 accent-primary" defaultChecked />
                  <div>
                    <span className="block font-bold text-white text-sm uppercase tracking-tight">LinkedIn</span>
                    <span className="text-xs text-muted-foreground font-medium">Automated connection + message</span>
                  </div>
                </label>
                <label className="flex items-start gap-4 p-4 border border-white/5 bg-white/5 rounded-2xl cursor-pointer hover:bg-white/10 transition-all group">
                  <input type="checkbox" className="mt-1 accent-primary" />
                  <div>
                    <span className="block font-bold text-white text-sm uppercase tracking-tight">WhatsApp</span>
                    <span className="text-xs text-muted-foreground font-medium">Direct message to phone numbers</span>
                  </div>
                </label>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6 flex-1">
              <h3 className="text-lg font-bold text-white uppercase tracking-tight">Sending Schedule</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2 ml-1">Max messages per day</label>
                  <input type="number" defaultValue={50} className="w-full text-sm bg-white/5 border border-white/10 text-white rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2 ml-1">Start Time</label>
                    <input type="time" defaultValue="09:00" className="w-full text-sm bg-white/5 border border-white/10 text-white rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2 ml-1">End Time</label>
                    <input type="time" defaultValue="17:00" className="w-full text-sm bg-white/5 border border-white/10 text-white rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4 pt-8 mt-8 border-t border-white/5">
            <Button 
              variant="outline" 
              onClick={() => setStep(step - 1)}
              disabled={step === 1}
              className="w-full sm:w-auto"
            >
              Back
            </Button>
            {step < 4 ? (
              <Button onClick={() => setStep(step + 1)} className="w-full sm:w-auto">
                Next Step
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            ) : (
              <Button className="w-full sm:w-auto glow-primary">
                <Play className="w-4 h-4 mr-2" />
                Launch Campaign
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}