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
import { UserService } from './user.service';
import { CreateUserDto } from './interfaces/dto/create-user.dto';
import { UpdateUserDto } from './interfaces/dto/update-user.dto';
import { User } from './domain/entities/user.entity';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo Usuario' })
  @ApiCreatedResponse({ type: User, description: 'Usuario creado exitosamente' })
  @ApiBadRequestResponse({ description: 'Datos inválidos.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }

  @Get(':id_users')
  @ApiOperation({ summary: 'Obtener un usuario por ID' })
  @ApiParam({ name: 'id_users', type: Number, description: 'ID del usuario' })
  @ApiOkResponse({ type: User, description: 'Usuario encontrado exitosamente' })
  @ApiBadRequestResponse({ description: 'Parámetro inválido.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  async findById(@Param('id_users') id_users: number): Promise<User> {
    return this.userService.findById(id_users);
  }

  @Patch(':id_users')
  @ApiOperation({ summary: 'Actualizar parcialmente un usuario' })
  @ApiParam({ name: 'id_users', type: Number, description: 'ID del usuario' })
  @ApiOkResponse({ type: User, description: 'Usuario actualizado exitosamente' })
  @ApiBadRequestResponse({ description: 'Datos inválidos.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  async update(
    @Param('id_users') id_users: number,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.userService.update(id_users, updateUserDto);
  }

  @Put(':id_users')
  @ApiOperation({ summary: 'Reemplazar completamente un usuario' })
  @ApiParam({ name: 'id_users', type: Number, description: 'ID del usuario' })
  @ApiOkResponse({ type: User, description: 'Usuario reemplazado exitosamente' })
  @ApiBadRequestResponse({ description: 'Datos inválidos.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  async replace(
    @Param('id_users') id_users: number,
    @Body() createUserDto: CreateUserDto,
  ): Promise<User> {
    return this.userService.replace(id_users, createUserDto);
  }

  @Delete(':id_users')
  @ApiOperation({ summary: 'Eliminar un usuario' })
  @ApiParam({ name: 'id_users', type: Number, description: 'ID del usuario' })
  @ApiNoContentResponse({ description: 'Usuario eliminado exitosamente' })
  @ApiBadRequestResponse({ description: 'Parámetro inválido.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  async remove(@Param('id_users') id_users: number): Promise<void> {
    return this.userService.delete(id_users);
  }
}
