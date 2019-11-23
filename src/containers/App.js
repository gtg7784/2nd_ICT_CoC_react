import React from 'react';
import { Switch, Route } from 'react-router-dom'
import * as classnames from 'classnames/bind'
import axios from 'axios'

import styles from './App.scss';

import Header from 'components/Header/Header'

import Main from 'containers/Main/Main'
import Login from 'containers/Login/Login'
import Register from 'containers/Register/Register'

const cx = classnames.bind(styles)

class App extends React.Component {
  constructor(props){
    super(props);

    axios.defaults.baseURL = 'http://funnyga.me:14104/v1/';
    axios.defaults.timeout = 10000;
    axios.defaults.headers.common['Accept'] = '*/*';
  }
  
  render(){
    return (
      <div className={cx('App')}>
        <Header />
        <Switch>
          <Route path='/' exact component={Main}/>
          <Route path='/signin' exact component={Login}/>
          <Route path='/signup' exact component={Register}/>
          {/* <Route component={NotFound}/> */}
        </Switch>
      </div>
    );
  }
}

export default App;
