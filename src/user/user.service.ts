import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(private readonly UserRepository: UserRepository) {}

    postUser(name: string, email: string, password: string, avatar: string) {
        const hashPassword = bcrypt.hashSync(password, 10);

        return this.UserRepository.postUser(name, email, hashPassword, avatar);
    }
    

}

