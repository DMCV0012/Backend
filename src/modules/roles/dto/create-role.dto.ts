import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateRoleDto {
  @ApiProperty({ example: 'Administrador', description: 'Nombre del rol' })
  @IsNotEmpty()
  @IsString()
  name_role: string;

  @ApiProperty({ example: 'Rol con todos los permisos', description: 'Descripción del rol', required: false })
  @IsOptional()
  @IsString()
  description?: string;
}
