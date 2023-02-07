export const reducer = (state, action) => {


    switch (action.type) {

        case "GET_LOADING":
            return {
                ...state,
                isLoading: action.toLoad.isLoading,
            }

        case "GET_PRODUCTS":

            const getFeatureProducts = action.toLoad.products.filter((elem) => {
                return elem.featured === true
            })
            return {
                ...state,
                isLoading: action.toLoad.isLoading,
                products: action.toLoad.products,
                featureProducts: getFeatureProducts
            }

        case "GET_SINGLE_LOADING":
            return {
                ...state,
                isSingleLoading: action.toLoad.isSingleLoading,
            }

        case "GET_SINGLE_PRODUCT":
            return {
                ...state,
                isSingleLoading: action.toLoad.isSingleLoading,
                singleProduct: action.toLoad.singleProduct
            }

        default:
            return state;
    }




}