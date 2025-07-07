import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RolePermissions } from './domain/entities/role_permissions.entity';
import { CreateRolePermissionDto } from './interfaces/dto/create-role_permissions.dto';
import { UpdateRolePermissionDto } from './interfaces/dto/update-role_permissions.dto';

@Injectable()
export class RolePermissionsService {
  constructor(
    @InjectRepository(RolePermissions)
    private readonly rolePermissionsRepository: Repository<RolePermissions>,
  ) {}

  async create(createRolePermissionDto: CreateRolePermissionDto): Promise<RolePermissions> {
    const rolePermission = this.rolePermissionsRepository.create(createRolePermissionDto);
    return await this.rolePermissionsRepository.save(rolePermission);
  }

  async findByIds(role_id: number, permission_id: number): Promise<RolePermissions> {
    const rolePermission = await this.rolePermissionsRepository.findOneBy({ role_id, permission_id });
    if (!rolePermission) {
      throw new NotFoundException(`Relación Rol-Permiso con IDs ${role_id}, ${permission_id} no encontrada`);
    }
    return rolePermission;
  }

  async update(role_id: number, permission_id: number, updateRolePermissionDto: UpdateRolePermissionDto): Promise<RolePermissions> {
    const rolePermission = await this.rolePermissionsRepository.findOneBy({ role_id, permission_id });
    if (!rolePermission) {
      throw new NotFoundException(`Relación Rol-Permiso con IDs ${role_id}, ${permission_id} no encontrada`);
    }
    Object.assign(rolePermission, updateRolePermissionDto);
    return await this.rolePermissionsRepository.save(rolePermission);
  }

  async replace(role_id: number, permission_id: number, createRolePermissionDto: CreateRolePermissionDto): Promise<RolePermissions> {
    const rolePermission = await this.rolePermissionsRepository.findOneBy({ role_id, permission_id });
    if (!rolePermission) {
      throw new NotFoundException(`Relación Rol-Permiso con IDs ${role_id}, ${permission_id} no encontrada`);
    }
    Object.assign(rolePermission, createRolePermissionDto);
    return await this.rolePermissionsRepository.save(rolePermission);
  }

  async delete(role_id: number, permission_id: number): Promise<void> {
    const result = await this.rolePermissionsRepository.delete({ role_id, permission_id });
    if (result.affected === 0) {
      throw new NotFoundException(`Relación Rol-Permiso con IDs ${role_id}, ${permission_id} no encontrada`);
    }
  }
}
