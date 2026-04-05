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

    // Only filter by domain if provided
    if (filter.domain) query.domains = filter.domain;

    // Only filter by type if provided
    if (filter.type) query.type = filter.type;

    // For difficulty: if Hard selected, include Medium+Hard; if Medium, include Easy+Medium
    if (filter.difficulty === 'Hard') {
      query.difficulty = { $in: ['Easy', 'Medium', 'Hard'] };
    } else if (filter.difficulty === 'Medium') {
      query.difficulty = { $in: ['Easy', 'Medium'] };
    }
    // Easy: no filter — return all

    const results = await this.questionModel
      .find(query)
      .limit(filter.limit || 50)
      .exec();

    // If not enough results, fall back to all questions
    if (results.length < 3) {
      return this.questionModel.find({}).limit(filter.limit || 50).exec();
    }

    return results;
  }

  async findById(id: string): Promise<QuestionDocument> {
    return this.questionModel.findById(id);
  }

  async seed(questions: Partial<Question>[]): Promise<void> {
    await this.questionModel.insertMany(questions, { ordered: false });
  }
}
