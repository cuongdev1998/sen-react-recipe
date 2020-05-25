import React from "react";
import Breadcumb from "../components/breadcumb";
import CategoriesBox from "../components/categories-box";
import Footer from "../components/footer";

// Category.propTypes = {};

function Category(props) {
  return (
    <div>
      <Breadcumb breadcumb="Categories" />
      <CategoriesBox />
      <Footer bgColor="black" colorText="white" />
    </div>
  );
}

export default Category;
