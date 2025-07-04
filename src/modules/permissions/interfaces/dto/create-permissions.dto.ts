// permissions/dto/create-permission.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength, IsOptional } from 'class-validator';

export class CreatePermissionDto {
  @ApiProperty({ example: 'crear_estudiante', description: 'Nombre único del permiso (Ej. crear_estudiante, ver_calificaciones)' })
  @IsNotEmpty({ message: 'El nombre del permiso es obligatorio' })
  @IsString({ message: 'El nombre del permiso debe ser una cadena de texto' })
  @MaxLength(100, { message: 'El nombre del permiso no puede exceder los 100 caracteres' })
  name_permissions: string;

  @ApiProperty({ example: 'Permite a los usuarios crear nuevos registros de estudiantes.', description: 'Descripción detallada del permiso', required: false })
  @IsOptional()
  @IsString({ message: 'La descripción del permiso debe ser una cadena de texto' })
  @MaxLength(255, { message: 'La descripción del permiso no puede exceder los 255 caracteres' })
  description?: string;
}