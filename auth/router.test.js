const request = require('supertest');
const server = require('../api/server');

describe('auth router', function () {
    it('tests are running', function () {
        expect(true).toBe(true);
    });

    describe('POST /api/auth/login', function () {
        it('returns JSON on successful login', function () {
            return request(server)
                .post('/api/auth/login')
                .send({
                    username: 'Test',
                    password: 'lambda'
                })
                .then(res => {
                    expect(res.type).toBe('application/json')
                })
        });

        it('returns welcome message on successful login', function () {
            return request(server)
                .post('/api/auth/login')
                .send({
                    username: 'Test',
                    password: 'lambda'
                })
                .then(res => {
                    expect(res.body.message).toBe('Welcome Test')
                })
        })
    })

    // describe('POST /api/auth/register', function () {
    //     it('201 status on succesful add', function () {
    //         return request(server)
    //             .post('/api/auth/register')
    //             .send({
    //                 username: 'Test',
    //                 password: 'lambda'
    //             })
    //             .then(res => {
    //                 expect(res.status).toBe(201);
    //             })
    //     })
    // })
})