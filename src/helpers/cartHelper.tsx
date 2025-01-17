// Local Storage Cart Manager Module

// Initialize the cart in localStorage
export const createLocalCart = () => {
    if (!localCartExists()) {
        localStorage.setItem('cart', JSON.stringify([]));
    }
};

// Check if the cart exists in localStorage
export const localCartExists = (): boolean => {
    return localStorage.getItem('cart') !== null;
};

// Retrieve the cart from localStorage
export const getLocalCart = (): any[] => {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
};

// Add or update an item in the cart
export const addToLocalCart = (item: { id: number, size: string, color: string }) => {
    createLocalCart();
    const cart = getLocalCart();
    const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id && cartItem.size === item.size && cartItem.color === item.color);

    if (existingItemIndex !== -1) {
        // Update quantity if item with the same size and color already exists
        cart[existingItemIndex].quantity += 1;
    } else {
        // Add new item with size and color
        cart.push({ ...item, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
};

// Update an item's quantity in the cart
export const updateLocalCartItem = (id: number, size: string, color: string, quantity: number) => {
    const cart = getLocalCart();
    const itemIndex = cart.findIndex(cartItem => cartItem.id === id && cartItem.size === size && cartItem.color === color);

    if (itemIndex !== -1) {
        cart[itemIndex].quantity = quantity;
        localStorage.setItem('cart', JSON.stringify(cart));
    }
};

// Remove an item from the cart
export const removeFromLocalCart = (id: number, size: string, color: string) => {
    const cart = getLocalCart();
    const updatedCart = cart.filter(cartItem => !(cartItem.id === id && cartItem.size === size && cartItem.color === color));
    localStorage.setItem('cart', JSON.stringify(updatedCart));
};

// Clear the entire cart
export const clearLocalCart = () => {
    localStorage.removeItem('cart');
};

// Count the total quantity of items in the cart
export const countCartQuantity = (): number => {
    const cart = getLocalCart();
    return cart.reduce((total, item) => total + item.quantity, 0);
};