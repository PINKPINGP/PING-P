import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Terminal, ArrowRight, Flame, Globe, Activity } from 'lucide-react';
import { FEATURES, ROADMAP, UTILITIES, BUY_LINK } from './constants';
import CyberButton from './components/CyberButton';
import FeatureCard from './components/FeatureCard';
import RoadmapItem from './components/RoadmapItem';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen font-sans selection:bg-neon-cyan selection:text-black bg-neon-dark">
      
      {/* Visual Effects Overlays */}
      <div className="scanlines"></div>
      <div className="cyber-grid"></div>
      
      {/* 3D Background - Fixed */}
      <div className="fixed inset-0 z-0">
         {/* Fallback gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neon-dark to-black z-0"></div>
        <iframe 
          src='https://my.spline.design/hoverscrolleffect-j7EmhfMT0cjhXMWUgamWNm2d/' 
          frameBorder='0' 
          width='100%' 
          height='100%' 
          className="w-full h-full opacity-100 mix-blend-lighten relative z-10"
          title="3D Background"
        ></iframe>
        {/* Vignette Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050203_80%)] z-20 pointer-events-none"></div>
      </div>

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-black/90 backdrop-blur-md border-neon-pink/50 py-3' : 'bg-transparent border-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 bg-neon-pink flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-300">
               <span className="font-bold text-black text-xl">P</span>
            </div>
            <div className="flex flex-col">
              <span className="text-neon-pink font-bold leading-none tracking-widest text-lg">PING-P</span>
              <span className="text-[10px] text-neon-cyan font-mono leading-none tracking-tighter">PROTOCOL</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#vision" className="text-xs font-mono font-bold text-gray-400 hover:text-neon-cyan transition-colors tracking-widest">[ VISION ]</a>
            <a href="#roadmap" className="text-xs font-mono font-bold text-gray-400 hover:text-neon-cyan transition-colors tracking-widest">[ ROADMAP ]</a>
            <a href="#utility" className="text-xs font-mono font-bold text-gray-400 hover:text-neon-cyan transition-colors tracking-widest">[ UTILITY ]</a>
            <CyberButton href={BUY_LINK} className="!py-2 !px-6 text-xs">
              <ShoppingCart size={14} />
              Get $PINGP
            </CyberButton>
          </div>

          <button className="md:hidden text-white hover:text-neon-pink transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/95 border-b border-neon-pink p-6 flex flex-col gap-4 backdrop-blur-xl">
             <a href="#vision" onClick={() => setMobileMenuOpen(false)} className="text-lg font-mono font-bold hover:text-neon-cyan text-gray-300">VISION</a>
            <a href="#roadmap" onClick={() => setMobileMenuOpen(false)} className="text-lg font-mono font-bold hover:text-neon-cyan text-gray-300">ROADMAP</a>
            <a href="#utility" onClick={() => setMobileMenuOpen(false)} className="text-lg font-mono font-bold hover:text-neon-cyan text-gray-300">UTILITY</a>
            <CyberButton href={BUY_LINK} className="w-full justify-center">
              Get $PINGP
            </CyberButton>
          </div>
        )}
      </nav>

      {/* Main Content Wrapper */}
      <main className="relative z-20">
        
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-end pb-32 items-center text-center container mx-auto px-4 relative">
          {/* Decorative HUD Elements */}
          <div className="absolute top-32 left-8 hidden lg:block text-neon-cyan/50 font-mono text-xs space-y-2">
            <p>SYS.OVRLD: <span className="text-neon-pink animate-pulse">ACTIVE</span></p>
            <p>NET.HASH: 0x917...F5D69</p>
            <p>LOC: VIRTUALS_PROTOCOL</p>
          </div>
          <div className="absolute top-32 right-8 hidden lg:block text-neon-cyan/50 font-mono text-xs text-right space-y-2">
             <p>AI AGENT: <span className="text-white">ONLINE</span></p>
             <div className="w-32 h-1 bg-gray-800 mt-1 overflow-hidden">
                <div className="h-full bg-neon-pink w-2/3 animate-pulse"></div>
             </div>
          </div>

          <div className="space-y-6 max-w-4xl relative z-30">
            <div className="flex justify-center mb-8">
               <div className="bg-black/60 backdrop-blur-sm border border-neon-cyan/30 px-6 py-2 rounded-none flex items-center gap-3">
                  <div className="w-2 h-2 bg-neon-cyan rounded-full animate-ping"></div>
                  <span className="text-neon-cyan font-mono text-sm tracking-[0.2em]">SYSTEM ONLINE // SAVAGE MODE</span>
               </div>
            </div>
            
            {/* Main tagline - Quotes Removed */}
            <div className="relative inline-block group">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tighter italic drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                It’s all about the <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-purple animate-pulse group-hover:animate-glitch inline-block">vibe</span>, Yea.💅
              </h2>
            </div>
            
            {/* Improved visibility for description text with DOS/Cyberpunk style */}
            <div className="max-w-3xl mx-auto mt-10 p-1 bg-gradient-to-r from-neon-cyan via-neon-pink to-neon-purple clip-corner">
              <div className="bg-black clip-corner p-6 md:p-8 relative">
                {/* Decorative Terminal Dots */}
                <div className="absolute top-2 left-2 flex gap-1">
                  <div className="w-2 h-2 bg-neon-pink rounded-full"></div>
                  <div className="w-2 h-2 bg-neon-cyan rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                </div>
                
                <p className="font-dos text-2xl md:text-4xl text-white leading-relaxed tracking-wide crt-text text-center">
                  <span className="text-neon-cyan">&gt;</span> Don't lift a finger. Be the Queen. <span className="animate-pulse text-neon-pink">_</span>
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-12">
              <CyberButton href={BUY_LINK} className="w-full sm:w-auto text-lg px-12 py-4 shadow-[0_0_30px_rgba(0,240,255,0.3)]">
                <span className="mr-2">🚀</span> INITIALIZE $PINGP
              </CyberButton>
              <CyberButton href="#vision" primary={false} className="w-full sm:w-auto">
                <span className="font-mono text-xs">[ ACCESS_LORE ]</span>
              </CyberButton>
            </div>
          </div>
          
          <div className="absolute bottom-10 animate-bounce text-neon-cyan/50">
            <ArrowRight className="transform rotate-90" />
          </div>
        </section>

        {/* Vision / Functionality Grid - Added scroll-mt-24 for offset */}
        <section id="vision" className="container mx-auto px-4 py-32 relative scroll-mt-24">
          <div className="absolute -left-20 top-40 w-1 h-64 bg-gradient-to-b from-transparent via-neon-pink to-transparent hidden xl:block"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-neon-pink/20 pb-6">
            <div>
              <h2 className="text-5xl md:text-7xl font-black italic uppercase text-white mb-2 tracking-tighter">
                <span className="text-neon-pink text-4xl align-top mr-2">01</span>
                The Engine
              </h2>
              <p className="text-neon-cyan font-mono tracking-widest text-sm bg-black/50 inline-block px-2">SAVAGE LOGIC & TRUST PROTOCOL</p>
            </div>
            <div className="hidden md:block text-right">
              <Terminal className="inline-block text-neon-pink mb-2 w-8 h-8" />
              <p className="text-xs text-neon-cyan font-mono">STATUS: OPTIMIZED</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </section>

        {/* Roadmap - Added scroll-mt-24 */}
        <section id="roadmap" className="container mx-auto px-4 py-32 relative overflow-hidden scroll-mt-24">
           {/* Background Elements */}
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="text-center mb-20 relative z-10">
            <h2 className="text-5xl md:text-8xl font-black italic uppercase text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800 mb-6 tracking-tighter">
              Roadmap
            </h2>
            <div className="flex justify-center items-center gap-4">
               <div className="h-[1px] w-12 bg-neon-pink"></div>
               <p className="text-neon-cyan font-mono text-sm tracking-widest uppercase">
                 Path to AI Supremacy
               </p>
               <div className="h-[1px] w-12 bg-neon-pink"></div>
            </div>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto">
             {/* Mobile Line */}
            <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-pink via-neon-purple to-neon-cyan md:hidden"></div>
            
            <div className="space-y-16">
              {ROADMAP.map((phase, index) => (
                <RoadmapItem 
                  key={phase.id} 
                  phase={phase} 
                  align={index % 2 === 0 ? 'left' : 'right'} 
                />
              ))}
            </div>
          </div>
        </section>

        {/* Token Utility - Added scroll-mt-24 */}
        <section id="utility" className="container mx-auto px-4 py-32 scroll-mt-24">
          <div className="clip-corner bg-zinc-900/80 backdrop-blur-sm p-1 border border-neon-cyan/30 relative">
             <div className="absolute top-0 right-0 p-4 border-l border-b border-neon-cyan bg-black/50 z-20">
                <Activity className="text-neon-cyan animate-pulse" />
             </div>
             
             <div className="bg-black/80 p-8 md:p-16 clip-corner relative overflow-hidden">
                {/* Grid overlay inside card */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row gap-16 items-start">
                    <div className="md:w-1/3">
                      <div className="text-neon-pink font-mono mb-2 text-sm tracking-widest">ECOSYSTEM FUEL</div>
                      <h2 className="text-5xl md:text-6xl font-black italic uppercase text-white mb-8 leading-none">
                        Token <br />
                        <span className="text-outline-cyan">Utility</span>
                      </h2>
                      <p className="text-gray-400 mb-10 leading-relaxed font-light border-l border-neon-cyan/50 pl-4">
                        $PINGP is a utility token designed to support the long-term operation and continuity of the agent.
                        Token usage is tied to interaction and participation within the ecosystem, rather than speculative behavior.
                        <br/><br/>
                        <span className="text-white font-bold">Contract:</span> <span className="font-mono text-xs text-neon-cyan">0x9170...8F5D69</span>
                      </p>
                    </div>

                    <div className="md:w-2/3 grid grid-cols-1 gap-6">
                      {UTILITIES.map((util, idx) => (
                        <div key={idx} className="flex gap-6 group p-4 border border-transparent hover:border-neon-pink/30 hover:bg-neon-pink/5 transition-all duration-300">
                          <div className="mt-1">
                            <div className="w-12 h-12 bg-black border border-neon-cyan flex items-center justify-center text-xl text-neon-cyan font-black italic shadow-[0_0_15px_rgba(0,240,255,0.2)] group-hover:bg-neon-cyan group-hover:text-black group-hover:scale-110 transition-all">
                              {idx + 1}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-white uppercase mb-2 group-hover:text-neon-cyan transition-colors tracking-wide">{util.title}</h4>
                            <p className="text-gray-400 text-sm leading-relaxed font-mono">{util.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </section>

        {/* CTA Footer */}
        <section className="container mx-auto px-4 py-32 text-center relative">
          <div className="absolute inset-0 bg-gradient-to-t from-neon-pink/10 to-transparent pointer-events-none"></div>
          
          {/* Added slight glitch animation class to this text */}
          <h2 className="text-4xl md:text-7xl font-black uppercase text-white mb-12 italic tracking-tighter relative z-10 animate-glitch">
            Ready to live the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-white drop-shadow-[0_0_20px_rgba(255,0,127,0.5)]">Ping-P Life?</span>
          </h2>
          
          <div className="flex justify-center relative z-20">
             <CyberButton href={BUY_LINK} className="text-xl px-16 py-6 animate-pulse-fast shadow-[0_0_50px_rgba(255,0,127,0.4)] border-2 border-neon-cyan">
               <Flame className="inline-block mr-3" />
               Join The 1% Elite
             </CyberButton>
          </div>
          
          <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-gray-600 text-xs font-mono uppercase tracking-widest">
            <p>&copy; 2024 PING-P Protocol. All Rights Reserved.</p>
            <div className="flex items-center gap-2 mt-4 md:mt-0">
               <Globe size={14} />
               <p>Powered by Virtuals Protocol</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;