

const CartReducer = (state, action) => {



    switch (action.type) {


        case 'ADD_ITEMS':

            let { id, amount, color, product } = action.toLoad;

            const myItem = state.cart.find((elem) => {
                return elem.id === id + color
            })

            if (myItem) {

                let updatedProduct = state.cart.map((elem) => {
                    if (elem.id === id + color) {
                        let newAmount = elem.amount + amount;
                        if (newAmount >= elem.max) {
                            newAmount = elem.max;
                        }
                        return {
                            ...elem,
                            amount: newAmount
                        }
                    } else {
                        return elem
                    }


                })

                return {
                    ...state,
                    cart: updatedProduct

                }


            } else {


                const newItem = {
                    id: id + color,
                    name: product.name,
                    color,
                    image: product.image[0].url,
                    amount,
                    price: product.price,
                    max: product.stock
                }


                return {
                    ...state,
                    cart: [...state.cart, newItem]

                }
            }

        case 'REMOVE_ITEM':

            const filteredItem = state.cart.filter((elem) => {
                return elem.id !== action.toLoad
            })

            return {
                ...state,
                cart: filteredItem

            }

        case 'CLEAR_CART_ITEM':


            return {
                ...state,
                cart: []

            }

        case 'INCREASE_ITEM':

            let increaseItem = state.cart.map((elem) => {
                if (elem.id === action.toLoad) {

                    let incAmount = elem.amount + 1

                    if (incAmount >= elem.max) {
                        incAmount = elem.max
                    }

                    return {
                        ...elem,
                        amount: incAmount


                    }
                } else {
                    return elem
                }
            })

            return {
                ...state,
                cart: increaseItem

            }

        case 'DECREASE_ITEM':

            let decreaseItem = state.cart.map((elem) => {
                if (elem.id === action.toLoad) {

                    let decAmount = elem.amount - 1

                    if (decAmount <= 1) {
                        decAmount = 1
                    }

                    return {
                        ...elem,
                        amount: decAmount


                    }
                } else {
                    return elem
                }
            })

            return {
                ...state,
                cart: decreaseItem

            }

        case 'GET_CART_TOTAL':

            const totalItem = state.cart.reduce((accumulator, elem) => accumulator + elem.amount, 0)

            console.log(state.cart)
            return {
                ...state,
                total_item: totalItem

            }

        case 'GET_CART_TOTAL_PRICE':

            const totalPrice = state.cart.reduce((accumulator, elem) => accumulator + elem.amount * elem.price, 0)

            return {
                ...state,
                total_price: totalPrice

            }
            
        default:
            return state
    }

}

export default CartReducer