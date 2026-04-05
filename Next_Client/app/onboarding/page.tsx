'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useQuizStore } from '@/store/quiz.store';
import type { Domain, Difficulty, ExperienceLevel } from '@/lib/types';

const DOMAINS: Domain[] = ['Frontend', 'Backend', 'Fullstack', 'DevOps', 'Mobile'];
const LEVELS: { value: ExperienceLevel; label: string }[] = [
  { value: '0-2', label: '0–2 years (Junior)' },
  { value: '3-5', label: '3–5 years (Mid-level)' },
  { value: '5+', label: '5+ years (Senior)' },
];
const DIFFICULTIES: Difficulty[] = ['Easy', 'Medium', 'Hard'];

export default function OnboardingPage() {
  const router = useRouter();
  const { setOnboarding } = useQuizStore();
  const [step, setStep] = useState(0);
  const [domain, setDomain] = useState<Domain | null>(null);
  const [level, setLevel] = useState<ExperienceLevel | null>(null);
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);

  const steps = [
    {
      title: 'What is your target domain?',
      subtitle: 'We will tailor questions to your focus area.',
      content: (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {DOMAINS.map((d) => (
            <button
              key={d}
              onClick={() => setDomain(d)}
              className={`p-4 rounded-xl border text-sm font-medium transition-all ${domain === d
                  ? 'border-indigo-500 bg-indigo-500/20 text-indigo-300'
                  : 'border-white/10 hover:border-indigo-400 text-slate-300'
                }`}
            >
              {d}
            </button>
          ))}
        </div>
      ),
      canProceed: !!domain,
    },
    {
      title: 'How much experience do you have?',
      subtitle: 'This helps us set the right question complexity.',
      content: (
        <div className="flex flex-col gap-3">
          {LEVELS.map((l) => (
            <button
              key={l.value}
              onClick={() => setLevel(l.value)}
              className={`p-4 rounded-xl border text-left font-medium transition-all ${level === l.value
                  ? 'border-indigo-500 bg-indigo-500/20 text-indigo-300'
                  : 'border-white/10 hover:border-indigo-400 text-slate-300'
                }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      ),
      canProceed: !!level,
    },
    {
      title: 'Choose your difficulty',
      subtitle: 'You can always change this later.',
      content: (
        <div className="flex gap-4 justify-center flex-wrap">
          {DIFFICULTIES.map((d) => (
            <button
              key={d}
              onClick={() => setDifficulty(d)}
              className={`px-8 py-4 rounded-xl border text-sm font-semibold transition-all ${difficulty === d
                  ? 'border-indigo-500 bg-indigo-500/20 text-indigo-300'
                  : 'border-white/10 hover:border-indigo-400 text-slate-300'
                }`}
            >
              {d}
            </button>
          ))}
        </div>
      ),
      canProceed: !!difficulty,
    },
  ];

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      setOnboarding({ domain: domain!, experienceLevel: level!, difficulty: difficulty! });
      router.push('/test/new');
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-900 px-4">
      <div className="w-full max-w-lg">
        {/* Progress bar */}
        <div className="flex gap-2 mb-8">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`h-1 flex-1 rounded-full transition-all duration-500 ${i <= step ? 'bg-indigo-500' : 'bg-white/10'
                }`}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3 }}
            className="glass rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-2">{steps[step].title}</h2>
            <p className="text-slate-400 mb-6 text-sm">{steps[step].subtitle}</p>
            {steps[step].content}

            <div className="flex justify-between mt-8">
              {step > 0 ? (
                <button
                  onClick={() => setStep(step - 1)}
                  className="px-6 py-2 rounded-lg border border-white/10 text-slate-300 hover:bg-white/5 transition-colors text-sm"
                >
                  Back
                </button>
              ) : (
                <div />
              )}
              <button
                onClick={handleNext}
                disabled={!steps[step].canProceed}
                className="px-6 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold transition-colors text-sm"
              >
                {step === steps.length - 1 ? 'Start Test' : 'Next'}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
