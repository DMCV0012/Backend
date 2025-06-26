import { Expose } from 'class-transformer';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity({ name: 'classes', schema: 'public' }) 
export class Class {
  @PrimaryGeneratedColumn('increment', { type: 'bigint', name: 'class_id' })
  @Expose()
  class_id: number;

  @Column({ type: 'int', name: 'subject_id_fk', nullable: false })
  @Expose()
  subject_id_fk: number;

  @Column({ type: 'int', name: 'teacher_ci_fk', nullable: false })
  @Expose()
  teacher_ci_fk: number; 

  @Column({ type: 'int', name: 'course_id_fk', nullable: false })
  @Expose()
  course_id_fk: number; 

  @Column({ type: 'time', name: 'start_time'})
  @Expose()
  start_time: Date; 

  @Column({ type: 'time', name: 'end_time'})
  @Expose()
  end_time: Date; 

  @Column ({ type: 'text', name: 'day_of_week'})
  @Expose()
  day_of_week: string;

  @Column({ type: 'int', name: 'academic_year'})
  @Expose()
  academic_year: number;
}