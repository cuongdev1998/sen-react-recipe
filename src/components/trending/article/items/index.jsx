import React, { useState } from "react";
import "./Items.scss";
import { FoodList } from "../../../../containers/Data.js";
import AddCartButton from "../../../add-to-cart-btn";
function Items(props) {
  const [foodList, setFoodList] = useState(FoodList);
  return (
    <div className="article__list">
      {foodList.map(function (item, index) {
        if (index >= 6) {
          return;
        } else {
          return (
            <div className="article__list--item" key={item.id}>
              <div className="article__list--item--img">
                <img src={item.srcImg} alt="" />
                <div className="three-dots">
                  <div className="first-dot"></div>
                  <div className="second-dot"></div>
                  <div className="third-dot"></div>
                </div>
              </div>

              <h4 className="article__list--item--category">{item.category}</h4>
              <h5 className="article__list--item--name">{item.name}</h5>
              <p className="article__list--item--detail">
                <a>
                  <i className="fa fa-clock"></i> {item.time}
                </a>
                <a>
                  <i className="fa fa-user"></i>by {item.chef}
                </a>
                <a>
                  <i className="fa fa-heart"></i> 0{item.heart} Likes
                </a>
              </p>

              <AddCartButton data={item} />
            </div>
          );
        }
      })}
    </div>
  );
}

export default Items;
