import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Switch } from '@headlessui/react';
import { Sparkles, Save, Code } from 'lucide-react';
import { cn } from '../utils/cn';

export function Templates() {
  const [content, setContent] = useState('Hi {{FirstName}},\n\nI was impressed by your recent work at {{Company}}...');
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
    <div className="h-[calc(100vh-8rem)] flex flex-col relative">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Template Editor</h2>
        <Button>
          <Save className="w-4 h-4 mr-2" />
          Save Template
        </Button>
      </div>

      <div className="flex-1 flex gap-6 min-h-0">
        {/* Editor Area */}
        <div className="flex-1 flex flex-col">
          <Card className="flex-1 flex flex-col mt-0 h-full">
            <div className="px-6 py-4 flex items-center justify-between border-b border-slate-800 bg-slate-900/50 rounded-t-xl">
              <input 
                type="text" 
                defaultValue="B2B Intro V1"
                className="text-lg font-semibold text-white bg-transparent border-none focus:outline-none focus:ring-0 p-0"
              />
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-slate-300 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                  AI Personalization
                </span>
                <Switch
                  checked={aiEnabled}
                  onChange={setAiEnabled}
                  className={cn(
                    aiEnabled ? 'bg-indigo-600' : 'bg-slate-700',
                    'relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none'
                  )}
                >
                  <span
                    className={cn(
                      aiEnabled ? 'translate-x-6' : 'translate-x-1',
                      'inline-block h-4 w-4 transform rounded-full bg-white transition-transform'
                    )}
                  />
                </Switch>
              </div>
            </div>
            
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="flex-1 w-full bg-slate-900 text-slate-200 p-6 resize-none focus:outline-none focus:ring-0 leading-relaxed font-mono text-sm rounded-b-xl"
              placeholder="Write your message here..."
            />
          </Card>
        </div>

        {/* Sidebar */}
        <div className="w-80 flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm flex items-center gap-2 text-white">
                <Code className="w-4 h-4 text-slate-400" />
                Variable Tags
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 flex flex-col gap-2">
              <p className="text-xs text-slate-400 mb-2">Click a variable to insert it into your template.</p>
              {variables.map((variable) => (
                <button
                  key={variable.tag}
                  onClick={() => insertVariable(variable.tag)}
                  className="flex items-center justify-between px-3 py-2 w-full bg-slate-900/50 hover:bg-indigo-500/10 border border-slate-700 hover:border-indigo-500/30 rounded-md transition-colors text-left group"
                >
                  <span className="text-sm text-slate-300 font-medium group-hover:text-indigo-400">{variable.label}</span>
                  <span className="text-xs text-slate-500 group-hover:text-indigo-400 font-mono">{variable.tag}</span>
                </button>
              ))}
            </CardContent>
          </Card>

          {aiEnabled && (
            <Card className="bg-indigo-500/5 border-indigo-500/20">
              <CardHeader>
                <CardTitle className="text-sm text-indigo-400">AI Prompt Rules</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <textarea 
                  className="w-full h-32 p-3 text-sm bg-slate-900/50 text-slate-200 border border-indigo-500/20 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  defaultValue="Write a personalized 2-sentence icebreaker based on their LinkedIn bio. Keep it casual but professional."
                  placeholder="Tell our AI how to personalize this message..."
                />
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}