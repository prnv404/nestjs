import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerController } from './controller/customer.controller';
import { CustomerSchema } from './schema/customer.schema';
import { CustomerService } from './service/customer.service';
import { JwtService } from '@nestjs/jwt';
@Module({
   imports: [
      MongooseModule.forFeature([{ name: 'Customer', schema: CustomerSchema }]),
   ],
   controllers: [CustomerController],
   providers: [CustomerService, JwtService],
})
export class CustomerModule {}
