import { Expose } from 'class-transformer';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity({ name: 'course', schema: 'public' }) 
export class Course {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' , name:'course_id'})
  @Expose()
  course_id: number; 

  @Column({ type: 'text', name: 'name_course' })
  @Expose()
  name_course: string;

  @Column({ type: 'text', name: 'level_course' })  
  @Expose()
  level_course: string;

  @Column({ type: 'int', name: 'academic_year' }) 
  @Expose()
  academic_year: number;
}