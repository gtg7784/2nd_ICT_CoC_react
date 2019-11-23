import React from 'react'
import * as classNames from 'classnames/bind'
import axios from 'axios'
import styles from './Main.scss'

import typo from 'assets/typo.svg'
import cam from 'assets/cam.svg'
import arrow from 'assets/arrow.svg'

import Modals from 'components/Modals/Modals'

const cx = classNames.bind(styles)

// const list = [
//   ['https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png', '서울시 강서구 화곡로 8'],
//   ['https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png', '서울시 강서구 화곡로 8'],
//   ['https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png', '서울시 강서구 화곡로 8'],
//   ['https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png', '서울시 강서구 화곡로 8'],
//   ['https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png', '서울시 강서구 화곡로 8'],
//   ['https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png', '서울시 강서구 화곡로 8'],
//   ['https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png', '서울시 강서구 화곡로 8'],
//   ['https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png', '서울시 강서구 화곡로 8'],
//   ['https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png', '서울시 강서구 화곡로 8'],
//   ['https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png', '서울시 강서구 화곡로 8'],
//   ['https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png', '서울시 강서구 화곡로 8'],
// ]

class Main extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      data: [],
      category: "01",
      isShow: false
    }

    this.fileInput = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount(){
    if(sessionStorage.length === 0){
      return null
    } else {
      axios.post('/mainpage', {})
      .then(res => {
        this.setState({
          data: res.data.detail
        })
        console.log(this.state.data)
      })
    }
  }
  
  // onChangeCategory = () => {
  //   switch (this.state.category) {
  //     case "01":
  //       axios.post('/mainpage', {})
  //       .then(res => {
  //         this.setState({
  //           data: res.data.detail
  //         })
  //         console.log(this.state.data)
  //       })
  //       break;

  //     case "02":
  //     axios.post('/mainpage', {})
  //     .then(res => {
  //       this.setState({
  //         data: res.data.detail
  //       })
  //       console.log(this.state.data)
  //     })
    
  //     default:
  //       break;
  //   }
  // }


  handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Selected file - ${this.fileInput.current.files[0].name}`)

    if(this.fileInput.current.files[0].name.length === 0){
      alert('파일을 업로드해주세요.')
    } else {
      this.setState({
        isShow: true
      })
    }
  }

  render(){
    return(
      <React.Fragment>
        {this.state.isShow ? <Modals /> : null}
        <div className={cx('Main')}>
          <div>
            <div>
              <img src={typo} alt=""/>
              <h1>안전하고 쾌적한 하수도를 만듭니다.</h1>
            </div>
            <div>
              <label for="file">
                <img src={cam} alt=""/>
              </label> <input type="file" id="file" ref={this.fileInput} />
              <button onClick={(e) => this.handleSubmit(e)}>업로드</button>
            </div>
          </div>
          <div>
            <h1>기존 등록된 데이터 </h1>
            <div>
              <select>
                <option value="01">모두</option>
                <option value="02">관천공</option>
                <option value="03">관파손</option>
                <option value="04">균열</option>
                <option value="05">연결관돌출</option>
                <option value="06">연결관접합</option>
                <option value="07">이음부결함</option>
                <option value="08">토사퇴적</option>
              </select>
              <img src={arrow} alt=""/>
            </div>
          </div>
          <div>
            {
              this.state.data.map((data, i) => (
                <div key={i}>
                  <div style={{backgroundImage: `url(data:image/jpeg;base64,${data.location})`}}/>
                  <p>{data.title}</p>
                </div>
              ))
            }
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Main;