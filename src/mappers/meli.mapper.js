const author = {
    name: "Sebastián",
    lastname: "Orozco Hoyos",
};

const productInfo = (p) => {
    return {
        id: p.id,
        title: p.title,
        price: {
            currency: p.currency_id,
            amount: p.price,
            decimals: parseFloat((p.price + "").split(".")[1]),
        },
        picture: p.thumbnail,
        condition: p.condition,
        free_shipping: p.shipping.free_shipping
    }
};

const categoryInfo = (data) => {
    const categoriesFilter = data.filters.filter((f) => f.id === "category");
    return categoriesFilter.length > 0 ? categoriesFilter.map(cat => cat.values[0].path_from_root) : [];
}

const productsList = (data) => {
    try {
        if (data.paging.total === 0) return {};

        return {
            author,
            categories: categoryInfo(data),
            items: data.results.map(item => ({
                ...productInfo(item),
                location: item.address.city_name,
            })).slice(0, 4),
        };
    }
    catch (err) {
        console.log(err);
        throw new Error('Ha ocurrido un error.');
    }
}

const productDetail = ({ detail, info, category /*plain_text: {info: plain_text}*/  }) => {
    try {
        return {
            author,
            categories: category.path_from_root,
            item: {
                ...productInfo(detail),
                sold_quantity: detail.sold_quantity,
                description: info.plain_text
            },
        };
    }
    catch (err) {
        console.log(err);
        throw new Error('Ha ocurrido un error.');
    }
}

const meliMapper = {
    productsList,
    productDetail,
    categoryInfo
}

module.exports = meliMapper;