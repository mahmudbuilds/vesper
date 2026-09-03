import React from 'react';
import { motion } from 'framer-motion';
import { AppleLogo, VesperLogo } from './BrandIcons';

export const Navbar: React.FC = () => {
  return (
    <>
      {/* Pinned Top-Right "Get for Desktop" Button */}
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-3.5 right-5 z-50"
      >
        <motion.a
          whileHover={{ scale: 1.05, y: -1 }}
          whileTap={{ scale: 0.95 }}
          href="#download"
          className="cluely-primary-btn text-white text-xs font-semibold px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg shadow-blue-500/25 cursor-pointer animate-shimmer"
        >
          <AppleLogo className="size-4 shrink-0 fill-current" />
          <span>Get for macOS & Win</span>
        </motion.a>
      </motion.div>

      {/* Transparent Header Navigation with Slide Down */}
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 left-0 right-0 z-40"
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="#" className="flex items-center gap-2 text-white group">
              <div className="size-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform">
                <VesperLogo className="size-4 shrink-0 fill-current" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-sans">Vesper</span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-white/90">
              <a href="#undetectability" className="hover:text-white transition-colors relative group">
                Undetectability
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full" />
              </a>
              <a href="#features" className="hover:text-white transition-colors relative group">
                Real-time AST
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full" />
              </a>
              <a href="#benchmarks" className="hover:text-white transition-colors relative group">
                Benchmarks
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full" />
              </a>
              <a href="#faq" className="hover:text-white transition-colors relative group">
                FAQ
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full" />
              </a>
            </nav>
          </div>
        </div>
      </motion.header>
    </>
  );
};
