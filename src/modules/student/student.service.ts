import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentDto } from './interfaces/dto/create-student.dto';
import { UpdateStudentDto } from './interfaces/dto/update-student.dto';
import { Student } from './domain/entities/student.entity'; // Asegúrate de que la ruta sea correcta
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  /**
   * Crea un nuevo estudiante en la base de datos.
   * @param createStudentDto Los datos para crear el estudiante.
   * @returns El estudiante recién creado.
   */
  async create(createStudentDto: CreateStudentDto): Promise<Student> {
    // === ¡PUNTO CLAVE AQUÍ! ===
    // 'createStudentDto' DEBE CONTENER el valor para 'student_rude'.
    // Si no está llegando en el DTO, es tu responsabilidad asignárselo antes de guardar.

    // Añade este console.log para depuración
    console.log('DTO recibido en create:', createStudentDto);

    // Asegurarse de que student_rude esté presente en el DTO
    // Si no está, debes generar/obtener un RUDE aquí
    if (createStudentDto.student_rude === undefined || createStudentDto.student_rude === null) {
      // Si el RUDE es manual y no viene en el DTO, es un error de tu lado.
      // Puedes:
      // 1. Lanzar un error:
      throw new Error('El código RUDE (student_rude) es obligatorio y debe ser proporcionado.');
      // 2. O, si por alguna razón lo generas aquí (poco común para RUDEs manuales):
      // createStudentDto.student_rude = Math.floor(Math.random() * 1000000000);
      // console.warn("ADVERTENCIA: student_rude no proporcionado en DTO, generando un valor aleatorio.");
    }

    const student = this.studentRepository.create(createStudentDto);

    // Añade otro console.log para ver el objeto Student antes de guardar
    console.log('Objeto Student antes de guardar:', student);
    // Verifica aquí que student.student_rude tiene un valor numérico.

    try {
      return await this.studentRepository.save(student);
    } catch (error) {
      console.error('Error al guardar estudiante:', error);
      throw error; // Vuelve a lanzar el error para que Nest lo maneje
    }
  }

  /**
   * Busca un estudiante por su código RUDE.
   * @param rude El código RUDE del estudiante a buscar.
   * @returns El estudiante encontrado.
   * @throws NotFoundException Si el estudiante no se encuentra.
   */
  async findByRude(rude: number): Promise<Student> {
    const student = await this.studentRepository.findOneBy({ student_rude: rude });
    if (!student) {
      throw new NotFoundException(`Estudiante con RUDE ${rude} no encontrado`);
    }
    return student;
  }

  /**
   * Actualiza parcialmente un estudiante existente.
   * @param rude El código RUDE del estudiante a actualizar.
   * @param updateStudentDto Los datos para actualizar el estudiante.
   * @returns El estudiante actualizado.
   * @throws NotFoundException Si el estudiante no se encuentra.
   */
  async update(rude: number, updateStudentDto: UpdateStudentDto): Promise<Student> {
    const student = await this.studentRepository.findOneBy({ student_rude: rude });
    if (!student) {
      throw new NotFoundException(`Estudiante con RUDE ${rude} no encontrado`);
    }
    Object.assign(student, updateStudentDto);
    return await this.studentRepository.save(student);
  }

  /**
   * Reemplaza completamente un estudiante existente con nuevos datos.
   * @param rude El código RUDE del estudiante a reemplazar.
   * @param createStudentDto Los nuevos datos del estudiante.
   * @returns El estudiante reemplazado.
   * @throws NotFoundException Si el estudiante no se encuentra.
   */
  async replace(rude: number, createStudentDto: CreateStudentDto): Promise<Student> {
    const student = await this.studentRepository.findOneBy({ student_rude: rude });
    if (!student) {
      throw new NotFoundException(`Estudiante con RUDE ${rude} no encontrado`);
    }
    student.student_rude = createStudentDto.student_rude;
    student.student_ci = createStudentDto.student_ci;
    student.first_name = createStudentDto.first_name;
    student.last_name = createStudentDto.last_name;
    student.birth_date = createStudentDto.birth_date;
    student.gender = createStudentDto.gender;
    student.address = createStudentDto.address;
    student.contact_phone = createStudentDto.contact_phone;
    student.email = createStudentDto.email;
    student.status = createStudentDto.status;
    return await this.studentRepository.save(student);
  }

  /**
   * Elimina un estudiante por su código RUDE.
   * @param rude El código RUDE del estudiante a eliminar.
   * @returns Una promesa que se resuelve cuando el estudiante es eliminado.
   * @throws NotFoundException Si el estudiante no se encuentra.
   */
  async delete(rude: number): Promise<void> {
    const result = await this.studentRepository.delete(rude); // TypeORM puede borrar por PK directamente
    if (result.affected === 0) {
      throw new NotFoundException(`Estudiante con RUDE ${rude} no encontrado`);
    }
  }
}
