const request = require('supertest');
const server = require('../api/server');

describe('server', function () {
    it('runs tests', function () {
        expect(true).toBe(true)
    })

    describe('GET /', function () {
        it('status 200 on success', function () {
            return request(server)
                .get('/')
                .then(res => {
                    expect(res.status).toBe(200)
                })
        })

        it('should return server is running', function () {
            return request(server)
                .get('/')
                .then(res => {
                    expect(res.text).toEqual('Server is running')
                })
        })
    })
})

describe('auth router', function () {
    it('tests are running', function () {
        expect(true).toBe(true);
    });

    // describe('POST /api/auth/register', function () {
    //     it('201 status on succesful add', function () {
    //         return request(server)
    //             .post('/api/auth/register')
    //             .send({
    //                 username: 'Lambda',
    //                 password: 'lambda'
    //             })
    //             .then(res => {
    //                 expect(res.status).toBe(201);
    //             })
    //     })
    // })

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

})