import type { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  className = '',
  disabled = false,
  ...props
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1A1D23] disabled:opacity-50 disabled:cursor-not-allowed';

  const variantClasses = {
    primary:
      'bg-[#A8E6CF] text-[#1A1D23] hover:bg-[#7BC9A8] focus:ring-[#A8E6CF] disabled:hover:bg-[#A8E6CF]',
    secondary:
      'bg-[#DCD6F7] text-[#1A1D23] hover:bg-[#B8B0D8] focus:ring-[#DCD6F7] disabled:hover:bg-[#DCD6F7]',
    outline:
      'bg-transparent border-2 border-[#A8E6CF] text-[#A8E6CF] hover:bg-[#A8E6CF]/10 focus:ring-[#A8E6CF] disabled:border-[#7A8090] disabled:text-[#7A8090] disabled:hover:bg-transparent',
    ghost:
      'bg-transparent text-[#B8BCC8] hover:bg-[#2E333D] hover:text-[#F8F9FA] focus:ring-[#3A4050] disabled:text-[#7A8090] disabled:hover:bg-transparent',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span className="flex-shrink-0">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="flex-shrink-0">{icon}</span>
      )}
    </button>
  );
}

export default Button;
