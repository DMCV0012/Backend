// users/dto/create-user.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsEmail, MinLength, MaxLength, IsOptional } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'john.doe', description: 'Nombre de usuario único' })
  @IsNotEmpty({ message: 'El nombre de usuario es obligatorio' })
  @IsString({ message: 'El nombre de usuario debe ser una cadena de texto' })
  @MinLength(3, { message: 'El nombre de usuario debe tener al menos 3 caracteres' })
  @MaxLength(50, { message: 'El nombre de usuario no puede exceder los 50 caracteres' })
  username: string;

  @ApiProperty({ example: 'SecurePassword123!', description: 'Contraseña del usuario (encriptada en la base de datos)', format: 'password' })
  @IsNotEmpty({ message: 'La contraseña es obligatoria' })
  @IsString({ message: 'La contraseña debe ser una cadena de texto' })
  @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
  password_hash: string; // Nota: en un DTO de creación, este sería el password en texto plano antes del hash.

  @ApiProperty({ example: 'john.doe@example.com', description: 'Correo electrónico único del usuario' })
  @IsNotEmpty({ message: 'El correo electrónico es obligatorio' })
  @IsEmail({}, { message: 'El correo electrónico debe ser una dirección de correo válida' })
  @MaxLength(100, { message: 'El correo electrónico no puede exceder los 100 caracteres' })
  email: string;
}