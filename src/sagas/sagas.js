import { takeLatest, call, put } from "redux-saga/effects";
import * as apiFunctions from "../actions/dogs";

function* fetchBreeds() {
  try {
    const res = yield call(apiFunctions.fetchDogBreeds);
    console.log(res);
    const dog = res.message;
    yield put({ type: "STORE_DOG_BREEDS", payload: dog });
  } catch (error) {
    console.error(error);
  }
}
function* getImages(breedName) {
  try {
    const res = yield call(apiFunctions.fetchDogImages, breedName);
    const imgs = res.message;
    console.log(imgs);
    yield put({ type: "STORE_DOG_IMAGES", payload: imgs });
  } catch (error) {
    console.error(error);
  }
}

export function* watcherSaga() {
  yield takeLatest("FETCH_DOG_BREEDS", fetchBreeds);
  yield takeLatest("GET_IMAGES", getImages);
}
