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
import { RolesService } from './roles.service';
import { CreateRoleDto } from './interfaces/dto/create-roles.dto';
import { UpdateRoleDto } from './interfaces/dto/update-roles.dto';
import { Role } from './domain/entities/roles.entity';

@ApiTags('roles')
@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo Rol' })
  @ApiCreatedResponse({ type: Role, description: 'Rol creado exitosamente' })
  @ApiBadRequestResponse({ description: 'Los datos proporcionados no son válidos.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createRoleDto: CreateRoleDto): Promise<Role> {
    return this.rolesService.create(createRoleDto);
  }

  @Get(':id_role')
  @ApiOperation({ summary: 'Obtener un rol por ID' })
  @ApiParam({ name: 'id_role', type: Number, description: 'ID del rol' })
  @ApiOkResponse({ type: Role, description: 'Rol encontrado exitosamente' })
  @ApiBadRequestResponse({ description: 'El parámetro proporcionado no es válido.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  async findById(@Param('id_role') id_role: number): Promise<Role> {
    return this.rolesService.findById(id_role);
  }

  @Patch(':id_role')
  @ApiOperation({ summary: 'Actualizar parcialmente un rol' })
  @ApiParam({ name: 'id_role', type: Number, description: 'ID del rol' })
  @ApiOkResponse({ type: Role, description: 'Rol actualizado exitosamente' })
  @ApiBadRequestResponse({ description: 'Los datos proporcionados no son válidos.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  async update(
    @Param('id_role') id_role: number,
    @Body() updateRoleDto: UpdateRoleDto,
  ): Promise<Role> {
    return this.rolesService.update(id_role, updateRoleDto);
  }

  @Put(':id_role')
  @ApiOperation({ summary: 'Reemplazar completamente un rol' })
  @ApiParam({ name: 'id_role', type: Number, description: 'ID del rol' })
  @ApiOkResponse({ type: Role, description: 'Rol reemplazado exitosamente' })
  @ApiBadRequestResponse({ description: 'Los datos proporcionados no son válidos.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  async replace(
    @Param('id_role') id_role: number,
    @Body() createRoleDto: CreateRoleDto,
  ): Promise<Role> {
    return this.rolesService.replace(id_role, createRoleDto);
  }

  @Delete(':id_role')
  @ApiOperation({ summary: 'Eliminar un rol' })
  @ApiParam({ name: 'id_role', type: Number, description: 'ID del rol' })
  @ApiNoContentResponse({ description: 'Rol eliminado exitosamente' })
  @ApiBadRequestResponse({ description: 'El parámetro proporcionado no es válido.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  async delete(@Param('id_role') id_role: number): Promise<void> {
    await this.rolesService.delete(id_role);
  }
}
