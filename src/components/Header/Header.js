import React from 'react'
import { Link } from 'react-router-dom'
import * as classNames from 'classnames/bind'
import axios from 'axios'
import styles from './Header.scss'

import logo from 'assets/logo.svg'
import search from 'assets/search.svg'

const cx = classNames.bind(styles)

class Header extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      search: ''
    }
    this.onSearch = this.onSearch.bind(this)
  }

  onSearch = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  onClick = () => {
    axios.post('/content/search',{
      "q": this.state.searsh
    })
    .then(res => console.log(res))
  }

  render(){
    return(
      <header className={cx('header')} >
        <Link to='/'>
          <img src={logo} alt=""/>
        </Link>
        <div>
          <ul>
            <li>
              <Link>HOME</Link>
            </li>
            <li>
              <Link>ABOUT</Link>
            </li>
            <li>
              <Link>SIGN IN</Link>
            </li>
            <li>
              <input type="text" onChange={(e) => this.onSearch(e)} /> 
              <img src={search} alt="" onClick={() => this.onClick()}/>
            </li>
          </ul>
        </div>
      </header>
    )
  }
}

export default Header;