import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';

// docker run --name postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgress
// docker start postgres
@Module({
  imports: [
    CoursesModule,
    TypeOrmModule.forRoot({
      // no forroot para os parametros para se conectar com o banco
      type: 'postgres', // tipo de banco de dados
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'docker',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
