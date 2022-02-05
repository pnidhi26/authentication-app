import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm'
import { UserR } from '../user.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserR)
        private userRepository: Repository<UserR>,
    ) { }

    async findByEmail(email: string): Promise<UserR> {
        return await this.userRepository.findOne({
            where: {
                email: email,
            }
        });
    }

    async create(user: UserR): Promise<UserR> {
        return await this.userRepository.save(user);
    }

}