import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateRolePermissionDto {
  @ApiProperty({ example: 1, description: 'ID del rol' })
  @IsNotEmpty()
  @IsNumber()
  role_id: number;

  @ApiProperty({ example: 1, description: 'ID del permiso' })
  @IsNotEmpty()
  @IsNumber()
  permission_id: number;
}
