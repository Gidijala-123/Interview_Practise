'use client';

import { useCountdownTimer } from '@/hooks/useCountdownTimer';
import { motion } from 'framer-motion';

interface TimerProps {
  onExpire?: () => void;
  autoStart?: boolean;
}

export function Timer({ onExpire, autoStart = true }: TimerProps) {
  const { formatted, isWarning, isDanger, start } = useCountdownTimer({ onExpire });

  // Auto-start on mount
  if (autoStart) start();

  return (
    <motion.div
      animate={isDanger ? { scale: [1, 1.05, 1] } : {}}
      transition={{ repeat: Infinity, duration: 1 }}
      className={`flex items-center gap-2 px-4 py-2 rounded-xl font-mono font-bold text-lg transition-colors ${isDanger
          ? 'bg-red-500/20 text-red-400 border border-red-500/40'
          : isWarning
            ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/40'
            : 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
        }`}
    >
      <span className="text-xs opacity-70">⏱</span>
      {formatted}
    </motion.div>
  );
}
