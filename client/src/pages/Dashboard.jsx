import React from 'react';
import { Card, CardContent } from '../components/ui/Card';
import { Users, Mail, MessageSquare, ArrowUpRight, Activity } from 'lucide-react';
import { mockActivities } from '../data/mockData';

export function Dashboard() {
  const stats = [
    { label: 'Messages Sent', value: '2,845', change: '+12.5%', icon: Mail, color: 'text-indigo-600', bg: 'bg-indigo-100' },
    { label: 'Replies Received', value: '142', change: '+4.2%', icon: MessageSquare, color: 'text-emerald-600', bg: 'bg-emerald-100' },
    { label: 'Connection Requests', value: '856', change: '-2.1%', icon: Users, color: 'text-amber-600', bg: 'bg-amber-100' },
    { label: 'Conversion Rate', value: '4.9%', change: '+1.1%', icon: ArrowUpRight, color: 'text-rose-600', bg: 'bg-rose-100' },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 text-slate-800 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className={`w-12 h-12 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className={`text-sm font-medium ${stat.change.startsWith('+') ? 'text-emerald-600' : 'text-rose-600'}`}>
                  {stat.change}
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-slate-500 text-sm font-medium">{stat.label}</h4>
                <p className="text-3xl font-bold text-slate-900 mt-1">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Activity Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <div className="border-b border-slate-100 px-6 py-4 flex items-center justify-between">
            <h3 className="font-semibold text-slate-800">Recent Activity</h3>
          </div>
          <CardContent className="p-0">
            <div className="divide-y divide-slate-100">
              {mockActivities.map((activity) => (
                <div key={activity.id} className="p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                    <Activity className="w-5 h-5 text-slate-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-slate-800 font-medium text-sm">{activity.message}</p>
                    <p className="text-slate-500 text-xs mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions / Getting Started */}
        <Card>
          <div className="border-b border-slate-100 px-6 py-4">
            <h3 className="font-semibold text-slate-800">Quick Actions</h3>
          </div>
          <CardContent className="p-6 flex flex-col gap-3">
            <button className="w-full text-left px-4 py-3 rounded-lg border border-slate-200 hover:border-indigo-500 hover:bg-indigo-50 transition-colors text-sm font-medium text-slate-700">
              + Create New Campaign
            </button>
            <button className="w-full text-left px-4 py-3 rounded-lg border border-slate-200 hover:border-indigo-500 hover:bg-indigo-50 transition-colors text-sm font-medium text-slate-700">
              + Import Contacts
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}