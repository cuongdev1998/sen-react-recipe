import React from "react";
import PropTypes from "prop-types";
import LogoFooter from "./logo-footer";
import Network from "./network";
import Copyright from "./copyright";
import "./Footer.scss";

Footer.propTypes = {
  bgColor: PropTypes.string,
  colorText: PropTypes.string,
};
Footer.defaultProps = {
  bgColor: "",
  colorText: "",
};

function Footer(props) {
  const { bgColor } = props;
  const bgFooter = bgColor ? { backgroundColor: bgColor } : {};
  const textFooter = props.colorText;
  return (
    <div className="footer" style={bgFooter}>
      <LogoFooter colorTxt={textFooter} />
      <Network />
      <Copyright />
    </div>
  );
}

export default Footer;
