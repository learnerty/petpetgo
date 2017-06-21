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
        <form method="post" action="http://192.168.0.111:3000/login">
          <input name="username" placeholder="用户名"/>
          <input name="password" placeholder="密码"/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({

})
export default connect(mapStateToProps)(withRouter(Address))
