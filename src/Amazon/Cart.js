import React from "react";
// import "./Cart.css";
class Cart extends React.Component{
 
    render(){
        return(
            <div className="cart-img">
               <p> 
                <img src="amazon-cart.png"   /> 
               {/* {this.props.addToCart} */}
              
                 </p> 
                 
            </div>
        )
    }
}
export default Cart;

