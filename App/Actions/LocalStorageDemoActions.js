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

function saveLocal(key, value) {
  return {
    types: [
      Types.LOCALSTORAGE_SAVE_ATTEMPT,
      Types.LOCALSTORAGE_SAVE_SUCCESS,
      Types.LOCALSTORAGE_SAVE_FAILURE
    ],

    callAPI: async () => {
      const localStorage = require('react-native').NativeModules.LocalStorage
      await localStorage.save(key, value)
      return {key, value}
    },

    payload: {key, value, attempting: true},
    forceUpdate: true
  }
}  

function loadLocal(key) {
  return {
    types: [
      Types.LOCALSTORAGE_LOAD_ATTEMPT,
      Types.LOCALSTORAGE_LOAD_SUCCESS,
      Types.LOCALSTORAGE_LOAD_FAILURE
    ],

    callAPI: async () => {
      const localStorage = require('react-native').NativeModules.LocalStorage
      const value = await localStorage.load(key)
      return {value, effective: !!value}
    },

    payload: {key, attempting: true}
  }
} 

export default {
  attemptSave,
  saveSuccess,
  saveFailure,
  attemptLoad,
  loadSuccess,
  loadFailure,
  loadLocal,
  saveLocal
}  