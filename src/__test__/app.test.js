require('dotenv').config();
process.env.MELI_API_URL = 'https://api.mercadolibre.com';
const app = require('../app');
const request = require('supertest');


describe('GET /api/items', function () {
    it('responds with json', function (done) {
        request(app)
            .get('/api/items?q=ps4')
            .set('Accept', 'application/json')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200, done);
    });
});

/*
describe("POST /users", () => {
    describe("given a username and password", () => {

        test("should respond with a 200 status code", async () => {
            const response = await request(app).post("/users").send({
                username: "username",
                password: "password"
            })
            expect(response.statusCode).toBe(200)
        })
        test("should specify json in the content type header", async () => {
            const response = await request(app).post("/users").send({
                username: "username",
                password: "password"
            })
            expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
        })
        test("response has userId", async () => {
            const response = await request(app).post("/users").send({
                username: "username",
                password: "password"
            })
            expect(response.body.userId).toBeDefined()
        })
    })

})
 */