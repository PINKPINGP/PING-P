import React from 'react';

interface CyberButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  primary?: boolean;
  className?: string;
}

const CyberButton: React.FC<CyberButtonProps> = ({ children, onClick, href, primary = true, className = "" }) => {
  const baseClasses = `
    relative px-8 py-3 font-bold uppercase tracking-widest text-sm transition-all duration-200
    clip-path-slant
    group
    ${className}
  `;

  const primaryClasses = "bg-neon-cyan text-black hover:bg-white hover:shadow-[0_0_20px_rgba(0,240,255,0.8)]";
  const secondaryClasses = "bg-transparent border border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-black hover:shadow-[0_0_20px_rgba(255,0,127,0.8)]";

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {/* Decorative corners */}
      <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-current opacity-50"></span>
      <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-current opacity-50"></span>
    </>
  );

  if (href) {
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className={`${baseClasses} ${primary ? primaryClasses : secondaryClasses}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button 
      onClick={onClick}
      className={`${baseClasses} ${primary ? primaryClasses : secondaryClasses}`}
    >
      {content}
    </button>
  );
};

export default CyberButton;
