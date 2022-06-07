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
  Res,
} from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses') // mostra a rota a ser utilizada
export class CoursesController {
  constructor(private readonly coursesServices: CoursesService) {}

  @Get() // podemos colocar a rota aqui tbm ou inserir rota aninhada
  findAll(@Res() response) {
    return response.status(200).send;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Course id is ${id}`;
  }

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT) // força o metodo a retornar o 204 nao o 201. Para resposta utilizamos outro
  create(@Body() body: object) {
    // para uma info especifica no @Body(name), so retornara o name
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: object) {
    return `Atualização do Curso ${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Exclusão do Curso de id ${id}`;
  }
}
