import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('courses') // mostra a rota a ser utilizada
export class CoursesController {
  @Get() // podemos colocar a rota aqui tbm ou inserir rota aninhada
  findAll() {
    return 'Courses List';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Course id is ${id}`;
  }

  @Post()
  create(@Body() body: object) {
    return body;
  }
}
