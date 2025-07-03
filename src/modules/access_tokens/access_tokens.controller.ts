import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccessTokensService } from './access_tokens.service';
import { CreateAccessTokenDto } from './dto/create-access_token.dto';
import { UpdateAccessTokenDto } from './dto/update-access_token.dto';

@Controller('access-tokens')
export class AccessTokensController {
  constructor(private readonly accessTokensService: AccessTokensService) {}

  @Post()
  create(@Body() dto: CreateAccessTokenDto) {
    return this.accessTokensService.create(dto);
  }

  @Get()
  findAll() {
    return this.accessTokensService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accessTokensService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateAccessTokenDto) {
    return this.accessTokensService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accessTokensService.remove(+id);
  }
}
