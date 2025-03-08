import React, { useState } from "react";
import "./AmazonF.css"
const AmazonF = () => {
    const [counter, setCounter] = useState(0);

    const count = () => {
      setCounter(counter + 1);
    };
    const products = [{
        id: "1",
        name: "CPU Processor Chip",
        price: "₹3000",
        image: "https://i.ebayimg.com/images/g/gzYAAOSwdwlcZEPJ/s-l1200.jpg"
    },
    {
        id: 2,
        name: "Gaming CPU for Desktop Computer",
        price: "₹16,499.",
        image: "https://m.media-amazon.com/images/I/61YwE2kAtEL._SX679_.jpg",
    },
    {
        id: 3,
        name: "I5 6TH GEN 6500 Processor",
        price: "₹3,450.",
        image: "https://m.media-amazon.com/images/I/51Ljw8Sv7pL._SY450_.jpg",
    },
    {
        id: 4,
        name: "i7 3rd Gen i7-3770 Processor",
        price: "₹3,600.",
        image: "https://m.media-amazon.com/images/I/41aBeU-0XHL._SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
        id: 5,
        name: "AMD 5000 Series Ryzen 5 5500 Desktop Processor",
        price: "₹7,499.",
        image: "https://m.media-amazon.com/images/I/31EzTuimorL._SY300_SX300_QL70_FMwebp_.jpg",
    },
    {
        id: 6,
        name: "Gaming CPU for Desktop Computer",
        price: "₹16,499.",
        image: "https://m.media-amazon.com/images/I/61YwE2kAtEL._SX679_.jpg",
    },
    {
        id: 7,
        name: "I5 6TH GEN 6500 Processor",
        price: "₹3,450.",
        image: "https://m.media-amazon.com/images/I/51Ljw8Sv7pL._SY450_.jpg",
    },
    {
        id: 8,
        name: "i7 3rd Gen i7-3770 Processor",
        price: "₹3,600.",
        image: "https://m.media-amazon.com/images/I/41aBeU-0XHL._SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
        id: 9,
        name: "AMD 5000 Series Ryzen 5 5500 Desktop Processor",
        price: "₹7,499.",
        image: "https://m.media-amazon.com/images/I/31EzTuimorL._SY300_SX300_QL70_FMwebp_.jpg",
    },
    {
        id: 10,
        name: "i7 3rd Gen i7-3770 Processor",
        price: "₹3,600.",
        image: "https://m.media-amazon.com/images/I/41aBeU-0XHL._SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
        id: 11,
        name: "AMD 5000 Series Ryzen 5 5500 Desktop Processor",
        price: "₹7,499.",
        image: "https://m.media-amazon.com/images/I/31EzTuimorL._SY300_SX300_QL70_FMwebp_.jpg",
    },
    {
        id: 12,
        name: "i7 3rd Gen i7-3770 Processor",
        price: "₹3,600.",
        image: "https://m.media-amazon.com/images/I/41aBeU-0XHL._SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
        id: 13,
        name: "AMD 5000 Series Ryzen 5 5500 Desktop Processor",
        price: "₹7,499.",
        image: "https://m.media-amazon.com/images/I/31EzTuimorL._SY300_SX300_QL70_FMwebp_.jpg",
    },
    {
        id: 14,
        name: "i7 3rd Gen i7-3770 Processor",
        price: "₹3,600.",
        image: "https://m.media-amazon.com/images/I/41aBeU-0XHL._SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
        id: 15,
        name: "AMD 5000 Series Ryzen 5 5500 Desktop Processor",
        price: "₹7,499.",
        image: "https://m.media-amazon.com/images/I/31EzTuimorL._SY300_SX300_QL70_FMwebp_.jpg",
    },
    ]
    return (
        <div className="main-container">

            {/* header start */}
            <div className="cart-container">
                <img src="https://www.pngmart.com/files/23/Amazon-Logo-White-PNG-Image.png" style={{ height: "50px", width: "180px", marginTop: "15px", marginLeft: "10px" }}></img>
                <div className="search-container">
                    <button className="text">Search</button>
                </div>
                <img src={"amazon-cart.png"} className="cart-logo" style={{ height: "60px", width: "100px", marginLeft: "20%"}}/>   <span style={{ color: "white", fontSize: "20px",marginRight:"19px"}}>{counter}</span>

            </div>
            {/* header end */}

            {/* product section start  */}
            <h1 className="heading">CPU Parts</h1>
            <div className="product-container">
                {products.map((product, index) => (
                    <div key={index} className="product-box">
                        <img src={product.image} className="product-image" />
                        <h3>{product.name}</h3>
                        <p className="product-price">{product.price}</p>
                        <button className="add-to-cart" onClick={count}>Add to cart</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default AmazonF;
