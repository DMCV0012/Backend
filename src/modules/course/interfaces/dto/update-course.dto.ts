// courses/dto/update-course.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class UpdateCourseDto {
  @ApiProperty({ example: '1ro B', description: 'Nuevo nombre del curso', required: false })
  @IsOptional()
  @IsString({ message: 'El nombre del curso debe ser una cadena de texto' })
  name_course?: string;

  @ApiProperty({ example: 'Segundo', description: 'Nuevo nivel educativo', required: false })
  @IsOptional()
  @IsString({ message: 'El nivel del curso debe ser una cadena de texto' })
  level_course?: string;

  @ApiProperty({ example: 2026, description: 'Nueva gestión académica', required: false })
  @IsOptional()
  @IsNumber({}, { message: 'El año académico debe ser un número' })
  academic_year?: number;
}
