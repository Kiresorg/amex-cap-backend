const app = require('../../server');
const request = require('supertest')

// create an order



// read
describe('GET Endpoints', () => {
    it('should get all orders', async () => {
      const res = await request(app)
        .get('/api/orders')
      expect(res.statusCode).toEqual(200)
    })
  })

  describe('GET Endpoints', () => {
    it('should get all orders by Id', async () => {
      const res = await request(app).get('/api/orders/id')
      expect(res.statusCode).toEqual(200)
    })
  })

  // update product quantity

  // delete an order

