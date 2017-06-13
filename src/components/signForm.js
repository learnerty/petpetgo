import React from 'react';
import { connect } from 'react-redux'
import { sub_signinfo, Login } from '../redux/actions/user.js'
import '../css/signup.css'
class SignForm extends React.Component{
  handleSubmit(e){
    e.preventDefault()
    let signinfo ={username:this.username.value,password:this.password.value}
      if(this.props.signBtn.signBtn === '注册'){
        this.props.sub_signinfo(signinfo)
      }else{
        this.props.Login(signinfo)
      }
      this.form.reset()
  }

  render(){
    console.log(this.props);
    return (
      <div className="clearfix signup">
        <form onSubmit={this.handleSubmit.bind(this)} ref={form => this.form=form}>
          <input type='text' placeholder="用户名" ref={input => this.username=input}/>
          <input type='password' placeholder="密码" ref={input => this.password=input}/>
          <button type="submit">{this.props.signBtn.signBtn}</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  userid:state.userid,
  signBtn:state.signBtn
})

export default connect(mapStateToProps,{sub_signinfo,Login})(SignForm)
