import app from '../../src/app'
import request from 'supertest'

describe('Users', () => {
  it("deve buscar os dados de todos os tweets", async () => {
    const user = await request(app).get('/tweets')

    expect(user.status).toBe(200)
  }) 

  it("deve buscar os dados dos top 5", async () => {
    const user = await request(app).get('/tweets/topfive')

    expect(user.status).toBe(200)
  }) 

  it("deve buscar os dados agrupados por data", async () => {
    const user = await request(app).get('/tweets/group/createdat')

    expect(user.status).toBe(200)
  }) 

  it("deve buscar os dados agrupados por linguagem", async () => {
    const user = await request(app).get('/tweets/group/lang')

    expect(user.status).toBe(200)
  }) 

  it("deve retornar um erro gerado manualmente", async () => {
    const user = await request(app).get('/error')

    expect(user.status).toBe(500)
  }) 

})
// test('should return false given external link', async () => {
//   const user = await request(app).get('/users')

//   expect(user.status).toBe(401)
// })

// test('should return field not informed', async () => {
//   const user = await request(app).post('/users').send({
    
//   });

//   expect(user.status).toBe(422)
// });
