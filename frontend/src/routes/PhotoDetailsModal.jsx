import React from "react";
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from "../components/PhotoList";
import PhotoListItem from "../components/PhotoListItem";

import '../styles/PhotoDetailsModal.scss';

const PhotoDetailsModal = (props) => {
  
  const { photo, similarPhotos } = props.modalPhotos;
  const modal = true;
  
  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={props.unClicked}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <ul className="main-photo">
        <PhotoListItem
          photoItem={photo}
          fav={props.fav}
          favPhoto={props.favPhoto}
          mainPhoto={true}
          modal={modal}
        />
      </ul>
      <div className="photo-details-modal__header">
        <span>Similar Photos</span>
        <PhotoList
          photos={similarPhotos}
          fav={props.fav}
          favPhoto={props.favPhoto}
          modal={modal}
          isClicked={() => false}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
