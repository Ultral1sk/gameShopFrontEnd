import { ADD_CART_ITEM, CLEAR_CART_ITEM, REMOVE_CART_ITEM } from './cartActionsTypes'
import { addItemToCart, removeItemFromCart } from "./cartutils";


var { cartItems } = JSON.parse(localStorage.getItem("boughtProduct") || "[]")

console.log(cartItems, "reducer state local")
const initialState = {
    cartItems: cartItems
}
var stateLast;
const cartReducer = (state = initialState, action) => {
    //console.log("state inside cartReducer", state)
    if (action.type === ADD_CART_ITEM) {
        stateLast = {
            ...state,
            cartItems: addItemToCart(state.cartItems, action.payload)
        }
        localStorage.setItem("boughtProduct", JSON.stringify(stateLast))
        return stateLast
    } else if (action.type === REMOVE_CART_ITEM) {
        stateLast = {
            ...state,
            cartItems: removeItemFromCart(state.cartItems, action.payload)
        }
        localStorage.setItem("boughtProduct", JSON.stringify(stateLast))

        return stateLast
    } else if (action.type === CLEAR_CART_ITEM) {
        stateLast = {
            ...state,
            cartItems: state.cartItems.filter(
                cartItem => cartItem._id !== action.payload._id
            )
        }
        localStorage.setItem("boughtProduct", JSON.stringify(stateLast))

        return stateLast
    } else return state
}

export default cartReducer