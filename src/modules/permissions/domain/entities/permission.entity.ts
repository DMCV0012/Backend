import { Expose } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity({ name: 'permissions', schema: 'public' })
@Unique(['name_permissions'])
export class Permission {
  @PrimaryGeneratedColumn('increment', { type: 'bigint', name: 'id_permissions' })
  @Expose()
  id_permissions: number;

  @Column({ type: 'text', name: 'name_permissions', unique: true })
  @Expose()
  name_permissions: string;

  @Column({ type: 'text', name: 'description', nullable: true })
  @Expose()
  description?: string;
}