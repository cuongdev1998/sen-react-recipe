import React from "react";
import "./style.scss";
import { useState } from "react";
function SearchForm(props) {
  const [values, setValues] = useState("");
  function handleClose() {
    document
      .querySelector(".search-form")
      .classList.remove("search-form-appear");
  }

  function handleValue(e) {
    setValues(e.target.value);
  }
  return (
    <div className="search-form">
      <button className="close-btn" onClick={handleClose}>
        <i className="fa fa-times"></i>
      </button>
      <div className="input-search">
        <input type="text" value={values} onChange={handleValue} />
        <button className="submit-search">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
}

export default SearchForm;
