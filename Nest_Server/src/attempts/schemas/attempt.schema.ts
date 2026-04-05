import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type AttemptDocument = Attempt & Document;

@Schema({ _id: false })
class AnswerEntry {
  @Prop({ required: true })
  questionId: string;

  @Prop()
  selectedOption: string; // for MCQ

  @Prop()
  codeSubmission: string; // for coding

  @Prop()
  language: string;

  @Prop({ default: false })
  isCorrect: boolean;

  @Prop({ default: 0 })
  pointsEarned: number;

  @Prop({ default: 0 })
  timeTaken: number; // seconds
}

@Schema({ _id: false })
class CategoryScore {
  @Prop()
  category: string;

  @Prop()
  correct: number;

  @Prop()
  total: number;

  @Prop()
  percentage: number;
}

@Schema({ timestamps: true })
export class Attempt {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId;

  @Prop({ required: true, enum: ['Frontend', 'Backend', 'Fullstack', 'DevOps', 'Mobile'] })
  domain: string;

  @Prop({ required: true, enum: ['Easy', 'Medium', 'Hard'] })
  difficulty: string;

  @Prop({ required: true, enum: ['0-2', '3-5', '5+'] })
  experienceLevel: string;

  @Prop({ type: [AnswerEntry], default: [] })
  answers: AnswerEntry[];

  @Prop({ default: 0 })
  totalScore: number;

  @Prop({ default: 0 })
  maxScore: number;

  @Prop({ default: 0 })
  percentage: number;

  @Prop({ default: 0 })
  totalTimeTaken: number; // seconds

  @Prop({ type: [CategoryScore], default: [] })
  categoryBreakdown: CategoryScore[];

  @Prop({ enum: ['in-progress', 'submitted', 'auto-submitted'], default: 'in-progress' })
  status: string;

  @Prop({ type: [String] })
  questionIds: string[];
}

export const AttemptSchema = SchemaFactory.createForClass(Attempt);
