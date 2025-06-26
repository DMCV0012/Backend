// teachers/dto/update-teacher.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsNumber, IsIn, IsEmail, IsDateString } from 'class-validator';

export class UpdateTeacherDto {
  @ApiProperty({ example: 'Juan Carlos', description: 'Nuevo nombre del profesor', required: false })
  @IsOptional()
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  firstName?: string;

  @ApiProperty({ example: 'Perez Gomez', description: 'Nuevo apellido del profesor', required: false })
  @IsOptional()
  @IsString({ message: 'El apellido debe ser una cadena de texto' })
  lastName?: string;

  @ApiProperty({ example: '1985-10-20', description: 'Nueva fecha de nacimiento del profesor (YYYY-MM-DD)', required: false })
  @IsOptional()
  @IsDateString({}, { message: 'La fecha de nacimiento debe ser una fecha válida en formato YYYY-MM-DD' })
  birthDate?: string;

  @ApiProperty({ example: 'F', description: 'Nuevo género del profesor (M: Masculino, F: Femenino, O: Otro)', required: false })
  @IsOptional()
  @IsString({ message: 'El género debe ser una cadena de texto' })
  @IsIn(['M', 'F', 'O'], { message: 'El género debe ser "M", "F" o "O"' })
  gender: string;

  @ApiProperty({ example: 'Calle Falsa 123', description: 'Nueva dirección del profesor', required: false })
  @IsOptional()
  @IsString({ message: 'La dirección debe ser una cadena de texto' })
  address?: string;

  @ApiProperty({ example: '77798765', description: 'Nuevo número de teléfono del profesor', required: false })
  @IsOptional()
  @IsString({ message: 'El teléfono debe ser una cadena de texto' })
  phone?: number;

  @ApiProperty({ example: 'nuevo.email@example.com', description: 'Nuevo correo electrónico del profesor (debe ser único)', required: false })
  @IsEmail({}, { message: 'El email debe ser una dirección de correo electrónico válida' })
  @IsOptional()
  @IsString({ message: 'El email debe ser una cadena de texto' })
  email?: string;

  @ApiProperty({ example: 5500.00, description: 'Nuevo salario del profesor', required: false })
  @IsOptional()
  @IsNumber({}, { message: 'El salario debe ser un número' })
  salary?: number;
}
