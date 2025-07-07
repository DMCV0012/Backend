// classes/dto/update-class.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class UpdateClassDto {
  @ApiProperty({ example: 2, description: 'Nuevo ID de la materia que se imparte', required: false })
  @IsOptional()
  @IsNumber({}, { message: 'El ID de la materia debe ser un número' })
  subject_id_fk?: number;

  @ApiProperty({ example: 9876543, description: 'Nuevo CI del profesor que dicta la materia', required: false })
  @IsOptional()
  @IsNumber({}, { message: 'El CI del profesor debe ser un número' })
  teacher_ci_fk?: number;

  @ApiProperty({ example: 2, description: 'Nuevo ID del curso al que pertenece la clase', required: false })
  @IsOptional()
  @IsNumber({}, { message: 'El ID del curso debe ser un número' })
  course_id_fk?: number;

  @ApiProperty({ example: '10:00:00', description: 'Nueva hora de inicio de la clase (HH:MM:SS)', required: false })
  @IsOptional()
  @IsString({ message: 'La hora de inicio debe ser una cadena de texto' })
  start_time?: string;

  @ApiProperty({ example: '11:30:00', description: 'Nueva hora de fin de la clase (HH:MM:SS)', required: false })
  @IsOptional()
  @IsString({ message: 'La hora de fin debe ser una cadena de texto' })
  end_time?: string;

  @ApiProperty({ example: 'Miércoles', description: 'Nuevo día de la semana', required: false })
  @IsOptional()
  @IsString({ message: 'El día de la semana debe ser una cadena de texto' })
  day_of_week?: string;

  @ApiProperty({ example: 2026, description: 'Nueva gestión académica', required: false })
  @IsOptional()
  @IsNumber({}, { message: 'El año académico debe ser un número' })
  academic_year?: number;
}
