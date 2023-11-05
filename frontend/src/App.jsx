import React from "react";
import HomeRoute from "routes/HomeRoute";

import './App.scss';

const App = () => {

  // const [like, setLike] = useState(false);

  // const likePhoto = () => {
  //   if (like) {
  //     setLike(false);
  //   } else {
  //     setLike(true);
  //   }
  //   console.log(like);
  // };

  return (
    <div className="App">
      <HomeRoute />
    </div>
  );
};

export default App;
