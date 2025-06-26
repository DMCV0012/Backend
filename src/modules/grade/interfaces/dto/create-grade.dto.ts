// grades/dto/create-grade.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, IsDateString, IsOptional } from 'class-validator';

export class CreateGradeDto {
  @ApiProperty({ example: 123456789, description: 'Código RUDE del estudiante' })
  @IsNotEmpty({ message: 'El RUDE del estudiante es obligatorio' })
  @IsNumber({}, { message: 'El RUDE del estudiante debe ser un número' }) // Assuming student_rude_fk is INTEGER
  student_rude_fk: number; // Changed to number based on student_rude type

  @ApiProperty({ example: 1, description: 'ID de la clase a la que pertenece la calificación' })
  @IsNotEmpty({ message: 'El ID de la clase es obligatorio' })
  @IsNumber({}, { message: 'El ID de la clase debe ser un número' })
  class_id_fk: number;

  @ApiProperty({ example: 85, description: 'Puntuación obtenida (0-100)' })
  @IsNotEmpty({ message: 'La puntuación es obligatoria' })
  @IsNumber({}, { message: 'La puntuación debe ser un número' })
  score: number;

  @ApiProperty({ example: '2025-06-24', description: 'Fecha de calificación (YYYY-MM-DD)', required: false })
  @IsDateString({}, { message: 'La fecha de calificación debe ser una fecha válida en formato YYYY-MM-DD' })
  grade_date: Date;

  @ApiProperty({ example: 'Examen Final', description: 'Tipo de evaluación (Ej. Examen, Proyecto)' })
  @IsNotEmpty({ message: 'El tipo de evaluación es obligatorio' })
  @IsString({ message: 'El tipo de evaluación debe ser una cadena de texto' })
  evaluation_type: string;
}
