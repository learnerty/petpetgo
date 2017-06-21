import React from 'react';
import { connect } from 'react-redux'
import axios from 'axios'
import Sign from './sign'
import '../css/OrderConfirm.css'
class OrderConfirm extends React.Component{
  constructor(){
    super()
    this.priceOrder = this.priceOrder.bind(this)
  }
  componentWillMount(){
    this.props.dispatch({type:'CHANGEHEADERVSL',headerval:'订单确认'})
  }
  priceOrder(e){
    e.preventDefault()
    let orderinfo = {
      userId:JSON.parse(localStorage.petpetgoid),
      products:this.props.shoppingCart
    }
    axios.post('http://petapi.haoduoshipin.com/order/new',orderinfo)
      .then(res => {
        sessionStorage.removeItem(sessionStorage.getgoshop)
        this.props.history.goBack()
      })
      .catch(err => alert('提交失败'))
  }
  render(){
    return (
      <div>
        {
          this.props.auth.username ?
          <div className="orderconfirm">
            <div className="payment">
              <p><span>支付方式</span><span style={{float:'right'}}>在线支付</span></p>
            </div>
            <div className="commodityInfo">
              <div className="clearfix"><p style={{float:'left'}}>{JSON.parse(localStorage.petgotitle)}</p><p style={{float:'right'}}>由 <span>商家</span> 提供配送服务</p></div>
              {
                this.props.shoppingCart.map(item => {
                  return (
                    <div className="boughtGoods clearfix" key={item._id}>
                      <p>{item.name}</p>
                      <p>￥{item.num*item.price}</p>
                      <p>×{item.num}</p>
                    </div>
                  )
                })
              }
              <div className="clearfix"><p>总计<em>￥{this.props.total}</em></p><p>实付<em>￥{this.props.total}</em></p></div>
            </div>
            <div className="priceOrder">
              <span>待支付<em>￥{this.props.total}</em></span>
              <input type="button" value="提交订单" onClick={this.priceOrder}/>
            </div>
          </div> : <Sign/>
        }

      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  total:state.total,
  shoppingCart:state.shoppingCart,
  auth:state.auth,
  shopName:state.shopName
})
export default connect(mapStateToProps)(OrderConfirm)
