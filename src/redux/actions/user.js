import axios from 'axios'

const sub_signinfo = (signinfo) =>(
  dispatch => {
    axios.post('http://petapi.haoduoshipin.com/user/signup',signinfo)
      .then(res => {
        dispatch({type:'CURRENTUSER',currentUser:{username:signinfo.username,userid:res.data.userId}})
        dispatch({type:'SHOW_LIST',boolean:false})
        dispatch({type:'CANCEL'})
        localStorage.petpetgoid = JSON.stringify(res.data.userId)
        dispatch({type:'SHOW_SIGN',showVal:'登录'})
      })
      .catch(err => alert('用户名重复，请重新注册'))

  }
)

export {sub_signinfo}


const Login = (signinfo) =>(
  dispatch => {
    axios.post('http://petapi.haoduoshipin.com/user/signin',signinfo)
      .then(res => {
        dispatch({type:'CURRENTUSER',currentUser:{username:signinfo.username,userid:res.data.userId}})
        dispatch({type:'SHOW_LIST',boolean:false})
        dispatch({type:'CANCEL'})
        localStorage.petpetgoid = JSON.stringify(res.data.userId)
      })
      .catch(err => alert('密码错误，请核对后重试'))
  }
)

export {Login}
