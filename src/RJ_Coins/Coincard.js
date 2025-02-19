import React from "react";
import "./Coincard.css";  

export default class  Coincard extends React.Component {
    render() {  
        return (
            <div className="coin-card" 
              onClick={()=>{
                this.props.onCoinClick(this.props.cointext)
                this.props.increment(this.props.cointext)
            }} >
            <h1 className="heading"   >{this.props.cointext}</h1>
            <img className="coin-img" src={this.props.imagename}/>
            <h1> Count: {this.props.coinCounter}</h1>
        
                       
                    
            </div>
        );
    }
}
