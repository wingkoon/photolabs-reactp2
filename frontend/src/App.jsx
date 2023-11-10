import React from "react";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useLike from "hooks/useLike";
import useModal from "hooks/useModal";

import './App.scss';

const App = () => {

  const { like, toggleLike } = useLike();
  const { clicked, isClicked, unClicked, modalPhotos } = useModal();

  return (
    <div className="App">
      <HomeRoute isClicked={isClicked} like={like} likePhoto={toggleLike} />
      {clicked && (
        <PhotoDetailsModal unClicked={unClicked} modalPhotos={modalPhotos} like={like} likePhoto={toggleLike} />
      )}
    </div>
  );
};

export default App;
