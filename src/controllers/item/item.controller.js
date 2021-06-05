const controllers = {
    getFilteredItems: (req, res) => {
        try {
           /*  let q = req.query.q;

            const objectResult = await mercadolibreItems.getAllFiltered(q);

            const resultMapper = mappers.newAllItems(objectResult);
            res.status(HTTP_CODES.OK).json(resultMapper); */
                res
                .status(200)
                .json({
                    prb: "asdasd"
                });
        } 
        catch (error) {
           /*  res
                .status(HTTP_CODES.BAD_REQUEST)
                .json(
                    errorStandard("Error al intentar obtener todos los items.", error)
                ); */
        }
    },
    getItemById: () => {
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
}

module.exports = controllers;