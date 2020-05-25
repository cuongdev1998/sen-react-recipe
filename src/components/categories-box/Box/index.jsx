import React from "react";

function Box(props) {
  const item = props.dataCategory;
  console.log(item);
  return (
    <div>
      <div className="category__box--layout">
        <div className="box--image">
          <img src={item.imageCategory} alt="" />
        </div>
        <div className="box--content">
          <p className="box--content-name">{item.category_name}</p>
          <p className="box--content-count">{item.count} Recipes</p>
        </div>
      </div>
    </div>
  );
}

export default Box;
