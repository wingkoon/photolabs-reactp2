import React from "react";
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import useApplicationData from "hooks/useApplicationData";

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  
  const { photos, topics, getPhotosByTopics } = useApplicationData();

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} fav={props.fav} getPhotosByTopics={getPhotosByTopics} />
      <PhotoList photos={photos} fav={props.fav} favPhoto={props.favPhoto} isClicked={props.isClicked} />
    </div>
  );
};

export default HomeRoute;
