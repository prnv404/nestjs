import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './interface/task.interface';
import { TaskStoreService } from './task-store.service';

@Injectable()
export class TaskService {
   constructor(private readonly taskStoreService: TaskStoreService) {}
   public async addTask(task: Task): Promise<Task> {
      return this.taskStoreService.addTask(task);
   }

   public async getTask(id: string): Promise<Task> {
      const data = this.taskStoreService.getTask(id);
     
      return data;
   }

   public async getAllTask(): Promise<Task[]> {
      return this.taskStoreService.getAllTask();
   }
}
