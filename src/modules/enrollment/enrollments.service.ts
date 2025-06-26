// enrollments/enrollment.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEnrollmentDto } from './interfaces/dto/create-enrollment.dto';
import { UpdateEnrollmentDto } from './interfaces/dto/update-enrollment.dto';
import { Enrollment } from './domain/entities/enrollment.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EnrollmentService {
  constructor(
    @InjectRepository(Enrollment)
    private readonly enrollmentRepository: Repository<Enrollment>,
  ) {}

  /**
   * Crea una nueva inscripción en la base de datos.
   * @param createEnrollmentDto Los datos para crear la inscripción.
   * @returns La inscripción recién creada.
   */
  async create(createEnrollmentDto: CreateEnrollmentDto): Promise<Enrollment> {
    const enrollment = this.enrollmentRepository.create({
      student_rude_fk: createEnrollmentDto.student_rude_fk,
      course_id_fk: createEnrollmentDto.course_id_fk,
      academic_year: createEnrollmentDto.academic_year,
      enrollment_date: createEnrollmentDto.enrollment_date,
      enrollment_status: createEnrollmentDto.enrollment_status,
    });
    return await this.enrollmentRepository.save(enrollment);
  }

  /**
   * Busca una inscripción por su ID.
   * @param id El ID de la inscripción a buscar.
   * @returns La inscripción encontrada.
   * @throws NotFoundException Si la inscripción no se encuentra.
   */
  async findById(id: number): Promise<Enrollment> {
    const enrollment = await this.enrollmentRepository.findOneBy({ enrollment_id: id });
    if (!enrollment) {
      throw new NotFoundException(`Inscripción con ID ${id} no encontrada`);
    }
    return enrollment;
  }

  /**
   * Actualiza parcialmente una inscripción existente.
   * @param id El ID de la inscripción a actualizar.
   * @param updateEnrollmentDto Los datos para actualizar la inscripción.
   * @returns La inscripción actualizada.
   * @throws NotFoundException Si la inscripción no se encuentra.
   */
  async update(id: number, updateEnrollmentDto: UpdateEnrollmentDto): Promise<Enrollment> {
    const enrollment = await this.enrollmentRepository.findOneBy({ enrollment_id: id });
    if (!enrollment) {
      throw new NotFoundException(`Inscripción con ID ${id} no encontrada`);
    }
    Object.assign(enrollment, updateEnrollmentDto);
    return await this.enrollmentRepository.save(enrollment);
  }

  /**
   * Reemplaza completamente una inscripción existente con nuevos datos.
   * @param id El ID de la inscripción a reemplazar.
   * @param createEnrollmentDto Los nuevos datos de la inscripción.
   * @returns La inscripción reemplazada.
   * @throws NotFoundException Si la inscripción no se encuentra.
   */
  async replace(id: number, createEnrollmentDto: CreateEnrollmentDto): Promise<Enrollment> {
    const enrollment = await this.enrollmentRepository.findOneBy({ enrollment_id: id });
    if (!enrollment) {
      throw new NotFoundException(`Inscripción con ID ${id} no encontrada`);
    }
    enrollment.student_rude_fk = createEnrollmentDto.student_rude_fk;
    enrollment.course_id_fk = createEnrollmentDto.course_id_fk;
    enrollment.academic_year = createEnrollmentDto.academic_year;
    enrollment.enrollment_date = createEnrollmentDto.enrollment_date;
    enrollment.enrollment_status = createEnrollmentDto.enrollment_status;
    return await this.enrollmentRepository.save(enrollment);
  }

  /**
   * Elimina una inscripción por su ID.
   * @param id El ID de la inscripción a eliminar.
   * @returns Una promesa que se resuelve cuando la inscripción es eliminada.
   * @throws NotFoundException Si la inscripción no se encuentra.
   */
  async delete(id: number): Promise<void> {
    const result = await this.enrollmentRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Inscripción con ID ${id} no encontrada`);
    }
  }
}
