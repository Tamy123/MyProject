import React from "react";

const Search = props => {
  return (
    <React.Fragment>
      <input
        type="text"
        placeholder="Search here by ID"
        onChange={props.handleChange}
        className="custom-width"
        ref={props.setRef}
      />
      <button type="submit" onClick={props.submitSearch}>
        Search
      </button>
    </React.Fragment>
  );
};

export default Search;
