import React from "react";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useFav from "hooks/useFav";
import useModal from "hooks/useModal";

import './App.scss';

const App = () => {

  const { fav, toggleFav } = useFav();
  const { clicked, isClicked, unClicked, modalPhotos } = useModal();

  return (
    <div className="App">
      <HomeRoute isClicked={isClicked} fav={fav} favPhoto={toggleFav} />
      {clicked && (
        <PhotoDetailsModal unClicked={unClicked} modalPhotos={modalPhotos} fav={fav} favPhoto={toggleFav} />
      )}
    </div>
  );
};

export default App;
