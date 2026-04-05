import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { QuestionsService } from '../questions/questions.service';
import { getModelToken } from '@nestjs/mongoose';
import { mockQuestions } from './seed.data';

async function runSeed() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const questionsService = app.get(QuestionsService);

  // Clear existing questions first
  const questionModel = app.get(getModelToken('Question'));
  await questionModel.deleteMany({});
  console.log('Cleared existing questions');

  await questionsService.seed(mockQuestions as any);
  console.log(`✓ Seeded ${mockQuestions.length} questions`);

  await app.close();
}

runSeed().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
