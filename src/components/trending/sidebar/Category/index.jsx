import React from "react";
import "./Categories.scss";
function Category(props) {
  return (
    <div className="sidebar__category">
      <h3>Categories</h3>
      <div className="sidebar__category--list">
        <a href="/">
          <div>Breakfast</div>
          <div>25</div>
        </a>

        <a  href="/">
          <div>Lunch</div>
          <div>15</div>
        </a>

        <a href="/">
          <div>Pasta</div>
          <div>22</div>
        </a>

        <a href="/">
          <div>Dinner</div>
          <div>12</div>
        </a>

        <a href="/">
          <div>Juice</div>
          <div>10</div>
        </a>
        <a href="/">
          <div>Desert</div>
          <div>10</div>
        </a>
        <a href="/">
          <div>Fruit</div>
          <div>10</div>
        </a>
      </div>
    </div>
  );
}

export default Category;
