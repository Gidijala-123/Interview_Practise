'use client';

import { useEffect, useRef, useCallback } from 'react';
import { useQuizStore } from '@/store/quiz.store';

interface UseCountdownTimerOptions {
  onExpire?: () => void;
}

export function useCountdownTimer({ onExpire }: UseCountdownTimerOptions = {}) {
  const { timeRemaining, setTimeRemaining } = useQuizStore();
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const onExpireRef = useRef(onExpire);

  // Keep callback ref fresh without restarting the timer
  useEffect(() => {
    onExpireRef.current = onExpire;
  }, [onExpire]);

  const start = useCallback(() => {
    if (intervalRef.current) return; // already running
    intervalRef.current = setInterval(() => {
      setTimeRemaining(
        useQuizStore.getState().timeRemaining > 0
          ? useQuizStore.getState().timeRemaining - 1
          : 0
      );

      if (useQuizStore.getState().timeRemaining <= 0) {
        clearInterval(intervalRef.current!);
        intervalRef.current = null;
        onExpireRef.current?.();
      }
    }, 1000);
  }, [setTimeRemaining]);

  const stop = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const reset = useCallback(
    (seconds: number) => {
      stop();
      setTimeRemaining(seconds);
    },
    [stop, setTimeRemaining]
  );

  // Cleanup on unmount
  useEffect(() => () => stop(), [stop]);

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  const formatted = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  const isWarning = timeRemaining <= 300; // last 5 minutes
  const isDanger = timeRemaining <= 60;

  return { timeRemaining, formatted, isWarning, isDanger, start, stop, reset };
}
