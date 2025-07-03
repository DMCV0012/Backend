// classes/dto/create-class.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateClassDto {
  @ApiProperty({ example: 1, description: 'ID de la materia que se imparte' })
  @IsNotEmpty({ message: 'El ID de la materia es obligatorio' })
  @IsNumber({}, { message: 'El ID de la materia debe ser un número' })
  subject_id_fk: number;

  @ApiProperty({ example: 1234567, description: 'CI del profesor que dicta la materia' })
  @IsNotEmpty({ message: 'El CI del profesor es obligatorio' })
  @IsNumber({}, { message: 'El CI del profesor debe ser un número' }) // Assuming teacher_ci_fk is INTEGER
  teacher_ci_fk: number; // Changed to number based on teacher_ci type

  @ApiProperty({ example: 1, description: 'ID del curso al que pertenece la clase' })
  @IsNotEmpty({ message: 'El ID del curso es obligatorio' })
  @IsNumber({}, { message: 'El ID del curso debe ser un número' })
  course_id_fk: number;

  @ApiProperty({ example: '08:00:00', description: 'Hora de inicio de la clase (HH:MM:SS)', required: false })
  @IsString({ message: 'La hora de inicio debe ser una cadena de texto' })
  start_time: string; // '08:00:00'

  @ApiProperty({ example: '09:30:00', description: 'Hora de fin de la clase (HH:MM:SS)', required: false })
  @IsString({ message: 'La hora de fin debe ser una cadena de texto' })
  end_time: string; // '09:00:00'

  @ApiProperty({ example: 'Lunes', description: 'Día de la semana (Ej. Lunes, Martes)', required: false })
  @IsString({ message: 'El día de la semana debe ser una cadena de texto' })
  day_of_week: string;

  @ApiProperty({ example: 2025, description: 'Gestión académica' })
  @IsNotEmpty({ message: 'El año académico es obligatorio' })
  @IsNumber({}, { message: 'El año académico debe ser un número' })
  academic_year: number;
}
