import React from "react";

export default class ProfileImageGreen extends React.Component {

  render() {
    const defaultImage =
      "profile.png";
    return (
      <div className="profile-container profile-container-grey">
        <img
          src={defaultImage}
          className="profile-image"
          alt="Green Profile"
    
        />
        <p className="profile-title">Green Profile</p>
      </div>
    );
  }
}
