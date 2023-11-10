import React from "react";
import PhotoListItem from "./PhotoListItem";

import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  
  const photoList = props.photos.map((photo) => {
    // eslint-disable-next-line camelcase
    const { id, location, urls, user, similar_photos } = photo;
    const photoObj = {
      id,
      location,
      urls: { regular: urls.regular, full: urls.full },
      user: { name: user.name, profile: user.profile }
    };
    return (
      <PhotoListItem
        photoItem={photoObj}
        key={id}
        like={props.like}
        likePhoto={props.likePhoto}
        isClicked={() => props.isClicked(photoObj, similar_photos)}
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
