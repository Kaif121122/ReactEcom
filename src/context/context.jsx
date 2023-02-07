import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import { reducer } from "./reducer"


const AppContext = createContext();

const initialState = {

    isLoading: true,
    featureProducts: [],
    products: [],
    isSingleLoading: true,
    singleProduct: {}

}


const API = "https://api.pujakaitem.com/api/products";

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    // GET DATA FROM API 

    const getValue = async (url) => {
        dispatch({
            type: "GET_LOADING",
            toLoad: {
                isLoading: true,
            }
        })

        try {

            const res = await axios.get(url);
            const data = await res.data;
            console.log(data)
            dispatch({
                type: "GET_PRODUCTS",
                toLoad: {
                    isLoading: false,
                    products: data
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getValue(API)

    }, [])


    //  GET SINGLE PRODUCT PAGE FROM API 

    const getSingleProduct = async (url) => {
        dispatch({
            type: "GET_SINGLE_LOADING",
            toLoad: {
                isSingleLoading: true,
            }
        })

        try {

            const res = await axios.get(url);
            const singleData = await res.data;

            console.log(singleData)
            dispatch({
                type: "GET_SINGLE_PRODUCT",
                toLoad: {
                    isSingleLoading: false,
                    singleProduct: singleData
                }
            })
        } catch (error) {

            console.log(error)
        }
    }



    return <AppContext.Provider value={{ ...state, getSingleProduct }}>
        {children}
    </AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext }