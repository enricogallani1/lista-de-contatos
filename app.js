const User = require('./user');
const conn = require('./config');


conn.sync()
  .then(() => {
    console.log('Tabelas sincronizadas com sucesso')

  })
  .then(user => {
    console.log('Usuário criado:', user.toJSON());

    // Consultar todos os usuários após criar o novo usuário
    return User.findAll();
  })
  .then(users => {
    console.log('Usuários encontrados:', users.map(user => user.toJSON()));
  })
  .catch(err => {
    console.error('Erro:', err);
  });