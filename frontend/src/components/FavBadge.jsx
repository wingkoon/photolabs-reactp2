import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, like }) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!isFavPhotoExist} like={true} />
    </div>
  );
};

export default FavBadge;