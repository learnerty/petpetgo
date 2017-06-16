import React from 'react';
import { connect } from 'react-redux'
import axios from 'axios'
import img from '../img/kangaroo.ad18ec6c.png'
class HeadPortrait extends React.Component{
  componentWillMount(){
    axios.get(`https://api.github.com/users/${this.props.auth}`)
      .then(res => {
        this.props.dispatch({type:'GITHUB_HEADPORTRAIT',headpPortrait:res.data.avatar_url})
      })
      .catch(err => console.log(err))
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
          <img src={headpPortrait ? headpPortrait : img} alt='img' style={imgSty}/>
        </div>
        <h4 style={{textAlign:'center'}}>{this.props.auth}</h4>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  auth:state.auth,
  headpPortrait:state.headpPortrait
})
export default connect(mapStateToProps)(HeadPortrait)
