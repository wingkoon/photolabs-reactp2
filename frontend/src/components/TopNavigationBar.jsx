import React from 'react';
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

import '../styles/TopNavigationBar.scss';

const TopNavigation = (props) => {
  
  let likedPhotoExists = false;

  for (const photoId in props.like) {
    if (props.like[photoId]) {
      likedPhotoExists = true;
      break;
    }
  }
  
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={props.topics} />
      <FavBadge isFavPhotoExist={likedPhotoExists} />
    </div>
  );
};

export default TopNavigation;