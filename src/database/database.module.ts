import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
   imports: [MongooseModule.forRoot('mongodb://localhost:2000/nestjs')],
})
export class DatabaseModule {}
