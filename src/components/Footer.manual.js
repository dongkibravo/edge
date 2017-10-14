import React, {Component} from 'react';

import Rogo from '../static/aka_logo-13.png';

class FooterManual extends Component {
  render() {
    return (
      <div className="row">
        <div id="footer_logo" className="col-md-2 col-xs-12 ">
          <a href="http://akaintelligence.com">
            <img src={Rogo} alt="goto musio/home" />
          </a>
        </div>
        <div id="footer_copyright" className="col-md-10 col-xs-12">
          <span id="copyright_text">
            ⓒ COPYRIGHT 2016. ALL RIGHTS RESERVED.
          </span>
          <span id="copyright_link">
            <br className="visible-xs visible-sm visible-md"/>
            ｜
            <a href="https://themusio.com/agreement">利用規約</a>
            <br className="visible-xs"/>
            ｜
            <a href="https://themusio.com/rule">特定商取引法に基づく表示</a>
            <br className="visible-xs"/>
            ｜
            <a href="https://themusio.com/privacy">プライバシーポリシー</a>
          </span>
        </div>
      </div>
    );
  }
}

export default FooterManual;
