import React from "react";

import "./Navbar.scss";
import { Link } from "react-router-dom";
import Button from "./Button/Button";
import Icon from "./IconLogin/Icon";

function Navbar(props) {
  function toggleSidebar() {
    // console.log(e.target);
    const burger = document.querySelector(".burger");
    const sidebar = document.querySelector(".navbar__link");
    const itemSidebar = document.querySelectorAll(".navbar__link li");

    sidebar.classList.toggle("navbar--appear");
    burger.classList.toggle("toggleBurger");
    itemSidebar.forEach((item, index) => {
      if (item.style.animation) {
        item.style.animation = "";
      } else {
        item.style.animation = `animationItemsNavbar .4s ease forwards ${
          index / 3 + 0.5
        }s`;
      }
    });
  }
  return (
    <div className="topbar">
      <nav className="navbar">
        <ul className="navbar__link">
          <Link
            to="/"
            style={{
              textDecoration: "none",
            }}
          >
            <li className="navbar__link--item">Home</li>
          </Link>
          <Link to="/category" style={{ textDecoration: "none" }}>
            <li className="navbar__link--item">Category</li>
          </Link>
          <Link to="/recipe" style={{ textDecoration: "none" }}>
            <li className="navbar__link--item">Recipe</li>
          </Link>
        </ul>
        <div className="navbar__login">
          <Icon />
          <Button />
        </div>
        <div className="burger" onClick={toggleSidebar}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
