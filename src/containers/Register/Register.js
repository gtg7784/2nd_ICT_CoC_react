import React, { Component } from 'react'
import axios from 'axios'
import * as classNames from 'classnames/bind'

import styles from './Register.scss'

import icon from 'assets/icon.svg'

const cx = classNames.bind(styles)
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            pw: '',
            name: '',
            pw2: ''
        };

        this.onChangeId = this.onChangeId.bind(this)
        this.onChangePw = this.onChangePw.bind(this)
        this.onChangeName = this.onChangeName.bind(this)
        this.onChangePw2 = this.onChangePw2.bind(this)
        this.onRegister = this.onRegister.bind(this)
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
    
      onChangeName = (e) => {
        this.setState({
          name: e.target.value
        })
      }
    
      onChangePw2 = (e) => {
        this.setState({
          pw2: e.target.value
        })
      }

      onRegister = async () => {    
        await axios.post('/auth/signup', {
          "id": this.state.id,
          "password": this.state.pw,
          "password2": this.state.pw2,
          "name": this.state.name
        })
        .catch(err => {
          console.log(err.response.data);
          alert('아이디 또는 비밀번호가 잘못되었습니다.')
        })
        .then(res => {
          console.log(res)
          window.location.replace('/')
        })
      }

    render() {        
        return (
          <div className={cx('Register')}>
            <img src={icon} alt=""/>
            <h1>SIGN UP</h1>
            <div>
              <div>
                <label htmlFor="">이름</label>
                <input type="text" onChange={(e) => this.onChangeName(e)} />
                <label htmlFor="">비밀번호</label>
                <input type="text" onChange={(e) => this.onChangePw(e)} />
              </div>
              <div>
                <label htmlFor="">아이디</label>
                <input type="text" onChange={(e) => this.onChangeId(e)} />
                <label htmlFor="">비밀번호 확인</label>
                <input type="text" onChange={(e) => this.onChangePw2(e)} />
              </div>
            </div>
            <button onClick={() => this.onRegister()}>SIGN UP</button>
          </div>
        )
    }
}

export default Register