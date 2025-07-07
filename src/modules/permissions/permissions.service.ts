import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Permission } from './domain/entities/permission.entity';
import { CreatePermissionDto } from './interfaces/dto/create-permissions.dto';
import { UpdatePermissionDto } from './interfaces/dto/update-permissions.dto';

@Injectable()
export class PermissionsService {
  constructor(
    @InjectRepository(Permission)
    private readonly permissionRepository: Repository<Permission>,
  ) {}

  async create(createPermissionDto: CreatePermissionDto): Promise<Permission> {
    const permission = this.permissionRepository.create(createPermissionDto);
    return await this.permissionRepository.save(permission);
  }

  async findById(id_permissions: number): Promise<Permission> {
    const permission = await this.permissionRepository.findOneBy({ id_permissions });
    if (!permission) {
      throw new NotFoundException(`Permiso con ID ${id_permissions} no encontrado`);
    }
    return permission;
  }

  async update(id_permissions: number, updatePermissionDto: UpdatePermissionDto): Promise<Permission> {
    const permission = await this.permissionRepository.findOneBy({ id_permissions });
    if (!permission) {
      throw new NotFoundException(`Permiso con ID ${id_permissions} no encontrado`);
    }
    Object.assign(permission, updatePermissionDto);
    return await this.permissionRepository.save(permission);
  }

  async replace(id_permissions: number, createPermissionDto: CreatePermissionDto): Promise<Permission> {
    const permission = await this.permissionRepository.findOneBy({ id_permissions });
    if (!permission) {
      throw new NotFoundException(`Permiso con ID ${id_permissions} no encontrado`);
    }
    Object.assign(permission, createPermissionDto);
    return await this.permissionRepository.save(permission);
  }

  async delete(id_permissions: number): Promise<void> {
    const result = await this.permissionRepository.delete(id_permissions);
    if (result.affected === 0) {
      throw new NotFoundException(`Permiso con ID ${id_permissions} no encontrado`);
    }
  }
}
