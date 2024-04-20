import { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    // Fetch products from the database
    fetch("http://localhost:4000/api/display")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data); // Update products state with fetched data
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []); // Empty dependency array to ensure the effect runs only once

  // Function to calculate total cart amount
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = products.find((product) => product.productid === item);
        totalAmount += cartItems[item] * parseFloat(itemInfo.price);
      }
    }
    return totalAmount.toFixed(2); // Round to two decimal places
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] ? prev[itemId] + 1 : 1, // Check if item exists in cart, if not, initialize it to 1
    }));
  };

  const removeFromCart = (itemId) => {
    if (cartItems[itemId] && cartItems[itemId] > 0) {
      setCartItems((prev) => ({
        ...prev,
        [itemId]: prev[itemId] - 1, // Decrement item count if it's greater than 0
      }));
    }
  };

  const updateCartItemCount = (newAmount, itemId) => {
    if (!isNaN(newAmount)) {
      setCartItems((prev) => ({
        ...prev,
        [itemId]: parseInt(newAmount) || 0, // Parse the new amount to integer or set to 0 if NaN
      }));
    }
  };

  const checkout = () => {
    setCartItems({}); // Empty the cart after checkout
  };

  const contextValue = {
    cartItems,
    products,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;