import { IsString, IsArray, IsIn, ValidateNested, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

class AnswerDto {
  @IsString()
  questionId: string;

  @IsOptional()
  @IsString()
  selectedOption?: string;

  @IsOptional()
  @IsString()
  codeSubmission?: string;

  @IsOptional()
  @IsString()
  language?: string;

  @IsOptional()
  timeTaken?: number;
}

export class SubmitAttemptDto {
  @IsString()
  @IsIn(['Frontend', 'Backend', 'Fullstack', 'DevOps', 'Mobile'])
  domain: string;

  @IsString()
  @IsIn(['Easy', 'Medium', 'Hard'])
  difficulty: string;

  @IsString()
  @IsIn(['0-2', '3-5', '5+'])
  experienceLevel: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AnswerDto)
  answers: AnswerDto[];

  @IsOptional()
  @IsIn(['submitted', 'auto-submitted'])
  status?: string;
}
