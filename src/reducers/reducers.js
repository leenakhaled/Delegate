
const initialState = {
  data: [],
  loading: true
};

export default function randomTextsReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      state.data.find(t => t.id === action.id.user.id).isFav= true;
      break;

    case "REMOVE_FROM_FAVORITES":
      state.data.find(t => t.id === action.id).isFav = false;
      break;

    case "FETCH_RANDOM_TEXT_SUCCESS":
      state = { ...state, data: action.data, loading: false };
      break;

  }

  return { ...state };
}