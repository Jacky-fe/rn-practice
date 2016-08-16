import Types from './Types'

const attemptSave = (key, value) => 
  ({ type: Types.LOCALSTORAGE_SAVE_ATTEMPT, key, value })

const saveSuccess = (key, value) =>
  ({ type: Types.LOCALSTORAGE_SAVE_SUCCESS, key, value })

const saveFailure = (errorCode) =>
  ({ type: Types.LOCALSTORAGE_SAVE_FAILURE, errorCode })

const attemptLoad = (key) => 
  ({ type: Types.LOCALSTORAGE_LOAD_ATTEMPT, key })

const loadSuccess = (key, value) =>
  ({ type: Types.LOCALSTORAGE_LOAD_SUCCESS, key, value })

const loadFailure = (errorCode) =>
  ({ type: Types.LOCALSTORAGE_LOAD_FAILURE, errorCode })

export default {
  attemptSave,
  saveSuccess,
  saveFailure,
  attemptLoad,
  loadSuccess,
  loadFailure
}  