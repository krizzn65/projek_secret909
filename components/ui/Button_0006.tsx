import React from 'react';

type Variant = 'primary' | 'ghost' | 'danger';
export function Button({ variant = 'primary', ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  const styles: Record<Variant, string> = {
    primary: 'bg-blue-600 text-white hover:bg-blue-500',
    ghost: 'bg-transparent text-neutral-200 hover:bg-neutral-800',
    danger: 'bg-red-600 text-white hover:bg-red-500',
  };
  return <button className={`rounded-lg px-4 py-2 font-medium transition-colors ${styles[variant]}`} {...props} />;
}
