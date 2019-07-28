import React from "react";
import "./Pagination.css"

const Pagination = props => {
  return (
    <React.Fragment>
      {props.mapper.map((item, i) => {
        return (
          <a
            key={i}
            href="#"
            onClick={props.handlePagination}
            className={i + 1 === Number(props.currentPage) ? "active" : ""}
          >
            {i + 1}
          </a>
        );
      })}
    </React.Fragment>
  );
};

export default Pagination;
