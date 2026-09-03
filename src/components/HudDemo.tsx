import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Zap,
  Sparkles,
  Wand2,
  MessageSquare,
  RefreshCw,
  Eye,
  EyeOff,
  ArrowUp,
  Search,
  Wifi,
  Battery,
  Sliders,
  ChevronRight,
  Terminal,
  FileCode,
  Volume2,
  Sun,
  Bluetooth,
} from 'lucide-react';
import { VesperLogo, AppleLogo } from './BrandIcons';
import { SCENARIOS, SCENARIO_CHIPS } from '../data/content';
import { MacDock } from './MacDock';

export const HudDemo: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState<string>('optimal');
  const [displayedText, setDisplayedText] = useState<string>('');
  const [customInput, setCustomInput] = useState<string>('');
  const [isBoxVisible, setIsBoxVisible] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<'solution' | 'tests'>('solution');
  const [isHoveringTraffic, setIsHoveringTraffic] = useState<boolean>(false);
  const [isAppleMenuOpen, setIsAppleMenuOpen] = useState<boolean>(false);
  const [isControlCenterOpen, setIsControlCenterOpen] = useState<boolean>(false);
  const [isNotchExpanded, setIsNotchExpanded] = useState<boolean>(false);
  const [isWindowMaximized, setIsWindowMaximized] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<string>('Tue 10:42 AM');

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Real-time clock update (macOS Menu Bar)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const formattedHours = hours % 12 || 12;
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      setCurrentTime(`${days[now.getDay()]} ${formattedHours}:${minutes} ${ampm}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

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

  // Stationary container hover and mouse position tracking (zero-flicker)
  const containerRef = useRef<HTMLDivElement>(null);
  const [isCardHovered, setIsCardHovered] = useState<boolean>(false);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;
    const x = Math.round(((e.clientX - rect.left) / rect.width) * 100);
    const y = Math.round(((e.clientY - rect.top) / rect.height) * 100);
    setMousePos({ x, y });
  };

  const handleMouseEnter = () => {
    setIsCardHovered(true);
  };

  const handleMouseLeave = () => {
    setIsCardHovered(false);
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

        let delay = Math.floor(Math.random() * 8) + 12;
        if (char === '.' || char === '?') delay = 130;
        else if (char === ',' || char === ':') delay = 60;

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
      `"Synthesized Strategy for '${query}': Maintain a HashMap paired with a Doubly Linked List. On cache hit, elevate node to head in O(1). On eviction, purge node at tail in O(1) space."`
    );
    setCustomInput('');
  };

  const getChipIcon = (iconName: string) => {
    switch (iconName) {
      case 'sparkles':
        return <Sparkles className="size-3.5 shrink-0 text-blue-400" />;
      case 'wand':
        return <Wand2 className="size-3.5 shrink-0 text-amber-300" />;
      case 'messageSquare':
        return <MessageSquare className="size-3.5 shrink-0 text-emerald-400" />;
      case 'refresh':
        return <RefreshCw className="size-3.5 shrink-0 text-cyan-400" />;
      default:
        return <Sparkles className="size-3.5 shrink-0 text-blue-400" />;
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative mt-8 sm:mt-12 max-w-5xl mx-auto px-2 sm:px-4 py-2"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Silky smooth ambient radial aura bloom around the box */}
      <div
        className={`absolute -inset-2 sm:-inset-3 rounded-[28px] sm:rounded-[36px] bg-gradient-to-r from-blue-600/35 via-indigo-600/25 to-cyan-500/30 blur-2xl pointer-events-none transition-all duration-700 ease-out ${
          isCardHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      />

      {/* Outer MacBook Pro / Retina Display Frame with smooth hover elevation & interactive rim spotlight */}
      <motion.div
        id="tilt-card"
        animate={{
          y: isCardHovered ? -4 : 0,
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-[20px] sm:rounded-[28px] shadow-[0_25px_70px_rgba(0,0,0,0.65)] hover:shadow-[0_35px_95px_rgba(30,80,220,0.35),0_0_50px_rgba(59,130,246,0.2)] p-1.5 sm:p-2.5 bg-gradient-to-b from-[#2e303a] via-[#1d1f27] to-[#121319] border border-white/25 hover:border-white/40 transition-[border-color,box-shadow] duration-500 overflow-hidden"
      >
        {/* Dynamic mouse-following rim spotlight around the box */}
        <div
          className="absolute inset-0 rounded-[20px] sm:rounded-[28px] pointer-events-none transition-opacity duration-500"
          style={{
            opacity: isCardHovered ? 1 : 0,
            background: `radial-gradient(500px circle at ${mousePos.x}% ${mousePos.y}%, rgba(96, 165, 250, 0.22), transparent 60%)`,
          }}
        />
        {/* Inner Screen Bezel with Authentic macOS Sonoma Desktop Wallpaper */}
        <div className="relative w-full rounded-[16px] sm:rounded-[22px] overflow-hidden bg-[#0a0c14] border border-black/70 flex flex-col justify-between min-h-[520px] sm:min-h-[580px] select-none">
          {/* macOS Sonoma Ambient Wallpaper Glows */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#080b18] via-[#0d1633] to-[#182859] pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/20 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-600/15 rounded-full blur-[100px] pointer-events-none" />

          {/* ========================================================= */}
          {/* 1. TOP macOS MENU BAR & INTEGRATED DYNAMIC ISLAND NOTCH */}
          {/* ========================================================= */}
          <header className="relative z-40 w-full flex items-center justify-between px-2.5 sm:px-4 py-1.5 bg-black/45 backdrop-blur-xl border-b border-white/10 text-white text-[11px] font-sans">
            {/* Left Menus */}
            <div className="flex items-center gap-1 sm:gap-3">
              {/* Apple Logo with interactive menu */}
              <div className="relative">
                <button
                  onClick={() => {
                    setIsAppleMenuOpen((prev) => !prev);
                    setIsControlCenterOpen(false);
                  }}
                  className="px-1.5 py-0.5 rounded hover:bg-white/15 transition-colors cursor-pointer flex items-center justify-center"
                  aria-label="Apple Menu"
                >
                  <AppleLogo className="size-3.5 fill-current" />
                </button>

                {/* macOS Apple Dropdown Menu */}
                <AnimatePresence>
                  {isAppleMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 4, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 4, scale: 0.95 }}
                      transition={{ duration: 0.12 }}
                      className="absolute left-0 top-7 w-48 rounded-xl bg-[#1d1f26]/90 backdrop-blur-2xl border border-white/20 shadow-[0_16px_36px_rgba(0,0,0,0.5)] p-1 z-50 text-[11px] text-zinc-200"
                    >
                      <button className="w-full text-left px-3 py-1 rounded-md hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">
                        About This Mac
                      </button>
                      <div className="h-[1px] bg-white/10 my-1" />
                      <button className="w-full text-left px-3 py-1 rounded-md hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">
                        System Settings...
                      </button>
                      <button className="w-full text-left px-3 py-1 rounded-md hover:bg-blue-600 hover:text-white transition-colors cursor-pointer flex items-center justify-between">
                        <span>App Store...</span>
                        <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-blue-500/30 text-blue-300">1</span>
                      </button>
                      <div className="h-[1px] bg-white/10 my-1" />
                      <button
                        onClick={() => {
                          setIsBoxVisible((prev) => !prev);
                          setIsAppleMenuOpen(false);
                        }}
                        className="w-full text-left px-3 py-1 rounded-md hover:bg-blue-600 hover:text-white transition-colors cursor-pointer flex items-center justify-between"
                      >
                        <span>{isBoxVisible ? 'Hide Vesper' : 'Show Vesper'}</span>
                        <span className="text-zinc-400 font-mono text-[10px]">⌘H</span>
                      </button>
                      <div className="h-[1px] bg-white/10 my-1" />
                      <button className="w-full text-left px-3 py-1 rounded-md hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">
                        Lock Screen
                      </button>
                      <button className="w-full text-left px-3 py-1 rounded-md hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">
                        Restart...
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bold App Name */}
              <span className="font-semibold text-white tracking-tight cursor-default">Vesper</span>

              {/* macOS Menus (condensed on small screens) */}
              <div className="hidden md:flex items-center gap-2.5 text-white/80 text-[11px]">
                <span className="hover:text-white cursor-pointer px-1 rounded hover:bg-white/10 transition-colors">File</span>
                <span className="hover:text-white cursor-pointer px-1 rounded hover:bg-white/10 transition-colors">Edit</span>
                <span className="hover:text-white cursor-pointer px-1 rounded hover:bg-white/10 transition-colors">View</span>
                <span className="hover:text-white cursor-pointer px-1 rounded hover:bg-white/10 transition-colors">Model</span>
                <span className="hover:text-white cursor-pointer px-1 rounded hover:bg-white/10 transition-colors">Kernel</span>
                <span className="hover:text-white cursor-pointer px-1 rounded hover:bg-white/10 transition-colors">Window</span>
                <span className="hover:text-white cursor-pointer px-1 rounded hover:bg-white/10 transition-colors">Help</span>
              </div>
            </div>

            {/* Center: MacBook Camera Notch & Dynamic Island */}
            <div className="relative flex items-center justify-center">
              <motion.div
                onClick={() => setIsNotchExpanded((prev) => !prev)}
                className={`group cursor-pointer rounded-b-xl bg-black border-x border-b border-white/15 shadow-md flex items-center gap-2 px-3 py-0.5 transition-all ${
                  isNotchExpanded ? 'bg-black/95 px-4 py-1.5' : 'hover:bg-zinc-900'
                }`}
              >
                {/* Camera Lens with Specular Highlight */}
                <div className="relative size-2 rounded-full bg-zinc-900 ring-1 ring-zinc-700/80 flex items-center justify-center">
                  <span className="size-1 rounded-full bg-blue-950" />
                </div>

                {/* Camera Privacy Indicator LED */}
                <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_5px_rgba(52,211,153,0.9)] animate-pulse" />

                {/* Vesper Status Pill inside Notch */}
                <div className="flex items-center gap-1.5 text-[10px] text-zinc-300 font-mono">
                  <VesperLogo className="size-3 fill-blue-400" />
                  <span className="hidden sm:inline font-sans text-white/90">
                    {isBoxVisible ? 'Compositor Live' : 'Stealth Active'}
                  </span>
                </div>
              </motion.div>

              {/* Dynamic Island Expanded Action Card */}
              <AnimatePresence>
                {isNotchExpanded && (
                  <motion.div
                    initial={{ opacity: 0, y: -4, scale: 0.92 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -4, scale: 0.92 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    className="absolute top-8 z-50 w-72 sm:w-80 rounded-2xl bg-black/90 backdrop-blur-2xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.7)] p-3 text-white"
                  >
                    <div className="flex items-center justify-between pb-2 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <div className="size-2 rounded-full bg-emerald-400 animate-ping" />
                        <span className="font-semibold text-xs text-emerald-300">GPU Compositor 120 FPS</span>
                      </div>
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">
                        DirectX / Metal
                      </span>
                    </div>

                    <div className="mt-2.5 space-y-2 text-[11px] text-zinc-300">
                      <div className="flex items-center justify-between">
                        <span>Capture Immunity</span>
                        <span className="text-emerald-400 font-medium">Bypasses Window API</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Target Session</span>
                        <span className="text-blue-300 font-mono">LeetCode #146 (Hard)</span>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        setIsBoxVisible((prev) => !prev);
                        setIsNotchExpanded(false);
                      }}
                      className="mt-3 w-full py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-all shadow-md shadow-blue-500/30 cursor-pointer"
                    >
                      {isBoxVisible ? <EyeOff className="size-3.5" /> : <Eye className="size-3.5" />}
                      <span>{isBoxVisible ? 'Hide Communication Box (Esc)' : 'Show Communication Box (Esc)'}</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right Status Tray */}
            <div className="flex items-center gap-2 sm:gap-3 text-white/90 text-[10px] sm:text-[11px]">
              {/* GPU Compositor Tag */}
              <div className="hidden sm:flex items-center gap-1 px-1.5 py-0.5 rounded bg-white/10 border border-white/15 text-emerald-400 font-mono text-[10px]">
                <span className="size-1.5 rounded-full bg-emerald-400" />
                <span>120 FPS</span>
              </div>

              {/* Wi-Fi */}
              <Wifi className="size-3 text-white/80 hidden sm:block" />

              {/* Battery with 100% */}
              <div className="flex items-center gap-1">
                <Battery className="size-3.5 text-white/80" />
                <span className="text-[10px] hidden sm:inline">100%</span>
              </div>

              {/* Spotlight Search Icon */}
              <button
                onClick={() => setIsBoxVisible((prev) => !prev)}
                className="hover:text-white p-0.5 rounded hover:bg-white/10 transition-colors cursor-pointer"
                title="Toggle Spotlight / Vesper HUD"
              >
                <Search className="size-3" />
              </button>

              {/* Control Center Toggle */}
              <div className="relative">
                <button
                  onClick={() => {
                    setIsControlCenterOpen((prev) => !prev);
                    setIsAppleMenuOpen(false);
                  }}
                  className="hover:text-white p-0.5 rounded hover:bg-white/10 transition-colors cursor-pointer"
                  title="Control Center"
                >
                  <Sliders className="size-3" />
                </button>

                {/* macOS Control Center Panel */}
                <AnimatePresence>
                  {isControlCenterOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 4, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 4, scale: 0.95 }}
                      transition={{ duration: 0.12 }}
                      className="absolute right-0 top-7 w-64 rounded-2xl bg-[#1d1f26]/90 backdrop-blur-2xl border border-white/20 shadow-[0_20px_45px_rgba(0,0,0,0.6)] p-3 z-50 text-white"
                    >
                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        <div className="p-2 rounded-xl bg-white/10 border border-white/10 flex items-center gap-2">
                          <div className="size-6 rounded-full bg-blue-500 flex items-center justify-center text-white">
                            <Wifi className="size-3" />
                          </div>
                          <div>
                            <div className="font-semibold text-white">Wi-Fi</div>
                            <div className="text-[9px] text-zinc-400">Retina-5G</div>
                          </div>
                        </div>

                        <div className="p-2 rounded-xl bg-white/10 border border-white/10 flex items-center gap-2">
                          <div className="size-6 rounded-full bg-blue-500 flex items-center justify-center text-white">
                            <Bluetooth className="size-3" />
                          </div>
                          <div>
                            <div className="font-semibold text-white">Bluetooth</div>
                            <div className="text-[9px] text-zinc-400">AirPods Pro</div>
                          </div>
                        </div>
                      </div>

                      {/* Display & Sound sliders */}
                      <div className="mt-2 p-2 rounded-xl bg-white/10 border border-white/10 space-y-2">
                        <div className="flex items-center justify-between text-[10px] text-zinc-300">
                          <span className="flex items-center gap-1.5"><Sun className="size-3 text-amber-300" /> Display</span>
                          <span>100%</span>
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-white/20 overflow-hidden">
                          <div className="w-full h-full bg-white rounded-full" />
                        </div>
                      </div>

                      <div className="mt-2 p-2 rounded-xl bg-white/10 border border-white/10 space-y-2">
                        <div className="flex items-center justify-between text-[10px] text-zinc-300">
                          <span className="flex items-center gap-1.5"><Volume2 className="size-3 text-blue-300" /> Sound</span>
                          <span>75%</span>
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-white/20 overflow-hidden">
                          <div className="w-3/4 h-full bg-white rounded-full" />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Siri Glow Orb */}
              <div
                onClick={() => setIsBoxVisible((prev) => !prev)}
                className="size-3.5 rounded-full bg-gradient-to-tr from-rose-500 via-purple-500 to-cyan-400 shadow-[0_0_8px_rgba(168,85,247,0.7)] cursor-pointer"
                title="Vesper Assistant"
              />

              {/* Real-time macOS Clock */}
              <span className="font-medium text-white/95">{currentTime}</span>
            </div>
          </header>

          {/* ========================================================= */}
          {/* 2. AUTHENTIC macOS CODE EDITOR WINDOW (VS CODE / XCODE) */}
          {/* ========================================================= */}
          <div className="relative flex-1 flex items-center justify-center p-2 sm:p-4 my-1">
            <motion.div
              animate={{
                scale: isWindowMaximized ? 1 : 0.985,
                y: isWindowMaximized ? 0 : 2,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="w-full h-full max-h-[460px] rounded-xl sm:rounded-2xl bg-[#17181e]/95 backdrop-blur-xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.15)] flex flex-col overflow-hidden text-left"
            >
              {/* macOS Window Chrome / Title Bar */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 bg-[#131419]/90 select-none">
                {/* Traffic Lights with Interactive Hover Glyphs */}
                <div
                  className="flex items-center gap-2 group cursor-pointer"
                  onMouseEnter={() => setIsHoveringTraffic(true)}
                  onMouseLeave={() => setIsHoveringTraffic(false)}
                >
                  {/* Red (Close / Hide) */}
                  <button
                    onClick={() => setIsBoxVisible(false)}
                    className="size-3 rounded-full bg-[#FF5F56] border border-[#E0443E] flex items-center justify-center text-[#4C0000] transition-transform active:scale-90"
                    title="Close Vesper (Esc)"
                    aria-label="Close"
                  >
                    {isHoveringTraffic && <span className="text-[8px] font-bold leading-none">✕</span>}
                  </button>

                  {/* Yellow (Minimize) */}
                  <button
                    onClick={() => setIsBoxVisible((prev) => !prev)}
                    className="size-3 rounded-full bg-[#FFBD2E] border border-[#DEA123] flex items-center justify-center text-[#5C4000] transition-transform active:scale-90"
                    title="Minimize"
                    aria-label="Minimize"
                  >
                    {isHoveringTraffic && <span className="text-[9px] font-bold leading-none -mt-0.5">–</span>}
                  </button>

                  {/* Green (Maximize / Fullscreen) */}
                  <button
                    onClick={() => setIsWindowMaximized((prev) => !prev)}
                    className="size-3 rounded-full bg-[#27C93F] border border-[#1AAB29] flex items-center justify-center text-[#0B4F13] transition-transform active:scale-90"
                    title="Toggle Fullscreen"
                    aria-label="Maximize"
                  >
                    {isHoveringTraffic && <span className="text-[7px] font-bold leading-none">⤢</span>}
                  </button>
                </div>

                {/* macOS Tab Bar */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveTab('solution')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-mono transition-all cursor-pointer ${
                      activeTab === 'solution'
                        ? 'bg-[#1e2029] text-blue-300 border border-white/15 shadow-xs'
                        : 'text-zinc-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <FileCode className="size-3 text-cyan-400" />
                    <span>solution.py</span>
                    <span className="text-[9px] text-zinc-500 hover:text-white ml-1">✕</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('tests')}
                    className={`hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono transition-all cursor-pointer ${
                      activeTab === 'tests'
                        ? 'bg-[#1e2029] text-blue-300 border border-white/15 shadow-xs'
                        : 'text-zinc-500 hover:text-zinc-300 hover:bg-white/5'
                    }`}
                  >
                    <Terminal className="size-3 text-emerald-400" />
                    <span>test_lru.py</span>
                  </button>
                </div>

                {/* Right Session Tag */}
                <div className="text-[10px] text-zinc-400 font-sans hidden sm:flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-emerald-400" />
                  <span>CoderPad Live Interview · Python 3.12</span>
                </div>
              </div>

              {/* Breadcrumb Path Bar */}
              <div className="px-3 py-1 border-b border-white/5 bg-[#14151a]/60 flex items-center gap-1 text-[10px] text-zinc-500 font-mono overflow-x-auto cluely-scrollbar">
                <span>vesper-studio</span>
                <ChevronRight className="size-3 text-zinc-600 shrink-0" />
                <span>leetcode</span>
                <ChevronRight className="size-3 text-zinc-600 shrink-0" />
                <span className="text-zinc-300">#146-lru-cache</span>
                <ChevronRight className="size-3 text-zinc-600 shrink-0" />
                <span className="text-blue-400">{activeTab === 'solution' ? 'solution.py' : 'test_lru.py'}</span>
                <ChevronRight className="size-3 text-zinc-600 shrink-0" />
                <span className="text-amber-300">LRUCache</span>
              </div>

              {/* Code Gutter & Editor Lines */}
              <div className="flex-1 p-3 sm:p-4 overflow-y-auto cluely-scrollbar font-mono text-[11px] sm:text-xs leading-relaxed text-zinc-300 select-text">
                {activeTab === 'solution' ? (
                  <div className="space-y-1">
                    <div>
                      <span className="text-zinc-600 inline-block w-6 select-none">01</span>{' '}
                      <span className="text-purple-400">class</span> <span className="text-amber-300">Node</span>:
                    </div>
                    <div>
                      <span className="text-zinc-600 inline-block w-6 select-none">02</span>{' '}
                      &nbsp;&nbsp;<span className="text-purple-400">def</span>{' '}
                      <span className="text-blue-400">__init__</span>(self, key:{' '}
                      <span className="text-emerald-300">int</span>, val: <span className="text-emerald-300">int</span>):
                    </div>
                    <div>
                      <span className="text-zinc-600 inline-block w-6 select-none">03</span>{' '}
                      &nbsp;&nbsp;&nbsp;&nbsp;self.key, self.val = key, val
                    </div>
                    <div>
                      <span className="text-zinc-600 inline-block w-6 select-none">04</span>{' '}
                      &nbsp;&nbsp;&nbsp;&nbsp;self.prev, self.next ={' '}
                      <span className="text-rose-400">None</span>, <span className="text-rose-400">None</span>
                    </div>
                    <div className="h-2" />
                    <div>
                      <span className="text-zinc-600 inline-block w-6 select-none">05</span>{' '}
                      <span className="text-purple-400">class</span> <span className="text-amber-300">LRUCache</span>:
                    </div>
                    <div>
                      <span className="text-zinc-600 inline-block w-6 select-none">06</span>{' '}
                      &nbsp;&nbsp;<span className="text-purple-400">def</span>{' '}
                      <span className="text-blue-400">__init__</span>(self, capacity:{' '}
                      <span className="text-emerald-300">int</span>):
                    </div>
                    <div>
                      <span className="text-zinc-600 inline-block w-6 select-none">07</span>{' '}
                      &nbsp;&nbsp;&nbsp;&nbsp;self.cap = capacity
                    </div>
                    {/* Active Line with glowing cursor */}
                    <div className="bg-blue-500/15 -mx-3 sm:-mx-4 px-3 sm:px-4 py-0.5 rounded border-l-2 border-blue-400">
                      <span className="text-blue-400 font-bold inline-block w-6 select-none">08</span>{' '}
                      &nbsp;&nbsp;&nbsp;&nbsp;self.cache = &#123;&#125;{' '}
                      <span className="text-zinc-500"># key -&gt; Node (strict O(1) hash table lookup)</span>
                      <span className="inline-block w-1.5 h-3.5 bg-blue-400 ml-1 animate-pulse align-middle" />
                    </div>
                    <div>
                      <span className="text-zinc-600 inline-block w-6 select-none">09</span>{' '}
                      &nbsp;&nbsp;&nbsp;&nbsp;self.head, self.tail = Node(0, 0), Node(0, 0)
                    </div>
                    <div>
                      <span className="text-zinc-600 inline-block w-6 select-none">10</span>{' '}
                      &nbsp;&nbsp;&nbsp;&nbsp;self.head.next, self.tail.prev = self.tail, self.head
                    </div>
                  </div>
                ) : (
                  <div className="space-y-1">
                    <div>
                      <span className="text-zinc-600 inline-block w-6 select-none">01</span>{' '}
                      <span className="text-purple-400">import</span> <span className="text-yellow-300">pytest</span>
                    </div>
                    <div>
                      <span className="text-zinc-600 inline-block w-6 select-none">02</span>{' '}
                      <span className="text-purple-400">def</span> <span className="text-blue-400">test_lru_eviction</span>():
                    </div>
                    <div>
                      <span className="text-zinc-600 inline-block w-6 select-none">03</span>{' '}
                      &nbsp;&nbsp;cache = LRUCache(2)
                    </div>
                    <div>
                      <span className="text-zinc-600 inline-block w-6 select-none">04</span>{' '}
                      &nbsp;&nbsp;cache.put(1, 1); cache.put(2, 2)
                    </div>
                    <div>
                      <span className="text-zinc-600 inline-block w-6 select-none">05</span>{' '}
                      &nbsp;&nbsp;<span className="text-purple-400">assert</span> cache.get(1) == 1
                    </div>
                    <div>
                      <span className="text-zinc-600 inline-block w-6 select-none">06</span>{' '}
                      &nbsp;&nbsp;cache.put(3, 3) <span className="text-zinc-500"># evicts key 2</span>
                    </div>
                    <div>
                      <span className="text-zinc-600 inline-block w-6 select-none">07</span>{' '}
                      &nbsp;&nbsp;<span className="text-purple-400">assert</span> cache.get(2) == -1
                    </div>
                  </div>
                )}
              </div>
            </motion.div>

            {/* ========================================================= */}
            {/* 3. VESPERS FLOATING INTELLIGENCE HUD (SPOTLIGHT / RAYCAST) */}
            {/* ========================================================= */}
            <AnimatePresence>
              {isBoxVisible && (
                <motion.div
                  key="vesper-spotlight-hud"
                  initial={{ opacity: 0, y: -24, scale: 0.94, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                  exit={{
                    opacity: 0,
                    y: -24,
                    scale: 0.92,
                    filter: 'blur(10px)',
                    transition: { duration: 0.18, ease: [0.16, 1, 0.3, 1] },
                  }}
                  transition={{ type: 'spring', stiffness: 360, damping: 27 }}
                  className="absolute inset-x-2 sm:inset-x-8 top-4 sm:top-8 mx-auto max-w-xl rounded-2xl bg-[#161720]/85 backdrop-blur-2xl border border-white/20 shadow-[0_30px_70px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.12),inset_0_1px_0_rgba(255,255,255,0.25)] p-3 sm:p-4 text-white z-30"
                >
                  {/* Window Header with HUD Traffic Lights & Status */}
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-[10px] text-zinc-400 font-sans">
                    {/* Left HUD Traffic Lights */}
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => setIsBoxVisible(false)}
                        className="size-2.5 rounded-full bg-[#FF5F56] hover:opacity-80 transition-opacity cursor-pointer flex items-center justify-center text-[7px] text-[#4C0000]"
                        title="Hide Vesper (Esc)"
                        aria-label="Hide Vesper"
                      />
                      <button
                        onClick={() => setIsBoxVisible(false)}
                        className="size-2.5 rounded-full bg-[#FFBD2E] hover:opacity-80 transition-opacity cursor-pointer"
                        title="Minimize"
                        aria-label="Minimize"
                      />
                      <button
                        onClick={() => setIsWindowMaximized((prev) => !prev)}
                        className="size-2.5 rounded-full bg-[#27C93F] hover:opacity-80 transition-opacity cursor-pointer"
                        title="Expand"
                        aria-label="Expand"
                      />
                      <span className="ml-1 text-white font-medium flex items-center gap-1">
                        <VesperLogo className="size-3 text-blue-400 fill-current" />
                        <span>Vesper Intelligence</span>
                        <span className="text-zinc-500 font-normal">v4.2</span>
                      </span>
                    </div>

                    {/* Right Dismiss Badge */}
                    <button
                      onClick={() => setIsBoxVisible(false)}
                      className="flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-md bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white transition-all cursor-pointer"
                    >
                      <EyeOff className="size-3 text-zinc-400" />
                      <span>Hide</span>
                      <kbd className="text-[9px] px-1 rounded bg-black/40 text-zinc-400 font-mono">Esc</kbd>
                    </button>
                  </div>

                  {/* Candidate Speech Bubble (macOS iMessage Blue) */}
                  <div className="flex justify-end mb-2.5">
                    <motion.div
                      initial={{ scale: 0.92, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="inline-flex items-center gap-1.5 text-[11px] font-sans bg-gradient-to-r from-[#007AFF] to-[#005bb5] text-white px-3 py-1 rounded-2xl rounded-br-xs shadow-md font-medium border border-blue-300/30"
                    >
                      <Zap className="size-3 text-amber-200 fill-amber-200" />
                      <span>Optimal O(1) Solution & Explanation?</span>
                    </motion.div>
                  </div>

                  {/* Real-time Streaming AI Output with Complexity Badges */}
                  <div className="p-3 bg-black/45 rounded-xl border border-white/10 min-h-[64px] max-h-28 overflow-y-auto cluely-scrollbar text-[11px] sm:text-xs text-zinc-100 font-sans leading-relaxed">
                    <span>{displayedText}</span>
                    <span className="inline-block w-1.5 h-3.5 bg-blue-400 ml-1 animate-pulse align-middle" />
                  </div>

                  {/* macOS Segmented Filter Pills */}
                  <div className="flex items-center gap-1.5 py-2.5 text-[10px] overflow-x-auto cluely-scrollbar">
                    {SCENARIO_CHIPS.map((chip) => {
                      const isActive = activeScenario === chip.id;
                      return (
                        <button
                          key={chip.id}
                          onClick={() => setActiveScenario(chip.id)}
                          className={`relative flex items-center gap-1 px-2.5 py-1 rounded-full whitespace-nowrap transition-all cursor-pointer ${
                            isActive ? 'text-white font-medium' : 'text-zinc-400 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          {isActive && (
                            <motion.div
                              layoutId="activeFilterPill"
                              className="absolute inset-0 rounded-full bg-white/20 border border-white/25 shadow-xs"
                              transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                            />
                          )}
                          <span className="relative z-10 flex items-center gap-1">
                            {getChipIcon(chip.icon)}
                            <span>{chip.label}</span>
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* macOS Spotlight / Raycast Style Search Input */}
                  <form
                    onSubmit={handleCustomSubmit}
                    className="relative rounded-xl border border-white/15 bg-black/60 p-1.5 flex items-center gap-2"
                  >
                    <Search className="size-3.5 text-blue-400 ml-1.5 shrink-0" />
                    <input
                      id="hud-input"
                      type="text"
                      value={customInput}
                      onChange={(e) => setCustomInput(e.target.value)}
                      placeholder="Ask about algorithm, complexity, or ⌘↵ for Instant Solution..."
                      className="w-full bg-transparent px-1 text-[11px] font-sans text-white placeholder-zinc-500 outline-none"
                    />
                    <div className="hidden sm:flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-[10px] text-blue-300 shrink-0 font-mono">
                      <Zap className="size-2.5" />
                      <span>AST Live</span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.92 }}
                      id="hud-submit"
                      type="submit"
                      aria-label="Send Query"
                      title="Send query"
                      className="size-6 rounded-full bg-blue-600 hover:bg-blue-500 active:bg-blue-700 flex items-center justify-center text-white shrink-0 transition-all cursor-pointer shadow-md shadow-blue-500/30"
                    >
                      <ArrowUp className="size-3.5 stroke-[2.5]" />
                    </motion.button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Stealth Mode Pill when HUD is hidden */}
            <AnimatePresence>
              {!isBoxVisible && (
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.92 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 15, scale: 0.92 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className="absolute inset-x-4 top-14 mx-auto max-w-sm z-20"
                >
                  <div className="rounded-xl bg-[#14151b]/90 backdrop-blur-xl border border-emerald-500/30 p-3 text-white shadow-2xl flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5 text-left">
                      <span className="size-2 rounded-full bg-emerald-400 animate-ping" />
                      <div>
                        <div className="text-[11px] font-semibold text-emerald-300 flex items-center gap-1.5">
                          <span>Stealth Mode Active</span>
                          <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 font-mono">
                            100% Undetectable
                          </span>
                        </div>
                        <p className="text-[10px] text-zinc-400">Compositor excluded from Zoom, Meet & Tuple captures</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsBoxVisible(true)}
                      className="px-2.5 py-1 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-semibold flex items-center gap-1 shrink-0 transition-all cursor-pointer shadow-md shadow-blue-500/30 active:scale-95"
                    >
                      <Sparkles className="size-3 text-amber-300" />
                      <span>Show (⌘H)</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ========================================================= */}
          {/* 4. macOS RETINA DOCK AT BOTTOM */}
          {/* ========================================================= */}
          <div className="relative pb-2 z-30">
            <MacDock
              isBoxVisible={isBoxVisible}
              onToggleVesper={() => setIsBoxVisible((prev) => !prev)}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
