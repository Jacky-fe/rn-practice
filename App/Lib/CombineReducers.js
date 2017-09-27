import { combineReducers as cr } from 'redux'
const reducerMap = {}
export function combineReducers(reducers) {
  reducerMap = {...reducers}
  return cr(reducers)
}
export function getReducerStateKey(reducer) {
  for (const key in reducerMap) {
    console.log('1111111',reducerMap[key].toString())
    console.log('2222222',reducer.toString())
    if (reducerMap[key].toString() === reducer.toString()) {
      return key
    }
  }
}