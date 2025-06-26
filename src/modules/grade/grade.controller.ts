// grades/grade.controller.ts
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
import { GradeService } from './grade.service';
import { CreateGradeDto } from './interfaces/dto/create-grade.dto';
import { UpdateGradeDto } from './interfaces/dto/update-grade.dto';
import { Grade } from './domain/entities/grade.entity';

@ApiTags('grades') // Etiqueta para agrupar las rutas en Swagger
@Controller('grades') // Ruta base para este controlador
export class GradeController {
  constructor(private readonly gradeService: GradeService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva Calificación' })
  @ApiCreatedResponse({ type: Grade, description: 'Calificación creada exitosamente' })
  @ApiBadRequestResponse({ description: 'Los datos proporcionados no son válidos.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createGradeDto: CreateGradeDto): Promise<Grade> {
    return this.gradeService.create(createGradeDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una calificación por ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID de la calificación' })
  @ApiOkResponse({ type: Grade, description: 'Calificación encontrada exitosamente' })
  @ApiBadRequestResponse({ description: 'El parámetro proporcionado no es válido.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  async findById(@Param('id') id: number): Promise<Grade> {
    return this.gradeService.findById(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar parcialmente una calificación' })
  @ApiParam({ name: 'id', type: Number, description: 'ID de la calificación' })
  @ApiOkResponse({ type: Grade, description: 'Calificación actualizada exitosamente' })
  @ApiBadRequestResponse({ description: 'Los datos proporcionados no son válidos.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  async update(
    @Param('id') id: number,
    @Body() updateGradeDto: UpdateGradeDto,
  ): Promise<Grade> {
    return this.gradeService.update(id, updateGradeDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Reemplazar completamente una calificación' })
  @ApiParam({ name: 'id', type: Number, description: 'ID de la calificación' })
  @ApiOkResponse({ type: Grade, description: 'Calificación reemplazada exitosamente' })
  @ApiBadRequestResponse({ description: 'Los datos proporcionados no son válidos.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  async replace(
    @Param('id') id: number,
    @Body() createGradeDto: CreateGradeDto,
  ): Promise<Grade> {
    return this.gradeService.replace(id, createGradeDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una calificación' })
  @ApiParam({ name: 'id', type: Number, description: 'ID de la calificación' })
  @ApiNoContentResponse({ description: 'Calificación eliminada exitosamente' })
  @ApiBadRequestResponse({ description: 'El parámetro proporcionado no es válido.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  async delete(@Param('id') id: number): Promise<void> {
    await this.gradeService.delete(id);
  }
}
