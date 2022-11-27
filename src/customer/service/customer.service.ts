import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
      try {
         const updateCustomer = await this.customerModel.findByIdAndUpdate(
            id,
            { firstname: data.firstname },
            {
               new: true,
            },
         );

         return updateCustomer;
      } catch (error) {
         throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
      }
   }
}
