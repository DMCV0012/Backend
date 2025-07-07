import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Token } from './domain/entities/tokens.entity';
import { CreateTokenDto } from './interfaces/dto/create-tokens.dto';
import { UpdateTokenDto } from './interfaces/dto/update-tokens.dto';

@Injectable()
export class TokensService {
  constructor(
    @InjectRepository(Token)
    private readonly tokenRepository: Repository<Token>,
  ) {}

  async create(createTokenDto: CreateTokenDto): Promise<Token> {
    const token = this.tokenRepository.create(createTokenDto);
    return await this.tokenRepository.save(token);
  }

  async findById(id_tokens: number): Promise<Token> {
    const token = await this.tokenRepository.findOneBy({ id_tokens });
    if (!token) {
      throw new NotFoundException(`Token con ID ${id_tokens} no encontrado`);
    }
    return token;
  }

  async update(id_tokens: number, updateTokenDto: UpdateTokenDto): Promise<Token> {
    const token = await this.tokenRepository.findOneBy({ id_tokens });
    if (!token) {
      throw new NotFoundException(`Token con ID ${id_tokens} no encontrado`);
    }
    Object.assign(token, updateTokenDto);
    return await this.tokenRepository.save(token);
  }

  async replace(id_tokens: number, createTokenDto: CreateTokenDto): Promise<Token> {
    const token = await this.tokenRepository.findOneBy({ id_tokens });
    if (!token) {
      throw new NotFoundException(`Token con ID ${id_tokens} no encontrado`);
    }
    Object.assign(token, createTokenDto);
    return await this.tokenRepository.save(token);
  }

  async delete(id_tokens: number): Promise<void> {
    const result = await this.tokenRepository.delete(id_tokens);
    if (result.affected === 0) {
      throw new NotFoundException(`Token con ID ${id_tokens} no encontrado`);
    }
  }
}
