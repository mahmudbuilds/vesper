export interface Scenario {
  id: string;
  label: string;
  iconName: 'sparkles' | 'wand' | 'messageSquare' | 'refresh';
  text: string;
  hiddenOnMobile?: boolean;
}

export const SCENARIOS: Record<string, string> = {
  optimal: `"Optimal O(1) Solution: Pair a Hash Map with a Doubly Linked List. The hash map provides O(1) key lookups, while the doubly linked list maintains access recency with O(1) node splicing at the head. On eviction, pop the tail node and delete from the dictionary."`,
  verbal: `"What to say to the interviewer: 'I'll implement an LRU Cache with strict O(1) get and put operations. A standard dictionary alone doesn't track access ordering in O(1), and a single list requires O(n) eviction searches. By maintaining pseudo head and tail sentinel nodes in a doubly linked list, we avoid edge cases and guarantee constant time.'"`,
  edge: `"Critical edge cases to mention: 1) Capacity = 0 or 1. 2) Overwriting an existing key must update value AND bump recency without incrementing capacity count. 3) Cache hit on head or tail sentinels. 4) Memory leak prevention in C++ by deallocating evicted nodes."`,
  sysdesign: `"System Design Follow-up: For distributed scale, shard the cache using Consistent Hashing with virtual nodes. Use Redis clusters with Write-Through caching and add a Bloom Filter upfront to eliminate cache penetration on non-existent keys."`,
};

export const SCENARIO_CHIPS: Array<{ id: string; label: string; icon: string; hiddenOnMobile?: boolean }> = [
  { id: 'optimal', label: '⚡ Optimal O(1)', icon: 'sparkles' },
  { id: 'verbal', label: '💬 What to Say', icon: 'wand' },
  { id: 'edge', label: '🧪 Edge Cases', icon: 'messageSquare', hiddenOnMobile: true },
  { id: 'sysdesign', label: '📐 System Design', icon: 'refresh', hiddenOnMobile: true },
];

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How is Vesper undetectable during screen shares and recordings?',
    answer: 'Vesper utilizes hardware-level GPU overlay compositing (via DirectX on Windows and Metal on macOS) that bypasses operating-system window capture APIs. When Zoom, Google Meet, Teams, or Tuple record or transmit your screen, Vesper is excluded from the frame buffer completely.',
  },
  {
    id: 'faq-2',
    question: 'Does Vesper trigger proctoring or anti-cheat flags on CoderPad or HackerRank?',
    answer: 'No. Unlike browser extensions that hook into the DOM or trigger automated devtool inspection traps, Vesper runs as a completely independent sandboxed desktop process with zero browser injection, zero clipboard tampering, and zero network calls through your browser session.',
  },
  {
    id: 'faq-3',
    question: 'What programming languages and problem types are supported?',
    answer: 'Vesper supports Python, Java, C++, Go, TypeScript, Rust, C#, and SQL. It handles Data Structures & Algorithms (arrays, trees, graphs, dynamic programming), System Design architectures, concurrency, and SQL query optimizations with equal precision.',
  },
  {
    id: 'faq-4',
    question: 'How fast does Vesper generate optimal answers?',
    answer: 'Vesper begins token streaming within 40 milliseconds. By utilizing local neural quantization and instant AST grammar parsing, solutions appear in real time without lag or noticeable latency.',
  },
];

export const COMPATIBLE_PLATFORMS = [
  { name: 'LeetCode', color: 'bg-orange-500' },
  { name: 'HackerRank', color: 'bg-emerald-500' },
  { name: 'CoderPad', color: 'bg-blue-500' },
  { name: 'CodeSignal', color: 'bg-indigo-500' },
  { name: 'VS Code', color: 'bg-sky-500' },
  { name: 'Tuple', color: 'bg-purple-500' },
  { name: 'Zoom & Meet', color: 'bg-blue-600' },
];
