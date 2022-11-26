import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Task } from './interface/task.interface';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
   constructor(private taskService: TaskService) {}

   @Get()
   getAllTask(): Promise<Task[]> {
      return this.taskService.getAllTask();
   }

   @Get(':id')
   getTask(@Param('id') id: string): Promise<Task> {
      return this.taskService.getTask(id);
   }
    
    @Post('create')
    addTask(@Body() task:Task) {
        
    }
}
