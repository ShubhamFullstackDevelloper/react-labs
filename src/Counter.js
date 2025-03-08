
import React, { Component } from "react";
import "./Counter.css";

class Counter extends React.Component{

    constructor(){
        super()
        this.state={ numberOfclick: 0}
    }
    counter =()=>{
        this.state({
            numberOfclick :this.state.numberOfclick+1
        })
    }


    render(){
        return(
            <div className="counter" >
                <button onClick={this.props.counter} style={this.props.styleColor}>{this.props.buttonName}</button>
            </div>
        )
    }

}
export default Counter;