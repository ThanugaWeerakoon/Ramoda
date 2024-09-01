
import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import productsData from '../../shop'; 

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  
  const addToCart = (productId, size) => {
    const productToAdd = productsData.find((product) => product.id === productId);
    if (productToAdd) {
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        { ...productToAdd, uuid: uuidv4(), size }
      ]);
    }
  };

  const getCartItems = () => {
    return cartItems;
  };

  const removeItemFromCart = (itemUuid) => {
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.uuid !== itemUuid));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, getCartItems, removeItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
