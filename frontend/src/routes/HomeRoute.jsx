import React from "react";
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import photos from "../mocks/photos";

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  
  // const [like, setLike] = useState({});

  // const likePhoto = (photoId) => {
  //   setLike((prevLikes) => ({
  //     ...prevLikes,
  //     [photoId]: !prevLikes[photoId] || false,
  //   }));
  // };
  
  return (
    <div className="home-route">
      <TopNavigationBar like={props.like} />
      <PhotoList photos={photos} like={props.like} likePhoto={props.likePhoto} isClicked={props.isClicked} />
    </div>
  );
};

export default HomeRoute;
