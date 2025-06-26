// students/dto/update-student.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsIn, IsEmail, IsDateString } from 'class-validator';

export class UpdateStudentDto {
  @ApiProperty({ example: 1010101, description: 'Nuevo CI del estudiante', required: false })
  @IsOptional()
  @IsNumber({}, { message: 'El CI del estudiante debe ser un número' })
  studentId?: number;

  @ApiProperty({ example: 'Ana Belen', description: 'Nuevo nombre del estudiante', required: false })
  @IsOptional()
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  firstName?: string;

  @ApiProperty({ example: 'Gomez Perez', description: 'Nuevo apellido del estudiante', required: false })
  @IsOptional()
  @IsString({ message: 'El apellido debe ser una cadena de texto' })
  lastName?: string;

  @ApiProperty({ example: '2005-08-21', description: 'Nueva fecha de nacimiento del estudiante (YYYY-MM-DD)', required: false })
  @IsOptional()
  @IsDateString({}, { message: 'La fecha de nacimiento debe ser una fecha válida en formato YYYY-MM-DD' })
  birthDate?: string;

  @ApiProperty({ example: 'O', description: 'Nuevo género del estudiante (M: Masculino, F: Femenino, O: Otro)', required: false })
  @IsOptional()
  @IsString({ message: 'El género debe ser una cadena de texto' })
  @IsIn(['M', 'F', 'O'], { message: 'El género debe ser "M", "F" o "O"' })
  gender?: 'M' | 'F' | 'O';

  @ApiProperty({ example: 'Zona Norte, Calle Principal', description: 'Nueva dirección del estudiante', required: false })
  @IsOptional()
  @IsString({ message: 'La dirección debe ser una cadena de texto' })
  address?: string;

  @ApiProperty({ example: '70098765', description: 'Nuevo teléfono de contacto del estudiante', required: false })
  @IsOptional()
  @IsString({ message: 'El teléfono de contacto debe ser una cadena de texto' })
  contactPhone?: string;

  @ApiProperty({ example: 'nuevo.ana@example.com', description: 'Nuevo correo electrónico del estudiante (debe ser único)', required: false })
  @IsOptional()
  @IsEmail({}, { message: 'El email debe ser una dirección de correo electrónico válida' })
  @IsString({ message: 'El email debe ser una cadena de texto' })
  email?: string;

  @ApiProperty({ example: 'Inactive', description: 'Nuevo estado del estudiante', required: false })
  @IsOptional()
  @IsString({ message: 'El estado debe ser una cadena de texto' })
  @IsIn(['Active', 'Inactive', 'Graduated', 'Withdrawn'], { message: 'Estado inválido' })
  status?: 'Active' | 'Inactive' | 'Graduated' | 'Withdrawn';
}
