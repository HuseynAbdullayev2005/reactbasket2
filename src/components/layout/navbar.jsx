import React from "react";

import { Outlet, Link } from "react-router-dom";
import { useBasket } from "../context/basketcontext";
function Navbar() {
  const { Basketcount } = useBasket();
  return (
    <nav>
      <div className="navbar">
        <div className="navbar_left">
          <h1>Navbar</h1>
        </div>
        <div className="navbar_middle">
          <ul className="navbar_list">
            <li>
              <Link className="link_class" to="/">
                <p>Home</p>
              </Link>
            </li>
            <li>
              <Link className="link_class" to="/basket">
                <i class="fa-solid fa-cart-shopping">
                  <sup>{Basketcount}</sup>
                </i>
              </Link>
            </li>
            <li>
              <Link className="link_class" to="/whislist">
                <i class="fa-regular fa-heart"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
