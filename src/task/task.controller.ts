import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { Task } from './interface/task.interface';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
   constructor(private taskService: TaskService) {}

   @Get()
   async getAllTask(): Promise<Task[]> {
      const data = await this.taskService.getAllTask();
      return data;
   }

   @Get(':id')
   async getTask(@Param('id') id: string): Promise<Task> {
      const data = this.taskService.getTask(id);
     
      return data;
   }

   @Post('create')
   async addTask(@Body() task: Task) {
      const data = await this.taskService.addTask(task);
      return data;
   }
}
