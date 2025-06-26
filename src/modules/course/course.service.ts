// courses/course.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCourseDto } from './interfaces/dto/create-course.dto';
import { UpdateCourseDto } from './interfaces/dto/update-course.dto';
import { Course } from './domain/entities/course.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
  ) {}

  /**
   * Crea un nuevo curso en la base de datos.
   * @param createCourseDto Los datos para crear el curso.
   * @returns El curso recién creado.
   */
  async create(createCourseDto: CreateCourseDto): Promise<Course> {
    const course = this.courseRepository.create({
      name_course: createCourseDto.name_course,
      level_course: createCourseDto.level_course,
      academic_year: createCourseDto.academic_year,
    });
    return await this.courseRepository.save(course);
  }

  /**
   * Busca un curso por su ID.
   * @param id El ID del curso a buscar.
   * @returns El curso encontrado.
   * @throws NotFoundException Si el curso no se encuentra.
   */
  async findById(id: number): Promise<Course> {
    const course = await this.courseRepository.findOneBy({ course_id: id });
    if (!course) {
      throw new NotFoundException(`Curso con ID ${id} no encontrado`);
    }
    return course;
  }

  /**
   * Actualiza parcialmente un curso existente.
   * @param id El ID del curso a actualizar.
   * @param updateCourseDto Los datos para actualizar el curso.
   * @returns El curso actualizado.
   * @throws NotFoundException Si el curso no se encuentra.
   */
  async update(id: number, updateCourseDto: UpdateCourseDto): Promise<Course> {
    const course = await this.courseRepository.findOneBy({ course_id: id });
    if (!course) {
      throw new NotFoundException(`Curso con ID ${id} no encontrado`);
    }
    Object.assign(course, updateCourseDto);
    return await this.courseRepository.save(course);
  }

  /**
   * Reemplaza completamente un curso existente con nuevos datos.
   * @param id El ID del curso a reemplazar.
   * @param createCourseDto Los nuevos datos del curso.
   * @returns El curso reemplazado.
   * @throws NotFoundException Si el curso no se encuentra.
   */
  async replace(id: number, createCourseDto: CreateCourseDto): Promise<Course> {
    const course = await this.courseRepository.findOneBy({ course_id: id });
    if (!course) {
      throw new NotFoundException(`Curso con ID ${id} no encontrado`);
    }
    course.name_course = createCourseDto.name_course;
    course.level_course = createCourseDto.level_course;
    course.academic_year = createCourseDto.academic_year;
    return await this.courseRepository.save(course);
  }

  /**
   * Elimina un curso por su ID.
   * @param id El ID del curso a eliminar.
   * @returns Una promesa que se resuelve cuando el curso es eliminado.
   * @throws NotFoundException Si el curso no se encuentra.
   */
  async delete(id: number): Promise<void> {
    const result = await this.courseRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Curso con ID ${id} no encontrado`);
    }
  }
}
