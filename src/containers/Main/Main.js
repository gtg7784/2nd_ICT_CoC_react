import React, {useCallback} from 'react'
import * as classNames from 'classnames/bind'
import axios from 'axios'
import styles from './Main.scss'

import typo from 'assets/typo.svg'
import cam from 'assets/cam.svg'
import arrow from 'assets/arrow.svg'

const cx = classNames.bind(styles)

const list = [
  ['https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png', '서울시 강서구 화곡로 8'],
  ['https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png', '서울시 강서구 화곡로 8'],
  ['https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png', '서울시 강서구 화곡로 8'],
  ['https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png', '서울시 강서구 화곡로 8'],
  ['https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png', '서울시 강서구 화곡로 8'],
  ['https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png', '서울시 강서구 화곡로 8'],
  ['https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png', '서울시 강서구 화곡로 8'],
  ['https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png', '서울시 강서구 화곡로 8'],
  ['https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png', '서울시 강서구 화곡로 8'],
  ['https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png', '서울시 강서구 화곡로 8'],
  ['https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png', '서울시 강서구 화곡로 8'],
]

class Main extends React.Component{
  componentDidMount(){
    axios.post('/mainpage', {})
    .then(res => console.log(res))
  }

  render(){
    return(
      <div className={cx('Main')}>
        <div>
          <div>
            <img src={typo} alt=""/>
            <h1>안전하고 쾌적한 하수도를 만듭니다.</h1>
          </div>
          <div>
            <div>
              <img src={cam} alt=""/>
            </div>
            <button>하수도 정보 등록하기</button>
          </div>
        </div>
        <div>
          <h1>기존 등록된 데이터 </h1>
          <div>
            <select>
              <option value="01">관천공</option>
              <option value="02">관파손</option>
              <option value="03">균열</option>
              <option value="04">연결관돌출</option>
              <option value="05">연결관접합</option>
              <option value="06">이음부결함</option>
              <option value="07">토사퇴적</option>
            </select>
            <img src={arrow} alt=""/>
          </div>
        </div>
        <div>
          {
            list.map((data, i) => (
              <div key={i}>
                <div style={{backgroundImage: `url(${data[0]})`}}/>
                <p>{data[1]}</p>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default Main;