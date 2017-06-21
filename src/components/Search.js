import React from 'react';
import { connect } from 'react-redux'
import '../css/search.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import notFoundImg from '../img/kangaroo.ad18ec6c.png'
class Search extends React.Component{
  constructor(){
    super()
    this.state = {
      focus:false,
      val:'',
      history:[]
    }
    this.search = this.search.bind(this)
  }
  componentWillMount(){
    this.props.dispatch({type:'CHANGEHEADERVSL',headerval:'搜索'})
    if (!localStorage.searchhistory) {
      localStorage.searchhistory = JSON.stringify([])
    }else{
      this.setState({history:JSON.parse(localStorage.searchhistory)})
    }
  }
  history(){
    if(this.input.value){
      if(localStorage.searchhistory.length){
        let searchhistory =JSON.parse(localStorage.searchhistory)
        let index
        for(let i=0;i<searchhistory.length;i++){
          if(searchhistory[i]===this.input.value){
            index = i
          }
        }
        if(index){
          searchhistory.splice(index,1)
        }
        localStorage.searchhistory = JSON.stringify([this.input.value,...searchhistory])
        this.setState({history:[this.input.value,...searchhistory]})
      }else{
        localStorage.searchhistory = JSON.stringify([this.input.value])
        this.setState({history:[this.input.value]})
      }

    }else{
      alert('请输入店铺或商品名称')
    }
  }
  search(){
    let sea = {key:this.input.value.trim()}
    this.input.value ? this.setState({focus:true}) : this.setState({focus:false})
    if(sea.key){
      this.setState({val:sea.key})
      axios.post('http://petapi.haoduoshipin.com/shop/search',sea)
      .then(res => this.props.dispatch({type:'SEARCHGOOD',commodity:res.data.shops}))
    }else{
      this.props.dispatch({type:'SEARCHGOOD',commodity:''})
      this.setState({val:''})
    }
  }
  handleClickLi(item){
    this.input.value=item
    this.search()
    this.input.focus()
    let searchhistory =JSON.parse(localStorage.searchhistory)
    let index
    for(let i=0;i<searchhistory.length;i++){
      if(searchhistory[i]===this.input.value){
        index = i
      }
    }
    let del = searchhistory.splice(index,1)
    localStorage.searchhistory = JSON.stringify([...del,...searchhistory])
    this.setState({history:[...del,...searchhistory]})
  }

  render(){
    let shop = this.props.shop
    var sRex = this.state.val
    var reg = new RegExp(sRex,'g')
    return (
      <div>
        <div className="search">
          <i className="iconfont">&#xe635;</i>
          <input placeholder="输入商家、商品名" onChange={this.search} ref={input => this.input=input}/>
          {this.state.focus ? <i className="iconfont" onClick={()=> {
            this.input.value=''
            this.setState({focus:false,val:''})
            this.props.dispatch({type:'SEARCHGOOD',commodity:''})
          }}>&#xe642;</i> : null}
          <button onClick={this.history.bind(this)}>搜索</button>
        </div>
        {
          this.state.history.length && !this.state.val ?
          <div className="history">
            <p>历史记录</p>
            <ul>
              {
                this.state.history.map(item => {
                  return (
                    <li key={Math.random()*Math.random()} onClick={this.handleClickLi.bind(this,item)}>
                      <i className="iconfont">&#xe60c;</i>
                      <p>{item}</p>
                    </li>
                  )
                })
              }
            </ul>
            <div onClick={()=>{
              localStorage.searchhistory = JSON.stringify([])
              this.setState({history:''})
            }}>清除历史记录</div>
          </div> : null
        }

        <ul className="shopList">
          {
            shop.length ? shop.map(item => {
              return (
                <li key={item._id}>
                  <Link to={{ pathname: `/commodity/${item._id}`, title: item.name }} onClick={()=>{
                    this.props.dispatch({type:'SEARCHGOOD',commodity:''})
                    this.history()
                  }}>
                    <div><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3011329581,2931078622&fm=117&gp=0.jpg" alt="img"/></div>
                    <p dangerouslySetInnerHTML={{__html: item.name.replace(reg,`<span>${this.state.val}</span>`)}} />
                    <i className="iconfont">&#xe603;</i>
                  </Link>
                </li>
              )
            }) : this.state.val ?
            <div className="notFound">
              <img src={notFoundImg} alt="img" />
              <p>没有找到相关的商家或商品</p>
            </div> : null
          }
        </ul>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  shop:state.shop
})
export default connect(mapStateToProps)(Search)
