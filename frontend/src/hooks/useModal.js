import { useReducer } from "react";

const actionTypes = {
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
};

const modalReducer = (state, action) => {
  switch (action.type) {
  case actionTypes.OPEN_MODAL:
    return {
      clicked: true,
      modalPhotos: {
        photo: action.photo,
        similarPhotos: Object.values(action.similarPhotos),
      },
    };
  case actionTypes.CLOSE_MODAL:
    return {
      clicked: false,
      modalPhotos: {},
    };
  default:
    return state;
  }
};

const useModal = () => {
  const initialState = {
    clicked: false,
    modalPhotos: {},
  };

  const [state, dispatch] = useReducer(modalReducer, initialState);

  const isClicked = (photo, similarPhotos) => {
    dispatch({
      type: actionTypes.OPEN_MODAL,
      photo,
      similarPhotos,
    });
  };

  const unClicked = () => {
    dispatch({
      type: actionTypes.CLOSE_MODAL,
    });
  };

  return {
    clicked: state.clicked,
    modalPhotos: state.modalPhotos,
    isClicked,
    unClicked,
  };
};

export default useModal;
