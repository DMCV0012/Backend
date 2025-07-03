import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RolePermission } from './entities/role_permission.entity';
import { CreateRolePermissionDto } from './dto/create-role_permission.dto';
import { UpdateRolePermissionDto } from './dto/update-role_permission.dto';

@Injectable()
export class RolePermissionsService {
  constructor(
    @InjectRepository(RolePermission)
    private readonly rolePermissionRepository: Repository<RolePermission>,
  ) {}

  create(dto: CreateRolePermissionDto) {
    return this.rolePermissionRepository.save(dto);
  }

  findAll() {
    return this.rolePermissionRepository.find();
  }

  findOne(role_id: number, permission_id: number) {
    return this.rolePermissionRepository.findOneBy({ role_id, permission_id });
  }

  remove(role_id: number, permission_id: number) {
    return this.rolePermissionRepository.delete({ role_id, permission_id });
  }
}
