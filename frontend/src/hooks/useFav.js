import { useReducer } from "react";

const actionTypes = {
  TOGGLE_FAVORITE: "TOGGLE_FAVORITE",
};

const favReducer = (state, action) => {
  switch (action.type) {
  case actionTypes.TOGGLE_FAVORITE:
    return {
      ...state,
      [action.photoId]: !state[action.photoId],
    };
  default:
    return state;
  }
};

const useFav = () => {
  const [fav, dispatch] = useReducer(favReducer, {});

  const toggleFav = (photoId) => {
    dispatch({ type: actionTypes.TOGGLE_FAVORITE, photoId });
  };

  return {
    fav,
    toggleFav,
  };
};

export default useFav;
