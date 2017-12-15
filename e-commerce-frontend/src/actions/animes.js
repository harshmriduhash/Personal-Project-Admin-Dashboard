/* eslint-disable */
import axios from 'axios';

export const GET_ANIME_PENDING = 'GET_ANIMES_PENDING';
export const GET_ANIME_SUCCESS = 'GET_ANIMES_SUCCESS';

export const ADD_ANIME_PENDING = 'ADD_ANIME_PENDING';
export const ADD_ANIME_SUCCESS = 'ADD_ANIME_SUCCESS';

export const ADD_ANIME_TO_CART_PENDING = 'ADD_ANIME_TO_CART_PENDING';
export const ADD_ANIME_TO_CART_SUCCESS = 'ADD_ANIME_TO_CART_SUCCESS';

export const REMOVE_ANIME_FROM_CART_PENDING = 'REMOVE_ANIME_FROM_CART_PENDING';
export const REMOVE_ANIME_FROM_CART_SUCCESS = 'REMOVE_ANIME_FROM_CART_SUCCESS';

export const EDIT_ANIME_PENDING = 'EDIT_ANIME_PENDING';
export const EDIT_ANIME_SUCCESS = 'EDIT_ANIME_SUCCESS';

export const REMOVE_ANIME_PENDING = 'REMOVE_ANIME_PENDING';
export const REMOVE_ANIME_SUCCESS = 'REMOVE_ANIME_SUCCESS';


/*Get All Anime Items*/
export const getAnime = () => {
  return async (dispatch) => {
    dispatch({ type: GET_ANIME_PENDING })
    let anime = await axios.get('http://localhost:8000/')
    dispatch({
      type: GET_ANIME_SUCCESS,
      payload: anime
    })
  }
}

/*Post Add One New Anime Item*/
export const addAnime = (newAnime) => {
  return async (dispatch) => {
    dispatch({ type: ADD_ANIME_PENDING })
    console.log('newAnime: ', newAnime)
    let anime = await axios.post('http://localhost:8000/', newAnime);
    console.log('anime: ', anime)
    dispatch({
      type: ADD_ANIME_SUCCESS,
      payload: anime
    })
  }
}

/*Patch Add One Anime Item to Cart*/
export const addAnimeToCart = (id) => {
  return async (dispatch) => {
    dispatch({ type: ADD_ANIME_TO_CART_PENDING })
    await axios.patch(`http://localhost:8000/cart/${id}/add`);
    let anime = await axios.get('http://localhost:8000/');
    dispatch({
      type: ADD_ANIME_TO_CART_SUCCESS,
      payload: anime
    })
  }
}

/*Patch Remove One Anime Item from Cart*/
export const removeAnimeFromCart = (id) => {
  return async (dispatch) => {
    dispatch({ type:REMOVE_ANIME_FROM_CART_PENDING })
      await axios.patch(`http://localhost:8000/cart/${id}/remove`)
      let anime = await axios.get(`http://localhost:8000/`)
    dispatch({
      type: REMOVE_ANIME_FROM_CART_SUCCESS,
      payload: anime
    })
  }
}

/*Patch Edit One Anime Item*/
export const editAnime = (id, updatedAnimeItem, history) => {
  console.log('id: ', id)
  console.log('updatedAnimeItem: ', updatedAnimeItem)
  return async (dispatch) => {
    dispatch({ type: EDIT_ANIME_PENDING })
    let anime = await axios.patch(`http://localhost:8000/${id}/edit`, updatedAnimeItem);
    dispatch({
      type: EDIT_ANIME_SUCCESS,
      payload: anime
    })
    history.push('/admin')
  }
}

/*Delete One Anime Item */
export const removeAnime = (id) => {
  console.log('id:' , id)
  return async (dispatch) => {
    dispatch({ type: REMOVE_ANIME_PENDING })
      let anime = await axios.delete(`http://localhost:8000/${id}/delete`);
    dispatch({
      type: REMOVE_ANIME_SUCCESS,
      payload: anime
    })
  }
}
