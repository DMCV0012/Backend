// tokens/dto/update-token.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsNumber, IsString, IsDateString } from 'class-validator';

export class UpdateTokenDto {
  @ApiProperty({ example: 2, description: 'Nuevo ID del usuario para este token', required: false })
  @IsOptional()
  @IsNumber({}, { message: 'El ID de usuario debe ser un número' })
  user_id?: number;

  @ApiProperty({ example: 'new_eyJhbGciOiJIUzI1Ni...', description: 'Nuevo token de acceso', format: 'uuid', required: false })
  @IsOptional()
  @IsString({ message: 'El token de acceso debe ser una cadena de texto' })
  access_token?: string;

  @ApiProperty({ example: '2025-07-04T23:00:00.000Z', description: 'Nueva fecha y hora de expiración del token (formato ISO 8601)', required: false })
  @IsOptional()
  @IsDateString({}, { message: 'La fecha de expiración debe ser una fecha válida en formato ISO 8601' })
  expires_at?: Date;
}