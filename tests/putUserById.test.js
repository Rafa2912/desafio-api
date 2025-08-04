const request = require('supertest');
const api = request('https://serverest.dev');
const { getUserInfo } = require('../utils/tokenManager');

describe('PUT /usuarios/{id}', () => {
  it('Deve atualizar um usuário com sucesso', async () => {
    const { token, userId } = await getUserInfo();

    const updatedUser = {
      nome: "Usuário Atualizado",
      email: `atualizado_${Date.now()}@mail.com`,
      password: "novaSenha123",
      administrador: "false"
    };

    const res = await api
      .put(`/usuarios/${userId}`)
      .set('Authorization', token)
      .send(updatedUser);

    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Registro alterado com sucesso');
  });
});
