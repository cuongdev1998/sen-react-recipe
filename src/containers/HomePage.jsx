import React from "react";
import Banner from "../components/banner/Banner";
import List from "../components/main/List";
import "./HomePage.scss";
import Trending from "../components/trending";
import ListImage from "../components/list-img";
import Footer from "../components/footer";

HomePage.propTypes = {};

function HomePage(props) {
  return (
    <div className="homepage">
      <Banner />
      <List />
      <Trending />
      <ListImage />
      <Footer />
    </div>
  );
}

export default HomePage;
