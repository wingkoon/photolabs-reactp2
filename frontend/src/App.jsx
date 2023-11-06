import React from "react";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useLike from "hooks/useLike";
import useModal from "hooks/useModal";

import './App.scss';

const App = () => {

  const { like, toggleLike } = useLike();
  const { clicked, isClicked, unClicked, modalPhotos } = useModal();
  // const [ like, setLike ] = useState({});
  // const [ clicked, setClicked ] = useState(false);
  // const [ modalPhotos, setModalPhotos ] = useState({});

  // const isClicked = (photo, similarPhotos) => {
  //   setClicked(true);
  //   const similarPhotoObjs = Object.values(similarPhotos);
  //   setModalPhotos({ photo, similarPhotos: similarPhotoObjs });
  //   console.log(photo, similarPhotos);
  // };

  // const unClicked = () => {
  //   setClicked(false);
  // };

  // const likePhoto = (photoId) => {
  //   setLike((prevLikes) => ({
  //     ...prevLikes,
  //     [photoId]: !prevLikes[photoId] || false,
  //   }));
  // };

  return (
    <div className="App">
      <HomeRoute isClicked={isClicked} like={like} likePhoto={toggleLike} />
      {clicked && <PhotoDetailsModal unClicked={unClicked} modalPhotos={modalPhotos} like={like} likePhoto={toggleLike} />}
    </div>
  );
};

export default App;
