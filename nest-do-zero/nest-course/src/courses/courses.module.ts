import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { Course } from './entities/course.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Course])], // informa a entity a ser utilizada
  controllers: [CoursesController],
  providers: [CoursesService],
}) // define uma classe como um módulo
export class CoursesModule {}
