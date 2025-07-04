// tokens/dto/create-token.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsDateString } from 'class-validator';

export class CreateTokenDto {
  @ApiProperty({ example: 1, description: 'ID del usuario al que pertenece el token' })
  @IsNotEmpty({ message: 'El ID de usuario es obligatorio' })
  @IsNumber({}, { message: 'El ID de usuario debe ser un número' })
  user_id: number;

  @ApiProperty({ example: 'eyJhbGciOiJIUzI1Ni...', description: 'El token de acceso (generalmente un refresh token)', format: 'uuid' })
  @IsNotEmpty({ message: 'El token de acceso es obligatorio' })
  @IsString({ message: 'El token de acceso debe ser una cadena de texto' })
  access_token: string;

  @ApiProperty({ example: '2025-07-03T23:00:00.000Z', description: 'Fecha y hora de expiración del token (formato ISO 8601)' })
  @IsNotEmpty({ message: 'La fecha de expiración es obligatoria' })
  @IsDateString({}, { message: 'La fecha de expiración debe ser una fecha válida en formato ISO 8601' })
  expires_at: Date;
}