import { React, useState } from "react";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

import './App.scss';

const App = () => {

  const [ clicked, setClicked ] = useState(false);
  const [ modalPhotos, setModalPhotos ] = useState({});
  const [ like, setLike ] = useState({});

  const isClicked = (photo, similarPhotos) => {
    setClicked(true);
    const similarPhotoObjs = Object.values(similarPhotos);
    setModalPhotos({ photo, similarPhotos: similarPhotoObjs });
    console.log(photo, similarPhotos);
  };

  const unClicked = () => {
    setClicked(false);
  };

  const likePhoto = (photoId) => {
    setLike((prevLikes) => ({
      ...prevLikes,
      [photoId]: !prevLikes[photoId] || false,
    }));
  };

  return (
    <div className="App">
      <HomeRoute isClicked={isClicked} like={like} likePhoto={likePhoto} />
      {clicked && <PhotoDetailsModal unClicked={unClicked} modalPhotos={modalPhotos} like={like} likePhoto={likePhoto} />}
    </div>
  );
};

export default App;
