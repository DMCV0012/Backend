import { Expose } from 'class-transformer';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity('user')
@Unique(['username'])
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn('increment', { type: 'bigint', name: 'id_users' })
  @Expose()
  id_users: number;

  @Column({ type: 'text', name: 'username', unique: true })
  @Expose()
  username: string;

  @Column({ type: 'text', name: 'password_hash' })
  @Expose()
  password_hash: string;

  @Column({ type: 'text', name: 'email', unique: true })
  @Expose()
  email: string;

  @CreateDateColumn({ type: 'timestamptz', name: 'created_at', default: () => 'now()' })
  @Expose()
  created_at: Date;

  @Column({ type: 'timestamptz', name: 'last_login', nullable: true })
  @Expose()
  last_login?: Date;
}