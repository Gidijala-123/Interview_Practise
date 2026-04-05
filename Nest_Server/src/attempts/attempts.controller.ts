import { Controller, Post, Get, Param, Body, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AttemptsService } from './attempts.service';
import { SubmitAttemptDto } from './dto/submit-attempt.dto';

@UseGuards(AuthGuard('jwt'))
@Controller('attempts')
export class AttemptsController {
  constructor(private attemptsService: AttemptsService) { }

  /** POST /api/attempts/submit */
  @Post('submit')
  submit(@Request() req, @Body() dto: SubmitAttemptDto) {
    return this.attemptsService.submit(req.user.userId, dto);
  }

  /** GET /api/attempts — user's history */
  @Get()
  getMyAttempts(@Request() req) {
    return this.attemptsService.findByUser(req.user.userId);
  }

  /** GET /api/attempts/:id — single result */
  @Get(':id')
  getAttempt(@Param('id') id: string) {
    return this.attemptsService.findById(id);
  }
}
