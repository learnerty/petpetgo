import React from 'react';
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import store from '../redux/store'
import { shoptitle,getcommodity,getcats,emptyCom,changeQuantity,emptyshopcart,switchCats } from '../redux/actions/commodity.js'
import '../css/Commodity.css'
class Commodity extends React.Component{
  constructor(){
    super()
    this.state={
      show:false
    }
  }
  componentWillMount(){
    let title = this.props.history.location.title
    if(title){
        localStorage.petgotitle = JSON.stringify(title)
    }
    if(localStorage.petgotitle){
      this.props.shoptitle(JSON.parse(localStorage.petgotitle))
    }
    if(!sessionStorage.getItem(`${this.props.match.params.id}`)){
      sessionStorage.setItem(`${this.props.match.params.id}`,"[]")
    }
    if(!sessionStorage.getgoshops){
      sessionStorage.getgoshops = JSON.stringify([this.props.match.params.id])
    }else{
      let get = JSON.parse(sessionStorage.getgoshops)
      let index
      for(let i=0;i<get.length;i++){
        if(get[i]===this.props.match.params.id){
          index = i;
        }
      }
      if(!index){
        sessionStorage.getgoshops = JSON.stringify([...get,this.props.match.params.id])
      }
    }
    sessionStorage.setItem('getgoshop',[this.props.match.params.id])
    this.props.getcommodity(this.props.match.params.id,this.props.commoditys)
    this.props.getcats(this.props.match.params.id)

  }
  componentWillUnmount(){
    this.props.emptyCom()
  }
  changeQuantity(num,id){
    store.dispatch({type:'ALTER_NUMBER',num,id})
    setTimeout(()=>{
      this.props.changeQuantity(num,this.props.match.params.id,this.props.commoditys,this.props.total,this.props.shoppingCart)
      if(this.props.total===0){
        this.setState({show:false})
      }
    })
  }
  switchCats(item){
    this.props.switchCats(item)
  }

  render(){
    let shoppingNum = 0
    if(this.props.shoppingCart.length){
      this.props.shoppingCart.forEach(item=> shoppingNum+=item.num)
    }
    return (
      <div className="commoditys">
        <ul className="cats">
          {
            this.props.cats.map(item => {
              return <li key={item._id} onClick={this.switchCats.bind(this,item)} className={item.name===this.props.currentCat.name? 'currentCatSty' : null}>{item.name}</li>
            })
          }
        </ul>
        {
          this.props.cats.length ?
          <ul className="comm_list">
            <p>{this.props.currentCat.name}</p>
            {
              this.props.commoditys.map(item => (
                item.cat ? (
                  item.cat===this.props.currentCat.id ? (
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
                  ) : null
                ) : null
              ))
            }
          </ul> : <div className="notfound"><p>很抱歉，店家未提供商品</p></div>
        }

        {
          this.state.show && this.props.total ?
          <div className="shoppingCart">
            <div className="shoppingNum" style={{top:'-0.54rem'}}>{shoppingNum}</div>
            <i className="iconfont" style={{color:'#ffd300'}} onClick={()=>this.setState({show:false})}>&#xe63c;</i>
            <div>
              <p><span onClick={()=>{
                this.props.emptyshopcart()
                sessionStorage.setItem(`${this.props.match.params.id}`,"[]")
                this.setState({show:false})
              }}>
                <i className="iconfont">&#xf0002;</i>清空购物车</span>
              </p>
              {
                this.props.shoppingCart.length ?
                <ul>
                  {
                    this.props.shoppingCart.map(item => {
                      return <li key={item._id}>
                        <span>{item.name}</span>
                        <span className="iconL">
                          <span>￥{item.price}</span>
                          {item.num>0? <i className="iconfont" onClick={this.changeQuantity.bind(this,-1,item._id)}>&#xe665;</i> : null}
                          {item.num>0? <i>{item.num}</i> : null}
                          <i className="iconfont" onClick={this.changeQuantity.bind(this,1,item._id)}>&#xe600;</i>
                        </span>
                      </li>
                    })
                  }
                </ul> : null
              }
            </div>
          </div> : null
        }
        {
          this.props.total ?
          <div className="commfooter">
            <div className="shoppingNum">{shoppingNum}</div>
            <i className="iconfont" style={{color:'#ffd300'}} onClick={()=>this.setState({show:true})}>&#xe63c;</i>
            <span style={{lineHeight:'0.5rem',color:'red',fontSize:'0.18rem'}}>￥{this.props.total}</span>
            <Link to={{pathname:'/order/preview',shopid:this.props.match.params.id}}><span style={{float:'right',lineHeight:'0.5rem',padding:'0 0.3rem',background:'#ffd300'}}>去结算</span></Link>
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
  shoppingCart:state.shoppingCart,
  cats:state.cats,
  currentCat:state.currentCat
})
export default withRouter(connect(mapStateToProps,{shoptitle,getcommodity,getcats,emptyCom,changeQuantity,emptyshopcart,switchCats})(Commodity))
