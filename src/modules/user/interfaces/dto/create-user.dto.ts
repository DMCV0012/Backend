// users/dto/create-user.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsEmail, IsBoolean, IsIn } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'juan.perez', description: 'Nombre de usuario único' })
  @IsNotEmpty({ message: 'El nombre de usuario es obligatorio' })
  @IsString({ message: 'El nombre de usuario debe ser una cadena de texto' })
  username: string;

  @ApiProperty({ example: 'contraseñaSegura123', description: 'Contraseña del usuario' })
  @IsNotEmpty({ message: 'La contraseña es obligatoria' })
  @IsString({ message: 'La contraseña debe ser una cadena de texto' })
  password_hash: string; // La contraseña se recibe en texto plano y luego se hashea.

  @ApiProperty({ example: 'juan.perez@example.com', description: 'Correo electrónico del usuario', required: false })
  @IsEmail({}, { message: 'El email debe ser una dirección de correo electrónico válida' })
  @IsString({ message: 'El email debe ser una cadena de texto' })
  email: string;

  @ApiProperty({ example: 'Teacher', description: 'Rol del usuario' })
  @IsNotEmpty({ message: 'El rol es obligatorio' })
  @IsString({ message: 'El rol debe ser una cadena de texto' })
  @IsIn(['Administrator', 'Teacher', 'Student', 'Secretary', 'Staff'], { message: 'Rol inválido' })
  role_user: string;

  @ApiProperty({ example: true, description: 'Estado activo del usuario', required: false })
  @IsBoolean({ message: 'Activo debe ser un valor booleano' })
  active: boolean;
}
