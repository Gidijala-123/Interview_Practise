import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Question, Answer, OnboardingData } from '@/lib/types';

interface QuizState {
  onboarding: OnboardingData | null;
  questions: Question[];
  answers: Record<string, Answer>;
  currentIndex: number;
  activeSection: 'mcq' | 'coding';
  timeRemaining: number; // seconds
  attemptId: string | null;

  setOnboarding: (data: OnboardingData) => void;
  setQuestions: (questions: Question[]) => void;
  setAnswer: (questionId: string, answer: Partial<Answer>) => void;
  setCurrentIndex: (index: number) => void;
  setActiveSection: (section: 'mcq' | 'coding') => void;
  setTimeRemaining: (time: number) => void;
  setAttemptId: (id: string) => void;
  reset: () => void;
}

const initialState = {
  onboarding: null,
  questions: [],
  answers: {},
  currentIndex: 0,
  activeSection: 'mcq' as const,
  timeRemaining: 30 * 60, // 30 minutes default
  attemptId: null,
};

export const useQuizStore = create<QuizState>()(
  persist(
    (set) => ({
      ...initialState,
      setOnboarding: (data) => set({ onboarding: data }),
      setQuestions: (questions) => set({ questions }),
      setAnswer: (questionId, answer) =>
        set((state) => ({
          answers: {
            ...state.answers,
            [questionId]: { ...state.answers[questionId], questionId, ...answer },
          },
        })),
      setCurrentIndex: (index) => set({ currentIndex: index }),
      setActiveSection: (section) => set({ activeSection: section }),
      setTimeRemaining: (time) => set({ timeRemaining: time }),
      setAttemptId: (id) => set({ attemptId: id }),
      reset: () => set(initialState),
    }),
    {
      name: 'interviewace-quiz', // localStorage key
      partialize: (state) => ({
        onboarding: state.onboarding,
        questions: state.questions,
        answers: state.answers,
        currentIndex: state.currentIndex,
        timeRemaining: state.timeRemaining,
        attemptId: state.attemptId,
      }),
    }
  )
);
