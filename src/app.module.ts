import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';
import { DatabaseModule } from './database/database.module';
import { CustomerModule } from './customer/customer.module';
import { AuthModule } from './auth/auth.module';

@Module({
   imports: [UserModule, TaskModule, DatabaseModule, CustomerModule, AuthModule],
   controllers: [AppController],
   providers: [AppService],
})
export class AppModule {}
