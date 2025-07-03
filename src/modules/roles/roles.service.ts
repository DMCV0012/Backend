import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './domain/entities/role.entity';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}

  create(dto: CreateRoleDto) {
    return this.roleRepository.save(dto);
  }

  findAll() {
    return this.roleRepository.find();
  }

  findOne(id: number) {
    return this.roleRepository.findOneBy({ id_role: id });
  }

  update(id: number, dto: UpdateRoleDto) {
    return this.roleRepository.update(id, dto);
  }

  remove(id: number) {
    return this.roleRepository.delete(id);
  }
}
