import React from 'react';
import '../css/my.css'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Sign from './sign'
import ExitHint from './ExitHint'
import HeadPortrait from './HeadPortrait'
class My extends React.Component{
  state = {
    exit:false
  }
  componentWillMount(){
    this.props.dispatch({type:'CHANGEHEADERVSL',headerval:'我的'})
  }
  headerClick(){
    this.setState({exit:!this.state.exit})
  }
  ensure(){
    this.setState({exit:!this.state.exit})
    this.props.dispatch({type:'CURRENTUSER',currentUser:''})
    this.props.dispatch({type:'GITHUB_HEADPORTRAIT',headpPortrait:''})
    localStorage.removeItem('petpetgoid')
  }
  render(){
    return (
      <div className={this.props.auth ? "ucenter" : null} style={{width:'100%'}}>
        {
          this.props.auth ?
          <div>
            <div className="ucenter-username">
              <HeadPortrait/>
            </div>
            <ul className="ucenter-content">
              <li><Link to="/user/address"><i className="iconfont">&#xe602;</i><span>收货地址管理</span><i className="iconfont">&#xe603;</i></Link></li>
              <li><i className="iconfont">&#xe613;</i><span>商家代金券</span><i className="iconfont">&#xe603;</i></li>
              <li><i className="iconfont">&#xe61a;</i><span>意见反馈</span><i className="iconfont">&#xe603;</i></li>
              <li><i className="iconfont">&#xe624;</i><span>常见问题</span><i className="iconfont">&#xe603;</i></li>
              <li><i className="iconfont">&#xe649;</i><span>客服电话</span></li>
            </ul>
            {this.state.exit ? <ExitHint cancel={this.headerClick.bind(this)} ensure={this.ensure.bind(this)} val='退出后将无法查看当前订单，确定退出吗？'/> : null}
            <div onClick={this.headerClick.bind(this)} className="ucenter-exit">退出登录</div>
          </div> :
          <Sign/>
        }

      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  auth:state.auth,
  headpPortrait:state.headpPortrait
})
export default connect(mapStateToProps)(My)
