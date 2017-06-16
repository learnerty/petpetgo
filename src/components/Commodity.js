import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import '../css/Commodity.css'
class Commodity extends React.Component{
  componentWillMount(){
    this.props.dispatch({type:'CHANGEHEADERVSL',headerval:'...'})
    axios.get('http://petapi.haoduoshipin.com/products')
      .then(res => {
        let commoditys = res.data.products.map(item => ({...item,num:0}))
        this.props.dispatch({type:'COMMODITY',commoditys})
      })
  }
  changeQuantity(num,id){
    this.props.dispatch({type:'ALTER_NUMBER',num,id})
    setTimeout(()=>{
      let total = 0
      let shoppingCart = this.props.commoditys.filter(item => item.num>0)
      shoppingCart.forEach(item => total+=item.price*item.num)
      this.props.dispatch({type:'COMM_TOTAL',total})
      this.props.dispatch({type:'SHOPPINGCART',shoppingCart})
    })
  }
  shoppingCart(num,id){
    this.changeQuantity(num,id)
    console.log(this.props.shoppingCart);
  }
  render(){
    // console.log(this.props.history.location.title);
    let shoppingNum = 0
    if(this.props.shoppingCart.length){
      this.props.shoppingCart.forEach(item=> shoppingNum+=item.num)
    }
    return (
      <div>
        <ul className="comm_list">
          {
            this.props.commoditys.map(item => {
              return (
                <li key={item._id} className="clearfix">
                  <img src={item.poster} alt='img'/>
                  <h4>{item.name}</h4>
                  <p>
                    <span style={{color:'red'}}>￥{item.price}</span>
                    <span className="iconL">
                      {item.num>0? <i className="iconfont" onClick={this.changeQuantity.bind(this,-1,item._id)}>&#xe665;</i> : null}
                      {item.num>0? <i>{item.num}</i> : null}
                      <i className="iconfont" onClick={this.changeQuantity.bind(this,1,item._id)}>&#xe600;</i>
                    </span>
                  </p>
                </li>
              )
            })
          }
        </ul>
        <div className="shoppingCart">
          <div>
            <p><i className="iconfont">&#xf0002;</i><span>清空购物车</span></p>
            {
              this.props.shoppingCart.length ?
              <ul>
                {
                  this.props.shoppingCart.map(item => {
                    return <li key={item._id}>
                      <span>{item.name}</span>
                      <span className="iconL">
                        <span>￥{item.price}</span>
                        {item.num>0? <i className="iconfont" onClick={this.shoppingCart.bind(this,-1,item._id)}>&#xe665;</i> : null}
                        {item.num>0? <i>{item.num}</i> : null}
                        <i className="iconfont" onClick={this.shoppingCart.bind(this,1,item._id)}>&#xe600;</i>
                      </span>
                    </li>
                  })
                }
              </ul> : null
            }
          </div>
        </div>
        {
          this.props.total ?
          <div className="commfooter">
            <div className="shoppingNum">{shoppingNum}</div>
            <i className="iconfont" style={{color:'#ffd300'}}>&#xe63c;</i>
            <span style={{lineHeight:'0.5rem',color:'red',fontSize:'0.18rem'}}>￥{this.props.total}</span>
            <span style={{float:'right',lineHeight:'0.5rem',padding:'0 0.3rem',background:'#ffd300'}}>去结算</span>
          </div> :
          <div className="commfooter">
            <i className="iconfont">&#xe63c;</i>
            <span style={{lineHeight:'0.5rem'}}>购物车空空如也～</span>
            <span style={{float:'right',lineHeight:'0.5rem',padding:'0 0.3rem',background:'#ccc'}}>去结算</span>
          </div>
        }
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  commoditys:state.commoditys,
  total:state.total,
  shoppingCart:state.shoppingCart
})
export default connect(mapStateToProps)(withRouter(Commodity))
