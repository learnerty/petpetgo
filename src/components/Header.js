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
    let divSty = {
      height:'0.5rem',
      width:'0.5rem',
      position:'absolute'
    }
    let pathname = this.props.location.pathname
    return(
      <div className="header">
        {pathname!=='/' && pathname!=='/order' && pathname!=='/my' ? <div style={divSty} onClick={this.fallback.bind(this)}><svg viewBox="0 0 1024 1024"><path fill="#707070" d="M742.027465 949.495122c12.501732-12.494569 13.233396-31.835056 2.048659-43.724851l-376.067075-376.095727c-16.138562-15.310707-16.075117-19.304671 0-35.384905L744.076124 118.260427c11.217483-11.862165 10.453073-31.229259-2.048659-43.729967-12.720719-12.721743-32.570813-13.422707-44.399209-1.630127l-417.744289 417.715637c-5.145184 5.146207-7.447623 11.857049-7.862062 18.763342l0 5.239328c0.448208 6.935969 2.750647 13.618159 7.862062 18.763342l417.715637 417.714613C709.456652 962.8902 729.336422 962.188212 742.027465 949.495122L742.027465 949.495122zM742.027465 949.495122" /></svg></div> : null}
        <p style={pSty}>{this.props.headerval}</p>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  headerval:state.headerval
})
export default connect(mapStateToProps)(withRouter(Header))
