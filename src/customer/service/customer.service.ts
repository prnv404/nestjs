import {
   HttpException,
   HttpStatus,
   Injectable,
   NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Customer } from '../interface/customer.interface';
@Injectable()
export class CustomerService {
   constructor(
      @InjectModel('Customer') private readonly customerModel: Model<Customer>,
   ) {}

   async listCustomer(): Promise<Customer[]> {
      const customers = await this.customerModel.find({});
      return customers;
   }

   async getCustomer(id: string): Promise<Customer> {
      const customer = await this.customerModel.findById(id);
      return customer;
   }

   async createCustomer(data: Customer): Promise<Customer> {
      const customer = await this.customerModel.create(data);
      return customer;
   }

   async updateCustomer(id: string, data: Customer): Promise<Customer> {
      console.log(id);

      const updateCustomer = await this.customerModel.findByIdAndUpdate(
         id,
         { firstname: data.firstname },
         {
            new: true,
         },
      );

      if (!updateCustomer) {
         throw new HttpException('No user found', HttpStatus.NOT_FOUND);
      }

      return updateCustomer;
   }

   async deleteCustomer(id: string): Promise<Customer> {
      const deletedCustomer = await this.customerModel.findOneAndDelete({ _id: id });
      return deletedCustomer;
   }
}
