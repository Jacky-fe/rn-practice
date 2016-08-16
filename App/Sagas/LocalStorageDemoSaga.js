import { take, put, call } from 'redux-saga/effects'
import Types from '../Actions/Types'
import Actions from '../Actions/LocalStorageDemoActions'
const localStorage = require('react-native').NativeModules.LocalStorage
// attempts to save
export function* attemptSave(key, value) {
  if (!key || !value) {
    // dispatch failure
    yield put(Actions.saveFailure('WRONG'))
  } else {
    try {
      localStorage.save(key, value)
      // dispatch successful
      yield put(Actions.saveSuccess(key, value))
    } catch (e) {
      yield put(Actions.saveFailure(e.message))
    }
  }
}

// a daemonized version which waits for LOCALSTORAGE_SAVE_ATTEMPT signals
export function* watchSaveAttempt() {
  // daemonize
  while (true) {
    // wait for LOGIN_ATTEMPT actions to arrive
    const { key, value } = yield take(Types.LOCALSTORAGE_SAVE_ATTEMPT)
    // call attemptSave to perform the actual work
    yield call(attemptSave, key, value)
  }
}

// attempts to load
export function* attemptLoad(key) {
  if (!key) {
    yield put(Actions.loadFailure('WRONG'))
  } else {
      try {
        const value = yield call(localStorage.load, key)
        yield put(Actions.loadSuccess(key, value))
      } catch (e) {
        yield put(Actions.loadFailure(e.message))
      }
  }
}

export function* watchLoadAttempt() {
  while (true) {
    const { key } = yield take(Types.LOCALSTORAGE_LOAD_ATTEMPT)

    yield call(attemptLoad, key)
  }
}
