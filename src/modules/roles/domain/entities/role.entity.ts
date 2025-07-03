import { Expose } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity({ name: 'roles', schema: 'public' })
@Unique(['name_role'])
export class Role {
  @PrimaryGeneratedColumn('increment', { type: 'bigint', name: 'id_role' })
  @Expose()
  id_role: number;

  @Column({ type: 'text', name: 'name_role', unique: true })
  @Expose()
  name_role: string;

  @Column({ type: 'text', name: 'description', nullable: true })
  @Expose()
  description?: string;
}