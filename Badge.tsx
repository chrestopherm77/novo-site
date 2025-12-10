import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ children }) => {
  return (
    <div className="inline-flex items-center px-3 py-1 rounded-full border border-brand-purple/30 bg-brand-purple/10 text-brand-purpleLight text-xs font-semibold tracking-wider uppercase mb-4 shadow-[0_0_15px_rgba(138,43,226,0.2)]">
      {children}
    </div>
  );
};

export default Badge;