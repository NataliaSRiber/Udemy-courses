export class CreateCourseDto {
  // define a estrutura da requisição
  readonly name: string; // readonly, so lido, nao manipulado, + segurança
  readonly description: string;
  readonly tags: string[];
} // esta é  aestrutura que eu espero receber no body, o id sera criado no banco
