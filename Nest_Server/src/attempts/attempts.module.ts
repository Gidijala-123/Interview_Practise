import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AttemptsService } from './attempts.service';
import { AttemptsController } from './attempts.controller';
import { Attempt, AttemptSchema } from './schemas/attempt.schema';
import { QuestionsModule } from '../questions/questions.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Attempt.name, schema: AttemptSchema }]),
    QuestionsModule,
  ],
  providers: [AttemptsService],
  controllers: [AttemptsController],
})
export class AttemptsModule { }
