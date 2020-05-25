import React from "react";
import "./Network.scss";
function Network(props) {
  return (
    <ul className="footer__network">
      <li className="footer__network--item">
        <a href="https://facebook.com">Facebook</a>
      </li>
      <li className="footer__network--item">
        <a href="https://twitter.com">Twitter</a>
      </li>
      <li className="footer__network--item">
        <a href="https://instagram.com">instagram</a>
      </li>
      <li className="footer__network--item">
        <a href="https://plus.google.com">google+</a>
      </li>
      <li className="footer__network--item">
        <a href="https://youtube.com">youtube</a>
      </li>
      <li className="footer__network--item">
        <a href="https://pinterest.com">pinterest</a>
      </li>
    </ul>
  );
}

export default Network;
