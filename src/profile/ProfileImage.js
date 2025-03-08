import React from "react";
import "./ProfileImage.css"; // Import the CSS file

export default class ProfileImage extends React.Component {
 
  render() {
    return (
      <div className="profile-container">
        <img
          src="https://img.freepik.com/premium-vector/social-media-logo_1305298-29989.jpg?ga=GA1.1.163775039.1720091871&semt=ais_hybrid"
          className="profile-image"
          alt="Profile"

        />
        <p className="profile-title">Default Profile</p>
      </div>
    );
  }
}

export class ProfileImageGreay extends React.Component {
  render() {
    const defaultImage =
      "https://img.freepik.com/free-photo/user-profile-icon-front-side-with-white-background_187299-40010.jpg?ga=GA1.1.163775039.1720091871&semt=ais_hybrid";
    return (
      <div className="profile-container profile-container-grey">
        <img src={defaultImage} className="profile-image" alt="Grey Profile" />
        <p className="profile-title">Grey Profile</p>
      </div>
    );
  }
}

export class ProfileImageGreen extends React.Component {
  render() {
    const defaultImage =
      "https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?ga=GA1.1.163775039.1720091871&semt=ais_hybrid";
    return (
      <div className="profile-container profile-container-green">
        <img src={defaultImage} className="profile-image" alt="Green Profile" />
        <p className="profile-title">Green Profile</p>
      </div>
    );
  }
}
