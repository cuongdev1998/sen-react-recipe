import React, { useState } from "react";
import { FoodList } from "../../../containers/Data";
import "./Label.scss";
function Label(props) {
  const [foodList, setFoodList] = useState(FoodList);
  console.log(foodList);

  return (
    <div className="list__food">
      {foodList.map(function (item, index) {
        if (index >= 3) {
          return;
        } else {
          return (
            <div className="list__food--items" key={item.id}>
              <img
                className="list__food--items--image"
                src={item.srcImg}
                alt=""
              />
              <h4 className="list__food--items--category">{item.category}</h4>
              <h5 className="list__food--items--name">{item.name}</h5>

              <p className="list__food--items--detail">
                <a href="#">
                  <i className="fa fa-clock"></i> {item.time} mins
                </a>
                <a href="#">
                  <i className="fa fa-user"></i> {item.chef}
                </a>
                <a href="#">
                  <i className="fa fa-heart"></i> 0{item.heart} Likes
                </a>
              </p>
            </div>
          );
        }
      })}
    </div>
  );
}

export default Label;
