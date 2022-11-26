import { Controller, Get, UseFilters } from '@nestjs/common';
import { AppService } from './app.service';
import { HttpExceptionFilter } from './filter';

@UseFilters(new HttpExceptionFilter())
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // throw Error();
    return this.appService.getHello();
  }
}
