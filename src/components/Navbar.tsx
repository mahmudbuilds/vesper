import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AppleLogo, VesperLogo } from './BrandIcons';
import { Menu, X, ArrowRight, ShieldCheck, Zap, Layers, HelpCircle } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Undetectability', href: '#undetectability', icon: ShieldCheck },
    { label: 'Real-time AST', href: '#features', icon: Zap },
    { label: 'Benchmarks', href: '#benchmarks', icon: Layers },
    { label: 'FAQ', href: '#faq', icon: HelpCircle },
  ];

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* Pinned Top-Right "Get for Desktop" Button */}
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-3 right-3 sm:top-3.5 sm:right-5 z-50 flex items-center gap-2"
      >
        <motion.a
          whileHover={{ scale: 1.05, y: -1 }}
          whileTap={{ scale: 0.95 }}
          href="#download"
          className="cluely-primary-btn text-white text-xs font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl flex items-center gap-1.5 sm:gap-2 shadow-lg shadow-blue-500/25 cursor-pointer animate-shimmer"
        >
          <AppleLogo className="size-3.5 sm:size-4 shrink-0 fill-current" />
          <span className="hidden min-[480px]:inline">Get for macOS & Win</span>
          <span className="min-[480px]:hidden">Get App</span>
        </motion.a>

        {/* Mobile Menu Toggle Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="md:hidden size-8 sm:size-9 rounded-xl bg-white/20 backdrop-blur-md border border-white/25 text-white flex items-center justify-center shadow-md cursor-pointer hover:bg-white/30 transition-colors"
          aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {isMobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
        </motion.button>
      </motion.div>

      {/* Transparent Header Navigation with Slide Down */}
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 left-0 right-0 z-40"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
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
              <a
                href="https://github.com/mahmudbuilds/vesper"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors relative group flex items-center gap-1.5 opacity-90 hover:opacity-100"
              >
                <span>GitHub</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/20 font-mono">★</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full" />
              </a>
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Drawer / Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-3 top-16 z-50 rounded-2xl bg-[#141824]/95 backdrop-blur-2xl border border-white/20 shadow-2xl p-4 md:hidden text-white"
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="size-6 rounded-full bg-blue-600 flex items-center justify-center">
                  <VesperLogo className="size-3.5 fill-white" />
                </div>
                <span className="font-semibold text-sm">Navigation</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono">
                v2.4 Active
              </span>
            </div>

            <div className="space-y-1">
              {navLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={closeMenu}
                    className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-white/10 text-sm font-medium text-zinc-200 hover:text-white transition-colors"
                  >
                    <span className="flex items-center gap-2.5">
                      <Icon className="size-4 text-blue-400" />
                      <span>{item.label}</span>
                    </span>
                    <ArrowRight className="size-3.5 text-zinc-500" />
                  </a>
                );
              })}

              <a
                href="https://github.com/mahmudbuilds/vesper"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-white/10 text-sm font-medium text-zinc-200 hover:text-white transition-colors"
              >
                <span className="flex items-center gap-2.5">
                  <span className="font-mono text-xs text-amber-400">★</span>
                  <span>GitHub Repository</span>
                </span>
                <ArrowRight className="size-3.5 text-zinc-500" />
              </a>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10">
              <a
                href="#download"
                onClick={closeMenu}
                className="w-full py-2.5 rounded-xl cluely-primary-btn text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-lg"
              >
                <AppleLogo className="size-3.5 fill-current" />
                <span>Download Vesper for Desktop</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

