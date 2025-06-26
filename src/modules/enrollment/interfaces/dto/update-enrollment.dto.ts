// enrollments/dto/update-enrollment.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsIn } from 'class-validator';

export class UpdateEnrollmentDto {
  @ApiProperty({ example: 987654321, description: 'Nuevo Código RUDE del estudiante', required: false })
  @IsOptional()
  @IsNumber({}, { message: 'El RUDE del estudiante debe ser un número' })
  student_rude_fk?: number;

  @ApiProperty({ example: 2, description: 'Nuevo ID del curso al que se inscribe el estudiante', required: false })
  @IsOptional()
  @IsNumber({}, { message: 'El ID del curso debe ser un número' })
  course_id_fk?: number;

  @ApiProperty({ example: 2026, description: 'Nueva gestión académica', required: false })
  @IsOptional()
  @IsNumber({}, { message: 'El año académico debe ser un número' })
  academic_year?: number;

  @ApiProperty({ example: 'Withdrawn', description: 'Nuevo estado de inscripción', required: false })
  @IsOptional()
  @IsString({ message: 'El estado de inscripción debe ser una cadena de texto' })
  @IsIn(['Active', 'Withdrawn', 'Completed'], { message: 'Estado de inscripción inválido' })
  enrollment_status?: 'Active' | 'Withdrawn' | 'Completed';
}
