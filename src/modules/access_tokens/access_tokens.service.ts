import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccessToken } from './entities/access_token.entity';
import { CreateAccessTokenDto } from './dto/create-access_token.dto';
import { UpdateAccessTokenDto } from './dto/update-access_token.dto';

@Injectable()
export class AccessTokensService {
  constructor(
    @InjectRepository(AccessToken)
    private readonly accessTokenRepository: Repository<AccessToken>,
  ) {}

  create(dto: CreateAccessTokenDto) {
    return this.accessTokenRepository.save(dto);
  }

  findAll() {
    return this.accessTokenRepository.find();
  }

  findOne(id: number) {
    return this.accessTokenRepository.findOneBy({ id_tokens: id });
  }

  update(id: number, dto: UpdateAccessTokenDto) {
    return this.accessTokenRepository.update(id, dto);
  }

  remove(id: number) {
    return this.accessTokenRepository.delete(id);
  }
}
