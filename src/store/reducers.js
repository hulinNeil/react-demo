import { combineReducers } from 'redux';
import setUserState from './user';

const initState = {
  value: 0
}

function setNum(state = initState, action) {
  switch (action.type) {
    case 'add':
      return {
        value: action.value
      }
    case 'cut':
      return {
        value: action.value
      }
    default:
      return state;
  }
}

export default combineReducers({
  numStore: setNum,
  userStore: setUserState
})
