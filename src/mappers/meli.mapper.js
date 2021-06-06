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

const productsList = (data) => {
    try {
        if (data.paging.total === 0) return {};

        const categoriesFilter = data.filters.filter((f) => f.id === "category");
        const categories = categoriesFilter.length > 0 ? categoriesFilter.map(cat => cat.values[0].path_from_root) : [];

        return {
            author,
            categories: categories,
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

const productDetail = (data) => {
    try {
        if (data.paging.total === 0) return {};

        const categoriesFilter = data.filters.filter((f) => f.id === "category");
        const categories = categoriesFilter.length > 0 ? categoriesFilter.map(cat => cat.values[0].path_from_root) : [];

        return {
            author,
            categories: categories,
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

const meliMapper = {
    productsList,
    productDetail
}

module.exports = meliMapper;