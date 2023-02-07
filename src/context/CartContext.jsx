import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from './CartReducer'


const CartContext = createContext();

// LOCAL STORAGE 

const getLocalStorage = () => {

    let myData = localStorage.getItem('kaifData')
    if (myData.length === 0) {
        return []
    } else {
        return JSON.parse(myData)

    }
}

const initialState = {
    cart: getLocalStorage(),
    total_item: 0,
    total_price: '',
    shipping_fee: 50000

}



const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);



    useEffect(() => {
        localStorage.setItem('kaifData', JSON.stringify(state.cart));
        dispatch({
            type:'GET_CART_TOTAL'
        });
        dispatch({
            type:'GET_CART_TOTAL_PRICE'
        });
    }, [state.cart])

    // ADD ITEMS TO CART 

    const addItems = (id, amount, color, product) => {
        dispatch({
            type: 'ADD_ITEMS',
            toLoad: { id, amount, color, product }
        })
    }

    // REMOVE ITEMS FROM CART 

    const removeItem = (id) => {
        dispatch({
            type: 'REMOVE_ITEM',
            toLoad: id
        })
    }

    // CLEAR ALL ITEMS FROM CART 

    const clearCart = () => {
        dispatch({
            type: 'CLEAR_CART_ITEM',
        })
    }

    // INCREASE ITEMS INSIDE CART 

    const setIncrease = (id) => {
        dispatch({
            type: 'INCREASE_ITEM',
            toLoad: id
        })
    }

    // DECREASE ITEMS INSIDE CART 

    const setDecrease = (id) => {
        dispatch({
            type: 'DECREASE_ITEM',
            toLoad: id
        })
    }

    return <CartContext.Provider value={{ ...state, addItems, removeItem, clearCart, setIncrease, setDecrease }}>
        {children}</CartContext.Provider>
}

const useCartGlobal = () => {
    return useContext(CartContext)
}

export { CartProvider, useCartGlobal }