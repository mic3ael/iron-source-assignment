import { all } from 'redux-saga/effects';
import homeSagaWatcher from '../features/home/Home.saga';

export default function* rootSaga() {
    yield all([
        homeSagaWatcher(),
    ]);
}