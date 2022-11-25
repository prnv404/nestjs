import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    
    private arr: [] = []
    getUser(user: string) {
        return this.arr.find((item) => item === user)
    }

}