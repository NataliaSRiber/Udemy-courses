import {
  /* HttpException, HttpStatus, */ Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course) // repositorio possui os metodos para manipular os dados da entidade Course
    private readonly courseRepository: Repository<Course>,
  ) {}

  findAll() {
    return this.courseRepository.find();
  }

  findOne(id: string) {
    const course = this.courseRepository.findOne({
      where: { id: parseInt(id) },
    });
    if (!course) {
      // throw new HttpException(
      //   `Course Id ${id} not found`,
      //   HttpStatus.NOT_FOUND,
      // );
      throw new NotFoundException(`Course ID ${id} not found`);
    }
    return course;
  }

  create(createCourseDto: CreateCourseDto) {
    // por causa do return nao precisa de async
    // dto usado para criação ou update
    const newCourse = this.courseRepository.create(createCourseDto);
    return this.courseRepository.save(newCourse); //salvo
  }

  async update(id: string, updateCourseDto: UpdateCourseDto) {
    const updateCourse = await this.courseRepository.preload({
      // encontra os dados e prepara
      id: +id, // transforma o id em numero
      ...updateCourseDto,
    });

    if (!updateCourse) {
      throw new NotFoundException(`Course ID ${id} not found`);
    }
    return this.courseRepository.save(updateCourse);
  }

  async remove(id: string) {
    const removeCourse = await this.courseRepository.findOne({
      where: { id: parseInt(id) },
    });
    if (!removeCourse) {
      throw new NotFoundException(`Course ID ${id} not found`);
    }
    return this.courseRepository.remove(removeCourse);
  }
}
