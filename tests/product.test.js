const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../app');
require('dotenv').config();

beforeEach(async () => {
  await mongoose.connect(process.env.MONGODB_URI);
});

describe('GET /products', () => {
  it('should return all products', async () => {
    const res = await request(app).get('/products');
    expect(res.statusCode).toBe(200);
    expect(res.body.products.length).toBeGreaterThan(0);
  });
});

describe('POST /products', () => {
  it('should create a product', async () => {
    const res = await request(app).post('/products').send({
      name: 'Product 2',
      price: 1009,
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.product.name).toBe('Product 2');
  });
});

describe('PATCH /products/:id', () => {
  it('should update a product', async () => {
    const res = await request(app)
      .patch('/products/65f5ee5c68cac5254234758e')
      .send({
        name: 'Product 4',
        price: 108,
      });
    expect(res.statusCode).toBe(200);
    expect(res.body.product.price).toBe(108);
  });
});

describe('DELETE /products/:id', () => {
  it('should delete a product', async () => {
    const res = await request(app).delete('/products/65f5ee5c68cac5254234758e');
    expect(res.statusCode).toBe(200);
  });
});

afterEach(async () => {
  await mongoose.connection.close();
});
