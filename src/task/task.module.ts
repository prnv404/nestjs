import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskStoreService } from './task-store.service';
import { TaskService } from './task.service';

@Module({
   controllers: [TaskController],
   providers: [TaskStoreService,TaskService],
})
export class TaskModule {}
