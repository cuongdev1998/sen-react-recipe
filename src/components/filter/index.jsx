import React, { useState } from "react";
import "./Filter.scss";
import PropTypes from "prop-types";

FilterInput.propTypes = {
  filterFood: PropTypes.func,
};

FilterInput.defaultProps = {
  filterFood: null,
};
function FilterInput(props) {
  const [values, setValues] = useState("");
  const { filterFood } = props;
  function handleValue(e) {
    setValues(e.target.value);
  }

  function handleFilter(keyFilter) {
    if (keyFilter === "") {
      keyFilter = " ";
    }

    if (filterFood) {
      filterFood(keyFilter);
    }
  }

  return (
    <div className="filter">
      <input
        type="text"
        value={values}
        onChange={handleValue}
        placeholder="Recipe Search..."
      />
      <button
        onClick={() => {
          handleFilter(values);
        }}
      >
        <i className="fa fa-search"></i>
      </button>
    </div>
  );
}

export default FilterInput;
