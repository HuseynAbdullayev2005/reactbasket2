import React from "react";
import { useBasket } from "../context/basketcontext";
import { useState } from "react";
import { Helmet } from "react-helmet";
function Basket() {
  const { basket } = useBasket();
  const { increaseItem } = useBasket();
  const { itemcount } = useBasket();
  const { decreaseItem } = useBasket();
  return (
    <div>
      <Helmet>
        <title>basket</title>
        <meta name="description" content="Welcome to the home page of My App" />
        <link rel="canonical" href="https://www.example.com/home" />
      </Helmet>
      <h1 className="basket_header">Your Basket</h1>

      <div className="basket">
        {basket.map((x, i) => (
          <div key={i} className="basket_item">
            <img className="basket_item_image" src={x.image} alt={x.title} />
            <p className="basket_item_title">{x.title}</p>
            <p className="basket_item_price">{x.price}</p>
            <div className="basket_item_buttons">
              <button className="add" onClick={increaseItem}>
                +
              </button>
              <p>{itemcount}</p>
              <button className="dec" onClick={decreaseItem}>
                -
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Basket;
