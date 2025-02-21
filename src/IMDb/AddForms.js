import React, { Component } from "react";
import "./AddForms.css";

export default class AddForms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieName: "",
      movieDirector: "",
      Duration: "",
      moviePoster: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addMovie(this.state);
    this.setState({
      movieName: "",
      movieDirector: "",
      Duration: "",
      moviePoster: "",
    });
  };

  render() {
    return (
      <div className="form-container">
        <h1>Add Movie</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="movieName"
            placeholder="Movie Name"
            value={this.state.movieName}
            onChange={this.handleChange}
            required
          />
          <input
            type="number"
            name="Duration"
            placeholder="Duration (min)"
            value={this.state.Duration}
            onChange={this.handleChange}
            required
          />
          <input
            type="text"
            name="moviePoster"
            placeholder="Image Url"
            value={this.state.moviePoster}
            onChange={this.handleChange}
            required
          />
          <button type="submit">Add Movie</button>
        </form>
      </div>
    );
  }
}
