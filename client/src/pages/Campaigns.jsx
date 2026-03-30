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
          <h2 className="text-xl font-semibold text-slate-800">Create Campaign</h2>
          <p className="text-sm text-slate-500 mt-1">Configure your outreach sequence</p>
        </div>
      </div>

      {/* Stepper */}
      <div className="flex items-center justify-between relative before:absolute before:inset-0 before:top-1/2 before:-translate-y-1/2 before:h-0.5 before:bg-slate-200 before:z-0">
        {steps.map((s) => {
          const isActive = step === s.num;
          const isCompleted = step > s.num;
          return (
            <div key={s.num} className="relative z-10 flex flex-col items-center gap-2 bg-slate-50 px-2">
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm border-2 transition-colors",
                isActive ? "border-indigo-600 bg-indigo-600 text-white" : 
                isCompleted ? "border-indigo-600 bg-white text-indigo-600" : "border-slate-300 bg-white text-slate-400"
              )}>
                {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : s.num}
              </div>
              <span className={cn(
                "text-xs font-medium",
                isActive || isCompleted ? "text-slate-900" : "text-slate-400"
              )}>{s.title}</span>
            </div>
          );
        })}
      </div>

      {/* Form Area */}
      <Card className="min-h-[400px]">
        <CardContent className="p-8 h-full flex flex-col">
          {step === 1 && (
            <div className="space-y-6 flex-1">
              <h3 className="text-lg font-medium text-slate-900">Select Contact List</h3>
              <select className="w-full text-sm bg-white border border-slate-300 rounded-lg py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option>Q3 Tech Leads (1,204 contacts)</option>
                <option>Startup Founders (451 contacts)</option>
              </select>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 flex-1">
              <h3 className="text-lg font-medium text-slate-900">Choose Template</h3>
              <select className="w-full text-sm bg-white border border-slate-300 rounded-lg py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option>B2B Intro V1</option>
                <option>Follow up 1</option>
              </select>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 flex-1">
              <h3 className="text-lg font-medium text-slate-900">Delivery Channels</h3>
              <div className="grid grid-cols-2 gap-4">
                <label className="flex items-start gap-3 p-4 border border-indigo-200 bg-indigo-50 rounded-lg cursor-pointer">
                  <input type="checkbox" className="mt-1" defaultChecked />
                  <div>
                    <span className="block font-medium text-slate-900">LinkedIn</span>
                    <span className="text-xs text-slate-500">Automated connection + message</span>
                  </div>
                </label>
                <label className="flex items-start gap-3 p-4 border border-slate-200 rounded-lg cursor-pointer">
                  <input type="checkbox" className="mt-1" />
                  <div>
                    <span className="block font-medium text-slate-900">WhatsApp</span>
                    <span className="text-xs text-slate-500">Direct message to phone numbers</span>
                  </div>
                </label>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6 flex-1">
              <h3 className="text-lg font-medium text-slate-900">Sending Schedule</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Max messages per day</label>
                  <input type="number" defaultValue={50} className="w-full text-sm bg-white border border-slate-300 rounded-lg py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Start Time</label>
                    <input type="time" defaultValue="09:00" className="w-full text-sm bg-white border border-slate-300 rounded-lg py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">End Time</label>
                    <input type="time" defaultValue="17:00" className="w-full text-sm bg-white border border-slate-300 rounded-lg py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-between items-center pt-6 mt-6 border-t border-slate-100">
            <Button 
              variant="outline" 
              onClick={() => setStep(step - 1)}
              disabled={step === 1}
            >
              Back
            </Button>
            {step < 4 ? (
              <Button onClick={() => setStep(step + 1)}>
                Next Step
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            ) : (
              <Button>
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