import React from 'react';
import FavIcon from './FavIcon';

import '../styles/PhotoFavButton.scss';

const PhotoFavButton = (props) => {
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon fav={props.isFav} favPhoto={() => props.favPhoto(props.photoId)} />
      </div>
    </div>
  );
};

export default PhotoFavButton;