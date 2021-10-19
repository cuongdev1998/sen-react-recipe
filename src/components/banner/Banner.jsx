import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Banner.scss";
export default class Banner extends React.Component {
  render() {
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="banner">
        <Slider {...settings}>
          <div>
            <img src="/images/p1.jpeg" alt="" />
            <div className="slide--items">
              <h4 className="items-category">salad</h4>
              <h5 className="items-name">Italian Salad Mixed</h5>
              <p className="items-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. sed
                quis sit blanditiis impedit quam?
              </p>
              <p className="items-detail">
                <a href="/">
                  <i className="fa fa-clock"></i> 15 Mins
                </a>
                <a href="/">
                  <i className="fa fa-user"></i> By Join Martin
                </a>
                <a href="/">
                  <i className="fa fa-heart"></i> 02 Likes
                </a>
              </p>
            </div>
          </div>
          <div>
            <img src="/images/p2.jpeg" alt="" />
            <div className="slide--items">
              <h4 className="items-category">salad</h4>
              <h5 className="items-name">Italian Salad Mixed</h5>
              <p className="items-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. sed
                quis sit blanditiis impedit quam?
              </p>
              <p className="items-detail">
                <a href="/">
                  <i className="fa fa-clock"></i> 15 Mins
                </a>
                <a href="/">
                  <i className="fa fa-user"></i> By Join Martin
                </a>
                <a href="/">
                  <i className="fa fa-heart"></i> 02 Likes
                </a>
              </p>
            </div>
          </div>
          <div>
            <img src="/images/p3.jpeg" alt="" />
            <div className="slide--items">
              <h4 className="items-category">salad</h4>
              <h5 className="items-name">Italian Salad Mixed</h5>
              <p className="items-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. sed
                quis sit blanditiis impedit quam?
              </p>
              <p className="items-detail">
                <a href="/">
                  <i className="fa fa-clock"></i> 15 Mins
                </a>
                <a href="/">
                  <i className="fa fa-user"></i> By Join Martin
                </a>
                <a href="/">
                  <i className="fa fa-heart"></i> 02 Likes
                </a>
              </p>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
