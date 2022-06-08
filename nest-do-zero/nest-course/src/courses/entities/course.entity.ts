import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Tag } from './tag.entity';

@Entity('courses') // nome da tabela a ser criada
export class Course {
  // course é o nome da tabela
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @JoinTable() // lado principal da relação
  @ManyToMany(() => Tag, (tag: Tag) => tag.courses, {
    cascade: true,
  }) // quem vai receber o relacionamento a entidade Tag
  tags: Tag[];
}
