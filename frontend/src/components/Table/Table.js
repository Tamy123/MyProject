import React from "react";
import sort from "./sort.png";
import { Link } from "react-router-dom";
import "./Table.css";

const Table = props => {
  return (
    <React.Fragment>
      <table>
        <tr>
          {props.headings.map((heading, index) => (
            <th key={index}>
              {heading}
              <img
                alt="sort"
                src={sort}
                height="10px"
                onClick={() => props.onSort(heading)}
              />
            </th>
          ))}
          <th>Actions</th>
        </tr>
        {props.data.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.mode}</td>
            <td>{item.type}</td>
            <td>{item.destination}</td>
            <td>{item.origin}</td>
            <td>{item.total}</td>
            <td>{item.status}</td>
            <td>{item.userId}</td>
            <td>
              <Link
                className="mr-2"
                to={{
                  pathname: "/view",
                  state: {
                    id: item.id
                  }
                }}
              >
                View
              </Link>
              <Link
                to={{
                  pathname: "/edit",
                  state: {
                    record: item,
                    id: item.id
                  }
                }}
              >
                Edit
              </Link>
            </td>
          </tr>
        ))}
      </table>
      {props.data.length === 1 ? (
        <Link to="/" onClick={props.resetSearch}>
          Return to results
        </Link>
      ) : null}
    </React.Fragment>
  );
};

export default Table;
