import React from "react";
import PhotoListItem from "./PhotoListItem";
import photos from "../mocks/photos"; // TODO: Consume in App.jsx

import "../styles/PhotoList.scss";

const PhotoList = () => {
  
  const photoList = photos.map((photo) => {
    const {id, location, urls, user} = photo;
    const photoObj = {
      location,
      imageSource: urls.regular,
      username: user.name,
      profile: user.profile
    };
    return (<PhotoListItem photoItem={photoObj} key={id}/>);
  });
  
  return (
    <ul className="photo-list">
      {photoList}
    </ul>
  );
};

export default PhotoList;
