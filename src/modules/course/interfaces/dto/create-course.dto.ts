// courses/dto/create-course.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateCourseDto {
  @ApiProperty({ example: '1ro A', description: 'Nombre del curso (Ej. 1ro A, debe ser único)' })
  @IsNotEmpty({ message: 'El nombre del curso es obligatorio' })
  @IsString({ message: 'El nombre del curso debe ser una cadena de texto' })
  name_course: string;

  @ApiProperty({ example: 'Primero', description: 'Nivel educativo (Ej. Primero, Segundo)' })
  @IsNotEmpty({ message: 'El nivel del curso es obligatorio' })
  @IsString({ message: 'El nivel del curso debe ser una cadena de texto' })
  level_course: string;

  @ApiProperty({ example: 2025, description: 'Gestión académica (Ej. 2025)' })
  @IsNotEmpty({ message: 'El año académico es obligatorio' })
  @IsNumber({}, { message: 'El año académico debe ser un número' })
  academic_year: number;
}
