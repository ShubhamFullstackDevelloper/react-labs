import React from "react";
import "./Header.css";
import image from "./Image/IMDB.png";
import AddMovieButton from "./AddMovies";

export default class Header extends React.Component {
    render() {
        return (
            <div className="header-box">
                <img className="logo" src={image} alt="IMDB Logo" />
                <div className="button-container">
                    <AddMovieButton openForm={this.props.openForm} />
                </div>
            </div>
        );
    }
}
