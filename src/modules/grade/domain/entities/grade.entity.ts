import { Expose } from 'class-transformer';
import { Column, CreateDateColumn, Decimal128, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity({ name: 'grade', schema: 'public' }) 
export class Grade {
  @PrimaryGeneratedColumn('increment', { type: 'bigint', name: 'grade_id' })
  @Expose()
  grade_id: number; 

  @Column({ type: 'bigint', name: 'student_rude_fk' })
  @Expose()
  student_rude_fk: number;

  @Column({ type: 'bigint', name: 'class_id_fk' })
  @Expose()
  class_id_fk: number;

  @Column({ type: 'int', name: 'score' })
  @Expose()
  score: number;

  @Column({ type: 'date', name: 'grade_date', default: () => 'CURRENT_DATE' })
  @Expose()
  grade_date: Date;

  @Column ({ type: 'text', name: 'evaluation_type' })
  @Expose()
  evaluation_type: string;
}