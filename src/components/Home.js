import React from 'react';
import { connect } from 'react-redux'
import '../css/home.css'
import Position from './position'
import { Link } from 'react-router-dom'
class Home extends React.Component{
  componentWillMount(){
    this.props.dispatch({type:'CHANGEHEADERVSL',headerval:'首页'})
  }
  render(){
    return (
      <div>
        <div className='home-header'>
          <div><Position/></div>
          <div><Link to="search"><i className="iconfont">&#xe635;</i>请输入商家、商品名</Link></div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({

})
export default connect(mapStateToProps)(Home)
