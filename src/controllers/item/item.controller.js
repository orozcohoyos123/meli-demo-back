const { StatusCodes, getReasonPhrase } = require('http-status-codes');
const response = require('../../responses/response');
const meliApi = require('../../services/meli.service');
const meliMapper = require('../../mappers/meli.mapper');

const getFilteredItems = async (req, res) => {
    try {
        const products = await meliApi.getProductsFiltered(req.query.q);
        const productsResponse = meliMapper.productsList(products);

        response.success(req, res, productsResponse, StatusCodes.OK);
    }
    catch (err) {
        response.error(req, res, null, StatusCodes.INTERNAL_SERVER_ERROR, err);
    }
};

const getItemById = async (req, res) => {
    try {
        const products = await meliApi.getProductDetail(req.params.id);
        //consumir el detalle de los productos y unirlos a la consulta 
        //const details = meliMapper.productDetail(products);

        response.success(req, res, products, StatusCodes.OK);
    }
    catch (err) {
        response.error(req, res, null, StatusCodes.INTERNAL_SERVER_ERROR, err);
    }
}

const controllers = {
    getFilteredItems,
    getItemById
}

module.exports = controllers;