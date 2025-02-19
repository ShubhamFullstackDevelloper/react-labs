import React from "react";
import "./Panel.css";
import Coincard from "./Coincard";
import One from "./coins/one-coin.png";
import Two from "./coins/two-coin .png"
import Ten from "./coins/ten-coin.png"
import  Twenty from "./coins/twenty-coin.png"
import Five from "./coins/five-coin.png"

export default class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coinOneCounter: 0,
      coinTwoCounter: 0,
      coinFiveCounter: 0,
      coinTenCounter: 0,
      coinTwentyCounter: 0,
    };
  }

  incrementCounter = (coin) => {
    if (coin === "One") {
      this.setState({ coinOneCounter: this.state.coinOneCounter + 1 });
    } else if (coin === "Two") {
      this.setState({ coinTwoCounter: this.state.coinTwoCounter + 1 });
    } else if (coin === "Five") {
      this.setState({ coinFiveCounter: this.state.coinFiveCounter + 1 });
    } else if (coin === "Ten") {
      this.setState({ coinTenCounter: this.state.coinTenCounter + 1 });
    } else {
      this.setState({ coinTwentyCounter: this.state.coinTwentyCounter + 1 });
    }
  };

  render() {
    return (
      <div className="Panel-box">
        <Coincard
          cointext="One"
          imagename={One}
          coinCounter={this.state.coinOneCounter}
          onCoinClick={this.props.onCoinClick}
          increment={this.incrementCounter}
        />
           <Coincard
          cointext="Two"
           imagename={Two}
          coinCounter={this.state.coinTwoCounter}
          onCoinClick={this.props.onCoinClick}
          increment={this.incrementCounter}
        />
         <Coincard
          cointext="Five"
           imagename={Five}
          coinCounter={this.state.coinFiveCounter}
          onCoinClick={this.props.onCoinClick}
          increment={this.incrementCounter}
        />
         <Coincard
          cointext="Ten"
           imagename={Ten}
          coinCounter={this.state.coinTenCounter}
          onCoinClick={this.props.onCoinClick}
          increment={this.incrementCounter}
        />
         <Coincard
          cointext="Twenty"
           imagename={Twenty}
          coinCounter={this.state.coinTwentyCounter}
          onCoinClick={this.props.onCoinClick}
          increment={this.incrementCounter}
        />
      </div>
    );
  }
}
