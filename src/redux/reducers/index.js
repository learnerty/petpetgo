import { combineReducers } from 'redux'

function positionReducer(state='',action){
  switch (action.type) {
    case 'POSITION':
      return `${action.city}${action.district}${action.street}${action.streetNumber}`
    default:
      return state
  }
}


function authReducer(state='',action){
  switch (action.type) {
    case 'CURRENTUSER':
      return action.currentUser
    default:
      return state
  }
}


function signBtnReducer(state={signBtn:'登录'},action){
  switch (action.type) {
    case 'SHOW_SIGN':
      return {signBtn:action.showVal}
    default:
      return state
  }
}

function headerval(state='',action){
  switch (action.type) {
    case 'CHANGEHEADERVSL':
      return action.headerval
    default:
      return state
  }

}


const rootReducer = combineReducers({
  position:positionReducer,
  auth:authReducer,
  signBtn:signBtnReducer,
  headerval
})
export default rootReducer
