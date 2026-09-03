import React from 'react';
import { AppleLogo, VesperLogo } from './BrandIcons';

export const Navbar: React.FC = () => {
  return (
    <>
      {/* Pinned Top-Right "Get for Desktop" Button */}
      <div className="fixed top-3.5 right-5 z-50">
        <a
          href="#download"
          className="cluely-primary-btn text-white text-xs font-semibold px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg shadow-blue-500/25 cursor-pointer smooth-hover"
        >
          <AppleLogo className="size-4 shrink-0 fill-current" />
          <span>Get for macOS & Win</span>
        </a>
      </div>

      {/* Transparent Header Navigation */}
      <header className="absolute top-0 left-0 right-0 z-40">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="#" className="flex items-center gap-2 text-white group">
              <div className="size-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
                <VesperLogo className="size-4 shrink-0 fill-current" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-sans">Vesper</span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-white/90">
              <a href="#undetectability" className="hover:text-white transition-colors">
                Undetectability
              </a>
              <a href="#features" className="hover:text-white transition-colors">
                Real-time AST
              </a>
              <a href="#benchmarks" className="hover:text-white transition-colors">
                Benchmarks
              </a>
              <a href="#faq" className="hover:text-white transition-colors">
                FAQ
              </a>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};
