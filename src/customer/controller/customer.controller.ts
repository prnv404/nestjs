import {
   Body,
   Controller,
   Delete,
   Get,
   Param,
   Patch,
   Post,
   UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { Customer } from '../interface/customer.interface';
import { CustomerService } from '../service/customer.service';
import { JwtService } from '@nestjs/jwt';

@UseGuards(JwtAuthGuard)
@Controller('customer')
export class CustomerController {
   constructor(
      private customerService: CustomerService,
      private jwtService: JwtService,
   ) {}

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
   async createCustomer(@Body() data: Customer) {
      const customer = await this.customerService.createCustomer(data);
      const payload = { userId: customer._id, username: data.firstname };
      return {
         access_token: this.jwtService.sign(payload),
      };
   }

   @Patch('update/:id')
   async updateCustomer(@Param('id') id: string, @Body() data): Promise<Customer> {
      const updateCustomer = await this.customerService.updateCustomer(id, data);
      return updateCustomer;
   }

   @Delete(':id')
   async delteCustomer(@Param('id') id: string): Promise<Customer> {
      const deletedCustomer = await this.customerService.deleteCustomer(id);
      return deletedCustomer;
   }
}
