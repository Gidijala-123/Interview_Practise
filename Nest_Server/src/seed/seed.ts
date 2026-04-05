import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { QuestionsService } from '../questions/questions.service';
import { mockQuestions } from './seed.data';

async function runSeed() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const questionsService = app.get(QuestionsService);

  console.log('Seeding questions...');
  await questionsService.seed(mockQuestions as any);
  console.log(`✓ Seeded ${mockQuestions.length} questions`);

  await app.close();
}

runSeed().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
