import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'green';
  icon?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 active:scale-95";
  
  const variants = {
    primary: "bg-brand-orange text-white hover:bg-brand-orangeLight hover:shadow-[0_0_20px_rgba(255,140,0,0.4)]",
    secondary: "bg-brand-purple text-white hover:bg-brand-purpleLight hover:shadow-[0_0_20px_rgba(138,43,226,0.4)]",
    outline: "bg-transparent border border-white/20 text-white hover:bg-white/10 hover:border-white/40",
    green: "bg-green-600 text-white hover:bg-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon && <ArrowRight className="w-4 h-4" />}
    </button>
  );
};

export default Button;