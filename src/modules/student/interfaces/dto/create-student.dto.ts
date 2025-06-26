// students/dto/create-student.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsNumber, IsIn, IsEmail, IsDateString } from 'class-validator';

export class CreateStudentDto {
  @ApiProperty({ example: 123456789, description: 'Código RUDE único del estudiante' })
  @IsNotEmpty({ message: 'El RUDE del estudiante es obligatorio' })
  @IsNumber({}, { message: 'El RUDE del estudiante debe ser un número' })
  student_rude: number;

  @ApiProperty({ example: 1010101, description: 'CI único del estudiante' })
  @IsNotEmpty({ message: 'El CI del estudiante es obligatorio' })
  @IsNumber({}, { message: 'El CI del estudiante debe ser un número' })
  student_ci: number;

  @ApiProperty({ example: 'Ana', description: 'Nombre del estudiante' })
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  first_name: string;

  @ApiProperty({ example: 'Gomez', description: 'Apellido del estudiante' })
  @IsNotEmpty({ message: 'El apellido es obligatorio' })
  @IsString({ message: 'El apellido debe ser una cadena de texto' })
  last_name: string;

  @ApiProperty({ example: '2005-08-20', description: 'Fecha de nacimiento del estudiante (YYYY-MM-DD)' })
  @IsNotEmpty({ message: 'La fecha de nacimiento es obligatoria' })
  @IsDateString({}, { message: 'La fecha de nacimiento debe ser una fecha válida en formato YYYY-MM-DD' })
  birth_date: Date;

  @ApiProperty({ example: 'F', description: 'Género del estudiante (M: Masculino, F: Femenino, O: Otro)' })
  @IsNotEmpty({ message: 'El género es obligatorio' })
  @IsString({ message: 'El género debe ser una cadena de texto' })
  @IsIn(['M', 'F', 'O'], { message: 'El género debe ser "M", "F" o "O"' })
  gender: string;

  @ApiProperty({ example: 'Zona Central, Calle #5', description: 'Dirección del estudiante', required: false })
  @IsString({ message: 'La dirección debe ser una cadena de texto' })
  address: string;

  @ApiProperty({ example: '70012345', description: 'Teléfono de contacto del estudiante', required: false })
  @IsString({ message: 'El teléfono de contacto debe ser una cadena de texto' })
  contact_phone: string;

  @ApiProperty({ example: 'ana.gomez@example.com', description: 'Correo electrónico del estudiante (debe ser único)', required: false })
  @IsEmail({}, { message: 'El email debe ser una dirección de correo electrónico válida' })
  @IsString({ message: 'El email debe ser una cadena de texto' })
  email: string;

  @ApiProperty({ example: 'Active', description: 'Estado del estudiante', required: false })
  @IsString({ message: 'El estado debe ser una cadena de texto' })
  @IsIn(['Active', 'Inactive', 'Graduated', 'Withdrawn'], { message: 'Estado inválido' })
  status: string;
}
