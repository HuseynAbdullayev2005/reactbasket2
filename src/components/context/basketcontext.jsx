import React, { createContext, useContext, useState } from "react";

const BasketContext = createContext();

export function useBasket() {
  return useContext(BasketContext);
}

export function BasketProvider({ children }) {
  const [basket, setBasket] = useState([]);
const [itemcount,setItemcount] = useState(0);
  const [Basketcount, setBasketcount] = useState(basket.length);

  function addBasket(item) {
    setBasket((basket) => {
      const localBasket = [...basket, item];

      return localBasket;
    });
    setBasketcount((count) => count + 1);
  }
  function increaseItem() {
    setItemcount((count) => count + 1);
  }
  function decreaseItem() {
    setItemcount((count) => count - 1);
  }

  return (
    <BasketContext.Provider
      value={{ basket, addBasket, Basketcount, increaseItem, decreaseItem ,itemcount }}
    >
      {children}
    </BasketContext.Provider>
  );
}
