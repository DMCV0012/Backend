import { Expose } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity({ name: 'user_roles', schema: 'public' })
@Unique(['user_id', 'role_id'])
export class UserRoles {
  @PrimaryGeneratedColumn('increment', { type: 'bigint', name: 'id' })
  @Expose()
  id: number;

  @Column({ type: 'bigint', name: 'user_id' })
  @Expose()
  user_id: number;

  @Column({ type: 'bigint', name: 'role_id' })
  @Expose()
  role_id: number;
}