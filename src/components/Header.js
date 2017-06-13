import React from 'react';
import '../css/header.css'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Header extends React.Component{
  render() {
    let pSty = {
      lineHeight:'0.5rem',
      margin:'0 auto'
    }
    return(
      <div className="header">
        <p>返回</p><p style={pSty}>{this.props.headerval}</p>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  headerval:state.headerval
})
export default connect(mapStateToProps)(withRouter(Header))
