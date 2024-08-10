const request = require('supertest');
const app = require('../index'); 

describe('API Tests', () => {
    it('should get all menu items', async () => {
        const response = await request(app).get('/api/menu');
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });


});