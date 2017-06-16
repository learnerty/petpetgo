import React from 'react';
import { connect } from 'react-redux'
import SignForm from './signForm'
class Sign extends React.Component{
  constructor(){
    super()
    this.state={
      signUp:true
    }
  }
  signClick(bool,str){
    this.setState({
      signUp:bool
    })
    this.props.dispatch({type:'SHOW_SIGN',showVal:str})
  }
  render(){
    return (
      <div>
        <div className="sign clearfix">
          <div className={this.state.signUp ? "signSty" : null} onClick={this.signClick.bind(this,true,'登录')}>
            <p>登录</p>
            {this.state.signUp ? null : <p style={{borderBottom:'1px solid #ccc'}}></p> }
          </div>
          <div className={this.state.signUp ? null : "signSty"} onClick={this.signClick.bind(this,false,'注册')}>
            <p>注册</p>
            {this.state.signUp ? <p style={{borderBottom:'1px solid #ccc'}}></p> : null}
          </div>
        </div>
        <SignForm/>
      </div>
    )
  }
}

export default connect(null)(Sign)
