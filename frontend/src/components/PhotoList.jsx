import React from "react";
import PhotoListItem from "./PhotoListItem";
// import photos from "../mocks/photos"; // TODO: Consume in App.jsx

import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  
  const photoList = props.photos.map((photo) => {
    const { id, location, urls, user, similarPhotos } = photo;
    const photoObj = {
      id,
      location,
      urls: { regular: urls.regular, full: urls.full },
      user: { name: user.name, profile: user.profile },
      // imageSource: urls.regular,
      // username: user.name,
      // profile: user.profile,
      // similarPhotos,
    };
    return (
      <PhotoListItem
        photoItem={photoObj}
        key={id}
        like={props.like}
        likePhoto={props.likePhoto}
        isClicked={() => props.isClicked(photoObj, similarPhotos)}
        modal={props.modal}
      />
    );
  });
  
  return (
    <ul className={!props.modal ? "photo-list" : "similar-photos"}>
      {photoList}
    </ul>
  );
};

export default PhotoList;
