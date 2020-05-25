import React, { useState } from "react";
import "./Cart.scss";
function Cart(props) {
  const [infoCart, setInfoCart] = useState([
    {
      id: 1,
      name: "Bread",
      srcImg: "/images/breakfast.jpeg",
      code: "SK888",
      quantity: 2,
      price: 34,
    },

    {
      id: 2,
      name: "Juice Tomato",
      srcImg: "/images/juice.jpeg",
      code: "SK444",
      quantity: 1,
      price: 34,
    },
    {
      id: 3,
      name: "Pizza",
      srcImg: "/images/desert.jpeg",
      code: "SK222",
      quantity: 3,
      price: 56,
    },
  ]);
  function handleRemove(item) {
    const index = infoCart.findIndex((x) => x.id === item.id);
    if (index < 0) return;

    const newInfo = [...infoCart];

    newInfo.splice(index, 1);
    setInfoCart(newInfo);
  }

  function closeCart() {
    const cart = document.querySelector(".cart");
    cart.style.transform =
      "perspective(1000px) rotateX(-30deg) rotateY(0deg) rotateZ(0)";
    cart.style.opacity = "0";
  }
  return (
    <div className="header__cart">
      <div className="cart" onMouseLeave={closeCart}>
        <div className="cart__list">
          {infoCart.map((item) => (
            <div className="cart__item" key={item.id}>
              <div className="cart__item--image">
                <img src={item.srcImg} alt="" />
              </div>

              <div className="cart__item--name">
                <p>{item.name}</p>
                <p className="sku">Code: {item.code}</p>
              </div>
              <div className="cart__item--qty">x{item.quantity} </div>
              <div className="cart__item--price">
                ${item.price * item.quantity}{" "}
              </div>
              <i className="fa fa-trash" onClick={() => handleRemove(item)}></i>
            </div>
          ))}
        </div>
        <div className="cart__control">
          <div className="cart__control--button">
            <button className="button--view">View cart</button>
            <button className="button--checkout">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
