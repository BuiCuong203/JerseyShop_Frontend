export const CART = "cartData";

export const setCart = (cart) => {
    localStorage.setItem(CART, cart);
}

export const getCart = () => {
    return localStorage.getItem(CART);
}

export const removeCart = () => {
    return localStorage.removeItem(CART);
}
