import React from "react";
import { CategoryList } from "../../containers/Data";
import "./CategoriesBox.scss";
function CategoriesBox(props) {
  return (
    <div className="category__box">
      {CategoryList.map((item) => (
        // <Box dataCategory={item} key={item.id} />
        <div className="category__box--layout" key={item.id}>
          <div className="box--image">
            <img src={item.imageCategory} alt="" />
          </div>
          <div className="box--content">
            <p className="box--content-name">{item.category_name}</p>
            <p className="box--content-count">{item.count} Recipes</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategoriesBox;
