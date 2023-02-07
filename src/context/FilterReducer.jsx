const reducer = (state, action) => {
    switch (action.type) {

        case 'GET_FILTER_LOADING':

            return {
                ...state,
                isFilterLoading: action.toLoad.isFilterLoading
            }

        case 'GET_TOTAL_PRODUCTS':

            let priceArr = action.toLoad.totalProducts.map((elem) => {
                return elem.price
            })

            // let maxPrice = priceArr.reduce((initial, curElem) => {
            //     return Math.max(initial, curElem), 0
            // })

            let maxPrice = Math.max(...priceArr)
            return {
                ...state,
                isFilterLoading: action.toLoad.isFilterLoading,
                totalProducts: [...action.toLoad.totalProducts],
                filterProducts: [...action.toLoad.filterProducts],
                filters: { ...state.filters, max_price: maxPrice, price: maxPrice }
            }

        case 'GET_GRID_VIEW':

            return {
                ...state,
                grid_view: action.toLoad.grid_view
            }

        case 'GET_LIST_VIEW':

            return {
                ...state,
                grid_view: action.toLoad.grid_view
            }

        case 'GET_SORTING_VALUE':

            return {
                ...state,
                sorting_value: action.toLoad
            }

        case 'GET_SORTING_PRODUCTS':
            let newSortProduct;
            let { filterProducts, sorting_value } = state
            let tempSortProduct = [...filterProducts]

            const sortProduct = (a, b) => {


                if (sorting_value === 'lowest') {

                    return a.price - b.price

                }
                if (sorting_value === 'highest') {

                    return b.price - a.price

                }
                if (sorting_value === 'a-z') {

                    return a.name.localeCompare(b.name)

                }
                if (sorting_value === 'z-a') {

                    return b.name.localeCompare(a.name)

                }

            }

            newSortProduct = tempSortProduct.sort(sortProduct)


            return {
                ...state,
                filterProducts: newSortProduct
            }

        case 'GET_INPUT_VALUE':

            const { name, value } = action.toLoad

            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value
                }
            }

        case 'GET_INPUT_SEARCH_PRODUCTS':

            let { totalProducts } = state;
            let inputTempProducts = [...totalProducts];

            const { text, category, company, colors, price } = state.filters;

            if (text) {
                inputTempProducts = inputTempProducts.filter((elem) => {
                    return elem.name.toLowerCase().includes(text.toLowerCase());
                })
            }

            if (category !== 'all') {
                inputTempProducts = inputTempProducts.filter((elem) => {
                    return elem.category.toLowerCase() === category.toLowerCase();
                })
            }

            if (company !== 'all') {
                inputTempProducts = inputTempProducts.filter((elem) => {
                    return elem.company.toLowerCase() === company.toLowerCase();
                })
            }

            if (colors !== 'all') {
                inputTempProducts = inputTempProducts.filter((elem) => {
                    return elem.colors.includes(colors);
                })
            }

            if (price === 0) {
                inputTempProducts = inputTempProducts.filter((elem) => {
                    return elem.price === price;
                })
            }

            if (price) {
                inputTempProducts = inputTempProducts.filter((elem) => {
                    return elem.price <= price;
                })
            }

            console.log(inputTempProducts)

            return {
                ...state,
                filterProducts: inputTempProducts


            }

        case 'CLEAR_FILTERS':

            return {
                ...state,
                filters: {
                    ...state.filters,
                    text: '',
                    category: 'all',
                    company: 'all',
                    colors: 'all',
                    price: state.filters.max_price,
                    max_price: state.filters.max_price,
                    min_price: 0
                }
            }

        default:
            return state
    }
}

export default reducer;