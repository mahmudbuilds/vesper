import React from 'react';
import { COMPATIBLE_PLATFORMS } from '../data/content';

export const Benchmarks: React.FC = () => {
  // We duplicate the list to make the CSS infinite marquee loop seamless
  const marqueeItems = [...COMPATIBLE_PLATFORMS, ...COMPATIBLE_PLATFORMS];

  return (
    <section
      id="benchmarks"
      className="py-16 max-w-6xl mx-auto px-4 text-center border-t border-gray-100 overflow-hidden"
    >
      <span className="text-xs font-semibold tracking-widest text-[#8C929D] uppercase block mb-8">
        Compatible with every interview & coding platform
      </span>
      {/* Dynamic Sliding Marquee */}
      <div className="relative overflow-hidden w-full py-3 mask-gradient">
        <div className="animate-marquee items-center gap-10 sm:gap-14">
          {marqueeItems.map((platform, idx) => (
            <div
              key={`${platform.name}-${idx}`}
              className="flex items-center gap-2 text-[#3D4150] font-medium text-sm px-4 py-2 rounded-xl bg-gray-50 border border-gray-100 shadow-xs shrink-0"
            >
              <span className={`size-2.5 rounded-full ${platform.color}`}></span>
              <span>{platform.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
