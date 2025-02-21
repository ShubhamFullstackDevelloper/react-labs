import React from "react";
import "./Imdbdashboard.css";
import Header from "./Header";
import AddForms from "./AddForms";
import Panel from "./Panel";

export default class Imdb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showForm: false,
            movieArray: [],
        };
    }

    openForm = () => {
        this.setState({ showForm: !this.state.showForm });
    };

    addMovie = (movie) => {
        this.setState((prevState) => ({
            movieArray: [...prevState.movieArray, movie],
            showForm: false, // Hide form after adding
        }));
    };

    render() {
        return (
            <div className="main-container">
                <Header openForm={this.openForm} />
                {this.state.showForm ? (
                    <AddForms addMovie={this.addMovie} />
                ) : (
                    <Panel movieArray={this.state.movieArray} openForm={this.openForm} />
                )}
            </div>
        );
    }
}
