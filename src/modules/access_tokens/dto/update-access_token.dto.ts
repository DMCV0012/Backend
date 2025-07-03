import { PartialType } from '@nestjs/swagger';
import { CreateAccessTokenDto } from './create-access_token.dto';

export class UpdateAccessTokenDto extends PartialType(CreateAccessTokenDto) {}
