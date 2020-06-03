import React from "react";
import PropTypes from "prop-types";
import "./AddCart.scss";
import { useDispatch } from "react-redux";
import { addCart } from "../../actions/cart";
AddCartButton.propTypes = {
  data: PropTypes.object,
};

AddCartButton.defaultProps = {
  data: null,
};

function AddCartButton(props) {
  const { data } = props;
  const dispatch = useDispatch();
  function handleCart(item) {
    dispatch(addCart(item));
  }
  return (
    <button onClick={() => handleCart(data)} className="btn-addToCart">
      Add to cart
    </button>
  );
}

export default AddCartButton;
