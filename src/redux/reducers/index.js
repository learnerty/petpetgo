import { combineReducers } from 'redux'

function positionReducer(state='',action){
  switch (action.type) {
    case 'POSITION':
      return action.position
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

function shop(state=[],action){
  switch (action.type) {
    case 'SEARCHGOOD':
      return action.commodity
    default:
      return state
  }
}

function allshop(state=[],action){
  switch (action.type) {
    case 'ALLSHOP':
      return action.shop
    default:
      return state
  }
}

function headpPortrait(state='',action){
  switch (action.type) {
    case 'GITHUB_HEADPORTRAIT':
      return action.headpPortrait
    default:
      return state
  }
}

function commoditys(state=[],action){
  switch (action.type) {
    case 'COMMODITY':
      return action.commoditys
    case 'ALTER_NUMBER':
      let newState = state.map((item,index) => item._id===action.id ? {...item,num:item.num+action.num} : item)
      // let arr1 = state.slice(0,action.index)
      // let arr2 = [{...state.slice(action.index,action.index+1)[0],num:state[action.index].num+=action.num}]
      // let arr3 = state.slice(action.index+1,state.length+1)
      // let newState = arr1.concat(arr2,arr3)
      return newState
    default:
      return state
  }
}

function total(state=0,action){
  switch (action.type) {
    case 'COMM_TOTAL':
      return action.total
    default:
      return state
  }
}

function shoppingCart(state=[],action){
  switch (action.type) {
    case 'SHOPPINGCART':
      return action.shoppingCart
    default:
      return state
  }
}

const rootReducer = combineReducers({
  position:positionReducer,
  auth:authReducer,
  signBtn:signBtnReducer,
  headerval,
  shop,
  allshop,
  headpPortrait,
  commoditys,
  total,
  shoppingCart
})
export default rootReducer
