import { useContext, useReducer, useEffect } from "react";
import { createContext } from "react";
import { useGlobalContext } from "./context";
import reducer from "./FilterReducer"

const FilterContext = createContext();

const initialState = {
    isFilterLoading: true,
    totalProducts: [],
    filterProducts: [],
    grid_view: true,
    sorting_value: 'lowest',
    filters: {
        text: '',
        category:'all',
        company:'all',
        colors:'all',
        price:0,
        max_price:0,
        min_price:0
    }
}

const FilterProvider = ({ children }) => {

    const { products } = useGlobalContext();


    const [state, dispatch] = useReducer(reducer, initialState);

    // dispatch({
    //     type: 'GET_FILTER_LOADING',
    //     toLoad: {
    //         isFilterLoading: true
    //     }
    // })


    // FIND TOTAL PRODUCTS 

    useEffect(() => {
        dispatch({
            type: 'GET_TOTAL_PRODUCTS',
            toLoad: {
                isFilterLoading: false,
                totalProducts: products,
                filterProducts: products
            }
        })
    }, [products])

    // SET GRID VIEW 

    const setGridView = () => {
        dispatch({
            type: 'GET_GRID_VIEW',
            toLoad: {
                grid_view: true
            }
        })

    }

    // SET LIST VIEW 

    const setListView = () => {

        dispatch({
            type: 'GET_LIST_VIEW',
            toLoad: {
                grid_view: false
            }
        })
    }

    // GET SHORTING VALUE FROM SELECT 

    const shorting = (event) => {
        let userValue = event.target.value;
        dispatch({
            type: 'GET_SORTING_VALUE',
            toLoad: userValue

        })

        console.log(userValue)
    }

    // GET SHORTING PRODUCTS 

    useEffect(() => {
        dispatch({
            type: 'GET_SORTING_PRODUCTS',
        })
       
    }, [ state.sorting_value])


    // GET INPUT SEARCH PRODUCTS 

    useEffect(() => {
        dispatch({
            type: 'GET_INPUT_SEARCH_PRODUCTS',
        })

    }, [ state.filters])
    

    // GET DATA THROUGH INPUT SEARCH 

    const updateFilterValue = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        return dispatch({
            type: 'GET_INPUT_VALUE',
            toLoad: {
                name, value
            }
        })

    }


    const clearFilters = ()=>{
        dispatch({
            type:'CLEAR_FILTERS'
        })
    }

    return <FilterContext.Provider value={{ ...state, setGridView, setListView, shorting, updateFilterValue,clearFilters }}>
        {children}
    </FilterContext.Provider>
}

const useFilterGlobalContext = () => {
    return useContext(FilterContext);
}

export { FilterProvider, useFilterGlobalContext }