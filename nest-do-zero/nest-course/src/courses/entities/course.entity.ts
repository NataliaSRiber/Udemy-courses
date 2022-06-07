import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('courses') // nome da tabela a ser criada
export class Course {
  // course é o nome da tabela
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('json', { nullable: true }) // pode ser nulo
  tags: string[];
}
