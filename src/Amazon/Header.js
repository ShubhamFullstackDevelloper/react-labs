import React from "react";

import "./Header.css";
import Cart from "./Cart"

 class Header extends React.Component {
  render() {
    return (
      <header className="Header">
      <img src="https://www.pngmart.com/files/23/Amazon-Logo-White-PNG-Image.png" style={{ height: "50px", width: "180px", marginLeft:"10px"}}></img>
      <div className="search-container">
                        <button className="search-btn">Search</button>
                    </div>
      <div>
      <Cart/>
      </div>
     
      {/* <Cart/> */}
                    {/* <div className="search-container">
                        <button type="text">Search</button>
                    </div> */}
        {/* <p> Cart: {this.props.cartCount} items</p> */}
        <p style={{color: "white"}}> {this.props.cartCount}</p>

      </header>
    );
  }
}
export default Header;