import { Expose } from 'class-transformer';
import { Column, CreateDateColumn, Entity, PrimaryColumn, Unique } from 'typeorm';

@Entity({ name: 'teacher', schema: 'public' }) // Usamos 'public' como esquema por defecto en PostgreSQL si no tienes uno específico como 'admregister'
@Unique(['email'])
export class Teacher {
  @PrimaryColumn({ type: 'int', name: 'teacher_ci' })
  @Expose()
  teacher_ci: number; // ci del profesor

  @Column({ type: 'text', name: 'first_name' })
  @Expose()
  first_name: string; // nombre del profesor

  @Column({ type: 'text', name: 'last_name' }) 
  @Expose()
  last_name: string; // apellido del profesor

  @Column ({ type: 'date', name: 'birth_date' })
  @Expose()
  birth_date: Date; // fecha de nacimiento del profesor

  @Column({ type: 'text', name: 'gender' })
  @Expose()
  gender: string; // género del profesor 

  @Column({ type: 'text', name: 'address'})
  @Expose()
  address: string; // dirección del profesor

  @Column({ type: 'text', name: 'email' })
  @Expose()
  email: string; // correo electrónico del profesor

  @Column({ type: 'int', name: 'phone' })
  @Expose()
  phone: number; // número de teléfono del profesor

  @CreateDateColumn({ type: 'date', name: 'hire_date', default: () => 'now()' })
  @Expose()
  hire_date: Date; // fecha de contratación del profesor

  @Column({ type: 'int', name: 'salary'})
  @Expose()
  salary: number; // salario del profesor
}