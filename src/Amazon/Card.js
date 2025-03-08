import React from "react";
import "./Card.css";

export default class Card extends React.Component {
  render() {
    return (
      // product-container
      <div className="product-container">
        {this.props.products.map((product, index) => (
          <div key={index} className="product-box">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p className="product-price">{product.price}</p>
            {/* <button className="add-to-cart" onClick={() => this.props.addToCart(product)}> */}
            <button className="add-to-cart" style={{color:"white"}} onClick={() => this.props.addToCart(product)}>
              Add to Cart
            </button>

          </div>
        ))}
      </div>
    );
  }
}

