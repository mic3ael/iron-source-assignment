import { put, takeLatest, call } from 'redux-saga/effects';
import constants from './Home.constants';
import api from '../../common/api/repos';

function* fetchRepositories(name, sort) {
  try {
    const data = yield call(api.getRepositories, name, sort);
    yield put({ type: constants.GET_REPOSITORIES_SUCCESS, payload: data });
  } catch (e) {
    yield put({ type: constants.GET_REPOSITORIES_ERROR, payload: e.message });
  }
}

function* actionWatcher() {
  yield takeLatest(constants.GET_REPOSITORIES, ({ name, sort }) => fetchRepositories(name, sort))
}

export default actionWatcher;