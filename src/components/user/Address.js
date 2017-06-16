import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
class Address extends React.Component{
  componentWillMount(){
    this.props.dispatch({type:'CHANGEHEADERVSL',headerval:'我的收货地址'})
  }
  render(){
    return (
      <div>
        Address
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  
})
export default connect(mapStateToProps)(withRouter(Address))
