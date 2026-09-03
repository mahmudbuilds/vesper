(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const b of r.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&i(b)}).observe(document,{childList:!0,subtree:!0});function a(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=a(n);fetch(n.href,r)}})();const t={vesperLogo:'<svg class="size-4 shrink-0 fill-current" viewBox="0 0 24 24"><path d="M12 2L2 19.5h20L12 2zm0 4.5l6.5 11.5h-13L12 6.5z"/><polygon points="12 9 8.5 15.5 15.5 15.5"/></svg>',windows:'<svg class="size-4 shrink-0 fill-current" viewBox="0 0 24 24"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/></svg>',apple:'<svg class="size-4 shrink-0 fill-current" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.64 1.35-.57.65-1.06 1.73-.93 2.76 1.01.08 2.03-.51 2.65-1.26z"/></svg>',sparkles:'<svg class="size-3.5 shrink-0 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/></svg>',wand:'<svg class="size-3.5 shrink-0 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"/><path d="m14 7 3 3"/><path d="M5 6v4"/><path d="M19 14v4"/><path d="M10 2v2"/><path d="M7 8H3"/><path d="M21 16h-4"/><path d="M11 3H9"/></svg>',messageSquare:'<svg class="size-3.5 shrink-0 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',refresh:'<svg class="size-3.5 shrink-0 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>',zap:'<svg class="size-3 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',shield:'<svg class="size-3.5 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',chevronDown:'<svg class="size-3.5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',eyeOff:'<svg class="size-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg>',command:'<svg class="size-3 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"/></svg>',code:'<svg class="size-3.5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',cpu:'<svg class="size-3.5 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>',check:'<svg class="size-3.5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>'},k={optimal:'"Optimal O(1) Solution: Pair a Hash Map with a Doubly Linked List. The hash map provides O(1) key lookups, while the doubly linked list maintains access recency with O(1) node splicing at the head. On eviction, pop the tail node and delete from the dictionary."',verbal:`"What to say to the interviewer: 'I'll implement an LRU Cache with strict O(1) get and put operations. A standard dictionary alone doesn't track access ordering in O(1), and a single list requires O(n) eviction searches. By maintaining pseudo head and tail sentinel nodes in a doubly linked list, we avoid edge cases and guarantee constant time.'"`,edge:'"Critical edge cases to mention: 1) Capacity = 0 or 1. 2) Overwriting an existing key must update value AND bump recency without incrementing capacity count. 3) Cache hit on head or tail sentinels. 4) Memory leak prevention in C++ by deallocating evicted nodes."',sysdesign:'"System Design Follow-up: For distributed scale, shard the cache using Consistent Hashing with virtual nodes. Use Redis clusters with Write-Through caching and add a Bloom Filter upfront to eliminate cache penetration on non-existent keys."'},$=document.querySelector("#app");$.innerHTML=`
  <!-- Pinned Top-Right "Get for Desktop" Button -->
  <div class="fixed top-3.5 right-5 z-50">
    <a href="#download" class="cluely-primary-btn text-white text-xs font-semibold px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg shadow-blue-500/25 cursor-pointer smooth-hover">
      ${t.apple}
      <span>Get for macOS & Win</span>
    </a>
  </div>

  <!-- Transparent Header Navigation -->
  <header class="absolute top-0 left-0 right-0 z-40">
    <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <div class="flex items-center gap-8">
        <a href="#" class="flex items-center gap-2 text-white group">
          <div class="size-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
            ${t.vesperLogo}
          </div>
          <span class="text-xl font-bold tracking-tight text-white font-sans">Vesper</span>
        </a>
        <nav class="hidden md:flex items-center gap-6 text-sm font-medium text-white/90">
          <a href="#undetectability" class="hover:text-white transition-colors">Undetectability</a>
          <a href="#features" class="hover:text-white transition-colors">Real-time AST</a>
          <a href="#benchmarks" class="hover:text-white transition-colors">Benchmarks</a>
          <a href="#faq" class="hover:text-white transition-colors">FAQ</a>
        </nav>
      </div>
    </div>
  </header>

  <!-- ============================================== -->
  <!-- HERO SECTION                                   -->
  <!-- ============================================== -->
  <section id="hero-section" class="cluely-hero-gradient pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden relative">
    
    <div class="max-w-6xl mx-auto px-4 sm:px-6 text-center relative z-10">
      
      <!-- Headline in EB Garamond with Smooth Word Rise Animation -->
      <h1 class="font-serif text-[56px] sm:text-[76px] lg:text-[88px] font-normal leading-[0.96] tracking-[-1px] text-white max-w-3xl mx-auto drop-shadow-sm">
        <span class="inline-block overflow-hidden pb-1 align-bottom">
          <span class="inline-block animate-hero-word-rise">#1</span>
        </span>
        <span class="inline-block overflow-hidden pb-1 align-bottom">
          <span class="inline-block animate-hero-word-rise" style="animation-delay: 0.1s">Undetectable</span>
        </span>
        <br>
        <span class="inline-block overflow-hidden pb-1 align-bottom">
          <span class="inline-block animate-hero-word-rise" style="animation-delay: 0.2s">AI</span>
        </span>
        <span class="inline-block overflow-hidden pb-1 align-bottom">
          <span class="inline-block animate-hero-word-rise" style="animation-delay: 0.3s">for</span>
        </span>
        <span class="inline-block overflow-hidden pb-1 align-bottom">
          <span class="inline-block animate-hero-word-rise" style="animation-delay: 0.4s">Live</span>
        </span>
        <span class="inline-block overflow-hidden pb-1 align-bottom">
          <span class="inline-block animate-hero-word-rise" style="animation-delay: 0.5s">Coding</span>
        </span>
      </h1>

      <!-- Subtitle -->
      <p class="text-base sm:text-lg text-white/95 max-w-xl mx-auto mt-4 font-normal leading-snug drop-shadow-sm animate-hero-fade-up" style="animation-delay: 0.6s">
        Vesper writes optimal algorithms, analyzes time complexities, and solves system design questions in real time—completely undetectable during live technical interviews.
      </p>

      <!-- Central Hero CTA Buttons -->
      <div class="mt-6 flex items-center justify-center gap-3 animate-hero-fade-up" style="animation-delay: 0.7s">
        <a href="#download" class="cluely-primary-btn px-6 py-2.5 rounded-xl flex items-center gap-2 text-white text-sm font-semibold shadow-xl shadow-blue-600/30 smooth-hover cursor-pointer">
          ${t.apple}
          <span>Get Vesper for Desktop</span>
        </a>
        <div class="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-medium shadow-sm">
          <span class="size-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Zero-latency AST engine</span>
        </div>
      </div>

      <!-- AUTHENTIC CODING INTERVIEW DESKTOP DISPLAY -->
      <div class="perspective-container mt-12 max-w-5xl mx-auto slide-scale-init delay-150">
        <div id="tilt-card" class="tilt-element relative rounded-2xl shadow-2xl overflow-hidden border border-white/40 bg-[#121318]">
          
          <!-- Subtle Glow Backdrop -->
          <div class="absolute inset-0 bg-gradient-to-tr from-blue-900/30 via-transparent to-indigo-900/20 pointer-events-none"></div>

          <!-- Desktop Inner Screen Canvas -->
          <div class="relative w-full aspect-[1.7] flex flex-col justify-between p-2 sm:p-3 select-none">
            
            <!-- Top macOS Menu Bar -->
            <div class="flex items-center justify-between px-3 py-1 rounded-lg bg-black/40 text-white text-[11px] font-sans backdrop-blur-md border border-white/10">
              <div class="flex items-center gap-2">
                <span class="font-bold text-xs"></span>
                <span class="font-semibold text-[10px]">Vesper Studio</span>
                <span class="text-white/40">|</span>
                <span class="text-[10px] text-zinc-300 font-mono">LeetCode #146: LRU Cache (Hard)</span>
              </div>
              <div class="flex items-center gap-3 text-[10px] opacity-90">
                <span class="text-emerald-400 font-mono text-[10px]">● GPU Compositor 120 FPS</span>
                <span>WiFi</span>
                <span>100%</span>
                <span>Tue 10:42 AM</span>
              </div>
            </div>

            <!-- Authentic Live Coding Environment -->
            <div class="relative flex-1 flex items-center justify-center my-1">
              
              <!-- Code Editor Window -->
              <div class="w-full h-[95%] rounded-xl bg-[#181A20] border border-white/10 shadow-2xl p-3 sm:p-4 font-mono text-[11px] sm:text-xs text-left overflow-hidden flex flex-col">
                
                <!-- Editor Tab Bar -->
                <div class="flex items-center justify-between pb-2 border-b border-white/10 mb-2.5">
                  <div class="flex items-center gap-2">
                    <span class="size-2.5 rounded-full bg-red-500/80"></span>
                    <span class="size-2.5 rounded-full bg-yellow-500/80"></span>
                    <span class="size-2.5 rounded-full bg-green-500/80"></span>
                    <span class="ml-2 px-2 py-0.5 rounded bg-white/10 text-[10px] text-blue-300 font-sans font-medium flex items-center gap-1">
                      ${t.code}
                      solution.py
                    </span>
                  </div>
                  <div class="text-[10px] text-zinc-400 font-sans">
                    Python 3.12 · CoderPad Live Session
                  </div>
                </div>

                <!-- Code Lines -->
                <div class="space-y-1 text-zinc-300 overflow-hidden font-mono text-[11px] leading-relaxed select-text">
                  <div><span class="text-zinc-500">01</span> <span class="text-purple-400">class</span> <span class="text-yellow-300">Node</span>:</div>
                  <div><span class="text-zinc-500">02</span> &nbsp;&nbsp;<span class="text-purple-400">def</span> <span class="text-blue-400">__init__</span>(self, key: <span class="text-emerald-300">int</span>, val: <span class="text-emerald-300">int</span>):</div>
                  <div><span class="text-zinc-500">03</span> &nbsp;&nbsp;&nbsp;&nbsp;self.key, self.val = key, val</div>
                  <div><span class="text-zinc-500">04</span> &nbsp;&nbsp;&nbsp;&nbsp;self.prev, self.next = <span class="text-red-300">None</span>, <span class="text-red-300">None</span></div>
                  <div><span class="text-zinc-500">05</span></div>
                  <div><span class="text-zinc-500">06</span> <span class="text-purple-400">class</span> <span class="text-yellow-300">LRUCache</span>:</div>
                  <div><span class="text-zinc-500">07</span> &nbsp;&nbsp;<span class="text-purple-400">def</span> <span class="text-blue-400">__init__</span>(self, capacity: <span class="text-emerald-300">int</span>):</div>
                  <div><span class="text-zinc-500">08</span> &nbsp;&nbsp;&nbsp;&nbsp;self.cap = capacity</div>
                  <div><span class="text-zinc-500">09</span> &nbsp;&nbsp;&nbsp;&nbsp;self.cache = {} <span class="text-zinc-500"># key -> Node (O(1) lookups)</span></div>
                  <div><span class="text-zinc-500">10</span> &nbsp;&nbsp;&nbsp;&nbsp;self.head, self.tail = Node(0, 0), Node(0, 0)</div>
                  <div><span class="text-zinc-500">11</span> &nbsp;&nbsp;&nbsp;&nbsp;self.head.next, self.tail.prev = self.tail, self.head</div>
                </div>

              </div>

              <!-- Floating Top Capsule Controller [ ✦ Vesper v Hide ■ ] -->
              <div class="absolute top-2 inset-x-0 mx-auto w-fit z-30 flex items-center gap-2 px-3 py-1.5 rounded-full capsule-pill text-white text-xs shadow-2xl border border-white/20 slide-up-init delay-200">
                <div class="size-6 rounded-full bg-white/20 flex items-center justify-center text-white">
                  ${t.vesperLogo}
                </div>
                <button class="flex items-center gap-1 hover:text-white/80 font-medium text-[11px] px-2 py-0.5 rounded bg-white/10">
                  ${t.chevronDown}
                  <span>Hide</span>
                </button>
                <button class="size-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center" title="Mute overlay">
                  <span class="size-2 bg-white rounded-xs"></span>
                </button>
              </div>

              <!-- Floating Vesper Assistant Window Overlay (Private to Candidate) -->
              <div class="absolute inset-x-4 sm:inset-x-12 top-9 sm:top-12 mx-auto max-w-lg cluely-dark-hud p-4 text-white z-20 shadow-2xl border border-white/20 slide-up-init delay-300">
                
                <!-- Candidate Trigger Bubble (Right aligned in Blue) -->
                <div class="flex justify-end mb-2.5">
                  <span class="inline-flex items-center gap-1.5 text-[11px] font-sans bg-gradient-to-r from-[#0544a9] to-[#022c70] text-blue-100 px-3 py-1 rounded-xl rounded-br-sm shadow-md font-medium border border-blue-400/20">
                    ${t.zap}
                    <span>Optimal O(1) Solution?</span>
                  </span>
                </div>

                <!-- AI Streaming Answer with Realistic Micro-Typing -->
                <div class="text-xs font-sans text-gray-100 leading-relaxed min-h-[55px] p-2.5 bg-black/40 rounded-xl border border-white/10 cluely-scrollbar overflow-y-auto max-h-24">
                  <span id="streaming-text" class="text-zinc-100"></span>
                  <span id="cursor" class="inline-block w-1 h-3 bg-blue-400 ml-0.5 animate-pulse"></span>
                </div>

                <!-- Interactive Chips Bar -->
                <div class="flex flex-wrap items-center gap-1.5 pt-2.5 pb-2 text-[10px] text-gray-300">
                  <button class="scenario-chip chip-active flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 transition-all cursor-pointer" data-scenario="optimal">
                    ${t.sparkles}
                    <span>⚡ Optimal O(1)</span>
                  </button>
                  <span>·</span>
                  <button class="scenario-chip flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 transition-all cursor-pointer" data-scenario="verbal">
                    ${t.wand}
                    <span>💬 What to Say</span>
                  </button>
                  <span class="hidden sm:inline">·</span>
                  <button class="scenario-chip hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 transition-all cursor-pointer" data-scenario="edge">
                    ${t.messageSquare}
                    <span>🧪 Edge Cases</span>
                  </button>
                  <span class="hidden sm:inline">·</span>
                  <button class="scenario-chip hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 transition-all cursor-pointer" data-scenario="sysdesign">
                    ${t.refresh}
                    <span>📐 System Design</span>
                  </button>
                </div>

                <!-- Input Bar with "Ask about code or ⌘ ↵ for Instant Synthesis" -->
                <div class="relative rounded-xl border border-white/15 bg-black/50 p-1.5 flex items-center gap-2">
                  <input id="hud-input" type="text" placeholder="Ask about algorithm, complexity, or ⌘ ↵ for Instant Solution" class="w-full bg-transparent px-2.5 text-[11px] font-sans text-white placeholder-white/50 outline-none">
                  <button class="px-2 py-0.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-[10px] text-blue-300 flex items-center gap-1 shrink-0 font-mono">
                    ${t.zap}
                    <span>AST Active</span>
                  </button>
                  <button id="hud-submit" class="size-6 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0 hover:scale-105 active:scale-95 transition-transform cursor-pointer shadow-md">
                    <svg class="size-3 fill-current ml-0.5" viewBox="0 0 24 24"><path d="M2.5 1.5L10.5 6L2.5 10.5V1.5Z"/></svg>
                  </button>
                </div>

              </div>
            </div>

            <!-- macOS Developer Dock -->
            <div class="mx-auto w-fit flex items-center gap-2.5 px-3 py-1 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl">
              <div class="size-7 sm:size-8 rounded-lg bg-gray-900 border border-white/20 flex items-center justify-center text-green-400 font-mono text-[10px] shadow-sm hover:scale-110 transition-transform">
                &gt;_
              </div>
              <div class="size-7 sm:size-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xs shadow-sm hover:scale-110 transition-transform">
                ${t.code}
              </div>
              <div class="size-7 sm:size-8 rounded-lg bg-gradient-to-tr from-amber-500 to-orange-400 flex items-center justify-center text-white text-xs font-bold shadow-sm hover:scale-110 transition-transform">
                🌐
              </div>
              <div class="size-7 sm:size-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg ring-2 ring-white/80 hover:scale-110 transition-transform animate-glow-pulse">
                ${t.vesperLogo}
              </div>
              <div class="size-7 sm:size-8 rounded-lg bg-[#4A154B] flex items-center justify-center text-white text-xs font-bold shadow-sm hover:scale-110 transition-transform">
                #
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- ============================================================== -->
  <!-- SECTION 2: HOW VESPER HELPS DURING LIVE CODING                -->
  <!-- ============================================================== -->
  <section id="features" class="py-24 max-w-6xl mx-auto px-4 sm:px-6 bg-white overflow-hidden">
    
    <h2 class="text-3xl sm:text-5xl font-semibold tracking-tight text-[#19191D] mb-12 text-left slide-up-init">
      How Vesper helps during a live interview
    </h2>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      
      <!-- Card 1: Vesper listens to the prompt & parses code (Blue Card) -->
      <div class="blue-listen-card p-6 sm:p-8 md:p-9 text-white flex flex-col justify-between min-h-[460px] relative overflow-hidden slide-left-init">
        <div>
          <h3 class="text-xl sm:text-2xl font-semibold tracking-tight leading-snug">
            Vesper 
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 text-xs sm:text-sm font-sans align-middle font-normal shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="19" viewBox="0 0 14 19" fill="none"><line x1="1" y1="6" x2="1" y2="13" stroke="white" stroke-width="2" stroke-linecap="round"></line><line x1="5" y1="1" x2="5" y2="18" stroke="white" stroke-width="2" stroke-linecap="round"></line><line x1="9" y1="5" x2="9" y2="14" stroke="white" stroke-width="2" stroke-linecap="round"></line><line x1="13" y1="8" x2="13" y2="12" stroke="white" stroke-width="2" stroke-linecap="round"></line></svg>
              listens
            </span> 
            to the prompt & parses code
          </h3>
          <p class="mt-3 text-sm sm:text-base text-white/90 max-w-md leading-relaxed font-sans">
            It transcribes interviewer constraints in real time, parses the AST of your code editor, and generates optimal solutions before you even start typing.
          </p>
        </div>

        <!-- Center: 00:00 • Recording and Audio/Token Waveform -->
        <div class="my-auto py-8 text-center">
          <div class="font-sans text-5xl sm:text-6xl font-semibold tracking-tight text-white/95 tabular-nums">
            <span id="recording-counter">00:00</span>
          </div>
          <div class="flex items-center justify-center gap-2 mt-2 text-sm text-white/90 font-medium">
            <span class="size-2 rounded-full bg-emerald-300 animate-ping"></span>
            <span>Real-time AST & Audio Sync</span>
          </div>

          <!-- Dynamic Audio Bars Row -->
          <div id="audio-bars-row" class="flex items-center justify-center gap-1.5 mt-8 px-4 h-12">
            <!-- Dynamic vertical bars -->
          </div>
        </div>

        <!-- Bottom Telemetry Bar -->
        <div class="h-14 w-full rounded-2xl bg-black/20 backdrop-blur-sm border border-white/10 flex items-center justify-between px-4 text-xs font-sans text-white/80">
          <span class="flex items-center gap-1.5">
            ${t.cpu}
            <span>Local Neural Synthesizer</span>
          </span>
          <span class="text-emerald-300 font-semibold font-mono">Active · 0.04s latency</span>
        </div>
      </div>

      <!-- Card 2: When you need help, Vesper assists instantly (Gray Bento Card) -->
      <div class="gray-assist-card p-6 sm:p-8 md:p-9 text-[#19191D] flex flex-col justify-between min-h-[460px] relative overflow-hidden slide-right-init delay-150">
        <div>
          <h3 class="text-xl sm:text-2xl font-semibold tracking-tight text-[#19191D] leading-snug">
            When you need help, <span class="whitespace-nowrap">Vesper <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/70 backdrop-blur-xl border border-black/10 text-xs sm:text-sm font-sans align-middle text-[#19191D] font-normal">
              ${t.sparkles}
              assists
            </span></span><br class="hidden sm:inline" />
            you instantly
          </h3>
          <p class="mt-3 text-sm sm:text-base text-gray-500 max-w-md leading-relaxed font-sans">
            Hit Cmd/Ctrl + Enter and Vesper projects syntax-validated code, complexity proofs, and verbal explanations directly on your private HUD.
          </p>
        </div>

        <!-- Floating Capsule Controller -->
        <div class="flex justify-center my-4">
          <div class="flex items-center gap-2 px-3 py-1 rounded-full capsule-pill text-white text-xs shadow-lg border border-white/20">
            <div class="size-5 rounded-full bg-white/20 flex items-center justify-center text-white">
              ${t.vesperLogo}
            </div>
            <button class="flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded bg-white/10">
              ${t.chevronDown}
              <span>Hide</span>
            </button>
            <button class="size-5 rounded-full bg-white/10 flex items-center justify-center">
              <span class="size-2 bg-white rounded-xs"></span>
            </button>
          </div>
        </div>

        <!-- Translucent Dark Overlay Widget -->
        <div class="cluely-dark-hud p-4 text-white shadow-2xl rounded-2xl">
          <div class="flex items-center justify-between mb-2">
            <div class="flex items-center gap-1 text-[10px] text-emerald-400 font-mono">
              ${t.check}
              <span>100% Test Cases Passed</span>
            </div>
            <span class="px-2.5 py-0.5 rounded-md bg-blue-600 text-white text-[10px] font-semibold">O(1) Time</span>
          </div>
          <p class="text-xs text-gray-200 leading-relaxed font-sans font-mono bg-black/40 p-2 rounded-lg border border-white/10">
            <span class="text-purple-300">def</span> <span class="text-blue-300">get</span>(self, key):<br>
            &nbsp;&nbsp;<span class="text-purple-300">if</span> key <span class="text-purple-300">in</span> self.cache:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;self._remove(self.cache[key])<br>
            &nbsp;&nbsp;&nbsp;&nbsp;self._add(self.cache[key])<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-300">return</span> self.cache[key].val
          </p>

          <div class="flex flex-wrap items-center gap-2 pt-3 pb-2 text-[10px] text-gray-400">
            <span class="flex items-center gap-1 text-gray-300">${t.sparkles} O(1) Time</span>
            <span>·</span>
            <span class="flex items-center gap-1">${t.wand} What to say</span>
            <span>·</span>
            <span class="flex items-center gap-1">${t.messageSquare} Edge Cases</span>
            <span>·</span>
            <span class="flex items-center gap-1">${t.refresh} System Design</span>
          </div>
          <div class="rounded-xl border border-white/15 bg-black/40 p-1.5 flex items-center justify-between text-[11px] text-white/60">
            <span>Ask about time complexity or ⌘ ↵ for Instant Solution</span>
            <span class="size-5 rounded-full bg-blue-600 flex items-center justify-center text-white">▶</span>
          </div>
        </div>

      </div>

    </div>
  </section>

  <!-- ============================================================== -->
  <!-- SECTION 3: UNDETECTABLE IN EVERY WAY                           -->
  <!-- ============================================================== -->
  <section id="undetectability" class="py-24 max-w-6xl mx-auto px-4 sm:px-6 bg-white overflow-hidden">
    
    <!-- Title & Subtitle -->
    <div class="text-center max-w-2xl mx-auto mb-14 slide-up-init">
      <h2 class="text-4xl sm:text-6xl font-semibold tracking-tight text-[#19191D]">
        Undetectable in every way
      </h2>
      <p class="mt-3 text-base sm:text-lg text-gray-500 font-sans">
        Kernel-level graphics compositing designed so you can code with complete peace of mind.
      </p>
    </div>

    <!-- 3 Bento Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      <!-- Card 1: Zero Browser Injection / Proctor Safe -->
      <div class="flex flex-col slide-left-init">
        <div class="card-styles p-5 flex flex-col justify-between min-h-[340px]">
          <!-- Inner Security Table -->
          <div class="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div class="flex items-center justify-between pb-3 border-b border-gray-100">
              <span class="text-xs font-semibold text-gray-900">Sandbox Isolation <span class="text-gray-400 font-normal">(4/4)</span></span>
              <div class="flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-1 text-[10px] font-medium text-emerald-700">
                ${t.shield}
                <span>Zero Detection</span>
              </div>
            </div>

            <div class="mt-3 space-y-2.5 text-xs">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span class="size-2 rounded-full bg-emerald-500"></span>
                  <span class="font-medium text-gray-800 text-xs">No Browser Extensions</span>
                </div>
                <span class="text-gray-400 text-[10px]">Native C++</span>
              </div>

              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span class="size-2 rounded-full bg-emerald-500"></span>
                  <span class="font-medium text-gray-800 text-xs">Zero DOM Modifications</span>
                </div>
                <span class="text-gray-400 text-[10px]">Isolated</span>
              </div>

              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span class="size-2 rounded-full bg-emerald-500"></span>
                  <span class="font-medium text-gray-800 text-xs">CoderPad & HackerRank Safe</span>
                </div>
                <span class="text-gray-400 text-[10px]">Verified</span>
              </div>

              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span class="size-2 rounded-full bg-emerald-500"></span>
                  <span class="font-medium text-gray-800 text-xs">Honorlock & ProctorU Proof</span>
                </div>
                <span class="text-gray-400 text-[10px]">Encrypted RAM</span>
              </div>
            </div>
          </div>

          <!-- Bottom Vesper Stealth Toggle Bar -->
          <div class="mt-4 rounded-xl bg-gray-100 p-2.5 flex items-center justify-between text-xs text-gray-600 font-sans">
            <span class="flex items-center gap-2 font-medium">
              <span class="size-4 rounded-full bg-blue-600 flex items-center justify-center text-white text-[8px]">✦</span>
              Vesper Stealth Kernel
            </span>
            ${t.eyeOff}
          </div>
        </div>

        <p class="mt-4 text-sm text-gray-600 leading-relaxed font-sans">
          <strong class="text-gray-900 font-medium">Zero browser injection.</strong> Vesper never runs as an extension and modifies zero webpage DOM nodes, bypassing all automated proctoring software.
        </p>
      </div>

      <!-- Card 2: Interactive Screen Share Slider -->
      <div class="flex flex-col slide-up-init delay-150">
        <div class="card-styles p-4 flex flex-col justify-between min-h-[340px] relative overflow-hidden">
          
          <!-- Draggable Container with Before/After Screen Share View -->
          <div id="slider-container" class="relative rounded-xl overflow-hidden h-64 bg-[#181A20] border border-gray-200 select-none cursor-ew-resize">
            
            <!-- Base View: Clean IDE (Visible to Interviewer) -->
            <div class="absolute inset-0 w-full h-full p-4 font-mono text-[10px] text-zinc-300 bg-[#16171D]">
              <div class="text-zinc-500 mb-2 font-sans text-[11px] pb-1 border-b border-white/10">Interviewer Screen Share View</div>
              <div class="text-purple-400">class <span class="text-yellow-300">LRUCache</span>:</div>
              <div class="pl-4">&nbsp;&nbsp;<span class="text-purple-400">def</span> <span class="text-blue-400">__init__</span>(self, capacity):</div>
              <div class="pl-8">&nbsp;&nbsp;&nbsp;&nbsp;self.cap = capacity</div>
              <div class="pl-4">&nbsp;&nbsp;<span class="text-purple-400">def</span> <span class="text-blue-400">get</span>(self, key):</div>
              <div class="pl-8">&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-zinc-500"># Candidate typing here...</span></div>
            </div>
            <span class="absolute top-2 right-2 px-2 py-0.5 rounded bg-gray-800 text-white text-[9px] font-sans font-semibold z-10">Invisible to interviewer</span>

            <!-- Foreground View: Vesper Private Overlay (Visible to Candidate) -->
            <div id="slider-foreground" class="absolute inset-0 overflow-hidden bg-[#16171D]" style="width: 50%;">
              <div class="absolute inset-0 w-[200%] h-full p-4 font-mono text-[10px] text-zinc-300">
                <div class="text-zinc-500 mb-2 font-sans text-[11px] pb-1 border-b border-white/10">Candidate Screen (With Vesper)</div>
                <div class="text-purple-400">class <span class="text-yellow-300">LRUCache</span>:</div>
                <div class="pl-4">&nbsp;&nbsp;<span class="text-purple-400">def</span> <span class="text-blue-400">__init__</span>(self, capacity):</div>
                <div class="pl-8">&nbsp;&nbsp;&nbsp;&nbsp;self.cap = capacity</div>
                <div class="pl-4">&nbsp;&nbsp;<span class="text-purple-400">def</span> <span class="text-blue-400">get</span>(self, key):</div>
                <div class="pl-8">&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-zinc-500"># Candidate typing here...</span></div>
              </div>
              
              <!-- Neon Border Frame -->
              <div class="absolute inset-1 rounded-xl border-2 border-[#00FF26] pointer-events-none z-20"></div>
              <span class="absolute top-2 left-2 px-2 py-0.5 rounded bg-gray-800 text-white text-[9px] font-sans font-semibold z-20">Visible to you</span>

              <!-- Floating AI Response Card on Top -->
              <div class="absolute top-10 left-3 right-3 rounded-xl bg-black/90 p-3 shadow-xl border border-blue-500/40 text-gray-200 text-[10px] font-sans z-10 backdrop-blur-md">
                <div class="flex items-center justify-between font-semibold text-blue-400 pb-1 border-b border-white/10">
                  <span class="flex items-center gap-1">${t.sparkles} Vesper Hint</span>
                  <span class="text-[9px] text-emerald-400">O(1) Guarantee</span>
                </div>
                <p class="mt-1 text-[10px] leading-relaxed text-zinc-300 font-mono">
                  Move node to head on get/put. If len > cap, evict tail.prev and remove from hash map.
                </p>
              </div>
            </div>

            <!-- Divider Line with < > icon handle -->
            <div id="slider-handle" class="absolute top-0 bottom-0 -ml-3 z-30 flex items-center justify-center pointer-events-none" style="left: 50%;">
              <div class="size-6 rounded-full bg-gray-900 text-white shadow-xl flex items-center justify-center text-[11px] font-bold border border-white/20">
                ↔
              </div>
            </div>

          </div>
        </div>

        <p class="mt-4 text-sm text-gray-600 leading-relaxed font-sans">
          <strong class="text-gray-900 font-medium">Invisible to screen share.</strong> Direct GPU compositor hooks ensure Vesper never appears in Zoom, Google Meet, Teams, or Tuple recordings.
        </p>
      </div>

      <!-- Card 3: Moveable HUD with Tactile Keyboard Controls -->
      <div class="flex flex-col slide-right-init delay-300">
        <div class="card-styles p-4 flex flex-col justify-between min-h-[340px]">
          
          <!-- Virtual Desktop Screen -->
          <div class="relative h-48 rounded-xl overflow-hidden border border-gray-200 shadow-inner bg-gradient-to-br from-[#1c2230] to-[#0f1118]">
            <div class="absolute top-2 left-2 flex items-center gap-1.5 text-[9px] text-white/50 font-mono">
              <span class="size-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Webcam Eye-Line Alignment</span>
            </div>

            <!-- Moveable AI Response Window -->
            <div id="hud-mover-box" class="absolute w-44 rounded-xl bg-black/75 backdrop-blur-md border border-blue-400/30 p-2.5 text-white text-[9px] shadow-2xl transition-all duration-300 ease-out" style="top: 25px; left: 15%;">
              <div class="flex items-center gap-1 font-semibold text-[9px] text-blue-300 mb-1">
                ${t.sparkles}
                <span>Vesper Active HUD</span>
              </div>
              <div class="h-1.5 w-full bg-blue-400/50 rounded-full mb-1"></div>
              <div class="h-1.5 w-3/4 bg-white/40 rounded-full"></div>
            </div>
          </div>

          <!-- Tactile Keyboard Controller Tray -->
          <div class="mt-3 p-2 rounded-xl bg-[linear-gradient(180deg,#EEEFF1_30.83%,#E3E4E9_100%)] shadow-sm border border-gray-200 flex items-center justify-between">
            <button class="relative flex h-8 px-3 items-center gap-1.5 rounded-md border border-gray-300 bg-white shadow-xs text-xs font-semibold text-gray-700">
              ${t.command}
              <span class="text-[10px]">command</span>
            </button>
            <span class="text-gray-400 font-bold text-xs">+</span>
            <div class="flex items-center gap-1">
              <button id="move-up" class="size-8 flex items-center justify-center rounded-md border border-gray-300 bg-white shadow-xs text-xs font-bold text-gray-700 hover:bg-gray-50 active:scale-95 transition-all">↑</button>
              <button id="move-down" class="size-8 flex items-center justify-center rounded-md border border-gray-300 bg-white shadow-xs text-xs font-bold text-gray-700 hover:bg-gray-50 active:scale-95 transition-all">↓</button>
              <button id="move-left" class="size-8 flex items-center justify-center rounded-md border border-gray-300 bg-white shadow-xs text-xs font-bold text-gray-700 hover:bg-gray-50 active:scale-95 transition-all">←</button>
              <button id="move-right" class="size-8 flex items-center justify-center rounded-md border border-gray-300 bg-white shadow-xs text-xs font-bold text-gray-700 hover:bg-gray-50 active:scale-95 transition-all">→</button>
            </div>
          </div>

        </div>

        <p class="mt-4 text-sm text-gray-600 leading-relaxed font-sans">
          <strong class="text-gray-900 font-medium">Follows your eye gaze.</strong> Reposition the transparent HUD right below your camera so your eye contact remains 100% steady and confident.
        </p>
      </div>

    </div>
  </section>

  <!-- ============================================== -->
  <!-- COMPATIBILITY ROW                              -->
  <!-- ============================================== -->
  <section id="benchmarks" class="py-16 max-w-6xl mx-auto px-4 text-center border-t border-gray-100 overflow-hidden slide-up-init">
    <span class="text-xs font-semibold tracking-widest text-[#8C929D] uppercase block mb-8">
      Compatible with every interview & coding platform
    </span>
    <!-- Dynamic Sliding Marquee -->
    <div class="relative overflow-hidden w-full py-3 mask-gradient">
      <div class="animate-marquee items-center gap-10 sm:gap-14">
        <div class="flex items-center gap-2 text-[#3D4150] font-medium text-sm px-4 py-2 rounded-xl bg-gray-50 border border-gray-100 shadow-xs">
          <span class="size-2.5 rounded-full bg-orange-500"></span>
          <span>LeetCode</span>
        </div>
        <div class="flex items-center gap-2 text-[#3D4150] font-medium text-sm px-4 py-2 rounded-xl bg-gray-50 border border-gray-100 shadow-xs">
          <span class="size-2.5 rounded-full bg-emerald-500"></span>
          <span>HackerRank</span>
        </div>
        <div class="flex items-center gap-2 text-[#3D4150] font-medium text-sm px-4 py-2 rounded-xl bg-gray-50 border border-gray-100 shadow-xs">
          <span class="size-2.5 rounded-full bg-blue-500"></span>
          <span>CoderPad</span>
        </div>
        <div class="flex items-center gap-2 text-[#3D4150] font-medium text-sm px-4 py-2 rounded-xl bg-gray-50 border border-gray-100 shadow-xs">
          <span class="size-2.5 rounded-full bg-indigo-500"></span>
          <span>CodeSignal</span>
        </div>
        <div class="flex items-center gap-2 text-[#3D4150] font-medium text-sm px-4 py-2 rounded-xl bg-gray-50 border border-gray-100 shadow-xs">
          <span class="size-2.5 rounded-full bg-sky-500"></span>
          <span>VS Code</span>
        </div>
        <div class="flex items-center gap-2 text-[#3D4150] font-medium text-sm px-4 py-2 rounded-xl bg-gray-50 border border-gray-100 shadow-xs">
          <span class="size-2.5 rounded-full bg-purple-500"></span>
          <span>Tuple</span>
        </div>
        <div class="flex items-center gap-2 text-[#3D4150] font-medium text-sm px-4 py-2 rounded-xl bg-gray-50 border border-gray-100 shadow-xs">
          <span class="size-2.5 rounded-full bg-blue-600"></span>
          <span>Zoom & Meet</span>
        </div>
        <!-- Duplicated for seamless loop -->
        <div class="flex items-center gap-2 text-[#3D4150] font-medium text-sm px-4 py-2 rounded-xl bg-gray-50 border border-gray-100 shadow-xs">
          <span class="size-2.5 rounded-full bg-orange-500"></span>
          <span>LeetCode</span>
        </div>
        <div class="flex items-center gap-2 text-[#3D4150] font-medium text-sm px-4 py-2 rounded-xl bg-gray-50 border border-gray-100 shadow-xs">
          <span class="size-2.5 rounded-full bg-emerald-500"></span>
          <span>HackerRank</span>
        </div>
        <div class="flex items-center gap-2 text-[#3D4150] font-medium text-sm px-4 py-2 rounded-xl bg-gray-50 border border-gray-100 shadow-xs">
          <span class="size-2.5 rounded-full bg-blue-500"></span>
          <span>CoderPad</span>
        </div>
        <div class="flex items-center gap-2 text-[#3D4150] font-medium text-sm px-4 py-2 rounded-xl bg-gray-50 border border-gray-100 shadow-xs">
          <span class="size-2.5 rounded-full bg-indigo-500"></span>
          <span>CodeSignal</span>
        </div>
        <div class="flex items-center gap-2 text-[#3D4150] font-medium text-sm px-4 py-2 rounded-xl bg-gray-50 border border-gray-100 shadow-xs">
          <span class="size-2.5 rounded-full bg-sky-500"></span>
          <span>VS Code</span>
        </div>
        <div class="flex items-center gap-2 text-[#3D4150] font-medium text-sm px-4 py-2 rounded-xl bg-gray-50 border border-gray-100 shadow-xs">
          <span class="size-2.5 rounded-full bg-purple-500"></span>
          <span>Tuple</span>
        </div>
        <div class="flex items-center gap-2 text-[#3D4150] font-medium text-sm px-4 py-2 rounded-xl bg-gray-50 border border-gray-100 shadow-xs">
          <span class="size-2.5 rounded-full bg-blue-600"></span>
          <span>Zoom & Meet</span>
        </div>
      </div>
    </div>
  </section>

  <!-- ============================================== -->
  <!-- FAQ ACCORDION SECTION                          -->
  <!-- ============================================== -->
  <section id="faq" class="py-20 max-w-3xl mx-auto px-4 sm:px-6 border-t border-gray-100 overflow-hidden">
    <h2 class="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-10 slide-up-init">
      Frequently asked questions
    </h2>

    <div class="space-y-4 font-sans text-sm">
      <div class="border-b border-gray-200 pb-4 slide-left-init delay-100">
        <button class="faq-question w-full flex items-center justify-between py-2 text-left font-medium text-base sm:text-lg text-gray-900 hover:text-blue-600 transition-colors">
          <span>How is Vesper undetectable during screen shares and recordings?</span>
          <span class="faq-chevron transition-transform duration-300 text-gray-400">${t.chevronDown}</span>
        </button>
        <div class="accordion-wrapper">
          <div class="accordion-content pt-2 text-gray-600 text-xs sm:text-sm leading-relaxed">
            Vesper utilizes hardware-level GPU overlay compositing (via DirectX on Windows and Metal on macOS) that bypasses operating-system window capture APIs. When Zoom, Google Meet, Teams, or Tuple record or transmit your screen, Vesper is excluded from the frame buffer completely.
          </div>
        </div>
      </div>

      <div class="border-b border-gray-200 pb-4 slide-right-init delay-200">
        <button class="faq-question w-full flex items-center justify-between py-2 text-left font-medium text-base sm:text-lg text-gray-900 hover:text-blue-600 transition-colors">
          <span>Does Vesper trigger proctoring or anti-cheat flags on CoderPad or HackerRank?</span>
          <span class="faq-chevron transition-transform duration-300 text-gray-400">${t.chevronDown}</span>
        </button>
        <div class="accordion-wrapper">
          <div class="accordion-content pt-2 text-gray-600 text-xs sm:text-sm leading-relaxed">
            No. Unlike browser extensions that hook into the DOM or trigger automated devtool inspection traps, Vesper runs as a completely independent sandboxed desktop process with zero browser injection, zero clipboard tampering, and zero network calls through your browser session.
          </div>
        </div>
      </div>

      <div class="border-b border-gray-200 pb-4 slide-left-init delay-300">
        <button class="faq-question w-full flex items-center justify-between py-2 text-left font-medium text-base sm:text-lg text-gray-900 hover:text-blue-600 transition-colors">
          <span>What programming languages and problem types are supported?</span>
          <span class="faq-chevron transition-transform duration-300 text-gray-400">${t.chevronDown}</span>
        </button>
        <div class="accordion-wrapper">
          <div class="accordion-content pt-2 text-gray-600 text-xs sm:text-sm leading-relaxed">
            Vesper supports Python, Java, C++, Go, TypeScript, Rust, C#, and SQL. It handles Data Structures & Algorithms (arrays, trees, graphs, dynamic programming), System Design architectures, concurrency, and SQL query optimizations with equal precision.
          </div>
        </div>
      </div>

      <div class="border-b border-gray-200 pb-4 slide-right-init delay-400">
        <button class="faq-question w-full flex items-center justify-between py-2 text-left font-medium text-base sm:text-lg text-gray-900 hover:text-blue-600 transition-colors">
          <span>How fast does Vesper generate optimal answers?</span>
          <span class="faq-chevron transition-transform duration-300 text-gray-400">${t.chevronDown}</span>
        </button>
        <div class="accordion-wrapper">
          <div class="accordion-content pt-2 text-gray-600 text-xs sm:text-sm leading-relaxed">
            Vesper begins token streaming within 40 milliseconds. By utilizing local neural quantization and instant AST grammar parsing, solutions appear in real time without lag or noticeable latency.
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============================================== -->
  <!-- PRE-FOOTER CTA SECTION                         -->
  <!-- ============================================== -->
  <section id="download" class="py-24 bg-gradient-to-b from-[#F5F8FD] via-[#EAEEF6] to-[#DDE2EE] relative overflow-hidden px-6 sm:px-12 border-t border-gray-100">
    <div class="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
      
      <!-- Left text & button -->
      <div class="max-w-xl text-left slide-left-init">
        <h2 class="text-3xl sm:text-[38px] font-semibold text-gray-900 leading-[1.15] tracking-tight">
          Coding AI that helps during the interview, not after.
        </h2>
        <p class="mt-1.5 text-3xl sm:text-[38px] font-semibold leading-[1.15] tracking-tight gradient-text-subtle">
          Ace your next technical screen with Vesper.
        </p>

        <div class="mt-8 flex items-center gap-3">
          <a href="#download" class="cluely-black-btn text-white text-xs font-semibold px-5 py-3 rounded-xl inline-flex items-center gap-2.5 shadow-xl cursor-pointer smooth-hover">
            ${t.apple}
            <span>Download for macOS</span>
          </a>
          <a href="#download" class="bg-white/80 hover:bg-white text-gray-800 text-xs font-semibold px-5 py-3 rounded-xl inline-flex items-center gap-2.5 shadow-md border border-gray-200 cursor-pointer smooth-hover">
            ${t.windows}
            <span>Download for Windows</span>
          </a>
        </div>
      </div>

      <!-- Right: Real 3D Rendered Keycaps with Buttery Floating Animations -->
      <div class="relative w-full max-w-sm h-64 flex items-center justify-center pointer-events-none slide-right-init delay-200">
        <div class="animate-float-1 absolute left-4 size-32 sm:size-36 drop-shadow-2xl">
          <img src="https://cluely.com/_next/static/media/command-btn.05a11379.png" alt="Command Key" class="w-full h-full object-contain">
        </div>
        <div class="animate-float-2 absolute right-6 -top-2 size-36 sm:size-40 drop-shadow-2xl">
          <img src="https://cluely.com/_next/static/media/return-active.30ff0cd8.png" alt="Return Key" class="w-full h-full object-contain">
        </div>
      </div>

    </div>
  </section>

  <!-- ============================================== -->
  <!-- FOOTER                                         -->
  <!-- ============================================== -->
  <footer class="bg-[#DDE2EE] text-[#19191D] pt-16 pb-12 font-sans border-t border-[#BBC5DD]">
    <div class="max-w-6xl mx-auto px-6">
      
      <!-- Top Row: Logo & 4 Columns -->
      <div class="flex flex-col lg:flex-row lg:justify-between gap-12 pb-12">
        <!-- Logo -->
        <div>
          <a href="#" class="flex items-center gap-2">
            <div class="size-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs">
              ${t.vesperLogo}
            </div>
            <span class="text-xl font-bold tracking-tight text-[#19191D]">Vesper</span>
          </a>
          <p class="text-xs text-gray-500 mt-2 max-w-xs">
            The undetectable AI copilot engineered for live coding, algorithmic problem solving, and architecture design.
          </p>
        </div>

        <!-- 4 Columns of Navigation -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 text-xs">
          <!-- Product -->
          <div>
            <h4 class="font-semibold text-gray-900 mb-3.5">Product</h4>
            <ul class="space-y-2.5 text-gray-600">
              <li><a href="#download" class="hover:text-blue-700 transition-colors">Download</a></li>
              <li><a href="#" class="hover:text-blue-700 transition-colors">Benchmarks</a></li>
              <li><a href="#undetectability" class="hover:text-blue-700 transition-colors">Undetectability</a></li>
              <li><a href="#" class="hover:text-blue-700 transition-colors">Changelog</a></li>
            </ul>
          </div>

          <!-- Resources -->
          <div>
            <h4 class="font-semibold text-gray-900 mb-3.5">Resources</h4>
            <ul class="space-y-2.5 text-gray-600">
              <li>
                <a href="#" class="hover:text-blue-700 transition-colors flex items-center gap-1.5">
                  <span>Language ASTs</span>
                  <span class="bg-[#2563EB] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">New</span>
                </a>
              </li>
              <li><a href="#" class="hover:text-blue-700 transition-colors">LeetCode Guide</a></li>
              <li><a href="#" class="hover:text-blue-700 transition-colors">System Design Cheat Sheet</a></li>
              <li><a href="#" class="hover:text-blue-700 transition-colors">Security Whitepaper</a></li>
            </ul>
          </div>

          <!-- Compare -->
          <div>
            <h4 class="font-semibold text-gray-900 mb-3.5">Compare</h4>
            <ul class="space-y-2.5 text-gray-600">
              <li><a href="#" class="hover:text-blue-700 transition-colors">Vesper vs Copilot</a></li>
              <li><a href="#" class="hover:text-blue-700 transition-colors">Vesper vs Cursor</a></li>
              <li><a href="#" class="hover:text-blue-700 transition-colors">Vesper vs ChatGPT</a></li>
              <li><a href="#" class="hover:text-blue-700 transition-colors">Why In-Call AI Wins</a></li>
            </ul>
          </div>

          <!-- Support -->
          <div>
            <h4 class="font-semibold text-gray-900 mb-3.5">Support</h4>
            <ul class="space-y-2.5 text-gray-600">
              <li><a href="#" class="hover:text-blue-700 transition-colors">Privacy Policy</a></li>
              <li><a href="#" class="hover:text-blue-700 transition-colors">Terms of Service</a></li>
              <li><a href="#" class="hover:text-blue-700 transition-colors">Documentation</a></li>
              <li><a href="#" class="hover:text-blue-700 transition-colors">Discord Community</a></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Middle: Status Pill -->
      <div class="pt-4 pb-8">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/75 text-gray-700 text-xs font-medium border border-gray-200 shadow-xs">
          <span class="size-2 rounded-full bg-emerald-500 animate-pulse"></span>
          All neural inference clusters operational · 40ms avg response
        </div>
      </div>

      <!-- Bottom: Copyright & Social Icons -->
      <div class="pt-6 border-t border-[#BBC5DD]/70 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
        <p>© 2026 Vesper Technologies Inc. All rights reserved.</p>
        <div class="flex items-center gap-5 text-gray-700">
          <a href="#" class="hover:text-black transition-colors" title="X (Twitter)">
            <svg class="size-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="#" class="hover:text-black transition-colors" title="Discord">
            <svg class="size-4 fill-current" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
          </a>
          <a href="#" class="hover:text-black transition-colors" title="GitHub">
            <svg class="size-4 fill-current" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>
          </a>
        </div>
      </div>

    </div>
  </footer>
`;const p=document.getElementById("hero-section"),C=document.getElementById("tilt-card");let g=0,f=0,h=0,v=0;if(p&&C){let e=function(){h+=(g-h)*.08,v+=(f-v)*.08,C.style.transform=`rotateX(${h.toFixed(2)}deg) rotateY(${v.toFixed(2)}deg)`,requestAnimationFrame(e)};var P=e;p.addEventListener("mousemove",s=>{const a=p.getBoundingClientRect(),i=s.clientX-a.left-a.width/2,n=s.clientY-a.top-a.height/2;f=i/(a.width/2)*3.5,g=-(n/(a.height/2))*3.5}),p.addEventListener("mouseleave",()=>{g=0,f=0}),requestAnimationFrame(e)}const E=document.getElementById("streaming-text"),S=document.querySelectorAll(".scenario-chip");let y=null;function z(e){y&&clearTimeout(y),E.textContent="";let s=0;function a(){if(s<e.length){E.textContent+=e[s];const i=e[s];s++;let n=Math.floor(Math.random()*8)+14;i==="."||i==="?"?n=140:(i===","||i===":")&&(n=65),y=setTimeout(a,n)}}a()}z(k.optimal);S.forEach(e=>{e.addEventListener("click",()=>{S.forEach(a=>a.classList.remove("chip-active")),e.classList.add("chip-active");const s=e.dataset.scenario;k[s]&&z(k[s])})});const m=document.getElementById("hud-input"),D=document.getElementById("hud-submit");function L(){const e=m.value.trim();e&&(z(`"Analyzing: '${e}'. Vesper Recommendation: Use two-pointer traversal to prune branches in O(1) space, avoiding hash map overhead."`),m.value="")}D&&m&&(D.addEventListener("click",L),m.addEventListener("keydown",e=>{e.key==="Enter"&&L()}));const B=document.getElementById("audio-bars-row"),R=36,j=[];if(B){for(let s=0;s<R;s++){const a=document.createElement("div");a.className="w-1 sm:w-1.5 rounded-full bg-white/70 transition-all duration-75",a.style.height="20%",B.appendChild(a),j.push(a)}let e=0;setInterval(()=>{j.forEach((s,a)=>{const i=Math.sin(e+a*.32)*.35+Math.cos(e*.7+a*.15)*.2+.5,n=Math.max(12,Math.min(100,Math.floor(i*95)));s.style.height=`${n}%`,s.style.opacity=`${.35+i*.65}`}),e+=.22},75)}let w=0;const M=document.getElementById("recording-counter");setInterval(()=>{w++;const e=String(Math.floor(w/60)).padStart(2,"0"),s=String(w%60).padStart(2,"0");M&&(M.textContent=`${e}:${s}`)},1e3);const u=document.getElementById("slider-container"),H=document.getElementById("slider-foreground"),q=document.getElementById("slider-handle");let l=!1;function x(e){const s=u.getBoundingClientRect(),i=Math.max(0,Math.min(e-s.left,s.width))/s.width*100;H.style.width=`${i}%`,q.style.left=`${i}%`}u&&(u.addEventListener("mousedown",e=>{l=!0,x(e.clientX)}),window.addEventListener("mousemove",e=>{l&&x(e.clientX)}),window.addEventListener("mouseup",()=>{l=!1}),u.addEventListener("touchstart",e=>{l=!0,e.touches.length>0&&x(e.touches[0].clientX)}),window.addEventListener("touchmove",e=>{!l||e.touches.length===0||x(e.touches[0].clientX)}),window.addEventListener("touchend",()=>{l=!1}));const o=document.getElementById("hud-mover-box");let d=15,c=25;var I;(I=document.getElementById("move-left"))==null||I.addEventListener("click",()=>{d=Math.max(5,d-12),o&&(o.style.left=`${d}%`)});var T;(T=document.getElementById("move-right"))==null||T.addEventListener("click",()=>{d=Math.min(45,d+12),o&&(o.style.left=`${d}%`)});var O;(O=document.getElementById("move-up"))==null||O.addEventListener("click",()=>{c=Math.max(10,c-12),o&&(o.style.top=`${c}px`)});var V;(V=document.getElementById("move-down"))==null||V.addEventListener("click",()=>{c=Math.min(70,c+12),o&&(o.style.top=`${c}px`)});document.querySelectorAll(".faq-question").forEach(e=>{e.addEventListener("click",()=>{const s=e.nextElementSibling,a=e.querySelector(".faq-chevron"),i=s.classList.contains("open");document.querySelectorAll(".accordion-wrapper").forEach(n=>n.classList.remove("open")),document.querySelectorAll(".faq-chevron").forEach(n=>n.classList.remove("rotate-180")),i||(s.classList.add("open"),a.classList.add("rotate-180"))})});const A=document.querySelectorAll(".slide-up-init, .slide-left-init, .slide-right-init, .slide-scale-init, .reveal-init");if("IntersectionObserver"in window){const e=new IntersectionObserver(s=>{s.forEach(a=>{a.isIntersecting&&(a.target.classList.add("slide-active"),a.target.classList.add("reveal-visible"))})},{threshold:.08,rootMargin:"0px 0px -30px 0px"});A.forEach(s=>e.observe(s))}else A.forEach(e=>{e.classList.add("slide-active"),e.classList.add("reveal-visible")});window.addEventListener("DOMContentLoaded",()=>{setTimeout(()=>{document.querySelectorAll("#hero-section .slide-up-init, #hero-section .slide-scale-init").forEach(e=>{e.classList.add("slide-active")})},100)});
