import React from 'react';
import { Phase } from '../types';

const RoadmapItem: React.FC<{ phase: Phase, align: 'left' | 'right' }> = ({ phase, align }) => {
  return (
    <div className={`flex flex-col md:flex-row items-center gap-8 w-full ${align === 'right' ? 'md:flex-row-reverse' : ''}`}>
      
      {/* Content Side */}
      <div className={`flex-1 w-full md:w-1/2 ${align === 'right' ? 'md:text-right text-left' : 'text-left'}`}>
        <div className="glass-panel p-6 rounded-none border-l-4 border-neon-cyan relative group">
          <div className="absolute -top-3 -right-3 text-6xl font-black text-neon-pink/20 select-none z-0">
            {phase.id}
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl font-black italic uppercase mb-1 text-white">
              <span className="text-neon-cyan mr-2">PHASE {phase.id}:</span>
              {phase.title}
            </h3>
            <span className="inline-block px-2 py-1 bg-neon-pink/20 text-neon-pink text-xs font-mono mb-4 border border-neon-pink/50">
              {phase.timeline}
            </span>
            <ul className={`space-y-2 ${align === 'right' ? 'md:items-end' : 'items-start'} flex flex-col`}>
              {phase.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                  <span className="text-neon-cyan mt-1">▹</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Center Line Dot */}
      <div className="hidden md:flex flex-col items-center justify-center w-12 relative">
        <div className="w-0.5 h-full bg-neon-pink/30 absolute"></div>
        <div className="w-4 h-4 bg-neon-pink rounded-full z-10 shadow-[0_0_10px_#FF007F]"></div>
      </div>

      {/* Empty Space for alignment */}
      <div className="hidden md:block flex-1 w-1/2"></div>
    </div>
  );
};

export default RoadmapItem;
