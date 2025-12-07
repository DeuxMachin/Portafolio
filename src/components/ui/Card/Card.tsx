import type { ReactNode, CSSProperties } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
  onClick?: () => void;
  style?: CSSProperties;
}

export function Card({
  children,
  className = '',
  hover = true,
  glass = false,
  onClick,
  style,
}: CardProps) {
  const baseClasses =
    'rounded-2xl p-6 transition-all duration-300';
  const bgClasses = glass
    ? 'glass'
    : 'bg-[#2A2F3A] border border-[#3A4050]';
  const hoverClasses = hover
    ? 'hover-lift hover:border-[#A8E6CF]/30'
    : '';
  const cursorClass = onClick ? 'cursor-pointer' : '';

  return (
    <div
      className={`${baseClasses} ${bgClasses} ${hoverClasses} ${cursorClass} ${className}`}
      onClick={onClick}
      style={style}
    >
      {children}
    </div>
  );
}

export default Card;
