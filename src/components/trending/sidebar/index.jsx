import React from "react";
import About from "./About";
import Follow from "./Follow";
import Category from "./Category";
import LatestArticle from "./Recipe-article";
import "./Sidebar.scss";
function Sidebar(props) {
  return (
    <div className="sidebar">
      <About />
      <Follow />
      <LatestArticle />
      <Category />
    </div>
  );
}

export default Sidebar;
