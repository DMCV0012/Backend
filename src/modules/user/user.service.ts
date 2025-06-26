import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './interfaces/dto/create-user.dto';
import { UpdateUserDto } from './interfaces/dto/update-user.dto';
import { User } from './domain/entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    async create(createUserDto: CreateUserDto): Promise<User> {
        const user = this.userRepository.create(createUserDto);
        return await this.userRepository.save(user);
    }

    async register(createUserDto: CreateUserDto): Promise<User> {
        const user = this.userRepository.create(createUserDto);
        return await this.userRepository.save(user);
    }

    async findById(user_id: number): Promise<User> {
        const user = await this.userRepository.findOneBy({ user_id });
        if (!user) {
            throw new Error('Usuario no encontrado');
        }
        return user;
    }

    async update(user_id: number, updateUserDto: UpdateUserDto): Promise<User> {
        const user = await this.userRepository.findOneBy({ user_id });
        if (!user) {
            throw new Error('Usuario no encontrado');
        }
        Object.assign(user, updateUserDto);
        return await this.userRepository.save(user);
    }

    async replace(user_id: number, createUserDto: CreateUserDto): Promise<User> {
        const user = await this.userRepository.findOneBy({ user_id });
        if (!user) {
            throw new Error('Usuario no encontrado');
        }
        // Reemplaza todos los campos excepto el id y la fecha de registro
        user.username = createUserDto.username;
        user.email = createUserDto.email;
        return await this.userRepository.save(user);
    }

    async delete(user_id: number): Promise<void> {
        const result = await this.userRepository.delete(user_id);
        if (result.affected === 0) {
            throw new Error('Usuario no encontrado');
        }
    }
}
