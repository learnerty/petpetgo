import axios from 'axios'

const shoptitle = (headerval) =>(
  dispatch => dispatch({type:'CHANGEHEADERVSL',headerval})
)
export {shoptitle}

const getcats = (id) => (
  dispatch => {
    axios.get(`http://petapi.haoduoshipin.com/shop/${id}/cats`)
      .then(res => {
        dispatch({type:'ALLCATS',cats:res.data.cats})
        if(res.data.cats.length){
          dispatch({type:'CURRENTCATS',currentcat:{name:res.data.cats[0].name,id:res.data.cats[0]._id}})
        }
      })
    }
)
export {getcats}

const emptyCom = () => (
  dispatch => {
    dispatch({type:'COMMODITY',commoditys:[]})
    dispatch({type:'ALLCATS',cats:[]})
  }
)
export {emptyCom}

const getcommodity = (id,commoditys) => (
  dispatch => {
    axios.get('http://petapi.haoduoshipin.com/products')
      .then(res => {
        let comm = res.data.products.map(item => ({...item,num:0}))
        let sess = JSON.parse(sessionStorage.getItem(id))
        let commoditys = []
        if(sess.length && comm.length){
          for(var i=0;i<comm.length;i++){
            let kaiguan = false
            for(var j=0;j<sess.length;j++){
              if(comm[i]._id===sess[j].id){
                commoditys.push({...comm[i],num:sess[j].num})
                kaiguan = true
              }
            }
            if(kaiguan===true){
              continue
            }
            commoditys.push(comm[i])
          }
        }else{
          commoditys = comm
        }
        dispatch({type:'COMMODITY',commoditys})
        let total = 0
        let shoppingCart = commoditys.filter(item => item.num>0)
        shoppingCart.forEach(item => total+=item.price*item.num)
        dispatch({type:'COMM_TOTAL',total})
        dispatch({type:'SHOPPINGCART',shoppingCart})
      })
  }
)
export {getcommodity}

const changeQuantity = (num,id,commoditys,total,shoppingCart) => (
  dispatch => {
    let total = 0
    let shoppingCart = commoditys.filter(item => item.num>0)
    shoppingCart.forEach(item => total+=item.price*item.num)
    dispatch({type:'COMM_TOTAL',total})
    dispatch({type:'SHOPPINGCART',shoppingCart})
    let seCart = shoppingCart.map(item=>({id:item._id,num:item.num}))
    let seCart1 = JSON.stringify(seCart)
    sessionStorage.setItem(id,seCart1)
  }
)
export {changeQuantity}

const switchCats = (item) => (
  dispatch => {
    dispatch({type:'CURRENTCATS',currentcat:{name:item.name,id:item._id}})
  }
)
export {switchCats}

const emptyshopcart = () => (
  dispatch => {
    dispatch({type:'SHOPPINGCART',shoppingCart:''})
    dispatch({type:'EMPTY'})
    dispatch({type:'COMM_TOTAL',total:0})
  }
)
export {emptyshopcart}
