import { ADD_CART_ITEM, CLEAR_CART_ITEM, REMOVE_CART_ITEM } from './cartActionsTypes'
export const addCartItem = (game) => {
    return {
        type: ADD_CART_ITEM,
        payload: game

    }
}
export const removeCartItem = (game) => {
    return {
        type: REMOVE_CART_ITEM,
        payload: game
    }
}

export const clearCartItem = (game) => {
    return {
        type: CLEAR_CART_ITEM,
        payload: game
    }
}

