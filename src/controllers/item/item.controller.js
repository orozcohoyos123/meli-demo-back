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
        const productDetails = await meliApi.getProductDetail(req.params.id);
        const category = await meliApi.getCategoryById(productDetails.detail.category_id);

        
        const details = meliMapper.productDetail({
            ...productDetails,
            category
        });

        response.success(req, res, details, StatusCodes.OK);
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