import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Attempt, AttemptDocument } from './schemas/attempt.schema';
import { QuestionsService } from '../questions/questions.service';
import { SubmitAttemptDto } from './dto/submit-attempt.dto';

@Injectable()
export class AttemptsService {
  constructor(
    @InjectModel(Attempt.name) private attemptModel: Model<AttemptDocument>,
    private questionsService: QuestionsService,
  ) { }

  async submit(userId: string, dto: SubmitAttemptDto): Promise<AttemptDocument> {
    const scoredAnswers = [];
    let totalScore = 0;
    let maxScore = 0;
    const categoryMap: Record<string, { correct: number; total: number }> = {};

    for (const answer of dto.answers) {
      const question = await this.questionsService.findById(answer.questionId);
      if (!question) continue;

      const points = question.points || 10;
      maxScore += points;

      let isCorrect = false;
      if (question.type === 'mcq' && answer.selectedOption !== undefined) {
        isCorrect = answer.selectedOption === question.correctAnswer;
      }

      const pointsEarned = isCorrect ? points : 0;
      totalScore += pointsEarned;

      // Track per-category breakdown
      const tag = question.tags?.[0] || 'General';
      if (!categoryMap[tag]) categoryMap[tag] = { correct: 0, total: 0 };
      categoryMap[tag].total++;
      if (isCorrect) categoryMap[tag].correct++;

      scoredAnswers.push({
        questionId: answer.questionId,
        selectedOption: answer.selectedOption,
        codeSubmission: answer.codeSubmission,
        language: answer.language,
        isCorrect,
        pointsEarned,
        timeTaken: answer.timeTaken || 0,
      });
    }

    const categoryBreakdown = Object.entries(categoryMap).map(([category, data]) => ({
      category,
      correct: data.correct,
      total: data.total,
      percentage: Math.round((data.correct / data.total) * 100),
    }));

    const attempt = await this.attemptModel.create({
      userId: new Types.ObjectId(userId),
      domain: dto.domain,
      difficulty: dto.difficulty,
      experienceLevel: dto.experienceLevel,
      answers: scoredAnswers,
      totalScore,
      maxScore,
      percentage: maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0,
      categoryBreakdown,
      status: dto.status || 'submitted',
      questionIds: dto.answers.map((a) => a.questionId),
    });

    return attempt;
  }

  async findByUser(userId: string): Promise<AttemptDocument[]> {
    return this.attemptModel
      .find({ userId: new Types.ObjectId(userId) })
      .sort({ createdAt: -1 })
      .limit(20);
  }

  async findById(id: string): Promise<AttemptDocument> {
    return this.attemptModel.findById(id);
  }
}
