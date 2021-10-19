import React, { useState } from "react";
import { FoodList } from "../../containers/Data";
import "./ListImg.scss";
function ListImage(props) {
  const [images] = useState(FoodList);
  return (
    <div className="list-image">
      <a className="follow-ig" href="https://instagram.com">
        <i className="fa fa-instagram"></i>Follow on Instagram
      </a>
      <ul>
        {images.map(function (item, index) {
          if (index >= 8) {
            return (<></>);
          } else {
            return (
              <li key={item.id}>
                <a href="/">
                  <img src={item.srcImg} alt="" />
                </a>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}

export default ListImage;
