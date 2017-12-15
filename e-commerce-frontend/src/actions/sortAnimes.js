export const UPDATE_SORT_TYPE = 'UPDATE_SORT_TYPE';

export const updateSortType = (sortType) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_SORT_TYPE,
      payload: sortType
    })
  }
}
