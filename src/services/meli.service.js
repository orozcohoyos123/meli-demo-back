const axios = require('axios');

const getProductsFiltered = (filterType, filter) => {
    try {
        return new Promise((resolve, reject) => {
            axios
                .get(`${process.env.MELI_API_URL}/sites/MLA/search?${filterType || 'q'}=${filter}`)
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
}

module.exports = meliApi;