const axios = require('axios');

const getProductsFiltered = (filter) => {
    try {
        return new Promise((resolve, reject) => {
            axios
                .get(`${process.env.MELI_API_URL}/sites/MLA/search?q=${filter}`)
                .then(({data}) => {
                    resolve(data)
                })
                .catch((err) => {
                    reject(err)
                });
        });
    } 
    catch (err) {
        console.log(err);
        throw new Error('Ha ocurrido un error.')
    }
}

const getProductDetail = (id) => {
    console.log(`${process.env.MELI_API_URL}/items/${id}`)
    try {
        return new Promise((resolve, reject) => {
            axios
                .get(`${process.env.MELI_API_URL}/items/${id}`)
                .then(({data}) => {
                    resolve(data)
                })
                .catch((err) => {
                    reject(err)
                });
        });
    } 
    catch (err) {
        console.log(err);
        throw new Error('Ha ocurrido un error.')
    }
}

const meliApi = {
    getProductsFiltered,
    getProductDetail
}

module.exports = meliApi;