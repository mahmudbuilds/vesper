import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AppleLogo, WindowsLogo, VesperLogo } from './BrandIcons';
import { Sparkles, ArrowRight, Zap } from 'lucide-react';

export const Footer: React.FC = () => {
  const [pressedKey, setPressedKey] = useState<string | null>(null);

  return (
    <>
      {/* PRE-FOOTER CTA SECTION */}
      <section
        id="download"
        className="py-24 bg-gradient-to-b from-[#F5F8FD] via-[#EAEEF6] to-[#DDE2EE] relative overflow-hidden px-6 sm:px-12 border-t border-gray-100"
      >
        {/* Subtle Background Glow Orb */}
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10"
        >
          {/* Left text & button */}
          <div className="max-w-xl text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/60 border border-blue-200">
              <Sparkles className="size-3 text-blue-600" />
              Instant Desktop Install
            </span>
            <h2 className="text-3xl sm:text-[38px] font-semibold text-gray-900 leading-[1.15] tracking-tight mt-2">
              Coding AI that helps during the interview, not after.
            </h2>
            <p className="mt-1.5 text-3xl sm:text-[38px] font-semibold leading-[1.15] tracking-tight gradient-text-subtle">
              Ace your next technical screen with Vesper.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                href="#download"
                className="cluely-black-btn text-white text-xs font-semibold px-5 py-3 rounded-xl inline-flex items-center gap-2.5 shadow-xl cursor-pointer"
              >
                <AppleLogo className="size-4 shrink-0 fill-current" />
                <span>Download for macOS</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                href="#download"
                className="bg-white hover:bg-gray-50 text-gray-800 text-xs font-semibold px-5 py-3 rounded-xl inline-flex items-center gap-2.5 shadow-md border border-gray-200 cursor-pointer"
              >
                <WindowsLogo className="size-4 shrink-0 fill-current" />
                <span>Download for Windows</span>
              </motion.a>
            </div>
          </div>

          {/* Right: Real 3D Rendered Keycaps with Interactive Press */}
          <div className="relative w-full max-w-sm h-64 flex items-center justify-center">
            {/* Floating Shortcut Tooltip */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -top-3 z-30 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-blue-200/80 text-blue-700 text-[11px] font-mono font-semibold shadow-lg flex items-center gap-1.5"
            >
              <Zap className="size-3 text-blue-600 animate-pulse" />
              <span>⌘ + ↵ for instant synthesis</span>
            </motion.div>

            {/* Command Keycap */}
            <motion.div
              whileHover={{ scale: 1.06, rotate: -2 }}
              whileTap={{ scale: 0.92, y: 6 }}
              onClick={() => setPressedKey('cmd')}
              className="animate-float-1 absolute left-4 size-32 sm:size-36 drop-shadow-2xl cursor-pointer select-none"
              title="Click to press Command"
            >
              <img
                src="https://cluely.com/_next/static/media/command-btn.05a11379.png"
                alt="Command Key"
                className="w-full h-full object-contain pointer-events-none"
              />
            </motion.div>

            {/* Return Keycap */}
            <motion.div
              whileHover={{ scale: 1.06, rotate: 4 }}
              whileTap={{ scale: 0.92, y: 6 }}
              onClick={() => setPressedKey('return')}
              className="animate-float-2 absolute right-6 -top-2 size-36 sm:size-40 drop-shadow-2xl cursor-pointer select-none"
              title="Click to press Return"
            >
              <img
                src="https://cluely.com/_next/static/media/return-active.30ff0cd8.png"
                alt="Return Key"
                className="w-full h-full object-contain pointer-events-none"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* MAIN FOOTER */}
      <footer className="bg-[#DDE2EE] text-[#19191D] pt-16 pb-12 font-sans border-t border-[#BBC5DD]">
        <div className="max-w-6xl mx-auto px-6">
          {/* Top Row: Logo & 4 Columns */}
          <div className="flex flex-col lg:flex-row lg:justify-between gap-12 pb-12">
            {/* Logo */}
            <div>
              <a href="#" className="flex items-center gap-2">
                <div className="size-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs">
                  <VesperLogo className="size-3.5 shrink-0 fill-current" />
                </div>
                <span className="text-xl font-bold tracking-tight text-[#19191D]">Vesper</span>
              </a>
              <p className="text-xs text-gray-500 mt-2 max-w-xs">
                The undetectable AI copilot engineered for live coding, algorithmic problem solving, and
                architecture design.
              </p>
            </div>

            {/* 4 Columns of Navigation */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 text-xs">
              {/* Product */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3.5">Product</h4>
                <ul className="space-y-2.5 text-gray-600">
                  <li>
                    <a href="#download" className="hover:text-blue-700 transition-colors">
                      Download
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-700 transition-colors">
                      Benchmarks
                    </a>
                  </li>
                  <li>
                    <a href="#undetectability" className="hover:text-blue-700 transition-colors">
                      Undetectability
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-700 transition-colors">
                      Changelog
                    </a>
                  </li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3.5">Resources</h4>
                <ul className="space-y-2.5 text-gray-600">
                  <li>
                    <a href="#" className="hover:text-blue-700 transition-colors flex items-center gap-1.5">
                      <span>Language ASTs</span>
                      <span className="bg-[#2563EB] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                        New
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-700 transition-colors">
                      LeetCode Guide
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-700 transition-colors">
                      System Design Cheat Sheet
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-700 transition-colors">
                      Security Whitepaper
                    </a>
                  </li>
                </ul>
              </div>

              {/* Compare */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3.5">Compare</h4>
                <ul className="space-y-2.5 text-gray-600">
                  <li>
                    <a href="#" className="hover:text-blue-700 transition-colors">
                      Vesper vs Copilot
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-700 transition-colors">
                      Vesper vs Cursor
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-700 transition-colors">
                      Vesper vs ChatGPT
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-700 transition-colors">
                      Why In-Call AI Wins
                    </a>
                  </li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3.5">Support</h4>
                <ul className="space-y-2.5 text-gray-600">
                  <li>
                    <a href="#" className="hover:text-blue-700 transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-700 transition-colors">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-700 transition-colors">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-700 transition-colors">
                      Discord Community
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Middle: Status Pill */}
          <div className="pt-4 pb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/75 text-gray-700 text-xs font-medium border border-gray-200 shadow-xs">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse"></span>
              All neural inference clusters operational · 40ms avg response
            </div>
          </div>

          {/* Bottom: Copyright & Social Icons */}
          <div className="pt-6 border-t border-[#BBC5DD]/70 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
            <p>© 2026 Vesper Technologies Inc. All rights reserved.</p>
            <div className="flex items-center gap-5 text-gray-700">
              <a href="#" className="hover:text-black transition-colors" title="X (Twitter)">
                <svg className="size-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="hover:text-black transition-colors" title="Discord">
                <svg className="size-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>
              <a href="#" className="hover:text-black transition-colors" title="GitHub">
                <svg className="size-4 fill-current" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
