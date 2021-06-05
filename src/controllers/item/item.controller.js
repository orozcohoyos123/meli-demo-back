const { StatusCodes, getReasonPhrase } = require('http-status-codes');
const response = require('../../responses/response');
const meliApi = require('../../services/meli.service');
const meliMapper = require('../../mappers/meli.mapper');

const getFilteredItems = async (req, res) => {
    try {
        const filterType = req.query.q ? 'q' : 'category';
        const filter =  req.query.q ?  req.query.q  :  req.query.category;
        
        const products = await meliApi.getProductsFiltered(filterType, filter);
        const productsResponse = meliMapper.productsList(products);

        response.success(req, res, productsResponse, StatusCodes.OK);
    }
    catch (err) {
        response.error(req, res, null, StatusCodes.INTERNAL_SERVER_ERROR, err);
    }
};

const getItemById = async () => {
    try {
        /*   const id = req.params.id;
          if (!id)
              res
                  .status(HTTP_CODES.BAD_REQUEST)
                  .json({ error: "Parametro (id) no enviado." });

          const objectItemById = await mercadolibreItems.getById(id);
          const objectItemByIdDescription = await mercadolibreItems.getDescriptionById(
              id
          );

          const resultMapper = mappers.newItemsByIdWithDescription(
              objectItemById,
              objectItemByIdDescription
          );
          res.status(HTTP_CODES.OK).json(resultMapper); */
    }
    catch (error) {
        /* res
            .status(HTTP_CODES.BAD_REQUEST)
            .json(
                errorStandard(
                    "Error al intentar obtener la información de un item.",
                    error
                )
            ); */
    }
}
const controllers = {
    getFilteredItems,
    getItemById
}

module.exports = controllers;