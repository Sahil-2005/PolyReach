import React from 'react';
import { cn } from '../../utils/cn';

export function Table({ className, children, ...props }) {
  return (
    <div className="w-full overflow-x-auto">
      <table className={cn("w-full text-sm text-left text-slate-400", className)} {...props}>
        {children}
      </table>
    </div>
  );
}

export function TableHeader({ className, children, ...props }) {
  return (
    <thead className={cn("text-xs text-slate-400 uppercase bg-slate-900/50 border-b border-slate-800", className)} {...props}>
      {children}
    </thead>
  );
}

export function TableBody({ className, children, ...props }) {
  return (
    <tbody className={cn("divide-y divide-slate-800", className)} {...props}>
      {children}
    </tbody>
  );
}

export function TableRow({ className, children, ...props }) {
  return (
    <tr className={cn("bg-slate-900 hover:bg-slate-800/50 transition-colors", className)} {...props}>
      {children}
    </tr>
  );
}

export function TableHead({ className, children, ...props }) {
  return (
    <th className={cn("px-6 py-4 font-medium text-slate-300 whitespace-nowrap", className)} {...props}>
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