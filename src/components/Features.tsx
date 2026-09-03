import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Sparkles, Check, ChevronDown, Wand2, MessageSquare, RefreshCw, Zap } from 'lucide-react';
import { VesperLogo, WaveSoundIcon } from './BrandIcons';

export const Features: React.FC = () => {
  // Session Timer Counter
  const [seconds, setSeconds] = useState(0);
  const [activeTab, setActiveTab] = useState<'optimal' | 'say' | 'edge' | 'system'>('optimal');

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (totalSec: number) => {
    const m = String(Math.floor(totalSec / 60)).padStart(2, '0');
    const s = String(totalSec % 60).padStart(2, '0');
    return `${m}:${s}`;
  };

  // Sinusoidal Wave Telemetry Visualizer
  const barCount = 36;
  const [waveHeights, setWaveHeights] = useState<number[]>(() => Array(barCount).fill(20));
  const [waveOpacities, setWaveOpacities] = useState<number[]>(() => Array(barCount).fill(0.6));

  useEffect(() => {
    let phase = 0;
    const interval = setInterval(() => {
      const newHeights: number[] = [];
      const newOpacities: number[] = [];

      for (let idx = 0; idx < barCount; idx++) {
        const wave =
          Math.sin(phase + idx * 0.32) * 0.35 +
          Math.cos(phase * 0.7 + idx * 0.15) * 0.2 +
          0.5;
        const heightPercent = Math.max(12, Math.min(100, Math.floor(wave * 95)));
        newHeights.push(heightPercent);
        newOpacities.push(0.35 + wave * 0.65);
      }

      setWaveHeights(newHeights);
      setWaveOpacities(newOpacities);
      phase += 0.22;
    }, 75);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="features" className="py-24 max-w-6xl mx-auto px-4 sm:px-6 bg-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12 text-left"
      >
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200">
          <Zap className="size-3 text-blue-600" />
          Real-time interview copilot
        </span>
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#19191D] mt-2">
          How Vesper helps during a live interview
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Card 1: Vesper listens to the prompt & parses code (Blue Card) - Slides in from Left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="blue-listen-card p-6 sm:p-8 md:p-9 text-white flex flex-col justify-between min-h-[460px] relative overflow-hidden shadow-2xl hover:shadow-blue-500/20"
        >
          {/* Subtle animated light highlight */}
          <div className="absolute -top-24 -right-24 w-60 h-60 bg-white/10 rounded-full blur-2xl pointer-events-none" />

          <div>
            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight leading-snug">
              Vesper{' '}
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 text-xs sm:text-sm font-sans align-middle font-normal shadow-sm">
                <WaveSoundIcon />
                <span>listens</span>
              </span>{' '}
              to the prompt & parses code
            </h3>
            <p className="mt-3 text-sm sm:text-base text-white/90 max-w-md leading-relaxed font-sans">
              It transcribes interviewer constraints in real time, parses the AST of your code editor, and
              generates optimal solutions before you even start typing.
            </p>
          </div>

          {/* Center: 00:00 • Recording and Audio/Token Waveform */}
          <div className="my-auto py-8 text-center">
            <div className="font-sans text-5xl sm:text-6xl font-semibold tracking-tight text-white/95 tabular-nums">
              <span id="recording-counter">{formatTime(seconds)}</span>
            </div>
            <div className="flex items-center justify-center gap-2 mt-2 text-sm text-white/90 font-medium">
              <span className="size-2 rounded-full bg-emerald-300 animate-ping"></span>
              <span>Real-time AST & Audio Sync</span>
            </div>

            {/* Dynamic Audio Bars Row */}
            <div id="audio-bars-row" className="flex items-center justify-center gap-1.5 mt-8 px-4 h-12">
              {waveHeights.map((h, i) => (
                <div
                  key={i}
                  className="w-1 sm:w-1.5 rounded-full bg-white/80 transition-all duration-75 shadow-xs"
                  style={{
                    height: `${h}%`,
                    opacity: waveOpacities[i],
                    boxShadow: h > 70 ? '0 0 8px rgba(255,255,255,0.7)' : 'none',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Bottom Telemetry Bar */}
          <div className="h-14 w-full rounded-2xl bg-black/20 backdrop-blur-sm border border-white/10 flex items-center justify-between px-4 text-xs font-sans text-white/80">
            <span className="flex items-center gap-1.5">
              <Cpu className="size-3.5 text-indigo-300" />
              <span>Local Neural Synthesizer</span>
            </span>
            <span className="text-emerald-300 font-semibold font-mono flex items-center gap-1">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Active · 0.04s latency
            </span>
          </div>
        </motion.div>

        {/* Card 2: When you need help, Vesper assists instantly (Gray Bento Card) - Slides in from Right */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="gray-assist-card p-6 sm:p-8 md:p-9 text-[#19191D] flex flex-col justify-between min-h-[460px] relative overflow-hidden shadow-xl"
        >
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#19191D] leading-snug">
              When you need help,{' '}
              <span className="whitespace-nowrap">
                Vesper{' '}
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/70 backdrop-blur-xl border border-black/10 text-xs sm:text-sm font-sans align-middle text-[#19191D] font-normal">
                  <Sparkles className="size-3.5 text-blue-500" />
                  <span>assists</span>
                </span>
              </span>
              <br className="hidden sm:inline" /> you instantly
            </h3>
            <p className="mt-3 text-sm sm:text-base text-gray-500 max-w-md leading-relaxed font-sans">
              Hit Cmd/Ctrl + Enter and Vesper projects syntax-validated code, complexity proofs, and verbal
              explanations directly on your private HUD.
            </p>
          </div>

          {/* Floating Capsule Controller */}
          <div className="flex justify-center my-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full capsule-pill text-white text-xs shadow-lg border border-white/20">
              <div className="size-5 rounded-full bg-white/20 flex items-center justify-center text-white">
                <VesperLogo className="size-3.5 shrink-0 fill-current" />
              </div>
              <span className="flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded bg-white/10">
                <ChevronDown className="size-3.5 text-gray-400" />
                <span>Candidate HUD</span>
              </span>
              <span className="size-5 rounded-full bg-white/10 flex items-center justify-center">
                <span className="size-2 bg-emerald-400 rounded-xs"></span>
              </span>
            </div>
          </div>

          {/* Translucent Dark Overlay Widget */}
          <div className="cluely-dark-hud p-4 text-white shadow-2xl rounded-2xl">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-mono">
                <Check className="size-3.5 text-emerald-400" />
                <span>100% Test Cases Passed (18/18)</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-md bg-blue-600 text-white text-[10px] font-semibold flex items-center gap-1">
                <Zap className="size-2.5" />
                O(1) Time
              </span>
            </div>
            <p className="text-xs text-gray-200 leading-relaxed font-mono bg-black/40 p-2.5 rounded-lg border border-white/10">
              <span className="text-purple-300">def</span> <span className="text-blue-300">get</span>(self, key):
              <br />
              &nbsp;&nbsp;<span className="text-purple-300">if</span> key{' '}
              <span className="text-purple-300">in</span> self.cache:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;self._remove(self.cache[key])
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;self._add(self.cache[key])
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-300">return</span> self.cache[key].val
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-3 pb-2 text-[10px] text-gray-400">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab('optimal')}
                className={`flex items-center gap-1 px-2 py-0.5 rounded-md transition-colors ${activeTab === 'optimal' ? 'bg-white/20 text-white' : 'hover:bg-white/10 text-gray-300'}`}
              >
                <Sparkles className="size-3.5 text-blue-400" /> O(1) Time
              </motion.button>
              <span>·</span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab('say')}
                className={`flex items-center gap-1 px-2 py-0.5 rounded-md transition-colors ${activeTab === 'say' ? 'bg-white/20 text-white' : 'hover:bg-white/10'}`}
              >
                <Wand2 className="size-3.5 text-gray-400" /> What to say
              </motion.button>
              <span>·</span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab('edge')}
                className={`flex items-center gap-1 px-2 py-0.5 rounded-md transition-colors ${activeTab === 'edge' ? 'bg-white/20 text-white' : 'hover:bg-white/10'}`}
              >
                <MessageSquare className="size-3.5 text-gray-400" /> Edge Cases
              </motion.button>
              <span>·</span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab('system')}
                className={`flex items-center gap-1 px-2 py-0.5 rounded-md transition-colors ${activeTab === 'system' ? 'bg-white/20 text-white' : 'hover:bg-white/10'}`}
              >
                <RefreshCw className="size-3.5 text-gray-400" /> System Design
              </motion.button>
            </div>
            <div className="rounded-xl border border-white/15 bg-black/40 p-1.5 flex items-center justify-between text-[11px] text-white/60">
              <span>Ask about time complexity or ⌘ ↵ for Instant Solution</span>
              <motion.span
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className="size-5 rounded-full bg-blue-600 flex items-center justify-center text-white text-[10px] cursor-pointer"
              >
                ▶
              </motion.span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
