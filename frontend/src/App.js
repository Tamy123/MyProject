import React, { Component } from "react";
import "./App.css";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import Table from "./components/Table/Table";
import { Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      headings: [
        "id",
        "name",
        "mode",
        "type",
        "destination",
        "origin",
        "total",
        "status",
        "userId"
      ],
      currentPage: 1,
      totalPages: 1,
      input: "",
      sortHeading: "",
      order: ""
    };
    this.ref = React.createRef();
    this.LIMIT = 20;
    this.baseURL = "http://localhost:3000/shipments";
  }

  service = url => {
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({ data: json });
      })
      .catch(() => {
        console.log("Error");
      });
  };

  callAllData = () => {
    this.service(`${this.baseURL}`);
    setTimeout(() => {
      this.service(
        `${this.baseURL}?_page=${this.state.currentPage}&_limit=${this.LIMIT}`
      );
      this.setState({
        totalPages: Math.ceil(this.state.data.length / this.LIMIT)
      });
    }, 1000);
  };

  componentDidMount() {
    this.callAllData();
  }

  resetSearch = () => {
    this.ref.current.value = "";
    this.setState({ input: "" });
    this.callAllData();
  };

  handlePagination = e => {
    e.preventDefault();
    this.service(
      `${this.baseURL}?_page=${Number(e.target.innerText)}&_limit=${this.LIMIT}`
    );
    this.setState({ currentPage: e.target.innerText });
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ input: this.ref.current.value });
  };

  submitSearch = () => {
    this.setState({ showResults: false });
    let id = this.state.input;
    if (id != "") {
      this.service(`${this.baseURL}?id=${id}`);
    }
  };

  onSort = item => {
    if (item == this.state.sortHeading) {
      this.setState(
        { order: this.state.order == "desc" ? "asc" : "desc" },
        () => {
          this.service(
            `${this.baseURL}?_sort=${item}&_order=${this.state.order}&_limit=${
              this.LIMIT
            }`
          );
        }
      );
    } else {
      this.setState({ sortHeading: item, order: "desc" }, () => {
        this.service(
          `${this.baseURL}?_sort=${item}&_order=${this.state.order}&_limit=${
            this.LIMIT
          }`
        );
      });
    }
  };

  render() {
    let mapper = new Array(this.state.totalPages).fill(null);

    return (
      <React.Fragment>
        <div className="col-md-12 col-lg-12 mb10">
          <Search
            setRef={this.ref}
            handleChange={this.handleChange}
            submitSearch={this.submitSearch}
          />
        </div>

        {this.state.data.length ? (
          <div className="center">
            <Table
              headings={this.state.headings}
              onSort={this.onSort}
              data={this.state.data}
              resetSearch={this.resetSearch}
            />
          </div>
        ) : (
          <div className="center">
            <h3>Sorry, No results</h3>
            <Link to="/" onClick={this.resetSearch}>
              Return to results
            </Link>
          </div>
        )}

        {this.state.data.length != 0 && this.state.data.length != 1 ? (
          <div className="pagination">
            <Pagination
              mapper={mapper}
              handlePagination={this.handlePagination}
              currentPage={this.state.currentPage}
            />
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}

export default App;
