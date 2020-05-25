import React from "react";
import "./LogoFooter.scss";
import PropTypes from "prop-types";

LogoFooter.propTypes = {
  colorTxt: PropTypes.string,
};

LogoFooter.defaultProps = {
  colorTxt: "",
};

function LogoFooter(props) {
  const { colorTxt } = props;

  const colorLogo = colorTxt ? { color: colorTxt } : {};
  return (
    <a className="footer__logo" style={colorLogo}>
      <i className="fa fa-cutlery"></i>
      <p>
        SeN <br />
        <span> Discover recipe</span>
      </p>
    </a>
  );
}

export default LogoFooter;
