// subjects/subject.controller.ts
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
import { SubjectService } from './subject.service';
import { CreateSubjectDto } from './interfaces/dto/create-subject.dto';
import { UpdateSubjectDto } from './interfaces/dto/update-subject.dto';
import { Subject } from './domain/entities/subject.entity';

@ApiTags('subjects')
@Controller('subjects')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva Materia' })
  @ApiCreatedResponse({ type: Subject, description: 'Materia creada exitosamente' })
  @ApiBadRequestResponse({ description: 'Los datos proporcionados no son válidos.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createSubjectDto: CreateSubjectDto): Promise<Subject> {
    return this.subjectService.create(createSubjectDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una materia por ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID de la materia' })
  @ApiOkResponse({ type: Subject, description: 'Materia encontrada exitosamente' })
  @ApiBadRequestResponse({ description: 'El parámetro proporcionado no es válido.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  async findById(@Param('id') id: number): Promise<Subject> {
    return this.subjectService.findById(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar parcialmente una materia' })
  @ApiParam({ name: 'id', type: Number, description: 'ID de la materia' })
  @ApiOkResponse({ type: Subject, description: 'Materia actualizada exitosamente' })
  @ApiBadRequestResponse({ description: 'Los datos proporcionados no son válidos.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  async update(
    @Param('id') id: number,
    @Body() updateSubjectDto: UpdateSubjectDto,
  ): Promise<Subject> {
    return this.subjectService.update(id, updateSubjectDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Reemplazar completamente una materia' })
  @ApiParam({ name: 'id', type: Number, description: 'ID de la materia' })
  @ApiOkResponse({ type: Subject, description: 'Materia reemplazada exitosamente' })
  @ApiBadRequestResponse({ description: 'Los datos proporcionados no son válidos.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  async replace(
    @Param('id') id: number,
    @Body() createSubjectDto: CreateSubjectDto,
  ): Promise<Subject> {
    return this.subjectService.replace(id, createSubjectDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una materia' })
  @ApiParam({ name: 'id', type: Number, description: 'ID de la materia' })
  @ApiNoContentResponse({ description: 'Materia eliminada exitosamente' })
  @ApiBadRequestResponse({ description: 'El parámetro proporcionado no es válido.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  async delete(@Param('id') id: number): Promise<void> {
    await this.subjectService.delete(id);
  }
}
