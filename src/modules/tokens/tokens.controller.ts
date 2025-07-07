import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
  ApiOperation,
} from '@nestjs/swagger';
import { TokensService } from './tokens.service';
import { CreateTokenDto } from './interfaces/dto/create-tokens.dto';
import { UpdateTokenDto } from './interfaces/dto/update-tokens.dto';
import { Token } from './domain/entities/tokens.entity';

@ApiTags('tokens')
@Controller('tokens')
export class TokensController {
  constructor(private readonly tokensService: TokensService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo Token' })
  @ApiCreatedResponse({ type: Token, description: 'Token creado exitosamente' })
  @ApiBadRequestResponse({ description: 'Datos inválidos.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createTokenDto: CreateTokenDto): Promise<Token> {
    return this.tokensService.create(createTokenDto);
  }

  @Get(':id_tokens')
  @ApiOperation({ summary: 'Obtener un token por ID' })
  @ApiParam({ name: 'id_tokens', type: Number, description: 'ID del token' })
  @ApiOkResponse({ type: Token, description: 'Token encontrado exitosamente' })
  @ApiBadRequestResponse({ description: 'Parámetro inválido.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  async findById(@Param('id_tokens') id_tokens: number): Promise<Token> {
    return this.tokensService.findById(id_tokens);
  }

  @Patch(':id_tokens')
  @ApiOperation({ summary: 'Actualizar parcialmente un token' })
  @ApiParam({ name: 'id_tokens', type: Number, description: 'ID del token' })
  @ApiOkResponse({ type: Token, description: 'Token actualizado exitosamente' })
  @ApiBadRequestResponse({ description: 'Datos inválidos.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  async update(
    @Param('id_tokens') id_tokens: number,
    @Body() updateTokenDto: UpdateTokenDto,
  ): Promise<Token> {
    return this.tokensService.update(id_tokens, updateTokenDto);
  }

  @Put(':id_tokens')
  @ApiOperation({ summary: 'Reemplazar completamente un token' })
  @ApiParam({ name: 'id_tokens', type: Number, description: 'ID del token' })
  @ApiOkResponse({ type: Token, description: 'Token reemplazado exitosamente' })
  @ApiBadRequestResponse({ description: 'Datos inválidos.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  async replace(
    @Param('id_tokens') id_tokens: number,
    @Body() createTokenDto: CreateTokenDto,
  ): Promise<Token> {
    return this.tokensService.replace(id_tokens, createTokenDto);
  }

  @Delete(':id_tokens')
  @ApiOperation({ summary: 'Eliminar un token' })
  @ApiParam({ name: 'id_tokens', type: Number, description: 'ID del token' })
  @ApiNoContentResponse({ description: 'Token eliminado exitosamente' })
  @ApiBadRequestResponse({ description: 'Parámetro inválido.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  async delete(@Param('id_tokens') id_tokens: number): Promise<void> {
    await this.tokensService.delete(id_tokens);
  }
}
