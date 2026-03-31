import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export function Settings() {
  return (
    <div className="max-w-4xl space-y-6">
      <h2 className="text-xl font-semibold text-white">Settings</h2>
      
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">First Name</label>
              <input type="text" defaultValue="John" className="w-full text-sm bg-slate-900 border border-slate-800 rounded-lg py-2 px-3 text-white focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Last Name</label>
              <input type="text" defaultValue="Doe" className="w-full text-sm bg-slate-900 border border-slate-800 rounded-lg py-2 px-3 text-white focus:ring-2 focus:ring-indigo-500" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Email</label>
            <input type="email" defaultValue="john@example.com" className="w-full text-sm bg-slate-800/50 border border-slate-800 rounded-lg py-2 px-3 text-slate-500" disabled />
          </div>
          <div className="pt-4">
            <Button>Save Changes</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Connected Accounts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-slate-800 rounded-lg">
            <div>
              <h4 className="font-medium text-white">LinkedIn</h4>
              <p className="text-sm text-slate-400">Connected as John Doe</p>
            </div>
            <Button variant="outline" size="sm">Reconnect</Button>
          </div>
          <div className="flex items-center justify-between p-4 border border-slate-800 rounded-lg">
            <div>
              <h4 className="font-medium text-white">WhatsApp Business</h4>
              <p className="text-sm text-slate-400">Not connected</p>
            </div>
            <Button size="sm">Connect</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}