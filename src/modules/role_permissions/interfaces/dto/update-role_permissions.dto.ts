import { IsOptional, IsNumber } from 'class-validator';

export class UpdateRolePermissionDto {
  @IsOptional()
  @IsNumber()
  role_id?: number;

  @IsOptional()
  @IsNumber()
  permission_id?: number;
}