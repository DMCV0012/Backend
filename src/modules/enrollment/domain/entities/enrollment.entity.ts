import { Expose } from 'class-transformer';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity({ name: 'enrollment', schema: 'public' }) 
export class Enrollment {
  @PrimaryGeneratedColumn('increment', { type: 'bigint', name: 'enrollment_id' })
  @Expose()
  enrollment_id: number; 

  @Column({ type: 'bigint', name: 'student_rude_fk', nullable: false })
  @Expose()
  student_rude_fk: number;

  @Column({ type: 'bigint', name: 'course_id_fk', nullable: false })
  @Expose()
  course_id_fk: number;

  @Column({ type: 'int', name: 'academic_year', nullable: false })
  @Expose()
  academic_year: number;

  @CreateDateColumn({ type: 'timestamptz', name: 'enrollment_date', nullable: false })
  @Expose()
  enrollment_date: Date; 

  @Column({ type: 'varchar', length: 20, name: 'enrollment_status', default: 'Active' })
  @Expose()
  enrollment_status: string;
}