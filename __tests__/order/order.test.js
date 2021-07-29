const app = require('../../server');
const request = require('supertest')

// read
describe('GET Endpoints', () => {
    it('should get all orders', async () => {
      const res = await request(app)
        .get('/api/orders')
      expect(res.statusCode).toEqual(200)
    })
  })