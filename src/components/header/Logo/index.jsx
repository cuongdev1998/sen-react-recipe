import React from "react";
import "./Logo.scss";
function Logo(props) {
  return (
    <a className="header__logo" href="/">
      <i className="fa fa-cutlery"></i>
      <p>
        test - 1 - 2021 Dev <br />
        <span> Discover recipe</span>
      </p>
    </a>
  );
}

export default Logo;
