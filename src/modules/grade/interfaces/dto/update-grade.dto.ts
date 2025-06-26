// grades/dto/update-grade.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsNumber, IsDateString } from 'class-validator';

export class UpdateGradeDto {
  @ApiProperty({ example: 987654321, description: 'Nuevo Código RUDE del estudiante', required: false })
  @IsNumber({}, { message: 'El RUDE del estudiante debe ser un número' })
  @IsOptional()
  student_rude_fk?: number;

  @ApiProperty({ example: 2, description: 'Nuevo ID de la clase a la que pertenece la calificación', required: false })
  @IsOptional()
  @IsNumber({}, { message: 'El ID de la clase debe ser un número' })
  class_id_fk?: number;

  @ApiProperty({ example: 90, description: 'Nueva puntuación obtenida', required: false })
  @IsOptional()
  @IsNumber({}, { message: 'La puntuación debe ser un número' })
  score?: number;

  @ApiProperty({ example: '2025-06-25', description: 'Nueva fecha de calificación (YYYY-MM-DD)', required: false })
  @IsOptional()
  @IsDateString({}, { message: 'La fecha de calificación debe ser una fecha válida en formato YYYY-MM-DD' })
  grade_date?: string;

  @ApiProperty({ example: 'Trabajo Práctico', description: 'Nuevo tipo de evaluación', required: false })
  @IsOptional()
  @IsString({ message: 'El tipo de evaluación debe ser una cadena de texto' })
  evaluation_type?: string;
}
