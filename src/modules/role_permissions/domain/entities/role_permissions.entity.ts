import { Expose } from 'class-transformer';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'role_permissions', schema: 'public' })
export class RolePermissions {
  @PrimaryColumn({ type: 'bigint', name: 'role_id' })
  @Expose()
  role_id: number;

  @PrimaryColumn({ type: 'bigint', name: 'permission_id' })
  @Expose()
  permission_id: number;
}