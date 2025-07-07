import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserRoles } from './domain/entities/user_roles.entity';
import { CreateUserRoleDto } from './interfaces/dto/create-user_roles.dto';
import { UpdateUserRoleDto } from './interfaces/dto/update-user_roles.dto';

@Injectable()
export class UserRolesService {
  constructor(
    @InjectRepository(UserRoles)
    private readonly userRolesRepository: Repository<UserRoles>,
  ) {}

  async create(createUserRoleDto: CreateUserRoleDto): Promise<UserRoles> {
    const userRole = this.userRolesRepository.create(createUserRoleDto);
    return await this.userRolesRepository.save(userRole);
  }

  async findById(id: number): Promise<UserRoles> {
    const userRole = await this.userRolesRepository.findOneBy({ id });
    if (!userRole) {
      throw new NotFoundException(`Relación Usuario-Rol con ID ${id} no encontrada`);
    }
    return userRole;
  }

  async update(id: number, updateUserRoleDto: UpdateUserRoleDto): Promise<UserRoles> {
    const userRole = await this.userRolesRepository.findOneBy({ id });
    if (!userRole) {
      throw new NotFoundException(`Relación Usuario-Rol con ID ${id} no encontrada`);
    }
    Object.assign(userRole, updateUserRoleDto);
    return await this.userRolesRepository.save(userRole);
  }

  async replace(id: number, createUserRoleDto: CreateUserRoleDto): Promise<UserRoles> {
    const userRole = await this.userRolesRepository.findOneBy({ id });
    if (!userRole) {
      throw new NotFoundException(`Relación Usuario-Rol con ID ${id} no encontrada`);
    }
    Object.assign(userRole, createUserRoleDto);
    return await this.userRolesRepository.save(userRole);
  }

  async delete(id: number): Promise<void> {
    const result = await this.userRolesRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Relación Usuario-Rol con ID ${id} no encontrada`);
    }
  }
}
