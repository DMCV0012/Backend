import { Expose } from 'class-transformer';
import { Column, Entity, PrimaryColumn, CreateDateColumn, Unique } from 'typeorm';

@Entity({ name: 'student', schema: 'public' }) 
@Unique(['student_ci', 'email'])
export class Student {
  @PrimaryColumn({ type: 'int' ,name: 'student_rude' })
  @Expose()
  student_rude: number; // RUDE del alumno

  @Column({ type: 'int', name: 'student_ci'})
  @Expose()
  student_ci: number; // CI del alumno
  
  @Column({ type: 'text', name: 'first_name' })
  @Expose()
  first_name: string; // nombre del alumno

  @Column({ type: 'text', name: 'last_name' }) 
  @Expose()
  last_name: string; // segundo apellido del alumno
  
  @Column({ type: 'date', name: 'birth_date' })
  @Expose()
  birth_date: Date; // fecha de nacimiento del alumno
  
  @Column({ type: 'text', name: 'gender' })
  @Expose()
  gender: string; // género del alumno
  
  @Column({ type: 'text', name: 'address' })
  @Expose()
  address: string; // dirección del alumno
  
  @Column({ type: 'text', name: 'contact_phone' })
  @Expose()
  contact_phone: string; // teléfono del alumno
  
  @Column({ type: 'text', name:'email',  nullable: true })
  @Expose()
  email?: string; // correo electrónico del alumno
  
  @CreateDateColumn({ type: 'date', name: 'registration_date', default: () => 'now()' })
  @Expose()
  registration_date: Date; // fecha de registro del alumno
  
  @Column({ type: 'text', name: 'status', default: 'activo' })
  @Expose()
  status: string; //  estado del alumno (activo, inactivo, etc.)
}