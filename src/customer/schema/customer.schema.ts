import * as mongoose from 'mongoose';

export const CustomerSchema = new mongoose.Schema(
   {
      firstname: String,
      lastname: String,
      email: String,
      phone: Number,
      address: String,
      descripton: String,
   },
   { timestamps: true },
);
