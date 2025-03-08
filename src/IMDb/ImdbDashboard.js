

import React from "react";
import Header from "./Header";
import AddForm from "./AddForm";
import Panel from "./Panel";
import "./ImdbDashboard.css"

class ImdbDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieArray: [],
            showForm: false
        };
    }

    openForm = () => {
        this.setState({ showForm: !this.state.showForm });
    };

    addMovie = (movie) => {
        this.setState((prev) => ({
            movieArray: [movie, ...prev.movieArray],
            showForm: false,
        }));
    };

    render() {
        return (
            <div className="container">
                <Header openForm={this.openForm} />
                {this.state.showForm ? (
                    <AddForm addMovie={this.addMovie} />
                ) : (
                    <Panel movieArray={this.state.movieArray} openForm={this.openForm} />
                )}
            </div>
        );
    }
}

export default ImdbDashboard;
