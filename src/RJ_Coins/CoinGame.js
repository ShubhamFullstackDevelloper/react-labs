import React from "react";
import "./CoinGame";
import Panel from "./Panel";

export default class CoinGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0,
        };
    }
    onCoinClick=(coin)=>{
        if(coin=="One"){
            this.setState({total:(this.state.total+=1)})
        }else if(coin=="Two"){
            this.setState({total:(this.state.total+=2)})
        }else if(coin=="Five"){
            this.setState({total:(this.state.total+=5)})
        }else if(coin=="Ten"){
            this.setState({total:(this.state.total+=10)})
        }else if(coin=="Twenty"){
            this.setState({total:(this.state.total+=20)})
        }


    }

    render() {  
        return (
            <div className="main-box">
                <h1 className="inner-box">{this.state.total}</h1>
               
               <Panel onCoinClick={this.onCoinClick}/>
               
            </div>
        );
    }
}
