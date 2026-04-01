import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Switch } from '@headlessui/react';
import { Sparkles, Save, Code, Zap } from 'lucide-react';
import { cn } from '../utils/cn';

export function Templates() {
  const [content, setContent] = useState('Hi {{FirstName}},\n\nI was impressed by your recent work at {{Company}}...');
  const [templateName, setTemplateName] = useState('B2B Intro V1');
  const [aiEnabled, setAiEnabled] = useState(false);

  const variables = [
    { label: 'First Name', tag: '{{FirstName}}' },
    { label: 'Last Name', tag: '{{LastName}}' },
    { label: 'Company', tag: '{{Company}}' },
    { label: 'Job Title', tag: '{{JobTitle}}' },
  ];

  const insertVariable = (tag) => {
    setContent(prev => prev + tag);
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white uppercase tracking-tight">Template Editor</h2>
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-1">Design high-converting outreach</p>
        </div>
        <Button className="w-full sm:w-auto glow-primary">
          <Save className="w-4 h-4 mr-2" />
          Save Template
        </Button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 min-h-0 items-start">
        {/* Editor Area */}
        <div className="flex-1 w-full flex flex-col gap-6 lg:min-h-[600px]">
          <Card className="flex-1 flex flex-col border-white/5 overflow-hidden">
            <div className="px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Code className="w-4 h-4 text-primary" />
                </div>
                <input 
                  type="text" 
                  value={templateName}
                  onChange={(e) => setTemplateName(e.target.value)}
                  className="text-lg font-bold text-white bg-transparent border-none focus:outline-none focus:ring-0 p-0 uppercase tracking-tight"
                />
              </div>
              
              <div className="flex items-center justify-between sm:justify-end gap-4 bg-white/5 sm:bg-transparent p-3 sm:p-0 rounded-xl border border-white/5 sm:border-none">
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                  AI Sync
                </span>
                <Switch
                  checked={aiEnabled}
                  onChange={setAiEnabled}
                  className={cn(
                    aiEnabled ? 'bg-primary' : 'bg-white/10',
                    'relative inline-flex h-6 w-11 items-center rounded-full transition-all focus:outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'
                  )}
                >
                  <span
                    className={cn(
                      aiEnabled ? 'translate-x-6' : 'translate-x-1',
                      'inline-block h-4 w-4 transform rounded-full bg-white shadow-lg transition-all duration-200'
                    )}
                  />
                </Switch>
              </div>
            </div>
            
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="flex-1 w-full min-h-[300px] lg:min-h-0 bg-transparent text-foreground p-6 sm:p-8 resize-none focus:outline-none focus:ring-0 leading-relaxed font-mono text-sm sm:text-base selection:bg-primary/20"
              placeholder="Write your message here..."
            />
          </Card>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-80 flex flex-col gap-8 shrink-0">
          <Card className="border-white/5">
            <CardHeader className="py-5 border-b border-white/5">
              <CardTitle className="text-[10px] flex items-center gap-2 text-muted-foreground font-bold uppercase tracking-widest">
                <Zap className="w-3.5 h-3.5 text-primary" />
                Variable Tags
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 flex flex-col gap-3">
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-relaxed mb-2 opacity-50">Click a variable to insert it into your template.</p>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                {variables.map((variable) => (
                  <button
                    key={variable.tag}
                    onClick={() => insertVariable(variable.tag)}
                    className="flex items-center justify-between px-4 py-3 bg-white/5 hover:bg-primary/10 border border-white/5 hover:border-primary/20 rounded-xl transition-all text-left group"
                  >
                    <span className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">{variable.label}</span>
                    <span className="text-[10px] font-bold text-muted-foreground group-hover:text-primary font-mono opacity-50">{variable.tag}</span>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {aiEnabled && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <Card className="bg-primary/5 border-primary/20 relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-primary/20 blur-3xl pointer-events-none" />
                <CardHeader className="py-5">
                  <CardTitle className="text-[10px] font-bold text-primary uppercase tracking-widest flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    AI Intelligence Rules
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <textarea 
                    className="w-full h-32 p-4 text-xs font-semibold bg-black/20 text-foreground border border-white/10 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary/50 placeholder:text-muted-foreground resize-none"
                    defaultValue="Write a personalized 2-sentence icebreaker based on their LinkedIn bio. Keep it casual but professional."
                    placeholder="Tell our AI how to personalize this message..."
                  />
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}