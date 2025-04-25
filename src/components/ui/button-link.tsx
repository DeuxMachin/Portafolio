import React from 'react';
import { Button } from './button';

interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function ButtonLink({
  className = '',
  variant = 'default',
  size = 'md',
  children,
  ...props
}: ButtonLinkProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500/40';
  
  const variantStyles = {
    default: 'bg-teal-600 text-white hover:bg-teal-700',
    outline: 'bg-transparent border border-teal-600 text-teal-400 hover:bg-teal-900/20',
    ghost: 'bg-transparent text-teal-400 hover:bg-teal-900/20',
  };
  
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  };
  
  return (
    <a
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}