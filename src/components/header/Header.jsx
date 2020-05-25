import React from "react";
import PropTypes from "prop-types";
import "./Header.scss";
import Logo from "./Logo";
import Search from "./Search";
Header.propTypes = {};

function Header(props) {
  return (
    <header>
      <section className="header">
        <div className="header__network">
          <a href="#">
            <i className="fa fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fa fa-pinterest"></i>
          </a>
          <a href="#">
            <i className="fa fa-skype"></i>
          </a>
          <a href="#">
            <i className="fa fa-google-plus"></i>
          </a>
        </div>
        <Logo />
        <Search />
      </section>
    </header>
  );
}

export default Header;
