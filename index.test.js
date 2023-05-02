const { expect, test, describe } = require('@jest/globals');
const request = require('supertest');
const http = require('http');
const app = require('./app');

const server = http.createServer(app);

describe('show that it works', function () {
    test('request should return a status code of 200', async () => {
        const response = await request(server).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ message: 'Hello World!' });
    })
});