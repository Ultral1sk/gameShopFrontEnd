export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem._id === cartItemToAdd._id
    );
    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem._id === cartItemToAdd._id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
};
export const removeItemFromCart = (cartItems, cartItemsToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem._id === cartItemsToRemove._id)
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem._id !== cartItemsToRemove._id)
    }
    return cartItems.map((cartItem) => (cartItem._id === cartItemsToRemove._id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem))


} 