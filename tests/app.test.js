const request = require('supertest');
const app = require('../app');

describe('GET /ping', () => {
  it('should return pong', async () => {
    const res = await request(app).get('/ping');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'pong');
  });
});

// Alternate syntax and writeup
// https://www.testim.io/blog/supertest-how-to-test-apis-like-a-pro/