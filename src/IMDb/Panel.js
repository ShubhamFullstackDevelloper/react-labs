

import React from "react";
import "./Panel.css"; // Ensure this file contains the necessary styles
import RatingStar from "./RatingStar";
import { Rating } from 'react-simple-star-rating'

export default class Panel extends React.Component {
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
      <div className="panel-container">
        <h2 style={{textAlign:"center"}}>Movie List</h2>
        {this.props.movieArray.length === 0 ? (
          <p>No movies added yet.</p>
        ) : (
          <ul className="movie-list">
            {this.props.movieArray.map((movie, index) => (
              <li key={index} className="movie-item">
                <div className="movie-details">

                  <img className="movie-poster"
                   alt={movie.movieName}
                    src={movie.moviePoster}
                   
                 
                  />
                  <div className="movie-info">
                    <strong>{movie.movieName}</strong> 
                    <br />
                    <strong>{movie.Duration} min</strong>
                    <br />
                    Directed by <strong>{movie.movieDirector}</strong>
                    {this.state.rating}
                    <RatingStar />
                  </div>
                  <div className="rating-star">

               
                  <Rating onClick={this.handleRating}   />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

