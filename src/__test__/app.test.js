require('dotenv').config();
process.env.MELI_API_URL = 'https://api.mercadolibre.com';
process.env.PORT = 'https://api.mercadolibre.com';
const app = require('../app');
const request = require('supertest');

/* afterEach(() => {
    process.env.MELI_API_URL = 'https://api.mercadolibre.com';
});
 */
describe('GET /api/items', function () {
    it('Debe responder con un json si se envian datos por url', (done) => {
        request(app)
            .get('/api/items?q=ps4')
            .expect(200)
            .end((err, res) => {
                expect(res.body).toBeDefined();
                expect(res.body.items).toBeDefined();
                done();
            });
    });

    it('Debe responder con un json vacío si no se envian datos por url', (done) => {
        request(app)
            .get('/api/item')
            .expect(200)
            .end((err, res) => {
                expect(res.body).toEqual({});
                done();
            });
    });

   /*  it('Debe disparar el error si la url del api de MELI no es correcta.', (done) => {
        process.env.MELI_API_URL = 'https://api.ERROR.com';
        request(app)
            .get('/api/item')
            .end((err, res) => {
                console.debug(res.error)
                done();
            });
    }); */
});

describe('GET /api/items/:id', function () {
    it('Debe responder con un json si se envian datos por url', (done) => {
        request(app)
            .get('/api/items/MLA920543431')
            .expect(200)
            .end((err, res) => {
                expect(res.body).toBeDefined();
                expect(res.body.item).toBeDefined();
                done();
            });
    });

    it('Debe responder con un json vacío si no se envian datos por url', (done) => {
        request(app)
            .get('/api/item')
            .expect(200)
            .end((err, res) => {
                expect(res.body).toEqual({});
                done();
            });
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