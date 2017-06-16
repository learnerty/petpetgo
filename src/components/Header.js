import React from 'react';
import '../css/header.css'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Header extends React.Component{
  fallback(){
    this.props.history.goBack()
  }
  render() {
    let pSty = {
      lineHeight:'0.5rem',
      margin:'0 auto'
    }
    let iSty = {
      lineHeight:'0.5rem',
      width:'0.5rem',
      textAlign:'center',
      position:'absolute'
    }
    let pathname = this.props.location.pathname
    return(
      <div className="header">
        {pathname!=='/' && pathname!=='/order' && pathname!=='/my' ? <i className="iconfont" style={iSty} onClick={this.fallback.bind(this)}>&#xe60e;</i> : null}
        <p style={pSty}>{this.props.headerval}</p>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  headerval:state.headerval
})
export default connect(mapStateToProps)(withRouter(Header))
