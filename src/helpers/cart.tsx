export const createLocalCart = () => {
    
}

export const localCartExists = () => {
    const cart = localStorage.getItem('cart');

    if (cart) {
        return true
    }


    return false
}

export const addToLocalCart = (item) => {
    localStorage.
}