'use client';

import { useState } from 'react';
import type { Question } from '@/lib/types';

interface TestResult {
  input: string;
  expected: string;
  actual: string;
  passed: boolean;
  error?: string;
}

interface CodeRunnerProps {
  code: string;
  question: Question;
}

function runJavaScript(code: string, testCase: { input: string; expectedOutput: string }): TestResult {
  try {
    // Execute the user's code and capture the function
    const userFn = new Function(`
      ${code}
      // Try to find and return the defined function
      const fnNames = Object.getOwnPropertyNames(this).filter(k => typeof this[k] === 'function');
      return arguments.callee;
    `);

    // Parse input — handle multiple args like "[1,2,3], target=9"
    let parsedInput: any;
    let args: any[] = [];

    const rawInput = testCase.input.trim();

    // Handle "arr, target=N" pattern
    if (rawInput.includes('target=')) {
      const parts = rawInput.split(', target=');
      args = [JSON.parse(parts[0]), parseInt(parts[1])];
    } else if (rawInput.includes('size=')) {
      const parts = rawInput.split(', size=');
      args = [JSON.parse(parts[0]), parseInt(parts[1])];
    } else {
      // Single argument
      parsedInput = JSON.parse(rawInput);
      args = [parsedInput];
    }

    // Extract function name from code
    const fnMatch = code.match(/function\s+(\w+)\s*\(/);
    if (!fnMatch) throw new Error('No function found in code');
    const fnName = fnMatch[1];

    // Run the function
    const wrappedCode = `
      ${code}
      return ${fnName}(${args.map(a => JSON.stringify(a)).join(', ')});
    `;
    const result = new Function(wrappedCode)();

    const actual = JSON.stringify(result);
    const expected = testCase.expectedOutput.trim();

    // Normalize comparison
    const normalize = (s: string) => s.replace(/\s/g, '').toLowerCase();
    const passed = normalize(actual) === normalize(expected);

    return {
      input: testCase.input,
      expected,
      actual: actual ?? 'undefined',
      passed,
    };
  } catch (err: any) {
    return {
      input: testCase.input,
      expected: testCase.expectedOutput,
      actual: 'Error',
      passed: false,
      error: err.message,
    };
  }
}

export function CodeRunner({ code, question }: CodeRunnerProps) {
  const [results, setResults] = useState<TestResult[]>([]);
  const [running, setRunning] = useState(false);
  const [ran, setRan] = useState(false);

  const handleRun = () => {
    if (!question.testCases?.length) return;
    setRunning(true);
    setRan(false);

    // Small delay for UX feedback
    setTimeout(() => {
      const testResults = question.testCases!.map((tc) => runJavaScript(code, tc));
      setResults(testResults);
      setRunning(false);
      setRan(true);
    }, 300);
  };

  const passed = results.filter((r) => r.passed).length;
  const total = results.length;
  const allPassed = ran && passed === total;
  const somePassed = ran && passed > 0 && passed < total;

  return (
    <div className="mt-4">
      {/* Run Button */}
      <button
        onClick={handleRun}
        disabled={running || !code.trim()}
        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 text-white text-sm font-semibold transition-all"
      >
        {running ? (
          <>
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Running...
          </>
        ) : (
          <>▶ Run Code</>
        )}
      </button>

      {/* Results */}
      {ran && (
        <div className="mt-4">
          {/* Summary bar */}
          <div className={`flex items-center gap-3 px-4 py-3 rounded-xl mb-3 border ${allPassed
              ? 'bg-green-500/10 border-green-500/30 text-green-300'
              : somePassed
                ? 'bg-yellow-500/10 border-yellow-500/30 text-yellow-300'
                : 'bg-red-500/10 border-red-500/30 text-red-300'
            }`}>
            <span className="text-xl">{allPassed ? '🎉' : somePassed ? '⚠️' : '❌'}</span>
            <div>
              <p className="font-semibold text-sm">
                {passed}/{total} test cases passed
              </p>
              <p className="text-xs opacity-70">
                {allPassed ? 'All tests passed! Great job.' : somePassed ? 'Partially correct — check failing cases.' : 'No tests passed — review your logic.'}
              </p>
            </div>
            {/* Progress bar */}
            <div className="ml-auto w-24 h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${allPassed ? 'bg-green-400' : somePassed ? 'bg-yellow-400' : 'bg-red-400'}`}
                style={{ width: `${(passed / total) * 100}%` }}
              />
            </div>
          </div>

          {/* Individual test results */}
          <div className="flex flex-col gap-2">
            {results.map((r, i) => (
              <div
                key={i}
                className={`rounded-xl border p-3 text-xs ${r.passed
                    ? 'bg-green-500/5 border-green-500/20'
                    : 'bg-red-500/5 border-red-500/20'
                  }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className={`font-bold ${r.passed ? 'text-green-400' : 'text-red-400'}`}>
                    {r.passed ? '✓ PASS' : '✗ FAIL'}
                  </span>
                  <span className="text-slate-400">Test Case {i + 1}</span>
                </div>
                <div className="grid grid-cols-1 gap-1.5">
                  <div className="flex gap-2">
                    <span className="text-slate-500 w-20 shrink-0">Input:</span>
                    <code className="text-indigo-300">{r.input}</code>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-slate-500 w-20 shrink-0">Expected:</span>
                    <code className="text-green-300">{r.expected}</code>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-slate-500 w-20 shrink-0">Your Output:</span>
                    <code className={r.passed ? 'text-green-300' : 'text-red-300'}>{r.actual}</code>
                  </div>
                  {r.error && (
                    <div className="flex gap-2">
                      <span className="text-slate-500 w-20 shrink-0">Error:</span>
                      <code className="text-red-400">{r.error}</code>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
