import { IsEmail, IsString, MinLength, IsOptional, IsIn } from 'class-validator';

export class RegisterDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsOptional()
  @IsIn(['Frontend', 'Backend', 'Fullstack', 'DevOps', 'Mobile'])
  targetDomain?: string;

  @IsOptional()
  @IsIn(['0-2', '3-5', '5+'])
  experienceLevel?: string;
}
