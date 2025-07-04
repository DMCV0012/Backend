// user-roles/dto/update-user-role.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsNumber } from 'class-validator';

export class UpdateUserRoleDto {
  @ApiProperty({ example: 3, description: 'Nuevo ID del usuario para esta asignación de rol', required: false })
  @IsOptional()
  @IsNumber({}, { message: 'El ID de usuario debe ser un número' })
  user_id?: number;

  @ApiProperty({ example: 4, description: 'Nuevo ID del rol para esta asignación de rol', required: false })
  @IsOptional()
  @IsNumber({}, { message: 'El ID del rol debe ser un número' })
  role_id?: number;
}