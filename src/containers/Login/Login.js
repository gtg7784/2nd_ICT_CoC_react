import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import * as classNames from 'classnames/bind'

import styles from './Login.scss'

import icon from 'assets/icon.svg'

const cx = classNames.bind(styles)
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            pw: ''
        };

        this.onChangeId = this.onChangeId.bind(this)
        this.onChangePw = this.onChangePw.bind(this)
        this.onLogin = this.onLogin.bind(this)
      }
    
      onChangeId = (e) => {
        this.setState({
          id: e.target.value
        })
      }
    
      onChangePw = (e) => {
        this.setState({
          pw: e.target.value
        })
      }

      onLogin = async () => {    
        await axios.post('/auth/signin', {
          "id": this.state.id,
          "password": this.state.pw
        })
        .catch(err => {
          console.log(err.response.data);
          alert('아이디 또는 비밀번호가 잘못되었습니다.')
        })
        .then(res => {
          console.log(res)
          if(res && res.status === 200){
            sessionStorage.setItem(
              "userInfo",
              "logined"
            )
            window.location.replace('/')
          }
        })
      }

    render() {        
        return (
          <div className={cx('Login')}>
            <img src={icon} alt=""/>
            <h1>LOGIN</h1>
            <input type="text" placeholder="ID" onChange={(e) => this.onChangeId(e)} />
            <input type="text" placeholder="PW" onChange={(e) => this.onChangePw(e)} />
            <button onClick={() => this.onLogin()}>LOGIN</button>
            <Link to="/signup">Do not have account?</Link>
          </div>
        )
    }
}

export default Login