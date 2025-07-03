import { Expose } from 'class-transformer';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity({ name: 'subject', schema: 'public' }) // Usamos 'public' como esquema por defecto en PostgreSQL si no tienes uno específico como 'admregister'
@Unique(['name_subject'])
export class Subject {
  @PrimaryGeneratedColumn('increment', { type: 'bigint', name: 'subject_id' })
  @Expose()
  subject_id: number; // id de la materia

  @Column({ type: 'text', name: 'name_subject' })
  @Expose()
  name_subject: string; // nombre de la materia

  @Column({ type: 'text', name: 'description' }) 
  @Expose()
  description: string; // descripción de la materia

  @Column({ type: 'int', name: 'credits' })
  @Expose()
  credits: number; // créditos de la materia
}