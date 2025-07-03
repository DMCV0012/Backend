import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccessTokensService } from './access_tokens.service';
import { AccessTokensController } from './access_tokens.controller';
import { AccessToken } from './entities/access_token.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AccessToken])],
  controllers: [AccessTokensController],
  providers: [AccessTokensService],
  exports: [AccessTokensService],
})
export class AccessTokensModule {}
