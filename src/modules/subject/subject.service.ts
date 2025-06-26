// subjects/subject.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSubjectDto } from './interfaces/dto/create-subject.dto';
import { UpdateSubjectDto } from './interfaces/dto/update-subject.dto';
import { Subject } from './domain/entities/subject.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SubjectService {
  constructor(
    @InjectRepository(Subject)
    private readonly subjectRepository: Repository<Subject>,
  ) {}

  /**
   * Crea una nueva materia en la base de datos.
   * @param createSubjectDto Los datos para crear la materia.
   * @returns La materia recién creada.
   */
  async create(createSubjectDto: CreateSubjectDto): Promise<Subject> {
  const subject = this.subjectRepository.create(createSubjectDto);
  return await this.subjectRepository.save(subject);
  }

  /**
   * Busca una materia por su ID.
   * @param id El ID de la materia a buscar.
   * @returns La materia encontrada.
   * @throws NotFoundException Si la materia no se encuentra.
   */
  async findById(id: number): Promise<Subject> {
    const subject = await this.subjectRepository.findOneBy({ subject_id: id });
    if (!subject) {
      throw new NotFoundException(`Materia con ID ${id} no encontrada`);
    }
    return subject;
  }

  /**
   * Actualiza parcialmente una materia existente.
   * @param id El ID de la materia a actualizar.
   * @param updateSubjectDto Los datos para actualizar la materia.
   * @returns La materia actualizada.
   * @throws NotFoundException Si la materia no se encuentra.
   */
  async update(id: number, updateSubjectDto: UpdateSubjectDto): Promise<Subject> {
    const subject = await this.subjectRepository.findOneBy({ subject_id: id });
    if (!subject) {
      throw new NotFoundException(`Materia con ID ${id} no encontrada`);
    }
    Object.assign(subject, updateSubjectDto);
    return await this.subjectRepository.save(subject);
  }

  /**
   * Reemplaza completamente una materia existente con nuevos datos.
   * @param id El ID de la materia a reemplazar.
   * @param createSubjectDto Los nuevos datos de la materia.
   * @returns La materia reemplazada.
   * @throws NotFoundException Si la materia no se encuentra.
   */
  async replace(id: number, createSubjectDto: CreateSubjectDto): Promise<Subject> {
    const subject = await this.subjectRepository.findOneBy({ subject_id: id });
    if (!subject) {
      throw new NotFoundException(`Materia con ID ${id} no encontrada`);
    }
    subject.name_subject = createSubjectDto.name_subject;
    subject.description = createSubjectDto.description;
    subject.credits = createSubjectDto.credits;
    return await this.subjectRepository.save(subject);
  }

  /**
   * Elimina una materia por su ID.
   * @param id El ID de la materia a eliminar.
   * @returns Una promesa que se resuelve cuando la materia es eliminada.
   * @throws NotFoundException Si la materia no se encuentra.
   */
  async delete(id: number): Promise<void> {
    const result = await this.subjectRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Materia con ID ${id} no encontrada`);
    }
  }
}
