// roles/dto/update-role.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateRoleDto {
  @ApiProperty({ example: 'Docente', description: 'Nuevo nombre único del rol', required: false })
  @IsOptional()
  @IsString({ message: 'El nombre del rol debe ser una cadena de texto' })
  @MaxLength(50, { message: 'El nombre del rol no puede exceder los 50 caracteres' })
  name_role?: string;

  @ApiProperty({ example: 'Permisos para gestionar clases y calificaciones.', description: 'Nueva descripción detallada del rol', required: false })
  @IsOptional()
  @IsString({ message: 'La descripción del rol debe ser una cadena de texto' })
  @MaxLength(255, { message: 'La descripción del rol no puede exceder los 255 caracteres' })
  description?: string;
}