import React from 'react';
import { cn } from '../../utils/cn';

export function Table({ className, children, ...props }) {
  return (
    <div className="w-full overflow-x-auto">
      <table className={cn("w-full text-sm text-left text-slate-500", className)} {...props}>
        {children}
      </table>
    </div>
  );
}

export function TableHeader({ className, children, ...props }) {
  return (
    <thead className={cn("text-xs text-slate-700 uppercase bg-slate-50", className)} {...props}>
      {children}
    </thead>
  );
}

export function TableBody({ className, children, ...props }) {
  return (
    <tbody className={className} {...props}>
      {children}
    </tbody>
  );
}

export function TableRow({ className, children, ...props }) {
  return (
    <tr className={cn("bg-white border-b hover:bg-slate-50", className)} {...props}>
      {children}
    </tr>
  );
}

export function TableHead({ className, children, ...props }) {
  return (
    <th className={cn("px-6 py-3 font-medium text-slate-900 whitespace-nowrap", className)} {...props}>
      {children}
    </th>
  );
}

export function TableCell({ className, children, ...props }) {
  return (
    <td className={cn("px-6 py-4", className)} {...props}>
      {children}
    </td>
  );
}