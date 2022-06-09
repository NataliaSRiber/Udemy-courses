module.exports = {
  type: 'postgres', // tipo de banco de dados
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'postgres',
  entities: ['dist/**/*.entity.js'], // informa a pasta do build da aplicação
  migrations: ['dist/migrations/*.js'],
  cli: {
    migrations: 'src/migrations',
  },
};
