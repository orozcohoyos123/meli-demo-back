const mapper = require('../../mappers/meli.mapper');
const meliMockProducts = require('../../__mocks__/meliMockProducts');
const meliMockProductDetail = require('../../__mocks__/meliMockProductDetail');
const mockProductsList = {
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
            "id": "MLA920543431",
            "title": "Sony Playstation 4 Slim 1tb Marvel's Spider-man/horizon Zero Dawn Complete Edition/ratchet & Clank  Color Negro",
            "price": {
                "currency": "ARS",
                "amount": 74999,
                "decimals": 0
            },
            "picture": "http://http2.mlstatic.com/D_810459-MLA44182891230_112020-I.jpg",
            "condition": "new",
            "free_shipping": true,
            "location": "Monte Chingolo"
        },
        {
            "id": "MLA879214753",
            "title": "Sony Playstation 4 Slim 1tb Standard  Color Jet Black",
            "price": {
                "currency": "ARS",
                "amount": 64999,
                "decimals": 0
            },
            "picture": "http://http2.mlstatic.com/D_752561-MLA32731813778_112019-I.jpg",
            "condition": "new",
            "free_shipping": true,
            "location": "CABA"
        },
        {
            "id": "MLA883576177",
            "title": "Sony Playstation 4 1tb Standard  Color Jet Black",
            "price": {
                "currency": "ARS",
                "amount": 67999,
                "decimals": 0
            },
            "picture": "http://http2.mlstatic.com/D_781463-MLA40671062654_022020-I.jpg",
            "condition": "new",
            "free_shipping": true,
            "location": "Ramos Mejía"
        },
        {
            "id": "MLA854355338",
            "title": "Sony Playstation 4 Slim 1tb Extra Dualshock 4 Controller  Color Jet Black",
            "price": {
                "currency": "ARS",
                "amount": 85000,
                "decimals": 0
            },
            "picture": "http://http2.mlstatic.com/D_602027-MLA40381347562_012020-I.jpg",
            "condition": "new",
            "free_shipping": true,
            "location": "San Isidro"
        }
    ]
}
const mockProductsDetails = {
    "author": {
        "name": "Sebastián",
        "lastname": "Orozco Hoyos"
    },
    "categories": [
        {
            "id": "MLA1144",
            "name": "Consolas y Videojuegos"
        },
        {
            "id": "MLA438566",
            "name": "Consolas"
        }
    ],
    "item": {
        "id": "MLA920543431",
        "title": "Sony Playstation 4 Slim 1tb Marvel's Spider-man/horizon Zero Dawn Complete Edition/ratchet & Clank  Color Negro",
        "price": {
            "currency": "ARS",
            "amount": 74999,
            "decimals": 0
        },
        "picture": "http://http2.mlstatic.com/D_810459-MLA44182891230_112020-I.jpg",
        "condition": "new",
        "free_shipping": true,
        "sold_quantity": 50,
        "description": "Con tu consola PlayStation 4 tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos. \n\nCon la consola PlayStation 4, líder mundial en ventas durante años, podrás gozar de horas de juego y una excelente navegabilidad para disfrutar de películas, series y contenido online.\n\nGracias a sus pequeñas dimensiones, su consumo energético es reducido, lo que la convierte en un producto económico y accesible.\n\nNo solo esto, el control DualShock combina funciones revolucionarias y sin precedentes mientras conserva precisión, comodidad y exactitud en cada movimiento.\n\nAdaptada a tus necesidades\nGuardá tus apps, fotos, videos y mucho más en el disco duro, que cuenta con una capacidad de 1 TB. \nAl contar con un procesador de 8 núcleos y uno gráfico, brinda una experiencia dinámica, respuestas ágiles, y transiciones fluidas de imágenes en alta definición.\nPor otro lado, tiene puerto USB y salida HDMI, que permiten conectar accesorios y cargar la batería de tu control mientras jugás.\n\nVas a poder reproducir música, ver tus películas y series favoritas a través de las aplicaciones descargables."
    }
}

describe('productsList', () => {
    it('Debe retornar la lista de productos vacia si el mock no contiene datos', () => {
        const mockEmpty = {
            paging: {
                total: 0
            }
        }

        const res = mapper.productsList(mockEmpty);
        expect(res).toEqual({});
    })

    it('Debe retornar la lista de productos mapeada con la estructura correcta', () => {
        const res = mapper.productsList(meliMockProducts);
        expect(res).toEqual(mockProductsList);
    })

    /*  it('Debe un error', () => {
         
         jest.spyOn(mapper, "productsList").mockResolvedValue(() => { throw new Error(); } );
         const res = mapper.productsList();
 
         expect(res).toThrow();
     }) */
});


describe('productDetail', () => {
    it('Debe retornar el detalle del producto mapeado con la estructura correcta', () => {
        const res = mapper.productDetail(meliMockProductDetail);
        expect(res).toEqual(mockProductsDetails);
    })

    /* it('Debe disparar un error', () => {
         
        jest.spyOn(mapper, "productDetail").mockResolvedValue(() => { throw new Error(); } );
        const res = mapper.productDetail();

        expect(res).toThrow();
    }) */
});