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
      let newState = state.map(item => item._id===action.id ? {...item,num:item.num+action.num} : item)
      return newState
    case 'EMPTY':
      let newState1 = state.map(item => ({...item,num:0}))
      return newState1
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

function shopName(state='',action){
  switch (action.type) {
    case 'SHOPNAME':
      return action.shopName
    default:
      return state
  }
}
function allOrder(state=[],action){
  switch (action.type) {
    case 'ALLREDER':
      return action.orders
    default:
      return state
  }
}

function cats(state=[],action){
  switch (action.type) {
    case 'ALLCATS':
      return action.cats
    default:
      return state
  }
}

function currentCat(state={},action){
  switch (action.type) {
    case 'CURRENTCATS':
      return action.currentcat
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
  shoppingCart,
  shopName,
  allOrder,
  cats,
  currentCat
})
export default rootReducer
