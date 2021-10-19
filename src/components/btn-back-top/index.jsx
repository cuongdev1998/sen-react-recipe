import React from "react";
import "./BackTop.scss";

import PropTypes from "prop-types";

BtnBackTop.propTypes = {
  backTop: PropTypes.func,
};
BtnBackTop.defaultProps = {
  backTop: null,
};
function BtnBackTop(props) {
  const { backTop } = props;
  function handleClick() {
    if (backTop) {
      backTop();
    }
  }
  return (
    <div className="btn-arrow-up" onClick={handleClick}>
      <i className="fa fa-arrow-up"></i>
    </div>
  );
}

export default BtnBackTop;
