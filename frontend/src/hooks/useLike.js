import { useReducer } from "react";

const actionTypes = {
  TOGGLE_FAVORITE: "TOGGLE_FAVORITE",
};

const likeReducer = (state, action) => {
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

const useLike = () => {
  const [like, dispatch] = useReducer(likeReducer, {});

  const toggleLike = (photoId) => {
    dispatch({ type: actionTypes.TOGGLE_FAVORITE, photoId });
  };

  return {
    like,
    toggleLike,
  };
};

export default useLike;
