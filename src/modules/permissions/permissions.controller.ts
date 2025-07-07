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
import { PermissionsService } from './permissions.service';
import { CreatePermissionDto } from './interfaces/dto/create-permissions.dto';
import { UpdatePermissionDto } from './interfaces/dto/update-permissions.dto';
import { Permission } from './domain/entities/permission.entity';

@ApiTags('permissions')
@Controller('permissions')
export class PermissionsController {
  constructor(private readonly permissionsService: PermissionsService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo Permiso' })
  @ApiCreatedResponse({ type: Permission, description: 'Permiso creado exitosamente' })
  @ApiBadRequestResponse({ description: 'Los datos proporcionados no son válidos.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createPermissionDto: CreatePermissionDto): Promise<Permission> {
    return this.permissionsService.create(createPermissionDto);
  }

  @Get(':id_permissions')
  @ApiOperation({ summary: 'Obtener un permiso por ID' })
  @ApiParam({ name: 'id_permissions', type: Number, description: 'ID del permiso' })
  @ApiOkResponse({ type: Permission, description: 'Permiso encontrado exitosamente' })
  @ApiBadRequestResponse({ description: 'El parámetro proporcionado no es válido.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  async findById(@Param('id_permissions') id_permissions: number): Promise<Permission> {
    return this.permissionsService.findById(id_permissions);
  }

  @Patch(':id_permissions')
  @ApiOperation({ summary: 'Actualizar parcialmente un permiso' })
  @ApiParam({ name: 'id_permissions', type: Number, description: 'ID del permiso' })
  @ApiOkResponse({ type: Permission, description: 'Permiso actualizado exitosamente' })
  @ApiBadRequestResponse({ description: 'Los datos proporcionados no son válidos.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  async update(
    @Param('id_permissions') id_permissions: number,
    @Body() updatePermissionDto: UpdatePermissionDto,
  ): Promise<Permission> {
    return this.permissionsService.update(id_permissions, updatePermissionDto);
  }

  @Put(':id_permissions')
  @ApiOperation({ summary: 'Reemplazar completamente un permiso' })
  @ApiParam({ name: 'id_permissions', type: Number, description: 'ID del permiso' })
  @ApiOkResponse({ type: Permission, description: 'Permiso reemplazado exitosamente' })
  @ApiBadRequestResponse({ description: 'Los datos proporcionados no son válidos.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  async replace(
    @Param('id_permissions') id_permissions: number,
    @Body() createPermissionDto: CreatePermissionDto,
  ): Promise<Permission> {
    return this.permissionsService.replace(id_permissions, createPermissionDto);
  }

  @Delete(':id_permissions')
  @ApiOperation({ summary: 'Eliminar un permiso' })
  @ApiParam({ name: 'id_permissions', type: Number, description: 'ID del permiso' })
  @ApiNoContentResponse({ description: 'Permiso eliminado exitosamente' })
  @ApiBadRequestResponse({ description: 'El parámetro proporcionado no es válido.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  async delete(@Param('id_permissions') id_permissions: number): Promise<void> {
    await this.permissionsService.delete(id_permissions);
  }
}
