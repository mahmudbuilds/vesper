import React from 'react';
import { motion } from 'framer-motion';
import { AppleLogo } from './BrandIcons';
import { HudDemo } from './HudDemo';
import { Zap, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero-section"
      className="cluely-hero-gradient pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden relative"
    >
      {/* Background Animated Ambient Light Orbs */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[720px] h-[340px] bg-blue-400/25 rounded-full blur-[110px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-36 left-1/4 w-[420px] h-[220px] bg-sky-300/20 rounded-full blur-[90px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Floating Announcement Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-white text-xs font-medium mb-6 shadow-lg shadow-blue-900/10"
        >
          <span className="size-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span>Undetectable in Zoom, Meet, Teams & Tuple</span>
          <span className="text-white/40">|</span>
          <span className="text-blue-100 font-mono text-[11px] flex items-center gap-1">
            GPU Compositor v4.2 <ArrowRight className="size-3" />
          </span>
        </motion.div>

       

        {/* Headline in EB Garamond with Smooth Word Rise Animation */}
        <h1 className="font-serif text-[56px] sm:text-[76px] lg:text-[88px] font-normal leading-[0.96] tracking-[-1px] text-white max-w-3xl mx-auto drop-shadow-sm">
          <span className="inline-block overflow-hidden pb-3 sm:pb-4 lg:pb-5 -mb-3 sm:-mb-4 lg:-mb-5 align-bottom">
            <span className="inline-block animate-hero-word-rise">#1</span>
          </span>{' '}
          <span className="inline-block overflow-hidden pb-3 sm:pb-4 lg:pb-5 -mb-3 sm:-mb-4 lg:-mb-5 align-bottom">
            <span className="inline-block animate-hero-word-rise" style={{ animationDelay: '0.1s' }}>
              Undetectable
            </span>
          </span>
          <br />
          <span className="inline-block overflow-hidden pb-3 sm:pb-4 lg:pb-5 -mb-3 sm:-mb-4 lg:-mb-5 align-bottom">
            <span className="inline-block animate-hero-word-rise" style={{ animationDelay: '0.2s' }}>
              AI
            </span>
          </span>{' '}
          <span className="inline-block overflow-hidden pb-3 sm:pb-4 lg:pb-5 -mb-3 sm:-mb-4 lg:-mb-5 align-bottom">
            <span className="inline-block animate-hero-word-rise" style={{ animationDelay: '0.3s' }}>
              for
            </span>
          </span>{' '}
          <span className="inline-block overflow-hidden pb-3 sm:pb-4 lg:pb-5 -mb-3 sm:-mb-4 lg:-mb-5 align-bottom">
            <span className="inline-block animate-hero-word-rise" style={{ animationDelay: '0.4s' }}>
              Live
            </span>
          </span>{' '}
          <span className="inline-block overflow-hidden pb-3 sm:pb-4 lg:pb-5 -mb-3 sm:-mb-4 lg:-mb-5 align-bottom">
            <span className="inline-block animate-hero-word-rise" style={{ animationDelay: '0.5s' }}>
              Coding
            </span>
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-base sm:text-lg text-white/95 max-w-xl mx-auto mt-4 font-normal leading-snug drop-shadow-sm animate-hero-fade-up"
          style={{ animationDelay: '0.6s' }}
        >
          Vesper writes optimal algorithms, analyzes time complexities, and solves system design questions in
          real time—completely undetectable during live technical interviews.
        </p>

        {/* Central Hero CTA Buttons */}
        <div
          className="mt-6 flex items-center justify-center gap-3 animate-hero-fade-up"
          style={{ animationDelay: '0.7s' }}
        >
          <motion.a
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            href="#download"
            className="cluely-primary-btn px-6 py-2.5 rounded-xl flex items-center gap-2 text-white text-sm font-semibold shadow-xl shadow-blue-600/30 cursor-pointer animate-shimmer"
          >
            <AppleLogo className="size-4 shrink-0 fill-current" />
            <span>Get Vesper for Desktop</span>
          </motion.a>
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-medium shadow-sm">
            <span className="size-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Zero-latency AST engine</span>
          </div>
        </div>

        {/* Authentic Coding Interview Desktop Display */}
        <HudDemo />
      </div>
    </section>
  );
};
