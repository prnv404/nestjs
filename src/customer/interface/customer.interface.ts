import { Document } from 'mongoose';

export interface Customer extends Document {
   readonly firstname: string;
   readonly lastname: string;
   readonly email: string;
   readonly phone: string;
   readonly address: string;
   readonly description: string;
}
