const app = require('../../server');
const request = require('supertest')

describe('GET Endpoints', () => {
  it('should get all customers', async () => {
    const res = await request(app)
      .get('/api/customers')
    expect(res.statusCode).toEqual(200)
  })
})


describe('POST Endpoints', () => {
  it('should create a customer', async () => {
    const customer = {
      first_name: "Jane",
      middle_name: "D",
      last_name: "Doe",
      email: "foo@bar.com",
      notes: "lorem ipsum"
    }
    const res = await request(app)
      .post('/api/customers').send(customer)

    expect(res.statusCode).toEqual(201)
  })
})

describe('GET Endpoints', () => {
  it('should get a customer by id', async () => {
    const res = await request(app)
      .get('/api/customers/1')
    expect(res.statusCode).toEqual(200)
  })
})