import React, { Component } from "react";
import OrderDataService from "../services/order.service";

export default class Order extends Component {
  constructor(props) {
    super(props);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onChangeClosedTimestamp = this.onChangeClosedTimestamp.bind(this);
    this.getOrder = this.getOrder.bind(this);
    this.updateOrder = this.updateOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);

    this.state = {
      currentOrder: {
        id: null,
        orderId: "",
        userId: "",
        marketId: "",
        price: "",
        quantity: "",
        transactionTs: "",
        status: "",
        closedTs: "",
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getOrder(this.props.match.params.id);
  }

  onChangeStatus(e) {
    const status = e.target.value;

    this.setState(function(prevState) {
      return {
        currentOrder: {
          ...prevState.currentOrder,
          status: status
        }
      };
    });
  }

  onChangeClosedTimestamp(e) {
    const closedTs = e.target.value;
    
    this.setState(prevState => ({
      currentOrder: {
        ...prevState.currentOrder,
        closedTs: closedTs
      }
    }));
  }

  getOrder(id) {
    OrderDataService.get(id)
      .then(response => {
        this.setState({
          currentOrder: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateOrder() {
    OrderDataService.update(
      this.state.currentOrder.id,
      this.state.currentOrder
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The order was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteOrder() {    
    OrderDataService.delete(this.state.currentOrder.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/orders')
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentOrder } = this.state;

    return (
      <div>
        {currentOrder ? (
          <div className="edit-form">
            <h4>Order</h4>
            <form>
              <div className="form-group">
                <label htmlFor="title">Order Status</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentOrder.status}
                  onChange={this.onChangeStatus}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Closed Timestamp</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentOrder.closedTs}
                  onChange={this.onChangeDescription}
                />
              </div>
            </form>

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteOrder}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateOrder}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on an Order...</p>
          </div>
        )}
      </div>
    );
  }
}
