import React from 'react';
import Footer from './footer'
import Header from './Header'
import Home from './Home'
import Order from './Order'
import Search from './Search'
import My from './My'
import Address from './user/Address'
import Commodity from './Commodity'
import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import axios from 'axios'
import 'antd/dist/antd.css';
import '../css/App.css'
class App extends React.Component{
  componentWillMount(){
    if (!localStorage.petpetgoid) {
      localStorage.petpetgoid = JSON.stringify([])
    }else if(JSON.parse(localStorage.petpetgoid).length){
      let userid = JSON.parse(localStorage.petpetgoid)[0];
      axios.get(`http://petapi.haoduoshipin.com/user/${userid}`)
        .then(res => this.props.dispatch({type:'CURRENTUSER',currentUser:res.data.user.username}))
    }
  }
  render(){
    return (
      <div>
        <BrowserRouter>
          <div className="wrap">
            <Header/>
            <div className="main">
              <Route exact path="/" component={Home}/>
              <Route path="/my" component={My}/>
              <Route path="/order" component={Order}/>
              <Route path="/search" component={Search}/>
              <Route path="/user/address" component={Address}/>
              <Route path="/:id/commodity" component={Commodity}/>
            </div>
            <Footer/>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null)(App)
