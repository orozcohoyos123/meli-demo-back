require('dotenv').config();
process.env.MELI_API_URL = 'https://api.mercadolibre.com';
process.env.PORT = 'https://api.mercadolibre.com';
const app = require('../app');
const request = require('supertest');
const meliApi = require('../services/meli.service');

afterEach(() => {
    process.env.MELI_API_URL = 'https://api.mercadolibre.com';
});

describe('GET /', function () {
    it('', (done) => {
        request(app)
            .get('/')
            .expect(200)
            .end((err, res) => {
                expect(res.body).toBeDefined();
                done();
            });
    });
});

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

 /*    it('Debe disparar el error si la url del api de MELI no es correcta.', async () => {
        process.env.MELI_API_URL = 'https://api.ERROR.com';

         await request(app)
                .get('/api/item')
                .expect(500); //deberia disparar la respuesta del controlador, la cual es 500...

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
const mockItems = {
    "author": {
        "name": "Sebastián",
        "lastname": "Orozco Hoyos"
    },
    "categories": [
        [
            {
                "id": "MLA1144",
                "name": "Consolas y Videojuegos"
            },
            {
                "id": "MLA438566",
                "name": "Consolas"
            }
        ]
    ],
    "items": [
        {
            "id": "MLA827758259",
            "title": "Sony Playstation 4 Slim 1tb Standard  Color Jet Black",
            "price": {
                "currency": "ARS",
                "amount": 63980,
                "decimals": null
            },
            "picture": "http://http2.mlstatic.com/D_752561-MLA32731813778_112019-I.jpg",
            "condition": "new",
            "free_shipping": true,
            "location": "San Nicolás"
        },
        {
            "id": "MLA920543431",
            "title": "Sony Playstation 4 Slim 1tb Marvel's Spider-man/horizon Zero Dawn Complete Edition/ratchet & Clank  Color Negro",
            "price": {
                "currency": "ARS",
                "amount": 74999,
                "decimals": null
            },
            "picture": "http://http2.mlstatic.com/D_810459-MLA44182891230_112020-I.jpg",
            "condition": "new",
            "free_shipping": true,
            "location": "Monte Chingolo"
        },
        {
            "id": "MLA883576177",
            "title": "Sony Playstation 4 1tb Standard  Color Jet Black",
            "price": {
                "currency": "ARS",
                "amount": 67999,
                "decimals": null
            },
            "picture": "http://http2.mlstatic.com/D_781463-MLA40671062654_022020-I.jpg",
            "condition": "new",
            "free_shipping": true,
            "location": "Ramos Mejía"
        },
        {
            "id": "MLA915334263",
            "title": "Sony Playstation 4 Slim 1tb Mega Pack:tom Clancy's Rainbow Six Siege/horizon Zero Dawn/gran Turismo Sport  Color Negro",
            "price": {
                "currency": "ARS",
                "amount": 78999,
                "decimals": null
            },
            "picture": "http://http2.mlstatic.com/D_715450-MLA45333667630_032021-I.jpg",
            "condition": "new",
            "free_shipping": true,
            "location": "Núñez"
        }
    ]
}

afterEach(() => {
    process.env.MELI_API_URL = 'https://api.mercadolibre.com';
});

describe('GET /api/items', () => {
    it('', async () => {
        jest.spyOn(meliApi, "getProductsFiltered").mockResolvedValue(mockItems);
        const res = await meliApi.getProductsFiltered('ps4')

        expect(res).toEqual(mockItems);
    });

    it('', async () => {
        jest.spyOn(meliApi, "getProductsFiltered").mockResolvedValue({});
        const res = await meliApi.getProductsFiltered('')

        expect(res).toEqual({});
    });

    it('', async () => {
        jest.spyOn(meliApi, "getProductsFiltered").mockResolvedValue(() => { throw new Error(); });
        const res = await meliApi.getProductsFiltered('')

        expect(res).toThrow();
    });

    
    it('', async () => {
        //process.env.MELI_API_URL = 'https://api.ERROR.com';
        //jest.spyOn(meliApi, "getItems").mockResolvedValue(() => { throw new Error();  });
        //const res = await meliApi.getProductsFiltered('')
        const res = axios.get.mockRejectedValueOnce();
        
        console.debug(res);
        //await expect(meliApi.getItems('', jest.fn(), jest.fn())).rejects.toMatch('error');
    });
})

 */