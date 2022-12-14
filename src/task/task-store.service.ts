import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './interface/task.interface';

@Injectable()
export class TaskStoreService {
   private tasks: Task[] = [];

   public async addTask(task: Task): Promise<Task> {
      this.tasks.push(task);
      return task;
   }

   public async getTask(id: string): Promise<Task> {
      const task = this.tasks.find((item) => item.id === id);
      if (!task) {
         throw new NotFoundException('No data found');
      }
      return task;
   }
   public async getAllTask(): Promise<Task[]> {
      return this.tasks;
   }
}
