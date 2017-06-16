import React from 'react';

class ExitHint extends React.Component{
  render(){
    let largeDiv = {
      background:'rgba(0,0,0,0.5)',
      position:'fixed',
      top:0,bottom:0,left:0,right:0
    }
    let middleDiv = {
      width:'80%',
      height:'1.2rem',
      background:'#fff',
      position:'absolute',
      top:0,bottom:0,left:0,right:0,
      margin:'auto',
      borderRadius:'4px',
      textAlign:'center'
    }
    let pSty = {
      margin:'0.14rem 0.2rem',
      lineHeight:'0.22rem'
    }
    let smallDiv = {
      width:'49.99%',
      float:'left',
      borderTop:'1px solid #ccc',
      lineHeight:'0.48rem',
      color:'#0fc3ae'
    }
    return (
      <div style={largeDiv}>
        <div style={middleDiv}>
          <p style={pSty}>{this.props.val}</p>
          <div>
            <div style={{...smallDiv,borderRight:'1px solid #ccc'}} onClick={()=>this.props.ensure()}>确定</div>
            <div style={smallDiv} onClick={()=>this.props.cancel()}>取消</div>
          </div>
        </div>
      </div>
    )
  }
}
export default ExitHint
