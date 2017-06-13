import React from 'react';

import Footer from './footer'
import Header from './Header'
import Home from './Home'
import Order from './Order'
import My from './My'
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
    console.log(this.props);
    return (
      <div>
        <BrowserRouter>
          <div className="wrap">
            <Header/>
            <div className="main">
              <Route exact path="/" component={Home}/>
              <Route path="/my" component={My}/>
              <Route path="/order" component={Order}/>
            </div>
            <Footer/>

          </div>
        </BrowserRouter>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  auth:state.auth
})
export default connect(mapStateToProps)(App)
