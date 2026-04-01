export const mockContacts = [
  { id: '1', firstName: 'Sarah', lastName: 'Connor', email: 'sarah@skynet.com', company: 'Cyberdyne', status: 'Active' },
  { id: '2', firstName: 'John', lastName: 'Wick', email: 'john@continental.com', company: 'The Continental', status: 'Pending' },
  { id: '3', firstName: 'Ellen', lastName: 'Ripley', email: 'ellen@weyland.com', company: 'Weyland-Yutani', status: 'Active' },
  { id: '4', firstName: 'Tony', lastName: 'Stark', email: 'tony@stark.com', company: 'Stark Ind.', status: 'Bounced' },
];

export const mockActivities = [
  { id: 1, type: 'sent', message: 'Sent LinkedIn request to Sarah Connor', time: '10 mins ago', icon: 'linkedin' },
  { id: 2, type: 'reply', message: 'John Wick replied to Campaign "Q3 Outreach"', time: '1 hour ago', icon: 'mail' },
  { id: 3, type: 'delivered', message: 'WhatsApp message delivered to Ellen Ripley', time: '2 hours ago', icon: 'whatsapp' },
];

export const mockTemplates = [
  { id: '1', name: 'Intro - Tech Leaders', content: 'Hi {{firstName}},\n\nI noticed you are leading the team at {{company}}...' },
  { id: '2', name: 'Follow up 1', content: 'Hey {{firstName}}, just bubbling this up...' }
];