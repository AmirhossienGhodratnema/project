import { Controller, Get, UseGuards, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { LoggerIntercepter } from './intercepter/logger.intercepter';
import { AuthGuard } from './guard/auth.guard';
import { CheckHeaderGuard } from './guard/checkHeader.guard';

@Controller()
@UseInterceptors(LoggerIntercepter)
@UseGuards(CheckHeaderGuard)
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello() {
    return 'Happy new year'
  }
}
