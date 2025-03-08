import React from "react";

export default class ProfileImageGreay extends React.Component {
  render() {
    const defaultImage =
      "https://img.freepik.com/free-photo/user-profile-icon-front-side-with-white-background_187299-40010.jpg?ga=GA1.1.163775039.1720091871&semt=ais_hybrid";
    return (
      <div className="profile-container profile-container-grey">
        <img
          src={defaultImage}
          className="profile-image"
          alt="Grey Profile"
        />
        <p className="profile-title">Grey Profile</p>
      </div>
    );
  }
}
