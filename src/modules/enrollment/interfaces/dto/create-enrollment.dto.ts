// enrollments/dto/create-enrollment.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, IsIn } from 'class-validator';

export class CreateEnrollmentDto {
  @ApiProperty({ example: 123456789, description: 'Código RUDE del estudiante' })
  @IsNotEmpty({ message: 'El RUDE del estudiante es obligatorio' })
  @IsNumber({}, { message: 'El RUDE del estudiante debe ser un número' }) // Assuming student_rude_fk is INTEGER
  student_rude_fk: number; // Changed to number based on student_rude type

  @ApiProperty({ example: 1, description: 'ID del curso al que se inscribe el estudiante' })
  @IsNotEmpty({ message: 'El ID del curso es obligatorio' })
  @IsNumber({}, { message: 'El ID del curso debe ser un número' })
  course_id_fk: number;

  @ApiProperty({ example: 2025, description: 'Gestión académica' })
  @IsNotEmpty({ message: 'El año académico es obligatorio' })
  @IsNumber({}, { message: 'El año académico debe ser un número' })
  academic_year: number;

  @ApiProperty({ example: '2025-01-15T00:00:00Z', description: 'Fecha de inscripción' })
  @IsNotEmpty({ message: 'La fecha de inscripción es obligatoria' })
  @IsString({ message: 'La fecha de inscripción debe ser una cadena de texto' })
  enrollment_date: Date; // Assuming enrollment_date is a string in ISO format

  @ApiProperty({ example: 'Active', description: 'Estado de inscripción', required: false })
  @IsString({ message: 'El estado de inscripción debe ser una cadena de texto' })
  @IsIn(['Active', 'Withdrawn', 'Completed'], { message: 'Estado de inscripción inválido' })
  enrollment_status: string;
}
