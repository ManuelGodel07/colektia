import { useState } from 'react';

export function MySelect({ value, onValueChange, children }) {
  return <div>{children}</div>; // placeholder for structure
}

export function SelectTrigger({ children, className }) {
  return <div className={`border rounded px-3 py-2 ${className || ''}`}>{children}</div>;
}

export function SelectValue({ placeholder }) {
  return <span>{placeholder}</span>;
}

export function SelectContent({ children }) {
  return <div className="border rounded mt-2 shadow bg-white">{children}</div>;
}

export function SelectItem({ value, children }) {
  return (
    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => alert(`Selected: ${value}`)}>
      {children}
    </div>
  );
}