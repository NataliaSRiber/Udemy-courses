import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses') // mostra a rota a ser utilizada
export class CoursesController {
  constructor(private readonly coursesServices: CoursesService) {}

  @Get() // podemos colocar a rota aqui tbm ou inserir rota aninhada
  findAll() {
    return this.coursesServices.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coursesServices.findOne(id);
  }

  @Post()
  // @HttpCode(HttpStatus.NO_CONTENT) // força o metodo a retornar o 204 nao o 201. Para resposta utilizamos outro
  create(@Body() body) {
    // para uma info especifica no @Body(name), so retornara o name
    return this.coursesServices.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: object) {
    return this.coursesServices.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coursesServices.remove(id);
  }
}
