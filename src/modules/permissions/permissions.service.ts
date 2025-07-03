import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Permission } from './domain/entities/permission.entity';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';

@Injectable()
export class PermissionsService {
  constructor(
    @InjectRepository(Permission)
    private readonly permissionRepository: Repository<Permission>,
  ) {}

  create(dto: CreatePermissionDto) {
    return this.permissionRepository.save(dto);
  }

  findAll() {
    return this.permissionRepository.find();
  }

  findOne(id: number) {
    return this.permissionRepository.findOneBy({ id_permissions: id });
  }

  update(id: number, dto: UpdatePermissionDto) {
    return this.permissionRepository.update(id, dto);
  }

  remove(id: number) {
    return this.permissionRepository.delete(id);
  }
}
