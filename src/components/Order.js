import React from 'react';
import { connect } from 'react-redux'
import Sign from './sign'
import axios from 'axios'
import '../css/Order.css'
class Order extends React.Component{
  constructor(){
    super()
    this.state={
      total:0
    }
  }
  componentWillMount(){
    this.props.dispatch({type:'CHANGEHEADERVSL',headerval:'我的订单'})
    axios.get('http://petapi.haoduoshipin.com/orders')
      .then(res => this.props.dispatch({type:'ALLREDER',orders:res.data.orders}))
  }
  total(products){
    let total = 0
    products.forEach(item => total+=parseFloat(item.price*item.num))
    return total
  }
  render(){
    return (
      <div>
        {
          this.props.auth.userid ?
          <div>
            {
              this.props.allOrder.length ?
              <div className="myorder">
                {
                  this.props.allOrder.map(item => (
                    item.userId===this.props.auth.userid ?
                    <ul key={item._id}>
                      <h4><p>{item.products.map(item => `@${item.name}`)}</p></h4>
                      <li>
                        <img src={item.products[0].poster}/>
                        <div>
                          <p><em>￥{this.total(item.products)}</em></p>
                          <p>由美团专送提供高品质服务</p>
                        </div>
                      </li>
                    </ul> : null
                  ))
                }
              </div> : null
            }
          </div> :
          <Sign/>
        }
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  auth:state.auth,
  allOrder:state.allOrder
})
export default connect(mapStateToProps)(Order)
