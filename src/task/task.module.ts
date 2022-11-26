import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskStoreService } from './task-store.service';

@Module({
   controllers: [TaskController],
   providers: [TaskStoreService],
})
export class TaskModule {}
