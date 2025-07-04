// users/dto/update-user.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsEmail, MinLength, MaxLength, IsDateString } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({ example: 'john.doe.updated', description: 'Nuevo nombre de usuario único', required: false })
  @IsOptional()
  @IsString({ message: 'El nombre de usuario debe ser una cadena de texto' })
  @MinLength(3, { message: 'El nombre de usuario debe tener al menos 3 caracteres' })
  @MaxLength(50, { message: 'El nombre de usuario no puede exceder los 50 caracteres' })
  username?: string;

  @ApiProperty({ example: 'NewSecurePassword456!', description: 'Nueva contraseña del usuario (se recomienda un endpoint separado para esto)', format: 'password', required: false })
  @IsOptional()
  @IsString({ message: 'La contraseña debe ser una cadena de texto' })
  @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
  password_hash?: string; // Similar al Create DTO, esto sería el nuevo password antes del hash.

  @ApiProperty({ example: 'john.doe.new@example.com', description: 'Nuevo correo electrónico único del usuario', required: false })
  @IsOptional()
  @IsEmail({}, { message: 'El correo electrónico debe ser una dirección de correo válida' })
  @MaxLength(100, { message: 'El correo electrónico no puede exceder los 100 caracteres' })
  email?: string;

  @ApiProperty({ example: '2025-07-03T22:00:00Z', description: 'Última vez que el usuario inició sesión (formato ISO 8601)', required: false })
  @IsOptional()
  @IsDateString({}, { message: 'La fecha de último inicio de sesión debe ser una fecha ISO 8601 válida' })
  last_login?: Date;
}