import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePermissionDto {
  @ApiProperty({ example: 'crear_estudiante', description: 'Nombre del permiso' })
  @IsNotEmpty()
  @IsString()
  name_permissions: string;

  @ApiProperty({ example: 'Permite crear estudiantes', description: 'Descripción del permiso', required: false })
  @IsOptional()
  @IsString()
  description?: string;
}
