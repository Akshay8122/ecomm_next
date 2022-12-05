import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

// @ts-ignore
const Context = createContext();

export const StateContext = ({ children }: any) => {
  const [showCart, setShowCart] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<any>();
  const [totalPrice, setTotalPrice] = useState();
  const [totalQuantities, setTotalQuantities] = useState();
  const [qty, setQty] = useState(1);

  const Add = (product: any, quantity: number) => {
    const checkProductInCart = cartItems.find(
      (item: any) => item._id === product._id
    );
    if (checkProductInCart) {
      setTotalPrice(
        (prevTotalPrice: any) => prevTotalPrice + product.price * quantity
      );
      setTotalQuantities(
        (prevTotalQuantities: any) => prevTotalQuantities + quantity
      );

      const updatedCartItems = cartItems.map((cartProduct: any) => {
        if (cartProduct._id === product._id)
          return {
            ...cartItems,
            quantity: cartProduct.quantity + quantity,
          };
      });

      setCartItems(updatedCartItems);
      toast.success(`${qty} ${product.name} added to the cart.`);
    }
  };

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };

  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
