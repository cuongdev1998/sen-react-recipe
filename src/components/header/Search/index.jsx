import React, { useEffect } from "react";
import "./Search.scss";
import Cart from "./Cart";
function Search(props) {
  function handleSearchForm() {
    const searchForm = document.querySelector(".search-form");
    searchForm.classList.add("search-form-appear");
  }
  function handleCart() {
    const cart = document.querySelector(".cart");

    cart.style.transform = "rotateX(0deg)";
    cart.style.opacity = "1";
    cart.addEventListener("mouseover", () => {
      cart.style.display = "block";
    });
  }
  function closeCart() {
    const cart = document.querySelector(".cart");
    cart.style.transform =
      "perspective(1000px) rotateX(-30deg) rotateY(0deg) rotateZ(0)";
    cart.style.opacity = "0";
  }
  return (
    <div className="header__search">
      <div className="header__search--form">
        <i className="fa fa-search" onClick={handleSearchForm}></i>
      </div>

      <div className="cart-group">
        <i
          className="fa fa-shopping-bag"
          onMouseOver={handleCart}
          onClick={handleCart}
        ></i>
        <Cart />
      </div>
    </div>
  );
}

export default Search;
