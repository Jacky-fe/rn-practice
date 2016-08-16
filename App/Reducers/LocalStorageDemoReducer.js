import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  attempting: false
})

// save attempts
const attemptSave = (state, action) =>
  state.merge({ attempting: true })

// successful save
const saveSuccess = (state, action) =>
  state.merge({ attempting: false, errorCode: null, key: action.key, value: action.value })

// save failure
const saveFailure = (state, action) =>
  state.merge({ attempting: false, errorCode: action.errorCode })

// load attempts
const attemptLoad = (state, action) =>
  state.merge({ attempting: true })

// successful load
const loadSuccess = (state, action) =>
  state.merge({ attempting: false, errorCode: null, key: action.key, value: action.value })

// load failure
const loadFailure = (state, action) =>
  state.merge({ attempting: false, errorCode: action.errorCode })

// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.LOCALSTORAGE_SAVE_ATTEMPT]: attemptSave,
  [Types.LOCALSTORAGE_SAVE_SUCCESS]: saveSuccess,
  [Types.LOCALSTORAGE_SAVE_FAILURE]: saveFailure,
  [Types.LOCALSTORAGE_LOAD_ATTEMPT]: attemptLoad,
  [Types.LOCALSTORAGE_LOAD_SUCCESS]: loadSuccess,
  [Types.LOCALSTORAGE_LOAD_FAILURE]: loadFailure
}



export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
