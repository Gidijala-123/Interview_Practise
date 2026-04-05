export const mockQuestions = [
  // ── MCQ 1 ──────────────────────────────────────────────────────────────────
  {
    title: 'JavaScript Closures',
    description: 'What will the following code output?\n\nfor (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 0);\n}',
    type: 'mcq',
    difficulty: 'Medium',
    tags: ['JavaScript', 'Closures'],
    domains: ['Frontend', 'Fullstack'],
    options: ['0 1 2', '3 3 3', '0 0 0', 'undefined undefined undefined'],
    correctAnswer: '1',
    explanation: 'var is function-scoped, so all three callbacks share the same `i`. By the time they run, the loop has finished and i === 3.',
    proTip: 'Use `let` instead of `var` in loops to get block-scoped variables.',
    mnemonic: 'VAR = Very Annoying Reference — it leaks out of blocks!',
    points: 10,
  },

  // ── MCQ 2 ──────────────────────────────────────────────────────────────────
  {
    title: 'React useEffect Dependency Array',
    description: 'Which statement about the useEffect dependency array is CORRECT?',
    type: 'mcq',
    difficulty: 'Easy',
    tags: ['React', 'Hooks'],
    domains: ['Frontend', 'Fullstack'],
    options: [
      'An empty array [] means the effect runs on every render',
      'Omitting the array means the effect runs only once',
      'An empty array [] means the effect runs only after the first render',
      'The dependency array is required',
    ],
    correctAnswer: '2',
    explanation: 'An empty dependency array tells React to run the effect only once after the initial render, similar to componentDidMount.',
    proTip: 'Think of [] as "no dependencies = nothing to watch = run once".',
    mnemonic: 'Empty box = nothing changes = run once and chill.',
    points: 10,
  },

  // ── MCQ 3 ──────────────────────────────────────────────────────────────────
  {
    title: 'HTTP Status Codes',
    description: 'Which HTTP status code should a REST API return when a resource is successfully created?',
    type: 'mcq',
    difficulty: 'Easy',
    tags: ['REST', 'HTTP'],
    domains: ['Backend', 'Fullstack'],
    options: ['200 OK', '201 Created', '204 No Content', '202 Accepted'],
    correctAnswer: '1',
    explanation: '201 Created is the correct response for a successful POST that creates a new resource. The response should also include a Location header.',
    proTip: 'POST → 201, PUT/PATCH → 200, DELETE → 204.',
    mnemonic: 'POST gives birth (201 = born!), DELETE kills quietly (204 = silence).',
    points: 10,
  },

  // ── CODING 1 ───────────────────────────────────────────────────────────────
  {
    title: 'Reverse a String',
    description: 'Write a function `reverseString(s)` that takes a string and returns it reversed.\n\nExample:\n  reverseString("hello") → "olleh"',
    type: 'coding',
    difficulty: 'Easy',
    tags: ['Strings', 'Algorithms'],
    domains: ['Frontend', 'Backend', 'Fullstack'],
    points: 20,
    languageBoilerplate: {
      javascript: `function reverseString(s) {\n  // your code here\n}`,
      python: `def reverse_string(s: str) -> str:\n    # your code here\n    pass`,
      java: `public class Solution {\n    public String reverseString(String s) {\n        // your code here\n        return "";\n    }\n}`,
    },
    starterCode: `function reverseString(s) {\n  // your code here\n}`,
    optimalSolution: `function reverseString(s) {\n  return s.split('').reverse().join('');\n  // O(n) time, O(n) space\n}`,
    testCases: [
      { input: '"hello"', expectedOutput: '"olleh"' },
      { input: '"abcde"', expectedOutput: '"edcba"' },
      { input: '""', expectedOutput: '""' },
    ],
    explanation: 'Split into array, reverse in-place, join back. O(n) time complexity.',
    proTip: 'In Python you can do s[::-1] for a one-liner.',
  },

  // ── CODING 2 ───────────────────────────────────────────────────────────────
  {
    title: 'FizzBuzz',
    description: 'Write a function `fizzBuzz(n)` that returns an array of strings from 1 to n where:\n- Multiples of 3 → "Fizz"\n- Multiples of 5 → "Buzz"\n- Multiples of both → "FizzBuzz"\n- Otherwise → the number as a string',
    type: 'coding',
    difficulty: 'Easy',
    tags: ['Algorithms', 'Logic'],
    domains: ['Frontend', 'Backend', 'Fullstack'],
    points: 20,
    languageBoilerplate: {
      javascript: `function fizzBuzz(n) {\n  // your code here\n}`,
      python: `def fizz_buzz(n: int) -> list[str]:\n    # your code here\n    pass`,
      java: `import java.util.*;\npublic class Solution {\n    public List<String> fizzBuzz(int n) {\n        // your code here\n        return new ArrayList<>();\n    }\n}`,
    },
    starterCode: `function fizzBuzz(n) {\n  // your code here\n}`,
    optimalSolution: `function fizzBuzz(n) {\n  return Array.from({ length: n }, (_, i) => {\n    const num = i + 1;\n    if (num % 15 === 0) return 'FizzBuzz';\n    if (num % 3 === 0) return 'Fizz';\n    if (num % 5 === 0) return 'Buzz';\n    return String(num);\n  });\n}`,
    testCases: [
      { input: '5', expectedOutput: '["1","2","Fizz","4","Buzz"]' },
      { input: '15', expectedOutput: '["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]' },
    ],
    explanation: 'Check divisibility by 15 first (both), then 3, then 5. Order matters!',
    proTip: 'Always check the combined condition (% 15) before individual ones.',
  },
];
