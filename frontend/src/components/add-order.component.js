import React, { Component } from "react";
import OrderDataService from "../services/order.service";

export default class AddOrder extends Component {
  constructor(props) {
    super(props);
    this.onChangeOrderId = this.onChangeOrderId.bind(this);
    this.onChangeUserId = this.onChangeUserId.bind(this);
    this.onChangeMarketId = this.onChangeMarketId.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeQuantity = this.onChangeQuantity.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onChangeClosedTimestamp = this.onChangeClosedTimestamp.bind(this);
    this.saveOrder = this.saveOrder.bind(this);
    this.newOrder = this.newOrder.bind(this);

    this.state = {
      id: null,
      orderId: "",
      userId: "",
      marketId: "",
      price: "",
      quantity: "",
      transactionTs: "",
      status: "",
      closedTs: "",
      submitted: false
    };
  }

  onChangeOrderId(e) {
    this.setState({
      orderId: e.target.value
    });
  }

  onChangeUserId(e) {
    this.setState({
      userId: e.target.value
    });
  }

  onChangeMarketId(e) {
    this.setState({
      marketId: e.target.value
    });
  }

  onChangePrice(e) {
    this.setState(
      { price: e.target.value }
    )
  }

  onChangeQuantity(e) {
    this.setState(
      { quantity: e.target.value }
    )
  }

  onChangeStatus(e) {
    this.setState({
      status: e.target.value
    });
  }

  onChangeClosedTimestamp(e) {
    this.setState({
      closedTs: e.target.value
    });
  }

  saveOrder() {
    var data = {
      orderId: this.state.orderId,
      userId: this.state.userId,
      marketId: this.state.marketId,
      price: this.state.price,
      quantity: this.state.quantity,
      status: this.state.status,
      // closedTs: this.state.closedTs
    };

    OrderDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          orderId: response.data.orderID,
          userId: response.data.userId,
          marketId: response.data.marketId,
          price: response.data.price,
          quantity: response.data.quantity,
          transactionTs: response.data.transactionTs,
          status: response.data.status,
          closedTs: response.data.closedTs,
          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newOrder() {
    this.setState({
      id: null,
      orderId: "",
      userId: "",
      marketId: "",
      price: "",
      quantity: "",
      transactionTs: "",
      status: "",
      closedTs: "",
      submitted: false,
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newOrder}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="orderId">Order Id</label>
              <input
                type="text"
                className="form-control"
                id="orderId"
                required
                value={this.state.orderId}
                onChange={this.onChangeOrderId}
                name="orderId"
              />
            </div>

            <div className="form-group">
              <label htmlFor="userId">User Id</label>
              <input
                type="text"
                className="form-control"
                id="userId"
                required
                value={this.state.userId}
                onChange={this.onChangeUserId}
                name="userId"
              />
            </div>

            <div className="form-group">
              <label htmlFor="marketId">Market Id</label>
              <input
                type="text"
                className="form-control"
                id="marketId"
                required
                value={this.state.marketId}
                onChange={this.onChangeMarketId}
                name="marketId"
              />
            </div>

            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input
                type="text"
                className="form-control"
                id="price"
                required
                value={this.state.price}
                onChange={this.onChangePrice}
                name="price"
              />
            </div>

            <div className="form-group">
              <label htmlFor="quantity">Quantity</label>
              <input
                type="text"
                className="form-control"
                id="quantity"
                required
                value={this.state.quantity}
                onChange={this.onChangeQuantity}
                name="userId"
              />
            </div>

            <div className="form-group">
              <label htmlFor="status">Order Status</label>
              <input
                type="text"
                className="form-control"
                id="status"
                required
                value={this.state.status}
                onChange={this.onChangeStatus}
                name="status"
              />
            </div>

            <button onClick={this.saveOrder} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
