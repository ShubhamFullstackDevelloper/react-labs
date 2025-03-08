import React from "react";
import AddForm from "./AddForm";
import "./AddMovie.css"

class AddMovie extends React.Component {
    render() {
      return (
        <div className="movie-container">
          <button className="button" onClick={this.props.openForm}>Add Movie</button>
          {this.props.showForm && <AddForm />}
        </div>
      );
    }
  }
  
  export default AddMovie;
  
