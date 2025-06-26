// courses/course.controller.ts
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
import { CourseService } from './course.service';
import { CreateCourseDto } from './interfaces/dto/create-course.dto';
import { UpdateCourseDto } from './interfaces/dto/update-course.dto';
import { Course } from './domain/entities/course.entity';

@ApiTags('courses')
@Controller('courses')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo curso' })
  @ApiCreatedResponse({ type: Course, description: 'Curso creado exitosamente' })
  @ApiBadRequestResponse({ description: 'Los datos proporcionados no son válidos.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createCourseDto: CreateCourseDto): Promise<Course> {
    return this.courseService.create(createCourseDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un curso por ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID del curso' })
  @ApiOkResponse({ type: Course, description: 'Curso encontrado exitosamente' })
  @ApiBadRequestResponse({ description: 'El parámetro proporcionado no es válido.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  async findById(@Param('id') id: number): Promise<Course> {
    return this.courseService.findById(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar parcialmente un curso' })
  @ApiParam({ name: 'id', type: Number, description: 'ID del curso' })
  @ApiOkResponse({ type: Course, description: 'Curso actualizado exitosamente' })
  @ApiBadRequestResponse({ description: 'Los datos proporcionados no son válidos.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  async update(
    @Param('id') id: number,
    @Body() updateCourseDto: UpdateCourseDto,
  ): Promise<Course> {
    return this.courseService.update(id, updateCourseDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Reemplazar completamente un curso' })
  @ApiParam({ name: 'id', type: Number, description: 'ID del curso' })
  @ApiOkResponse({ type: Course, description: 'Curso reemplazado exitosamente' })
  @ApiBadRequestResponse({ description: 'Los datos proporcionados no son válidos.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  async replace(
    @Param('id') id: number,
    @Body() createCourseDto: CreateCourseDto,
  ): Promise<Course> {
    return this.courseService.replace(id, createCourseDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un curso' })
  @ApiParam({ name: 'id', type: Number, description: 'ID del curso' })
  @ApiNoContentResponse({ description: 'Curso eliminado exitosamente' })
  @ApiBadRequestResponse({ description: 'El parámetro proporcionado no es válido.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  async delete(@Param('id') id: number): Promise<void> {
    await this.courseService.delete(id);
  }
}
