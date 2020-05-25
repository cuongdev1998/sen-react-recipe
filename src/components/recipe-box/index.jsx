import PropTypes from "prop-types";
import React, { useEffect } from "react";
import "./RecipeBox.scss";

RecipeBox.propTypes = {
  data: PropTypes.array,
};
RecipeBox.defaultProps = {
  data: [],
};

function RecipeBox(props) {
  const { data } = props;

  useEffect(() => {
    const recipeItem = document.querySelectorAll(".recipe__list--item");
    recipeItem.forEach((item, index) => {
      item.style.animation = `fadeBox 1s ease forwards ${index / 7 + 0.3}s`;
      item.style.transition = "transform .5s ease-out";
    });
  });
  return (
    <div className="recipe__list">
      {data.map((item) => (
        <div className="recipe__list--item" key={item.id}>
          <div className="recipe__list--item--img">
            <img src={item.srcImg} alt="" />
          </div>

          <h4 className="recipe__list--item--category">{item.category}</h4>
          <h5 className="recipe__list--item--name">{item.name}</h5>
          <p className="recipe__list--item--description">{item.description}</p>
          <p className="recipe__list--item--detail">
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
        </div>
      ))}
    </div>
  );
}

export default RecipeBox;
