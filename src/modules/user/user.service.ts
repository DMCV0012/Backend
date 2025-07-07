import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './domain/entities/user.entity';
import { CreateUserDto } from './interfaces/dto/create-user.dto';
import { UpdateUserDto } from './interfaces/dto/update-user.dto';

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

  async findById(id_users: number): Promise<User> {
    const user = await this.userRepository.findOneBy({ id_users });
    if (!user) {
      throw new NotFoundException(`Usuario con ID ${id_users} no encontrado`);
    }
    return user;
  }

  async update(id_users: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userRepository.findOneBy({ id_users });
    if (!user) {
      throw new NotFoundException(`Usuario con ID ${id_users} no encontrado`);
    }
    Object.assign(user, updateUserDto);
    return await this.userRepository.save(user);
  }

  async replace(id_users: number, createUserDto: CreateUserDto): Promise<User> {
    const user = await this.userRepository.findOneBy({ id_users });
    if (!user) {
      throw new NotFoundException(`Usuario con ID ${id_users} no encontrado`);
    }
    Object.assign(user, createUserDto);
    return await this.userRepository.save(user);
  }

  async delete(id_users: number): Promise<void> {
    const result = await this.userRepository.delete(id_users);
    if (result.affected === 0) {
      throw new NotFoundException(`Usuario con ID ${id_users} no encontrado`);
    }
  }
}
