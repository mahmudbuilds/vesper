import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence, MotionValue } from 'framer-motion';
import { VesperLogo } from './BrandIcons';

interface MacDockProps {
  isBoxVisible: boolean;
  onToggleVesper: () => void;
}

interface DockItemData {
  id: string;
  name: string;
  isOpen?: boolean;
  isVesper?: boolean;
  renderIcon: (isBoxVisible?: boolean) => React.ReactNode;
}

// Subcomponent for each animated dock icon
const DockIconItem: React.FC<{
  mouseX: MotionValue<number>;
  item: DockItemData;
  isBoxVisible: boolean;
  isMobile: boolean;
  onClick: () => void;
}> = ({ mouseX, item, isBoxVisible, isMobile, onClick }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isBouncing, setIsBouncing] = useState(false);

  // Compute distance from mouseX to icon center
  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { left: 0, width: 0 };
    return val - (bounds.left + bounds.width / 2);
  });

  // Apple Fisheye Magnification curve (adapted for mobile)
  const baseSize = isMobile ? 24 : 32;
  const peakSize = isMobile ? 36 : 52;
  const widthTransform = useTransform(distance, [-100, 0, 100], [baseSize, peakSize, baseSize], { clamp: true });
  const width = useSpring(widthTransform, { mass: 0.1, stiffness: 260, damping: 16 });

  // Upward elevation when magnified
  const yTransform = useTransform(distance, [-100, 0, 100], [0, isMobile ? -6 : -10, 0], { clamp: true });
  const ySpring = useSpring(yTransform, { mass: 0.1, stiffness: 260, damping: 16 });

  const handleClick = () => {
    setIsBouncing(true);
    setTimeout(() => setIsBouncing(false), 900);
    onClick();
  };

  return (
    <div className="relative flex flex-col items-center group">
      {/* macOS Frosted Pill Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 4, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 2, scale: 0.94 }}
            transition={{ duration: 0.12 }}
            className="absolute -top-9 z-50 pointer-events-none px-2.5 py-0.5 rounded-md bg-[#18181c]/90 backdrop-blur-xl border border-white/20 text-white text-[10px] font-sans font-medium shadow-[0_6px_16px_rgba(0,0,0,0.4)] whitespace-nowrap flex flex-col items-center"
          >
            <span>{item.name}</span>
            {/* Tooltip mini triangle caret */}
            <div className="absolute -bottom-1 w-2 h-1 overflow-hidden">
              <div className="w-1.5 h-1.5 bg-[#18181c] border-r border-b border-white/20 rotate-45 transform origin-top mx-auto" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scalable Icon Wrapper with macOS bounce physics */}
      <motion.div
        ref={ref}
        style={{
          width,
          height: width,
          y: ySpring,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
        animate={isBouncing ? { y: [0, -14, 0, -8, 0, -3, 0] } : undefined}
        transition={
          isBouncing
            ? { duration: 0.85, times: [0, 0.25, 0.5, 0.7, 0.85, 0.95, 1], ease: 'easeOut' }
            : undefined
        }
        className="cursor-pointer select-none origin-bottom transition-shadow active:scale-95"
      >
        {item.renderIcon(isBoxVisible)}
      </motion.div>

      {/* macOS Active Application Glowing Dot */}
      <div className="h-1.5 flex items-center justify-center mt-0.5">
        {item.isOpen ? (
          <span
            className={`w-1 h-1 rounded-full transition-all duration-300 ${
              item.isVesper
                ? isBoxVisible
                  ? 'bg-blue-400 shadow-[0_0_5px_rgba(96,165,250,0.9)] scale-110'
                  : 'bg-emerald-400 shadow-[0_0_5px_rgba(52,211,153,0.9)] animate-pulse'
                : 'bg-white/80 shadow-[0_0_3px_rgba(255,255,255,0.7)]'
            }`}
          />
        ) : (
          <span className="w-1 h-1 opacity-0" />
        )}
      </div>
    </div>
  );
};

