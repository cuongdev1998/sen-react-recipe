import React, { useEffect } from "react";
import "./App.scss";
import HomePage from "./containers/HomePage";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Category from "./containers/Category";
import Recipe from "./containers/Recipe";

import Header from "./components/header/Header";

import SearchForm from "./components/search-form";
import BtnBackTop from "./components/btn-back-top";
function App() {
  useEffect(() => {
    const btnTop = document.querySelector(".btn-arrow-up");
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 30 ||
        document.documentElement.scrollTop > 30
      ) {
        btnTop.style.display = "flex";
        btnTop.style.animation = "buttonUp .5s ease forwards";
      } else {
        btnTop.style.display = "none";
      }
    });
  });
  function backToTop() {
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Header />
        <BtnBackTop backTop={backToTop} />
        <SearchForm />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/category" component={Category} />
          <Route path="/recipe" component={Recipe} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
