// role-permissions/dto/create-role-permission.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateRolePermissionDto {
  @ApiProperty({ example: 1, description: 'ID del rol al que se asignará el permiso' })
  @IsNotEmpty({ message: 'El ID del rol es obligatorio' })
  @IsNumber({}, { message: 'El ID del rol debe ser un número' })
  role_id: number;

  @ApiProperty({ example: 5, description: 'ID del permiso que se asignará al rol' })
  @IsNotEmpty({ message: 'El ID del permiso es obligatorio' })
  @IsNumber({}, { message: 'El ID del permiso debe ser un número' })
  permission_id: number;
}