
import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import products from '../../product';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [productList] = useState(products);

  const addToCart = (productId) => {
    const productToAdd = productList.find((product) => product.id === productId);
    if (productToAdd) {
      setCartItems((prevCartItems) => [...prevCartItems, { ...productToAdd, uuid: uuidv4() }]);
    }
  };

  const getCartItems = () => {
    return cartItems;
  };

  const removeItemFromCart = (itemUuid) => {
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.uuid !== itemUuid));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, getCartItems, removeItemFromCart, productList }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };