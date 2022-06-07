import { IsString } from 'class-validator';
export class CreateCourseDto {
  // define a estrutura da requisição
  @IsString()
  readonly name: string; // readonly, so lido, nao manipulado, + segurança

  @IsString()
  readonly description: string;

  @IsString({ each: true }) // validação, each- cada conteudo do array
  readonly tags: string[];
} // esta é  aestrutura que eu espero receber no body, o id sera criado no banco
