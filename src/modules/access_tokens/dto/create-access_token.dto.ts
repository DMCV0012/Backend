import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsDate } from 'class-validator';

export class CreateAccessTokenDto {
  @ApiProperty({ example: 1, description: 'ID del usuario' })
  @IsNotEmpty()
  @IsNumber()
  user_id: number;

  @ApiProperty({ example: 'jwt_refresh_token', description: 'Token de acceso' })
  @IsNotEmpty()
  @IsString()
  access_token: string;

  @ApiProperty({ example: new Date(), description: 'Fecha de expiración del token' })
  @IsNotEmpty()
  expires_at: Date;
}
