import React from "react";
import "./Breadcumb.scss";
function Breadcumb(props) {
  return (
    <div className="breadcumb">
      <h3>Recipe Categories</h3>
      <p>
        <a href="index.html">{props.breadcumb}</a>{" "}
        <i className="fa fa-arrow-right"> </i> <span>Categories</span>
      </p>
    </div>
  );
}

export default Breadcumb;
