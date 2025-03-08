import React from "react";
import "./Header.css";
import AddMovie from "../IMDb/AddMovie"


class Header extends React.Component {
    render() {
        return (
            <header className="Header">
                <img className="imdb-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"  />
                <div className="search-container">
                    <button className="search-btn">Search</button>
                </div>
                <div>

                </div>

                <AddMovie openForm={this.props.openForm}/>
              


            </header>
        );
    }
}
export default Header;
