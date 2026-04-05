import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  name: string;

  // Onboarding profile
  @Prop({ enum: ['Frontend', 'Backend', 'Fullstack', 'DevOps', 'Mobile'] })
  targetDomain: string;

  @Prop({ enum: ['0-2', '3-5', '5+'] })
  experienceLevel: string;

  @Prop({ type: [String], default: [] })
  skills: string[];

  // Aggregated stats
  @Prop({ default: 0 })
  totalAttempts: number;

  @Prop({ default: 0 })
  averageScore: number;

  @Prop({ type: [String], default: [] })
  pastTestIds: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
