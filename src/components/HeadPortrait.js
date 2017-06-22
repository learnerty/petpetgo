import React from 'react';
import { connect } from 'react-redux'
import { headpor } from '../redux/actions/user.js'
import img from '../img/kangaroo.ad18ec6c.png'
class HeadPortrait extends React.Component{
  componentWillMount(){
    this.props.headpor(this.props.auth.username)
  }
  render(){
    let divSty = {
      borderRadius:'50%',
      width:'0.6rem',
      height:'0.6rem',
      overflow:'hidden',
      margin:'0 auto'
    }
    let imgSty = {
      width:'0.6rem',
      height:'0.6rem',
      margin:0,
      display:'block'
    }
    let headpPortrait = this.props.headpPortrait
    return (
      <div style={{paddingTop:'0.1rem'}}>
        <div style={divSty}>
          <img src={headpPortrait ? headpPortrait : "http://xs01.meituan.net/waimai_i/img/kangaroo.ad18ec6c.png"} alt='img' style={imgSty}/>
        </div>
        <h4 style={{textAlign:'center'}}>{this.props.auth.username}</h4>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  auth:state.auth,
  headpPortrait:state.headpPortrait
})
export default connect(mapStateToProps,{headpor})(HeadPortrait)
