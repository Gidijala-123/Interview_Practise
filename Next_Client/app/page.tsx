'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-900 text-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          InterviewAce
        </h1>
        <p className="text-lg text-slate-300 mb-8">
          Sharpen your skills with domain-specific mock interviews, real-time coding challenges, and instant feedback.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/onboarding"
            className="px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-semibold transition-colors"
          >
            Start Practice
          </Link>
          <Link
            href="/auth/login"
            className="px-8 py-3 rounded-xl border border-indigo-500 hover:bg-indigo-500/20 font-semibold transition-colors"
          >
            Sign In
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
