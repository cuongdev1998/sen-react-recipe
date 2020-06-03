import React, { useState, useEffect } from "react";
import "./Cart.scss";
import { useSelector, useDispatch } from "react-redux";
import { removeCart } from "../../../../actions/cart";
function Cart(props) {
  const listCart = useSelector((state) => state.cart.list);
  const dispatch = useDispatch();
  useEffect(() => {
    const bagIcon = document.querySelector(".fa-shopping-bag");
    const cart = document.querySelector(".cart");

    bagIcon.addEventListener("click", () => {
      cart.classList.toggle("cart-appear");
    });
  }, []);
  function handleRemove(id) {
    dispatch(removeCart(id));
  }

  return (
    <div className="cart">
      <div className="cart__list">
        {listCart.map((item) => (
          <div className="cart__item" key={item.id}>
            <div className="cart__item--image">
              <img src={item.srcImg} alt="" />
            </div>

            <div className="cart__item--name">
              <p>{item.name}</p>
              <p className="sku">Code: {item.code}</p>
            </div>
            <div className="cart__item--qty">x{item.qty} </div>
            {/* <div className="cart__item--price">
              ${item.price * item.qty}{" "}
            </div> */}
            <i
              className="fa fa-trash"
              onClick={() => handleRemove(item.id)}
            ></i>
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
  );
}

export default Cart;
