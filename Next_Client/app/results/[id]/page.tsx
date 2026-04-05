'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { RadialBarChart, RadialBar, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';
import { api } from '@/lib/api';
import { useQuizStore } from '@/store/quiz.store';
import type { Attempt, Question } from '@/lib/types';

export default function ResultsPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const { questions, reset } = useQuizStore();
  const [attempt, setAttempt] = useState<Attempt | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // If id is 'local', load from localStorage (unauthenticated flow)
    if (id === 'local') {
      const stored = localStorage.getItem('lastAttempt');
      if (stored) setAttempt(JSON.parse(stored));
      setLoading(false);
      return;
    }
    api.attempts.get(id).then((data: any) => {
      setAttempt(data);
      setLoading(false);
    }).catch(() => {
      // fallback to localStorage
      const stored = localStorage.getItem('lastAttempt');
      if (stored) setAttempt(JSON.parse(stored));
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-950 to-slate-900">
        <div className="text-indigo-300 animate-pulse">Loading results...</div>
      </div>
    );
  }

  if (!attempt) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-950 to-slate-900 text-white">
        <div className="text-center">
          <p className="text-slate-400 mb-4">Results not found.</p>
          <button onClick={() => router.push('/')} className="px-6 py-2 bg-indigo-600 rounded-lg">Home</button>
        </div>
      </div>
    );
  }

  const scoreColor = attempt.percentage >= 70 ? '#22c55e' : attempt.percentage >= 40 ? '#f59e0b' : '#ef4444';
  const radialData = [{ name: 'Score', value: attempt.percentage, fill: scoreColor }];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 text-white px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-bold mb-2">Your Results</h1>
          <p className="text-slate-400 mb-8">{attempt.domain} · {attempt.difficulty} · {attempt.experienceLevel} yrs</p>

          {/* Score overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="glass rounded-2xl p-6 flex flex-col items-center">
              <ResponsiveContainer width={120} height={120}>
                <RadialBarChart innerRadius={35} outerRadius={55} data={radialData} startAngle={90} endAngle={-270}>
                  <RadialBar dataKey="value" cornerRadius={8} background={{ fill: '#1e1e3a' }} />
                </RadialBarChart>
              </ResponsiveContainer>
              <p className="text-3xl font-bold mt-2" style={{ color: scoreColor }}>{attempt.percentage}%</p>
              <p className="text-slate-400 text-sm">Overall Score</p>
            </div>

            <div className="glass rounded-2xl p-6 flex flex-col justify-center gap-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Points Earned</span>
                <span className="font-semibold text-green-400">{attempt.totalScore}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Max Points</span>
                <span className="font-semibold">{attempt.maxScore}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Questions</span>
                <span className="font-semibold">{attempt.answers.length}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Status</span>
                <span className={`font-semibold ${attempt.status === 'auto-submitted' ? 'text-yellow-400' : 'text-green-400'}`}>
                  {attempt.status}
                </span>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 flex flex-col justify-center">
              <p className="text-slate-400 text-sm mb-2">Correct Answers</p>
              <p className="text-4xl font-bold text-green-400">
                {attempt.answers.filter((a) => a.isCorrect).length}
                <span className="text-xl text-slate-400">/{attempt.answers.length}</span>
              </p>
            </div>
          </div>

          {/* Category breakdown chart */}
          {attempt.categoryBreakdown.length > 0 && (
            <div className="glass rounded-2xl p-6 mb-8">
              <h2 className="text-lg font-semibold mb-4">Performance by Category</h2>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={attempt.categoryBreakdown} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                  <XAxis dataKey="category" tick={{ fill: '#9ca3af', fontSize: 12 }} />
                  <YAxis domain={[0, 100]} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{ background: '#1a1a2e', border: '1px solid #2d2d4e', borderRadius: 8 }}
                    labelStyle={{ color: '#f0f0ff' }}
                  />
                  <Bar dataKey="percentage" radius={[4, 4, 0, 0]}>
                    {attempt.categoryBreakdown.map((entry, i) => (
                      <Cell key={i} fill={entry.percentage >= 70 ? '#22c55e' : entry.percentage >= 40 ? '#f59e0b' : '#ef4444'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}

          {/* Per-question review */}
          <div className="glass rounded-2xl p-6 mb-8">
            <h2 className="text-lg font-semibold mb-4">Question Review</h2>
            <div className="flex flex-col gap-4">
              {attempt.answers.map((ans, i) => {
                const q = questions.find((q) => q._id === ans.questionId);
                return (
                  <div
                    key={i}
                    className={`rounded-xl p-4 border ${ans.isCorrect ? 'border-green-500/30 bg-green-500/5' : 'border-red-500/30 bg-red-500/5'
                      }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-medium">{q?.title || `Question ${i + 1}`}</p>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${ans.isCorrect ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                        {ans.isCorrect ? `+${ans.pointsEarned} pts` : '0 pts'}
                      </span>
                    </div>

                    {/* Pro-tip on wrong MCQ answers */}
                    {!ans.isCorrect && q?.proTip && (
                      <div className="mt-3 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                        <p className="text-xs text-yellow-300 font-semibold mb-1">💡 Pro Tip</p>
                        <p className="text-xs text-yellow-200">{q.proTip}</p>
                        {q.mnemonic && (
                          <p className="text-xs text-yellow-400 mt-1 italic">🧠 {q.mnemonic}</p>
                        )}
                      </div>
                    )}

                    {/* Code comparison for coding questions */}
                    {q?.type === 'coding' && q.optimalSolution && (
                      <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                          <p className="text-xs text-slate-400 mb-1">Your Code</p>
                          <pre className="text-xs bg-black/30 rounded-lg p-3 overflow-x-auto text-slate-300 max-h-32">
                            {ans.codeSubmission || '(no submission)'}
                          </pre>
                        </div>
                        <div>
                          <p className="text-xs text-green-400 mb-1">Optimal Solution</p>
                          <pre className="text-xs bg-green-500/5 border border-green-500/20 rounded-lg p-3 overflow-x-auto text-green-200 max-h-32">
                            {q.optimalSolution}
                          </pre>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => { reset(); router.push('/onboarding'); }}
              className="px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-semibold transition-colors"
            >
              Try Again
            </button>
            <button
              onClick={() => router.push('/')}
              className="px-8 py-3 rounded-xl border border-white/10 hover:bg-white/5 font-semibold transition-colors"
            >
              Home
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
