import React from "react";
import "./AddMovies.css";

export default class AddMovieButton extends React.Component {
    render() {
        return (
            <button className="add-button" onClick={this.props.openForm}>
                ADD MOVIE
            </button>
        );
    }
}
