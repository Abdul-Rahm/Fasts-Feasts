export const setAllProducts = (product) => {
    return {
        type: "SET_ALL_PRODUCTS",
        product: product,
    };
};

export const getAllProducts = () => {
    return{
        type: "GET_ALL_PRODUCTS",
    };
};