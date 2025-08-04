const request = require('supertest');
const api = request('https://serverest.dev');

describe('DELETE /usuarios/{id}', () => {
  let token;
  let userId;

  beforeAll(async () => {
    // Criar usuário novo
    const newUser = {
      nome: "Usuário Deletável",
      email: `deletar_${Date.now()}@mail.com`,
      password: "123456",
      administrador: "true"
    };

    const resCreate = await api.post('/usuarios').send(newUser);
    userId = resCreate.body._id;

    // Obter token do novo usuário
    const loginRes = await api.post('/login').send({
      email: newUser.email,
      password: newUser.password
    });

    token = loginRes.body.authorization;
  });

  it('Deve deletar um usuário com sucesso', async () => {
    const res = await api
      .delete(`/usuarios/${userId}`)
      .set('Authorization', token);

    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Registro excluído com sucesso');
  });
});
