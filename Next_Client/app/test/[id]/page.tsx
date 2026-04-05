'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useQuizStore } from '@/store/quiz.store';
import { api } from '@/lib/api';
import { Timer } from '@/components/Timer';
import { CodeEditor } from '@/components/CodeEditor';
import type { Question, Language } from '@/lib/types';

export default function TestPage() {
  const router = useRouter();
  const {
    onboarding, questions, answers, currentIndex, activeSection,
    setQuestions, setAnswer, setCurrentIndex, setActiveSection, setAttemptId, reset,
  } = useQuizStore();

  const [loading, setLoading] = useState(questions.length === 0);
  const [submitting, setSubmitting] = useState(false);
  const [selectedLang, setSelectedLang] = useState<Language>('javascript');

  // Load questions if not already in store
  useEffect(() => {
    if (!onboarding) { router.push('/onboarding'); return; }
    if (questions.length > 0) { setLoading(false); return; }

    api.questions.list({
      domain: onboarding.domain,
      difficulty: onboarding.difficulty,
      limit: '10',
    }).then((data: any) => {
      setQuestions(data);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, [onboarding, questions.length, setQuestions, router]);

  const handleSubmit = useCallback(async (autoSubmit = false) => {
    if (submitting) return;
    setSubmitting(true);
    try {
      const payload = {
        domain: onboarding!.domain,
        difficulty: onboarding!.difficulty,
        experienceLevel: onboarding!.experienceLevel,
        answers: Object.values(answers),
        status: autoSubmit ? 'auto-submitted' : 'submitted',
      };
      const result: any = await api.attempts.submit(payload);
      setAttemptId(result._id);
      router.push(`/results/${result._id}`);
    } catch (err) {
      console.error(err);
      setSubmitting(false);
    }
  }, [submitting, onboarding, answers, setAttemptId, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-950 to-slate-900">
        <div className="text-indigo-300 text-lg animate-pulse">Loading questions...</div>
      </div>
    );
  }

  const mcqQuestions = questions.filter((q) => q.type === 'mcq');
  const codingQuestions = questions.filter((q) => q.type === 'coding');
  const sectionQuestions = activeSection === 'mcq' ? mcqQuestions : codingQuestions;
  const question: Question | undefined = sectionQuestions[currentIndex];

  if (!question) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-950 to-slate-900 text-white">
        <div className="text-center">
          <p className="text-slate-400 mb-4">No questions found for your selection.</p>
          <button onClick={() => router.push('/onboarding')} className="px-6 py-2 bg-indigo-600 rounded-lg">
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const currentAnswer = answers[question._id];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-10 glass border-b border-white/10 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-bold text-indigo-300">InterviewAce</span>
          <span className="text-xs text-slate-400">{onboarding?.domain} · {onboarding?.difficulty}</span>
        </div>
        <div className="flex items-center gap-3">
          <Timer onExpire={() => handleSubmit(true)} />
          <button
            onClick={() => handleSubmit(false)}
            disabled={submitting}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-sm font-semibold disabled:opacity-50 transition-colors"
          >
            {submitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </header>

      <div className="flex h-[calc(100vh-60px)]">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-56 border-r border-white/10 p-4 gap-2">
          {/* Section tabs */}
          <div className="flex gap-2 mb-4">
            {(['mcq', 'coding'] as const).map((s) => (
              <button
                key={s}
                onClick={() => { setActiveSection(s); setCurrentIndex(0); }}
                className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-colors ${activeSection === s ? 'bg-indigo-600 text-white' : 'bg-white/5 text-slate-400 hover:bg-white/10'
                  }`}
              >
                {s.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Question list */}
          {sectionQuestions.map((q, i) => {
            const answered = !!answers[q._id];
            return (
              <button
                key={q._id}
                onClick={() => setCurrentIndex(i)}
                className={`text-left px-3 py-2 rounded-lg text-xs transition-colors ${i === currentIndex
                    ? 'bg-indigo-600/40 text-indigo-200 border border-indigo-500/40'
                    : answered
                      ? 'bg-green-500/10 text-green-300'
                      : 'text-slate-400 hover:bg-white/5'
                  }`}
              >
                Q{i + 1}. {q.title.slice(0, 28)}...
              </button>
            );
          })}
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-6">
          <motion.div
            key={question._id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs px-2 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                {question.difficulty}
              </span>
              {question.tags.map((t) => (
                <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/5 text-slate-400">{t}</span>
              ))}
              <span className="ml-auto text-xs text-slate-500">{question.points} pts</span>
            </div>

            <h2 className="text-xl font-semibold mb-3">{question.title}</h2>
            <pre className="text-sm text-slate-300 whitespace-pre-wrap font-sans mb-6 bg-white/5 rounded-xl p-4">
              {question.description}
            </pre>

            {/* MCQ Options */}
            {question.type === 'mcq' && question.options && (
              <div className="flex flex-col gap-3">
                {question.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => setAnswer(question._id, { selectedOption: String(i) })}
                    className={`text-left px-4 py-3 rounded-xl border text-sm transition-all ${currentAnswer?.selectedOption === String(i)
                        ? 'border-indigo-500 bg-indigo-500/20 text-indigo-200'
                        : 'border-white/10 hover:border-indigo-400 text-slate-300'
                      }`}
                  >
                    <span className="font-semibold mr-2 text-indigo-400">{String.fromCharCode(65 + i)}.</span>
                    {opt}
                  </button>
                ))}
              </div>
            )}

            {/* Coding Editor */}
            {question.type === 'coding' && (
              <div>
                <div className="flex gap-2 mb-3">
                  {(['javascript', 'python', 'java'] as Language[]).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setSelectedLang(lang)}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${selectedLang === lang ? 'bg-indigo-600 text-white' : 'bg-white/5 text-slate-400 hover:bg-white/10'
                        }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
                <CodeEditor
                  value={currentAnswer?.codeSubmission ?? (question.languageBoilerplate?.[selectedLang] || question.starterCode || '')}
                  onChange={(code) => setAnswer(question._id, { codeSubmission: code, language: selectedLang })}
                  language={selectedLang}
                  height="350px"
                />
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              <button
                onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
                disabled={currentIndex === 0}
                className="px-5 py-2 rounded-lg border border-white/10 text-slate-300 hover:bg-white/5 disabled:opacity-30 text-sm transition-colors"
              >
                ← Previous
              </button>
              <button
                onClick={() => setCurrentIndex(Math.min(sectionQuestions.length - 1, currentIndex + 1))}
                disabled={currentIndex === sectionQuestions.length - 1}
                className="px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 disabled:opacity-30 text-sm font-semibold transition-colors"
              >
                Next →
              </button>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
