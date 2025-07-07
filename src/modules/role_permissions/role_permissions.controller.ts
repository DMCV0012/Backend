import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
  ApiOperation,
} from '@nestjs/swagger';
import { RolePermissionsService } from './role_permissions.service';
import { CreateRolePermissionDto } from './interfaces/dto/create-role_permissions.dto';
import { UpdateRolePermissionDto } from './interfaces/dto/update-role_permissions.dto';
import { RolePermissions } from './domain/entities/role_permissions.entity';

@ApiTags('role_permissions')
@Controller('role_permissions')
export class RolePermissionsController {
  constructor(private readonly rolePermissionsService: RolePermissionsService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva relación Rol-Permiso' })
  @ApiCreatedResponse({ type: RolePermissions, description: 'Relación creada exitosamente' })
  @ApiBadRequestResponse({ description: 'Los datos proporcionados no son válidos.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createRolePermissionDto: CreateRolePermissionDto): Promise<RolePermissions> {
    return this.rolePermissionsService.create(createRolePermissionDto);
  }

  @Get(':role_id/:permission_id')
  @ApiOperation({ summary: 'Obtener una relación por IDs' })
  @ApiParam({ name: 'role_id', type: Number, description: 'ID del rol' })
  @ApiParam({ name: 'permission_id', type: Number, description: 'ID del permiso' })
  @ApiOkResponse({ type: RolePermissions, description: 'Relación encontrada exitosamente' })
  @ApiBadRequestResponse({ description: 'Los parámetros proporcionados no son válidos.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  async findByIds(
    @Param('role_id') role_id: number,
    @Param('permission_id') permission_id: number,
  ): Promise<RolePermissions> {
    return this.rolePermissionsService.findByIds(role_id, permission_id);
  }

  @Patch(':role_id/:permission_id')
  @ApiOperation({ summary: 'Actualizar parcialmente una relación' })
  @ApiParam({ name: 'role_id', type: Number, description: 'ID del rol' })
  @ApiParam({ name: 'permission_id', type: Number, description: 'ID del permiso' })
  @ApiOkResponse({ type: RolePermissions, description: 'Relación actualizada exitosamente' })
  @ApiBadRequestResponse({ description: 'Los parámetros proporcionados no son válidos.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  async update(
    @Param('role_id') role_id: number,
    @Param('permission_id') permission_id: number,
    @Body() updateRolePermissionDto: UpdateRolePermissionDto,
  ): Promise<RolePermissions> {
    return this.rolePermissionsService.update(role_id, permission_id, updateRolePermissionDto);
  }

  @Put(':role_id/:permission_id')
  @ApiOperation({ summary: 'Reemplazar completamente una relación' })
  @ApiParam({ name: 'role_id', type: Number, description: 'ID del rol' })
  @ApiParam({ name: 'permission_id', type: Number, description: 'ID del permiso' })
  @ApiOkResponse({ type: RolePermissions, description: 'Relación reemplazada exitosamente' })
  @ApiBadRequestResponse({ description: 'Los parámetros proporcionados no son válidos.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  async replace(
    @Param('role_id') role_id: number,
    @Param('permission_id') permission_id: number,
    @Body() createRolePermissionDto: CreateRolePermissionDto,
  ): Promise<RolePermissions> {
    return this.rolePermissionsService.replace(role_id, permission_id, createRolePermissionDto);
  }

  @Delete(':role_id/:permission_id')
  @ApiOperation({ summary: 'Eliminar una relación Rol-Permiso' })
  @ApiParam({ name: 'role_id', type: Number, description: 'ID del rol' })
  @ApiParam({ name: 'permission_id', type: Number, description: 'ID del permiso' })
  @ApiNoContentResponse({ description: 'Relación eliminada exitosamente' })
  @ApiBadRequestResponse({ description: 'Los parámetros proporcionados no son válidos.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  async delete(
    @Param('role_id') role_id: number,
    @Param('permission_id') permission_id: number,
  ): Promise<void> {
    await this.rolePermissionsService.delete(role_id, permission_id);
  }
}
