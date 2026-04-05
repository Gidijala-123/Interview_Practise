'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuizStore } from '@/store/quiz.store';
import { Timer } from '@/components/Timer';
import { CodeEditor } from '@/components/CodeEditor';
import type { Question, Language } from '@/lib/types';

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3333/api';

export default function TestPage() {
  const router = useRouter();
  const {
    onboarding, questions, answers, currentIndex, activeSection,
    setQuestions, setAnswer, setCurrentIndex, setActiveSection, reset,
  } = useQuizStore();

  const [loading, setLoading] = useState(questions.length === 0);
  const [submitting, setSubmitting] = useState(false);
  const [selectedLang, setSelectedLang] = useState<Language>('javascript');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!onboarding) { router.push('/onboarding'); return; }
    if (questions.length > 0) { setLoading(false); return; }

    const params = new URLSearchParams({
      domain: onboarding.domain,
      difficulty: onboarding.difficulty,
      limit: '10',
    });

    fetch(`${API}/questions?${params}`)
      .then((r) => r.json())
      .then((data) => { setQuestions(Array.isArray(data) ? data : []); setLoading(false); })
      .catch(() => setLoading(false));
  }, [onboarding, questions.length, setQuestions, router]);

  const handleSubmit = useCallback(async (autoSubmit = false) => {
    if (submitting || submitted) return;
    setSubmitting(true);

    const token = localStorage.getItem('token');
    const payload = {
      domain: onboarding!.domain,
      difficulty: onboarding!.difficulty,
      experienceLevel: onboarding!.experienceLevel,
      answers: Object.values(answers),
      status: autoSubmit ? 'auto-submitted' : 'submitted',
    };

    try {
      const res = await fetch(`${API}/attempts/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify(payload),
      });
      const result = await res.json();
      setSubmitted(true);
      // Store result locally for results page
      localStorage.setItem('lastAttempt', JSON.stringify({ ...result, questions }));
      router.push(`/results/${result._id || 'local'}`);
    } catch {
      setSubmitting(false);
    }
  }, [submitting, submitted, onboarding, answers, questions, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-indigo-300 text-sm">Loading questions...</p>
        </div>
      </div>
    );
  }

  const mcqQuestions = questions.filter((q) => q.type === 'mcq');
  const codingQuestions = questions.filter((q) => q.type === 'coding');
  const sectionQuestions = activeSection === 'mcq' ? mcqQuestions : codingQuestions;
  const question: Question | undefined = sectionQuestions[currentIndex];

  if (!question && questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 text-white">
        <div className="text-center glass rounded-2xl p-10">
          <div className="text-5xl mb-4">😕</div>
          <p className="text-lg font-semibold mb-2">No questions found</p>
          <p className="text-slate-400 text-sm mb-6">Try seeding the database first or change your filters.</p>
          <button onClick={() => router.push('/onboarding')}
            className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-sm font-semibold transition-colors">
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const currentAnswer = question ? answers[question._id] : undefined;
  const answeredCount = Object.keys(answers).length;
  const totalCount = questions.length;

  const difficultyColor: Record<string, string> = {
    Easy: 'text-green-400 bg-green-400/10 border-green-400/30',
    Medium: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30',
    Hard: 'text-red-400 bg-red-400/10 border-red-400/30',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 text-white flex flex-col">

      {/* ── Top Header ── */}
      <header className="sticky top-0 z-20 bg-slate-950/80 backdrop-blur border-b border-white/10 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-bold text-indigo-400 text-lg">InterviewAce</span>
            <span className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">
              {onboarding?.domain} · {onboarding?.difficulty}
            </span>
          </div>

          {/* Progress */}
          <div className="hidden md:flex items-center gap-2 flex-1 max-w-xs">
            <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-indigo-500 rounded-full transition-all duration-500"
                style={{ width: `${(answeredCount / totalCount) * 100}%` }}
              />
            </div>
            <span className="text-xs text-slate-400 whitespace-nowrap">{answeredCount}/{totalCount}</span>
          </div>

          <div className="flex items-center gap-3">
            <Timer onExpire={() => handleSubmit(true)} />
            <button
              onClick={() => handleSubmit(false)}
              disabled={submitting}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-sm font-semibold disabled:opacity-50 transition-colors"
            >
              {submitting ? 'Submitting...' : 'Submit Test'}
            </button>
          </div>
        </div>
      </header>

      <div className="flex flex-1 max-w-7xl mx-auto w-full">

        {/* ── Sidebar ── */}
        <aside className="hidden lg:flex flex-col w-64 border-r border-white/10 p-4 gap-3 shrink-0">
          {/* Section Tabs */}
          <div className="flex gap-2">
            {(['mcq', 'coding'] as const).map((s) => (
              <button key={s}
                onClick={() => { setActiveSection(s); setCurrentIndex(0); }}
                className={`flex-1 py-2 rounded-xl text-xs font-bold uppercase tracking-wide transition-all ${activeSection === s
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20'
                    : 'bg-white/5 text-slate-400 hover:bg-white/10'
                  }`}
              >
                {s} <span className="opacity-60">({s === 'mcq' ? mcqQuestions.length : codingQuestions.length})</span>
              </button>
            ))}
          </div>

          <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">Questions</p>

          {/* Question list */}
          <div className="flex flex-col gap-1.5 overflow-y-auto">
            {sectionQuestions.map((q, i) => {
              const isAnswered = !!answers[q._id];
              const isActive = i === currentIndex;
              return (
                <button key={q._id} onClick={() => setCurrentIndex(i)}
                  className={`text-left px-3 py-2.5 rounded-xl text-xs transition-all border ${isActive
                      ? 'bg-indigo-600/30 border-indigo-500/50 text-white'
                      : isAnswered
                        ? 'bg-green-500/10 border-green-500/20 text-green-300'
                        : 'border-transparent text-slate-400 hover:bg-white/5 hover:text-slate-200'
                    }`}
                >
                  <div className="flex items-center gap-2">
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${isActive ? 'bg-indigo-500 text-white' : isAnswered ? 'bg-green-500 text-white' : 'bg-white/10 text-slate-400'
                      }`}>{i + 1}</span>
                    <span className="truncate">{q.title}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </aside>

        {/* ── Main Question Area ── */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {question ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={question._id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.25 }}
                className="max-w-3xl mx-auto"
              >
                {/* Question Header */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="text-slate-400 text-sm font-medium">
                    Q{currentIndex + 1} of {sectionQuestions.length}
                  </span>
                  <span className={`text-xs px-2.5 py-1 rounded-full border font-semibold ${difficultyColor[question.difficulty]}`}>
                    {question.difficulty}
                  </span>
                  {question.tags.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400">{t}</span>
                  ))}
                  <span className="ml-auto text-xs font-semibold text-indigo-400 bg-indigo-400/10 px-2.5 py-1 rounded-full border border-indigo-400/20">
                    {question.points} pts
                  </span>
                </div>

                {/* Question Card */}
                <div className="glass rounded-2xl p-6 mb-5">
                  <h2 className="text-xl font-bold text-white mb-4">{question.title}</h2>
                  <pre className="text-sm text-slate-300 whitespace-pre-wrap font-mono leading-relaxed bg-black/20 rounded-xl p-4 border border-white/5">
                    {question.description}
                  </pre>
                </div>

                {/* MCQ Options */}
                {question.type === 'mcq' && question.options && (
                  <div className="flex flex-col gap-3">
                    {question.options.map((opt, i) => {
                      const isSelected = currentAnswer?.selectedOption === String(i);
                      return (
                        <motion.button
                          key={i}
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                          onClick={() => setAnswer(question._id, { selectedOption: String(i) })}
                          className={`text-left px-5 py-4 rounded-xl border text-sm transition-all ${isSelected
                              ? 'border-indigo-500 bg-indigo-500/20 text-white shadow-lg shadow-indigo-500/10'
                              : 'border-white/10 bg-white/3 hover:border-indigo-400/50 hover:bg-white/5 text-slate-300'
                            }`}
                        >
                          <div className="flex items-start gap-3">
                            <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 transition-colors ${isSelected ? 'bg-indigo-500 text-white' : 'bg-white/10 text-slate-400'
                              }`}>
                              {String.fromCharCode(65 + i)}
                            </span>
                            <span className="leading-relaxed">{opt}</span>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                )}

                {/* Coding Editor */}
                {question.type === 'coding' && (
                  <div className="glass rounded-2xl p-4">
                    {/* Language selector */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs text-slate-400 mr-1">Language:</span>
                      {(['javascript', 'python', 'java'] as Language[]).map((lang) => (
                        <button key={lang}
                          onClick={() => setSelectedLang(lang)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${selectedLang === lang
                              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                              : 'bg-white/5 text-slate-400 hover:bg-white/10'
                            }`}
                        >
                          {lang === 'javascript' ? 'JS' : lang === 'python' ? 'Python' : 'Java'}
                        </button>
                      ))}
                    </div>

                    <CodeEditor
                      value={currentAnswer?.codeSubmission ?? (question.languageBoilerplate?.[selectedLang] || question.starterCode || '')}
                      onChange={(code) => setAnswer(question._id, { codeSubmission: code, language: selectedLang })}
                      language={selectedLang}
                      height="380px"
                    />

                    {/* Test cases preview */}
                    {question.testCases && question.testCases.length > 0 && (
                      <div className="mt-4">
                        <p className="text-xs text-slate-400 mb-2 font-semibold uppercase tracking-wider">Test Cases</p>
                        <div className="flex flex-col gap-2">
                          {question.testCases.map((tc, i) => (
                            <div key={i} className="flex gap-3 text-xs bg-black/20 rounded-lg px-3 py-2 border border-white/5">
                              <span className="text-slate-500 shrink-0">Input:</span>
                              <code className="text-indigo-300 flex-1">{tc.input}</code>
                              <span className="text-slate-500 shrink-0">→</span>
                              <code className="text-green-300">{tc.expectedOutput}</code>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Navigation */}
                <div className="flex justify-between mt-6">
                  <button
                    onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
                    disabled={currentIndex === 0}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 text-slate-300 hover:bg-white/5 disabled:opacity-30 text-sm transition-colors"
                  >
                    ← Previous
                  </button>

                  {currentIndex < sectionQuestions.length - 1 ? (
                    <button
                      onClick={() => setCurrentIndex(currentIndex + 1)}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-sm font-semibold transition-colors"
                    >
                      Next →
                    </button>
                  ) : activeSection === 'mcq' && codingQuestions.length > 0 ? (
                    <button
                      onClick={() => { setActiveSection('coding'); setCurrentIndex(0); }}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-sm font-semibold transition-colors"
                    >
                      Coding Section →
                    </button>
                  ) : (
                    <button
                      onClick={() => handleSubmit(false)}
                      disabled={submitting}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-green-600 hover:bg-green-500 text-sm font-semibold transition-colors disabled:opacity-50"
                    >
                      ✓ Submit Test
                    </button>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          ) : (
            <div className="flex items-center justify-center h-full text-slate-400">
              Select a question from the sidebar
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
