import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type QuestionDocument = Question & Document;

export type QuestionType = 'mcq' | 'coding';
export type Difficulty = 'Easy' | 'Medium' | 'Hard';
export type Domain = 'Frontend' | 'Backend' | 'Fullstack' | 'DevOps' | 'Mobile';

@Schema({ timestamps: true })
export class Question {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true, enum: ['mcq', 'coding'] })
  type: QuestionType;

  @Prop({ required: true, enum: ['Easy', 'Medium', 'Hard'] })
  difficulty: Difficulty;

  @Prop({ type: [String], required: true })
  tags: string[];

  @Prop({ type: [String], enum: ['Frontend', 'Backend', 'Fullstack', 'DevOps', 'Mobile'] })
  domains: Domain[];

  // MCQ fields
  @Prop({ type: [String] })
  options: string[];

  @Prop()
  correctAnswer: string; // index as string e.g. "0", "1"

  @Prop()
  explanation: string;

  @Prop()
  proTip: string; // shown on wrong answer

  @Prop()
  mnemonic: string; // memory hook for wrong answers

  // Coding fields
  @Prop()
  starterCode: string;

  @Prop()
  optimalSolution: string;

  @Prop({ type: Object })
  languageBoilerplate: {
    javascript?: string;
    python?: string;
    java?: string;
  };

  @Prop({ type: [Object] })
  testCases: { input: string; expectedOutput: string }[];

  @Prop({ default: 0 })
  points: number;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
