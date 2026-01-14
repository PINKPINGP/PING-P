import React from 'react';
import { Feature } from '../types';
import { Crown, Zap, Shield, Cpu } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Crown: <Crown className="w-8 h-8 text-neon-pink" />,
  Zap: <Zap className="w-8 h-8 text-neon-cyan" />,
  Shield: <Shield className="w-8 h-8 text-neon-purple" />,
  Cpu: <Cpu className="w-8 h-8 text-white" />,
};

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => {
  return (
    <div className="glass-panel p-6 rounded-xl hover:translate-y-[-5px] transition-transform duration-300 relative overflow-hidden group">
      {/* Hover Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative z-10 flex flex-col gap-4">
        <div className="bg-black/40 w-fit p-3 rounded-lg border border-white/10 shadow-[0_0_15px_rgba(255,0,127,0.3)]">
          {iconMap[feature.icon]}
        </div>
        <h3 className="text-xl font-bold font-mono uppercase tracking-wider text-white">
          {feature.title}
        </h3>
        <p className="text-gray-300 leading-relaxed text-sm">
          {feature.description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
