import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, EyeOff, Command, Sparkles, CheckCircle2, Lock } from 'lucide-react';

export const Undetectability: React.FC = () => {
  // Screen Share Slider State
  const [sliderPct, setSliderPct] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  const handleSliderMove = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const offsetX = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const pct = (offsetX / rect.width) * 100;
    setSliderPct(pct);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    handleSliderMove(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    isDraggingRef.current = true;
    if (e.touches.length > 0) handleSliderMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      handleSliderMove(e.clientX);
    };

    const handleGlobalMouseUp = () => {
      isDraggingRef.current = false;
    };

    const handleGlobalTouchMove = (e: TouchEvent) => {
      if (!isDraggingRef.current || e.touches.length === 0) return;
      handleSliderMove(e.touches[0].clientX);
    };

    const handleGlobalTouchEnd = () => {
      isDraggingRef.current = false;
    };

    window.addEventListener('mousemove', handleGlobalMouseMove);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    window.addEventListener('touchmove', handleGlobalTouchMove);
    window.addEventListener('touchend', handleGlobalTouchEnd);

    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('touchmove', handleGlobalTouchMove);
      window.removeEventListener('touchend', handleGlobalTouchEnd);
    };
  }, []);

  // Moveable HUD Window Controller State
  const [hudPos, setHudPos] = useState<{ x: number; y: number }>({ x: 15, y: 25 });
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const moveUp = () => setHudPos((p) => ({ ...p, y: Math.max(10, p.y - 12) }));
  const moveDown = () => setHudPos((p) => ({ ...p, y: Math.min(70, p.y + 12) }));
  const moveLeft = () => setHudPos((p) => ({ ...p, x: Math.max(5, p.x - 12) }));
  const moveRight = () => setHudPos((p) => ({ ...p, x: Math.min(45, p.x + 12) }));

  // Listen to physical arrow keys
  useEffect(() => {
    const handleArrowKeys = (e: KeyboardEvent) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        if (e.key === 'ArrowUp') { moveUp(); setActiveKey('up'); }
        if (e.key === 'ArrowDown') { moveDown(); setActiveKey('down'); }
        if (e.key === 'ArrowLeft') { moveLeft(); setActiveKey('left'); }
        if (e.key === 'ArrowRight') { moveRight(); setActiveKey('right'); }
        setTimeout(() => setActiveKey(null), 180);
      }
    };
    window.addEventListener('keydown', handleArrowKeys);
    return () => window.removeEventListener('keydown', handleArrowKeys);
  }, []);

  return (
    <section id="undetectability" className="py-24 max-w-6xl mx-auto px-4 sm:px-6 bg-white overflow-hidden">
      {/* Title & Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200">
          <Lock className="size-3 text-emerald-600" />
          Kernel-Level Stealth Architecture
        </span>
        <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight text-[#19191D] mt-2">
          Undetectable in every way
        </h2>
        <p className="mt-3 text-base sm:text-lg text-gray-500 font-sans">
          Kernel-level graphics compositing designed so you can code with complete peace of mind.
        </p>
      </motion.div>

      {/* 3 Bento Cards with Slide-in Entrance */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Zero Browser Injection / Proctor Safe - Slides in from Left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col"
        >
          <div className="card-styles p-5 flex flex-col justify-between min-h-[340px] relative overflow-hidden group">
            {/* Inner Security Table with Laser Scanner */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 relative overflow-hidden">
              {/* Dynamic Laser Scanning Line */}
              <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_8px_#10B981] pointer-events-none animate-laser z-10" />

              <div className="flex items-center justify-between pb-3 border-b border-gray-100 relative z-20">
                <span className="text-xs font-semibold text-gray-900">
                  Sandbox Isolation <span className="text-gray-400 font-normal">(4/4)</span>
                </span>
                <div className="flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-1 text-[10px] font-medium text-emerald-700">
                  <Shield className="size-3.5 text-emerald-500" />
                  <span>Zero Detection</span>
                </div>
              </div>

              <div className="mt-3 space-y-2.5 text-xs relative z-20">
                <div className="flex items-center justify-between hover:bg-gray-50 p-1 rounded-md transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="font-medium text-gray-800 text-xs">No Browser Extensions</span>
                  </div>
                  <span className="text-gray-400 text-[10px]">Native C++</span>
                </div>

                <div className="flex items-center justify-between hover:bg-gray-50 p-1 rounded-md transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="font-medium text-gray-800 text-xs">Zero DOM Modifications</span>
                  </div>
                  <span className="text-gray-400 text-[10px]">Isolated</span>
                </div>

                <div className="flex items-center justify-between hover:bg-gray-50 p-1 rounded-md transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="font-medium text-gray-800 text-xs">CoderPad & HackerRank Safe</span>
                  </div>
                  <span className="text-gray-400 text-[10px]">Verified</span>
                </div>

                <div className="flex items-center justify-between hover:bg-gray-50 p-1 rounded-md transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="font-medium text-gray-800 text-xs">Honorlock & ProctorU Proof</span>
                  </div>
                  <span className="text-gray-400 text-[10px]">Encrypted RAM</span>
                </div>
              </div>
            </div>

            {/* Bottom Vesper Stealth Toggle Bar */}
            <div className="mt-4 rounded-xl bg-gray-100 p-2.5 flex items-center justify-between text-xs text-gray-600 font-sans">
              <span className="flex items-center gap-2 font-medium">
                <span className="size-4 rounded-full bg-blue-600 flex items-center justify-center text-white text-[8px]">
                  ✦
                </span>
                Vesper Stealth Kernel
              </span>
              <EyeOff className="size-4 text-gray-400" />
            </div>
          </div>

          <p className="mt-4 text-sm text-gray-600 leading-relaxed font-sans text-left">
            <strong className="text-gray-900 font-medium">Zero browser injection.</strong> Vesper never runs
            as an extension and modifies zero webpage DOM nodes, bypassing all automated proctoring software.
          </p>
        </motion.div>

        {/* Card 2: Interactive Screen Share Slider - Slides in from Center */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col"
        >
          <div className="card-styles p-4 flex flex-col justify-between min-h-[340px] relative overflow-hidden">
            {/* Draggable Container with Before/After Screen Share View */}
            <div
              id="slider-container"
              ref={sliderRef}
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
              className="relative rounded-xl overflow-hidden h-56 bg-[#181A20] border border-gray-200 select-none cursor-ew-resize group"
            >
              {/* Base View: Clean IDE (Visible to Interviewer) */}
              <div className="absolute inset-0 w-full h-full p-4 font-mono text-[10px] text-zinc-300 bg-[#16171D]">
                <div className="text-zinc-500 mb-2 font-sans text-[11px] pb-1 border-b border-white/10 flex items-center justify-between">
                  <span>Interviewer Screen Share View</span>
                  <span className="text-emerald-400 text-[9px] font-medium">100% Clean</span>
                </div>
                <div className="text-purple-400">
                  class <span className="text-yellow-300">LRUCache</span>:
                </div>
                <div className="pl-4">
                  &nbsp;&nbsp;<span className="text-purple-400">def</span>{' '}
                  <span className="text-blue-400">__init__</span>(self, capacity):
                </div>
                <div className="pl-8">&nbsp;&nbsp;&nbsp;&nbsp;self.cap = capacity</div>
                <div className="pl-4">
                  &nbsp;&nbsp;<span className="text-purple-400">def</span>{' '}
                  <span className="text-blue-400">get</span>(self, key):
                </div>
                <div className="pl-8">
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-zinc-500"># Candidate typing here...</span>
                </div>
              </div>
              <span className="absolute top-2 right-2 px-2 py-0.5 rounded bg-gray-800 text-white text-[9px] font-sans font-semibold z-10 shadow-sm">
                Invisible to interviewer
              </span>

              {/* Foreground View: Vesper Private Overlay (Visible to Candidate) */}
              <div
                id="slider-foreground"
                className="absolute inset-0 overflow-hidden bg-[#16171D]"
                style={{ width: `${sliderPct}%` }}
              >
                <div className="absolute inset-0 w-[200%] h-full p-4 font-mono text-[10px] text-zinc-300">
                  <div className="text-zinc-500 mb-2 font-sans text-[11px] pb-1 border-b border-white/10">
                    Candidate Screen (With Vesper)
                  </div>
                  <div className="text-purple-400">
                    class <span className="text-yellow-300">LRUCache</span>:
                  </div>
                  <div className="pl-4">
                    &nbsp;&nbsp;<span className="text-purple-400">def</span>{' '}
                    <span className="text-blue-400">__init__</span>(self, capacity):
                  </div>
                  <div className="pl-8">&nbsp;&nbsp;&nbsp;&nbsp;self.cap = capacity</div>
                  <div className="pl-4">
                    &nbsp;&nbsp;<span className="text-purple-400">def</span>{' '}
                    <span className="text-blue-400">get</span>(self, key):
                  </div>
                  <div className="pl-8">
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="text-zinc-500"># Candidate typing here...</span>
                  </div>
                </div>

                {/* Neon Border Frame */}
                <div className="absolute inset-1 rounded-xl border-2 border-[#00FF26] pointer-events-none z-20 shadow-[inset_0_0_12px_rgba(0,255,38,0.2)]"></div>
                <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-gray-800 text-white text-[9px] font-sans font-semibold z-20 shadow-sm">
                  Visible to you
                </span>

                {/* Floating AI Response Card on Top */}
                <div className="absolute top-10 left-3 right-3 rounded-xl bg-black/90 p-3 shadow-xl border border-blue-500/40 text-gray-200 text-[10px] font-sans z-10 backdrop-blur-md">
                  <div className="flex items-center justify-between font-semibold text-blue-400 pb-1 border-b border-white/10">
                    <span className="flex items-center gap-1">
                      <Sparkles className="size-3 text-blue-400" /> Vesper Hint
                    </span>
                    <span className="text-[9px] text-emerald-400">O(1) Guarantee</span>
                  </div>
                  <p className="mt-1 text-[10px] leading-relaxed text-zinc-300 font-mono">
                    Move node to head on get/put. If len &gt; cap, evict tail.prev and remove from hash map.
                  </p>
                </div>
              </div>

              {/* Divider Line with < > icon handle */}
              <div
                id="slider-handle"
                className="absolute top-0 bottom-0 -ml-3 z-30 flex items-center justify-center pointer-events-none"
                style={{ left: `${sliderPct}%` }}
              >
                <div className="size-6 rounded-full bg-blue-600 text-white shadow-xl flex items-center justify-center text-[11px] font-bold border-2 border-white animate-pulse">
                  ↔
                </div>
              </div>
            </div>

            {/* View Presets Pill Selector */}
            <div className="mt-3 flex items-center justify-center gap-1.5 p-1 rounded-xl bg-gray-100 text-[10px] font-medium">
              <button
                onClick={() => setSliderPct(0)}
                className={`flex-1 py-1 rounded-lg transition-all cursor-pointer ${sliderPct <= 10 ? 'bg-white shadow-xs font-semibold text-gray-900' : 'text-gray-500 hover:text-gray-800'}`}
              >
                Clean Screen
              </button>
              <button
                onClick={() => setSliderPct(50)}
                className={`flex-1 py-1 rounded-lg transition-all cursor-pointer ${sliderPct > 10 && sliderPct < 90 ? 'bg-white shadow-xs font-semibold text-gray-900' : 'text-gray-500 hover:text-gray-800'}`}
              >
                Split View
              </button>
              <button
                onClick={() => setSliderPct(100)}
                className={`flex-1 py-1 rounded-lg transition-all cursor-pointer ${sliderPct >= 90 ? 'bg-white shadow-xs font-semibold text-gray-900' : 'text-gray-500 hover:text-gray-800'}`}
              >
                Vesper Screen
              </button>
            </div>
          </div>

          <p className="mt-4 text-sm text-gray-600 leading-relaxed font-sans text-left">
            <strong className="text-gray-900 font-medium">Invisible to screen share.</strong> Direct GPU
            compositor hooks ensure Vesper never appears in Zoom, Google Meet, Teams, or Tuple recordings.
          </p>
        </motion.div>

        {/* Card 3: Moveable HUD with Tactile Keyboard Controls - Slides in from Right */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col"
        >
          <div className="card-styles p-4 flex flex-col justify-between min-h-[340px]">
            {/* Virtual Desktop Screen */}
            <div className="relative h-48 rounded-xl overflow-hidden border border-gray-200 shadow-inner bg-gradient-to-br from-[#1c2230] to-[#0f1118]">
              <div className="absolute top-2 left-2 flex items-center gap-1.5 text-[9px] text-white/50 font-mono">
                <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Webcam Eye-Line Alignment</span>
              </div>

              {/* Moveable AI Response Window */}
              <div
                id="hud-mover-box"
                className="absolute w-44 rounded-xl bg-black/75 backdrop-blur-md border border-blue-400/30 p-2.5 text-white text-[9px] shadow-2xl transition-all duration-300 ease-out"
                style={{ top: `${hudPos.y}px`, left: `${hudPos.x}%` }}
              >
                <div className="flex items-center gap-1 font-semibold text-[9px] text-blue-300 mb-1">
                  <Sparkles className="size-3 text-blue-400" />
                  <span>Vesper Active HUD</span>
                </div>
                <div className="h-1.5 w-full bg-blue-400/50 rounded-full mb-1"></div>
                <div className="h-1.5 w-3/4 bg-white/40 rounded-full"></div>
              </div>
            </div>

            {/* Tactile Keyboard Controller Tray */}
            <div className="mt-3 p-2 rounded-xl bg-[linear-gradient(180deg,#EEEFF1_30.83%,#E3E4E9_100%)] shadow-sm border border-gray-200 flex items-center justify-between">
              <div className="relative flex h-8 px-3 items-center gap-1.5 rounded-md border border-gray-300 bg-white shadow-xs text-xs font-semibold text-gray-700">
                <Command className="size-3 text-gray-700" />
                <span className="text-[10px]">arrow keys</span>
              </div>
              <span className="text-gray-400 font-bold text-xs">+</span>
              <div className="flex items-center gap-1">
                <motion.button
                  whileTap={{ scale: 0.88, y: 2 }}
                  id="move-up"
                  onClick={moveUp}
                  className={`size-8 flex items-center justify-center rounded-md border border-gray-300 shadow-xs text-xs font-bold text-gray-700 transition-all cursor-pointer keycap-tactile ${
                    activeKey === 'up' ? 'bg-blue-100 text-blue-600 border-blue-400 scale-95' : 'bg-white hover:bg-gray-50'
                  }`}
                  title="Move HUD Up"
                >
                  ↑
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.88, y: 2 }}
                  id="move-down"
                  onClick={moveDown}
                  className={`size-8 flex items-center justify-center rounded-md border border-gray-300 shadow-xs text-xs font-bold text-gray-700 transition-all cursor-pointer keycap-tactile ${
                    activeKey === 'down' ? 'bg-blue-100 text-blue-600 border-blue-400 scale-95' : 'bg-white hover:bg-gray-50'
                  }`}
                  title="Move HUD Down"
                >
                  ↓
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.88, y: 2 }}
                  id="move-left"
                  onClick={moveLeft}
                  className={`size-8 flex items-center justify-center rounded-md border border-gray-300 shadow-xs text-xs font-bold text-gray-700 transition-all cursor-pointer keycap-tactile ${
                    activeKey === 'left' ? 'bg-blue-100 text-blue-600 border-blue-400 scale-95' : 'bg-white hover:bg-gray-50'
                  }`}
                  title="Move HUD Left"
                >
                  ←
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.88, y: 2 }}
                  id="move-right"
                  onClick={moveRight}
                  className={`size-8 flex items-center justify-center rounded-md border border-gray-300 shadow-xs text-xs font-bold text-gray-700 transition-all cursor-pointer keycap-tactile ${
                    activeKey === 'right' ? 'bg-blue-100 text-blue-600 border-blue-400 scale-95' : 'bg-white hover:bg-gray-50'
                  }`}
                  title="Move HUD Right"
                >
                  →
                </motion.button>
              </div>
            </div>
          </div>

          <p className="mt-4 text-sm text-gray-600 leading-relaxed font-sans text-left">
            <strong className="text-gray-900 font-medium">Follows your eye gaze.</strong> Reposition the
            transparent HUD right below your camera so your eye contact remains 100% steady and confident.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
