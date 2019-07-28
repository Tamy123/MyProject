import React, { Component } from "react";

class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    const { id } = this.props.location.state;
    fetch(`http://localhost:3000/shipments/${id}`)
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        console.log(JSON.stringify(myJson));
        this.setState({ data: myJson });
      }).catch(() => {
        console.log("Unable to fetch record");
   });
  }
  render() {
    const data = this.state.data;
    return (
      <React.Fragment>
          <h3>Shipment's Detail Page</h3>
        <div className="row spacing">
          <div className="col-md-2"><b>ID:</b></div>
          <div className="col-md-10">{data.id}</div>
          <div className="col-md-2"><b>Name:</b></div>
          <div className="col-md-10">{data.name}</div>
          <div className="col-md-2"><b>Cargo:</b></div>
          <div className="col-md-10">
            {data.cargo && data.cargo.map(item => (
              <div>{item.type},{item.description},{item.volume}</div>
            ))}
          </div>
          <div className="col-md-2"><b>Mode:</b></div>
          <div className="col-md-10">{data.mode}</div>
          <div className="col-md-2"><b>Type:</b></div>
          <div className="col-md-10">{data.type}</div>
          <div className="col-md-2"><b>Destination:</b></div>
          <div className="col-md-10">{data.destination}</div>
          <div className="col-md-2"><b>Origin:</b></div>
          <div className="col-md-10">{data.origin}</div>
          <div className="col-md-2"><b>Services:</b></div>
          <div className="col-md-10">
            {data.services && data.services.map(item => (
                item.value ? <div>{item.type},{item.value}</div> :
              <div>{item.type}</div>
            ))}
          </div>
          <div className="col-md-2"><b>Total:</b></div>
          <div className="col-md-10">{data.total}</div>
          <div className="col-md-2"><b>Status:</b></div>
          <div className="col-md-10">{data.status}</div>
          <div className="col-md-2"><b>UserId:</b></div>
          <div className="col-md-10">{data.userId}</div>
        </div>
      
      </React.Fragment>
    );
  }
}

export default View;
