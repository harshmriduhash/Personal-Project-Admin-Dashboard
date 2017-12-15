import {
  GET_ANIME_PENDING,
  GET_ANIME_SUCCESS,
  ADD_ANIME_PENDING,
  ADD_ANIME_SUCCESS,
  ADD_ANIME_TO_CART_PENDING,
  ADD_ANIME_TO_CART_SUCCESS,
  REMOVE_ANIME_FROM_CART_PENDING,
  REMOVE_ANIME_FROM_CART_SUCCESS,
  EDIT_ANIME_PENDING,
  EDIT_ANIME_SUCCESS,
  REMOVE_ANIME_PENDING,
  REMOVE_ANIME_SUCCESS
} from '../actions/animes'

export default(state = [], action) => {
  switch (action.type) {
    case GET_ANIME_PENDING:
      return state;
    case GET_ANIME_SUCCESS:
      return [...action.payload.data];
    case ADD_ANIME_PENDING:
        return state;
    case ADD_ANIME_SUCCESS:
        console.log('action: ', action)
        return [...state, ...action.payload.data];
    case ADD_ANIME_TO_CART_PENDING:
            return state;
    case ADD_ANIME_TO_CART_SUCCESS:
            return [...action.payload.data];
    case REMOVE_ANIME_FROM_CART_PENDING:
        return state;
    case REMOVE_ANIME_FROM_CART_SUCCESS:
        return [...action.payload.data];
    case EDIT_ANIME_PENDING:
            return state;
    case EDIT_ANIME_SUCCESS:
            return [...action.payload.data];
    case REMOVE_ANIME_PENDING:
        return state;
    case REMOVE_ANIME_SUCCESS:
        return [...action.payload.data];

    default:
        return state;
  }
}
