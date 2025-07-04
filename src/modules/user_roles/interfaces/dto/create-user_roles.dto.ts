// user-roles/dto/create-user-role.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateUserRoleDto {
  @ApiProperty({ example: 1, description: 'ID del usuario al que se le asignará el rol' })
  @IsNotEmpty({ message: 'El ID de usuario es obligatorio' })
  @IsNumber({}, { message: 'El ID de usuario debe ser un número' })
  user_id: number;

  @ApiProperty({ example: 2, description: 'ID del rol que se asignará al usuario' })
  @IsNotEmpty({ message: 'El ID del rol es obligatorio' })
  @IsNumber({}, { message: 'El ID del rol debe ser un número' })
  role_id: number;
}