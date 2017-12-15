import { UPDATE_TITLE_FILTER } from '../actions/titleFilter';

export default (state = '', action) => {
  switch (action.type) {
    case UPDATE_TITLE_FILTER:
      return action.payload;
    default:
      return state;
  }
}
