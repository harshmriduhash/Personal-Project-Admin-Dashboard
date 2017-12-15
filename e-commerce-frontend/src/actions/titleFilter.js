export const UPDATE_TITLE_FILTER = 'UPDATE_TITLE_FILTER';

export const updateTitleFilter = (phrase) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_TITLE_FILTER,
      payload: phrase
    })
  }
}
