// A list of all actions in the system.
import { createTypes } from 'reduxsauce'

export default createTypes(`
  LOGIN_ATTEMPT
  LOGIN_SUCCESS
  LOGIN_FAILURE

  LOGOUT

  STARTUP

  TEMPERATURE_REQUEST
  TEMPERATURE_RECEIVE
  TEMPERATURE_FAILURE

  LOCALSTORAGE_SAVE_ATTEMPT
  LOCALSTORAGE_SAVE_SUCCESS
  LOCALSTORAGE_SAVE_FAILURE

  LOCALSTORAGE_LOAD_ATTEMPT
  LOCALSTORAGE_LOAD_SUCCESS
  LOCALSTORAGE_LOAD_FAILURE

`)