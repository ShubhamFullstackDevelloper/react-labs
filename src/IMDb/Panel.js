import React from "react";
import "./Panel.css"; 

export default class Panel extends React.Component {
  render() {
    return (
      <div className="panel-container">
        <h2 >Movie List</h2>
        {/* <button onClick={this.props.openForm}>Add Movie</button> */}

        {this.props.movieArray.length === 0 ? (
          <p>No movies added yet.</p>
        ) : (
          <ul className="movie-list">
            {this.props.movieArray.map((movie, index) => (
              <li key={index} className="movie-item">
                <img src={movie.moviePoster} alt={movie.movieName} className="movie-poster" />
                <div className="movie-info">
                  <strong>{movie.movieName}</strong> - {movie.Duration} min
                  <br />
           
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
