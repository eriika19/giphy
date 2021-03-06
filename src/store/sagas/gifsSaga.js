import { call, takeLatest, put } from 'redux-saga/effects';
import { getTargetGifs, getTrendingGifs } from './api';
import { FETCH_GIFS } from '../constants';
import { fetchGifsError, fetchGifsSuccess } from '../actions';

function* getData(action) {
  const { trending, value } = action.payload;
  try {
    const response = trending ? yield call(getTrendingGifs) : yield call(getTargetGifs, value);
    const { data } = response;
    yield put(fetchGifsSuccess(data));
  } catch (error) {
    console.error(error);
    yield put(fetchGifsError(error));
  }
}

function* gifsSaga() {
  yield takeLatest(FETCH_GIFS, getData);
}

export default gifsSaga;
