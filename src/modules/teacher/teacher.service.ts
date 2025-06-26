// teachers/teacher.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Teacher } from './domain/entities/teacher.entity';
import { CreateTeacherDto } from './interfaces/dto/create-teacher.dto';
import { UpdateTeacherDto } from './interfaces/dto/update-teacher.dto';

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(Teacher)
    private readonly teacherRepository: Repository<Teacher>,
  ) {}

  /**
   * Crea un nuevo profesor en la base de datos.
   * @param createTeacherDto Los datos para crear el profesor.
   * @returns El profesor recién creado.
   */
  async create(createTeacherDto: CreateTeacherDto): Promise<Teacher> {
    const teacher = this.teacherRepository.create(createTeacherDto);
    return await this.teacherRepository.save(teacher);
  }

  /**
   * Busca un profesor por su CI.
   * @param ci El CI del profesor a buscar.
   * @returns El profesor encontrado.
   * @throws NotFoundException Si el profesor no se encuentra.
   */
  async findByCi(ci: number): Promise<Teacher> {
    const teacher = await this.teacherRepository.findOneBy({ teacher_ci: ci });
    if (!teacher) {
      throw new NotFoundException(`Profesor con CI ${ci} no encontrado`);
    }
    return teacher;
  }

  /**
   * Actualiza parcialmente un profesor existente.
   * @param ci El CI del profesor a actualizar.
   * @param updateTeacherDto Los datos para actualizar el profesor.
   * @returns El profesor actualizado.
   * @throws NotFoundException Si el profesor no se encuentra.
   */
  async update(ci: number, updateTeacherDto: UpdateTeacherDto): Promise<Teacher> {
    const teacher = await this.teacherRepository.findOneBy({ teacher_ci: ci });
    if (!teacher) {
      throw new NotFoundException(`Profesor con CI ${ci} no encontrado`);
    }
    Object.assign(teacher, updateTeacherDto);
    return await this.teacherRepository.save(teacher);
  }

  /**
   * Reemplaza completamente un profesor existente con nuevos datos.
   * @param ci El CI del profesor a reemplazar.
   * @param createTeacherDto Los nuevos datos del profesor.
   * @returns El profesor reemplazado.
   * @throws NotFoundException Si el profesor no se encuentra.
   */
  async replace(ci: number, createTeacherDto: CreateTeacherDto): Promise<Teacher> {
    const teacher = await this.teacherRepository.findOneBy({ teacher_ci: ci });
    if (!teacher) {
      throw new NotFoundException(`Profesor con CI ${ci} no encontrado`);
    }
    teacher.first_name = createTeacherDto.first_name;
    teacher.last_name = createTeacherDto.last_name;
    teacher.birth_date = createTeacherDto.birth_date;
    teacher.gender = createTeacherDto.gender;
    teacher.address = createTeacherDto.address;
    teacher.phone = createTeacherDto.phone;
    teacher.hire_date = createTeacherDto.hire_date;
    teacher.email = createTeacherDto.email;
    teacher.salary = createTeacherDto.salary;
    return await this.teacherRepository.save(teacher);
  }

  /**
   * Elimina un profesor por su CI.
   * @param ci El CI del profesor a eliminar.
   * @returns Una promesa que se resuelve cuando el profesor es eliminado.
   * @throws NotFoundException Si el profesor no se encuentra.
   */
  async delete(ci: number): Promise<void> {
    const result = await this.teacherRepository.delete(ci);
    if (result.affected === 0) {
      throw new NotFoundException(`Profesor con CI ${ci} no encontrado`);
    }
  }
}
