import React, { useState } from "react";
import Breadcumb from "../components/breadcumb";
import FilterInput from "../components/filter";
import Footer from "../components/footer";
import RecipeBox from "../components/recipe-box";
import { FoodList } from "../containers/Data";
function Recipe(props) {
  const [foodList, setFoodList] = useState(FoodList);

  function filter(keyFilter) {
    if (keyFilter) {
      if (keyFilter === "") {
        setFoodList(FoodList);
      } else {
        const newList = [...FoodList];
        const listFilter = newList.filter((item) =>
          item.name.includes(keyFilter)
        );

        setFoodList(listFilter);
      }
    }
  }
  return (
    <div>
      <Breadcumb breadcumb="Recipe" />
      <FilterInput filterFood={filter} />
      <RecipeBox data={foodList} />
      <Footer bgColor="black" colorText="white" />
    </div>
  );
}

export default Recipe;
