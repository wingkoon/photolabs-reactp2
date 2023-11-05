import React from "react";

import "../styles/PhotoListItem.scss";


const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

const PhotoListItem = (props) => {

  const { location, imageSource, username, profile } = props.photoItem;

  return (
    <li className="photo-list__item">
      <img src={imageSource} className="photo-list__image"></img>
      <div className="photo-list__user-details">
        <img src={profile} className="photo-list__user-profile"></img>
        <div className="photo-list__user-info">
          <span>{username}</span>
          <span className="photo-list__user-location">
            {location.city}, {location.country}
          </span>
        </div>
      </div>
    </li>
  );
  
};

export default PhotoListItem;
