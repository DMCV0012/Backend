// subjects/dto/update-subject.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsNumber } from 'class-validator';

export class UpdateSubjectDto {
  @ApiProperty({ example: 'Matematicas Avanzadas', description: 'Nuevo nombre de la materia', required: false })
  @IsOptional()
  @IsString({ message: 'El nombre de la materia debe ser una cadena de texto' })
  name_subject?: string;

  @ApiProperty({ example: 'Estudio profundo de cálculo y álgebra lineal.', description: 'Nueva descripción de la materia', required: false })
  @IsOptional()
  @IsString({ message: 'La descripción debe ser una cadena de texto' })
  description?: string;

  @ApiProperty({ example: 6, description: 'Nuevos créditos asignados a la materia', required: false })
  @IsOptional()
  @IsNumber({}, { message: 'Los créditos deben ser un número' })
  credits?: number;
}
