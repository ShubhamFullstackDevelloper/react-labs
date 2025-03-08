import React from "react";
import "./AddForm.css";

export default class AddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieName: "",
            duration: "",
            movieDirector: "",
            moviePoster: "", // Field for movie poster URL
        };
    }

    // Handle input changes
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    // Handle form submission
    submitFunction = (event) => {
        event.preventDefault();
        const { movieName, duration, movieDirector, moviePoster } = this.state;

        // Validate inputs before adding
        if (movieName.trim() && duration.trim() && movieDirector.trim() && moviePoster.trim()) {
            this.props.addMovie({ movieName, duration, movieDirector, moviePoster });

            // Reset form fields after submission
            this.setState({ movieName: "", duration: "", movieDirector: "", moviePoster: "" });
        }
    };

    render() {
        return (
            <div className="form-container">
                <form className="form-box" onSubmit={this.submitFunction}>
                    <fieldset>
                        <input
                            type="text"
                            name="movieName"
                            value={this.state.movieName}
                            onChange={this.handleChange}
                            placeholder="Enter Movie Name"
                            required
                        />
                        <input
                            type="text"
                            name="moviePoster"
                            value={this.state.moviePoster}
                            onChange={this.handleChange}
                            placeholder="Enter Image URL"
                            required
                        />
                        <input
                            type="text"
                            name="duration"
                            value={this.state.duration}
                            onChange={this.handleChange}
                            placeholder="Enter Movie Duration"
                            required
                        />
                        <input
                            type="text"
                            name="movieDirector"
                            value={this.state.movieDirector}
                            onChange={this.handleChange}
                            placeholder="Enter Director Name"
                            required
                        />
                        <button className="submit-btn" type="submit">Add Movie</button>
                    </fieldset>
                </form>
            </div>
        );
    }
}
