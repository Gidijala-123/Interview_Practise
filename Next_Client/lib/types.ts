export type Domain = 'Frontend' | 'Backend' | 'Fullstack' | 'DevOps' | 'Mobile';
export type Difficulty = 'Easy' | 'Medium' | 'Hard';
export type ExperienceLevel = '0-2' | '3-5' | '5+';
export type QuestionType = 'mcq' | 'coding';
export type Language = 'javascript' | 'python' | 'java';

export interface OnboardingData {
  domain: Domain;
  experienceLevel: ExperienceLevel;
  difficulty: Difficulty;
}

export interface Question {
  _id: string;
  title: string;
  description: string;
  type: QuestionType;
  difficulty: Difficulty;
  tags: string[];
  domains: Domain[];
  // MCQ
  options?: string[];
  correctAnswer?: string;
  explanation?: string;
  proTip?: string;
  mnemonic?: string;
  // Coding
  starterCode?: string;
  optimalSolution?: string;
  languageBoilerplate?: Record<Language, string>;
  testCases?: { input: string; expectedOutput: string }[];
  points: number;
}

export interface Answer {
  questionId: string;
  selectedOption?: string;
  codeSubmission?: string;
  language?: string;
  timeTaken?: number;
}

export interface CategoryScore {
  category: string;
  correct: number;
  total: number;
  percentage: number;
}

export interface Attempt {
  _id: string;
  domain: Domain;
  difficulty: Difficulty;
  experienceLevel: ExperienceLevel;
  answers: (Answer & { isCorrect: boolean; pointsEarned: number })[];
  totalScore: number;
  maxScore: number;
  percentage: number;
  categoryBreakdown: CategoryScore[];
  status: string;
  createdAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  targetDomain?: Domain;
  experienceLevel?: ExperienceLevel;
  totalAttempts: number;
  averageScore: number;
}
