import React from "react";
import "./Article.scss";
import Items from "./items";
function Article(props) {
  return (
    <div className="article">
      <div className="article__main">
        <h3>trending recipe</h3>
        <img
          className="article__main--img"
          src="/images/breakfast.jpeg"
          alt=""
        />
        <h4 className="article__main--category">Pasta</h4>
        <h5 className="article__main--name">
          Chanterelle and Porcini Mushroom Recipes
        </h5>
        <p className="article__main--description">
          More off this less hello salamander lied porpoise much over tightly
          circa horse taped so innocuously side crud mightily rigorous plot
          life. New homes in particular are subject.
        </p>
        <p className="article__main--detail">
          <a href="/">
            <i className="fa fa-clock"></i> 15 mins
          </a>
          <a href="/">
            <i className="fa fa-user">by John</i>
          </a>
          <a href="/">
            <i className="fa fa-heart"></i> 02 Likes
          </a>
        </p>
      </div>

      <Items />
    </div>
  );
}

export default Article;
