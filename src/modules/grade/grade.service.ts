// grades/grade.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGradeDto } from './interfaces/dto/create-grade.dto';
import { UpdateGradeDto } from './interfaces/dto/update-grade.dto';
import { Grade } from './domain/entities/grade.entity'; // Asegúrate de que esta ruta sea correcta para tu entidad Grade
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GradeService {
  constructor(
    @InjectRepository(Grade) // Inyecta el repositorio de la entidad Grade
    private readonly gradeRepository: Repository<Grade>,
  ) {}

  /**
   * Crea una nueva calificación en la base de datos.
   * @param createGradeDto Los datos para crear la calificación.
   * @returns La calificación recién creada.
   */
  async create(createGradeDto: CreateGradeDto): Promise<Grade> {
    const grade = this.gradeRepository.create(createGradeDto);
    return await this.gradeRepository.save(grade);
  }

  /**
   * Busca una calificación por su ID.
   * @param id El ID de la calificación a buscar.
   * @returns La calificación encontrada.
   * @throws NotFoundException Si la calificación no se encuentra.
   */
  async findById(id: number): Promise<Grade> {
    const grade = await this.gradeRepository.findOneBy({ grade_id: id }); // grade_id es la PK de la tabla grades
    if (!grade) {
      throw new NotFoundException(`Calificación con ID ${id} no encontrada`);
    }
    return grade;
  }

  /**
   * Actualiza parcialmente una calificación existente.
   * @param id El ID de la calificación a actualizar.
   * @param updateGradeDto Los datos para actualizar la calificación.
   * @returns La calificación actualizada.
   * @throws NotFoundException Si la calificación no se encuentra.
   */
  async update(id: number, updateGradeDto: UpdateGradeDto): Promise<Grade> {
    const grade = await this.gradeRepository.findOneBy({ grade_id: id });
    if (!grade) {
      throw new NotFoundException(`Calificación con ID ${id} no encontrada`);
    }
    // Asigna las propiedades del DTO de actualización a la entidad existente
    Object.assign(grade, updateGradeDto);
    return await this.gradeRepository.save(grade);
  }

  /**
   * Reemplaza completamente una calificación existente con nuevos datos.
   * @param id El ID de la calificación a reemplazar.
   * @param createGradeDto Los nuevos datos de la calificación.
   * @returns La calificación reemplazada.
   * @throws NotFoundException Si la calificación no se encuentra.
   */
  async replace(id: number, createGradeDto: CreateGradeDto): Promise<Grade> {
    const grade = await this.gradeRepository.findOneBy({ grade_id: id });
    if (!grade) {
      throw new NotFoundException(`Calificación con ID ${id} no encontrada`);
    }

    grade.student_rude_fk = createGradeDto.student_rude_fk;
    grade.class_id_fk = createGradeDto.class_id_fk;
    grade.score = createGradeDto.score;
    
    if (createGradeDto.grade_date !== undefined) {
      grade.grade_date = createGradeDto.grade_date;
    }
    grade.evaluation_type = createGradeDto.evaluation_type;

    return await this.gradeRepository.save(grade);
  }

  /**
   * Elimina una calificación por su ID.
   * @param id El ID de la calificación a eliminar.
   * @returns Una promesa que se resuelve cuando la calificación es eliminada.
   * @throws NotFoundException Si la calificación no se encuentra.
   */
  async delete(id: number): Promise<void> {
    const result = await this.gradeRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Calificación con ID ${id} no encontrada`);
    }
  }
}
