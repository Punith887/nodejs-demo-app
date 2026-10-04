const { describe, it } = require('node:test');
const assert = require('node:assert');
const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('should return 200 OK with success message and status', async () => {
    const response = await request(app).get('/');
    assert.strictEqual(response.statusCode, 200);
    assert.strictEqual(response.body.message, 'Hello, World!');
    assert.strictEqual(response.body.status, 'success');
    assert.ok(response.body.timestamp);
  });
});

describe('GET /health', () => {
  it('should return 200 OK with healthy status', async () => {
    const response = await request(app).get('/health');
    assert.strictEqual(response.statusCode, 200);
    assert.strictEqual(response.body.status, 'healthy');
    assert.strictEqual(typeof response.body.uptime, 'number');
  });
});
