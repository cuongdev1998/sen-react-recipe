import React from "react";
import "./Follow.scss";
function Follow(props) {
  return (
    <div className="sidebar__follow">
      <h3>Subscibe & follow</h3>
      <div className="sidebar__follow--network">
        <button>
          <i className="fa fa-facebook-f"> </i>like me on
        </button>
        <button>
          <i className="fa fa-twitter"></i>like me
        </button>
        <button>
          <i className="fa fa-instagram"></i>follow me
        </button>
        <button>
          <i className="fa fa-pinterest"></i>like me
        </button>
        <button>
          <i className="fa fa-youtube"></i>subscribe
        </button>
        <button>
          <i className="fa fa-snapchat"></i>like me
        </button>
      </div>
    </div>
  );
}

export default Follow;
