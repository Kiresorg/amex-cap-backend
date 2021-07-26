const app = require('../../server');
const request = require('supertest')

describe('GET Endpoints', () => {
  it('should get all addresses', async () => {
    const res = await request(app)
      .get('/api/addresses')
    expect(res.statusCode).toEqual(200)
  })
})


describe('POST Endpoints', () => {
  it('should create an address', async () => {
    const address = {
      address_line_1: "123 main street",
      address_line_2: "apt 4B",
      city: "Portland",
      state: "OR",
      zip: "97239"
    }
    const res = await request(app)
      .post('/api/addresses').send(address)

    expect(res.statusCode).toEqual(201)
  })
})
