import React, { useState } from "react";
import "./LatestArticle.scss";
import { FoodList } from "../../../../containers/Data.js";
function LatestArticle(props) {
  const [foodArticle, setFoodArticle] = useState(FoodList);
  return (
    <div className="sidebar__article">
      <h3>Latest Recipe</h3>
      <div className="sidebar__article--list">
        {foodArticle.map(function (item, index) {
          if (index >= 6) {
            return;
          } else {
            return (
              <div className="sidebar__article--list--item" key={item.id}>
                <div className="item-img">
                  <img src={item.srcImg} alt="" />
                  <p>{item.id}</p>
                </div>
                <div className="item-detail">
                  <h4 className="item-detail-category">{item.category}</h4>
                  <p className="item-detail-name"> {item.name} </p>
                  <p className="item-detail-chef">
                    <a href="#">
                      {" "}
                      <i className="fa fa-user"></i>by {item.chef}
                    </a>{" "}
                  </p>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default LatestArticle;
