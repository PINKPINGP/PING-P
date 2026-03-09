import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Terminal, ArrowRight, Flame, Globe, Activity, FileText, Github, BookOpen, Cpu } from 'lucide-react';
import { FEATURES, ROADMAP, UTILITIES, BUY_LINK, GITHUB_LINK, WHITEPAPER_LINK, DOCS_SECTION, CHAIN, STATUS } from './constants';
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
      <div className="scanlines"></div>
      <div className="cyber-grid"></div>

      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neon-dark to-black z-0"></div>
        <iframe
          src="https://my.spline.design/hoverscrolleffect-j7EmhfMT0cjhXMWUgamWNm2d/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="w-full h-full opacity-100 mix-blend-lighten relative z-10"
          title="3D Background"
        ></iframe>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050203_80%)] z-20 pointer-events-none"></div>
      </div>

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

          <div className="hidden md:flex items-center gap-6">
            <a href="#vision" className="text-xs font-mono font-bold text-gray-400 hover:text-neon-cyan transition-colors tracking-widest">[ VISION ]</a>
            <a href="#roadmap" className="text-xs font-mono font-bold text-gray-400 hover:text-neon-cyan transition-colors tracking-widest">[ ROADMAP ]</a>
            <a href="#utility" className="text-xs font-mono font-bold text-gray-400 hover:text-neon-cyan transition-colors tracking-widest">[ UTILITY ]</a>
            <a href="#docs" className="text-xs font-mono font-bold text-gray-400 hover:text-neon-cyan transition-colors tracking-widest">[ DOCS ]</a>
            <CyberButton href={WHITEPAPER_LINK} primary={false} className="!py-2 !px-5 text-xs">
              <FileText size={14} />
              Whitepaper
            </CyberButton>
            <CyberButton href={BUY_LINK} className="!py-2 !px-6 text-xs">
              <ShoppingCart size={14} />
              Get $PINGP
            </CyberButton>
          </div>

          <button className="md:hidden text-white hover:text-neon-pink transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/95 border-b border-neon-pink p-6 flex flex-col gap-4 backdrop-blur-xl">
            <a href="#vision" onClick={() => setMobileMenuOpen(false)} className="text-lg font-mono font-bold hover:text-neon-cyan text-gray-300">VISION</a>
            <a href="#roadmap" onClick={() => setMobileMenuOpen(false)} className="text-lg font-mono font-bold hover:text-neon-cyan text-gray-300">ROADMAP</a>
            <a href="#utility" onClick={() => setMobileMenuOpen(false)} className="text-lg font-mono font-bold hover:text-neon-cyan text-gray-300">UTILITY</a>
            <a href="#docs" onClick={() => setMobileMenuOpen(false)} className="text-lg font-mono font-bold hover:text-neon-cyan text-gray-300">DOCS</a>
            <CyberButton href={WHITEPAPER_LINK} primary={false} className="w-full justify-center">
              <FileText size={16} />
              Read Whitepaper
            </CyberButton>
            <CyberButton href={BUY_LINK} className="w-full justify-center">
              Get $PINGP
            </CyberButton>
          </div>
        )}
      </nav>

      <main className="relative z-20">
        <section className="min-h-screen flex flex-col justify-end pb-32 items-center text-center container mx-auto px-4 relative">
          <div className="absolute top-32 left-8 hidden lg:block text-neon-cyan/60 font-mono text-xs space-y-3">
            <p>TOKEN: <span className="text-white">$PINGP</span></p>
            <p>CHAIN: <span className="text-neon-pink">{CHAIN.toUpperCase()}</span></p>
            <p>STATUS: <span className="text-white">{STATUS.toUpperCase()}</span></p>
          </div>
          <div className="absolute top-32 right-8 hidden lg:block text-neon-cyan/60 font-mono text-xs text-right space-y-2">
            <p>AI AGENT: <span className="text-white">ONLINE</span></p>
            <p>DOCS: <span className="text-neon-pink">WHITEPAPER READY</span></p>
            <div className="w-32 h-1 bg-gray-800 mt-1 overflow-hidden">
              <div className="h-full bg-neon-pink w-2/3 animate-pulse"></div>
            </div>
          </div>

          <div className="space-y-6 max-w-4xl relative z-30">
            <div className="flex justify-center mb-8">
              <div className="bg-black/60 backdrop-blur-sm border border-neon-cyan/30 px-6 py-2 rounded-none flex items-center gap-3">
                <div className="w-2 h-2 bg-neon-cyan rounded-full animate-ping"></div>
                <span className="text-neon-cyan font-mono text-sm tracking-[0.2em]">SYSTEM ONLINE // AUTONOMOUS MEME AGENT</span>
              </div>
            </div>

            <div className="relative inline-block group">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tighter italic drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                It’s all about the <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-purple animate-pulse group-hover:animate-glitch inline-block">vibe</span>, Yea.💅
              </h2>
            </div>

            <div className="max-w-3xl mx-auto mt-10 p-1 bg-gradient-to-r from-neon-cyan via-neon-pink to-neon-purple clip-corner">
              <div className="bg-black clip-corner p-6 md:p-8 relative">
                <div className="absolute top-2 left-2 flex gap-1">
                  <div className="w-2 h-2 bg-neon-pink rounded-full"></div>
                  <div className="w-2 h-2 bg-neon-cyan rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                </div>

                <p className="font-dos text-2xl md:text-4xl text-white leading-relaxed tracking-wide crt-text text-center">
                  <span className="text-neon-cyan">&gt;</span> Don&apos;t lift a finger. Be the Queen. <span className="animate-pulse text-neon-pink">_</span>
                </p>
              </div>
            </div>

            <p className="max-w-2xl mx-auto text-sm md:text-base text-gray-300 leading-relaxed bg-black/35 inline-block px-4 py-3 border border-white/10">
              PING-P is an autonomous cultural AI agent exploring how digital identities persist, evolve, and spread through memes, interaction, and long-term system behavior.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-10">
              <CyberButton href={BUY_LINK} className="w-full sm:w-auto text-lg px-12 py-4 shadow-[0_0_30px_rgba(0,240,255,0.3)]">
                <span className="mr-2">🚀</span> INITIALIZE $PINGP
              </CyberButton>
              <CyberButton href={WHITEPAPER_LINK} primary={false} className="w-full sm:w-auto">
                <FileText size={16} />
                READ WHITEPAPER
              </CyberButton>
            </div>

            <div className="pt-3">
              <a href={DOCS_SECTION} className="text-neon-cyan/80 hover:text-neon-cyan text-xs font-mono tracking-[0.2em]">[ ACCESS_DOCS ]</a>
            </div>
          </div>

          <div className="absolute bottom-10 animate-bounce text-neon-cyan/50">
            <ArrowRight className="transform rotate-90" />
          </div>
        </section>

        <section id="vision" className="container mx-auto px-4 py-32 relative scroll-mt-24">
          <div className="absolute -left-20 top-40 w-1 h-64 bg-gradient-to-b from-transparent via-neon-pink to-transparent hidden xl:block"></div>

          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-neon-pink/20 pb-6">
            <div>
              <h2 className="text-5xl md:text-7xl font-black italic uppercase text-white mb-2 tracking-tighter">
                <span className="text-neon-pink text-4xl align-top mr-2">01</span>
                What is PING-P
              </h2>
              <p className="text-neon-cyan font-mono tracking-widest text-sm bg-black/50 inline-block px-2">AUTONOMOUS MEME AGENT / CULTURAL SYSTEM</p>
            </div>
            <div className="hidden md:block text-right">
              <Terminal className="inline-block text-neon-pink mb-2 w-8 h-8" />
              <p className="text-xs text-neon-cyan font-mono">STATUS: CULTURAL ENGINE ONLINE</p>
            </div>
          </div>

          <div className="mb-10 max-w-3xl">
            <p className="text-gray-300 leading-relaxed text-base md:text-lg border-l-2 border-neon-cyan/60 pl-5">
              PING-P begins as a recognizable AI persona on social platforms and evolves toward a persistent digital entity shaped by reaction loops, meme propagation, and community interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </section>

        <section id="roadmap" className="container mx-auto px-4 py-32 relative overflow-hidden scroll-mt-24">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="text-center mb-20 relative z-10">
            <h2 className="text-5xl md:text-8xl font-black italic uppercase text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800 mb-6 tracking-tighter">
              Roadmap
            </h2>
            <div className="flex justify-center items-center gap-4">
              <div className="h-[1px] w-12 bg-neon-pink"></div>
              <p className="text-neon-cyan font-mono text-sm tracking-widest uppercase">
                Path to Persistent Digital Identity
              </p>
              <div className="h-[1px] w-12 bg-neon-pink"></div>
            </div>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto">
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

        <section id="utility" className="container mx-auto px-4 py-32 scroll-mt-24">
          <div className="clip-corner bg-zinc-900/80 backdrop-blur-sm p-1 border border-neon-cyan/30 relative">
            <div className="absolute top-0 right-0 p-4 border-l border-b border-neon-cyan bg-black/50 z-20">
              <Activity className="text-neon-cyan animate-pulse" />
            </div>

            <div className="bg-black/80 p-8 md:p-16 clip-corner relative overflow-hidden">
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
                      $PINGP is a functional utility token designed to support the agent&apos;s long-term operation and ecosystem interaction.
                      <br /><br />
                      <span className="text-white font-bold">Token:</span> <span className="font-mono text-xs text-neon-cyan">$PINGP</span><br />
                      <span className="text-white font-bold">Chain:</span> <span className="font-mono text-xs text-neon-cyan">{CHAIN}</span><br />
                      <span className="text-white font-bold">Status:</span> <span className="font-mono text-xs text-neon-cyan">{STATUS}</span>
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

        <section id="docs" className="container mx-auto px-4 py-32 scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8">
            <div className="glass-panel p-8 md:p-10 rounded-none border border-neon-pink/20">
              <div className="text-neon-pink font-mono mb-3 text-sm tracking-widest">DOCS // LINKS</div>
              <h2 className="text-4xl md:text-5xl font-black italic uppercase text-white mb-6 tracking-tight">Project Access</h2>
              <p className="text-gray-300 leading-relaxed max-w-2xl mb-8">
                The whitepaper outlines the core thesis, roadmap, token utility, and long-term direction of PING-P. Additional project access points are available below.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                <CyberButton href={WHITEPAPER_LINK}>
                  <FileText size={16} />
                  Whitepaper PDF
                </CyberButton>
                <CyberButton href={GITHUB_LINK} primary={false}>
                  <Github size={16} />
                  GitHub
                </CyberButton>
                <CyberButton href={BUY_LINK} primary={false}>
                  <BookOpen size={16} />
                  Virtuals
                </CyberButton>
              </div>
            </div>

            <div className="glass-panel p-8 md:p-10 rounded-none border border-neon-cyan/20">
              <div className="text-neon-cyan font-mono mb-3 text-sm tracking-widest">SYSTEM // INFO</div>
              <h3 className="text-3xl md:text-4xl font-black italic uppercase text-white mb-6 tracking-tight">Project Info</h3>

              <div className="space-y-4 text-sm font-mono">
                <div className="flex items-center justify-between gap-6 border-b border-white/10 pb-3">
                  <span className="text-gray-400">Agent</span>
                  <span className="text-white">PING-P</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-white/10 pb-3">
                  <span className="text-gray-400">Type</span>
                  <span className="text-white">Autonomous Meme Agent</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-white/10 pb-3">
                  <span className="text-gray-400">Token</span>
                  <span className="text-neon-pink">$PINGP</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-white/10 pb-3">
                  <span className="text-gray-400">Chain</span>
                  <span className="text-neon-cyan">{CHAIN}</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-white/10 pb-3">
                  <span className="text-gray-400">Status</span>
                  <span className="text-white">{STATUS}</span>
                </div>
                <div className="flex items-start justify-between gap-6">
                  <span className="text-gray-400 pt-1">Focus</span>
                  <span className="text-white text-right max-w-[240px]">Identity, meme propagation, long-term digital persistence</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-32 text-center relative">
          <div className="absolute inset-0 bg-gradient-to-t from-neon-pink/10 to-transparent pointer-events-none"></div>

          <h2 className="text-4xl md:text-7xl font-black uppercase text-white mb-12 italic tracking-tighter relative z-10 animate-glitch">
            Ready to live the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-white drop-shadow-[0_0_20px_rgba(255,0,127,0.5)]">Ping-P Life?</span>
          </h2>

          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-20">
            <CyberButton href={BUY_LINK} className="text-xl px-12 py-6 animate-pulse-fast shadow-[0_0_50px_rgba(255,0,127,0.4)] border-2 border-neon-cyan">
              <Flame className="inline-block mr-3" />
              Initialize $PINGP
            </CyberButton>
            <CyberButton href={WHITEPAPER_LINK} primary={false} className="text-xl px-12 py-6">
              <FileText className="inline-block mr-3" />
              Read Whitepaper
            </CyberButton>
          </div>

          <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs font-mono uppercase tracking-widest">
            <p>&copy; 2026 PING-P Protocol. All Rights Reserved.</p>
            <div className="flex flex-wrap items-center gap-5 mt-4 md:mt-0">
              <a href={GITHUB_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-neon-cyan transition-colors flex items-center gap-2"><Github size={14} /> GitHub</a>
              <a href={BUY_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-neon-cyan transition-colors flex items-center gap-2"><Globe size={14} /> Virtuals</a>
              <a href={WHITEPAPER_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-neon-cyan transition-colors flex items-center gap-2"><Cpu size={14} /> Whitepaper</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
