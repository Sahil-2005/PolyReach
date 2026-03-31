import React, { useState } from 'react';
import { UploadCloud, FileSpreadsheet, Plus, AlertCircle } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../components/ui/Table';
import { Modal } from '../components/ui/Modal';
import { mockContacts } from '../data/mockData';

export function Contacts() {
  const [isMappingModalOpen, setIsMappingModalOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Mock mapping state
  const mockHeaders = ['first_name', 'last_name', 'email_address', 'company_name'];
  const systemFields = ['FirstName', 'LastName', 'Email', 'Company', 'LinkedIn URL'];

  const getStatusBadgeVariant = (status) => {
    switch (status) {
      case 'Active': return 'success';
      case 'Pending': return 'warning';
      case 'Bounced': return 'error';
      default: return 'default';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">Contact Management</h2>
        <Button onClick={() => setIsMappingModalOpen(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Add Contacts
        </Button>
      </div>

      {/* Upload Area */}
      <Card>
        <CardContent className="p-8">
          <div 
            className={`border-2 border-dashed rounded-xl p-10 text-center transition-colors ${
              isDragging ? 'border-indigo-500 bg-indigo-500/10' : 'border-slate-700 hover:border-slate-600 bg-slate-900/50'
            }`}
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={(e) => { e.preventDefault(); setIsDragging(false); setIsMappingModalOpen(true); }}
          >
            <div className="w-14 h-14 bg-slate-800 rounded-full shadow-sm flex items-center justify-center mx-auto mb-4 border border-slate-700">
              <UploadCloud className="w-6 h-6 text-indigo-400" />
            </div>
            <h3 className="text-lg font-medium text-slate-200 mb-1">Upload CSV or Excel File</h3>
            <p className="text-slate-400 text-sm mb-4">Drag and drop your file here, or click to browse</p>
            <Button variant="outline" size="sm">Browse Files</Button>
          </div>
        </CardContent>
      </Card>

      {/* Data Table */}
      <Card>
        <div className="border-b border-slate-800 flex items-center justify-between p-4 px-6">
          <h3 className="font-semibold text-white">All Contacts ({mockContacts.length})</h3>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockContacts.map((contact) => (
              <TableRow key={contact.id}>
                <TableCell className="font-medium text-slate-200">
                  {contact.firstName} {contact.lastName}
                </TableCell>
                <TableCell>{contact.email}</TableCell>
                <TableCell>{contact.company}</TableCell>
                <TableCell>
                  <Badge variant={getStatusBadgeVariant(contact.status)}>
                    {contact.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">Edit</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      {/* Column Mapping Modal */}
      <Modal 
        isOpen={isMappingModalOpen} 
        onClose={() => setIsMappingModalOpen(false)}
        title="Map Data Columns"
        className="max-w-2xl"
      >
        <div className="mt-2">
          <p className="text-sm text-slate-400 mb-4">
            Match the columns from your uploaded file to the system fields.
          </p>
          
          <div className="space-y-4">
            {mockHeaders.map((header, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-slate-800/50 p-3 rounded-lg border border-slate-700">
                <div className="flex-1 flex items-center gap-2">
                  <FileSpreadsheet className="w-4 h-4 text-slate-400" />
                  <span className="text-sm font-medium text-slate-300">{header}</span>
                </div>
                <div className="text-slate-500">→</div>
                <div className="flex-1">
                  <select className="w-full text-sm bg-slate-900 border border-slate-700 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option value="">Select a field...</option>
                    {systemFields.map(field => (
                      <option key={field} value={field}>{field}</option>
                    ))}
                  </select>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
            <Button variant="ghost" onClick={() => setIsMappingModalOpen(false)}>Cancel</Button>
            <Button onClick={() => setIsMappingModalOpen(false)}>Import Contacts</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}