import { FETCH_GIFS, FETCH_GIFS_ERROR, FETCH_GIFS_SUCCESS } from '../constants';

export const fetchGifs = (payload = {}) => ({
  type: FETCH_GIFS,
  payload,
});

export const fetchGifsError = payload => ({
  type: FETCH_GIFS_ERROR,
  payload,
});

export const fetchGifsSuccess = payload => ({
  type: FETCH_GIFS_SUCCESS,
  payload,
});
