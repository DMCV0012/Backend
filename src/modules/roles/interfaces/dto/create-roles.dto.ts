// roles/dto/create-role.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength, IsOptional } from 'class-validator';

export class CreateRoleDto {
  @ApiProperty({ example: 'Administrador', description: 'Nombre único del rol (Ej. Administrador, Profesor, Estudiante)' })
  @IsNotEmpty({ message: 'El nombre del rol es obligatorio' })
  @IsString({ message: 'El nombre del rol debe ser una cadena de texto' })
  @MaxLength(50, { message: 'El nombre del rol no puede exceder los 50 caracteres' })
  name_role: string;

  @ApiProperty({ example: 'Acceso total al sistema y gestión de usuarios.', description: 'Descripción detallada del rol', required: false })
  @IsOptional()
  @IsString({ message: 'La descripción del rol debe ser una cadena de texto' })
  @MaxLength(255, { message: 'La descripción del rol no puede exceder los 255 caracteres' })
  description?: string;
}