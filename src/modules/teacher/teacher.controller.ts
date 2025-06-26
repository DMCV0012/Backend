// teachers/teacher.controller.ts
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
import { TeacherService } from './teacher.service';
import { CreateTeacherDto } from './interfaces/dto/create-teacher.dto';
import { UpdateTeacherDto } from './interfaces/dto/update-teacher.dto';
import { Teacher } from './domain/entities/teacher.entity';

@ApiTags('teachers')
@Controller('teachers')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo Profesor' })
  @ApiCreatedResponse({ type: Teacher, description: 'Profesor creado exitosamente' })
  @ApiBadRequestResponse({ description: 'Los datos proporcionados no son válidos.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createTeacherDto: CreateTeacherDto): Promise<Teacher> {
    return this.teacherService.create(createTeacherDto);
  }

  @Get(':ci')
  @ApiOperation({ summary: 'Obtener un profesor por CI' })
  @ApiParam({ name: 'ci', type: Number, description: 'CI del profesor' })
  @ApiOkResponse({ type: Teacher, description: 'Profesor encontrado exitosamente' })
  @ApiBadRequestResponse({ description: 'El parámetro proporcionado no es válido.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  async findByCi(@Param('ci') ci: number): Promise<Teacher> {
    return this.teacherService.findByCi(ci);
  }

  @Patch(':ci')
  @ApiOperation({ summary: 'Actualizar parcialmente un profesor' })
  @ApiParam({ name: 'ci', type: Number, description: 'CI del profesor' })
  @ApiOkResponse({ type: Teacher, description: 'Profesor actualizado exitosamente' })
  @ApiBadRequestResponse({ description: 'Los datos proporcionados no son válidos.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  async update(
    @Param('ci') ci: number,
    @Body() updateTeacherDto: UpdateTeacherDto,
  ): Promise<Teacher> {
    return this.teacherService.update(ci, updateTeacherDto);
  }

  @Put(':ci')
  @ApiOperation({ summary: 'Reemplazar completamente un profesor' })
  @ApiParam({ name: 'ci', type: Number, description: 'CI del profesor' })
  @ApiOkResponse({ type: Teacher, description: 'Profesor reemplazado exitosamente' })
  @ApiBadRequestResponse({ description: 'Los datos proporcionados no son válidos.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  async replace(
    @Param('ci') ci: number,
    @Body() createTeacherDto: CreateTeacherDto,
  ): Promise<Teacher> {
    return this.teacherService.replace(ci, createTeacherDto);
  }

  @Delete(':ci')
  @ApiOperation({ summary: 'Eliminar un profesor' })
  @ApiParam({ name: 'ci', type: Number, description: 'CI del profesor' })
  @ApiNoContentResponse({ description: 'Profesor eliminado exitosamente' })
  @ApiBadRequestResponse({ description: 'El parámetro proporcionado no es válido.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  async delete(@Param('ci') ci: number): Promise<void> {
    await this.teacherService.delete(ci);
  }
}
