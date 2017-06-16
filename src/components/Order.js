import React from 'react';
import { connect } from 'react-redux'
import Sign from './sign'
import axios from 'axios'
class Order extends React.Component{
  componentWillMount(){
    this.props.dispatch({type:'CHANGEHEADERVSL',headerval:'我的订单'})
    axios.get('http://petapi.haoduoshipin.com/orders')
      .then(res => console.log(res))
  }
  render(){
    return (
      <div>
        {
          this.props.auth ?
          <div>
            order
          </div> :
          <Sign/>
        }
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  auth:state.auth
})
export default connect(mapStateToProps)(Order)
