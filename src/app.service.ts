import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    throw new NotFoundException('No Hello found');
    return 'Hello World!';
  }
}
