import React from 'react';
import { motion } from 'framer-motion';
import { COMPATIBLE_PLATFORMS } from '../data/content';
import { Layers } from 'lucide-react';

const SUPPORTED_LANGUAGES = [
  { name: 'Python 3.14 AST', color: 'bg-yellow-400' },
  { name: 'C++ 26', color: 'bg-blue-600' },
  { name: 'Go 1.27', color: 'bg-cyan-400' },
  { name: 'TypeScript 7.0', color: 'bg-amber-400' },
  { name: 'Rust 1.98', color: 'bg-orange-600' },
  { name: 'Java 26', color: 'bg-red-500' },
  { name: 'C# 14 / .NET 10', color: 'bg-purple-600' },
  { name: 'PostgreSQL 18', color: 'bg-sky-600' },
];

export const Benchmarks: React.FC = () => {
  const marqueeItems = [...COMPATIBLE_PLATFORMS, ...COMPATIBLE_PLATFORMS, ...COMPATIBLE_PLATFORMS];
  const languageItems = [...SUPPORTED_LANGUAGES, ...SUPPORTED_LANGUAGES, ...SUPPORTED_LANGUAGES];

  return (
    <section
      id="benchmarks"
      className="py-20 max-w-6xl mx-auto px-4 text-center border-t border-gray-100 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="text-xs font-bold tracking-widest text-[#497EE9] uppercase inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 mb-3">
          <Layers className="size-3 text-[#497EE9]" />
          Universal Runtime Compatibility
        </span>
        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8">
          Compatible with every interview platform & language
        </h3>
      </motion.div>

      {/* Row 1: Platforms (Moving Left) */}
      <div className="relative overflow-hidden w-full py-2">
        <div className="animate-marquee items-center gap-4 sm:gap-6">
          {marqueeItems.map((platform, idx) => (
            <motion.div
              whileHover={{ scale: 1.08, y: -2 }}
              key={`${platform.name}-${idx}`}
              className="flex items-center gap-2 text-[#3D4150] font-medium text-xs sm:text-sm px-4 py-2 rounded-xl bg-gray-50 hover:bg-white border border-gray-200/80 shadow-xs shrink-0 cursor-pointer transition-colors"
            >
              <span className={`size-2.5 rounded-full ${platform.color} shadow-xs`}></span>
              <span>{platform.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Row 2: Languages & ASTs (Moving Right) */}
      <div className="relative overflow-hidden w-full py-2 mt-2">
        <div className="animate-marquee-reverse items-center gap-4 sm:gap-6">
          {languageItems.map((lang, idx) => (
            <motion.div
              whileHover={{ scale: 1.08, y: -2 }}
              key={`${lang.name}-${idx}`}
              className="flex items-center gap-2 text-[#475569] font-mono text-xs px-3.5 py-1.5 rounded-xl bg-slate-50 hover:bg-white border border-slate-200/70 shadow-xs shrink-0 cursor-pointer transition-colors"
            >
              <span className={`size-2 rounded-full ${lang.color}`}></span>
              <span>{lang.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
