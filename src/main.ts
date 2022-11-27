import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as morgan from 'morgan';
import { SwaggerModule } from '@nestjs/swagger';
import { createDocument } from './swagger/swagger';

async function bootstrap() {
   const app = await NestFactory.create(AppModule);
   app.setGlobalPrefix('api/v1');
   SwaggerModule.setup('api', app, createDocument(app));
   app.use(morgan('dev'));
   await app.listen(3000);
}
bootstrap();
