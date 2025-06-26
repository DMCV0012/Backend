// teachers/dto/create-teacher.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, IsIn, IsEmail, IsDateString } from 'class-validator';

export class CreateTeacherDto {
  @ApiProperty({ example: 1234567, description: 'CI único del profesor (identificador primario)' })
  @IsNotEmpty({ message: 'El CI del profesor es obligatorio' })
  @IsNumber({}, { message: 'El CI del profesor debe ser un número' })
  teacher_ci: number; // Renombrado a teacherCi para ser más explícito

  @ApiProperty({ example: 'Juan', description: 'Nombre del profesor' })
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  first_name: string;

  @ApiProperty({ example: 'Perez', description: 'Apellido del profesor' })
  @IsNotEmpty({ message: 'El apellido es obligatorio' })
  @IsString({ message: 'El apellido debe ser una cadena de texto' })
  last_name: string;

  @ApiProperty({ example: '1980-05-15', description: 'Fecha de nacimiento del profesor (YYYY-MM-DD)' })
  @IsNotEmpty({ message: 'La fecha de nacimiento es obligatoria' })
  @IsDateString({}, { message: 'La fecha de nacimiento debe ser una fecha válida en formato YYYY-MM-DD' })
  birth_date: Date;

  @ApiProperty({ example: 'M', description: 'Género del profesor (M: Masculino, F: Femenino, O: Otro)' })
  @IsNotEmpty({ message: 'El género es obligatorio' })
  @IsString({ message: 'El género debe ser una cadena de texto' })
  @IsIn(['M', 'F', 'O'], { message: 'El género debe ser "M", "F" o "O"' })
  gender: string;

  @ApiProperty({ example: 'Av. Siempre Viva 742', description: 'Dirección del profesor', required: false })
  @IsString({ message: 'La dirección debe ser una cadena de texto' })
  address: string;

  @ApiProperty({ example: '77712345', description: 'Número de teléfono del profesor', required: false })
  @IsNumber({}, { message: 'El teléfono debe ser un numero de texto' })
  phone: number;

  @ApiProperty({ example: 'juan.perez@example.com', description: 'Correo electrónico del profesor (debe ser único)', required: false })
  @IsEmail({}, { message: 'El email debe ser una dirección de correo electrónico válida' })
  @IsString({ message: 'El email debe ser una cadena de texto' })
  email: string;

  @ApiProperty({ example: '1980-05-15', description: 'Fecha de contratacion del profesor (YYYY-MM-DD)' })
  @IsNotEmpty({ message: 'La fecha de contratacion es obligatoria' })
  @IsDateString({}, { message: 'La fecha de contratacion debe ser una fecha válida en formato YYYY-MM-DD' })
  hire_date: Date; // fecha de contratación del profesor

  @ApiProperty({ example: 5000.00, description: 'Salario del profesor', required: false })
  @IsNumber({}, { message: 'El salario debe ser un número' })
  salary: number;
}
