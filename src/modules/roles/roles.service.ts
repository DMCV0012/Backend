import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './domain/entities/roles.entity';
import { CreateRoleDto } from './interfaces/dto/create-roles.dto';
import { UpdateRoleDto } from './interfaces/dto/update-roles.dto';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}

  async create(createRoleDto: CreateRoleDto): Promise<Role> {
    const role = this.roleRepository.create(createRoleDto);
    return await this.roleRepository.save(role);
  }

  async findById(id_role: number): Promise<Role> {
    const role = await this.roleRepository.findOneBy({ id_role });
    if (!role) {
      throw new NotFoundException(`Rol con ID ${id_role} no encontrado`);
    }
    return role;
  }

  async update(id_role: number, updateRoleDto: UpdateRoleDto): Promise<Role> {
    const role = await this.roleRepository.findOneBy({ id_role });
    if (!role) {
      throw new NotFoundException(`Rol con ID ${id_role} no encontrado`);
    }
    Object.assign(role, updateRoleDto);
    return await this.roleRepository.save(role);
  }

  async replace(id_role: number, createRoleDto: CreateRoleDto): Promise<Role> {
    const role = await this.roleRepository.findOneBy({ id_role });
    if (!role) {
      throw new NotFoundException(`Rol con ID ${id_role} no encontrado`);
    }
    Object.assign(role, createRoleDto);
    return await this.roleRepository.save(role);
  }

  async delete(id_role: number): Promise<void> {
    const result = await this.roleRepository.delete(id_role);
    if (result.affected === 0) {
      throw new NotFoundException(`Rol con ID ${id_role} no encontrado`);
    }
  }
}
