const request = require('supertest');
const server = require('../api/server');

let token;

describe('jokes router', function () {
    it('able to run tests', function () {
        expect(true).toBe(true);
    });

    // describe('GET /api/jokes', function () {
    //     it('200 status on success', function () {
    //         return request(server)
    //         .get('/api/jokes')
    //         .set('Authorization', token)
    //         .then(res => {
    //             expect(res.status).toBe(200)
    //         })
    //     })
    // })

})