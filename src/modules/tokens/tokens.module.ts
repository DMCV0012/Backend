import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Token } from './domain/entities/tokens.entity';
import { TokensService } from './tokens.service';
import { TokensController } from './tokens.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Token])],
  controllers: [TokensController],
  providers: [TokensService],
})
export class TokensModule {}
