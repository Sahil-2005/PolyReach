import React from 'react';
import { cn } from '../../utils/cn';

export function Table({ className, children, ...props }) {
  return (
    <div className="w-full overflow-x-auto rounded-2xl border border-white/5 bg-card/30 backdrop-blur-sm">
      <table className={cn("w-full text-sm text-left text-muted-foreground", className)} {...props}>
        {children}
      </table>
    </div>
  );
}

export function TableHeader({ className, children, ...props }) {
  return (
    <thead className={cn("text-[10px] text-muted-foreground uppercase tracking-widest bg-white/5 border-b border-white/5", className)} {...props}>
      {children}
    </thead>
  );
}

export function TableBody({ className, children, ...props }) {
  return (
    <tbody className={cn("divide-y divide-white/5", className)} {...props}>
      {children}
    </tbody>
  );
}

export function TableRow({ className, children, ...props }) {
  return (
    <tr className={cn("hover:bg-white/5 transition-colors duration-200 group/row", className)} {...props}>
      {children}
    </tr>
  );
}

export function TableHead({ className, children, ...props }) {
  return (
    <th className={cn("px-6 py-5 font-bold whitespace-nowrap", className)} {...props}>
      {children}
    </th>
  );
}

export function TableCell({ className, children, ...props }) {
  return (
    <td className={cn("px-6 py-4 text-foreground/80 group-hover/row:text-foreground transition-colors", className)} {...props}>
      {children}
    </td>
  );
}