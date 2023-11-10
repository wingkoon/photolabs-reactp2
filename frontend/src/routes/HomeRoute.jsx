import React from "react";
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import useApplicationData from "hooks/useApplicationData";
// import photos from "../mocks/photos";

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  
  const { photos, topics, getPhotosByTopics } = useApplicationData();
  console.log(photos);

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} like={props.like} getPhotosByTopics={getPhotosByTopics} />
      <PhotoList photos={photos} like={props.like} likePhoto={props.likePhoto} isClicked={props.isClicked} />
    </div>
  );
};

export default HomeRoute;
