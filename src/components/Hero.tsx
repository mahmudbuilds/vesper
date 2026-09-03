import React from 'react';
import { AppleLogo } from './BrandIcons';
import { HudDemo } from './HudDemo';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero-section"
      className="cluely-hero-gradient pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Headline in EB Garamond with Smooth Word Rise Animation */}
        <h1 className="font-serif text-[56px] sm:text-[76px] lg:text-[88px] font-normal leading-[0.96] tracking-[-1px] text-white max-w-3xl mx-auto drop-shadow-sm">
          <span className="inline-block overflow-hidden pb-1 align-bottom">
            <span className="inline-block animate-hero-word-rise">#1</span>
          </span>{' '}
          <span className="inline-block overflow-hidden pb-1 align-bottom">
            <span className="inline-block animate-hero-word-rise" style={{ animationDelay: '0.1s' }}>
              Undetectable
            </span>
          </span>
          <br />
          <span className="inline-block overflow-hidden pb-1 align-bottom">
            <span className="inline-block animate-hero-word-rise" style={{ animationDelay: '0.2s' }}>
              AI
            </span>
          </span>{' '}
          <span className="inline-block overflow-hidden pb-1 align-bottom">
            <span className="inline-block animate-hero-word-rise" style={{ animationDelay: '0.3s' }}>
              for
            </span>
          </span>{' '}
          <span className="inline-block overflow-hidden pb-1 align-bottom">
            <span className="inline-block animate-hero-word-rise" style={{ animationDelay: '0.4s' }}>
              Live
            </span>
          </span>{' '}
          <span className="inline-block overflow-hidden pb-1 align-bottom">
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
          <a
            href="#download"
            className="cluely-primary-btn px-6 py-2.5 rounded-xl flex items-center gap-2 text-white text-sm font-semibold shadow-xl shadow-blue-600/30 smooth-hover cursor-pointer"
          >
            <AppleLogo className="size-4 shrink-0 fill-current" />
            <span>Get Vesper for Desktop</span>
          </a>
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
