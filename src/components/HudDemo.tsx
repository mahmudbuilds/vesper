import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  Code,
  ChevronDown,
  ChevronUp,
  Zap,
  Sparkles,
  Wand2,
  MessageSquare,
  RefreshCw,
  Eye,
  EyeOff,
  X,
  Minus,
  Maximize2,
} from 'lucide-react';
import { VesperLogo } from './BrandIcons';
import { SCENARIOS, SCENARIO_CHIPS } from '../data/content';

export const HudDemo: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState<string>('optimal');
  const [displayedText, setDisplayedText] = useState<string>('');
  const [customInput, setCustomInput] = useState<string>('');
  const [isBoxVisible, setIsBoxVisible] = useState<boolean>(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Keyboard shortcut: Esc or Cmd+H / Ctrl+H to toggle communication box
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsBoxVisible((prev) => !prev);
      } else if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'h') {
        e.preventDefault();
        setIsBoxVisible((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Parallax Tilt using Framer Motion Springs
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [3.5, -3.5]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-3.5, 3.5]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Streaming Typewriter Text Engine with Human Punctuation Delays
  const streamText = (fullText: string) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setDisplayedText('');
    let index = 0;

    const typeChar = () => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        const char = fullText[index];
        index++;

        let delay = Math.floor(Math.random() * 8) + 14;
        if (char === '.' || char === '?') delay = 140;
        else if (char === ',' || char === ':') delay = 65;

        timerRef.current = setTimeout(typeChar, delay);
      }
    };
    typeChar();
  };

  useEffect(() => {
    if (SCENARIOS[activeScenario]) {
      streamText(SCENARIOS[activeScenario]);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [activeScenario]);

  const handleCustomSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const query = customInput.trim();
    if (!query) return;
    setActiveScenario('custom');
    streamText(
      `"Analyzing: '${query}'. Vesper Recommendation: Use two-pointer traversal to prune branches in O(1) space, avoiding hash map overhead."`
    );
    setCustomInput('');
  };

  const getChipIcon = (iconName: string) => {
    switch (iconName) {
      case 'sparkles':
        return <Sparkles className="size-3.5 shrink-0 text-blue-400" />;
      case 'wand':
        return <Wand2 className="size-3.5 shrink-0 text-gray-400" />;
      case 'messageSquare':
        return <MessageSquare className="size-3.5 shrink-0 text-gray-400" />;
      case 'refresh':
        return <RefreshCw className="size-3.5 shrink-0 text-gray-400" />;
      default:
        return <Sparkles className="size-3.5 shrink-0 text-blue-400" />;
    }
  };

  return (
    <div
      className="perspective-container mt-12 max-w-5xl mx-auto"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        id="tilt-card"
        className="tilt-element relative rounded-2xl shadow-2xl overflow-hidden border border-white/40 bg-[#121318]"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Subtle Glow Backdrop */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 via-transparent to-indigo-900/20 pointer-events-none"></div>

        {/* Desktop Inner Screen Canvas */}
        <div className="relative w-full aspect-[1.7] flex flex-col justify-between p-2 sm:p-3 select-none">
          {/* Top macOS Menu Bar */}
          <div className="flex items-center justify-between px-3 py-1 rounded-lg bg-black/40 text-white text-[11px] font-sans backdrop-blur-md border border-white/10">
            <div className="flex items-center gap-2">
              <span className="font-bold text-xs"></span>
              <span className="font-semibold text-[10px]">Vesper Studio</span>
              <span className="text-white/40">|</span>
              <span className="text-[10px] text-zinc-300 font-mono">LeetCode #146: LRU Cache (Hard)</span>
            </div>
            <div className="flex items-center gap-3 text-[10px] opacity-90">
              <span className="text-emerald-400 font-mono text-[10px]">● GPU Compositor 120 FPS</span>
              <span>WiFi</span>
              <span>100%</span>
              <span>Tue 10:42 AM</span>
            </div>
          </div>

          {/* Authentic Live Coding Environment */}
          <div className="relative flex-1 flex items-center justify-center my-1">
            {/* Code Editor Window */}
            <div className="w-full h-[95%] rounded-xl bg-[#181A20] border border-white/10 shadow-2xl p-3 sm:p-4 font-mono text-[11px] sm:text-xs text-left overflow-hidden flex flex-col">
              {/* Editor Tab Bar */}
              <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-2.5">
                <div className="flex items-center gap-2">
                  <span className="size-2.5 rounded-full bg-red-500/80"></span>
                  <span className="size-2.5 rounded-full bg-yellow-500/80"></span>
                  <span className="size-2.5 rounded-full bg-green-500/80"></span>
                  <span className="ml-2 px-2 py-0.5 rounded bg-white/10 text-[10px] text-blue-300 font-sans font-medium flex items-center gap-1">
                    <Code className="size-3.5 text-cyan-400" />
                    solution.py
                  </span>
                </div>
                <div className="text-[10px] text-zinc-400 font-sans">
                  Python 3.12 · CoderPad Live Session
                </div>
              </div>

              {/* Code Lines */}
              <div className="space-y-1 text-zinc-300 overflow-hidden font-mono text-[11px] leading-relaxed select-text">
                <div>
                  <span className="text-zinc-500">01</span> <span className="text-purple-400">class</span>{' '}
                  <span className="text-yellow-300">Node</span>:
                </div>
                <div>
                  <span className="text-zinc-500">02</span> &nbsp;&nbsp;<span className="text-purple-400">def</span>{' '}
                  <span className="text-blue-400">__init__</span>(self, key:{' '}
                  <span className="text-emerald-300">int</span>, val: <span className="text-emerald-300">int</span>):
                </div>
                <div>
                  <span className="text-zinc-500">03</span> &nbsp;&nbsp;&nbsp;&nbsp;self.key, self.val = key, val
                </div>
                <div>
                  <span className="text-zinc-500">04</span> &nbsp;&nbsp;&nbsp;&nbsp;self.prev, self.next ={' '}
                  <span className="text-red-300">None</span>, <span className="text-red-300">None</span>
                </div>
                <div>
                  <span className="text-zinc-500">05</span>
                </div>
                <div>
                  <span className="text-zinc-500">06</span> <span className="text-purple-400">class</span>{' '}
                  <span className="text-yellow-300">LRUCache</span>:
                </div>
                <div>
                  <span className="text-zinc-500">07</span> &nbsp;&nbsp;<span className="text-purple-400">def</span>{' '}
                  <span className="text-blue-400">__init__</span>(self, capacity:{' '}
                  <span className="text-emerald-300">int</span>):
                </div>
                <div>
                  <span className="text-zinc-500">08</span> &nbsp;&nbsp;&nbsp;&nbsp;self.cap = capacity
                </div>
                <div>
                  <span className="text-zinc-500">09</span> &nbsp;&nbsp;&nbsp;&nbsp;self.cache = {}{' '}
                  <span className="text-zinc-500"># key -&gt; Node (O(1) lookups)</span>
                </div>
                <div>
                  <span className="text-zinc-500">10</span> &nbsp;&nbsp;&nbsp;&nbsp;self.head, self.tail = Node(0, 0), Node(0, 0)
                </div>
                <div>
                  <span className="text-zinc-500">11</span> &nbsp;&nbsp;&nbsp;&nbsp;self.head.next, self.tail.prev = self.tail, self.head
                </div>
              </div>
            </div>

            {/* Floating Top Capsule Controller [ ✦ Vesper v Hide / Show ■ ] */}
            <div className="absolute top-2 inset-x-0 mx-auto w-fit z-30 flex items-center gap-2 px-3 py-1.5 rounded-full capsule-pill text-white text-xs shadow-2xl border border-white/20 backdrop-blur-md">
              <button
                onClick={() => setIsBoxVisible((prev) => !prev)}
                className="size-6 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-all cursor-pointer"
                title={isBoxVisible ? "Click to hide assistant" : "Click to show assistant"}
              >
                <VesperLogo className="size-4 shrink-0 fill-current" />
              </button>
              <button
                onClick={() => setIsBoxVisible((prev) => !prev)}
                className={`flex items-center gap-1.5 font-medium text-[11px] px-2.5 py-0.5 rounded-full transition-all cursor-pointer ${
                  isBoxVisible
                    ? 'hover:text-white bg-white/10 hover:bg-white/20 text-white/90'
                    : 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/40 ring-2 ring-blue-400/50 animate-pulse'
                }`}
                title={isBoxVisible ? 'Hide Vesper communication box (Esc or ⌘H)' : 'Show Vesper communication box (Esc or ⌘H)'}
              >
                {isBoxVisible ? (
                  <>
                    <EyeOff className="size-3 text-zinc-300" />
                    <span>Hide</span>
                    <span className="text-[9px] text-zinc-400 font-mono hidden sm:inline">Esc</span>
                  </>
                ) : (
                  <>
                    <Eye className="size-3 text-white" />
                    <span>Show Assistant</span>
                    <span className="text-[9px] text-blue-200 font-mono hidden sm:inline">⌘H</span>
                  </>
                )}
              </button>
              <button
                onClick={() => setIsBoxVisible((prev) => !prev)}
                className="size-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer transition-colors"
                title="Toggle overlay"
              >
                <span className={`size-2 rounded-xs transition-colors ${isBoxVisible ? 'bg-white' : 'bg-emerald-400'}`}></span>
              </button>
            </div>

            {/* In-Editor Stealth Mode Indicator when communication box is hidden */}
            <AnimatePresence>
              {!isBoxVisible && (
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.92 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 15, scale: 0.92 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className="absolute inset-x-6 top-16 mx-auto max-w-md z-20"
                >
                  <div className="rounded-xl bg-black/85 backdrop-blur-xl border border-emerald-500/30 p-3 text-white shadow-2xl flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-left">
                      <span className="size-2 rounded-full bg-emerald-400 animate-ping"></span>
                      <div>
                        <div className="text-[11px] font-semibold text-emerald-300 flex items-center gap-1.5">
                          <span>Stealth Mode Active</span>
                          <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 font-mono">100% Hidden</span>
                        </div>
                        <p className="text-[10px] text-zinc-400">Communication HUD is hidden from view & recording</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsBoxVisible(true)}
                      className="px-2.5 py-1 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-semibold flex items-center gap-1 shrink-0 transition-all cursor-pointer shadow-md shadow-blue-500/30 active:scale-95"
                    >
                      <Sparkles className="size-3 text-yellow-300" />
                      <span>Show Box</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Floating Vesper Assistant Window Overlay (Private to Candidate) */}
            <AnimatePresence>
              {isBoxVisible && (
                <motion.div
                  key="vesper-comm-hud"
                  initial={{ opacity: 0, y: -20, scale: 0.95, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -25, scale: 0.92, filter: 'blur(10px)', transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] } }}
                  transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                  className="absolute inset-x-4 sm:inset-x-12 top-9 sm:top-12 mx-auto max-w-lg cluely-dark-hud p-4 text-white z-20 shadow-2xl border border-white/20"
                >
                  {/* Window Title & Quick Actions Header */}
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-[10px] text-zinc-400 font-sans">
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => setIsBoxVisible(false)}
                        className="size-2 rounded-full bg-red-500/90 hover:opacity-80 transition-opacity cursor-pointer"
                        title="Close / Hide HUD (Esc)"
                      />
                      <button
                        onClick={() => setIsBoxVisible(false)}
                        className="size-2 rounded-full bg-yellow-500/90 hover:opacity-80 transition-opacity cursor-pointer"
                        title="Minimize HUD"
                      />
                      <span className="size-2 rounded-full bg-green-500/90" />
                      <span className="ml-1 text-zinc-300 font-medium flex items-center gap-1">
                        <Sparkles className="size-3 text-blue-400" />
                        Vesper Synthesis HUD
                      </span>
                    </div>

                    <button
                      onClick={() => setIsBoxVisible(false)}
                      className="flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-md bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white transition-all cursor-pointer"
                      title="Hide communication box"
                    >
                      <EyeOff className="size-3 text-zinc-400" />
                      <span>Hide (Esc)</span>
                    </button>
                  </div>

                  {/* Candidate Trigger Bubble (Right aligned in Blue) */}
                  <div className="flex justify-end mb-2.5">
                    <motion.span
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="inline-flex items-center gap-1.5 text-[11px] font-sans bg-gradient-to-r from-[#0544a9] to-[#022c70] text-blue-100 px-3 py-1 rounded-xl rounded-br-sm shadow-md font-medium border border-blue-400/20"
                    >
                      <Zap className="size-3 text-white/70" />
                      <span>Optimal O(1) Solution?</span>
                    </motion.span>
                  </div>

                  {/* AI Streaming Answer with Realistic Micro-Typing */}
                  <div className="text-xs font-sans text-gray-100 leading-relaxed min-h-[55px] p-2.5 bg-black/40 rounded-xl border border-white/10 cluely-scrollbar overflow-y-auto max-h-24">
                    <span id="streaming-text" className="text-zinc-100">{displayedText}</span>
                    <span id="cursor" className="inline-block w-1 h-3 bg-blue-400 ml-0.5 animate-pulse"></span>
                  </div>

                  {/* Interactive Chips Bar */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-2.5 pb-2 text-[10px] text-gray-300">
                    {SCENARIO_CHIPS.map((chip, idx) => (
                      <React.Fragment key={chip.id}>
                        {idx > 0 && (
                          <span className={chip.hiddenOnMobile ? 'hidden sm:inline' : ''}>·</span>
                        )}
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setActiveScenario(chip.id)}
                          className={`scenario-chip flex items-center gap-1 px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                            chip.hiddenOnMobile ? 'hidden sm:flex' : ''
                          } ${
                            activeScenario === chip.id
                              ? 'chip-active bg-white/20 text-white shadow-xs border border-white/30'
                              : 'bg-white/10 hover:bg-white/20'
                          }`}
                        >
                          {getChipIcon(chip.icon)}
                          <span>{chip.label}</span>
                        </motion.button>
                      </React.Fragment>
                    ))}
                  </div>

                  {/* Input Bar with "Ask about code or ⌘ ↵ for Instant Synthesis" */}
                  <form onSubmit={handleCustomSubmit} className="relative rounded-xl border border-white/15 bg-black/50 p-1.5 flex items-center gap-2">
                    <input
                      id="hud-input"
                      type="text"
                      value={customInput}
                      onChange={(e) => setCustomInput(e.target.value)}
                      placeholder="Ask about algorithm, complexity, or ⌘ ↵ for Instant Solution"
                      className="w-full bg-transparent px-2.5 text-[11px] font-sans text-white placeholder-white/50 outline-none"
                    />
                    <div className="px-2 py-0.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-[10px] text-blue-300 flex items-center gap-1 shrink-0 font-mono">
                      <Zap className="size-3 text-white/70" />
                      <span>AST Active</span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      id="hud-submit"
                      type="submit"
                      className="size-6 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0 hover:bg-blue-500 transition-colors cursor-pointer shadow-md"
                    >
                      <svg className="size-3 fill-current ml-0.5" viewBox="0 0 24 24">
                        <path d="M2.5 1.5L10.5 6L2.5 10.5V1.5Z" />
                      </svg>
                    </motion.button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* macOS Developer Dock */}
          <div className="mx-auto w-fit flex items-center gap-2.5 px-3 py-1 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl">
            <motion.div
              whileHover={{ y: -6, scale: 1.18 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="size-7 sm:size-8 rounded-lg bg-gray-900 border border-white/20 flex items-center justify-center text-green-400 font-mono text-[10px] shadow-sm cursor-pointer"
            >
              &gt;_
            </motion.div>
            <motion.div
              whileHover={{ y: -6, scale: 1.18 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="size-7 sm:size-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xs shadow-sm cursor-pointer"
            >
              <Code className="size-3.5 text-white" />
            </motion.div>
            <motion.div
              whileHover={{ y: -6, scale: 1.18 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="size-7 sm:size-8 rounded-lg bg-gradient-to-tr from-amber-500 to-orange-400 flex items-center justify-center text-white text-xs font-bold shadow-sm cursor-pointer"
            >
              🌐
            </motion.div>
            <motion.div
              whileHover={{ y: -6, scale: 1.25 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => setIsBoxVisible((prev) => !prev)}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className={`size-7 sm:size-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg ring-2 hover:scale-110 cursor-pointer relative ${
                isBoxVisible ? 'ring-white/80 animate-glow-pulse' : 'ring-emerald-400/90'
              }`}
              title={isBoxVisible ? "Click to minimize Vesper (⌘H)" : "Click to restore Vesper (⌘H)"}
            >
              <VesperLogo className="size-4 shrink-0 fill-current" />
              {/* Status indicator dot */}
              <span className={`absolute -bottom-1 size-1.5 rounded-full ${isBoxVisible ? 'bg-white' : 'bg-emerald-400 animate-ping'}`} />
            </motion.div>
            <motion.div
              whileHover={{ y: -6, scale: 1.18 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="size-7 sm:size-8 rounded-lg bg-[#4A154B] flex items-center justify-center text-white text-xs font-bold shadow-sm cursor-pointer"
            >
              #
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
