import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { QuestionsService } from './questions.service';

@UseGuards(AuthGuard('jwt'))
@Controller('questions')
export class QuestionsController {
  constructor(private questionsService: QuestionsService) { }

  /**
   * GET /api/questions?domain=Frontend&difficulty=Medium&type=mcq&limit=10
   */
  @Get()
  getQuestions(
    @Query('domain') domain?: string,
    @Query('difficulty') difficulty?: string,
    @Query('type') type?: string,
    @Query('limit') limit?: string,
  ) {
    return this.questionsService.findAll({
      domain,
      difficulty,
      type,
      limit: limit ? parseInt(limit) : 10,
    });
  }
}
