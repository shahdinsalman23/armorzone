import { createContext, useContext, useState } from "react";


const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addtocart = (product) => {
        setCartItems((prev) => {
            const itemExists = prev.find((item) => item.id === product.id);
            if (itemExists) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + product.quantity }
                        : item
                );
            } else {
                return [...prev, { ...product }]; // Use product's own quantity
            }
        });
    };




    const updateQty = (productId, newQty) => {
        if (newQty < 1) return;
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === productId ? { ...item, quantity: newQty } : item
            )
        );
    };

    const removeFromCart = (productId) => {
        setCartItems((prev) => prev.filter((item) => item.id !== productId));
    };


    const getCartCount = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    }

    const getCartTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };


    return (
        <CartContext.Provider value={{ cartItems, addtocart, getCartCount, updateQty, removeFromCart, getCartTotal, }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider;
export const useCart = () => useContext(CartContext)