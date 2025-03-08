import React from "react";
import "./Panel.css";
import Cards from "./Card";
import data from "../Amazon/data"

class Panel extends React.Component {
  render() {
    return (
      <div className="main-container">
        <Cards products={this.props.data} addToCart={this.props.addToCart} />
        
        
      </div>
    );
  }
}

export default Panel;
