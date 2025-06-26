// subjects/dto/create-subject.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateSubjectDto {
  @ApiProperty({ example: 'Matematicas', description: 'Nombre de la materia (debe ser único)' })
  @IsNotEmpty({ message: 'El nombre de la materia es obligatorio' })
  @IsString({ message: 'El nombre de la materia debe ser una cadena de texto' })
  name_subject: string;

  @ApiProperty({ example: 'Estudio de números, cantidades y formas.', description: 'Descripción de la materia', required: false })
  @IsString({ message: 'La descripción debe ser una cadena de texto' })
  description: string;

  @ApiProperty({ example: 5, description: 'Créditos asignados a la materia' })
  @IsNotEmpty({ message: 'Los créditos son obligatorios' }) // Asumiendo que los créditos son obligatorios
  @IsNumber({}, { message: 'Los créditos deben ser un número' })
  credits: number;
}
