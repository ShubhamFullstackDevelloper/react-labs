
import React from "react";
// import logo from "../amazon-cart-project/Assets/cart.webp";
// import amazon from "../amazon-cart-project/Assets/amazonlogo-removebg-preview.png"
import "./Amazon.css";

export default class AmazonPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            //     alert: false,
            // };
            cart: []
        }
    }
    CounterIncre = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    };
    render() {
       
        const products = [
            { name: "CPU Processor Chip", price: "₹3000", image: "https://i.ebayimg.com/images/g/gzYAAOSwdwlcZEPJ/s-l1200.jpg" },
            { name: "CPU Cooling Fan ", price: "₹3,500", image: "https://www.dealsplant.com/cdn/shop/products/dealsplant-laptops-computer-peripherals-cpu-cooler-fan-11297272135755.jpg?v=1647759721" },
            { name: "MotherBoard", price: "₹11,400", image: "https://4.imimg.com/data4/YX/RP/MY-2297750/cpu-motherboard-500x500.jpg" },
            { name: "Graphic Card", price: "₹25,000", image: "https://serverbazar.in/wp-content/uploads/2022/04/nvidia-t1000-graphic-cards.jpg" },
            { name: "Memory", price: "₹4,559", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqqCUh3FDgflP6WF4WguAUx8HzkdtfcFhk-r9X8go44Q9KQ0F7w6_Nj2HXUYIGIgp588M&usqp=CAU" },
            { name: "SSD", price: "₹7,089", image: "https://m.media-amazon.com/images/I/5169n4UNj5L.jpg" },
            { name: "Power Supply", price: "₹5,375", image: "https://m.media-amazon.com/images/I/718NtyDebGL.jpg" },
            { name: "Cabinet", price: "₹11,500", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh11P_N2s3ondRKVoGgT0E8CE15NB8sQf9GA&s" },
            { name: "Monitor ", price: "₹37,599", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVa6jyqViL7TDPRwA0j2mDeTnKdXI5o3jTAA&s" },
            { name: "Router", price: "₹2,000", image: "https://m.media-amazon.com/images/I/51DUq04ZEeL.jpg" },
            { name: "Printer", price: "₹19,499", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRI--LnLp5WYIGxnlempUyEVmu6TH6QaYDe17nkVGU1PWfbYJMdXAjEQr5OQSQXLbrvbo9O_PdUlk3la5-oW31KKABf0c_YXjxnY0e0nCMxzoRnjrXpMU2i" },
            { name: "Keyboard", price: "₹2,500", image: " https://www.ezpzsolutions.in/wp-content/uploads/2021/02/RZ03-03390100-R3M1-1-300x300.jpg" },
            { name: "Mouse", price: "₹4,639", image: "https://www.ezpzsolutions.in/wp-content/uploads/2020/08/hx_mc002b_1-300x300.jpg" },
            { name: "Ports", price: "₹1,149", image: "https://m.media-amazon.com/images/I/61Q+pBh+4sL._AC._SR360,460.jpg" },
            { name: "HeadPhone", price: "₹4,500", image: "https://www.ezpzsolutions.in/wp-content/uploads/2021/11/Razer-Kraken-for-Console-1-300x300.jpg" },
        ];
        return (
            <div className="main-container">
                {/* {/ Header /} */}
                <div className="cart-container">
                    <img src="https://www.pngmart.com/files/23/Amazon-Logo-White-PNG-Image.png" style={{ height: "50px", width: "180px" }}></img>
                    <div className="search-container">
                        <button className="button">Search</button>
                    </div>
                    <img src={"http://localhost:7001/amazon-cart.pnghttps://w7.pngwing.com/pngs/87/706/png-transparent-shopping-cart-online-shopping-logo-shopping-cart-angle-service-retail.png"} className="cart-logo" style={{ height: "60px", width: "100px", marginBottom: "10px" }} /> <text style={{ color: "white" }}> {this.state.counter}</text>
                </div>



                {/* {/ Product Section /} */}
                <h1 className="heading">CPU Parts</h1>
                <div className="product-container">
                    {products.map((product, index) => (
                        <div key={index} className="product-box">
                            <img src={product.image} alt={product.name} className="product-image" />
                            <h3>{product.name}</h3>
                            <p className="product-price">{product.price}</p>
                            <button className="add-to-cart" onClick={() => this.CounterIncre()}> Add to Cart</button>


                            {/* <button className="Button" onClick={() => this.CounterIncre()} style={this.props.styleColor}> {this.props.buttonName} 
                    <text> {this.state.counter}</text>
                 </button> */}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}


