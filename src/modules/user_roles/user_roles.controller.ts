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
import { UserRolesService } from './user_roles.service';
import { CreateUserRoleDto } from './interfaces/dto/create-user_roles.dto';
import { UpdateUserRoleDto } from './interfaces/dto/update-user_roles.dto';
import { UserRoles } from './domain/entities/user_roles.entity';

@ApiTags('user_roles')
@Controller('user_roles')
export class UserRolesController {
  constructor(private readonly userRolesService: UserRolesService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva relación Usuario-Rol' })
  @ApiCreatedResponse({ type: UserRoles, description: 'Relación creada exitosamente' })
  @ApiBadRequestResponse({ description: 'Datos inválidos.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createUserRoleDto: CreateUserRoleDto): Promise<UserRoles> {
    return this.userRolesService.create(createUserRoleDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una relación por ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID de la relación' })
  @ApiOkResponse({ type: UserRoles, description: 'Relación encontrada exitosamente' })
  @ApiBadRequestResponse({ description: 'Parámetro inválido.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  async findById(@Param('id') id: number): Promise<UserRoles> {
    return this.userRolesService.findById(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar parcialmente una relación' })
  @ApiParam({ name: 'id', type: Number, description: 'ID de la relación' })
  @ApiOkResponse({ type: UserRoles, description: 'Relación actualizada exitosamente' })
  @ApiBadRequestResponse({ description: 'Datos inválidos.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  async update(
    @Param('id') id: number,
    @Body() updateUserRoleDto: UpdateUserRoleDto,
  ): Promise<UserRoles> {
    return this.userRolesService.update(id, updateUserRoleDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Reemplazar completamente una relación' })
  @ApiParam({ name: 'id', type: Number, description: 'ID de la relación' })
  @ApiOkResponse({ type: UserRoles, description: 'Relación reemplazada exitosamente' })
  @ApiBadRequestResponse({ description: 'Datos inválidos.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  async replace(
    @Param('id') id: number,
    @Body() createUserRoleDto: CreateUserRoleDto,
  ): Promise<UserRoles> {
    return this.userRolesService.replace(id, createUserRoleDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una relación Usuario-Rol' })
  @ApiParam({ name: 'id', type: Number, description: 'ID de la relación' })
  @ApiNoContentResponse({ description: 'Relación eliminada exitosamente' })
  @ApiBadRequestResponse({ description: 'Parámetro inválido.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  async delete(@Param('id') id: number): Promise<void> {
    await this.userRolesService.delete(id);
  }
}
