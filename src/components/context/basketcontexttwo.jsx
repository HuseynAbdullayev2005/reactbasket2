import React, { createContext, useContext, useState } from "react";

const BasketContext = createContext();

export function useBasket() {
  return useContext(BasketContext);
}

export function BasketProvider({ children }) {
  const [basket, setBasket] = useState(() => {
    const localBasket = localStorage.getItem("basketitems");
    return localBasket ? JSON.parse(localBasket) : [];
  });

  const [Basketcount, setBasketcount] = useState(basket.length);

  function addBasket(item) {
    setBasket((basket) => {
      const localBasket = [...basket, item];
      localStorage.setItem("basketitems", JSON.stringify(localBasket));
      return localBasket;
    });
    setBasketcount((count) => count + 1);
  }

  return (
    <BasketContext.Provider value={{ basket, addBasket, Basketcount }}>
      {children}
    </BasketContext.Provider>
  );
}
