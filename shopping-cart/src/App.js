import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles.css";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ItemData } from "./product";
import Nav from "./navbar";
import Cart from "./Cart";
import Shopping from "./displayProducts";
import Signin from "./signin";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortType: "",
      listNum: "",
      itemLists: ItemData
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSub = this.handleSub.bind(this);
  }

  handleAdd = (props) => {
    this.setState({ value: (props.value += 1) });
  };

  handleSub = (props) => {
    if (props.value < 1) {
      this.setState({ value: 0 });
    } else {
      this.setState({ value: (props.value -= 1) });
    }
  };

  onSort = (listNum, sortType) => {
    listNum.sort((a,b) => {
      if (sortType === "lowest") {
      return a.price-b.price
    } else if (sortType === "highest") {
      return b.price-a.price
    } 
    })
    this.setState({ sortType });
  }

  render() {
    return (
      <div>
        <div className="App text-secondary">
          <Router>
            <Nav finalitems={this.state.itemLists.itemList} />
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <Shopping
                    shoppinglists={this.state.itemLists.itemList}
                    updateAdd={this.handleAdd}
                    updateSub={this.handleSub}
                    sortType={this.state.sortType}
                    listNum={this.state.listNum}
                    onSort={this.onSort}
                  />
                }
              />
              <Route
                path="/cart"
                element={<Cart finalitems={this.state.itemLists.itemList} />}
              />
            <Route
                path="/signin"
                element={<Signin finalitems={this.state.itemLists.itemList} />}
              />
            </Routes>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
