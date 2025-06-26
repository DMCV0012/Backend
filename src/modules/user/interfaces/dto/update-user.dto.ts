// users/dto/update-user.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsEmail, IsBoolean, IsIn } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({ example: 'nuevo.usuario', description: 'Nuevo nombre de usuario', required: false })
  @IsOptional()
  @IsString({ message: 'El nombre de usuario debe ser una cadena de texto' })
  username?: string;

  @ApiProperty({ example: 'nuevaContraseñaSegura456', description: 'Nueva contraseña del usuario', required: false })
  @IsOptional()
  @IsString({ message: 'La contraseña debe ser una cadena de texto' })
  password_hash?: string; // La contraseña se recibe en texto plano y luego se hashea.

  @ApiProperty({ example: 'nuevo.email@example.com', description: 'Nuevo correo electrónico del usuario', required: false })
  @IsOptional()
  @IsEmail({}, { message: 'El email debe ser una dirección de correo electrónico válida' })
  @IsString({ message: 'El email debe ser una cadena de texto' })
  email?: string;

  @ApiProperty({ example: 'Administrator', description: 'Nuevo rol del usuario', required: false })
  @IsString({ message: 'El rol debe ser una cadena de texto' })
  @IsIn(['Administrator', 'Teacher', 'Student', 'Secretary', 'Staff'], { message: 'Rol inválido' })
  @IsOptional()
  role_user?: 'Administrator' | 'Teacher' | 'Student' | 'Secretary' | 'Staff';

  @ApiProperty({ example: false, description: 'Estado activo del usuario', required: false })
  @IsBoolean({ message: 'Activo debe ser un valor booleano' })
  @IsOptional()
  active?: boolean;
}
