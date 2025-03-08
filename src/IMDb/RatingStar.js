import React from "react";
import "./RatingStar.css";

class RatingStar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
    };
  }

 handleRating=(rate)=>{
    this.setState({rating:rate})
}

  render() {
    return (
      <button className="rating-btn" >
        ⭐Rating{this.state.rating}
      </button>
    );
  }
}

export default RatingStar;
