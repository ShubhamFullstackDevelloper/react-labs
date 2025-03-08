



import React, { Component } from "react";

import Header from "../Amazon/Header";
import Panel from "../Amazon/Panel";
import products from "../Amazon/data"; 
import "./HomePageAmazon.css"

 class HomePageAmazon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: products,
      cartArray: [],
      counter : 0
    };
  }



  addToCart = (data) => {
    this.setState({ cartArray: [...this.state.cartArray, data] });
  };

  render() {
    return (
      <div className="App">
        <Header cartCount={this.state.cartArray.length} />
        <Panel data={this.state.products} addToCart={this.addToCart} />
      </div>
    );
  }
}
export default HomePageAmazon;