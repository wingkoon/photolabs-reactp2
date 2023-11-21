import React from 'react';
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

import '../styles/TopNavigationBar.scss';

const TopNavigation = (props) => {
  
  let favPhotoExists = false;

  for (const photoId in props.fav) {
    if (props.fav[photoId]) {
      favPhotoExists = true;
      break;
    }
  }
  
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={props.topics} getPhotosByTopics={props.getPhotosByTopics} />
      <FavBadge isFavPhotoExist={favPhotoExists} />
    </div>
  );
};

export default TopNavigation;