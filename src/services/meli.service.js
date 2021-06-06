const axios = require('axios');

const getProductsFiltered = (filter) => {
    try {
        return new Promise((resolve, reject) => {
            axios
                .get(`${process.env.MELI_API_URL}/sites/MLA/search?q=${filter}`)
                .then(({ data }) => {
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
    try {
        return new Promise((resolve, reject) => {
            axios
                .all([
                    axios.get(`${process.env.MELI_API_URL}/items/${id}`),
                    axios.get(`${process.env.MELI_API_URL}/items/${id}/description`)
                ])
                .then(axios.spread((productDetail, productInfo) => {
                    //console.log(productInfo)
                    resolve({
                        detail: productDetail.data,
                        info: productInfo.data
                    })
                }))
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

const getCategoryById = (id) => {
    try {
        return new Promise((resolve, reject) => {
            axios
                .get(`${process.env.MELI_API_URL}/categories/${id}`)
                .then(({ data }) => {
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
    getProductDetail,
    getCategoryById
}

module.exports = meliApi;