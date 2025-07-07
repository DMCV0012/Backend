// classes/class.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClassDto } from './interfaces/dto/create-class.dto';
import { UpdateClassDto } from './interfaces/dto/update-class.dto';
import { Class } from './domain/entities/class.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ClassService {
  constructor(
    @InjectRepository(Class)
    private readonly classRepository: Repository<Class>,
  ) {}

  /**
   * Crea una nueva clase en la base de datos.
   * @param createClassDto Los datos para crear la clase.
   * @returns La clase recién creada.
   */
  async create(createClassDto: CreateClassDto): Promise<Class> {
    const classEntity = this.classRepository.create({
      subject_id_fk: createClassDto.subject_id_fk,
      teacher_ci_fk: createClassDto.teacher_ci_fk,
      course_id_fk: createClassDto.course_id_fk,
      start_time: createClassDto.start_time,
      end_time: createClassDto.end_time,
      day_of_week: createClassDto.day_of_week,
      academic_year: createClassDto.academic_year,
    });
    return await this.classRepository.save(classEntity);
  }

  /**
   * Busca una clase por su ID.
   * @param id El ID de la clase a buscar.
   * @returns La clase encontrada.
   * @throws NotFoundException Si la clase no se encuentra.
   */
  async findById(id: number): Promise<Class> {
    const classEntity = await this.classRepository.findOneBy({ class_id: id });
    if (!classEntity) {
      throw new NotFoundException(`Clase con ID ${id} no encontrada`);
    }
    return classEntity;
  }

  /**
   * Actualiza parcialmente una clase existente.
   * @param id El ID de la clase a actualizar.
   * @param updateClassDto Los datos para actualizar la clase.
   * @returns La clase actualizada.
   * @throws NotFoundException Si la clase no se encuentra.
   */
  async update(id: number, updateClassDto: UpdateClassDto): Promise<Class> {
    const classEntity = await this.classRepository.findOneBy({ class_id: id });
    if (!classEntity) {
      throw new NotFoundException(`Clase con ID ${id} no encontrada`);
    }
    Object.assign(classEntity, updateClassDto);
    return await this.classRepository.save(classEntity);
  }

  /**
   * Reemplaza completamente una clase existente con nuevos datos.
   * @param id El ID de la clase a reemplazar.
   * @param createClassDto Los nuevos datos de la clase.
   * @returns La clase reemplazada.
   * @throws NotFoundException Si la clase no se encuentra.
   */
  async replace(id: number, createClassDto: CreateClassDto): Promise<Class> {
    const classEntity = await this.classRepository.findOneBy({ class_id: id });
    if (!classEntity) {
      throw new NotFoundException(`Clase con ID ${id} no encontrada`);
    }
    classEntity.subject_id_fk = createClassDto.subject_id_fk;
    classEntity.teacher_ci_fk = createClassDto.teacher_ci_fk;
    classEntity.course_id_fk = createClassDto.course_id_fk;
    classEntity.start_time = createClassDto.start_time;
    classEntity.end_time = createClassDto.end_time;
    classEntity.day_of_week = createClassDto.day_of_week;
    classEntity.academic_year = createClassDto.academic_year;
    return await this.classRepository.save(classEntity);
  }

  /**
   * Elimina una clase por su ID.
   * @param id El ID de la clase a eliminar.
   * @returns Una promesa que se resuelve cuando la clase es eliminada.
   * @throws NotFoundException Si la clase no se encuentra.
   */
  async delete(id: number): Promise<void> {
    const result = await this.classRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Clase con ID ${id} no encontrada`);
    }
  }
}
