import { Expose } from 'class-transformer';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity({ name: 'tokens', schema: 'public' })
@Unique(['access_token'])
export class Token {
  @PrimaryGeneratedColumn('increment', { type: 'bigint', name: 'id_tokens' })
  @Expose()
  id_tokens: number;

  @Column({ type: 'bigint', name: 'user_id' })
  @Expose()
  user_id: number;

  @Column({ type: 'text', name: 'access_token', unique: true })
  @Expose()
  access_token: string;

  @CreateDateColumn({ type: 'timestamptz', name: 'created_at', default: () => 'now()' })
  @Expose()
  created_at: Date;

  @Column({ type: 'timestamptz', name: 'expires_at' })
  @Expose()
  expires_at: Date;
}