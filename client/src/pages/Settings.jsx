import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

import { User, Shield, CreditCard, Bell, Globe, Mail, Link2 } from 'lucide-react';

export function Settings() {
  return (
    <div className="max-w-4xl space-y-8 pb-12">
      <div>
        <h2 className="text-xl font-bold text-white uppercase tracking-tight">Account Settings</h2>
        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-1">Manage your profile and platform preferences</p>
      </div>
      
      <Card className="border-white/5 overflow-hidden">
        <CardHeader className="py-5 border-b border-white/5 bg-white/[0.02]">
          <CardTitle className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
            <User className="w-3.5 h-3.5 text-primary" />
            Profile Information
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2 ml-1">First Name</label>
              <input type="text" defaultValue="John" className="w-full text-sm font-semibold bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2 ml-1">Last Name</label>
              <input type="text" defaultValue="Doe" className="w-full text-sm font-semibold bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
            </div>
          </div>
          <div>
            <label className="block text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2 ml-1">Email Address</label>
            <div className="relative">
              <input type="email" defaultValue="john@example.com" className="w-full text-sm font-semibold bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-muted-foreground cursor-not-allowed" disabled />
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <Shield className="w-4 h-4 text-muted-foreground/30" />
              </div>
            </div>
          </div>
          <div className="pt-4 flex justify-end">
            <Button className="w-full sm:w-auto glow-primary">Save Changes</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="py-5 border-b border-white/5 bg-white/[0.02]">
          <CardTitle className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
            <Link2 className="w-3.5 h-3.5 text-primary" />
            Connected Accounts
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 sm:p-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 border border-white/5 bg-white/[0.02] rounded-2xl gap-4 hover:border-primary/20 transition-all group">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold">L</div>
              <div>
                <h4 className="font-bold text-white text-xs uppercase tracking-tight">LinkedIn Professional</h4>
                <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest mt-0.5">Active & Connected</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="w-full sm:w-auto text-[10px] font-bold uppercase tracking-widest">Reconnect Account</Button>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 border border-white/5 bg-white/[0.02] rounded-2xl gap-4 hover:border-primary/20 transition-all">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-muted-foreground font-bold">W</div>
              <div>
                <h4 className="font-bold text-white text-xs uppercase tracking-tight">WhatsApp Business</h4>
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-0.5">Not Authorized</p>
              </div>
            </div>
            <Button size="sm" className="w-full sm:w-auto text-[10px] font-bold uppercase tracking-widest bg-primary hover:bg-primary/90">Authorise Now</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}