import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Sparkles, Check, ChevronDown, Wand2, MessageSquare, RefreshCw, Zap, EyeOff } from 'lucide-react';
import { VesperLogo, WaveSoundIcon } from './BrandIcons';

// Isolated Audio Wave Visualizer to prevent parent re-renders
const AudioWaveVisualizer: React.FC = () => {
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
  );
};

export const Features: React.FC = () => {
  // Session Timer Counter
  const [seconds, setSeconds] = useState(5);
  const [activeTab, setActiveTab] = useState<'optimal' | 'say' | 'edge' | 'system'>('optimal');
  const [isHudOpen, setIsHudOpen] = useState(true);
  const [customQuery, setCustomQuery] = useState('');
  const [customResponse, setCustomResponse] = useState<string | null>(null);

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

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customQuery.trim()) return;
    setCustomResponse(`Vesper Synthesis for "${customQuery}": Use two pointers with hash indexing to achieve strict O(1) amortized traversal.`);
    setCustomQuery('');
  };

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
        {/* Card 1: Vesper listens to the prompt & parses code (Blue Card) */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ y: -5 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="blue-listen-card p-6 sm:p-8 md:p-9 text-white flex flex-col justify-between min-h-[460px] relative overflow-hidden shadow-2xl hover:shadow-blue-500/30 cursor-pointer transition-shadow"
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

            {/* Dynamic Audio Bars Row (isolated) */}
            <AudioWaveVisualizer />
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

        {/* Card 2: When you need help, Vesper assists instantly (Gray Bento Card) */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ y: -5 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="gray-assist-card p-6 sm:p-8 md:p-9 text-[#19191D] flex flex-col justify-between min-h-[460px] relative overflow-hidden shadow-xl hover:shadow-2xl cursor-pointer transition-shadow"
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

          {/* Floating Capsule Controller (Clickable to toggle HUD!) */}
          <div className="flex justify-center my-4">
            <button
              onClick={() => setIsHudOpen((prev) => !prev)}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full capsule-pill text-white text-xs shadow-lg border border-white/20 hover:border-white/40 transition-all cursor-pointer group active:scale-95"
              title={isHudOpen ? "Click to collapse HUD" : "Click to expand HUD"}
            >
              <div className="size-5 rounded-full bg-white/20 flex items-center justify-center text-white">
                <VesperLogo className="size-3.5 shrink-0 fill-current" />
              </div>
              <span className="flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded bg-white/10 group-hover:bg-white/20 transition-colors">
                <ChevronDown className={`size-3.5 text-gray-300 transition-transform ${isHudOpen ? '' : 'rotate-180'}`} />
                <span>Candidate HUD</span>
              </span>
              <span className="size-5 rounded-full bg-white/10 flex items-center justify-center">
                <span className={`size-2 rounded-xs transition-colors ${isHudOpen ? 'bg-emerald-400 animate-pulse' : 'bg-zinc-400'}`}></span>
              </span>
            </button>
          </div>

          {/* Translucent Dark Overlay Widget with dynamic tab switching */}
          <AnimatePresence mode="wait">
            {isHudOpen ? (
              <motion.div
                key="hud-open"
                initial={{ opacity: 0, y: 8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="cluely-dark-hud p-4 text-white shadow-2xl rounded-2xl"
              >
                {/* Header with status badge & time complexity */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-mono">
                    <Check className="size-3.5 text-emerald-400" />
                    <span>
                      {activeTab === 'optimal' && '100% Test Cases Passed (18/18)'}
                      {activeTab === 'say' && 'Verbal Pitch Formulation'}
                      {activeTab === 'edge' && 'Critical Edge Case Guardrails'}
                      {activeTab === 'system' && 'High-Scale Distributed Cache'}
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-md bg-blue-600 text-white text-[10px] font-semibold flex items-center gap-1">
                    <Zap className="size-2.5" />
                    {activeTab === 'optimal' && 'O(1) Time'}
                    {activeTab === 'say' && 'Concise Speech'}
                    {activeTab === 'edge' && '4 Cases'}
                    {activeTab === 'system' && 'Arch Scale'}
                  </span>
                </div>

                {/* Dynamic Content Pane based on activeTab */}
                <div className="text-xs text-gray-200 leading-relaxed font-mono bg-black/40 p-2.5 rounded-lg border border-white/10 min-h-[90px] overflow-hidden">
                  {customResponse ? (
                    <div className="text-blue-200 font-sans text-[11px] leading-snug">
                      <span className="text-amber-300 font-mono text-[10px] block mb-1">⚡ Instant Synthesis:</span>
                      {customResponse}
                    </div>
                  ) : activeTab === 'optimal' ? (
                    <p>
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
                  ) : activeTab === 'say' ? (
                    <p className="font-sans text-[11px] text-zinc-200 italic">
                      "I'll implement an LRU Cache with O(1) get and put. Standard lists require O(n) eviction searches, so I'll pair a hash map with a doubly linked list using sentinel head and tail nodes to eliminate edge cases."
                    </p>
                  ) : activeTab === 'edge' ? (
                    <div className="font-sans text-[10px] text-zinc-300 space-y-1">
                      <div>• <span className="text-emerald-300">Capacity = 1:</span> Evict oldest entry immediately on next insert.</div>
                      <div>• <span className="text-emerald-300">Key Update:</span> Overwrite value & bump node recency without size increment.</div>
                      <div>• <span className="text-emerald-300">Sentinel Safety:</span> Protect dummy head & tail from deletion.</div>
                    </div>
                  ) : (
                    <div className="font-sans text-[10px] text-zinc-300 space-y-1">
                      <div>• <span className="text-cyan-300">Consistent Hashing:</span> Shard across Redis nodes with virtual partitions.</div>
                      <div>• <span className="text-cyan-300">Bloom Filter:</span> Reject non-existent keys upfront to prevent cache stampedes.</div>
                      <div>• <span className="text-cyan-300">Eviction Policy:</span> Volatile-LRU with async write-back persistence.</div>
                    </div>
                  )}
                </div>

                {/* Interactive scenario filter pills */}
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-3 pb-2 text-[10px] text-gray-400">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveTab('optimal');
                      setCustomResponse(null);
                    }}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                      activeTab === 'optimal' && !customResponse
                        ? 'bg-blue-600/40 text-blue-200 border border-blue-400/40 font-semibold'
                        : 'bg-white/10 hover:bg-white/20 text-gray-300'
                    }`}
                  >
                    <Sparkles className="size-3.5 text-blue-400" />
                    <span>O(1) Time</span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveTab('say');
                      setCustomResponse(null);
                    }}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                      activeTab === 'say' && !customResponse
                        ? 'bg-blue-600/40 text-blue-200 border border-blue-400/40 font-semibold'
                        : 'bg-white/10 hover:bg-white/20 text-gray-300'
                    }`}
                  >
                    <Wand2 className="size-3.5 text-amber-300" />
                    <span>What to say</span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveTab('edge');
                      setCustomResponse(null);
                    }}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                      activeTab === 'edge' && !customResponse
                        ? 'bg-blue-600/40 text-blue-200 border border-blue-400/40 font-semibold'
                        : 'bg-white/10 hover:bg-white/20 text-gray-300'
                    }`}
                  >
                    <MessageSquare className="size-3.5 text-emerald-400" />
                    <span>Edge Cases</span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveTab('system');
                      setCustomResponse(null);
                    }}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                      activeTab === 'system' && !customResponse
                        ? 'bg-blue-600/40 text-blue-200 border border-blue-400/40 font-semibold'
                        : 'bg-white/10 hover:bg-white/20 text-gray-300'
                    }`}
                  >
                    <RefreshCw className="size-3.5 text-cyan-400" />
                    <span>System Design</span>
                  </motion.button>
                </div>

                {/* Functional Search Query Form */}
                <form
                  onSubmit={handleSearchSubmit}
                  className="rounded-xl border border-white/15 bg-black/40 p-1.5 flex items-center justify-between text-[11px] text-white/60 gap-2"
                >
                  <input
                    type="text"
                    value={customQuery}
                    onChange={(e) => setCustomQuery(e.target.value)}
                    placeholder="Ask about time complexity or ⌘↵ for Instant Solution"
                    className="w-full bg-transparent px-1.5 text-[11px] text-white placeholder-zinc-500 outline-none font-sans"
                  />
                  <motion.button
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.9 }}
                    type="submit"
                    aria-label="Submit Query"
                    className="size-6 rounded-full bg-blue-600 hover:bg-blue-500 active:bg-blue-700 flex items-center justify-center text-white text-[10px] shrink-0 cursor-pointer shadow-md shadow-blue-500/40 transition-colors"
                  >
                    ▶
                  </motion.button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="hud-closed"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="p-4 rounded-2xl bg-black/30 border border-white/10 text-center text-zinc-400 text-xs"
              >
                <div className="flex items-center justify-center gap-2 text-zinc-300">
                  <EyeOff className="size-4 text-zinc-400" />
                  <span>Candidate HUD Minimized</span>
                </div>
                <button
                  onClick={() => setIsHudOpen(true)}
                  className="mt-2 text-[11px] text-blue-400 hover:text-blue-300 font-medium underline cursor-pointer"
                >
                  Click to re-open HUD
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
