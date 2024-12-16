import React from "react";
import { useState, useEffect } from "react";
import { useBasket } from "../context/basketcontext";
import { Helmet } from "react-helmet";
import { BasketProvider } from "../context/basketcontext";

function Home() {
  const { addBasket } = useBasket();
  const [items, setItems] = useState([]);
  async function getProduct() {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return data;
  }
  async function setProduct() {
    setItems(await getProduct());
  }

  useEffect(() => {
    setProduct();
  }, []);

  return (
    <div className="cards">
         <Helmet>
        <title>home</title>
        <meta name="description" content="Welcome to the home page of My App" />
        <link rel="canonical" href="https://www.example.com/home" />
      </Helmet>
      <div className="card_text">
        <h1>TRENDING</h1>
        <p>Top view in this week</p>
      </div>
      <div className="big_box">
        {items.map((x) => (
          <div className="box" key={x.id}>
            <div className="box_image">
              <img src={x.image} alt={x.title} />
            </div>
            <div className="box_name">
              <h4>{x.title}</h4>
            </div>
            <div className="box_price">
              <p>${x.price}</p>
            </div>
            <div className="box_button">
              <button className="add_btn" onClick={() => addBasket(x)}>
                Add to Basket
              </button>
              <button className="whis_btn" onClick={() => addWhislist(x)}>
                Add to Whislist
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
