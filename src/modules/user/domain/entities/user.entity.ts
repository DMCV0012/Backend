import { Expose } from 'class-transformer';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity({ name: 'users', schema: 'public' }) 
@Unique(['username']) // Asegura que el username sea único
@Unique(['email'])    // Asegura que el email sea único

export class User {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  @Expose()
  user_id: number; // Usaremos un ID autoincremental como Primary Key interna para la tabla users

  @Column({ type: 'text' })
  @Expose()
  username: string;

  @Column({ type: 'text', name: 'password_hash' }) // Renombramos la columna en la BD
  @Expose()
  password_hash: string;

  @Column({ type: 'text', name: 'email'})
  @Expose()
  email: string;

  @Column({ type: 'bigint', name: 'role_id', nullable: true })
  @Expose()
  role_id: number;

  @Column({ type: 'boolean', name: 'active', default: true })
  @Expose()
  active: boolean;

  @CreateDateColumn({ type: 'timestamptz', name: 'created_at', default: () => 'now()' })
  @Expose()
  create_at: Date;

  @Column({ type: 'timestamptz', name: 'last_login' })
  @Expose()
  last_login: Date;
}