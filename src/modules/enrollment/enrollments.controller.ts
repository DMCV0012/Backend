// enrollments/enrollment.controller.ts
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
import { EnrollmentService } from './enrollments.service';
import { CreateEnrollmentDto } from './interfaces/dto/create-enrollment.dto';
import { UpdateEnrollmentDto } from './interfaces/dto/update-enrollment.dto';
import { Enrollment } from './domain/entities/enrollment.entity';

@ApiTags('enrollments')
@Controller('enrollments')
export class EnrollmentController {
  constructor(private readonly enrollmentService: EnrollmentService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva inscripción' })
  @ApiCreatedResponse({ type: Enrollment, description: 'Inscripción creada exitosamente' })
  @ApiBadRequestResponse({ description: 'Los datos proporcionados no son válidos.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createEnrollmentDto: CreateEnrollmentDto): Promise<Enrollment> {
    return this.enrollmentService.create(createEnrollmentDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una inscripción por ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID de la inscripción' })
  @ApiOkResponse({ type: Enrollment, description: 'Inscripción encontrada exitosamente' })
  @ApiBadRequestResponse({ description: 'El parámetro proporcionado no es válido.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  async findById(@Param('id') id: number): Promise<Enrollment> {
    return this.enrollmentService.findById(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar parcialmente una inscripción' })
  @ApiParam({ name: 'id', type: Number, description: 'ID de la inscripción' })
  @ApiOkResponse({ type: Enrollment, description: 'Inscripción actualizada exitosamente' })
  @ApiBadRequestResponse({ description: 'Los datos proporcionados no son válidos.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  async update(
    @Param('id') id: number,
    @Body() updateEnrollmentDto: UpdateEnrollmentDto,
  ): Promise<Enrollment> {
    return this.enrollmentService.update(id, updateEnrollmentDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Reemplazar completamente una inscripción' })
  @ApiParam({ name: 'id', type: Number, description: 'ID de la inscripción' })
  @ApiOkResponse({ type: Enrollment, description: 'Inscripción reemplazada exitosamente' })
  @ApiBadRequestResponse({ description: 'Los datos proporcionados no son válidos.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  async replace(
    @Param('id') id: number,
    @Body() createEnrollmentDto: CreateEnrollmentDto,
  ): Promise<Enrollment> {
    return this.enrollmentService.replace(id, createEnrollmentDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una inscripción' })
  @ApiParam({ name: 'id', type: Number, description: 'ID de la inscripción' })
  @ApiNoContentResponse({ description: 'Inscripción eliminada exitosamente' })
  @ApiBadRequestResponse({ description: 'El parámetro proporcionado no es válido.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  async delete(@Param('id') id: number): Promise<void> {
    await this.enrollmentService.delete(id);
  }
}
