import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Question, QuestionDocument } from './schemas/question.schema';

export interface QuestionFilter {
  domain?: string;
  difficulty?: string;
  type?: string;
  limit?: number;
}

@Injectable()
export class QuestionsService {
  constructor(@InjectModel(Question.name) private questionModel: Model<QuestionDocument>) { }

  async findAll(filter: QuestionFilter): Promise<QuestionDocument[]> {
    const query: any = {};
    if (filter.domain) query.domains = filter.domain;
    if (filter.difficulty) query.difficulty = filter.difficulty;
    if (filter.type) query.type = filter.type;

    return this.questionModel
      .find(query)
      .limit(filter.limit || 10)
      .exec();
  }

  async findById(id: string): Promise<QuestionDocument> {
    return this.questionModel.findById(id);
  }

  async seed(questions: Partial<Question>[]): Promise<void> {
    await this.questionModel.insertMany(questions, { ordered: false });
  }
}
