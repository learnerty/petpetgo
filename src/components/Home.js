import React from 'react';
import { connect } from 'react-redux'
import '../css/home.css'
import axios from 'axios'
import Position from './position'
import { Link } from 'react-router-dom'
class Home extends React.Component{
  componentWillMount(){
    this.props.dispatch({type:'CHANGEHEADERVSL',headerval:'首页'})
    axios.get('http://petapi.haoduoshipin.com/shops')
      .then(res => this.props.dispatch({type:'ALLSHOP',shop:res.data.shops}))
  }
  render(){
    return (
      <div>
        <div className='home-header'>
          <div><Position/></div>
          <div><Link to="search"><i className="iconfont">&#xe635;</i>请输入商家、商品名</Link></div>
        </div>
        <div>
          <p style={{lineHeight:'0.3rem',paddingLeft:'0.2rem'}}>商家</p>
          <ul className="shopList">
            {
              this.props.allshop.length ? this.props.allshop.map(item => {
                return (
                  <li key={item._id} style={{background:'#fff',marginBottom:'0.08rem'}}>
                    <Link to={{ pathname: `/${item._id}/commodity`, title: item.name }}>
                      <div><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3011329581,2931078622&fm=117&gp=0.jpg" alt="img"/></div>
                      <p>{item.name}</p>
                      <i className="iconfont">&#xe603;</i>
                    </Link>
                  </li>
                )
              }) : null
            }
          </ul>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  allshop:state.allshop
})
export default connect(mapStateToProps)(Home)
