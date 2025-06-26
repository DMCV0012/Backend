// students/student.controller.ts
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
import { StudentService } from './student.service';
import { CreateStudentDto } from './interfaces/dto/create-student.dto';
import { UpdateStudentDto } from './interfaces/dto/update-student.dto';
import { Student } from './domain/entities/student.entity';

@ApiTags('students')
@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo Estudiante' })
  @ApiCreatedResponse({ type: Student, description: 'Estudiante creado exitosamente' })
  @ApiBadRequestResponse({ description: 'Los datos proporcionados no son válidos.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createStudentDto: CreateStudentDto): Promise<Student> {
    return this.studentService.create(createStudentDto);
  }

  @Get(':rude')
  @ApiOperation({ summary: 'Obtener un estudiante por RUDE' })
  @ApiParam({ name: 'rude', type: Number, description: 'Código RUDE del estudiante' })
  @ApiOkResponse({ type: Student, description: 'Estudiante encontrado exitosamente' })
  @ApiBadRequestResponse({ description: 'El parámetro proporcionado no es válido.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  async findByRude(@Param('rude') rude: number): Promise<Student> {
    return this.studentService.findByRude(rude);
  }

  @Patch(':rude')
  @ApiOperation({ summary: 'Actualizar parcialmente un estudiante' })
  @ApiParam({ name: 'rude', type: Number, description: 'Código RUDE del estudiante' })
  @ApiOkResponse({ type: Student, description: 'Estudiante actualizado exitosamente' })
  @ApiBadRequestResponse({ description: 'Los datos proporcionados no son válidos.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  async update(
    @Param('rude') rude: number,
    @Body() updateStudentDto: UpdateStudentDto,
  ): Promise<Student> {
    return this.studentService.update(rude, updateStudentDto);
  }

  @Put(':rude')
  @ApiOperation({ summary: 'Reemplazar completamente un estudiante' })
  @ApiParam({ name: 'rude', type: Number, description: 'Código RUDE del estudiante' })
  @ApiOkResponse({ type: Student, description: 'Estudiante reemplazado exitosamente' })
  @ApiBadRequestResponse({ description: 'Los datos proporcionados no son válidos.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  async replace(
    @Param('rude') rude: number,
    @Body() createStudentDto: CreateStudentDto,
  ): Promise<Student> {
    return this.studentService.replace(rude, createStudentDto);
  }

  @Delete(':rude')
  @ApiOperation({ summary: 'Eliminar un estudiante' })
  @ApiParam({ name: 'rude', type: Number, description: 'Código RUDE del estudiante' })
  @ApiNoContentResponse({ description: 'Estudiante eliminado exitosamente' })
  @ApiBadRequestResponse({ description: 'El parámetro proporcionado no es válido.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  async delete(@Param('rude') rude: number): Promise<void> {
    await this.studentService.delete(rude);
  }
}
