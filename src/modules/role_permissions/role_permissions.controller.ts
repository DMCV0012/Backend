import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { RolePermissionsService } from './role_permissions.service';
import { CreateRolePermissionDto } from './dto/create-role_permission.dto';

@Controller('role-permissions')
export class RolePermissionsController {
  constructor(private readonly rolePermissionsService: RolePermissionsService) {}

  @Post()
  create(@Body() dto: CreateRolePermissionDto) {
    return this.rolePermissionsService.create(dto);
  }

  @Get()
  findAll() {
    return this.rolePermissionsService.findAll();
  }

  @Get(':role_id/:permission_id')
  findOne(@Param('role_id') role_id: string, @Param('permission_id') permission_id: string) {
    return this.rolePermissionsService.findOne(+role_id, +permission_id);
  }

  @Delete(':role_id/:permission_id')
  remove(@Param('role_id') role_id: string, @Param('permission_id') permission_id: string) {
    return this.rolePermissionsService.remove(+role_id, +permission_id);
  }
}