export const MacDock: React.FC<MacDockProps> = ({ isBoxVisible, onToggleVesper }) => {
  const mouseX = useMotionValue(Infinity);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateMobile = () => setIsMobile(window.innerWidth < 640);
    updateMobile();
    window.addEventListener('resize', updateMobile);
    return () => window.removeEventListener('resize', updateMobile);
  }, []);

  // Core App definitions styled identically to native macOS icons
  const dockApps: DockItemData[] = [
    {
      id: 'finder',
      name: 'Finder',
      isOpen: true,
      renderIcon: () => (
        <div className="w-full h-full rounded-[22%] bg-gradient-to-b from-[#60c4ff] to-[#126fe8] p-[1.5px] shadow-[0_4px_10px_rgba(0,0,0,0.3)] border border-white/30 overflow-hidden relative flex items-center justify-center">
          {/* Top gloss highlight */}
          <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/35 to-transparent pointer-events-none rounded-t-[22%]" />
          <svg viewBox="0 0 48 48" className="w-full h-full">
            {/* Left face half lighter blue */}
            <path d="M5 10 C5 6 7 4 11 4 L24 4 L24 44 L11 44 C7 44 5 42 5 38 Z" fill="#6bd0ff" />
            {/* Right face half darker blue */}
            <path d="M24 4 L37 4 C41 4 43 6 43 10 L43 38 C43 42 41 44 37 44 L24 44 Z" fill="#1b6eeb" />
            {/* Nose line & smile */}
            <path d="M24 7 L24 28 C23 33 21 34 16 34" stroke="#003580" strokeWidth="2.4" strokeLinecap="round" fill="none" />
            <path d="M11 31 C14 36 34 36 37 31" stroke="#003580" strokeWidth="2.4" strokeLinecap="round" fill="none" />
            {/* Eyes */}
            <circle cx="16" cy="18" r="2.2" fill="#003580" />
            <circle cx="32" cy="18" r="2.2" fill="#003580" />
          </svg>
        </div>
      ),
    },
    {
      id: 'terminal',
      name: 'Terminal',
      isOpen: true,
      renderIcon: () => (
        <div className="w-full h-full rounded-[22%] bg-gradient-to-b from-[#34363b] via-[#1c1d22] to-[#0d0e11] p-1 shadow-[0_4px_10px_rgba(0,0,0,0.35)] border border-white/20 overflow-hidden relative flex flex-col justify-between">
          {/* Window micro dots */}
          <div className="flex items-center gap-0.5 pt-0.5 px-0.5 opacity-80">
            <span className="w-1 h-1 rounded-full bg-red-400/90" />
            <span className="w-1 h-1 rounded-full bg-yellow-400/90" />
            <span className="w-1 h-1 rounded-full bg-green-400/90" />
          </div>
          {/* Terminal prompt */}
          <div className="flex-1 flex items-center pl-1 font-mono font-bold text-emerald-400 text-[10px] sm:text-[12px] tracking-tight">
            <span>&gt;_</span>
            <span className="w-1 h-2 bg-emerald-400/90 ml-0.5 animate-pulse" />
          </div>
          <div className="absolute inset-0 rounded-[22%] border border-white/10 pointer-events-none" />
        </div>
      ),
    },
    {
      id: 'vscode',
      name: 'Visual Studio Code',
      isOpen: true,
      renderIcon: () => (
        <div className="w-full h-full rounded-[22%] bg-gradient-to-b from-[#2274c9] to-[#0c478a] p-1 shadow-[0_4px_10px_rgba(0,0,0,0.3)] border border-white/25 overflow-hidden relative flex items-center justify-center">
          <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/25 to-transparent pointer-events-none" />
          <svg viewBox="0 0 32 32" className="w-[75%] h-[75%] drop-shadow-sm">
            <path d="M23.5 3L8 15.5L3 11.5L1 12.5L7 18L1 23.5L3 24.5L8 20.5L23.5 33L29 29.5V6.5L23.5 3Z" fill="white" fillOpacity="0.95" />
            <path d="M23.5 7.5L11.5 18L23.5 28.5V7.5Z" fill="#78c2ff" />
          </svg>
        </div>
      ),
    },
    {
      id: 'safari',
      name: 'Safari',
      isOpen: true,
      renderIcon: () => (
        <div className="w-full h-full rounded-[22%] bg-gradient-to-b from-white to-[#d9dce3] p-[2px] shadow-[0_4px_10px_rgba(0,0,0,0.3)] border border-white/50 overflow-hidden relative flex items-center justify-center">
          {/* Blue dial */}
          <div className="w-[92%] h-[92%] rounded-full bg-gradient-to-b from-[#1c84ff] to-[#0250be] relative flex items-center justify-center shadow-inner overflow-hidden">
            {/* Dial graduations */}
            <div className="absolute inset-0 opacity-40">
              {[0, 30, 60, 90, 120, 150].map((deg) => (
                <div
                  key={deg}
                  className="absolute inset-x-0 top-1/2 h-[0.75px] bg-white -translate-y-1/2"
                  style={{ transform: `rotate(${deg}deg)` }}
                />
              ))}
            </div>
            {/* Compass Needle */}
            <div className="relative w-full h-full flex items-center justify-center rotate-45">
              <svg viewBox="0 0 24 24" className="w-[78%] h-[78%] drop-shadow-md">
                <polygon points="12,2 14.5,12 12,12" fill="#ff3b30" />
                <polygon points="12,2 9.5,12 12,12" fill="#e02820" />
                <polygon points="12,22 14.5,12 12,12" fill="#f5f5f7" />
                <polygon points="12,22 9.5,12 12,12" fill="#d2d2d7" />
                <circle cx="12" cy="12" r="1.3" fill="#ffffff" stroke="#999" strokeWidth="0.5" />
              </svg>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'vesper',
      name: 'Vesper Studio',
      isOpen: true,
      isVesper: true,
      renderIcon: (boxActive?: boolean) => (
        <div
          className={`w-full h-full rounded-[22%] bg-gradient-to-b from-[#3a68ff] via-[#1d42d4] to-[#0b1b68] p-1.5 shadow-[0_6px_14px_rgba(37,99,235,0.4)] border border-white/35 overflow-hidden relative flex items-center justify-center transition-all ${
            boxActive
              ? 'ring-2 ring-blue-400/80 shadow-[0_0_15px_rgba(59,130,246,0.6)]'
              : 'ring-1 ring-emerald-400/70 shadow-[0_0_12px_rgba(52,211,153,0.4)]'
          }`}
        >
          {/* Glass specular sheen */}
          <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent pointer-events-none rounded-t-[22%]" />
          <VesperLogo className="w-[72%] h-[72%] fill-white drop-shadow-[0_2px_6px_rgba(255,255,255,0.7)]" />
          {/* Status badge when stealth mode is active */}
          {!boxActive && (
            <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-emerald-400 ring-1 ring-white animate-ping" />
          )}
        </div>
      ),
    },
    {
      id: 'slack',
      name: 'Slack',
      isOpen: true,
      renderIcon: () => (
        <div className="w-full h-full rounded-[22%] bg-white p-1.5 shadow-[0_4px_10px_rgba(0,0,0,0.25)] border border-black/10 overflow-hidden relative flex items-center justify-center">
          <svg viewBox="0 0 127 127" className="w-[82%] h-[82%]">
            <path d="M27.2 80c0 7.3-5.9 13.2-13.2 13.2C6.7 93.2.8 87.3.8 80c0-7.3 5.9-13.2 13.2-13.2h13.2V80zm6.6 0c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2v33c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V80z" fill="#E01E5A"/>
            <path d="M47 27.2c-7.3 0-13.2-5.9-13.2-13.2C33.8 6.7 39.7.8 47 .8c7.3 0 13.2 5.9 13.2 13.2v13.2H47zm0 6.6c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H14C6.7 60.2.8 54.3.8 47c0-7.3 5.9-13.2 13.2-13.2H47z" fill="#36C5F0"/>
            <path d="M99.8 47c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H99.8V47zm-6.6 0c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V14c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2V47z" fill="#2EB67D"/>
            <path d="M80 99.8c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V99.8H80zm0-6.6c-7.3 0-13.2-5.9-13.2-13.2 0-7.3 5.9-13.2 13.2-13.2h33c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H80z" fill="#ECB22E"/>
          </svg>
        </div>
      ),
    },
    {
      id: 'notes',
      name: 'Notes',
      isOpen: false,
      renderIcon: () => (
        <div className="w-full h-full rounded-[22%] bg-[#faf9f5] shadow-[0_4px_10px_rgba(0,0,0,0.25)] border border-black/10 overflow-hidden relative flex flex-col">
          {/* Golden Yellow Memo Top */}
          <div className="h-[30%] bg-gradient-to-b from-[#ffd333] to-[#e8b900] border-b border-[#cfa500]/50 flex items-center px-1">
            <div className="w-1 h-1 rounded-full border border-black/20" />
          </div>
          {/* Ruled lines */}
          <div className="flex-1 p-1 flex flex-col justify-around">
            <div className="h-[1px] bg-zinc-300 w-[85%]" />
            <div className="h-[1px] bg-zinc-300 w-[95%]" />
            <div className="h-[1px] bg-zinc-300 w-[70%]" />
            <div className="h-[1px] bg-zinc-300 w-[80%]" />
          </div>
        </div>
      ),
    },
  ];

  const utilityApps: DockItemData[] = [
    {
      id: 'trash',
      name: 'Trash',
      isOpen: false,
      renderIcon: () => (
        <div className="w-full h-full rounded-[22%] bg-gradient-to-b from-white/20 to-white/5 backdrop-blur-md shadow-[0_4px_10px_rgba(0,0,0,0.25)] border border-white/20 overflow-hidden relative flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-[72%] h-[72%] text-zinc-300" fill="none" stroke="currentColor" strokeWidth="1.5">
            {/* Wastebasket rim */}
            <ellipse cx="12" cy="6" rx="7" ry="2.5" stroke="currentColor" fill="rgba(255,255,255,0.2)" />
            {/* Body */}
            <path d="M5 6 L7 20 C7.2 21 8.5 21.5 12 21.5 C15.5 21.5 16.8 21 17 20 L19 6" stroke="currentColor" fill="rgba(255,255,255,0.05)" />
            {/* Crumpled paper */}
            <path d="M9 7 Q11 4 13 6 Q15 5 14 8 Z" fill="rgba(255,255,255,0.7)" stroke="none" />
            <line x1="9" y1="8" x2="9.5" y2="19" stroke="currentColor" strokeOpacity="0.4" />
            <line x1="12" y1="8.5" x2="12" y2="19.5" stroke="currentColor" strokeOpacity="0.4" />
            <line x1="15" y1="8" x2="14.5" y2="19" stroke="currentColor" strokeOpacity="0.4" />
          </svg>
        </div>
      ),
    },
  ];

  return (
    <div className="relative mx-auto w-fit max-w-full flex items-end justify-center px-1">
      {/* macOS Dock Frosted Glass Shelf */}
      <motion.div
        onMouseMove={(e) => mouseX.set(e.clientX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="flex items-end gap-1 sm:gap-2 px-1.5 sm:px-3 pt-1.5 pb-0.5 sm:pb-1 rounded-[18px] sm:rounded-[22px] bg-white/[0.12] backdrop-blur-2xl border border-white/[0.22] shadow-[0_20px_40px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.4)] relative max-w-full overflow-x-auto cluely-scrollbar"
      >
        {/* Subtle glass reflection on the bottom edge */}
        <div className="absolute inset-x-4 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

        {/* Primary Apps */}
        {dockApps.map((item) => (
          <DockIconItem
            key={item.id}
            mouseX={mouseX}
            item={item}
            isBoxVisible={isBoxVisible}
            isMobile={isMobile}
            onClick={() => {
              if (item.isVesper) {
                onToggleVesper();
              }
            }}
          />
        ))}

        {/* macOS Dock Vertical Divider */}
        <div className="w-[1px] h-5 sm:h-6 bg-white/25 mx-0.5 sm:mx-1 self-center rounded-full" />

        {/* Utility Apps (Trash) */}
        {utilityApps.map((item) => (
          <DockIconItem
            key={item.id}
            mouseX={mouseX}
            item={item}
            isBoxVisible={isBoxVisible}
            isMobile={isMobile}
            onClick={() => {}}
          />
        ))}
      </motion.div>
    </div>
  );
};
