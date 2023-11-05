import React from "react";
import PhotoListItem from "./PhotoListItem";
import photos from "../mocks/photos"; // TODO: Consume in App.jsx

import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  
  const photoList = photos.map((photo) => {
    const { id, location, urls, user, similarPhotos } = photo;
    const photoObj = {
      location,
      imageSource: urls.regular,
      username: user.name,
      profile: user.profile,
      id,
      similarPhotos
    };
    return (
      <PhotoListItem
        photoItem={photoObj}
        key={id}
        like={props.like}
        likePhoto={props.likePhoto}
        isClicked={() => props.isClicked(urls.regular, similarPhotos)}
      />
    );
  });
  
  return (
    <ul className="photo-list">
      {photoList}
    </ul>
  );
};

export default PhotoList;
