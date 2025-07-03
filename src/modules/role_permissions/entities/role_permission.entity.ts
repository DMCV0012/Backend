import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'role_permissions', schema: 'public' })
export class RolePermission {
  @PrimaryColumn({ type: 'bigint', name: 'role_id' })
  role_id: number;

  @PrimaryColumn({ type: 'bigint', name: 'permission_id' })
  permission_id: number;
}
