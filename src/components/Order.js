import React from 'react';
import { connect } from 'react-redux'
class Order extends React.Component{
  componentWillMount(){
    this.props.dispatch({type:'CHANGEHEADERVSL',headerval:'我的订单'})
  }
  render(){
    return (
      <div>
        Order
      </div>
    )
  }
}
const mapStateToProps = (state) => ({

})
export default connect(mapStateToProps)(Order)
