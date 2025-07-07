// classes/class.controller.ts
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
import { ClassService } from './class.service';
import { CreateClassDto } from './interfaces/dto/create-class.dto';
import { UpdateClassDto } from './interfaces/dto/update-class.dto';
import { Class } from './domain/entities/class.entity';

@ApiTags('classes')
@Controller('classes')
export class ClassController {
  constructor(private readonly classService: ClassService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva clase' })
  @ApiCreatedResponse({ type: Class, description: 'Clase creada exitosamente' })
  @ApiBadRequestResponse({ description: 'Los datos proporcionados no son válidos.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createClassDto: CreateClassDto): Promise<Class> {
    return this.classService.create(createClassDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una clase por ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID de la clase' })
  @ApiOkResponse({ type: Class, description: 'Clase encontrada exitosamente' })
  @ApiBadRequestResponse({ description: 'El parámetro proporcionado no es válido.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  async findById(@Param('id') id: number): Promise<Class> {
    return this.classService.findById(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar parcialmente una clase' })
  @ApiParam({ name: 'id', type: Number, description: 'ID de la clase' })
  @ApiOkResponse({ type: Class, description: 'Clase actualizada exitosamente' })
  @ApiBadRequestResponse({ description: 'Los datos proporcionados no son válidos.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  async update(
    @Param('id') id: number,
    @Body() updateClassDto: UpdateClassDto,
  ): Promise<Class> {
    return this.classService.update(id, updateClassDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Reemplazar completamente una clase' })
  @ApiParam({ name: 'id', type: Number, description: 'ID de la clase' })
  @ApiOkResponse({ type: Class, description: 'Clase reemplazada exitosamente' })
  @ApiBadRequestResponse({ description: 'Los datos proporcionados no son válidos.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  async replace(
    @Param('id') id: number,
    @Body() createClassDto: CreateClassDto,
  ): Promise<Class> {
    return this.classService.replace(id, createClassDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una clase' })
  @ApiParam({ name: 'id', type: Number, description: 'ID de la clase' })
  @ApiNoContentResponse({ description: 'Clase eliminada exitosamente' })
  @ApiBadRequestResponse({ description: 'El parámetro proporcionado no es válido.' })
  @ApiInternalServerErrorResponse({ description: 'Error interno del servidor.' })
  async delete(@Param('id') id: number): Promise<void> {
    await this.classService.delete(id);
  }
}
