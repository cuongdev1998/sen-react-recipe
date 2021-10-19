import React from "react";
import "./Search.scss";
import Cart from "./Cart";
function Search(props) {
  function handleSearchForm() {
    const searchForm = document.querySelector(".search-form");
    searchForm.classList.add("search-form-appear");
  }
  return (
    <div className="header__search">
      <div className="header__search--form">
        <i className="fa fa-search" onClick={handleSearchForm}></i>
      </div>
      <i className="fa fa-shopping-bag"></i>
      <Cart />
      <div className="cart-group"></div>
    </div>
  );
}

export default Search;
