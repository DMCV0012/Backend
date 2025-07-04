// permissions/dto/update-permission.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdatePermissionDto {
  @ApiProperty({ example: 'editar_estudiante', description: 'Nuevo nombre único del permiso', required: false })
  @IsOptional()
  @IsString({ message: 'El nombre del permiso debe ser una cadena de texto' })
  @MaxLength(100, { message: 'El nombre del permiso no puede exceder los 100 caracteres' })
  name_permissions?: string;

  @ApiProperty({ example: 'Permite a los usuarios modificar registros de estudiantes existentes.', description: 'Nueva descripción detallada del permiso', required: false })
  @IsOptional()
  @IsString({ message: 'La descripción del permiso debe ser una cadena de texto' })
  @MaxLength(255, { message: 'La descripción del permiso no puede exceder los 255 caracteres' })
  description?: string;
}