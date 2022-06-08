import {
  /* HttpException, HttpStatus, */ Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';
import { Tag } from './entities/tag.entity';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course) // repositorio possui os metodos para manipular os dados da entidade Course
    private readonly courseRepository: Repository<Course>,

    @InjectRepository(Tag)
    private readonly tagRepository: Repository<Tag>,
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

  async create(createCourseDto: CreateCourseDto) {
    // por causa do return nao precisa de async, so add o async pois tera q esperar o array da tag ser criado no banco
    // dto usado para criação ou update
    const tags = await Promise.all(
      createCourseDto.tags.map((name) => this.preLoadTagByName(name)),
    );
    const newCourse = this.courseRepository.create({
      ...createCourseDto,
      tags,
    });
    return this.courseRepository.save(newCourse); // salvo
  }

  async update(id: string, updateCourseDto: UpdateCourseDto) {
    // como as tags podem ser enviadas ou não, precisamos verificar
    const tags =
      updateCourseDto.tags && // verifica se foram enviado tags
      (await Promise.all(
        updateCourseDto.tags.map((name) => this.preLoadTagByName(name)), // se sim verifica se tem no banco
      ));

    const updateCourse = await this.courseRepository.preload({
      // encontra os dados e prepara
      id: +id, // transforma o id em numero
      ...updateCourseDto,
      tags,
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

  private async preLoadTagByName(name: string): Promise<Tag> {
    // procura a tag no bd se não tiver ele cria
    const tag = await this.tagRepository.findOne({ where: { name } });

    if (tag) {
      return tag; // se tem a tag retorna ela senão cria abaixo
    }
    return this.tagRepository.create({ name });
  }
}
