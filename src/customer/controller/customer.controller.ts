import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Customer } from '../interface/customer.interface';
import { CustomerService } from '../service/customer.service';

@Controller('customer')
export class CustomerController {
   constructor(private customerService: CustomerService) {}

   @Get()
   async listCustomer(): Promise<Customer[]> {
      const data = await this.customerService.listCustomer();
      return data;
   }

   @Get(':id')
   async getCustomer(@Param('id') id: string): Promise<Customer> {
      return this.customerService.getCustomer(id);
   }

   @Post('create')
   async createCustomer(@Body() data: Customer): Promise<Customer> {
      const customer = await this.customerService.createCustomer(data);
      return customer;
   }
}
