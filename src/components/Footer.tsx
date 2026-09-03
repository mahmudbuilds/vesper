import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AppleLogo, WindowsLogo, VesperLogo } from './BrandIcons';
import { Sparkles, ArrowRight, Zap, Check, Copy, ArrowUp, Terminal, ShieldCheck, Activity } from 'lucide-react';

export const Footer: React.FC = () => {
  const [pressedKey, setPressedKey] = useState<string | null>(null);
  const [synthesisActive, setSynthesisActive] = useState<boolean>(false);
  const [copiedCli, setCopiedCli] = useState<boolean>(false);
  const [latency, setLatency] = useState<number>(38);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: -1000, y: -1000 });

  // Dynamic live neural cluster latency variation
  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(prev => {
        const jitter = Math.floor(Math.random() * 5) - 2; // -2 to +2
        const next = prev + jitter;
        return next >= 35 && next <= 43 ? next : 38;
      });
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // Physical keyboard listener for ⌘ (Meta/Ctrl) and Enter
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Meta' || e.key === 'Control') {
        setPressedKey('cmd');
      } else if (e.key === 'Enter') {
        setPressedKey('return');
        triggerSynthesis();
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'Meta' || e.key === 'Control' || e.key === 'Enter') {
        setTimeout(() => setPressedKey(null), 250);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const triggerSynthesis = () => {
    setSynthesisActive(true);
    setTimeout(() => {
      setSynthesisActive(false);
    }, 2600);
  };

  const handleCopyCli = () => {
    navigator.clipboard.writeText('curl -fsSL https://vesper.dev/install | bash');
    setCopiedCli(true);
    setTimeout(() => setCopiedCli(false), 2400);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: -1000, y: -1000 });
  };

  return (
    <>
      {/* PRE-FOOTER CTA SECTION */}
      <section
        id="download"
        className="py-24 bg-gradient-to-b from-[#F5F8FD] via-[#EAEEF6] to-[#DDE2EE] relative overflow-hidden px-6 sm:px-12 border-t border-gray-100"
      >
        {/* Subtle Background Glow Orbs */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-300/25 rounded-full blur-3xl pointer-events-none animate-float-orb" />
        <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

        {/* Floating Sparkle Micro-Particles */}
        <div className="absolute top-12 left-1/3 pointer-events-none animate-float-sparkle hidden md:block">
          <Sparkles className="size-4 text-blue-400/60" />
        </div>
        <div className="absolute bottom-16 right-1/3 pointer-events-none animate-float-sparkle hidden md:block" style={{ animationDelay: '2s' }}>
          <Sparkles className="size-3.5 text-indigo-400/50" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10"
        >
          {/* Left text & CTA buttons */}
          <div className="max-w-xl text-left">
            <motion.span
              whileHover={{ scale: 1.03 }}
              className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/70 border border-blue-200/80 shadow-xs backdrop-blur-xs cursor-default"
            >
              <Sparkles className="size-3 text-blue-600 animate-spin" style={{ animationDuration: '4s' }} />
              Instant Desktop Install
            </motion.span>
            <h2 className="text-3xl sm:text-[38px] font-semibold text-gray-900 leading-[1.15] tracking-tight mt-2">
              Coding AI that helps during the interview, not after.
            </h2>
            <p className="mt-1.5 text-3xl sm:text-[38px] font-semibold leading-[1.15] tracking-tight gradient-text-subtle">
              Ace your next technical screen with Vesper.
            </p>

            {/* Platform Download Buttons */}
            <div className="mt-8 flex flex-col min-[460px]:flex-row flex-wrap items-stretch min-[460px]:items-center gap-3.5 w-full">
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                href="#download"
                className="cluely-black-btn text-white text-xs font-semibold px-5 py-3 rounded-xl inline-flex items-center justify-center gap-2.5 shadow-xl cursor-pointer group relative overflow-hidden w-full min-[460px]:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <AppleLogo className="size-4 shrink-0 fill-current group-hover:rotate-6 transition-transform duration-300" />
                <span>Download for macOS</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                href="#download"
                className="bg-white hover:bg-gray-50 text-gray-800 text-xs font-semibold px-5 py-3 rounded-xl inline-flex items-center justify-center gap-2.5 shadow-md border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all cursor-pointer group relative overflow-hidden w-full min-[460px]:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <WindowsLogo className="size-4 shrink-0 fill-current group-hover:rotate-6 transition-transform duration-300" />
                <span>Download for Windows</span>
              </motion.a>
            </div>

            {/* Quick CLI snippet pill */}
            <div className="mt-4 flex items-center gap-2">
              <button
                onClick={handleCopyCli}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/70 hover:bg-white border border-gray-200/80 hover:border-blue-300 text-[11px] font-mono text-gray-600 hover:text-gray-900 transition-all shadow-2xs group cursor-pointer"
                title="Click to copy curl install command"
              >
                <Terminal className="size-3 text-blue-600 shrink-0" />
                <span className="text-gray-500">$</span>
                <span className="truncate max-w-[210px] sm:max-w-none">curl -fsSL https://vesper.dev/install | bash</span>
                <span className="ml-1 pl-1.5 border-l border-gray-200 text-gray-400 group-hover:text-blue-600 transition-colors">
                  {copiedCli ? (
                    <span className="inline-flex items-center gap-1 text-emerald-600 font-semibold">
                      <Check className="size-3 text-emerald-600" /> Copied!
                    </span>
                  ) : (
                    <Copy className="size-3" />
                  )}
                </span>
              </button>
            </div>
          </div>

          {/* Right: Interactive 3D Keycaps with Real-time Feedback */}
          <div className="relative w-full max-w-sm h-60 sm:h-64 flex items-center justify-center">
            {/* Floating Shortcut Pill with Live Pulse */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute -top-4 z-30 px-2.5 sm:px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-blue-200 text-blue-700 text-[10px] sm:text-[11px] font-mono font-semibold shadow-md flex items-center gap-1.5 sm:gap-2 cursor-pointer hover:border-blue-400 hover:shadow-lg transition-all max-w-[calc(100vw-48px)]"
              onClick={() => {
                setPressedKey('return');
                triggerSynthesis();
              }}
            >
              <Zap className="size-3.5 text-blue-600 animate-pulse shrink-0" />
              <span className="truncate">⌘ + ↵ for instant synthesis</span>
              <span className="size-1.5 rounded-full bg-blue-500 animate-ping shrink-0" />
            </motion.div>

            {/* Interactive Feedback Toast on Keypress/Click */}
            <AnimatePresence>
              {synthesisActive && (
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.92 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute -bottom-5 z-40 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[11px] font-medium shadow-xl flex items-center gap-2 border border-blue-400/40 backdrop-blur-md pointer-events-none"
                >
                  <Sparkles className="size-3.5 text-yellow-300 animate-spin" style={{ animationDuration: '2s' }} />
                  <span>Neural Synthesis dispatched ({latency}ms)</span>
                  <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Command Keycap */}
            <motion.div
              animate={{
                y: pressedKey === 'cmd' ? 8 : 0,
                scale: pressedKey === 'cmd' ? 0.92 : 1,
              }}
              whileHover={{ scale: 1.08, rotate: -2, y: -4 }}
              whileTap={{ scale: 0.90, y: 8 }}
              onClick={() => {
                setPressedKey('cmd');
                triggerSynthesis();
                setTimeout(() => setPressedKey(null), 350);
              }}
              className="animate-float-1 absolute left-2 min-[400px]:left-4 size-28 min-[400px]:size-32 sm:size-36 drop-shadow-2xl cursor-pointer select-none transition-transform"
              title="Click or press Command / Ctrl"
            >
              <div className="relative w-full h-full">
                {pressedKey === 'cmd' && (
                  <div className="absolute inset-0 rounded-3xl bg-blue-500/20 blur-md pointer-events-none" />
                )}
                <img
                  src="https://cluely.com/_next/static/media/command-btn.05a11379.png"
                  alt="Command Key"
                  className="w-full h-full object-contain pointer-events-none"
                />
              </div>
            </motion.div>

            {/* Return Keycap */}
            <motion.div
              animate={{
                y: pressedKey === 'return' ? 8 : 0,
                scale: pressedKey === 'return' ? 0.92 : 1,
              }}
              whileHover={{ scale: 1.08, rotate: 4, y: -4 }}
              whileTap={{ scale: 0.90, y: 8 }}
              onClick={() => {
                setPressedKey('return');
                triggerSynthesis();
                setTimeout(() => setPressedKey(null), 350);
              }}
              className="animate-float-2 absolute right-2 min-[400px]:right-6 -top-2 size-32 min-[400px]:size-36 sm:size-40 drop-shadow-2xl cursor-pointer select-none transition-transform"
              title="Click or press Enter"
            >
              <div className="relative w-full h-full">
                {pressedKey === 'return' && (
                  <div className="absolute inset-0 rounded-3xl bg-blue-500/20 blur-md pointer-events-none" />
                )}
                <img
                  src="https://cluely.com/_next/static/media/return-active.30ff0cd8.png"
                  alt="Return Key"
                  className="w-full h-full object-contain pointer-events-none"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* MAIN FOOTER */}
      <footer
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="bg-[#DDE2EE] text-[#19191D] pt-16 pb-12 font-sans relative overflow-hidden border-t border-[#BBC5DD]"
      >
        {/* Luminous Animated Beam on Top Border */}
        <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#BBC5DD] to-transparent overflow-hidden pointer-events-none z-20">
          <div className="w-48 h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-beam-travel blur-[0.5px]" />
        </div>

        {/* Ambient Interactive Cursor Proximity Light */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-0 opacity-75"
          style={{
            background: `radial-gradient(550px circle at ${mousePos.x}px ${mousePos.y}px, rgba(37, 99, 235, 0.09), transparent 75%)`,
          }}
        />

        {/* Subtle Tech Dot Matrix Grid Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none z-0" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Top Row: Brand & Author + 4 Columns */}
          <div className="flex flex-col lg:flex-row lg:justify-between gap-12 pb-12">
            {/* Logo & Author Section */}
            <div>
              <motion.a
                whileHover={{ scale: 1.02 }}
                href="#"
                className="flex items-center gap-2.5 group w-fit"
              >
                <div className="size-7 rounded-xl bg-blue-600 group-hover:bg-blue-700 shadow-md group-hover:shadow-blue-500/25 flex items-center justify-center text-white transition-all">
                  <VesperLogo className="size-4 shrink-0 fill-current group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-xl font-bold tracking-tight text-[#19191D] group-hover:text-blue-900 transition-colors">
                  Vesper
                </span>
                <span className="text-[10px] uppercase font-mono tracking-wider font-semibold px-2 py-0.5 rounded-full bg-blue-600/10 text-blue-700 border border-blue-600/20 ml-1">
                  v2.4
                </span>
              </motion.a>
              <p className="text-xs text-gray-600 mt-2.5 max-w-xs leading-relaxed">
                The undetectable AI copilot engineered for live technical interviews, algorithmic synthesis, and
                system architecture.
              </p>

              {/* Built by Mahmud Card - World-Class Polish */}
              <motion.div
                whileHover={{ y: -3, scale: 1.01 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="mt-5 p-4 rounded-2xl bg-white/85 border border-gray-300/80 hover:border-blue-300/90 backdrop-blur-md max-w-xs shadow-sm hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 relative group overflow-hidden"
              >
                {/* Subtle Hover Shimmer Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-400/10 rounded-full blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />

                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="size-9 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-blue-500 text-white font-bold text-xs flex items-center justify-center shadow-sm">
                      M
                    </div>
                    {/* Live radar sonar ping beacon */}
                    <span className="absolute -top-0.5 -right-0.5 size-2.5 bg-emerald-500 rounded-full ring-2 ring-white" />
                    <span className="absolute -top-0.5 -right-0.5 size-2.5 bg-emerald-400 rounded-full animate-radar-ping" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-semibold text-gray-900 leading-tight">
                        Built by Mahmud
                      </span>
                      <span className="size-1.5 rounded-full bg-emerald-500" title="Active developer" />
                    </div>
                    <div className="text-[11px] text-gray-500 flex items-center gap-1">
                      <span>Creator & Systems Engineer</span>
                    </div>
                  </div>
                </div>

                <div className="mt-3.5 flex items-center gap-2">
                  <a
                    href="https://x.com/mahmudbuilds"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0f1419] hover:bg-blue-600 text-white text-[11px] font-medium transition-all shadow-xs group/btn cursor-pointer"
                  >
                    <svg className="size-3 fill-current group-hover/btn:scale-110 transition-transform" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    <span>Follow on X</span>
                    <ArrowRight className="size-2.5 opacity-60 group-hover/btn:translate-x-0.5 group-hover/btn:opacity-100 transition-all" />
                  </a>
                  <a
                    href="https://github.com/mahmudbuilds/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 text-gray-800 text-[11px] font-medium border border-gray-200 transition-all shadow-xs group/git cursor-pointer"
                    title="View GitHub Repository"
                  >
                    <svg className="size-3.5 fill-current group-hover/git:scale-110 transition-transform" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"
                      />
                    </svg>
                    <span>GitHub</span>
                  </a>
                </div>
              </motion.div>
            </div>

            {/* 4 Columns of Navigation with World-Class Hover Interactions */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 text-xs">
              {/* Product */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3.5 flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-blue-500" />
                  Product
                </h4>
                <ul className="space-y-2.5 text-gray-600">
                  <li>
                    <a href="#download" className="hover:text-blue-700 transition-colors inline-flex items-center gap-1 group">
                      <span className="group-hover:translate-x-1 transition-transform">Download</span>
                      <ArrowRight className="size-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-blue-600" />
                    </a>
                  </li>
                  <li>
                    <a href="#benchmarks" className="hover:text-blue-700 transition-colors inline-flex items-center gap-1 group">
                      <span className="group-hover:translate-x-1 transition-transform">Benchmarks</span>
                      <ArrowRight className="size-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-blue-600" />
                    </a>
                  </li>
                  <li>
                    <a href="#undetectability" className="hover:text-blue-700 transition-colors inline-flex items-center gap-1 group">
                      <span className="group-hover:translate-x-1 transition-transform">Undetectability</span>
                      <ArrowRight className="size-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-blue-600" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-700 transition-colors inline-flex items-center gap-1 group">
                      <span className="group-hover:translate-x-1 transition-transform">Changelog</span>
                      <ArrowRight className="size-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-blue-600" />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3.5 flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-indigo-500" />
                  Resources
                </h4>
                <ul className="space-y-2.5 text-gray-600">
                  <li>
                    <a href="#" className="hover:text-blue-700 transition-colors inline-flex items-center gap-1.5 group">
                      <span className="group-hover:translate-x-1 transition-transform">Language ASTs</span>
                      <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow-xs animate-badge-shimmer">
                        New
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-700 transition-colors inline-flex items-center gap-1 group">
                      <span className="group-hover:translate-x-1 transition-transform">LeetCode Guide</span>
                      <ArrowRight className="size-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-blue-600" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-700 transition-colors inline-flex items-center gap-1 group">
                      <span className="group-hover:translate-x-1 transition-transform">System Design Sheet</span>
                      <ArrowRight className="size-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-blue-600" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-700 transition-colors inline-flex items-center gap-1 group">
                      <span className="group-hover:translate-x-1 transition-transform">Security Whitepaper</span>
                      <ArrowRight className="size-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-blue-600" />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Compare */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3.5 flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-purple-500" />
                  Compare
                </h4>
                <ul className="space-y-2.5 text-gray-600">
                  <li>
                    <a href="#" className="hover:text-blue-700 transition-colors inline-flex items-center gap-1 group">
                      <span className="group-hover:translate-x-1 transition-transform">Vesper vs Copilot</span>
                      <ArrowRight className="size-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-blue-600" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-700 transition-colors inline-flex items-center gap-1 group">
                      <span className="group-hover:translate-x-1 transition-transform">Vesper vs Cursor</span>
                      <ArrowRight className="size-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-blue-600" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-700 transition-colors inline-flex items-center gap-1 group">
                      <span className="group-hover:translate-x-1 transition-transform">Vesper vs ChatGPT</span>
                      <ArrowRight className="size-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-blue-600" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-700 transition-colors inline-flex items-center gap-1 group">
                      <span className="group-hover:translate-x-1 transition-transform">Why In-Call AI Wins</span>
                      <ArrowRight className="size-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-blue-600" />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Security & Reliability */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3.5 flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-emerald-500" />
                  Security
                </h4>
                <ul className="space-y-2.5 text-gray-600">
                  <li>
                    <a href="#" className="hover:text-blue-700 transition-colors inline-flex items-center gap-1 group">
                      <span className="group-hover:translate-x-1 transition-transform">Zero-Log Policy</span>
                      <ArrowRight className="size-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-blue-600" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-700 transition-colors inline-flex items-center gap-1 group">
                      <span className="group-hover:translate-x-1 transition-transform">Memory Isolation</span>
                      <ArrowRight className="size-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-blue-600" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-700 transition-colors inline-flex items-center gap-1 group">
                      <span className="group-hover:translate-x-1 transition-transform">Display Spoofing</span>
                      <ArrowRight className="size-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-blue-600" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-700 transition-colors inline-flex items-center gap-1 group">
                      <span className="group-hover:translate-x-1 transition-transform">Privacy Terms</span>
                      <ArrowRight className="size-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-blue-600" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Middle: Live Cluster Telemetry & Quick Back to Top */}
          <div className="pt-4 pb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#BBC5DD]/60">
            {/* Real-time Telemetry Status Pill */}
            <div className="inline-flex flex-wrap items-center gap-2 sm:gap-2.5 px-3 sm:px-3.5 py-1.5 rounded-full bg-white/80 text-gray-700 text-[11px] sm:text-xs font-medium border border-gray-200/90 shadow-xs backdrop-blur-xs hover:border-emerald-300 transition-colors group cursor-default max-w-full">
              <span className="relative flex size-2 shrink-0">
                <span className="animate-radar-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full size-2 bg-emerald-500"></span>
              </span>

              {/* Real-time audio/telemetry waveform equalizer bars */}
              <div className="flex items-center gap-[2.5px] h-3 px-1 shrink-0">
                <span className="w-[2.5px] bg-emerald-500 rounded-full animate-bar-1" />
                <span className="w-[2.5px] bg-emerald-500 rounded-full animate-bar-2" />
                <span className="w-[2.5px] bg-emerald-500 rounded-full animate-bar-3" />
              </div>

              <span>Neural inference clusters operational</span>
              <span className="hidden min-[400px]:inline text-gray-400">·</span>
              <span className="font-mono text-emerald-700 font-semibold">{latency}ms avg latency</span>
            </div>

            {/* Back to Top Smooth Button */}
            <motion.button
              whileHover={{ y: -2, scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 hover:bg-white border border-gray-200/80 hover:border-blue-300 text-xs text-gray-700 hover:text-blue-700 shadow-2xs transition-all cursor-pointer group w-fit"
            >
              <span>Back to top</span>
              <div className="size-4 rounded-full bg-gray-100 group-hover:bg-blue-50 flex items-center justify-center transition-colors">
                <ArrowUp className="size-2.5 text-gray-600 group-hover:text-blue-600 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.button>
          </div>

          {/* Bottom: Copyright & Social Icons */}
          <div className="pt-6 border-t border-[#BBC5DD]/70 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-600 gap-4 relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 text-center sm:text-left">
              <p>© 2026 Vesper Technologies Inc. All rights reserved.</p>
              <span className="hidden sm:inline text-gray-400">·</span>
              <p>
                Crafted by{' '}
                <a
                  href="https://x.com/mahmudbuilds"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-gray-900 hover:text-blue-700 underline underline-offset-2 transition-colors"
                >
                  Mahmud
                </a>{' '}
                (<a
                  href="https://x.com/mahmudbuilds"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  @mahmudbuilds
                </a>)
              </p>
            </div>
            <div className="flex items-center gap-4 text-gray-700">
              <motion.a
                whileHover={{ scale: 1.15, y: -1 }}
                whileTap={{ scale: 0.95 }}
                href="https://x.com/mahmudbuilds"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors p-1"
                title="Follow Mahmud on X (@mahmudbuilds)"
              >
                <svg className="size-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, y: -1 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/mahmudbuilds/vesper"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors p-1"
                title="View Vesper on GitHub"
              >
                <svg className="size-4 fill-current" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Grand Typographic Watermark (Linear / Raycast Style) */}
        <div className="w-full select-none pointer-events-none overflow-hidden pt-8 -mb-4 sm:-mb-6 flex items-center justify-center opacity-70">
          <span className="text-[14vw] font-black tracking-widest leading-none font-sans uppercase bg-gradient-to-b from-blue-900/[0.07] via-blue-900/[0.04] to-transparent bg-clip-text text-transparent animate-watermark-glow">
            VESPER
          </span>
        </div>
      </footer>
    </>
  );
};
